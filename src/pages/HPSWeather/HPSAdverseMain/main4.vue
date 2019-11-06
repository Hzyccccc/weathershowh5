<template>
  <div>
    <div class="conter-one">
      <div class="time">
        <div class="time-hs" v-text="dd.tm"></div>
        <div class="time-ht">
          <p v-text="dd.wk"></p>
          <p v-text="dd.dt"></p>
        </div>
        <div class="time-title" @click="backHome()">| 返回</div>
      </div>
      <!-- 大风 -->
      <nav>
        <div class="nav-img" style="background-image: url('static/icon/wtype/fog3.png');"></div>
        <h1>黄色一级大风</h1>
      </nav>
      <!-- 地区信息 -->
      <main>
        <p>省份:江苏省</p>
        <p>地点: 徐州市台塑产业园西北约130米附近</p>
        <p>危险: 道路横风，减速慢行</p>
        <p>发生时间: 20:30</p>
        <p>已经持续时间: 48min</p>
      </main>
      <!-- 地图 -->
      <div class="map1">
        <div class="mapB-one" ref="basicMapbox"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { map, init } from "api/data/HPSWeather/map";
export default {
  data() {
    return {
      dd: {
        dt: "",
        tm: "",
        wk: ""
      }
    };
  },
  created() {
    this.newTime();
  },
  mounted() {
    init(this);
  },
  methods: {
    backHome() {
      this.$router.replace({ path: "/main3" });
    },
    newTime() {
      this.dd.dt = this.formatDate(new Date(), "yyyy年MM月dd日");
      this.dd.tm = this.formatDate(new Date(), "hh:mm");
      this.dd.wk = "星期" + "日一二三四五六".charAt(new Date().getDay());
      console.log(this.dd);
    },
    formatDate(date, fmt) {
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }
      const o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
      };
      function padLeftZero(str) {
        return ("00" + str).substr(str.length);
      }
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + "";
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1 ? str : padLeftZero(str)
          );
        }
      }
      return fmt;
    }
  }
};
</script>
<style scoped lang="less">
@import "https://api.tiles.mapbox.com/mapbox-gl-js/v1.3.1/mapbox-gl.css";
.conter-one {
    height: 100%;
    width: 100%;
}

  .mapB-one {
    width: 100%;
    height: 60%;
    position: absolute;
  
}
.time {
  position: fixed;
  left: 0px;
  height: 100px;
  border-top: 2px solid #1f71f6;
  width: 100%;
  background-color: #398dfd;
  .time-hs {
    float: left;
    height: 100%;
    font-size: 50px;
    font-weight: 600;
    color: #fff;
    line-height: 100px;
    padding-left: 20px;
  }
  .time-ht {
    float: left;
    // height: 100%;
    font-size: 24px;
    box-sizing: border-box;
    color: #d6e7ff;
    text-align: left;
    padding-left: 20px;
    padding-top: 20px;
  }
  .time-title {
    height: 100%;
    float: right;
    box-sizing: border-box;
    padding-right: 20px;
    width: 160px;
    line-height: 100px;
    font-size: 50px;
    color: #fff;
    vertical-align: bottom;
  }
}
p {
  margin: 0;
  padding: 0;
}
nav {
  padding-top: 100px;
  width: 100%;
  height: 200px;
  background-color: #d7d7d7;
  display: flex;
  // justify-content: space-around;
  .nav-img {
    height: 180px;
    width: 200px;
    margin-top: 20px;
    margin-left: 10px;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  h1 {
    padding-left: 150px;
    line-height: 150px;
    font-size: 50px;
  }
}
main {
  width: 100%;
  height: 190px;
  background-color: #e4e4e4;
  padding-left: 10px;
  text-align: left;
  p {
    padding-top: 5px;
  }
}
</style>