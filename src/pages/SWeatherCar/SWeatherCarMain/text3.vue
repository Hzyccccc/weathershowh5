<template>
  <div class="content-box">
    <!-- <common-header :tittle="tittle" :showback="false"></common-header> -->
    <div class="page-content">
      <van-image
            class="page-image"
            src="static/one.png"
          ></van-image>
      <van-button round type="info" class="page-btn">一键通知</van-button>
    </div>
    <!-- 内容区 -->
    <nav>
      <div class="nav-title">
        <div class="nav-right">
          <van-image
            class="nav-image"
            src="static/mycar.png"
          ></van-image>品牌: 
          <br>
          <van-image
            class="nav-image"
            src="static/carname.png"
          ></van-image>车牌: 
          <br>
          <van-image
            class="nav-image"
            src="static/my.png"
          ></van-image>车主: 
          <!--车主: 王先生-->
          <br>
          <van-image
            class="nav-image"
            src="static/phone.png"
          ></van-image>联系方式：
              
        </div>
        <div class="nav-floot" @click="details()">查看<br/>详情</div>
      </div>
    </nav>
  </div>
</template>

<script>
// import {mapMutations, mapGetters, mapState} from 'vuex'
// import commonHeader from 'common/common-header'
export default {
  data() {
    return {
      rightFromData: [],
      checkWgid: null,
      list: [1, 2, 3],
      // 复选框数据
      switch1: false,
      switch2: false,
      switch3: false,
      value1: 0
    };
  },
  created() {},
  methods: {
    //预警等级确定方法
    onConfirm() {
      this.$refs.item.toggle();
      console.log(this.switch1);
      console.log(this.switch2);
      console.log(this.switch3);
    },
    // 查看详情
    details() {
      console.log(12);
      this.$router.replace({ path: "/text4" });
    }
  }
};
</script>
<style lang="less">
.van-dropdown-menu__title {
  color: #fff;
}
.van-ellipsis {
  height: 15px;
  color: #fff;
  overflow: visible !important;
}
.van-dropdown-menu__item {
  display: flex;
  flex: 0 1 auto;
  width: 90%;
  height: 50px;

  background: #1f69c2;
  line-height: 50px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
<style scoped lang="less">
.page-image {
  width: 70px;
  position: absolute;
  top: 15px;
  left: 180px;
}
.page-btn {
  position: absolute;
  width: 300px;
  background-color: #79ACEA;
  border: 1px solid #79ACEA;
  height: 60px;
  top: 20px;
  left: 270px;
}
.nav-image {
  width: 30px;
  display: inline-block;
  vertical-align: top;
  margin-right:15px;
  padding-top: 1px;
}
.nav-floot {
  font-size: 32px;
  width:auto;
  padding-left:7px;
  padding-right:7px;
  margin:0 5px;
  padding-top: 20px;

  text-align: center;
  border: 1px solid #ccc;
  touch-action: none;
}
p {
  padding:0;
  margin:0;
  padding-top:5px;
}
.nav-title {
  display: flex;
  justify-content: left;
  flex-wrap: nowrap;
  padding-top:5px;
  background-color: #fff;
  width: 100%;
  height: 150px;    
  }
  .nav-right {
    width: 630px;
    text-align: left;
    padding-top:10px;
    padding-left:20px;
    margin-left:5px;
    border: 1px solid #ccc;
  }

.page-yuj {
  height:60px;
  padding-top:20px;
  width:50%;
  position: relative;
}
.page-content {
  height: 100px;
  width: 100%;
  background-color: #3A82EE;
  position: relative;

    
  
}
</style>
