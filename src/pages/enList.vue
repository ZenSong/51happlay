<template>
  <div class="enList"> 
    <enhead></enhead> 

  <!-- 横向 -->
 <div class="content_box">  
     <van-pull-refresh v-model="dropDownRefresh" @refresh="refreshData()" loading-text="loading" loosing-text="release and refresh" pulling-text="Pull down to refresh"> 
      <ul  class="sort_box">  
          <li class="sort_content_box selected-category" v-for="(pro, inx) in relativeClassificationData" :key="inx">
            <!-- 游戏的排版 -->  
              <div  v-if="classifyId == '7' && classifyId != '99999999'" @click="sendOut(pro)">  
                <a :href="pro.web_url">
                  <div class="img_box">
                    <img  v-lazy="pro.logo_url"   alt="No pictures found" >
                  </div>
                  <div class="sort_contentGame">
                    <p class="massage">{{pro.web_name}}</p>
                    <span>play</span>
                  </div>
                </a>   

              </div>
              <!-- 不是游戏的排版 -->
              <div v-if="classifyId != '7' && classifyId != '99999999'" @click="sendOut(pro)">  
                <!-- 服务器配的链接跳转 -->
                <a :href="pro.web_url" v-if="pro.parent_id != 5 && pro.web_url != ''" :class="pro.is_small==2?'bugImage':(pro.is_small==3?'threeImage':'')">
                  <!-- 大图 小图 无图 -->
                  <div class="img_box" v-if="pro.is_small==1">
                    <img  v-lazy="pro.logo_url"   alt="No pictures found" >
                  </div>  
                  <div v-if="pro.is_small==2" :class="pro.is_small==2?'img_box2':''">
                    <img  v-lazy="pro.logo_url"   alt="No pictures found" >
                    <img v-if="pro.parent_id == 5" class="videos-icon" src="../../static/img/shipin.png" alt="" >
                  </div>

                  <div v-if="pro.is_small != 3" :class="pro.is_small==0?'sort_content0': pro.is_small==1?'sort_content1':'sort_content2'">
                    <div> 
                      {{pro.web_name}}
                    </div> 
                    <div>
                        <div>{{new Date(pro.modify_tm.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                        <div>{{pro.source}}</div>
                    </div> 
                  </div>  

                  <!-- 三图  --> 
                  <div v-if="pro.is_small == 3" class="three-pictures">
                      <div>  
                          {{pro.web_name}}
                      </div>
                        <div>
                          <img  v-for="(pro,index) in pro.logo_url.split('||')" :key="index"  v-lazy="pro"   alt="No pictures found" > 
                      </div> 
                      <div>
                          <div>{{new Date(pro.modify_tm.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                          <div>{{pro.source}}</div>
                      </div>
                  </div>

                </a>  
                 <!-- 这是爬虫跳转 --> 
                <router-link :to="{path : '/type', query: {type_name:ClassificationTitleData.find((element) => { return element.id == pro.parent_id}).typeName, id: pro.id,judgeId: pro.parent_id,language:'en',goBack:1}}" v-if="pro.web_url == ''" :class="pro.is_small==2?'bugImage':(pro.is_small==3?'threeImage':'')">
                      <!-- 大图 小图 无图 -->
                      <div class="img_box" v-if="pro.is_small==1">
                        <img  v-lazy="pro.logo_url"   alt="No pictures found" >
                      </div>
 
                      <div v-if="pro.is_small==2" :class="pro.is_small==2?'img_box2 imgBoxVedio':''" >
                        <img  v-lazy="pro.logo_url"   alt="No pictures found" >
                        <img v-if="pro.parent_id == 5" class="videos-icon" src="../../static/img/shipin.png" alt="" >
                      </div>

                      <div v-if="pro.is_small != 3" :class="pro.is_small==0?'sort_content0': pro.is_small==1?'sort_content1':'sort_content2'">
                          <div> 
                              {{pro.web_name}}
                          </div>  
                          <div>
                             <div>{{new Date(pro.modify_tm.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                             <div>{{pro.source}}</div>
                          </div>

                      </div>  

                      <!-- 三图  --> 
                      <div v-if="pro.is_small == 3" class="three-pictures"> 
                          <div> 
                              {{pro.web_name}}
                          </div>
                           <div> 
                              <img  v-for="(pro,index) in pro.logo_url.split('||')" :key="index"  v-lazy="pro"   alt="No pictures found" > 
                          </div> 
                          <div>
                             <div>{{new Date(pro.modify_tm.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                             <div>{{pro.source}}</div>
                          </div>
                      </div>  

                </router-link>  
              </div> 
              <!-- 别人的数据 -->
              <div v-if="classifyId == '99999999'" @click="sendOutOther(pro.url)"> 
                  <a  :href="pro.url" class="bugImage">
                    <div class="img_box2" v-if="pro.image !=null && pro.image != ''">
                        <img v-lazy="pro.image.url" alt="">
                    </div>
                    <div class="sort_content2">
                        <div>
                            {{pro.title}}
                        </div>
                        <div>
                            <div>{{pro.provider.name}}</div>
                            <div></div>
                        </div>
                    </div>   
                  </a>
              </div>

              
              <!-- 不是子域名的广告 -->
              <!-- Hot -->
                <div>  
                    
                    <div v-if="adsIndex == 0  && inx  == 0 " class="newGoogleList">  
                        <ins class="adsbygoogle"
                          style="display:block"
                          data-ad-client="ca-pub-7936490518220507"
                          data-ad-slot="2472021721"
                          data-ad-format="auto"
                          data-full-width-responsive="true"></ins>
                    </div>
                    
                    <div v-if="adsIndex == 0  && (inx + 1)%(10) == 0" class="newGoogleList">  
                        <ins class="adsbygoogle"
                          style="display:block"
                          data-ad-client="ca-pub-7936490518220507"
                          data-ad-slot="2472021721"
                          data-ad-format="auto"
                          data-full-width-responsive="true"></ins>
                    </div> 
                    <!-- 第一个 -->
                    <div class="newGoogleList" v-if="adsIndex==1 && inx == 1">   
                          <ins class="adsbygoogle"
                            style="display:block"
                            data-ad-client="ca-pub-7936490518220507"
                            data-ad-slot="7936025106"
                            data-ad-format="auto"
                            data-full-width-responsive="true"></ins> 
                    </div>
                    <div v-if="adsIndex==1  && inx == 9 " class="newGoogleList">   
                          <ins class="adsbygoogle"
                              style="display:block"
                              data-ad-client="ca-pub-7936490518220507"
                              data-ad-slot="5771005545"
                              data-ad-format="auto"
                              data-full-width-responsive="true">
                          </ins> 
                    </div>
                    <div v-if="adsIndex==1  && inx == 19 " class="newGoogleList">   
                              <ins class="adsbygoogle"
                                style="display:block"
                                data-ad-client="ca-pub-7936490518220507"
                                data-ad-slot="8482820012"
                                data-ad-format="auto"
                                data-full-width-responsive="true"></ins> 
                        
                    </div>

                    <!-- 30 40 50 后面对应的广告 -->
                    <div v-if="adsIndex==1  && inx != 0 && (inx + 1)%(30) == 0" class="newGoogleList">   
                          <ins class="adsbygoogle"
                              style="display:block"
                              data-ad-client="ca-pub-7936490518220507"
                              data-ad-slot="7936025106"
                              data-ad-format="auto"
                              data-full-width-responsive="true"></ins> 
                    </div>

                    <div v-if="adsIndex==1  && inx != 9 && (inx + 1 -10)%(30) == 0" class="newGoogleList">   
                          <ins class="adsbygoogle"
                              style="display:block"
                              data-ad-client="ca-pub-7936490518220507"
                              data-ad-slot="5771005545"
                              data-ad-format="auto"
                              data-full-width-responsive="true">
                          </ins> 
                    </div>
                    <div v-if="adsIndex==1  && inx != 19 && (inx + 1 -20)%(30) == 0" class="newGoogleList">   
                              <ins class="adsbygoogle"
                                  style="display:block"
                                  data-ad-client="ca-pub-7936490518220507"
                                  data-ad-slot="8482820012"
                                  data-ad-format="auto"
                                  data-full-width-responsive="true"></ins> 
                        
                    </div>
                    
                    <!-- 第二个 有-->
                    <div v-if="adsIndex == 2  && inx  == 0 " class="newGoogleList">  
                        <ins class="adsbygoogle"
                            style="display:block"
                            data-ad-format="fluid"
                            data-ad-layout-key="-7i+cq+4x-9-62"
                            data-ad-client="ca-pub-7936490518220507"
                            data-ad-slot="2724233124">
                          </ins> 
                    </div>
                    <div v-if="adsIndex == 2  && (inx + 1)%(10) == 0" class="newGoogleList">  
                        <ins class="adsbygoogle"
                            style="display:block"
                            data-ad-format="fluid"
                            data-ad-layout-key="-7i+cq+4x-9-62"
                            data-ad-client="ca-pub-7936490518220507"
                            data-ad-slot="2724233124">
                          </ins> 
                    </div>

                    <!-- 第三个 有-->
                    <div v-if="adsIndex == 3  && inx == 0" class="newGoogleList">  
                          <ins class="adsbygoogle"
                              style="display:block"
                              data-ad-format="fluid"
                              data-ad-layout-key="-de+95-1x-dy+w9"
                              data-ad-client="ca-pub-7936490518220507"
                              data-ad-slot="8779165425">
                            </ins> 
                    </div> 
                    <div v-if="adsIndex == 3 && (inx + 1)% (10) == 0" class="newGoogleList">  
                          <ins class="adsbygoogle"
                              style="display:block"
                              data-ad-format="fluid"
                              data-ad-layout-key="-de+95-1x-dy+w9"
                              data-ad-client="ca-pub-7936490518220507"
                              data-ad-slot="8779165425">
                            </ins> 
                    </div>

                    <!-- 第四个 有-->
                    <div v-if="adsIndex == 4 && inx == 0" class="newGoogleList">  
                          <ins class="adsbygoogle"
                              style="display:block"
                              data-ad-client="ca-pub-7936490518220507"
                              data-ad-slot="3139245648"
                              data-ad-format="auto"
                              data-full-width-responsive="true">
                            </ins> 
                    </div> 
                    <div v-if="adsIndex == 4 && (inx + 1)%(10) == 0" class="newGoogleList">  
                            <ins class="adsbygoogle"
                                style="display:block"
                                data-ad-client="ca-pub-7936490518220507"
                                data-ad-slot="3139245648"
                                data-ad-format="auto"
                                data-full-width-responsive="true">
                              </ins> 
                    </div>
                    <!-- 第五个 -->
                    <div v-if="adsIndex == 5 && inx == 0" class="newGoogleList">  
                          <ins class="adsbygoogle"
                              style="display:block"
                              data-ad-client="ca-pub-7936490518220507"
                              data-ad-slot="3623941667"
                              data-ad-format="auto"
                              data-full-width-responsive="true"></ins> 
                    </div> 

                    <div v-if="adsIndex == 5 && (inx + 1)%(10) == 0" class="newGoogleList">  
                          <ins class="adsbygoogle"
                              style="display:block"
                              data-ad-client="ca-pub-7936490518220507"
                              data-ad-slot="3623941667"
                              data-ad-format="auto"
                              data-full-width-responsive="true"></ins> 
                    </div>

                    <!-- 第六个 有-->
                    <div v-if="adsIndex == 6 && inx == 0" class="newGoogleList">  
                            <ins class="adsbygoogle"
                                style="display:block"
                                data-ad-client="ca-pub-7936490518220507"
                                data-ad-slot="7737859186"
                                data-ad-format="auto"
                                data-full-width-responsive="true"></ins> 
                    </div> 

                    <div v-if="adsIndex == 6 && (inx + 1)%(10) == 0" class="newGoogleList">  
                            <ins class="adsbygoogle"
                                style="display:block"
                                data-ad-client="ca-pub-7936490518220507"
                                data-ad-slot="7737859186"
                                data-ad-format="auto"
                                data-full-width-responsive="true"></ins> 
                    </div>


                    <!-- 第七个 -->
                    <div v-if="adsIndex == 7 && inx == 0" class="newGoogleList">  
                            <ins class="adsbygoogle"
                                style="display:block"
                                data-ad-format="fluid"
                                data-ad-layout-key="-6t+ed+2i-1n-4w"
                                data-ad-client="ca-pub-7936490518220507"
                                data-ad-slot="5792107294"></ins>  
                    </div> 

                    <div v-if="adsIndex == 7 && (inx + 1)%(10) == 0" class="newGoogleList">  
                            <ins class="adsbygoogle"
                                style="display:block"
                                data-ad-format="fluid"
                                data-ad-layout-key="-6t+ed+2i-1n-4w"
                                data-ad-client="ca-pub-7936490518220507"
                                data-ad-slot="5792107294"></ins>  
                    </div>
                    
                    <!-- 第八个 有-->
                    <div v-if="inx == 0 && adsIndex == 8" class="newGoogleList">  
                          <ins class="adsbygoogle"
                              style="display:block"
                              data-ad-format="fluid"
                              data-ad-layout-key="-gc+3r+68-9q-29"
                              data-ad-client="ca-pub-7936490518220507"
                              data-ad-slot="6472249051"></ins> 
                    </div>  
                    <div v-if="(inx+1)% (10) == 0 && adsIndex == 8" class="newGoogleList">  
                          <ins class="adsbygoogle"
                              style="display:block"
                              data-ad-format="fluid"
                              data-ad-layout-key="-gc+3r+68-9q-29"
                              data-ad-client="ca-pub-7936490518220507"
                              data-ad-slot="6472249051"></ins> 
                    </div>

                    <!-- 第九个 有-->
                    <div v-if="inx == 0 && adsIndex == 9" class="newGoogleList">  
                          <ins class="adsbygoogle"
                              style="display:block"
                              data-ad-client="ca-pub-7936490518220507"
                              data-ad-slot="6203565016"
                              data-ad-format="auto"
                              data-full-width-responsive="true"></ins>
                    </div>  
                    <div v-if="(inx+1)% (10) == 0 && adsIndex == 9" class="newGoogleList">  
                          <ins class="adsbygoogle"
                            style="display:block"
                            data-ad-client="ca-pub-7936490518220507"
                            data-ad-slot="6203565016"
                            data-ad-format="auto"
                            data-full-width-responsive="true"></ins> 
                    </div>

                </div>  

          </li>
          <!-- 加载数据动画 -->
          <li class="my-loading"  v-if="myLoading && !noMoreData"> 
              <van-loading color="#1989fa" />
          </li>

          <li class="show_more" v-if="noMoreData"> 
              <p>
                <span >  No More</span>
              </p>
          </li> 
      </ul>
    </van-pull-refresh> 
 </div>
    
 
  </div>
</template>
<script>
import {topData_home,sortList_home, sortData_home, avazuadList_home, googleList_home} from '../../static/json/data.json'  //导入首页静态数据
import { constants } from 'fs'; 
import enhead from '../../src/header/enheader'

export default {
  name: 'index',
  components : {
      enhead,
  },
  data () {
    return {   
      topData:[],//头部数据
      topSwipe:{},//头部轮播数据
      ClassificationTitleData:[],//分类标题数据     
      count:100,//列表数据总条数 
      googleList:[],// google广告   
      carouselShow: true,
      country: "", // 国家
      language: "", // 语言     
      myLoading : false,   // Hot 新闻类型加载显示   
      relativeClassificationData : [],  // 当前对应分类的数据
      HeadNumber : 11,   // 头部游戏 bing的显示更多和关闭更多
      noMoreData : false, // 没有数据的时候显示
      ThePageNumber : 1, // 记录分页
      dropDownRefresh :  false,  // 下拉刷新的显示
      topDataLength : 0, // 头部数据的长度
      focusDomainName : false, // 检测子域名  
      classifyId : "", // 判断是否是游戏id
      adsIndex : "",   // 广告下标
    }
  },
  created() {      
    // if(returnCitySN != undefined) {
    //   this.country = returnCitySN.cip
    // }
    this.language = navigator.language 
    // 更改title 标签里的值
    var title = document.querySelector("title")
    title.innerHTML = "Get latest breaking news & today in United States (US), Europe, Middle East and Americas at."

    // 判断是游戏还是其他分类的id
    this.classifyId = this.$route.query.id
    this.adsIndex = this.$route.query.inx
  },
 
  mounted(){   
    //动态添加 广告代码中的js脚本
     var Odom1=document.getElementsByClassName("van-nav-bar")[0] 
     if(window.innerWidth>=1000){
      var Odom=document.getElementsByTagName("body")[0]
      Odom.style.width="20rem"
      var Odom1=document.getElementsByClassName("van-nav-bar")[0]
      if(Odom1 == undefined) {

      }
      else {
          Odom1.style.width="20rem"
          Odom1.style.left="15%" 
      }
     
    }
    
    if(window.localStorage.getItem("topDataHome")){
       //头部数据
      var topData_home1= JSON.parse(window.localStorage.getItem("topDataHome"))
      this.topData= topData_home1
      this.topDataLength = topData_home1.length
    }else{
       //头部数据
      this.topData= topData_home.data
      this.topDataLength = topData_home.data.length
    }
    // 头部的游戏 food bing搜索等数据
    this.getTopData()  
    // 新闻中新插入的广告
    this.dynamicInsertion1()   
      
    // if(this.classifyId == 99999999) {
    //   this.getOthers()
    // }
    // else {
    //   // 获取分类标题 
    //   this.getClassificationTitle()
    // } 
    this.getClassificationTitle()
    //获取关键字 
    this.getKeyWords()  
    // 判断是否滑动到底部
    window.addEventListener("scroll", this.MyScroll, false)

    //动态添加 广告代码中的js脚本       
    var myVar2=setTimeout(() => {
      var oDom=document.getElementsByClassName("googleList")
      for(var i=0;i<oDom.length;i++ ){
        var script =document.createElement("script"); script.type='text/javascript'
        var nHTML='(adsbygoogle = window.adsbygoogle || []).push({});'
        script.innerHTML=nHTML
        oDom[i].appendChild(script);
      }
    }, 10);
     // newGoogleList
     var myVar3=setTimeout(() => {
      var oDom=document.getElementsByClassName("newGoogleList")
      for(var i=0;i<oDom.length;i++ ){
        var script =document.createElement("script"); script.type='text/javascript'
        var nHTML='(adsbygoogle = window.adsbygoogle || []).push({});'
        script.innerHTML=nHTML
        oDom[i].appendChild(script);
      }
    }, 10);
  }, 
   // 离开时操作
    destroyed(){
        window.removeEventListener('scroll', this.MyScroll, false);
    },
  methods:{
    // 滑动监听
     MyScroll () {  
        var that = this
        var scrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - 80; // body html的底部距离
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight; // body html的屏幕高度
        if(document.querySelector(".my-loading") != undefined) {
            var a = document.documentElement.clientHeight || document.body.clientHeight;
            var clientHeight = a + document.querySelector(".my-loading").clientHeight;
        }  
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滑动的距离
        var daodi = scrollTop + clientHeight  
        if(daodi >=  scrollHeight ) {  
                window.removeEventListener('scroll', this.MyScroll, false);  
                that.myLoading = true 
                if(this.noMoreData) {
                  window.addEventListener("scroll", this.MyScroll, false)
                  that.myLoading = false
                  return
                }
                that.timer = setTimeout((res)=> { 
                  if(that.classifyId == 99999999) {
                      // that.getOthers() 
                       this.myLoading = false
                       this.noMoreData = true
                  }
                  else {
                    that.getPagingData() 
                  } 
                },1200)  
                
        }
        else {
            that.myLoading = false 
        } 
    },  
    // 谷歌广告的代码添加
    dynamicInsertion(){
      var myVar=setTimeout(() => {
          var oDom=Array.from(document.getElementsByClassName("googleList"))  
          
          for(var i=0;i<oDom.length;i++ ){ 
            var ss = oDom[i].getElementsByTagName("script")  
            if(ss.length > 0 && ss[0].innerHTML == '(adsbygoogle = window.adsbygoogle || []).push({});') {
               
            } 
            else {
              var script =document.createElement("script"); script.type='text/javascript'
              var nHTML='(adsbygoogle = window.adsbygoogle || []).push({});'
              script.innerHTML=nHTML
              oDom[i].appendChild(script);
            } 
          }
        }, 100);
    },
    dynamicInsertion1(){   
        var myVar=setTimeout(() => {
          var oDom=Array.from(document.getElementsByClassName("newGoogleList")) 
          for(var i=0;i<oDom.length;i++ ){ 
            var ss = oDom[i].getElementsByTagName("script")  
            if(ss.length > 0 && ss[0].innerHTML == '(adsbygoogle = window.adsbygoogle || []).push({});') {
                
            } 
            else {
              var script =document.createElement("script"); script.type='text/javascript'
              var nHTML='(adsbygoogle = window.adsbygoogle || []).push({});'
              script.innerHTML=nHTML 
              oDom[i].appendChild(script);
            } 
          } 
        }, 10);
    },
    // 头部游戏等数据
    getTopData(){
      var url="loadTypePage" 
      let formData = new FormData()
      formData.append('webType',1) 
      formData.append('pIndex',1)
      formData.append('pSize',50)
      this.$axios.post(url,formData).then(res=>{    
          window.localStorage.setItem("topDataHome",JSON.stringify(res.data))
          this.topData = res.data 
          this.topDataLength = res.data.length  
      }).catch(err=>{
          console.log(err)
      }) 
    },
    // 头部游戏点击更多
    clickMore(){
      this.HeadNumber = 1000000
    },
    // 头部游戏关闭更多
    closeMore () {
      this.HeadNumber = 11
    },
     //获取头部轮播数据
    getTopSwipe(){
      var url="loadlbInfo"
      let formData = new FormData() 
      formData.append('ifResult',returnCitySN.cip) 
      this.$axios.post(url,formData).then(res=>{
        this.topSwipe=res.data 
        if(this.topSwipe.length <=0) {
          this.carouselShow = false 
        }
        else {
          this.carouselShow = true 
        }   
      }).catch(err=>{
        console.log(err)
      })
    },
    // 别人的数据
    getOthers() {
      var url = "https://news.smartsearch.me/?api_key=FvpnNMHP&mkt=en-us&type=coronavirus"; 
      this.$axios.get(url)
      .then( res => {   
        
          if(res.data.length <= 0 ) {
              this.noMoreData = true 
          }
          else {

            this.relativeClassificationData.push(...res.data) 
          }   
        // for(var i = 0; i < 5; i++) {
        //   this.relativeClassificationData.push(res.data[i]) 
        // }
        this.myLoading = false
        window.addEventListener("scroll", this.MyScroll, false)
        // 调用广告 
        this.dynamicInsertion1()
      })
      .catch(err =>{
        window.addEventListener("scroll", this.MyScroll, false) 
      })
    },
    // 获取分类标题
     getClassificationTitle(){ 
        var url="loadAdAdvertise"  
        let formData = new FormData()
        formData.append('webType',2)
        formData.append('language',"en")
        this.$axios.post(url,formData).then(res=>{ 
          window.localStorage.setItem("cacheClassificationTitleData",JSON.stringify(res.data)) 
          this.ClassificationTitleData=res.data  
          this.getRelativeClassification(this.ClassificationTitleData[0],0) 
        }).catch(err=>{
          console.log(err)
        }) 
     },
    // 获取相对应分类数据(第一页) 
    getRelativeClassification(item,inx){  
      this.relativeClassificationData = []
      var url="loadTypePage"  
      let formData = new FormData()
      formData.append('webType',2)
      formData.append('language',"en")
      if(this.classifyId != "10") {
        formData.append('typeId',this.classifyId)
      }
      formData.append('pIndex',1)
      formData.append('pSize',10) 
      this.$axios.post(url,formData).then(res=>{  
        this.relativeClassificationData = res.data   
        // 调用广告 
        this.dynamicInsertion1() 
        
         
      }).catch(err=>{
        console.log(err)
      }) 
    },
    // 获取相对应分类数据(不是第一页)
    getPagingData () { 
        this.ThePageNumber++
        this.noMoreData = false 
        var url="loadPageByAdvertise"
        let formData = new FormData() 
        if(this.classifyId != "10") {
          formData.append('typeId',this.classifyId)
        }
        formData.append('webType',2)
        formData.append('pSize',10)
        formData.append('language',"en")
        formData.append('pIndex', this.ThePageNumber) 
        this.$axios.post(url,formData).then(res=>{  
          this.myLoading = false
          if(res.data.length <= 0 ) {
              this.noMoreData = true 
          }
          else {
            this.relativeClassificationData.push(...res.data) 
          }  
            // 调用广告 
            this.dynamicInsertion1()   
          window.addEventListener("scroll", this.MyScroll, false)
        }).catch(err=>{
          console.log(err)
          this.myLoading = false  
          window.addEventListener("scroll", this.MyScroll, false) 
        })
    },  
    // 下拉刷新
    refreshData() { 
      if(this.classifyId == 99999999) {  
          setTimeout(res => {  
              this.dropDownRefresh = false 
              this.noMoreData = true   
          },200) 
          // setTimeout(res => { 
          //     this.noMoreData = false 
          //      var url = "https://news.smartsearch.me/?api_key=FvpnNMHP&mkt=en-us"
          //       this.$axios.get(url)
          //       .then( res => {  
          //         this.dropDownRefresh = false
          //         if(res.data.length <= 0 ) {
          //             this.noMoreData = true  
          //         }
          //         else {
          //           this.relativeClassificationData.unshift(...res.data)  
          //         } 
          //         // 调用广告 
          //         this.dynamicInsertion1()
          //       })
          // },800) 
      }
      else {
          setTimeout(res => {
            this.ThePageNumber++
            this.noMoreData = false 
            var url="loadPageByAdvertise"
            let formData = new FormData() 
            if(this.classifyId != "10") {
              formData.append('typeId',this.classifyId)
            }
            formData.append('webType',2)
            formData.append('pSize',10)
            formData.append('language',"en")
            formData.append('pIndex', this.ThePageNumber) 
            this.$axios.post(url,formData).then(res=>{ 
              this.dropDownRefresh = false  
              if(res.data.length <= 0 ) {
                  this.noMoreData = true  
              }
              else {
                this.relativeClassificationData.unshift(...res.data)  
              }  
              this.dynamicInsertion1()
            }).catch(err=>{
              console.log(err) 
            })
        },800)
      }  
    },
    // 获取关键字
    getKeyWords() {
      var url="loadKeywords"
      this.$axios.post(url).then(res=>{ 
        var ometa= document.createElement('meta')
        ometa.name='keywords'
        ometa.content=res.data[0].keywords
        var ahead=document.getElementsByTagName('head')[0]
        ahead.appendChild(ometa);
      }).catch(err=>{
        console.log(err)
      })
    }, 
    // 向谷歌分析发送数据
    sendOut (item) {   
      if(item.web_url != "") {  
        gtag('event', 'click', {  
          'event_label':  item.web_url, 
          'event_callback': function(){ 
            
          }
        }); 
      } 
    },
    sendOutOther(item) { 
      if(item != "") {  
        gtag('event', 'click', {  
          'event_label':  item, 
          'event_callback': function(){ 
            
          }
        }); 
      } 
    },
    // 头顶游戏 向谷歌分析发送报告
    sendOutGame(item) {  
        gtag('event', 'click', { 
          'event_label':  item.web_url, 
          'event_callback': function(){  
          }
        }); 
    } 
  }, 
  
}
</script>
<style>
 
 
 
.content_box .van-pull-refresh__loading{
  color: #409EFF;
  font-size: 0.6rem;
}
.content_box .van-loading.van-loading--circular.van-loading{
  color: #409EFF !important;
}
.the-key-ages select{
    height: 2.5rem; 
    width: 84%;
    padding-left: 1.5rem;
    margin: 0 8%;
    margin-top: 1rem; 
    border-color: white;
    /* color: white; */
    font-family: "Times New Roman", Times, serif;
    background-image: linear-gradient(to right, #329EC6, #428beb) !important;
}
 
.the-key-ages{
  width: 100%;
  height: 100%;
  /* background-color: #7d7e80 !important; */
  background-image: linear-gradient(to right, #329EC6, #428beb) !important;
  opacity: 0.96;
  font-family: "Times New Roman", Times, serif;
}
.the-key-ages .close-the-key-ages{
  margin-left: .2rem;
  margin-top: .4rem;
  width: 9%;
  height: 1.5rem; 
  opacity: 1;
}
.the-key-ages .close-the-key-ages>img{
   
  width: 100%;
  height: 100%;
}
.the-key-ages .language-option{
   /* background-image: linear-gradient(to right, #329EC6, #428beb) !important; */
}
.the-key-ages >li{
  width: 100%;
  height: 4rem; 
  line-height: 4rem; 
  color: black;  
  padding-left: 1.5rem;
  border-bottom: 1px solid #d6d6d6;    
  font-size: 0.9rem;
}
 
 .content_box .van-tab {
    flex-basis: auto !important; 
    padding:0 0.4rem;
    font-weight: 700;
    font-family: "Times New Roman", Times, serif; 
    color: rgb(83, 83, 83);
}
.content_box .van-tab--active{
  color: #409EFF; 
}
 .content_box .van-tab span {
    font-size: .8rem;
    font-weight: 800; 
    width: auto;   
    overflow: visible;
    white-space: nowrap;
    text-overflow: ellipsis;  
}  
 
 </style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


.enList { 
  width: 100%;
  .search_box{
    width: 100%;
    z-index: 2019;
    // box-sizing: border-box;

    >.the-custom-search {
      width: 100%;
      height: 1.8rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      >div:nth-of-type(1) {
        width: 10%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;  
        >img{
          width: 100%;
          height: 100%;
        }
      }
      >div:nth-of-type(2) {
        width: 78%;
        height: 100%;
        position: relative;
        input{
          width: 100%;
          height: 100%;
          padding-left: 10px;
          border: 2px solid #1278F3;
          // border-radius: 5px 0 0 5px;
        }
        >.my-search{
          width: 99.8%;
          position: absolute;
          top: 1.8rem;
          border: 2px solid #1278F3;
          border-top: 0;
          background: #ffffff;
          z-index: 2233232;
          max-height: 12rem;
          overflow-y: auto;
          >li{
            width: 100%;
            height: 1.8rem;
            padding-left: 10px;
            line-height: 1.8rem;
            color: #1278F3;
          }
        }
      }
      >div:nth-of-type(3) {
        width: 12%;
        height: 100%;
        background-color: #1278F3;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:  0 5px 5px 0 ;
        >img {
           width: 25px;
          height: 25px;
        }
      }
    }


  .left_nav{
    width: 88%;
    // width: auto;
  }
 
  // position: fixed;
  background: #ffffff;
  top: 0;
  padding:.25rem;
  display: flex;
  justify-content: space-between;
 
}
}

.top_box{
  border-bottom: .0625rem solid #dcdcdc;
  padding-top:.2rem;
  ul{
    padding:0.3 .625rem;
    display: flex;
    flex-wrap: wrap;
    
    li{
      width: 16%;
      height: 2.5rem;
      margin-top: 0.2rem;
      a{
        display: block;
        .describe{
          width: 70%;
          height: 1.5rem;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          img{
            border-radius: 50%;
            // width: 2rem;
            width: 1.5rem;
            height: 1.5rem;
            // height: 100%;
          }
        }
        .explain{
          height: 1rem;
          text-align: center;
          color: #cecece;
          font-size: .5rem;
          color: #666;
          line-height:1rem;
          overflow: hidden;/*超出部分隐藏*/
          white-space: nowrap;/*不换行*/
          text-overflow:ellipsis;/*超出部分文字以...显示*/

        }
      }
    }
  }
} 
.content_box{
  padding:.25rem;
  padding-top: 0;
  margin-top: 2.4rem;
  .sort_box{
    .sort_title{
      background: #F7F7F7;
      display: flex;
      justify-content: space-between;
      height: 1.25rem;
      img{
        width: 1.25rem;
        height: 1.25rem;
      }
      p{
        line-height: 1.25rem;
        font-size: .8125rem;
        font-weight: 900;
      }
    }

   
  }
  .sort_box_active{
    padding-top: 2.5rem;
  }

  
}
 .sort_content_box.shuffling-figure {
   margin-bottom: 0 ;
 }
 .sort_content_box.shuffling-figure .sort_content1,.sort_content_box.shuffling-figure .img_box {
   height: 4rem;
 }
 .sort_content_box{
      padding: .05rem 0.05rem;
      height: 100%;
      height: 100%;
      border-bottom: .0625rem solid #dcdcdc;
      font-family: "Roboto"; 
      font-weight: 600;
      border: 1px solid #f3f3f3;
      border-radius: 4px;
      margin-bottom: 0.2rem;
      // font-size: 0.5rem;
      background-color:rgb(251, 255, 255);
      word-spacing: 5px;
      .bugImage,.threeImage{
        display: block;
      }
      .weipe_url{
        display: block;
        overflow: hidden;
        .img_box{
          float: left;
        }
        
        .sort_content1{
          float: left;
          
        }
      }  
        .imgBoxVedio{
          width: 100%;
          max-height: 10rem;
          position: relative;
          img{
              width: 100%;
              height: 100%;
              max-height: 10rem;
          }
          .videos-icon{
            width: auto;
            height: auto;
            position: absolute;
            left: 43%;
            top: 43%; 
          }
        } 
      a{
        display: flex; 
        .three-pictures{
              margin: 6.9px 0;
              padding: 0 6.9px;
            >div:nth-of-type(1) {
              height: 3.1rem;  
              overflow: hidden;  
              font-size: .75rem;
              font-weight: 600;
              text-overflow: ellipsis;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical; 
              line-height: 0.99rem;  
              -webkit-box-align: start;
            }
            >div:nth-of-type(2) {
                width: 100%;
                height: 4.5rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                
                img{
                    width: 33.333333333%;
                    padding-right: 0.2rem;
                    height: 100%;
                    // border-radius: 10px;
                }
            }
            >div:nth-of-type(3) {
                width: 100%;
                height: 2rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                word-spacing: 0px;
                font-size: 0.6rem;
                font-weight: normal;
                >div:nth-of-type(1){ 
                  word-spacing: 0px;
                  color: rgb(138, 138, 138);
                  font-size: 0.4rem; 
                }
                >div:nth-of-type(2) {
                    padding-left: 0.6rem;
                    color: rgb(138, 138, 138);
                    font-size: 0.4rem;
                    word-spacing: 0px;
                }
            }
            strong{
              margin-top: 0.1rem;
              font-weight: 500;
              width: auto;
              // padding:0 5px; 
              font-size: .45rem;
              color: rgb(0, 128, 255);
              // background: #ecf5ff;
              border: 1px solid #b3d8ff;
              border-radius: 3px; 
              height: 1rem;
              line-height: 0.95rem;
              padding: 0px 3px 3px 3px;
              box-sizing: border-box;
              vertical-align: text-bottom;
              display: inline-block;  
              text-align: center;
              >img{
                // vertical-align: text-bottom;
                margin-left: -5px;
                margin-top: -1px;
                // padding-bottom: 2px;
              }
            } 
        }
        .img_box{
          width:30%;
          height: 4.5rem;
           padding: 0.1rem;
          img{
            width: 100%;
            height: 100%;
            // border-radius: 10px;
          }
        }
        .img_big_box{
           height: 4rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .img_box2{
          width:100%;
          max-height: 10rem;
          padding: 0.1rem;
          img{
            width: 100%;
            height: 100%;
            max-height: 10rem;
            // border-radius: 10px;
          }
        }
         
        .sort_content0{
          >.my-strong-title{ 
            font-weight: 600;
            width: auto; 
            font-size: .45rem;
            color: #409EFF;  
            border-radius: 3px; 
            >strong{
              margin-top: 0.1rem;
              font-weight: 600;
              width: auto;
              padding:0 5px; 
              font-size: .45rem;
              color: #409EFF;
              background: #ecf5ff;
              border: 1px solid #b3d8ff;
              border-radius: 3px;
              height: 1.2rem;
              line-height: 1.2rem;
              display: inline-block; 
            } 
          } 
        }  
        .sort_content2{
          >.my-strong-title{ 
            font-weight: 600;
            width: auto; 
            font-size: .45rem;
            color: #409EFF;  
            border-radius: 3px;   
          } 
        }
        .sort_content1 {
            >div:nth-of-type(1){
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                display: -webkit-box; 
                font-size: .75rem; 
                line-height: 0.99rem;
                width:100%; 
                height: 3rem;
                overflow: hidden; 
                justify-content: space-around;
          }
          >div:nth-of-type(2){ 
            height: 1.5rem;  
            font-weight: 300;
            width: auto; 
            // font-size: .45rem; 
            // border-radius: 3px;
            display: flex;
            justify-content: flex-start;
            >div{
                height: 100%;
                line-height: 1.5rem;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                font-size: 0.6rem;
              }
              >div:nth-of-type(1){ 
                  word-spacing: 0px;
                  color: rgb(138, 138, 138);
                  font-size: 0.4rem;
              }
              >div:nth-of-type(2){ 
                  padding-left: 0.2rem; 
                  color: rgb(138, 138, 138);
                  font-size: 0.4rem;
                  word-spacing: 0px;
              } 
          }
        }
        .sort_content0{
          >div:nth-of-type(1){
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                display: -webkit-box; 
                font-size: .75rem; 
                line-height: 0.98rem;
                width:100%; 
                height: 2.8rem;
                overflow: hidden; 
                justify-content: space-around;
          }
          >div:nth-of-type(2){ 
              height: 1.5rem;  
              font-weight: normal;
              width: auto;  
              display: flex;
              justify-content: flex-start;
              font-size: 0.6rem;
              >div{
                height: 100%;
                line-height: 1.5rem;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                
              }
              >div:nth-of-type(1){ 
                  word-spacing: 0px;
                  color: rgb(138, 138, 138);
                  font-size: 0.4rem;
              }
              >div:nth-of-type(2){ 
                  padding-left: 0.2rem;
                  color: rgb(138, 138, 138);
                  font-size: 0.4rem;
                  word-spacing: 0px;
              }
            } 
        } 
        .sort_content1,.sort_content0,.sort_content2,.sort_contentGame{
            strong{
            margin-top: 0.1rem;
            font-weight: 500;
            width: auto; 
            font-size: .45rem;
            color: rgb(0, 128, 255); 
            border: 1px solid #b3d8ff;
            border-radius: 3px; 
            height: 1rem;
            line-height: 0.95rem;
            padding: 0px 3px 3px 3px;
            box-sizing: border-box;
            vertical-align: text-bottom;
            display: inline-block;  
            text-align: center;
            >img{ 
              margin-left: -5px;
              margin-top: -1px; 
            }
          } 
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          display: -webkit-box;

          font-size: .75rem; 
          line-height: 1.27rem;
          width:70%;
          padding-left:.625rem ;
          height: 4.5rem;
          overflow: hidden; 
          justify-content: space-around;
          .massage{
            width: 75%;
          }
          span{
            width: 23%;
            color: white;
            background: #0896EF;
            display: inline-block;
            line-height: 1.25rem;
            height: 1.25rem;
            text-align: center;
            border-radius: 5px;
            margin-top: 1.375rem;

          }
        }

        .sort_content2 , .sort_content0{
          width: 100%;
          padding-left:0 ;
          text-align: left;
          display: block;
          height: auto;
        }
        .sort_content2{
          margin: 6.9px 0;
          padding: 0 6.9px;
          >div:nth-of-type(1){
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                display: -webkit-box; 
                font-size: .75rem; 
                line-height: 0.99rem;
                width:100%; 
                height: 2.9rem;
                overflow: hidden; 
                justify-content: space-around;
          }
          >div:nth-of-type(2){ 
              height: 1.5rem;  
              font-weight: 300;
              width: auto;  
              display: flex;
              justify-content: flex-start;
              >div{
                height: 100%;
                line-height: 1.5rem;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                font-size: 0.6rem;
              }
              >div:nth-of-type(1){ 
                  word-spacing: 0px;
                  color: rgb(138, 138, 138);
                  font-size: 0.4rem;
                  
              }
              >div:nth-of-type(2){ 
                  padding-left: 0.2rem;
                  color: rgb(138, 138, 138);
                  font-size: 0.4rem;
                  word-spacing: 0px;
              }
            } 
        }

        .sort_contentGame{
          display: flex;
        }
      }
      .img_box{
        width:30%;
        height: 4.2rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }

.show_more{
  display: flex;
  justify-content: space-between;
  padding: 0 1.25rem;
  background-image: linear-gradient(top,rgba(245,239,241,0),rgba(	248, 249, 249,.8));
  background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(245,239,241,0)),to(rgba(	248, 249, 249,.8)));
  p{
    width: 20%;
    height:1.875rem;
    text-align: center;
    width: 100%;
  
    img{
      width:  .75rem;
      height:  .75rem;
      margin-top: .625rem;
    }
    span{
      line-height:1.875rem;
      color:	#9ec8ff;
      font-size: .75rem;
    }
  }
}
.my-loading{
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    img{
        width: 29px;
        height: 28px;
        animation: myfirst 0.5s linear  infinite;
    } 
}
@keyframes myfirst
  {
      0%   {transform:rotate(0deg);} 
      50%  {transform:rotate(180deg);} 
      100% {transform:rotate(360deg);}
  } 
</style>
