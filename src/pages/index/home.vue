<template>
  <div class="content-box" id="no-move">
    <van-button
      round
      type="info"
      class="btm"
      style=""
      @click="tagPopup()"
    >查看灾害地区</van-button>
    <mt-popup v-model="show" position="bottom" :style="{ width: '100%' }">   
      <mt-picker :slots="slots" value-key="label" @change="onValuesChange" :style="{ width: '49%'}" style="display: inline-block "></mt-picker>
      <mt-picker :slots="slots1" value-key="label" @change="onValuesChange1" :style="{ width: '49%'}" style="display: inline-block "></mt-picker>
      <van-button round type="info" size="large" style="width:60%;margin:10px; 0" @click="tagNoPopup()">确认</van-button>
    </mt-popup>
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
import { ADRESS } from 'api/assets/js/addressData';
import { map, init } from "api/data/HPSWeather/map";
export default {
  data() {
    return {
      slots: [
          {
            flex: 1,
            defaultIndex: 1,
            values: ADRESS, //省份数组
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }],
          slots1: [
          {
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'center'
          }],
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
    };
  },
  mounted() {
    this.todetail();
  },
  methods: {
    onValuesChange(picker, values) { 
      if(values[0] && values[0].children != undefined){  
          this.slots1[0].values = []
        for(var key in values[0].children) {
            this.slots1[0].values.push(values[0].children[key]);
        }
      }
    
    },
    onValuesChange1(picker, values) {
       console.log('=====');
      console.log(values[0]);
      console.log('=====');
      
      
    },
    // 查看受灾天气
    tagPopup() {
      this.show = true;
    },
    // 确认受灾地区
    tagNoPopup() {
      this.show = false;
    },
    // 地图
    todetail() {
      document.getElementById('no-move').style.overflow='hidden'
      document.getElementById('no-move').scrollTop=0;
      // document.body.style.overflow='hidden'
      console.log(this.slots);
      console.log(ADRESS);
      
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
 top:220px; 
 left:10px;
 z-index:9999
}
.content-box {
  padding-top:200px;
  box-sizing: border-box;
}
.mapB {
  display: flex;
  flex: 0 1 auto;
  width: 100%;
  height: 100%;
  position:relative;
  // padding-top:100px
  
}
.mapB-one {
  width: 100%;
  height: 100%;
    flex: 0 1 auto;
    position: absolute;
  }
  nav {
    position: fixed;
    top: 300px;
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
  // .mapboxgl-ctrl-bottom-left {
  //   // bottom: 200px;
  // }
  // .mapboxgl-ctrl-top-right {
  //   bottom: 0;
  //   right: 0;
  //   display: inline-block;
  //   width:300px;
  // }
</style>
