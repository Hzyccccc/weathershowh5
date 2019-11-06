<template>
  <div class="content-box">
    <!-- <common-header :tittle="tittle" :showback="false"></common-header> -->
    <div class="page-content">
      <span class="page-one">
        <div class="page-one-time">发生时间</div>
      </span>
      <van-dropdown-menu class="page-yuj">
        <van-dropdown-item title="预警等级" ref="item">
          <van-switch-cell v-model="switch1" title="红色一级" />
          <van-switch-cell v-model="switch2" title="橙色一级" />
          <van-switch-cell v-model="switch3" title="橙色二级" />
          <van-button block type="info" @click="onConfirm">确认</van-button>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <!-- 内容区 -->
    <nav>
      <div class="nav-title">
        <div class="nav-left">
          <div class="nav-left-one">
            <van-image src="static/icon/wtype/fog1.png"
          />
          <span style="margin-top:35px">红色一级</span>
          </div>
        </div>
        <div class="nav-right">
            <!-- <p>地点: {{itm.location}}</p>
            <p v-if="itm.objectGrade === '10801'">危险: 车辆泡水，挪车躲避</p>
            <p v-if="itm.objectGrade === '10802'">危险: 刹车缓顿，停车躲避</p>
            <p v-if="itm.objectGrade === '10803'">危险: 视野受限，减速慢行</p>
            <p v-if="itm.objectGrade === '10901'">危险: 道路飓风，挪车躲避</p>
            <p v-if="itm.objectGrade === '10902'">危险: 道路强风，停车躲避</p>
            <p v-if="itm.objectGrade === '10903'">危险: 道路横风，减速慢行</p>
            <p v-if="itm.objectGrade === '11001'">危险: 冰雹一级，挪车躲避</p>
            <p v-if="itm.objectGrade === '11002'">危险: 冰雹二级，停车躲避</p>
            <p v-if="itm.objectGrade === '11003'">危险: 冰雹三级，减速慢行</p>
            <p v-if="itm.objectGrade === '11101'">危险: 道路大雪，挪车躲避</p>
            <p v-if="itm.objectGrade === '11102'">危险: 大雪二级，停车躲避</p>
            <p v-if="itm.objectGrade === '11103'">危险: 大雪三级，减速慢行</p>
            <p v-if="itm.objectGrade === '11201'">危险: 道路大雾，挪车躲避</p>
            <p v-if="itm.objectGrade === '11202'">危险: 大雾二级，停车躲避</p>
            <p v-if="itm.objectGrade === '11203'">危险: 大雾三级，减速慢行</p>
            <p v-if="itm.objectGrade === '11301'">危险: 道路沙尘，挪车躲避</p>
            <p v-if="itm.objectGrade === '11302'">危险: 沙尘二级，停车躲避</p>
            <p v-if="itm.objectGrade === '11303'">危险: 沙尘三级，减速慢行</p>
            <p v-if="itm.timeDiff > 0">预计发生时间: {{itm.occurtime | _formatDate}}</p>
            <p v-if="itm.timeDiff > 0">预计持续时间: 约{{itm.duration}}分钟</p>
            <p v-if="itm.timeDiff <= 0">发生时间: {{itm.occurtime | _formatDate}}</p>
            <p v-if="itm.timeDiff <= 0">已经持续时间: {{itm.timeDiff | _formatDate3}}</p> -->
          <p>地点: 武汉</p>
          <p>危险: 车辆泡水，挪车躲避</p>
          <p>发生时间: 323</p>
          <p>已经持续时间: 1231</p>
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
      this.$router.replace({ path: "/details" });
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
.content-box {
  padding-top:200px;
  box-sizing: border-box;
}
.nav-floot {
  font-size: 34px;
  width:auto;
  padding-left:20px;
  padding-top: 30px;
  text-align: center;
  touch-action: none;
}
p {
  padding:0;
  margin:0;
}
.nav-title {
  display: flex;
  justify-content: left;
  flex-wrap: nowrap;
  padding-top:5px;
  background-color: #ddd;
  width: 100%;
  height: 150px;
  .nav-left {
    width: 140px;
    
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    .nav-left-one {
      display: flex;
    justify-content: center;
    flex-wrap: nowrap;
      position: relative;
      height: 120px;
      border-right: 1px solid #ccc;
      .van-image {
      width: 80px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    }
    
  }
  .nav-right {
    width: 480px;
    text-align: left;
    padding-top:10px;
    padding-left:20px;
    border-right: 1px solid #ccc;
  }
}
.page-yuj {
  height:60px;
  padding-top:20px;
  width:50%;
  position: relative;
}
.page-content {
  height: 80px;
  width: 100%;
  background-color: #fff;
  position: relative;
  .page-one {
    float:left;
    height:70px;
    width:50%; 
    padding-top:10px;
    position: relative;
    .page-one-time {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%,-50%);
    width:90%; 
    height:50px;
    background:#1F69C2;
    text-align:center;
    line-height:50px;
    color:#fff
    }
    
  }
}
</style>
