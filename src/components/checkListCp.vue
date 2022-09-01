<template>
    <div class="checklist-wrap">
        <div class="title">{{title}}<span>CLEAR</span></div>
        <ul class="checkList">
            <el-checkbox-group v-model="checkList">
                <li v-for="(item, i) of showData">
                    <el-checkbox :label="item">
                        <template v-if="!isRate">{{item}}</template>
                        <template v-if="isRate && item"> 
                            <el-rate
                                :value="item"
                                disabled
                                >
                            </el-rate>
                        </template>
                        <template v-if="isRate && item == 0">
                            No rate
                        </template>
                    </el-checkbox>
                    <span>999</span>
                </li>
            </el-checkbox-group>
        </ul>

        <div class="show-btn" @click="showClick" v-if="toggleSlide">
            <div v-if="!showAllData">
                Show {{this.data.length - this.showCount}} more
                <i class="el-icon-caret-bottom"></i>
            </div>
            <div v-if="showAllData">
                Show less 
                <i class="el-icon-caret-top"></i>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
  name: 'checkList',
  data: function() {
      return {
          checkList: [],
          showCount: null,
          showData: [],
          showAllData: false,
          value: 5
      }
  },
  props: {
      title: String,
      data: Array,
      showAll: Boolean,
      toggleSlide: Boolean,
      isRate: Boolean,
      defaultChecked: Array,
      showNum: Number,
  },
  mounted() {
    this.checkList = this.defaultChecked;
    this.showAllData = this.showAll;
    if (this.showAllData) {
        this.showData = this.data;
    } else {
        this.showCount = this.showNum;
        this.showData = this.data.slice(0, this.showCount);
    }
    
  },
  methods: {
      showClick() {
          this.showAllData = !this.showAllData;
          if (this.showAllData) {
              this.showData = this.data;
          } else {
              this.showData = this.data.slice(0, this.showCount);
          }
      }
  }
}
</script>


<style lang="scss" scoped>
@import '@/assets/common.scss';
.checklist-wrap{
    @include box;

    .checkList li {
        
        color:$fontLightGrey;

        span{
            font-size: $fontSize12;
            color: $fontGrey;
            float: right;
        }

        /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, 
        /deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner{
            background-color: $deepBlue;
            border-color: $deepBlue;
        }

        /deep/ .el-checkbox__label{
            font-size: $fontSize12;
        }
        /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
            
            color:$fontLightGrey
        }
    }

    .show-btn{
        padding-top: 5px;
        font-size: $fontSize12;
        color:$deepBlue;
        cursor: pointer;

        i{
            font-size: $fontSize12;
        }
    }

}

</style>