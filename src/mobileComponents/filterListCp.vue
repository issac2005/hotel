<template>
<div class="filter-wrap"> 
    <CheckList v-bind="filterData.reviews" />
    <CheckList v-bind="filterData.rate" />
    <CheckList v-bind="filterData.reservation" />
    <CheckList v-bind="filterData.meal" />
    <CheckList v-bind="filterData.property" />
    <CheckList v-bind="filterData.facilities" />
    <div class="btn-wrap">
        <el-button>Clear</el-button>
        <el-button type="primary">Filter</el-button>
    </div>
    <div class="btn-wrap-hold"></div>
</div>
</template>

<script>
import CheckList from '@/mobileComponents/checkListCp.vue'


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
@import '@/assets/mobileCommon.scss';
.filter-wrap {
    position: relative;

    .btn-wrap{
        width: 100%;
        height: $size60;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 999;
        border-top: 1px solid #ddd;
        background: #fff;
        @include flex;
        justify-content: space-around;
        align-items: center;


        .el-button{
            flex: 1;
            margin: 0 0.9rem;
            height: $size40;
            padding: 0;
            background: $deepBlue;


            &:nth-child(1) {
                margin-right: 0;
                background: none;
                border-color: $deepBlue;
            }
        }
    }
    .btn-wrap-hold{
        height: $size60;
    }
}


.price,
.hotel {
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


