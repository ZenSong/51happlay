<template>
  <div id="app"> 
    <router-view></router-view>
    <!-- <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>  
    <router-view v-if="!$route.meta.keepAlive"></router-view>  -->
    <div class="my-positioning" @click="myPositioning()"> 
         <img src="../static/img/dingwei.png" alt=""> 
     </div>
    <div class="copyright"> 
      <p>Copyright © 2021 All Rights Reserved</p>
      
    </div> 
  </div>
</template>

<script>
export default {
  name: 'App',
  
    mounted () {  
    window.addEventListener("scroll", e => {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop > 800) {
          document.querySelector(".my-positioning").style.display = "block"
        }
        else {
          document.querySelector(".my-positioning").style.display = "none"
        } 
    })  
  },
   methods : {
    myPositioning() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0  
      
    }, 
  },
}
</script>

<style >
 

@media screen and (min-width:900px) {
    body {
      width: 900px;
      margin: 0 auto !important;
    }
    html{
      background-color: #fff; 
    }
    .search_box{
      width:900px;
    }
    #___gcse_0{
      width: 800px;
    }
}

body.my-body{ 
  margin-bottom:  2.1rem !important; 
}
  #gs_tti50{
    padding: 3px 0 3px 0.25rem;
    width: 93% !important;
 
  }
  .copyright {
    height: 2rem;
    width: 100%;
    background: #222;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .copyright img{
    width: .9375rem;
    height: .9375rem;
    margin-top: .5rem;
    margin-right: .5rem;
  }
  .copyright p{
    color: #cecece;
    font-size: .5rem;
    line-height: 1.875rem;
  }
  

.datum{
  background-color: #90a4b1; 
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 2rem;
  left: 0;
}
.my-positioning{
  width: 32px;
  height: 32px;
  position: fixed;
  bottom: 3rem;;
  right: 20px;
  display: none; 
}
.my-positioning>img{
  width: 100%;
  height: 100%;
  opacity: 0.7;
}
</style>
