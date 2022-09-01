<template>
    <div class="right-container">
        <p class="result">Singapore: 9999 properties found</p>
        <FilterBar/>
        <div class="hotel-list">
            <Skeleton v-if="isLoading && !isLost"></Skeleton>
            <HotelItem v-for="item of hotelListData" v-bind="item" />

            <div class="noData" v-if="hotelListData.length == 0 && !isLost">
                <i class="el-icon-search"></i>
                <p>Sorry! We couldn't find any properties for your search.</p>
            </div>

            <div class="noData" v-if="isLost && !isLoading">
                <i class="el-icon-warning-outline"></i>
                <p>Opps, something went wrong.</p>
                <span>error message here</span>
            </div>
        </div>
    </div>
</template>

<script>
import FilterBar from '@/views/pc/filterBar.vue'
import HotelItem from '@/components/hotelItemCp.vue'
import Skeleton from '@/components/skeleton.vue'
import pubsub from 'pubsub-js'

export default {
  name: 'Right',
  data: function() {
      return {
          subHotelListData: null,
          hotelListData: [],
          isLost: false,
          isLoading: true,
      }
  },
  components: {
      FilterBar,
      HotelItem,
      Skeleton
  },

  mounted() {
      this.subHotelListData = pubsub.subscribe('hotelList', (msg, data) => {
          if (data == 'error') {
              this.isLost = true
              this.hotelListData = [];
          }
         
          if (data.outlets && data.outlets.availability && data.outlets.availability.results) {
              this.hotelListData = data.outlets.availability.results;
              this.isLost = false;
              this.isLoading = false;
          }
      })
  },
  destroyed() {
      pubsub.unsubscribe(this.subHotelListData);
      this.hotelListData = [];
  },

  methods: {
      
  }
  
}
</script>

<style lang="scss" scoped>


.right-container{
    flex: 1;
    margin-left: 16px;

    .result{
        font-size: 16px;
        color: #000;
        margin-bottom: 15px;
    }

    .noData{
        font-size: 16px;
        padding-top: 50px;
        text-align: center;
        color: #757575;
        i {
            font-size: 20px;
            font-weight: bold;
        }
        span{
            font-size: 12px;
        }
    }
}

</style>