<template>
    <div class="header"> 
        <div class="search_box"> 
            <div class="the-custom-search">
                <div  @click="showPopup"> 
                    <img src="../../static/img/gengduo.png" alt=""> 
                </div>
                <!-- <div  @click="menuShow=!menuShow;theKeyPagesSpain=false">
                    <img src="../../static/img/zuola.png" alt="">
                </div> -->
                <div @click="gohome()" v-if="myHome" class="go-home">
                    <img src="../../static/img/myhome.png" alt=""> 
                </div>  
                  <!-- <div   :class="[{'header-search1':!myHome},{'header-search2':myHome}]">
                    <div class="gcse-searchbox-only"></div>
                    
                </div> -->
                <div   class="header-search1">
                    <div class="gcse-searchbox-only"></div> 
                </div>


                 <!-- <div  @click="menuShow=!menuShow;theKeyPagesSpain=false">
                    <img src="../../static/img/zuola.png" alt="">
                </div> -->
                <!-- <div class="long-article" @click="longArticle()" v-show="article">
                    <img src="../../static/img/sousuo.png" alt=""> 
                </div>
                <div class="my-search sousuo">
                    <div>
                        <div class="hide-search" @click="hideSearch()">
                            <img src="../../static/img/xiangyou.png" alt="">
                        </div>
                        <div>
                            <input type="text" class="my-search-value"> 
                        </div>
                        <div @click="mySearchSpain()">
                            <img src="../../static/img/sousuo.png" alt="">
                        </div>
                    </div> 
                </div> 
               -->
            </div>  
        </div>
        <!-- 分类菜单 :overlay="false"-->
        <van-popup v-model="menuShow" position="top"   get-container=".index"   :style="{ height: 'auto',zIndex: '2222222', background: 'white',borderRadius: '0 0 20px 20px'}">
            <ul class="navber-menu"> 
                <li v-for="(item,index) in menuArr" :key="index" @click="sendOut(item.typeName)">
                    <router-link tag="div" :to="{path:'/esList', query: {id:item.id,inx:index,language:myLanguageCountry}}" >  
                        {{item.typeName}}
                    </router-link>
                </li> 
            </ul>
        </van-popup>
        <!-- 侧拉按钮 -->
        <van-popup v-model="theKeyPagesSpain" position="left" class="the-key-ages-spain" >
            <div class="close-the-key-ages-spain" @click="closeTheKeyPagesSpain()">
                <img src="../../static/img/left.png" alt="">
            </div> 
            <li class="about-us" @click="aboutUsSpain()">About us</li>
            <li class="term-of-use" @click="termOfUseSpain()">Term of use</li>
            <li class="privacy-policy" @click="privacyPolicySpain()">Privacy policy</li>
            <div>
            <div  class="newGoogleList">
                <ins class="adsbygoogle"
                    style="display:block"
                    data-ad-client="ca-pub-7936490518220507"
                    data-ad-slot="9933203291"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
