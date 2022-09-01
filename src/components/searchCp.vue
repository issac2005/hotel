<template>
    <div class="component-wrap">
        <el-input prefix-icon="el-icon-search" clearable v-model="input" placeholder="Singapore, Singapore" @clear="getCityData" @focus="getCityData"></el-input>
        <el-input prefix-icon="el-icon-date" placeholder="Jul 19  –  Jul 20"></el-input>
        <el-input placeholder="2 adults, 0 children, 1 room"></el-input>
        <el-button type="primary">Search</el-button>
        <div class="suggestion" v-if="suggestionShow">
            <div class="data-loading" v-if="cityList.length == 0"><i class="el-icon-loading"></i></div>
            <ul class="city-list">
                <li v-for="city of cityList" @click="getHotelList(city)">
                    <i class="el-icon-location-outline"></i>{{city.label}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getCities, getHotels} from '@/api'
import pubsub from 'pubsub-js'

export default {
  name: 'search',
  data: function() {
      return {
          cityList: [],
          input: '',
          suggestionShow: false,
      }
  },
  mounted() {
    this.getHotelList({cityCode: 'sgsg'});

    document.addEventListener('click', () => {
        if (this.suggestionShow && this.cityList && this.cityList.length > 0) {
            this.suggestionShow = false;
            this.cityList = [];
        }
    }, false);
  },
 
  methods: {
      // 获取城市列表数据
      getCityData() {
        if (this.input && this.input.length !== 0) return; 
        this.suggestionShow = true;
        getCities().then(res => {
            try {
                this.cityList = res;
            } catch(e) {
                console.log('数据返回错误')
            }
        })
        .catch(e => {console.log(e)});
    },

    // 查询该城市下的酒店信息
    getHotelList(city) {
        this.suggestionShow = false;
        this.input = city.label;
        this.cityList = [];

        getHotels(city.cityCode).then(res => {
            console.log(res)
            if (res && res.outlets) {
                this.pubishHotelData = pubsub.publish('hotelList', res);
            } else {
                this.$message({type: 'error', message: '数据返回错误'})
            }
        })
        .catch(e => {console.log(e);this.pubishHotelData = pubsub.publish('hotelList', 'error');});


    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/common.scss';
/deep/ .el-input {
    width: auto;

    &:nth-child(1) {
        width: 470px;
    }

    &:nth-child(2),
    &:nth-child(3) {
        width: 250px;
    }

    .el-input__icon{
        font-weight: bold;
        color: $fontGrey;
    }


    .el-input__inner{
        height: 50px;
    }
}

/deep/ .el-button{
    width: 150px;
    height: 50px;
    background: $blue;
}
.component-wrap{
    display: flex;
    justify-content: space-between;
    position: relative;

    .suggestion {
        width: 470px;
        padding: 10px;
        background: #FFFFFF;
        border: 1px solid #DDDDDD;
        border-radius: 3px;
        position: absolute;
        top: 55px;
        box-sizing: border-box;

        .data-loading{
            text-align: center;
        }

        .city-list{
            li {
                font-size: 14px;
                margin-bottom: 20px;
                cursor: pointer;

                &:last-child{
                    margin:0;
                }

                i {
                    margin-right: 10px;
                    color: $fontGrey;
                }
            }
        }
    }

}
    
</style>