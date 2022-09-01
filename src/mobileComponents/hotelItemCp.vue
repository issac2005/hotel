<template>
    <div class="hotel-item">
        <div class="hotel-image">
            <div class="main-image">
                <img :src="property.heroImage.url">
            </div>
        </div>
        <div class="hotel-info" v-if="property">
            <h3>
                {{property.name}}
                <el-rate
                    :value="property.starRating"
                    disabled
                    >
                </el-rate>
            </h3>
            <h4 v-if="property.location">{{property.location.address}},{{property.location.city}},{{property.location.country}},{{property.location.postalCode}} (<span>view map</span>)</h4>
            <h5 v-if="property.reviews && property.reviews.summary">"{{property.reviews.summary.text}}"</h5>
           

            <div class="hotel-price">
                <div class="price-show">
                    <span class="discount-tag" v-if="discount.isDiscount">SAVE {{discount.rate}}% TODAY!</span>
                    <div class="nightly">Nightly avg.</div>
                    <div>
                        <span class="origin-price" v-if="discount.isDiscount">SGD {{discount.originPrice}}</span>
                        <span class="current-price">SGD {{discount.currentPrice}}</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'FilterBar',
  props: {
      packages: Array,
      payAtHotel: Boolean,
      property: Object,
  },
  data: function() {
      return {
         galleryList: [],
         tagsList: [],
         tagsShowList: [],
         discount: {
             isDiscount: false,
             rate: null,
             originPrice: null,
             currentPrice: null
         }
      }
  },
  created() {
      // 生成大图下图片列表数据
      this.galleryList = this.property.gallery.map(obj => {
          let arr = Object.keys(obj);
          let url = obj[arr[arr.length -1]].url
          return url
      });
      this.galleryList = this.galleryList.slice(0, 4);

      // 生成标签数据及价格折扣
      if (this.packages && this.packages[0]) {
          const packages = this.packages[0];
          // 生成标签数据
          if (packages.foodCode && packages.foodCode !== 1) {
              let res = this.getMealRes(packages.foodCode)
              this.tagsList.push(res);
          }
          if (packages.nonRefundable) {
              this.tagsList.push('Free cancellation');
          }
          // 该属性数据中未找到
          if (packages.payLater) {
              this.tagsList.push('Pay later');
          }
          if (packages.payAtHotel) {
              this.tagsList.push('Pay at hotel');
          }
          // 判断标签是否需要折叠显示
          this.tagsList.length > 2 ?  this.tagsShowList = this.tagsList.slice(0, 2) : this.tagsShowList = this.tagsList;


          // 生成价格及折扣
          if (packages.adjustedDisplayRate 
            && packages.adjustedDisplayRate.value 
            && packages.displayRate
            && packages.displayRate.value) {
                console.log(packages.adjustedDisplayRate.value + '_'+ packages.displayRate.value);
                let current = packages.adjustedDisplayRate.value, origin = packages.displayRate.value;
                if ( current < origin) {
                    this.discount.isDiscount = true;
                    let discout = origin - current;
                    this.discount.rate = Math.round((discout / origin)*100);
                }
                
                this.discount.originPrice = origin;
                this.discount.currentPrice = current;
          }

      } 


  },
  mounted() {
  },
  methods: {
      getMealRes(code) {
          switch(code) {
              case 2: 
                return 'Breakfast'
              break;

              case 3: 
                return 'Lunch'
              break;

              case 4: 
                return 'Dinner'
              break;

              case 5: 
                return 'Half board'
              break;

              case 6: 
                return 'Full board'
              break;

              case 7: 
                return 'All inclusive'
              break;
          }
      }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mobileCommon.scss';

.hotel-item{
    @include flex;
    height: 7.439rem;
    margin-bottom: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    background: $white;

    &:hover{
        box-shadow: 0 0 2px 3px #ddd;
    }

    .hotel-image{
        width: 4.831rem;

        .main-image{
            height: 7.439rem;
            margin-bottom: 2px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    

    }

    .hotel-info{
        flex: 1;
        width: 0;
        padding-left: $fontsize10;
        overflow: hidden;
        position: relative;

        h3 {
            margin: $fontsize10 0 0;
            font-size: $fontsize14;
            color: $fontLightGrey;

            .el-rate{font-size: $fontsize12;}
        }

        h4{
            margin-bottom: 7px;
            font-size: $fontsize10;
            color: $fontLightGrey;
            white-space: pre-wrap;

            span{
                color: $deepBlue;
                cursor: pointer;
            }
        }

        h5 {
            margin-bottom: $fontsize12;
            font-size: $fontsize10;
            color: $fontGrey;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
     
    }

    .hotel-price{
       text-align: right;
        position: absolute;
        right: 0.48rem;
        bottom: 0px;

        .price-show{
            .discount-tag{
                display: inline-block;
                font-size: $fontsize12;
                padding: 0 0.241rem;
                color: $white;
                background: $blue;
            }

            .nightly{
                font-size:$fontsize12;
                color: $fontGrey;
            }

            .origin-price{
                font-size:$fontsize10;
                color: $fontGrey;
                text-decoration: line-through;
            }

            .current-price{
                font-size: $fontsize14;
                font-weight: 700;
                color: $fontLightGrey;
            }
        }

    }
    

}
</style>