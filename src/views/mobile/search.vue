<template>
  <div class="search">
    <div class="top" >
      <i class="el-icon-close" @touchstart="jumpHome"></i>
      Where
    </div>
    <div class="main">
        <el-select v-model="value" filterable @focus="getCityData" placeholder="Singapore, Singapore">
            <el-option value="null" v-if="cityList.length == 0"><i class="el-icon-loading"></i></el-option>
            <el-option
            v-for="item in cityList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-input prefix-icon="el-icon-date"></el-input>
        <el-input></el-input>
        <el-button v-loading="isLoading" type="primary" @click="getHotelData">Search</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {getCities, getHotels} from '@/api'

export default {
  name: 'Search',
  data: function() {
    return {
      value: null,
      cityList: [
      ],
      isLoading: false,
    }
  },
  components: {
  
  },
  mounted() {
  },
  methods: {
    getCityData() {
        getCities().then(res => {
            try {
                this.cityList = res.map(item => {
                    item.value = item.cityCode;
                    return item;
                });
            } catch(e) {
                console.log('数据返回错误')
            }
        })
        .catch(e => {console.log(e)});
    },

    getHotelData() {
        if (!this.value) {
            this.$message({message: 'please select a city', type: 'warning'})
            return;
        }
        this.$router.push({path: '/home', query: {cityCode: this.value}});
    
    },
     jumpHome() {
          this.$router.push('/home');
      }
  }
}

</script>

<style lang="scss" scoped>
@import '@/assets/mobileCommon.scss';
.search{
    height: 100vh;
    background: #fff;
}
.top{
  height: $size55;
  line-height: $size55;
  border-bottom: 1px solid #ddd;
  background: #fff;
  overflow: hidden;
  color:$deepBlue;
  font-size: $fontsize16;
  
  i {
     font-size: $fontsize14; 
     margin-left: $fontsize14;
     margin-right: 1rem;
  }
}

.main{
    padding: 1rem;

    /deep/ .el-input__inner{
        height: $size40;
        margin-bottom: 1rem;
    }

    /deep/ .el-select{
        width: 100%;
        
        .el-input__icon{
            display: none;
        }
    }

    /deep/ .el-button{
        width: 50%;
        height: $size40;
        line-height: $size40;
        padding: 0;
        background: $blue;
    }

    
}



</style>