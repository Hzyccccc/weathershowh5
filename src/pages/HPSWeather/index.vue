<template>
  <div class="page">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="nav-footer">
      <footer>
        <router-link
          v-for="(item, index) in navList"
          :to="item.path"
          :key="index"
          :class="{'active':activeRoute == item.path}"
        >
          <!-- <div :class="'tab-'+index"></div> -->
          <p
            :class="'tab-'+index"
            v-text="item.name"
            style="width: 40px!important;line-height:40px"
          ></p>
        </router-link>
      </footer>
      <div class="header-user" @click="backLogin()">| {{user}}</div>
    </div>
    <div class="time">
        <div class="time-hs" v-text="dd.tm">

        </div>
        <div class="time-ht">
          <p v-text="dd.wk"></p>
          <p v-text="dd.dt"></p>
        </div>
        <div class="time-title" @click="backHome()">
          <img src="static/image/logo.png" alt="" style="width:100%">
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: "admin",
      navList: [
        {
          path: "/HPSAdverseMain",
          name: "地图"
        },
        {
          path: "/main2",
          name: "统计"
        },
        {
          path: "/main3",
          name: "详情"
        }
      ],
      dd: {
        dt:'',
        tm:'',
        wk:''
      }
    };
  },
  filters: {
        
      },
  created(){
    this.newTime()
  },
  methods: { 
    backHome(){
      this.$router.replace({ path: "/" });
      
      
    },
    newTime() {
      this.dd.dt = this.formatDate(new Date(), 'yyyy年MM月dd日');
      this.dd.tm = this.formatDate(new Date(), 'hh:mm');
      this.dd.wk = '星期' + '日一二三四五六'.charAt(new Date().getDay());
      console.log(this.dd);

      
    },
    formatDate(date, fmt) {
          if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
          }
          const o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
          };
          function padLeftZero (str) {
            return ('00' + str).substr(str.length);
          }
          for (let k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
              let str = o[k] + '';
              fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
            }
          }
          return fmt;
        },
    backLogin() {
      this.$messagebox({
        title: "提示",
        message: "确定要退出吗?",
        showCancelButton: true
      }).then(action => {
        if (action == "confirm") {
          this.$router.replace({ path: "/login" });
        } else {
          console.log("查看订单");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.header-user {
  width: 20%;
  border-top: 1px solid #e7e7e7;
  height: 98px;
  line-height: 98px;
  position: fixed;
  right: 0px;
  top: 0px;
  background-color: #398dfd;
  font-size: 34px;
  padding-right: 10px;
  font-weight: 600;
  color: #fff;
}

.page {
  padding-top: 200px;
  .time {
    position: fixed;
    left: 0px;
    top: 98px;
    height: 100px;
    border-top: 2px solid #1F71F6;
    width:100%;
    background-color: #398dfd;
    .time-hs {
      float: left;
      height: 100%;
      font-size:50px;
      font-weight: 600;
      color:#fff;
      line-height: 100px;
    }
    .time-ht {
      float: left;
      // height: 100%;
      font-size:24px;
      box-sizing: border-box;
      color:#D6E7FF;
      text-align: left;
      padding-left: 20px;
      padding-top:20px
    }
    .time-title {
      height: 100%;
      float: right;
      box-sizing: border-box;
      padding-right: 20px;
      width: 160px;

    }
  }
}
.nav-footer {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 80%;
  .h(98);
  background: #398dfd;
  display: block;
  footer {
    font-size: 0;
    border-top: 1px solid #e7e7e7;

    .pt(10);
    line-height: 1.2;
    width: 100%;
    .h(98);
    display: flex;
    a {
      text-decoration: none;
      color: @base-font-color;
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      text-align: center;
      box-sizing: border-box;
      display: block;
      .fs(22);
      .tab-0,
      .tab-1,
      .tab-2,
      .tab-3 {
        display: inline-block;
        .h(42);
        .w(42);
        background-size: cover;
      }
      .tab-0 {
        color: #91bef9;
      }
      .tab-1 {
        color: #91bef9;
      }
      .tab-2 {
        color: #91bef9;
      }
      .tab-3 {
        color: #91bef9;
      }

      &:hover {
        text-decoration: none;
      }
      &.router-link-active {
        .tab-0 {
          color: #fff;
        }
        .tab-1 {
          color: #fff;
        }
        .tab-2 {
          color: #fff;
        }
        .tab-3 {
        color: #91bef9;
      }
      }
    }
    p {
      margin: 0;
    }
  }
}
</style>
