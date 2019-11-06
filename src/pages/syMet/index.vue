<template>
    <div>
        <div class="header-hzy">
            <div class="header-size">
                高精短时天气预警系统 
            </div>
            <div class="header-user" @click="backLogin()">
               | {{user}}
            </div>
        </div>
        <nav>
            <div class="nav-one">
                <div>
                    <img src="static/image/u54.png" alt="" width="100%">
                </div>
                <div>
                    <span>高精短时<i style="color: red;font-style:normal">极端</i>天气预警系统</span>
                </div>
                <mt-button type="primary" style="height:30px;width:60%;border-radius:15px;margin-top:10px" @click="checkAuth(100301)">点击进入系统</mt-button>
            </div>
            <div class="nav-one">
                <div>
                    <img src="static/image/u57.png" alt="" width="100%">
                </div>
                <div>
                    <span>高精短时<i style="color: red;font-style:normal">恶劣</i>天气预警系统</span>
                </div>
                <mt-button type="primary" style="height:30px;width:60%;border-radius:15px;margin-top:10px" @click="checkAuth(100302)">点击进入系统</mt-button>
            </div>
            <div class="nav-one" style="padding-bottom:50px">
                <div>
                    <img src="static/image/u54.png" alt="" width="100%">
                </div>
                <div>
                    <span>高精极端天气<i style="color: red;font-style:normal">车辆</i>预警系统</span>
                </div>
                <mt-button type="primary" style="height:30px;width:60%;border-radius:15px;margin-top:10px" @click="checkAuth(100303)">点击进入系统</mt-button>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: 'admin'
        }
    },
    methods:{
        backLogin() {
            this.$messagebox({
          title: '提示',
          message: '确定要退出吗?',
          showCancelButton: true
          
        }).then(action => {
          if(action == 'confirm'){
            this.$router.replace({path: '/login'});
          }else{
            console.log('查看订单')
          }
      })
        },
        checkAuth(id) {
        // || sessionStorage.getItem('token')
        var token = this.$store.state.token;
        console.log(token);
        if (!token) {
          this.$router.replace({path: '/login'});
          // this.$router.push({name: 'login', params: {id: id}})
          console.log(123456);
          return
        }
        switch (id) {
                case 100301:
                  this.$router.replace({path: '/home'});
                  break
                case 100302:
                  this.$router.replace({path: '/HPSAdverseMain'});
                  break
                  case 100303:
                  this.$router.replace({path: '/SWeatherCarMain'});
                  break
                }   
        // if (!token) {
        //   this.$router.replace('/login');
        //   // this.$router.push({name: 'login', params: {id: id}})
        // } else {
          
        //   // 权限判断
        //   this.axios.post('/aicUserSelectSystemRole/selectSystemRoleByUserId',{
        //     userId: this.user.userId,
        //     sysModId:id
        //   }).then(res =>{
        //     if(res.status === 620) {
        //       // 成功
        //       switch (id) {
        //         case 100010:
        //           this.toHPSWeather()
        //           break
        //         case 100101:
        //           this.toSWeatherCar()
        //           break
        //           case 100301:
        //           this.toAdverse()
        //           break
        //         }   
        //     }else if(res.status === 600){
        //       this.$message({message: '该模块已停用', type: 'error'});              
        //     }else if(res.status === 610){
        //       this.$message({message: '该模块已删除', type: 'error'});              
        //     }else if(res.status === 650){
        //       this.$message({message: '该模块不存在', type: 'error'});              
        //     }else if(res.status === 630){
        //       this.$message({message: '该用户无权限进入', type: 'error'});              
        //     }    
        //   }).catch(req =>
        //   })
        // }
      },
      
    }
}
</script>
<style lang="less" scoper>
    .header-hzy {
        width: 100%;
        height:100px;
        background-color: #398DFD;
        color: #fff;
        line-height:100px;
        .header-size {
            font-size:40px;
            float: left;
            font-weight: 600;
            padding-left:20px;
        }
        .header-user {
            float: right;
            font-size:30px;
            padding-right:40px;
            cursor: pointer;
            touch-action: none;
        }
        
    }
    nav {
        
        width:100%;
        display: flex;
        justify-content: center;
        flex-wrap:wrap;
        background-color: #fff;
        .nav-one {
            
            padding-top: 50px;
            width: 80%;
            font-size: 35px;
            
        }
    }
    
</style>