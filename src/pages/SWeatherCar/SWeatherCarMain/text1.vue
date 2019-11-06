<template>
  <div class="content-box">
    <van-button
      round
      type="info"
      class="btm"
      style=""
      @click="tagPopup()"
    >查看灾害地区</van-button>
    <van-popup v-model="show" round position="bottom" :style="{ height: '40%' }">
      <van-picker :columns="columns" @change="onChange" />
      <van-button round type="info" size="large" style="width:60%;" @click="tagNoPopup()">确认</van-button>
    </van-popup>
    <div class="mapB">
      <div class="mapB-one" ref="basicMapbox"></div>
    </div>
    <nav>
      <div :style="{'background-image': this.rain?`url('static/icon/weather/bigrain1.png')`:`url('static/icon/weather/bigrain2.jpg')`}" @click="TagRain()"></div>
      <div :style="{'background-image': this.wind?`url('static/icon/weather/bigwind1.png')`:`url('static/icon/weather/bigwind2.png')`}" @click="TagWind()"></div>
      <div :style="{'background-image': this.hail?`url('static/icon/weather/hail1.png')`:`url('static/icon/weather/hail2.png')`}" @click="TagHail()"></div>
      <div :style="{'background-image': this.snow?`url('static/icon/weather/bigsnow1.png')`:`url('static/icon/weather/bigsnow2.png')`}" @click="TagSnow()"></div>
      <div :style="{'background-image': this.fog?`url('static/icon/weather/bigfog1.png')`:`url('static/icon/weather/bigfog2.png')`}" @click="TagFog()"></div>
      <div :style="{'background-image': this.dust?`url('static/icon/weather/sanddust1.png')`:`url('static/icon/weather/sanddust2.png')`}" @click="TagDust()"></div>
      <div :style="{'background-image': this.freeze?`url('static/icon/weather/freeze1.png')`:`url('static/icon/weather/freeze2.png')`}" @click="TagFreeze()"></div>
      <div :style="{'background-image': this.typhoon?`url('static/icon/weather/typhoon1.png')`:`url('static/icon/weather/typhoon2.png')`}" @click="TagTyphoon()"></div>
    </nav>
  </div>
</template>

<script>
let citys = {
  浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
  福建: ["福州", "厦门", "莆田", "三明", "泉州"]
};
import { map, init } from "api/data/HPSWeather/map";
export default {
  data() {
    return {
      show: false,
      // 按钮组颜色变换变量
      rain: true,
      wind: true,
      hail: true,
      snow: false,
      fog: false,
      dust: false,
      freeze: false,
      typhoon: false,
      columns: [
        {
          values: Object.keys(citys),
          className: "column1"
        },
        {
          values: citys["浙江"],
          className: "column2",
          defaultIndex: 2
        }
      ]
    };
  },
  mounted() {
    this.todetail();
  },
  methods: {
    // 查看受灾天气
    tagPopup() {
      this.show = true;
    },
    // 受灾地区选中
    onChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
      console.log(picker);
      console.log(values);
    },
    // 确认受灾地区
    tagNoPopup() {
      this.show = false;
    },
    // 地图
    todetail() {
      console.log(this);
      init(this);
    },
    // 八大天气-雨
    TagRain() {
      if (this.rain) {
        this.rain = false
      }else {
        this.rain = true
      }
    },
    // 八大天气-风
    TagWind() {
      if (this.wind) {
        this.wind = false
      }else {
        this.wind = true
      }
    },
    // 八大天气-雪
    TagHail() {
      if (this.hail) {
        this.hail = false
      }else {
        this.hail = true
      }
    },
    TagSnow(){
      if (this.snow) {
        this.snow = false
      }else {
        this.snow = true
      }
    },
    TagFog() {
      if (this.fog) {
        this.fog = false
      }else {
        this.fog = true
      }
    },
    TagDust(){
      if (this.dust) {
        this.dust = false
      }else {
        this.dust = true
      }
    },
    TagFreeze() {
      if (this.freeze) {
        this.freeze = false
      }else {
        this.freeze = true
      }
    },
    TagTyphoon() {
      if (this.typhoon) {
        this.typhoon = false
      }else {
        this.typhoon = true
      }
    }
  },

  computed: {}
};
</script>

<style scoped lang="less">
@import "https://api.tiles.mapbox.com/mapbox-gl-js/v1.3.1/mapbox-gl.css";
.btm {
width:200px;
height:50px;
position:fixed;
 top:210px; 
 left:10px;
 z-index:9999
}
.content-box {
  // padding-top:200px;
}
.mapB {
  width:100%;
  height:100%;
  position:relative;
  // padding-top:100px
  
}
.mapB-one {
    width:100%;
    height: 100%;
    position: absolute;
  }
  nav {
    position: fixed;
    top: 500px;
    right: 20px;
    width: 60px;
    
    div {
      width: 60px;
      height:60px;
      // background-color: #fff;
      margin-top:10px;
      background-size: 100%
    }
  }

</style>
<style lang="less" >
  .mapboxgl-ctrl-bottom-left {
    bottom: 200px;
  }
  // .mapboxgl-ctrl-top-right {
  //   bottom: 0;
  //   right: 0;
  //   display: inline-block;
  //   width:300px;
  // }
</style>
