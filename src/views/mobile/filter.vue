<template>
    <div>
        <div class="top" >
            <i class="el-icon-close" @touchstart="jumpHome"></i>
            Sort & Filter
        </div>
        <FilterList></FilterList>
    </div>
</template>

<script>
// @ is an alias to /src
import FilterList from '@/mobileComponents/filterListCp.vue'

export default {
  name: 'Filter',
  data: function() {
    return {
      value: null,
      cityList: [
      ],
      isLoading: false,
    }
  },
  components: {
      FilterList
  },
  methods: {
      jumpHome() {
          this.$router.push('/home');
      }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mobileCommon.scss';

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
</style>