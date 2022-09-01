<template>
  <div class="home">
    <Top></Top>
    <Search ref="search" :isFixed="isFixed"></Search>
    <div :class="{searchHold: true, hide: !isFixed}"></div>
    <div class="main">
      <Left></Left>
      <Right></Right>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/views/pc/search.vue'
import Top from '@/views/pc/top.vue'
import Left from '@/views/pc/left.vue'
import Right from '@/views/pc/right.vue'
import Bottom from '@/components/bottomCp.vue'

export default {
  name: 'HomeView',
  data: function() {
    return {
      isFixed: false
    }
  },
  components: {
    Search,
    Top,
    Left,
    Right,
    Bottom
  },
  mounted() {
    document.body.addEventListener('scroll', () => {
      this.$nextTick(function() {
        let top = document.body.scrollTop;
        if (top >= 60) {
          this.isFixed = true;
        } else {
          this.isFixed = false;
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/common.scss';

.main {
  @include layout;
  @include flex;
}

.searchHold{
  height: 70px;

  &.hide {
    display: none;
  }
}
</style>
