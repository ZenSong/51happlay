<template>
    <div class="spain"> 

        <EsPtHeader></EsPtHeader> 
    
        
       <div class="content-box-spain"> 
                <van-pull-refresh v-model="dropDownRefreshSpain" @refresh="refreshDataSpain()" loading-text="loading" loosing-text="release and refresh" pulling-text="Pull down to refresh">
                    <div class="classify">
                        <ul class="new-classify">
 
                            <li v-for="(pro,inx) in certainArr" :key="inx" @click=sendOutSpain(pro)>
                                <div v-if="classifyId != '99999999'">
                                    <!-- 区分到底是我们自己的数据还是对接别人的数据 这里是根据是否有该web_name 属性做判断 -->
                                    <!-- 无图 0   -->
                                    <div class="no-graph" v-if="pro.is_small == '0'">
                                        <!-- 跳转到我们的页面 -->
                                        <router-link :to="{path : '/type', query: {id: pro.id,language: myLanguageCountry,goBack:1}}" v-if="pro.web_url == ''">
                                                <div> 
                                                    {{pro.web_name}}
                                                </div>
                                                <div>
                                                    <div>{{new Date(pro.modify_tm.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                                                    <div>{{pro.source}}</div>
                                                </div>
                                        </router-link>
                                        <!-- 跳转到别人的页面 -->
                                        <a :href="pro.web_url" v-if="pro.web_url != ''">
                                            <div>
                                                
                                                {{pro.web_name}}
                                            </div>
                                            <div>
                                                <div>{{new Date(pro.modify_tm.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                                                <div>{{pro.source}}</div>
                                            </div>
                                        </a>
                                    </div>
                                    <!-- 小图 1 -->
                                    <div class="small-picture" v-if="pro.is_small == '1'">
                                        <!-- 跳转到我们的页面 --> 
                                        <router-link :to="{path : '/type', query: {id: pro.id,language: myLanguageCountry,goBack:1}}" v-if="pro.web_url == ''">
                                            
                                            <div>
                                                <img   v-lazy="pro.logo_url"   alt="No pictures found" >
                                            </div>
                                            <div>
                                                <div>
                                                    
                                                    {{pro.web_name}}
                                                </div>
                                                <div>
                                                    <div>{{new Date(pro.modify_tm.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                                                    <div>{{pro.source}}</div>
                                                </div>
                                            </div>
                                            
                                        </router-link>   
                                        <!-- 跳转到别人的页面 -->
                                        <a :href="pro.web_url" v-if="pro.web_url != ''">
                                        <div>
                                                <div>
                                                    
                                                    {{pro.web_name}}
                                                </div>
                                                <div>
                                                    <div>{{new Date(pro.modify_tm.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                                                    <div>{{pro.source}}</div>
                                                </div>
                                            </div>
                                            <div>
                                                <img  v-lazy="pro.logo_url"  alt="No pictures found" >
                                            </div>
                                        </a>
                                    </div>
                                    <!-- 大图 2-->
                                    <div class="big-picture" v-if="pro.is_small == '2'">
                                        <!-- 跳转到我们的页面 -->
                                        <router-link :to="{path : '/type', query: {id: pro.id,language:myLanguageCountry,goBack:1}}" v-if="pro.web_url == ''"> 
                                            
                                            <div>
                                                <img  v-lazy="pro.logo_url"   alt="No pictures found" > 
                                                <!-- <img   class="videos-icon" src="../../static/img/shipin.png" alt="" > -->
                                            </div>
                                            <div>
                                                
                                                {{pro.web_name}}
                                            </div>
                                            <div>
                                                <div>{{new Date(pro.modify_tm.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                                                <div>{{pro.source}}</div>
                                            </div>
                                        </router-link>  
                                        <!-- 跳转到别人的页面 -->
                                        <a :href="pro.web_url" v-if="pro.web_url != ''">
                                        <div>
                                                <img  v-lazy="pro.logo_url"   alt="No pictures found" >
                                                <!-- <img   class="videos-icon" src="../../static/img/shipin.png" alt="" > -->
                                            </div>
                                            <div>
                                                
                                                {{pro.web_name}}
                                            </div>
                                            <div>
                                                <div>{{new Date(pro.modify_tm.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                                                <div>{{pro.source}}</div>
                                            </div>
                                        </a>
                                    </div>
                                    <!-- 3图 -->
                                    <div class="three-pictures" v-if="pro.is_small == '3'">
                                        <!-- 跳转到我们的页面 --> 
                                        <router-link :to="{path : '/type', query: {id: pro.id,language:myLanguageCountry,goBack:1}}" v-if="pro.web_url == ''"> 
                                            <div>{{pro.web_name}}</div>
                                            <div>
                                                <img  v-for="(pro1,threeInx) in pro.logo_url.split('||')" :key="threeInx"  v-lazy="pro1"   alt="No pictures found" > 
                                            </div>
                                            <div>
                                                <div>{{new Date(pro.modify_tm.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                                                <div>{{pro.source}}</div> 
                                            </div>
                                        </router-link>
                                        <!-- 跳转到别人的页面 -->
                                        <a :href="pro.web_url" v-if="pro.web_url != ''">
                                        <div>{{pro.web_name}}</div>
                                            <div>
                                                <img  v-for="(pro,threeInx) in pro.logo_url.split('||')" :key="threeInx"  v-lazy="pro"   alt="No pictures found" > 
                                            </div>
                                            <div>
                                                <div>{{new Date(pro.modify_tm.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                                                <div>{{pro.source}}</div> 
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div v-if="classifyId == '99999999'">
                                    <div class="big-picture"  @click.stop="sendOutOther(pro.url)"> 
                                        <a  :href="pro.url">  
                                            <div  v-if="pro.image !=null && pro.image != ''">
                                                <img  v-lazy="pro.image.url"  alt="No pictures found" >  
                                            </div>
                                            <div> 
                                                {{pro.title}}
                                            </div>
                                            <div>
                                                <div>{{pro.provider.name}}</div>
                                                <div>{{pro.source}}</div>
                                            </div>
                                        </a>   
                                    </div>
                                </div>

                                
                                <div v-if="adsIndex == 0 && inx == 1 " class="newGoogleList" >   
                                    <ins class="adsbygoogle"
                                        style="display:block"
                                        data-ad-client="ca-pub-7936490518220507"
                                        data-ad-slot="1244616253"
                                        data-ad-format="auto"
                                        data-full-width-responsive="true"></ins>

                                </div>
                                <div v-if="adsIndex == 0 && (inx + 1)%(10) == 0  " class="newGoogleList">   
                                    <ins class="adsbygoogle"
                                        style="display:block"
                                        data-ad-client="ca-pub-7936490518220507"
                                        data-ad-slot="1244616253"
                                        data-ad-format="auto"
                                        data-full-width-responsive="true"></ins>

                                </div>
                                <!-- 首页第一个分类的广告 1 10 20 -->
                                <div v-if="adsIndex == 1 && inx == 1 " class="newGoogleList" >   
                                    <ins class="adsbygoogle"
                                        style="display:block"
                                        data-ad-client="ca-pub-7936490518220507"
                                        data-ad-slot="2938425232"
                                        data-ad-format="auto"
                                        data-full-width-responsive="true"></ins>
                                </div>
                                <div v-if="adsIndex == 1 && (inx + 1)%(10) == 0 " class="newGoogleList">   
                                    <ins class="adsbygoogle"
                                        style="display:block"
                                        data-ad-client="ca-pub-7936490518220507"
                                        data-ad-slot="2938425232"
                                        data-ad-format="auto"
                                        data-full-width-responsive="true"></ins>
                                </div>
                             

                                <!-- 第二个分类的广告 -->
                                <div v-if="adsIndex == 2 && inx  == 0 " class="newGoogleList">  
                                    <ins class="adsbygoogle"
                                        style="display:block"
                                        data-ad-client="ca-pub-7936490518220507"
                                        data-ad-slot="6187405108"
                                        data-ad-format="auto"
                                        data-full-width-responsive="true"></ins>
                                </div>
                                <div v-if="adsIndex == 2 && (inx + 1)%(10) == 0" class="newGoogleList">  
                                    <ins class="adsbygoogle"
                                        style="display:block"
                                        data-ad-client="ca-pub-7936490518220507"
                                        data-ad-slot="6187405108"
                                        data-ad-format="auto"
                                        data-full-width-responsive="true"></ins>
                                </div>

                                <!-- 第三个分类广告 -->
                                <div v-if="adsIndex == 3 && inx == 0" class="newGoogleList">  
                                    <ins class="adsbygoogle"
                                        style="display:block"
                                        data-ad-client="ca-pub-7936490518220507"
                                        data-ad-slot="9810955341"
                                        data-ad-format="auto"
                                        data-full-width-responsive="true"></ins>
                                </div> 
                                <div v-if="adsIndex == 3 && (inx + 1)% (10) == 0" class="newGoogleList">  
                                    <ins class="adsbygoogle"
                                        style="display:block"
                                        data-ad-client="ca-pub-7936490518220507"
                                        data-ad-slot="9810955341"
                                        data-ad-format="auto"
                                        data-full-width-responsive="true"></ins>
                                </div>

                                <!-- 第四个 -->
                                <div v-if="adsIndex == 4 && inx == 0" class="newGoogleList">  
                                    <ins class="adsbygoogle"
                                        style="display:block"
                                        data-ad-client="ca-pub-7936490518220507"
                                        data-ad-slot="8497873675"
                                        data-ad-format="auto"
                                        data-full-width-responsive="true"></ins>
                                </div> 
                                <div v-if="adsIndex == 4 && (inx + 1)%(10) == 0" class="newGoogleList">  
                                        <ins class="adsbygoogle"
                                            style="display:block"
                                            data-ad-client="ca-pub-7936490518220507"
                                            data-ad-slot="8497873675"
                                            data-ad-format="auto"
                                            data-full-width-responsive="true"></ins>
                                </div>

                                 <!-- 第五个 -->
                                <div v-if="adsIndex == 5 && inx == 0" class="newGoogleList">  
                                    <ins class="adsbygoogle"
                                        style="display:block"
                                        data-ad-client="ca-pub-7936490518220507"
                                        data-ad-slot="4861880992"
                                        data-ad-format="auto"
                                        data-full-width-responsive="true"></ins> 
                                </div> 

                                <div v-if="adsIndex == 5 && (inx + 1)%(10) == 0" class="newGoogleList">  
                                    <ins class="adsbygoogle"
                                        style="display:block"
                                        data-ad-client="ca-pub-7936490518220507"
                                        data-ad-slot="4861880992"
                                        data-ad-format="auto"
                                        data-full-width-responsive="true"></ins>
                                </div>

                                <!-- 第六个 -->
                                <div v-if="adsIndex == 6 && inx == 0" class="newGoogleList">  
                                        <ins class="adsbygoogle"
                                            style="display:block"
                                            data-ad-client="ca-pub-7936490518220507"
                                            data-ad-slot="6553418379"
                                            data-ad-format="auto"
                                            data-full-width-responsive="true"></ins>
                                </div> 

                                <div v-if="adsIndex == 6 && (inx + 1)%(10) == 0" class="newGoogleList">  
                                        <ins class="adsbygoogle"
                                            style="display:block"
                                            data-ad-client="ca-pub-7936490518220507"
                                            data-ad-slot="6553418379"
                                            data-ad-format="auto"
                                            data-full-width-responsive="true"></ins> 
                                </div> 
                                
                                <!-- 第七个 -->
                                <div v-if="adsIndex == 7 && inx == 0" class="newGoogleList">  
                                        <ins class="adsbygoogle"
                                            style="display:block"
                                            data-ad-client="ca-pub-7936490518220507"
                                            data-ad-slot="9895398013"
                                            data-ad-format="auto"
                                            data-full-width-responsive="true"></ins>
                                </div> 

                                <div v-if="adsIndex == 7 && (inx + 1)%(10) == 0" class="newGoogleList">  
                                        <ins class="adsbygoogle"
                                            style="display:block"
                                            data-ad-client="ca-pub-7936490518220507"
                                            data-ad-slot="9895398013"
                                            data-ad-format="auto"
                                            data-full-width-responsive="true"></ins>
                                </div> 

                                <!-- 第八个 -->
                                <div v-if="adsIndex == 8 && inx == 0" class="newGoogleList">  
                                        <ins class="adsbygoogle"
                                            style="display:block"
                                            data-ad-client="ca-pub-7936490518220507"
                                            data-ad-slot="8953388416"
                                            data-ad-format="auto"
                                            data-full-width-responsive="true"></ins>
                                </div> 

                                <div v-if="adsIndex == 8 && (inx + 1)%(10) == 0" class="newGoogleList">  
                                        <ins class="adsbygoogle"
                                            style="display:block"
                                            data-ad-client="ca-pub-7936490518220507"
                                            data-ad-slot="8953388416"
                                            data-ad-format="auto"
                                            data-full-width-responsive="true"></ins>
                                </div> 

                            </li>
                            <!-- 加载动画 -->
                            <div class="my-loading"  v-if="myLoadingSpain"> 
                                <van-loading color="#1989fa" />
                            </div>
                            <!-- 没有更多数据 -->
                            <li class="show_more" v-if="noMoreData"> 
                                <p>
                                    <span >  No More</span>
                                </p>
                            </li>
                             
                        </ul>
                    </div>
                </van-pull-refresh> 
     </div>  
        
    </div>
</template>
<script>
import {googleList_home,topData_home} from '../../static/json/data.json'  //导入首页静态数据     

import EsPtHeader from '../../src/header/EsPtHeader'

export default {
    components : {
        EsPtHeader
    },
    data() {
        return { 
            googleList : [], //谷歌广告
            rotaryData : [], // 轮播数据
            topData:[],//头部数据     
            spainCarouselShow: true,       
            myLanguage : "", // 浏览器语言
            myLanguageCountry: "",  // 语言国家
            myCountry : "",   //国家 , 
            myLoadingSpain : false,   // 加载的显示
            HeadNumber : 11,   // 头部游戏 bing的显示更多和关闭更多
            topDataLength1 : 0, // 头部游戏 bing的数据长度  
            ThePageNumber1: 1, // 我们数据的分页 
            // 改版新增 
            crossClassifyArr : [],  // 获取所有的分类title  
            dropDownRefreshSpain :  false,  // 下拉刷新的显示
            certainArr: [],   // 对应某个分类的数据  
            noMoreData : false, // 没有数据的时候显示    
            classifyId : "", // 判断是否是游戏id
            adsIndex : "",   // 广告下标
            region: "", // 请求地区
        }
    },
    created () {   
        gtag('event', 'click', { 
          'event_label':  window.location.href, 
          'event_callback': function(){ 
          }
        });
        this.myLanguage = this.$route.query.language.split("-")[0].toLocaleLowerCase()
        this.myLanguageCountry = this.$route.query.language
        this.myCountry =  this.$route.query.country 
        if(this.myLanguage == "es") {
            this.region = "es-mx"
        }
        else {
            this.region = "pt-br"
        } 
        // 获取分类id和分类下标
        this.classifyId = this.$route.query.id
        this.adsIndex = this.$route.query.inx
        window.scrollTo(0,0);   
        
        // 更改title 标签里的值
        var title = document.querySelector("title")
        title.innerHTML = "Get latest breaking news & today in United States (US), Europe, Middle East and Americas at."
      
        
        // if(this.classifyId == 99999999) {
        //     this.getOthers()
        // }
        // else {
        //   // 获取对应分类的数据
        //     this.getCertainArr()
        // } 
        this.getCertainArr()
    },

    mounted () {
        // 进来先看本地有没有谷歌广告,没有使用json静态数据
        if(window.localStorage.getItem("new_googleList_data")){ 
            this.googleList = JSON.parse(window.localStorage.getItem("new_googleList_data")); 
        }else{ 
            this.googleList = googleList_home;
        }   
        // 获取最新谷歌广告
        // this.gainGoogleList() 
        // 新闻中新插入的广告
        this.dynamicInsertion1()

        if(window.localStorage.getItem("topDataHome1")){
        //头部数据
            var topData_home1= JSON.parse(window.localStorage.getItem("topDataHome1"))
            this.topData= topData_home1
            this.topDataLength1 = topData_home1.length
        }else{
        //头部数据
            this.topData= topData_home.data
            this.topDataLength1 = topData_home.data.length
        }
        // 头部的游戏 food bing搜索等数据
        this.getTopData1() 

       
        window.addEventListener("scroll", this.myScrollSpain, false)
    },
    // 离开时操作
    destroyed(){
        window.removeEventListener('scroll', this.myScrollSpain, false);
    },
    methods : { 
        myScrollSpain () { 
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
                    window.removeEventListener('scroll', this.myScrollSpain, false);
                    // 横版 当没有更多数据时不请求不加载
                    if(this.noMoreData) {
                        window.addEventListener("scroll", this.myScrollSpain, false)
                        that.myLoadingSpain = false
                        return
                    }

                    this.myLoadingSpain = true 
                    that.timer = setTimeout((res)=> {  
                            if(that.classifyId == 99999999) { // 99999999
                                // that.getOthers();
                                this.myLoadingSpain = false
                                this.noMoreData = true
                            }
                            else {
                                that.getPagingDataSpain() 
                            } 
                    },1000)  
                   
            }
            else {
                that.myLoadingSpain = false 
            } 
        },
        // 头部游戏点击更多
        clickMore(){
        this.HeadNumber = 1000000
        },
          // 头部游戏关闭更多
        closeMore () {
        this.HeadNumber = 11
        }, 
 
         // 头部游戏等数据
        getTopData1(){ 
            var url="loadTypePage" 
            let formData = new FormData()
            formData.append('webType',1) 
            formData.append('pIndex',1)
            formData.append('pSize',50)
            this.$axios.post(url,formData).then(res=>{    
                window.localStorage.setItem("topDataHome1",JSON.stringify(res.data))
                this.topData = res.data 
                this.topDataLength1 = res.data.length
            }).catch(err=>{
                console.log(err)
            }) 
        }, 
        // 获取谷歌广告
        gainGoogleList () {   

            var url="loadGooglead"
            let formData = new FormData()
            formData.append('type','list')
            this.$axios.post(url,formData).then(res=>{ 
                window.localStorage.setItem("new_googleList_data",JSON.stringify(res.data))
                this.googleList=res.data 
                var myVar=setTimeout(() => {
                    var oDom=document.getElementsByClassName("googleList")
                    for(var i=0;i<oDom.length;i++ ){
                        var script =document.createElement("script"); script.type='text/javascript'
                        var nHTML='(adsbygoogle = window.adsbygoogle || []).push({});'
                        script.innerHTML=nHTML
                        oDom[i].appendChild(script);
                    }
                }, 10);
            })
            .catch(err=>{
              console.log(err)
            }) 
        },      
         
        // 新闻中插入的广告
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

 
        // 下拉刷新
        refreshDataSpain() {
            if(this.classifyId == 99999999) {
                setTimeout(res => {  
                    this.dropDownRefreshSpain = false 
                    this.noMoreData = true   
                },200) 
                // setTimeout(res => { 
                //     this.noMoreData = false 
                //     var url = "https://news.smartsearch.me/?api_key=FvpnNMHP&mkt=" + this.region
                //         this.$axios.get(url)
                //         .then( res => {  
                //             this.dropDownRefreshSpain = false
                //             if(res.data.length <= 0 ) {
                //                 this.noMoreData = true  
                //             }
                //             else {
                //                 this.relativeClassificationData.unshift(...res.data)  
                //             } 
                //             // 调用广告 
                //             this.dynamicInsertion1()
                //         })
                // },800) 
            }
            else {
                setTimeout(res => { 
                    this.ThePageNumber1++
                    this.noMoreData = false 
                    var url="loadPageByAdvertise"
                    let formData = new FormData() 
                    if(this.classifyId != "28" && this.myLanguage == "pt") {
                        formData.append('typeId',this.classifyId)
                    } 
                    if(this.classifyId != "29" && this.myLanguage == "es") {
                        formData.append('typeId',this.classifyId)
                    }
                    
                    formData.append('webType',2)
                    formData.append('pSize',10)
                    formData.append('language',this.myLanguage)
                    formData.append('pIndex', this.ThePageNumber1) 
                    this.$axios.post(url,formData).then(res=>{ 
                        this.dropDownRefreshSpain = false  
                        if(res.data.length <= 0 ) {
                            this.noMoreData = true  
                        }
                        else {
                            this.certainArr.unshift(...res.data)  
                        }  
                        this.dynamicInsertion1()
                    }).catch(err=>{
                        console.log(err) 
                    }) 
                },800)
            }   
            
        },
        // 别人的数据
        getOthers() {
            var url = "https://news.smartsearch.me/?api_key=FvpnNMHP&mkt=" + this.region + '&type=coronavirus'
            this.$axios.get(url)
            .then( res => {  
                if(res.data.length <= 0 ) {
                    this.noMoreData = true 
                }
                else {
                    this.certainArr.push(...res.data)  
                } 
                
                this.myLoadingSpain = false
                window.addEventListener("scroll", this.myScrollSpain, false)
                // 调用广告 
                this.dynamicInsertion1()
            })
            .catch(err =>{
                window.addEventListener("scroll", this.myScrollSpain, false) 
            })
        },
        // 某个分类title数据 (第一页)
        getCertainArr () { 
            this.certainArr = []
            var url="loadTypePage"  
            let formData = new FormData()
            formData.append('webType',2)
            formData.append('language',this.myLanguage) 
            if(this.classifyId != "28" && this.myLanguage == "pt") {
                formData.append('typeId',this.classifyId)
            } 
            if(this.classifyId != "29" && this.myLanguage == "es") {
                formData.append('typeId',this.classifyId)
            } 
             
            formData.append('pIndex',1)
            formData.append('pSize',10) 
            this.$axios.post(url,formData).then(res=>{  
                this.certainArr = res.data  
                // 调用广告 
                this.dynamicInsertion1()   
            }).catch(err=>{
                console.log(err)
            })  
        },
        // 某个分类title数据 (不是第一页)
        getPagingDataSpain () {    
            this.ThePageNumber1++
            this.noMoreData = false 
            var url="loadPageByAdvertise"
            let formData = new FormData()  
            if(this.classifyId != "28" && this.myLanguage == "pt") {
                formData.append('typeId',this.classifyId)
            } 
            if(this.classifyId != "29" && this.myLanguage == "es") {
                formData.append('typeId',this.classifyId)
            }
            
            formData.append('webType',2)
            formData.append('pSize',10)
            formData.append('language',this.myLanguage)
            formData.append('pIndex', this.ThePageNumber1) 
            this.$axios.post(url,formData).then(res=>{  
            this.myLoadingSpain = false 

            if(res.data.length <= 0 ) {
                this.noMoreData = true 
            }
            else {
               this.certainArr.push(...res.data) 
            }  
            // 调用广告  
            this.dynamicInsertion1()  
            window.addEventListener("scroll", this.myScrollSpain, false)
            }).catch(err=>{
            console.log(err)
            this.myLoadingSpain = false  
            window.addEventListener("scroll", this.myScrollSpain, false) 
            })
        }, 
         // 向谷歌分析发送数据
        sendOutSpain (item) {    
            if(!item.hasOwnProperty('web_name')) {
                gtag('event', 'click', { 
                    'event_label':  item.url, 
                    'event_callback': function(){  
                    }
                }); 
            } 
        }, 
        // gugefenxi
        sendOutOther(item) { 
            if(item != "") {  
                gtag('event', 'click', {  
                'event_label':  item, 
                'event_callback': function(){ 
                    
                }
                }); 
            } 
        },
    }
}
</script>
<style> 
 
.content-box-spain .van-pull-refresh__loading{
  color: #409EFF;
  font-size: 0.6rem;
}
.content-box-spain .van-loading.van-loading--circular.van-loading{
  color: #409EFF !important;
}
 .content-box-spain .van-tab span {
    font-size: .8rem;
    font-weight: 800; 
    width: auto;   
    overflow: visible;
    white-space: nowrap;
    text-overflow: ellipsis;
} 
 .content-box-spain .van-tab {
    flex-basis: auto !important; 
    padding:0 0.4rem;
    font-weight: 700;
    font-family: "Times New Roman", Times, serif; 
    color: rgb(83, 83, 83);
}
.content-box-spain .van-tab--active{
  color: #409EFF; 
}
</style>

<style lang="scss" scoped>
    
    .spain{
        width: 100%;
        height: 100%;
        margin-top: 2.4rem;
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
                background: #ffffff;
                top: 0;
                padding:.25rem;
                display: flex;
                justify-content: space-between;
            }
            .top_box{
                border-bottom: .0625rem solid #dcdcdc;
                padding-top: .2rem;
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
            // .googleList {
            //     width: 100%;
            //     height: 15rem;
            // }
            .wheel-planting{
                width: 100%;
                height: 4rem;  
                .van-swipe{
                    width: 100%;
                    height: 100%;
                }
                .sort_content_box{  
                    padding: .05rem 0.05rem;
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
                    .bugImage{
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
                    a{
                        width: 100%;
                        display: flex;
                        .img_box{
                            width:30%;
                            height: 4rem;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        }
                        .img_big_box{
                            width: 100%;
                            height: 4rem;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        }
                        .img_box2{
                        width:100%;
                        max-height: 10rem;
                        img{
                            width: 100%;
                            height: 100%;
                            max-height: 10rem;
                        }
                        }
                        .sort_content1,.sort_content0,.sort_content2,.sort_contentGame{
                        font-size: .75rem;
                        color: #666666;
                        line-height: 1.25rem;
                        width:70%;
                        padding-left:.625rem ;
                        height: 4rem;
                        overflow: hidden;
                        word-break:break-all;
                        // text-align:justify;
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
                        .sort_contentGame{
                        display: flex;
                        }
                    }
                    .img_box{
                        width:30%;
                        height: 4rem;
                        img{
                        width: 100%;
                        height: 100%;
                        }
                    }
                } 
            }
        // 竖版
            .content-box-spain{
                padding: 0 .25rem;
                .classify {
                    width: 100%; 
                    .new-classify{
                        width: 100%;
                        .new-title{
                            padding: 0.2rem;
                            background: #F7F7F7; 
                            display: flex; 
                            justify-content: space-between;
                            height: 1.5rem;
                            box-sizing: border-box;
                            >p{
                                line-height: 1.25rem;
                                font-size: .8125rem;
                                font-weight: 900;
                            }
                            img{
                                width: 1.25rem;
                                height: 1.25rem;
                            }
                        }
                        li{
                            width: 100%;
                            padding: 0.2rem;
                            border-bottom: .0625rem solid #dcdcdc;
                            font-family: "Roboto";
                            word-spacing: 5px;
                            word-wrap: break-word;
                            border: 1px solid #f3f3f3;
                            border-radius: 4px;
                            margin-bottom: 0.2rem;
                            background-color: #fbffff;
                            .no-graph {
                                width: 100%;
                                
                                font-weight: 600;
                                >a { 
                                    width: 100%;
                                    >div:nth-of-type(1) {
                                        height: 3.5rem; 
                                        overflow: hidden; 
                                        text-overflow: -o-ellipsis-lastline;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        display: -webkit-box;
                                        -webkit-line-clamp: 3;
                                        -webkit-box-orient: vertical; 
                                        font-size: .78rem;
                                        strong{
                                            margin-top: 0.2rem;
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
                                    
                                    >div:nth-of-type(2) {
                                        width: 100%;
                                        height: 1.5rem;
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
                                            padding-left: 0.5rem;
                                            color: rgb(138, 138, 138);
                                            font-size: 0.4rem; 
                                        }
                                    }
                                }
                            }
                            .small-picture {
                                width: 100%;
                                height: 4.5rem; 
                                
                                >a {
                                    width: 100%;
                                    height: 100%;
                                    display: flex; 
                                    justify-content: space-around;
                                    align-items: center;
                                    >div:nth-of-type(2) {
                                        width: 70%;
                                        height: 100%; 
                                        padding-left: 0.2rem;
                                        padding-right: 0.1rem;
                                        >div:nth-of-type(1) {
                                            width: 100%;
                                            height: 3rem;  
                                            overflow: hidden; 
                                            line-height: 0.995rem;
                                            display: -webkit-box;
                                            -webkit-line-clamp: 3;
                                            -webkit-box-orient: vertical;
                                            font-size: .78rem;
                                            font-weight: 600;
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
                                        >div:nth-of-type(2) {
                                            height: 1.5rem;
                                            display: flex; 
                                            justify-content: flex-start;
                                            align-items: center;
                                            padding-top: 0.2rem;
                                            word-spacing: 0px;
                                            font-size: 0.6rem;
                                            >div{  
                                                height: 100%;
                                                
                                                    // display: flex;
                                                    // align-items: center;  
                                                line-height: 1rem;
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
                                                padding-left: 0.5rem;
                                                color: rgb(138, 138, 138);
                                                font-size: 0.4rem;
                                            }
                                        }
                                    }
                                    >div:nth-of-type(1) { 
                                        width: 30%;
                                        
                                        height: 100%;
                                        img{
                                            width: 100%;
                                            height: 100%;
                                            // border-radius: 10px;
                                        }
                                    }
                                }
                            }
                            .big-picture {
                                width: 100%; 
                                
                                >a {
                                    width: 100%; 
                                    >div:nth-of-type(2) {
                                        // height: 3.1rem; 
                                        height: 2.9rem;
                                        display: -webkit-box; 
                                        overflow: hidden;  
                                        font-size: .75rem;
                                        font-weight: 600;
                                        text-overflow: ellipsis;
                                        -webkit-line-clamp: 3;
                                        -webkit-box-orient: vertical;
                                        // display: -webkit-box;
                                        line-height: 0.99rem;  
                                        -webkit-box-align: start;
                                        strong{
                                            margin-top: 0.2rem;
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
                                    >div:nth-of-type(1) {
                                        width: 100%;
                                        height: 9rem;
                                        position: relative;
                                        img{
                                            width: 100%;
                                            height: 100%;
                                            // border-radius: 10px;
                                        }
                                        .videos-icon{
                                            width: auto;
                                            height: auto;
                                            position: absolute;
                                            left: 43%;
                                            top: 43%; 
                                        } 
                                    }
                                    >div:nth-of-type(3) {
                                        width: 100%;
                                        height: 1.5rem;
                                        display: flex;
                                        justify-content: flex-start;
                                        align-items: center;
                                        word-spacing: 0px;
                                        font-size: 0.6rem;
                                        >div:nth-of-type(1){ 
                                            word-spacing: 0px;
                                            color: rgb(138, 138, 138);
                                            font-size: 0.4rem; 
                                        }
                                        >div:nth-of-type(2) {
                                            padding-left: 0.5rem;
                                            color: rgb(138, 138, 138);
                                            font-size: 0.4rem;
                                        }
                                    }
                                }
                            }
                            .three-pictures {
                                width: 100%;
                                
                                >a{
                                    width: 100%;
                                    >div:nth-of-type(1) {
                                        height: 3.5rem;
                                        font-size: .78rem;
                                        overflow: hidden; 
                                        padding-bottom: 0.3rem;
                                        font-weight: 600;
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
                                        img:nth-of-type(3) {
                                            padding: 0;
                                        }
                                    }
                                    >div:nth-of-type(3) {
                                        width: 100%;
                                        height: 2rem;
                                        display: flex;
                                        justify-content: flex-start;
                                        align-items: center;
                                        word-spacing: 0px;
                                        font-size: 0.5rem;
                                        >div:nth-of-type(1){ 
                                            word-spacing: 0px;
                                            color: rgb(138, 138, 138);
                                            font-size: 0.4rem; 
                                        }
                                        >div:nth-of-type(2) {
                                            padding-left: 0.6rem;
                                            color: rgb(138, 138, 138);
                                            font-size: 0.4rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .video-classify{
                        width: 100%;
                        .video-title{
                            padding: 0.2rem;
                            background: #F7F7F7; 
                            display: flex; 
                            justify-content: space-between;
                            height: 1.5rem;
                            >p{
                                line-height: 1.25rem;
                                font-size: .8125rem;
                                font-weight: 900;
                            }
                            img{
                                width: 1.25rem;
                                height: 1.25rem;
                            }
                        }
                        li{
                            width: 100%;
                            padding: 0.2rem;
                            border-bottom: .0625rem solid #dcdcdc;
                            .video-big-picture {
                                width: 100%;
                                >div{
                                    width: 100%; 
                                    >div:nth-of-type(1) {
                                        height: 3rem;  
                                        overflow: hidden;
                                        word-break: break-all;
                                        padding-bottom: 0.3rem;
                                    } 
                                    >div:nth-of-type(2) {
                                        width: 100%;
                                        height: 7rem;
                                        position: relative;
                                        >div:nth-of-type(1) {
                                            width: 100%;
                                            height: 100%; 
                                            img{
                                                width: 100%;
                                                height: 100%;
                                            } 
                                        }
                                        >div:nth-of-type(2) {
                                            position: absolute;
                                            top: 3rem;
                                            left: 45%;
                                            z-index: 20;
                                        }
                                        >div:nth-of-type(3) {
                                            width: 2.5rem;
                                            text-align: center;
                                            height: 1rem;
                                            position: absolute;
                                            right: 1rem;
                                            bottom: 1rem;
                                            z-index: 20;
                                            color: white;
                                            border-radius: 8px;
                                            background-color: #918f8f;
                                        }
                                    }
                                    >div:nth-of-type(3) {
                                        width: 100%;
                                        height: 2rem;
                                        display: flex;
                                        justify-content: flex-start;
                                        align-items: center;
                                        >div:nth-of-type(2) {
                                            padding-left: 0.6rem;
                                        }
                                    }
                                }
                            }
                            .video-small-picture {
                                width: 100%;
                                >a{
                                    width: 100%;
                                    >div:nth-of-type(1) {
                                        width: 100%;
                                        height: 7rem;
                                        display: flex;
                                        justify-content: flex-start;
                                        align-items: center;
                                        >div:nth-of-type(1) {
                                            width: 65%;
                                            height: 100%;
                                            >div:nth-of-type(1) {
                                                width: 100%;
                                                height: 65%; 
                                            }
                                            >div:nth-of-type(2) {
                                                width: 100%;
                                                display: flex;
                                                justify-content: flex-start;
                                                align-items: center;
                                                >div{
                                                    text-overflow: ellipsis;
                                                    overflow: hidden;
                                                    white-space: nowrap;
                                                }
                                                >div:nth-of-type(2) {
                                                    padding-left: 0.2rem;
                                                }
                                            }
                                        }
                                        >div:nth-of-type(2) {
                                            width: 35%;
                                            height: 100%;
                                            padding-left: 0.2rem;
                                            position: relative;
                                            >div:nth-of-type(1) {
                                                width: 100%;
                                                height: 100%;
                                                img{
                                                    width: 100%;
                                                    height: 100%;
                                                }
                                            }
                                            >div:nth-of-type(2) {
                                            width: 2.5rem;
                                            text-align: center;
                                            height: 1rem;
                                            position: absolute;
                                            right: 0.5rem;
                                            bottom: 0.5rem;
                                            z-index: 20;
                                            color: white;
                                            border-radius: 8px;
                                            background-color: #918f8f;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .gallery-classify {
                        width: 100%;
                        .gallery-title {
                            padding: 0.2rem;
                            background: #F7F7F7; 
                            display: flex; 
                            justify-content: space-between;
                            height: 1.5rem;
                            
                        }
                        li {
                            width: 100%;
                            padding: 0.2rem;
                            border-bottom: .0625rem solid #dcdcdc;
                            .gallery-big-picture{
                                width: 100%;
                                >a { 
                                    width: 100%;
                                    >div:nth-of-type(1) {
                                        width: 100%;
                                        height: 3rem;
                                        
                                        overflow: hidden;
                                        word-break: break-all;
                                        padding-bottom: 0.3rem;
                                    } 
                                    >div:nth-of-type(2) {
                                        width: 100%;
                                        height: 6rem;
                                        position: relative;
                                        >div:nth-of-type(1) {
                                            width: 100%;
                                            height: 100%;
                                            img{
                                                width: 100%;
                                                height: 100%;
                                            }
                                        }
                                        >div:nth-of-type(2) {
                                            width: 1rem;
                                            height: 1rem;
                                            text-align: center;
                                            border-radius: 6px;
                                            position: absolute;
                                            right: 1rem;
                                            bottom: 1rem;
                                            font-weight: 600;
                                            background-color: rgb(87, 85, 85);
                                            color: white;
                                        }
                                    } 
                                    >div:nth-of-type(3) {
                                        width: 100%;
                                        height: 2rem;
                                        display: flex;
                                        justify-content: flex-start;
                                        align-items: center;
                                        >div:nth-of-type(2){
                                            padding-left: 0.6rem;
                                        }
                                    }
                                }
                            }
                            .gallery-small-picture{
                                width: 100%;
                                >a { 
                                    width: 100%;
                                    >div:nth-of-type(1) {
                                        width: 100%;
                                        height: 7rem;
                                        display: flex;
                                        justify-content: flex-start;
                                        align-items: center;
                                        >div:nth-of-type(1) {
                                            width: 65%;
                                            height: 100%;
                                            >div:nth-of-type(1) {
                                                width: 100%;
                                                height: 65%; 
                                                // overflow: hidden;
                                                // text-overflow: ellipsis; 
                                                // display: -webkit-box;
                                                // -webkit-line-clamp: 3;
                                                // -webkit-box-orient: vertical; 
                                                overflow: hidden;
                                                word-break: break-all;
                                            }
                                            >div:nth-of-type(2) {
                                                width: 100%;
                                                display: flex;
                                                justify-content: flex-start;
                                                align-items: center;
                                                >div{
                                                    text-overflow: ellipsis;
                                                    overflow: hidden;
                                                    white-space: nowrap;
                                                }
                                                >div:nth-of-type(2) {
                                                    padding-left: 0.2rem;
                                                }
                                            }
                                        }
                                        >div:nth-of-type(2) {
                                            width: 35%;
                                            height: 100%;
                                            padding-left: 0.2rem;
                                            position: relative;
                                            >div:nth-of-type(1) {
                                                width: 100%;
                                                height: 100%;
                                                img{
                                                    width: 100%;
                                                    height: 100%;
                                                }
                                            }
                                            >div:nth-of-type(2) {
                                                width: 1rem;
                                                height: 1rem;
                                                text-align: center;
                                                border-radius: 6px;
                                                position: absolute;
                                                right: 1rem;
                                                bottom: 1rem;
                                                font-weight: 600;
                                                background-color: rgb(87, 85, 85);
                                                color: white;
                                            }
                                        }
                                    } 
                                }
                            }
                            .gallery-multipictures-picture{
                                width: 100%;
                                >a{
                                    width: 100%;
                                    >div:nth-of-type(1) {
                                        height: 3rem;
                                    
                                        overflow: hidden;
                                        word-break: break-all;  
                                        padding-bottom: 0.3rem;
                                    } 
                                    >div:nth-of-type(2) {
                                        width: 100%;
                                        height: 6rem;
                                        display: flex;
                                        justify-content: flex-start;
                                        align-items: center;
                                        position: relative;
                                        img{
                                            width: 33.333333333%;
                                            padding-right: 0.2rem;
                                            height: 100%;
                                        }
                                        >div:nth-of-type(1){
                                            width: 1rem;
                                            height: 1rem;
                                            text-align: center;
                                            border-radius: 6px;
                                            position: absolute;
                                            right: 1rem;
                                            bottom: 1rem;
                                            font-weight: 600;
                                            background-color: #575555;
                                            color: white;
                                        }
                                    }
                                    >div:nth-of-type(3) {
                                        width: 100%;
                                        height: 2rem;
                                        display: flex;
                                        justify-content: flex-start;
                                        align-items: center;
                                        >div:nth-of-type(2) {
                                            padding-left: 0.6rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .topic-classify{
                        width: 100%;
                        .topic-title {
                            padding: 0.2rem;
                            background: #F7F7F7; 
                            display: flex; 
                            justify-content: space-between;
                            height: 1.5rem;
                            
                        }
                        li{
                            width: 100%;
                            padding: 0.2rem;
                            border-bottom: .0625rem solid #dcdcdc;
                            .topic-no-graph {
                                width: 100%;
                                >a { 
                                    width: 100%;
                                    >div:nth-of-type(1) {
                                    height: 3rem; 
                                    overflow: hidden;
                                    word-break: break-all;
                                    
                                    }
                                    >div:nth-of-type(2) {
                                        height: 2.5rem;
                                        display: flex; 
                                        align-items: center;
                                        >div:nth-of-type(2){
                                            padding-left: 0.6rem;
                                        }
                                    }
                                }
                            }
                            .topic-small-picture {
                                width: 100%;
                                height: 5rem;
                                
                                >a {
                                    width: 100%;
                                    height: 100%;
                                    display: flex; 
                                    justify-content: space-around;
                                    align-items: center;
                                    >div:nth-of-type(1) {
                                        width: 65%;
                                        height: 100%; 
                                        >div:nth-of-type(1) {
                                            width: 100%;
                                            height: 60%;  
                                            overflow: hidden;
                                            word-break: break-all;
                                            text-overflow: -o-ellipsis-lastline;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                            display: -webkit-box;
                                            -webkit-line-clamp: 3;
                                            -webkit-box-orient: vertical;
                                        }
                                        >div:nth-of-type(2) {
                                            height: 40%;
                                            display: flex; 
                                            justify-content: space-around;
                                            align-items: center;
                                            padding-top: 0.1rem;
                                            >div{
                                                height: 100%;
                                                line-height: 1.3rem;
                                                text-overflow: ellipsis;
                                                overflow: hidden;
                                                white-space: nowrap;
                                            }
                                        }
                                    }
                                    >div:nth-of-type(2) { 
                                        width: 35%;
                                        padding-left: 0.2rem;
                                        height: 100%;
                                        img{
                                            width: 100%;
                                            height: 100%;
                                        }
                                    }
                                }
                            }
                            .topic-big-picture {
                                width: 100%; 
                                >a {
                                    width: 100%; 
                                    >div:nth-of-type(1) {
                                        height: 3rem;
                                    
                                        overflow: hidden;
                                        word-break: break-all;
                                        padding-bottom: 0.3rem;
                                    }
                                    >div:nth-of-type(2) {
                                        width: 100%;
                                        height: 6rem;
                                        img{
                                            width: 100%;
                                            height: 100%;
                                        }
                                    }
                                    >div:nth-of-type(3) {
                                        width: 100%;
                                        height: 2rem;
                                        display: flex;
                                        justify-content: flex-start;
                                        align-items: center;
                                        >div:nth-of-type(2) {
                                            padding-left: 0.6rem;
                                        }
                                    }
                                }
                            }
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
                }
            } 
    }
</style>

