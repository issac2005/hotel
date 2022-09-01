<template>
    <div class="filter-bar">
        <el-button type="primary" :plain="popularityPlain" @click="popularityClick">Popularity</el-button>
        <el-dropdown>
            <el-button type="primary" :plain="pricePlain" @click="priceClick">
                Price (lowest first)<i class="el-icon-caret-bottom"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Price (highest first)</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-button type="primary" :plain="reviewsPlain" @click="reviewsClick">Reviews</el-button>
        <el-button type="primary" :plain="discountPlain" @click="discountClick">Discount</el-button>
    </div>
</template>   

<script>

export default {
  name: 'FilterBar',
  data: function() {
      return {
          popularityPlain: false, 
          reviewsPlain: true, 
          discountPlain: true, 
          pricePlain: true,
      }
  },
  components: {
  },

  methods: {
      popularityClick() {
          this.popularityPlain = false;
          this.reviewsPlain = true;
          this.discountPlain = true;
          this.pricePlain = true;
      },

      reviewsClick() {
          this.popularityPlain = true;
          this.reviewsPlain = false;
          this.discountPlain = true;
          this.pricePlain = true;
      },

      discountClick() {
          this.popularityPlain = true;
          this.reviewsPlain = true;
          this.discountPlain = false;
          this.pricePlain = true;
      },

      priceClick() {
          this.popularityPlain = true;
          this.reviewsPlain = true;
          this.discountPlain = true;
          this.pricePlain = false;
      }
  }
  
}
</script>

<style lang="scss" scoped>
@import '@/assets/common.scss';
.filter-bar{
        @include flex;
        height: 44px;
        border-radius: 5px;
        margin-bottom: 15px;

        & > *{
            width: 25%;
        }

        .el-button{
            color: $fontLightGrey;
            border: none;
            border-right: 1px solid #ddd;
            border-radius: 0;
            

            &:nth-child(1) {
                border-radius: 5px 0 0 5px;
            }

            &:nth-child(4) {
                border-radius: 0 5px 5px  0;
                border: none;
            }

            &.is-active{
                background: $deepBlue;
            }
        }

        .el-button--primary.is-plain{
            background: $white;
            color: $fontLightGrey;
        }

        .el-button--primary{
            background-color: $deepBlue;
            color: $white;
        }

        .el-button+.el-button, 
        .el-checkbox.is-bordered+.el-checkbox.is-bordered {
            margin:0;
        }

        .el-dropdown {
            .el-button{
                width: 100%;
                height: 44px;
                border-radius: 0;
            }

            .el-dropdown-menu{
                width: 100%;
            }
        }
    }
</style>

