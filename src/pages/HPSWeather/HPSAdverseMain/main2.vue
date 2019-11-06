<template>
  <div>
    <div class="content-box">
      <div style="color:#fff;font-size:35px;font-weight:700;padding-top:10px;">{{num}}</div>
      <div style="color:#fff;font-size:14px;font-weight:700;">全国极端天气数</div>
    </div>
    <!-- 天气 -->
    <nav>
      <div class="nav-title">
        <div class="nav-header" :style="{'background-color': this.rain > 0 ?`#70BD52`:`#D4D4D4`}">
          <div :style="{'background-image': this.rain > 0 ?`url('static/icon/fontweather/rain1.png')`:`url('static/icon/fontweather/rain2.png')`}" class="photo">
          </div>
          强雨</div>
        <div :style="{'background-color': this.rain > 0 ?`#9FD08C`:`#E4E4E4`}">
          <p class="p_wgrade_lb">总预警量:</p>
          <p class="p_wgrade_lb">红色一级:</p>
          <p class="p_wgrade_lb">橙色一级:</p>
          <p class="p_wgrade_lb">橙色二级:</p>
        </div>
      </div>
      <div class="nav-title">
        <div class="nav-header" style="background:#FCB159">强风</div>
        <div style="background:#FAC688">
          <p class="p_wgrade_lb">总预警量:</p>
          <p class="p_wgrade_lb">红色一级:</p>
          <p class="p_wgrade_lb">橙色一级:</p>
          <p class="p_wgrade_lb">橙色二级:</p>
        </div>
      </div>
      <div class="nav-title">
        <div class="nav-header" style="background:#AE4CC2">冰雹</div>
        <div style="background:#BF77CE">
          <p class="p_wgrade_lb">总预警量: 1</p>
          <p class="p_wgrade_lb">红色一级: 2</p>
          <p class="p_wgrade_lb">橙色一级: 3</p>
          <p class="p_wgrade_lb">橙色二级: 4</p>
        </div>
      </div>
    </nav>
    <nav>
      <div class="nav-title">
        <div class="nav-header" style="background:#70BD52">强雨</div>
        <div style="background:#9FD08C">
          <p class="p_wgrade_lb">总预警量: 1</p>
          <p class="p_wgrade_lb">红色一级: 2</p>
          <p class="p_wgrade_lb">橙色一级: 3</p>
          <p class="p_wgrade_lb">橙色二级: 4</p>
        </div>
      </div>
      <div class="nav-title">
        <div class="nav-header" style="background:#FCB159">强风</div>
        <div style="background:#FAC688">
          <p class="p_wgrade_lb">总预警量: 1</p>
          <p class="p_wgrade_lb">红色一级: 2</p>
          <p class="p_wgrade_lb">橙色一级: 2</p>
          <p class="p_wgrade_lb">橙色二级: 3</p>
        </div>
      </div>
      <div class="nav-title">
        <div class="nav-header" style="background:#AE4CC2">冰雹</div>
        <div style="background:#BF77CE">
          <p class="p_wgrade_lb">总预警量: 1</p>
          <p class="p_wgrade_lb">红色一级: 2</p>
          <p class="p_wgrade_lb">橙色一级: 3</p>
          <p class="p_wgrade_lb">橙色二级: 4</p>
        </div>
      </div>
    </nav>
    <nav>
      <div class="nav-title">
        <div class="nav-header" style="background:#70BD52">强雨</div>
        <div style="background:#9FD08C">
          <p class="p_wgrade_lb">总预警量: 1</p>
          <p class="p_wgrade_lb">红色一级: 2</p>
          <p class="p_wgrade_lb">橙色一级: 2</p>
          <p class="p_wgrade_lb">橙色二级: 3</p>
        </div>
      </div>
      <div class="nav-title">
        <div class="nav-header" style="background:#FCB159">强风</div>
        <div style="background:#FAC688">
          <p class="p_wgrade_lb">总预警量:</p>
          <p class="p_wgrade_lb">红色一级:</p>
          <p class="p_wgrade_lb">橙色一级:</p>
          <p class="p_wgrade_lb">橙色二级:</p>
        </div>
      </div>
      <div class="nav-title">
        <div class="nav-header" style="background:#D4D4D4;border:0"></div>
        <div style="background:#E4E4E4; height:76px">
          <p class="p_wgrade_lb"></p>
          <p class="p_wgrade_lb"></p>
          <p class="p_wgrade_lb"></p>
          <p class="p_wgrade_lb"></p>
        </div>
      </div>
    </nav>
    <!-- 区域统计 -->
    <div>
      <div class="statistics">
        全国受极端天气影响地区统计
      </div>
      <van-collapse v-model="activeNames" style="text-align:left;">
        <van-collapse-item title="北京市(2)" name="1">
          <van-row style="padding-bottom:10px">
          <van-col span="8">北京市(2)</van-col>
          <van-col span="8">北京市(2)</van-col>
          <van-col span="8">北京市(2)</van-col>
          </van-row>
           <van-row>
          <van-col span="8">北京市(2)</van-col>
         
          </van-row>
        </van-collapse-item>
        <van-collapse-item title="北京市(2)" name="2">

        </van-collapse-item>
        <van-collapse-item title="北京市(2)" name="3">

        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 56,
      rain: 1,
      activeNames: ['1']
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang="less">
 .van-collapse-item__title {
   background-color: #DBDBDB;
 }
</style>

<style scoped lang="less">
.photo {
  top:20px;
  width: 40px;
  height: 40px;
  display: inline-block;
  background-size: 100%;
  position: absolute;
  top: 10px;
  left: 40px;
}
.content-box {
  width: 100%;
  height: 150px;
  background-image: linear-gradient(#08f0cf, #458ce3, #910dfc);
  text-align: center;

  // line-height: 150px;
}
p {
  margin: 0;
  padding: 0;
}
nav {
  display: flex;
  justify-content: center;
}
.nav-title {
  flex: 33%;
  // flex: 1 0 auto;
  box-sizing: border-box;
  border: 1px solid #797979;
  .nav-header {
    height: 60px;
    background-color: #fff;
    line-height: 60px;
    color: #fff;
    font-size: 32px;
    position: relative;
    border-right: 1px solid #797979;
  }
  .p_wgrade_lb {
    font-size: 28px;
    padding-left: 40px;
    text-align: left;
    border-right: 1px solid #797979;
  }

}
.statistics {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  background-color: #33CCCC;
  box-sizing: border-box;
  border: 1px solid #797979;
  border-top : 0;
}
</style>