export default {
    data () {
        return {
            menuShow : false,  // 分类菜单弹出层是否显示
            menuArr: [],   // 菜单列表
            theKeyPagesSpain: false,   // 侧拉页面 
            article : true,
            myHome : false,
        }
    },
    created () { 
        var s = document.createElement("script")  
        s.async = ""
        s.src = "https://cse.google.com/cse.js?cx=partner-pub-7936490518220507:hibffzlj6na"
        document.documentElement.append(s)
        this.myLanguage = this.$route.query.language.split("-")[0].toLocaleLowerCase()
        this.myLanguageCountry = this.$route.query.language
        this.myCountry =  this.$route.query.country
        if(this.$route.query.id != undefined) {
            this.myHome = true
        }
        else {
            this.myHome = false
        }
        this.getMenu() 
    },
    methods : {
         // 获取分类 
        getMenu () { 
            var url="loadAdAdvertise"  
            let formData = new FormData()
            formData.append('webType',2)
            formData.append('language',this.myLanguage)
            this.$axios.post(url,formData).then(res=>{
                for(var b of res.data) {
                    if(b.id != 29 && b.id!=28) {
                        this.menuArr.push(b)
                    } 
                } 
                // var b = { 
                //     id: 99999999, 
                //     startPage: 0,
                //     topTenArr: [], 
                //     typeName : "MSN NEWS",
                // }  
                // this.menuArr.push(b)
            }).catch(err=>{
                console.log(err)
            }) 
        },
         // 点击搜索显示搜索框
        longArticle(){
            this.article = !this.article
            // this.search = true
            document.querySelector(".sousuo").classList.add("my-search1") 
            document.querySelector(".sousuo").classList.remove("my-search")
        },
        hideSearch(){
            this.article = !this.article 
            document.querySelector(".sousuo").classList.add("my-search") 
            document.querySelector(".sousuo").classList.remove("my-search1")
        },
        // 自定搜索
        mySearchSpain () {
            var val = document.querySelector('.the-custom-search .my-search-value').value  
            var url = "https://www.zlsite.com/?channel=50198&q="  + val
            if(val != "") {
                gtag('event', 'click', { 
                'event_label':  "search", 
                'event_callback': function(){ 
                }
                }); 
                window.open(url)
            }
        },
        // 主页
        gohome() {
            this.$router.push({
                path :'/spain',
                query: {
                  language : this.myLanguageCountry,
                  country : this.myCountry
                }
              })
        },
        // 侧拉显示
        showPopup () { 
        this.theKeyPagesSpain = !this.theKeyPagesSpain
        this.menuShow = false
            setTimeout(res=>{
                this.dynamicInsertion()
            },1000) 
        }, 
        // 向谷歌分析发送报告
        sendOut (item) {  
            if(item != "") {
                gtag('event', 'click', { 
                'event_label':  item, 
                'event_callback': function(){ 
                    
                }
                }); 
            }
        },
        // 侧拉关闭
        closeTheKeyPagesSpain() {
            this.theKeyPagesSpain = false
        }, 
        termOfUseSpain() { 
            this.$router.push({
                path: '/termofuse',
                query : {
                    language: this.myLanguageCountry,
                    country : this.myCountry
                }
            }) 
        },
        aboutUsSpain() {
            this.$router.push({
                path: '/aboutUs',
                query : {
                    language: this.myLanguageCountry,
                    country : this.myCountry
                }
            }) 
        },
        privacyPolicySpain() {
            this.$router.push({
                path: '/privacyPolicy',
                query : {
                    language: this.myLanguageCountry,
                    country : this.myCountry
                }
            })  
        },
        // 新闻中插入的广告
        dynamicInsertion(){   
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
    },
    //路由监听
    watch : {
        '$route' (to,from) {
            this.$router.go(0)
        }
    },
}
</script>
<style>
    .gsc-input-box{
        padding-right: 1.2rem;
    }
</style>
<style lang="scss" scoped>
    .navber-menu{   
        width: 100%;
        margin-top: 2.3rem;
        >li{
            width: 100%;
            height: 2rem;  
            >div{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
                font-weight: 600;
                
            }
        }
    }
    .header{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 222222222; 
        // background: #f5eff1;
        background: #f5f5f5;
        display: flex;
        justify-content: space-between;
        zoom: 1;
        .search_box{
            width: 100%;
            z-index: 222222222; 
            >.the-custom-search {
                width: 100%;
                height: 2rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                position: relative;
            >div:nth-of-type(1) {
                width: 10%;
                height: 100%; 
                display: flex;
                align-items: center;
                justify-content: center;
                >img{
                    width: 80%;
                    height: 60%;
                }
            }
            >div.header-search1{
                width: 78%;
                height: 100%;
            }
            >div.header-search2{
                width: 58%;
                height: 100%;
            }
             >div.go-home {
                width: 10%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                >img{
                    width: 80%;
                    height: 70%;
                } 
            }
            // >div:nth-last-of-type(1) {
            //     width: 10%;
            //     height: 100%;
            //     display: flex;
            //     justify-content: flex-start;
            //     align-items: center;  
            //     margin-left: 38px;
            //     >img{
            //     width: 100%;
            //     height: 100%;
            //     }
            // }
            >div.long-article{
                position: absolute;
                right: 0;
                width: 10%;
                height: 100%;
                background-color: #1278F3; 
                display: flex;  
                justify-content: center;  
                align-items: center;
                border-radius: 5px;
                >img{
                    width: 25px;
                    height: 25px;
                }
            }
            >.my-search{
                width: 70%;
                height: 100%;  
                position: absolute;
                right: -2000px;
                top: 0; 
                transition: right 2s;
                >div{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    position: relative;
                    .hide-search{
                        width: 10%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                    >div:nth-of-type(2){
                        width: 85%;
                        input{
                            width: 100%;
                            height: 100%;
                            padding-left: 10px;
                            border: 2px solid #1278F3; 
                        }
                    }
                    >div:nth-of-type(3){
                        width: 15%;
                        height: 100%;
                        background-color: #1278F3; 
                        display: flex;  
                        justify-content: center;  
                        align-items: center;
                        border-radius: 0 5px 5px 0;
                        >img{
                            width: 25px;
                            height: 25px;
                        }
                    } 
                }
                
            }
            .sousuo{  
                // position: absolute;
                // right: -10000px;
                // top: 0; 
                // transition: right 2s;
                >div{
                    width: 100%;
                    height: 100%;
                    position: relative;
                    display: flex;
                    .hide-search{
                        width: 10%;
                        height: 100%;
                            
                        >img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            .my-search1{  
                width: 70%;
                right: 0; 
                height: 100%;  
                position: absolute; 
                top: 0; 
                transition: right 1s;
                >div{
                    width: 100%;
                    height: 100%;
                    position: relative;
                    display: flex;
                    .hide-search{
                        width: 8%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        display: flex;
                        align-items: center;
                        >img{
                            width: 100%;
                            height: 80%;
                        }
                    }
                    >div:nth-of-type(2){
                        width: 85%;
                        height: 100%;
                        input{
                            width: 100%;
                            height: 100%;
                            padding-left: 12%;
                            border: 2px solid #1278F3; 
                        }
                    }
                    >div:nth-of-type(3){
                        width: 15%;
                        height: 100%;
                        background-color: #1278F3; 
                        display: flex;  
                        justify-content: center;  
                        align-items: center;
                        border-radius: 0 5px 5px 0;
                        >img{
                            width: 25px;
                            height: 25px;
                        }
                    } 
                }
                
            }
            // >div:nth-of-type(5) {
            //     width: 12%;
            //     height: 100%;
            //     background-color: #1278F3;
            //     display: flex;
            //     justify-content: center;
            //     align-items: center;
            //     border-radius:  0 5px 5px 0 ;
            //     >img {
            //         width: 25px;
            //         height: 25px;
            //         }
            //     }
            }  
            background: #f8f8f8;
            top: 0;
            padding:.25rem;
            display: flex;
            justify-content: space-between;
            
            }
        .the-key-ages-spain  {
            margin-top: 2.2rem;
        }
        .the-key-ages-spain select{
            height: 2.5rem; 
            width: 84%;
            padding-left: 1.5rem;
            margin: 0 8%;
            margin-top: 1rem; 
            border-color: #e5e5e5;
            font-family: "Times New Roman", Times, serif;
            background-image: linear-gradient(to right, #329EC6, #428beb) !important;
        }
        .the-key-ages-spain .close-the-key-ages-spain{
            margin-left: .2rem;
            margin-top: .4rem;
            width: 9%;
            height: 1.5rem; 
            opacity: 1;
            }
            .the-key-ages-spain .close-the-key-ages-spain>img{
            
            width: 100%;
            height: 100%;
        } 
        .the-key-ages-spain{
            width: 100%;
            height: 100%;
            // background-color: #7d7e80 !important;
            background-image: linear-gradient(to right, #329EC6, #428beb) !important;
            opacity: 0.96;
            font-family: "Times New Roman", Times, serif;
        }
        
        .the-key-ages-spain >li{
            width: 100%;
            height: 4rem; 
            line-height: 4rem;  
            padding-left: 1.5rem;
            border-bottom: 1px solid #d6d6d6;   
            color: #000000;
            font-size: 0.9rem;
        }
    }
   
</style>