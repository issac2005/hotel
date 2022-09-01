<template>
    <div class="left-container">
        <div class="map">
            <el-button>Show on map</el-button>
        </div>
 
        <FilterList></FilterList>
    </div>
</template>

<script>
import FilterList from '@/components/filterListCp.vue'

export default {
  name: 'Left',
  data: function() {
      return {
       
      }
  },
  components: {
    FilterList
  }
  
}
</script>


<style lang="scss" scoped>
@import '@/assets/common.scss';

.left-container{
    width: 290px;

    .map{
        height: 100px;
        text-align: center;
        margin-bottom: 7px;
        border-radius: 5px;
        background: url('~@/assets/images/map-bg.jpeg') no-repeat;
        background-size: 100% 100%;

        .el-button {
            width: 170px;
            height: 40px;
            margin-top: 30px;
            color: $white;
            background: $deepBlue;
        }
    }

    

}

</style>