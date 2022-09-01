<template>
  <div class="home">
    <div class="top" >
      <img src="@/assets/images/cloudtravel-logo.jpg" class="logo">
      <img src="@/assets/mImages/menu.png" class="menu">
    </div>
    <div class="search" @touchstart="jumpSearch">
      <i class="el-icon-search"></i>
      <div>
        <p>Singapore, Singapore</p>
        <span>Aug 18 - Aug 19 2 adults, 1 room, 0 children</span>
      </div>
    </div>
    <div class="filter">
      <div @touchstart="jumpFilter">
        <i class="el-icon-s-operation"></i>
        Sort & Filter
      </div>
      <div>
        <i class="el-icon-location-outline"></i>
        Map View
      </div>
    </div>
    <div class="hotel-wrap">
      <Skeleton v-if="isLoading" />
      <div class="noData" v-if="showNoRsult && !isLoading"><!--v-if="showNoRsult == 0 && !isLoading"-->
          <i class="el-icon-search"></i>
          <p>Sorry! We couldn't find any properties for your search.</p>
      </div>

      <div class="noData" v-if="showError && !isLoading">
          <i class="el-icon-warning-outline"></i>
          <p>Opps, something went wrong.</p>
          <span>error message here</span>
      </div>
      <HotelItem v-for="item of hotelListData" v-bind="item" />
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
    <Bottom/>
    <div class="bottom-hold"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HotelItem from '@/mobileComponents/hotelItemCp.vue'
import Bottom from '@/mobileComponents/bottomCp.vue'
import Skeleton from '@/mobileComponents/skeleton.vue'
import {getCities, getHotels} from '@/api'

export default {
  name: 'HomeView',
  data: function() {
    return {
      hotelListData: [],
      subHotelListData: null,
      isLoading: true,
      showNoRsult: false,
      showError: false,
    }
  },
  components: {
    HotelItem,
    Bottom,
    Skeleton
  },
  created() {
    let data = this.$route.query.data;
    let cityCode = this.$route.query.cityCode;
    console.log(this.$route.query)
    if (cityCode == 'sgsg') {
      this.getHotelData();
      // if (data && data.outlets && data.outlets.availability && data.outlets.availability.results) {
      //     this.hotelListData = data.outlets.availability.results;
      //     this.isLost = false;
      //     this.isLoading = false;
      // }
    } else if (cityCode == 'klmy') {
      this.showNoRsult = true;
      this.hotelListData = [];
      this.isLoading = false;
    } else if (cityCode == 'mlph') {
      this.showError = true;
      this.hotelListData = [];
      this.isLoading = false;
    } else {
      this.getHotelData();
    }
    
    
  },
  mounted() {
    document.documentElement.style.fontSize = '5vw';
    
  },
  destroyed() {
      this.hotelListData = [];
  },
  methods: {
    jumpSearch() {
      this.$router.push('/search')
    },

    jumpFilter() {
      this.$router.push('/filter')
    },

    getHotelData() {
      getHotels('sgsg').then(res => {
            this.isLoading = false;
            if (res && res.outlets) {
                this.hotelListData = res.outlets.availability.results;
                this.isLoading = false;
            } else {
                this.$message({type: 'error', message: '数据返回错误'})
            }
        })
        .catch(e => {this.pubishHotelData = pubsub.publish('hotelList', 'error');});
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/assets/mobileCommon.scss';

.top{
  height: 2.898rem;
  border-bottom: 1px solid #ddd;
  background: #fff;
  overflow: hidden;

  .logo{
    width: 8rem;
    margin-top: 0.75rem;
    margin-left: 0.917rem;
  }

  .menu{
    width: 0.905rem;
    margin: 1.05rem 0.95rem 0 0;
    float: right;
  }
}

.search{
  height: $size50;
  padding-left: $fontsize15;
  border-bottom: 1px solid #ddd;
  background: #fff;
  overflow: hidden;
  @include flex;
  align-items: center;

  i{
    font-weight: 700;
    font-size: $fontsize14;
    color: $fontGrey;
  }
  div{
    flex: 1;
    padding-left: $fontsize14;
  }
  p {
    font-size: 0.676rem;
  }

  span{
    font-size: $fontsize12;
    color: $fontLightGrey;
  }
}
.filter{
  height: $size50;
  line-height: $size50;
  font-size: $fontsize14;
  color: $deepBlue;
  @include flex;
  background: #fff;

  div{
    flex: 1;
    text-align: center;

    &:nth-child(1) {
      border-right: 1px solid #DDD;
    }
  }
}
.hotel-wrap{
  padding: 0.48rem;
}
.bottom-hold{
  height: 3.864rem;
}
.noData{
  font-size: $fontsize14;
  color: $fontGrey;
  text-align: center;

  i {
    font-size: 1rem;
  }
}


</style>