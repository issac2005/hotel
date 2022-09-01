<template>
  <div :class="{searchcontainer: true, fixed: isFixed}">
    <div class="inner-search">
        <Search />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import search from '@/views/pc/search.vue'
import Search from '@/components/searchCp.vue'

export default {
  name: 'search',
  props: {
      isFixed: Boolean
  },
  data: function() {
      return {
      }
  },
  components: {
    Search
  },
  
}
</script>

<style lang="scss" scoped>
@import '@/assets/common.scss';
.searchcontainer{
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 16px;
    background: $deepBlue;

    &.fixed{
        position: absolute;
        top: 0;
        left: 0;
        right: 17px;
        z-index: 9999;
    }

    .inner-search{
        width: 1134px;
        margin: 0 auto;
    }
}
</style>
