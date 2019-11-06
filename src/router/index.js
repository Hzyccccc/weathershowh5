import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 需要左方向动画的路由用this.$router.to('****')
Router.prototype.togo = function (path) {
  this.isleft = true
  this.isright = false
  this.push(path)
}
// 需要右方向动画的路由用this.$router.goRight('****')
Router.prototype.goRight = function (path) {
  this.isright = true
  this.isleft = false
  this.push(path)
}
// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
  this.isright = true
  this.isleft = false
  this.go(-1)
}
// 点击浏览器返回按钮执行，此时不需要路由回退
Router.prototype.togoback = function () {
  this.isright = true
  this.isleft = false
}
// 点击浏览器前进按钮执行
Router.prototype.togoin = function () {
  this.isright = false
  this.isleft = true
}
export default new Router({
  routes: [
    {
      path: '/details',
      name: 'details',
      component: (resolve) => require(['@/pages/index/details'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['@/pages/login/login'], resolve)
    },
    {
      path: '/',
      name: 'title',
      component: (resolve) => require(['@/pages/syMet/index'], resolve)
    },
    {
      path: '/home',
      name: 'index',
      component: (resolve) => require(['@/pages/index'], resolve),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: (resolve) => require(['@/pages/index/home'], resolve)
        },
        {
          path: '/story',
          name: 'story',
          component: (resolve) => require(['@/pages/index/story'], resolve)
        },
        {
          path: '/footprints',
          name: 'footprints',
          component: (resolve) => require(['@/pages/index/footprints'], resolve)
        }
        
      ]
    },
    // 恶劣
    {
      path: '/main4',
      name: 'main4',
      component: (resolve) => require(['@/pages/HPSWeather/HPSAdverseMain/main4'], resolve)
    },
    {
      path: '/HPSAdverseMain',
      name: 'text',
      component: (resolve) => require(['@/pages/HPSWeather/index'], resolve),
      redirect: '/HPSAdverseMain',
      children: [
        {
          path: '/HPSAdverseMain',
          name: 'HPSAdverseMain',
          component: (resolve) => require(['@/pages/HPSWeather/HPSAdverseMain/one'], resolve)
        },
        {
          path: '/one',
          name: 'one',
          component: (resolve) => require(['@/pages/HPSWeather/HPSAdverseMain/one'], resolve)
        },
        {
          path: '/main2',
          name: 'main2',
          component: (resolve) => require(['@/pages/HPSWeather/HPSAdverseMain/main2'], resolve)
        },
        {
          path: '/main3',
          name: 'main3',
          component: (resolve) => require(['@/pages/HPSWeather/HPSAdverseMain/main3'], resolve)
        }      
      ]
    },
    // 车辆
    {
      path: '/text4',
      name: 'text4',
      component: (resolve) => require(['@/pages/SWeatherCar/SWeatherCarMain/text4'], resolve)
    },
    {
      path: '/SWeatherCar',
      name: 'SWeatherCar',
      component: (resolve) => require(['@/pages/SWeatherCar/index'], resolve),
      redirect: '/SWeatherCarMain',
      children: [
        {
          path: '/SWeatherCarMain',
          name: 'SWeatherCarMain',
          component: (resolve) => require(['@/pages/SWeatherCar/SWeatherCarMain/text1'], resolve)
        },
        {
          path: '/text2',
          name: 'text2',
          component: (resolve) => require(['@/pages/SWeatherCar/SWeatherCarMain/text2'], resolve)
        },
        {
          path: '/text3',
          name: 'text3',
          component: (resolve) => require(['@/pages/SWeatherCar/SWeatherCarMain/text3'], resolve)
        }
        // {
        //   path: '/day',
        //   name: 'day',
        //   component: (resolve) => require(['@/pages/index/day'], resolve)
        // }
      ]
    }
  ]
})
