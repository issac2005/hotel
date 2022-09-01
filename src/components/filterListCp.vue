<template>
<div >
    <div class="price">
        <div class="title">
            Price per night
            <span>CLEAR</span>
        </div>

        <el-slider
        v-model="value"
        range
        :max="500">
        </el-slider>
        <div class="input-wrap">
            <el-input v-model="input1"></el-input>
            <div class="line"></div>
            <el-input v-model="input2"></el-input>
        </div>
    </div>
    <CheckList v-bind="filterData.reviews" />
    <CheckList v-bind="filterData.rate" />
    <div class="hotel">
        <div class="title">
            Hotel name
            <span>CLEAR</span>
        </div>
        <el-input suffix-icon="el-icon-search" v-model="searchKey" placeholder="e.g. Hilton"></el-input>
    </div>
    <CheckList v-bind="filterData.reservation" />
    <CheckList v-bind="filterData.meal" />
    <CheckList v-bind="filterData.property" />
    <CheckList v-bind="filterData.facilities" />
</div>
</template>

<script>
import CheckList from '@/components/checkListCp.vue'


export default {
  name: 'Left',
  data: function() {
      return {
          value: [0, 200],
          input1: 'SGD 0',
          input2: 'SGD 200',
          searchKey: '',
          filterData: {
              reviews: {
                title: 'Reviews',
                data: ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor', 'No review'],
                showAll: true,
                toggleSlide: false,
                defaultChecked: ['Excellent'],
                showNum: 2
            },
            rate: {
                title: 'Reviews',
                data: [5,4,3,2,1,0],
                showAll: true,
                toggleSlide: false,
                defaultChecked: ['Excellent'],
                showNum: 2,
                isRate: true
            },
            reservation: {
                title: 'Reservation policy',
                data: ['Free cancellation', 'Book now, pay later', 'Pay at hotel'],
                showAll: true,
                toggleSlide: false,
                defaultChecked: [],
                showNum: 3
            },
            meal: {
                title: 'Meal plan',
                data: ['Room only', 'Breakfast', 'Lunch', 'Dinner', 'Half board', 'Full board', 'All inclusive'],
                showAll: false,
                toggleSlide: true,
                defaultChecked: [],
                showNum: 2
            },
            property: {
                title: 'Property type',
                data: ['Hotel', 'Hostel/Backpacker accomodation', 'Apartment', 'Aparthotel', 'Resort', 'Inn', 'Motel', 'Bed & breakfast', 'Guesthouse', 'Condo', 'All-inclusive property', 'Hostal' ],
                showAll: false,
                toggleSlide: true,
                defaultChecked: [],
                showNum: 3
            },
            facilities:  {
                title: 'Facilities',
                data: ['Swimming pool', 'Internet access', 'Non-smoking floor'],
                showAll: true,
                toggleSlide: false,
                defaultChecked: [],
                showNum: 3
            },
            
          }
          
      }
  },
  components: {
      CheckList
  }
  
}
</script>

<style lang="scss" scoped>
@import '@/assets/common.scss';
.price,
.hotel {
        @include box;
        /deep/ .el-slider__bar
        {
            background: $blue;
        }
        /deep/ .el-slider__button{
            border-color: $blue;
        }
        /deep/ .el-input{
            width: auto;
        }
        /deep/ .el-input__inner{
            width: 100px;
            height: 30px;
        }
        .line{
            width: 14px;
            height: 1px;
            margin: 0 10px;
            display: inline-block;
            vertical-align: middle;
            background: $fontGrey;
        }
        .input-wrap{
            padding-top:15px;
        }
    }
    .hotel {
        /deep/ .el-input{
            width: 100%;
        }
        /deep/ .el-input__inner{
            width: 100%;
            height: 40px;
        }

         /deep/ .el-input__icon{
            font-weight: bold;
            color: $fontGrey;
        }
    }
</style>


