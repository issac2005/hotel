<template>
  <div class="top">
    <div class="inner-top">
      <img src="@/assets/images/cloudtravel-logo.jpg" width="228" height="35">
      <div class="nav">
        <span>
        English    
          <i class="el-icon-caret-bottom"></i>
        </span>
        <span>
        USD    
          <i class="el-icon-caret-bottom"></i>
        </span>
        <span>
        My Account     
        </span>
        <span>
        Log out    
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/common.scss';
.top{
  background: $white
}
.inner-top{
  width: 1194px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;

  img{
    margin-left: 30px;
  }

  .nav{
    font-size: 16px;

    span{
      display: inline-block;
      margin-left: 16px;
    }
  }

  
}
</style>