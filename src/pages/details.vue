<template>
    <div class="details">
        <div class="top_return">
            <img src="../../static/img/left.png" alt="" @click="goBack">
            <img src="../../static/img/Home.png" alt="" @click="goHome"> 
        </div>
        <!-- 语言为 en 的头部广告 不是子域名打开-->
        <div class="google-list" v-if="myLanguage == 'en'">
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-format="fluid"
                data-ad-layout-key="-gk+41+4c-dz+df"
                data-ad-client="ca-pub-7936490518220507"
                data-ad-slot="1750171572"></ins>
        </div>
        
        <!-- 语言为 es 的头部广告 -->
        <div class="google-list" v-if="myLanguage == 'es'">
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-format="fluid"
                data-ad-layout-key="-fb+5w+4e-db+86"
                data-ad-client="ca-pub-7936490518220507"
                data-ad-slot="5529566610"></ins>
        </div>

        <!-- 语言为 pt 的头部广告 -->
        <div class="google-list" v-if="myLanguage == 'pt'">
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-7936490518220507"
                data-ad-slot="1234530169"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>

        <div>
            <h1 class="my-h1">{{title}}</h1>
            <div class="my-time">{{myTime}}</div>
        </div>
        <div class="details-video" v-if="videoUrl != ''">
            <video :src="videoUrl" controls="controls" :poster="videoImgUrl"> 
            </video>
        </div>
        <div class="details-figure-img" v-if="videoUrl == '' && figureImg != ''">
            <img :src="figureImg" alt="">
        </div>
        <div class="details-long" v-if="hiddenDetailsLong">
            <div class="get-details-data" v-html="detailsData"> 
            </div>
            <!-- <div class="tolang" @click="tolangClick" v-show="tolang"> 
                <img src="../../static/img/shuangxia.png" alt="">
            </div> -->
        </div>

        <!-- 语言为 en 的底部广告 不是子域名-->
        <div class="google-list"  v-if="myLanguage == 'en'"> 
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-format="fluid"
                data-ad-layout-key="-fb+5w+4e-db+86"
                data-ad-client="ca-pub-7936490518220507"
                data-ad-slot="7473437786">
            </ins> 
        </div>
       
        <!-- 语言为 es 的底部广告 -->
        <div class="google-list"  v-if="myLanguage == 'es'"> 
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-format="fluid"
                data-ad-layout-key="-ef+6k-30-ac+ty"
                data-ad-client="ca-pub-7936490518220507"
                data-ad-slot="2655991267"></ins>
        </div>

        <!-- 语言为 pt 的底部广告 -->
        <div class="google-list"  v-if="myLanguage == 'pt'"> 
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-7936490518220507"
                data-ad-slot="2599103795"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>

        <div class="recommended">
            <div>Recommended News</div>
            <ul class="sort_box"> 
                <li class="sort_content_box" v-for="(item2,index2) in recommendedArr " :key="index2">  
                    <!-- 跳转到本项目 -->
                    <a  @click="forcedToRefresh(item2,item2.web_name)" v-if="item2.web_url == ''" :class="item2.is_small==2?'':''">
                        <div class="img_box" v-if="item2.is_small==1">
                            <img  v-lazy="item2.logo_url"   alt="No pictures found" >
                        </div>
                        <div class="img_box" v-if="item2.is_small==2">

                            <img  v-lazy="item2.logo_url"   alt="No pictures found" >
                        </div>
                        <div class="img_box" v-if="item2.is_small==3"> 
                            <img  v-lazy="item2.logo_url.split('||')[0]"   alt="No pictures found" >
                        </div>
                        <div :class="item2.is_small==0?'sort_content0': (item2.is_small==1 || item2.is_small==2 || item2.is_small==3)?'sort_content1':'sort_content2'">
                           
                            <div>
                                <!-- 语言为英语的显示strong标签 其他语言不显示--> 
                                <!-- <strong v-if="myLanguage == 'en'">{{classificationArr.find((element) => { return element.id == item2.parent_id}).typeName}} 
                                    <img src="../../static/img/lianjie.png" alt="">
                                </strong> -->
                                {{item2.web_name}}
                            </div>

                            <div>
                             <div>{{new Date(item2.modify_tm.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                             <div>{{item2.source}}</div>
                          </div>


                        </div> 
                    </a>  

                    <!-- 跳转到别人 -->
                    <a :href="item2.web_url" v-if="item2.web_url != ''" :class="item2.is_small==2?'':''">
                        <div class="img_box" v-if="item2.is_small==1">
                            <img  v-lazy="item2.logo_url"   alt="No pictures found" >
                        </div>
                        <div class="img_box" v-if="item2.is_small==2">
                            <img  v-lazy="item2.logo_url"   alt="No pictures found" >
                        </div>
                        
                        <div :class="item2.is_small==0?'sort_content0': (item2.is_small==1 || item2.is_small==2)?'sort_content1':'sort_content2'">
                            <div>
                                <!-- 语言为英语的显示strong标签 其他语言不显示-->
                                <!-- <strong v-if="myLanguage == 'en'">{{classificationArr.find((element) => { return element.id == item2.parent_id}).typeName}} 
                                    <img src="../../static/img/lianjie.png" alt="">
                                </strong> -->
                                {{item2.web_name}}
                            </div>
                             <div>
                                <div>{{new Date(item2.modify_tm.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                                <div>{{item2.source}}</div>
                            </div>
                        </div> 
                    </a> 

                    <!-- 语言为en的广告 -->
                    <div v-if="index2 == 1 && myLanguage == 'en'">
                        <div class="newGoogleList">
                            <ins class="adsbygoogle"
                                style="display:block"
                                data-ad-format="fluid"
                                data-ad-layout-key="-gk+2r+8j-t-ne"
                                data-ad-client="ca-pub-7936490518220507"
                                data-ad-slot="5440344383"></ins> 
                        </div>
                    </div>
                     
                    <!-- 语言为es的广告 -->
                    <div v-if="index2 == 1 && myLanguage == 'es'">
                        <div class="newGoogleList">
                            <ins class="adsbygoogle"
                                style="display:block"
                                data-ad-format="fluid"
                                data-ad-layout-key="-fb+5w+4e-db+86"
                                data-ad-client="ca-pub-7936490518220507"
                                data-ad-slot="7225791661"></ins>
                        </div>
                    </div>

                    <!-- 语言为pt的广告 -->
                    <div v-if="index2 == 1 && myLanguage == 'pt'">
                        <div class="newGoogleList">
                            <ins class="adsbygoogle"
                                style="display:block"
                                data-ad-format="fluid"
                                data-ad-layout-key="-6t+ed+2i-1n-4w"
                                data-ad-client="ca-pub-7936490518220507"
                                data-ad-slot="5340817200"></ins>
                        </div>
                    </div>

                </li> 
            </ul>
        </div>

       <van-image-preview
            v-model="showMaxImg"
            :images="MaxImgArr" 
            :start-position = "startMaxImg"
            :show-index = false
            > 
        </van-image-preview>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tolang:true,//显示太长
            detailsData : "", // 详情数据
            queryId : "",    // 查询ID
            title : "",  // 标题
            videoUrl: "",  // 视频路径
            videoImgUrl : "", // 视频封面地址
            recommendedArr : [],  // 推荐新闻,
            myTime: "",   // 新闻时间
            typeName: "", // 当前新闻类型
            judgeId: "", // 判断是否是视频的id   如果是 隐藏掉details-long
            hiddenDetailsLong : true,
            classificationArr: [], // 存储分类
            myLanguage: "",   //  跳转到详情页是从英语版本语言还是西班牙版本语言跳转过来的 
            myLanguageCountry : "", // 包括国家
            showMaxImg: false,  // 全屏显示图片
            MaxImgArr : [],    // 全屏需要显示图片的数据
            startMaxImg : 0,   // 图片预览位置 
            figureImg : "", // 标题下的缩略图
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
        this.queryId = this.$route.query.judgeId 
        if(this.queryId == 5) {
            this.hiddenDetailsLong = false
        }
        this.queryId = this.$route.query.id  
        // this.typeName = this.$route.query.type_name 
        this.getDetailsData()
        
        // 获取分类
        this.getClassificationTitle1()
    },
    mounted () {
        var myVar=setTimeout(() => {
            var oDom=Array.from(document.getElementsByClassName("google-list")) 
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
    methods : {
        forcedToRefresh(item) {  
            var typeName = this.classificationArr.find((element) => { return element.id == item.parent_id}).typeName
            this.$router.push(
                {
                    path:'/type', 
                    query: { 
                        id: item.id,
                        type_name : typeName,
                        judgeId: item.parent_id,
                        language: this.myLanguageCountry,
                        goBack:1
                    }
                }
            )
            var myVar1=setTimeout(() => {
                this.$router.go(window.location.href);
                window.scrollTo(0,0);  
            }, 10);   
        },
        // 点击显示详情
        tolangClick(){
            this.tolang=false;
            document.getElementsByClassName('details-long')[0].style.overflow ="auto" 
            document.getElementsByClassName('details-long')[0].style.height ="auto"
             this.dynamicInsertion()
             this.operation()
        },
        // 显示详情之后的一些操作
        operation () {
            // 去除A标签的跳转 
            var as = Array.from(document.querySelectorAll(".get-details-data a"))
            for(var i of as) {
                i.setAttribute("href","javascript:void(0)");
                i.setAttribute("target","");
            }  

            // 
            var fatherDiv = document.querySelector(".get-details-data>div")
            var sonDivs = document.querySelectorAll(".get-details-data>.l-container>div")
            if(sonDivs.length ==0) {
                sonDivs = document.querySelectorAll(".elementor-widget-container p")
            }
            if(sonDivs.length ==0) {
                sonDivs = document.querySelectorAll(".get-details-data>.field-items p")
            } 
            if(sonDivs.length ==0) {
                sonDivs = document.querySelectorAll(".get-details-data>p")
            } 
            if(sonDivs.length ==0) {
                sonDivs = document.querySelectorAll(".get-details-data>div")
            }
            if(sonDivs.length ==0) {
                sonDivs = document.querySelectorAll(".get-details-data>.articlebody>p")
            } 
            
            
            var l = sonDivs.length;
            // 广告随机 
            var d = parseInt(Math.random()* (l- parseInt( (l/2) ) )+0)  
            
            var div = document.createElement("div")
            // 插入广告代码
            var s = ""
            if(this.myLanguage == 'en') { 
                    s = '<div  class="newGoogleList"><ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout-key="-6u+dg+58-2b-89" data-ad-client="ca-pub-7936490518220507" data-ad-slot="6656661744"> </ins> </div> '
                
                
            }
            else if(this.myLanguage == 'es'){
                s = '<div  class="newGoogleList"><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="9113588404" data-ad-format="auto" data-full-width-responsive="true"></ins></div> '
            }
            else {
                s = '<div  class="newGoogleList"><ins class="adsbygoogle" style="display:block; text-align:center;"  data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-7936490518220507" data-ad-slot="3453020462"></ins></div> '
            }
            div.innerHTML = s 
            //  做最后的判断 如果全部都没有找到插入广告的位置 就在第一个位置插入 (就是详情页数据是纯文本) firstChild
            if(sonDivs.length ==0) { 
                document.querySelector(".get-details-data").insertBefore(div,document.querySelector(".get-details-data").firstChild)
            }
            else {
                sonDivs[d].parentNode.insertBefore(div, sonDivs[d].nextSibling);
            }  

            var img = document.querySelectorAll(".get-details-data .media__image--responsive")
            for(var obj of img) {
                obj.src = "https://" +  obj.dataset.srcMedium  
            }    
            if(document.querySelectorAll(".js-el__video__replayer-wrapper.el__video__replayer-wrapper").length > 0) {
                 var redundant = document.querySelectorAll(".js-el__video__replayer-wrapper.el__video__replayer-wrapper")
                 for(var b of redundant) {
                     b.parentNode.removeChild(b)
                 }
                
            }
           
            // 另一个网站详情页的操作
            if(document.querySelectorAll(".ecommerce__image.js-lazy-load").length > 0) {
                 var redundant = document.querySelectorAll(".ecommerce__image.js-lazy-load")
                 for(var b of redundant) {
                     b.setAttribute("src",b.getAttribute("data-src")) 
                 } 
            }
            // 网站2
            if(document.querySelectorAll(".image--full.lazy-load__img.js-lazy-load").length > 0) {
                 var redundant = document.querySelectorAll(".image--full.lazy-load__img.js-lazy-load")
                 for(var b of redundant) {
                     b.setAttribute("src",b.getAttribute("data-src")) 
                 } 
            }
            // 网站3
            if(document.querySelectorAll("a.play-news").length > 0) {
                 var redundant = document.querySelectorAll("a.play-news")
                 for(var b of redundant) {
                     b.parentNode.removeChild(b,b.parentNode) 
                 } 
            }
        },
        // 广告代码
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
        // 获取详情数据
        getDetailsData(){ 
            var url="getNewsDetail"
            let formData = new FormData() 
            formData.append('newsId', this.queryId)
            this.$axios.post(url,formData).then(res=>{
                this.detailsData=res.data.newsContent   
                this.detailsData = this.detailsData.replace("PT Jornal © 2018 Todos os direitos reservados.","") 
                this.title = res.data.newsTitle
                this.myTime = res.data.addTime
                this.videoUrl = res.data.videoUrl
                this.videoImgUrl = res.data.videoImg 
                this.figureImg = res.data.videoImg
                
                // 更改title 标签里的值
                var title = document.querySelector("title")
                title.innerHTML = this.title 

                setTimeout(() => {
                    if(document.querySelector(".article-meta") != undefined) {
                      document.querySelector(".article-meta").parentNode.removeChild(document.querySelector(".article-meta"))
                    } 
                    //dock__close dock__button dock__button--hidden hidden
                    if(document.querySelector(".dock__move.dock__button.dock__button--hidden.hidden") != undefined) {
                      document.querySelector(".dock__move.dock__button.dock__button--hidden.hidden").parentNode.removeChild(document.querySelector(".dock__move.dock__button.dock__button--hidden.hidden"))
                    }
                    if(document.querySelector(".dock__close.dock__button.dock__button--hidden.hidden") != undefined) {
                      document.querySelector(".dock__close.dock__button.dock__button--hidden.hidden").parentNode.removeChild(document.querySelector(".dock__close.dock__button.dock__button--hidden.hidden"))
                    } 
                    if(document.getElementById("rail") != undefined) {
                      document.getElementById("rail").parentNode.removeChild(document.getElementById("rail"))
                    }
                     // 另一个网站的操作
                    
                    if(document.querySelector(".contain .control") != undefined) {
                      document.querySelector(".contain .control").parentNode.removeChild(document.querySelector(".contain .control"))
                    }
                    if(document.querySelector(".contain .overlay") != undefined) {
                      document.querySelector(".contain .overlay").parentNode.removeChild(document.querySelector(".contain .overlay"))
                    }  
                    // 删除指定的图片路径
                    if(document.querySelector(".contain img") != undefined) {  
                      if(document.querySelector(".contain img").src == 'https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2019/05/06/931/524/694940094001_6033508755001_6025576909001-vs.jpg?ve=1&tl=1'){
                        document.querySelector(".contain  img").parentNode.removeChild(document.querySelector(".contain  img"))
                      } 
                       
                    } 
                    // 另一个网站的详情操作 
                    if(document.querySelectorAll(".get-details-data>.field-items>.field-item.even>p").length > 0) {
                        var  p = document.querySelectorAll(".get-details-data>.field-items>.field-item.even>p")
                        for(var i of p) { 
                            if(i.innerHTML == "&nbsp;") {
                                i.parentNode.removeChild(i)
                            } 
                        }
                    }
                    // 去除A标签的跳转 
                    var as = Array.from(document.querySelectorAll(".get-details-data a"))
                    for(var i of as) {
                        i.setAttribute("href","javascript:void(0)");
                        i.setAttribute("target","");
                    }
                    
                    // 隐藏掉下拉才显示所有数据的操作 
                    this.operation()
                    this.dynamicInsertion()
                }, 100);
                
                // 必须等图片完全加载出来
                setTimeout((res) => {
                    // 获取全屏需要显示的图片地址
                    this.MaxImgArr = [] 
                    var fullScreen = Array.from(document.querySelectorAll(".get-details-data img"))
                    var that = this
                    for(let i =0 ; i <fullScreen.length; i++) {
                        that.MaxImgArr.push(fullScreen[i].getAttribute("src"))  
                        fullScreen[i].onclick = function () {
                            that.showMaxImg = true 
                            that.startMaxImg = i
                        }
                    } 
                },2000)
                
            }).catch(err=>{
                console.log(err)
            })
        },
        // 获取相关新闻数据
        getRecommendedArr() { 
            var url="loadPageByAdvertise"
            let formData = new FormData() 
            var i = parseInt(Math.random() * (10-1) +1 )
            formData.append('webType',2)
            formData.append('pSize',5)
            formData.append('language',this.myLanguage)
            formData.append('pIndex', i)
            // formData.append('typeName',this.typeName)  
            this.$axios.post(url,formData).then(res=>{
                this.recommendedArr = res.data  
                this.dynamicInsertion()
            }).catch(err=>{
                console.log(err)
            })
        },
         goBack(){   
            if(this.$route.query.goBack != undefined) {
                this.$router.go(-1)   
                setTimeout(() => { 
                    if(this.$route.query.id != undefined) {
                        this.$router.go(window.location.href);
                        window.scrollTo(0,0);  
                    }
                }, 500);
            }
            else {
                this.goHome()
            } 
        },
        goHome(){ 
            if(this.myLanguage == "es") { 
                var guo;
                var language;
                if(this.myLanguageCountry.split("-")[1] == undefined) {
                    language = "es-MX"
                    guo = "MX"
                }
                else { 
                    language = this.myLanguageCountry
                    guo = this.myLanguageCountry.split("-")[1]
                }  
                this.$router.push({
                    path :'/spain',
                    query: {
                    language : language,
                    country : guo
                    }
                })
            }
            else if (this.myLanguage == "pt") {
                
                var guo1;
                var language1;
                if(this.myLanguageCountry.split("-")[1] == undefined) {
                    language1 = "pt-BR"
                    guo1 = "BR"
                }
                else { 
                    language1 = this.myLanguageCountry
                    guo1 = this.myLanguageCountry.split("-")[1]
                   
                }
                this.$router.push({
                    path :'/spain',
                    query: {
                    language : language1,
                    country : guo1
                    }
                })
            }
            else {
                this.$router.push({path:"/"})
            }
            // 葡萄牙或者西班牙过来的
            // if(this.myLanguage == "es" || this.myLanguage == "pt") {
            //     // 存在浏览器语言
            //     if(navigator.language != undefined) {
            //         var language = navigator.language
            //         var yu =  language.split("-")[0].toLocaleLowerCase() 
            //         var guo = language.split("-")[1]
            //         if(yu  == 'es' || yu  == 'pt') { 
            //             this.$router.push({
            //                 path :'/spain',
            //                 query: {
            //                 language : language,
            //                 country : guo
            //                 }
            //             })
            //         } 
            //         else {
            //             // 有浏览器语言 但不是西班牙和葡萄牙语
            //             this.$router.push({
            //             path :'/spain',
            //             query: {
            //                 language : 'es-MX',
            //                 country : 'MX'
            //             }
            //             })
            //         }
            //     }
            //     // 没有浏览器语言
            //     else {
            //         this.$router.push({
            //         path :'/spain',
            //         query: {
            //             language : 'es-MX',
            //             country : 'MX'
            //         }
            //         })
            //     } 
            // }
            // // 英语过来的
            // else {
            //     this.$router.push({path:"/"})
            // }
            
        },
         // 获取分类标题
        getClassificationTitle1(){ 
            var url="loadAdAdvertise"  
            let formData = new FormData()
            formData.append('webType',2)
            this.$axios.post(url,formData).then(res=>{    
                this.classificationArr = res.data   
                this.getRecommendedArr()
            }).catch(err=>{
                console.log(err)
            }) 
        },
    }
}
</script>
<style>
    .details .van-overlay{
        opacity: 1;
    }
    
    .get-details-data iframe{
        width: 100% !important;
    }
    .google-list{
        z-index: 22;
    }
    h3{ 
        font-weight: bold !important;
        font-weight: 1000 !important;
        margin: 0.5rem 0 !important;
    }
    .get-details-data {
        width: 100%; 
    }  
    .get-details-data img{
        width: 100%; 
    }
     /* 网站3样式修改 */
    .wp-caption.alignnone{
        width: 100% !important; 
    }
    .wp-caption.alignnone>img{
        width: 100% ;
        height: 10rem; 
    }
    .get-details-data p {
        width: 100%;
    }
    figure {
        margin: 0;
    }
</style>

<style lang="scss" scoped>
    div {
        line-height: 2;
    } 
    .details{
        padding: 0.5rem;
        margin-bottom: 1rem;
        height: 100%;
        .top_return{
            width: 100%;
            z-index: 1111;
            position: fixed;
            top: 0;
            left: 0;
            height: 1.875rem;
            padding: 0 .625rem; 
            display: flex;
            justify-content: space-between;
            background-color: #7d7e80;
            img{
                width: 1.25rem;
                height: 1.25rem;
                margin-top: .3125rem;
            }
        }
        h3{ 
            font-weight: bold;
            font-weight: 1000;
            margin: 0.5rem 0;
        }
        .my-h1{
            width: 100%; 
            padding-top: 0.2rem;
            font-size: 22px;
            text-align: justify;
            line-height: 30px; 
            margin: 0;
            color: #333;
            font-family: Helvetica Neuce,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Heiti SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
            word-break: break-all;
        }
        >div:nth-of-type(2) {
            margin-top: 1.875rem;
        }
        >div:nth-of-type(3) {
            h1 {
                width: 100%; 
                padding-top: 0.2rem;
                font-size: 22px;
                text-align: justify;
                line-height: 30px; 
                margin: 0;
                color: #333;
                font-family: Helvetica Neuce,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Heiti SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
                word-break: break-all;
            }
            >.my-time{
                height: 20px;
                font-size: 14px;
                font-family: "\5fae\8f6f\96c5\9ed1 light";
                font-weight: 400;
                color: #999;
                line-height: 20px;
                margin: 2px 0  0px 0;
            }
        }
        .details-video{
            width: 100%;
            height: 200px;
            video {
                width: 100%;
                height: 100%;
                object-fit: fill;
            }
        }
        .details-figure-img{
            width: 100%; 
            padding: 0.2rem;
            >img{
                width: 100%; 
            }
        }
        .details-long {
            overflow: hidden;
            // height: 18rem;
            position: relative;
            margin-top: 0.5rem;
            width: 100%;
            text-align: justify;
            // padding-top:1.875rem;
            // background: url(../../static/img/flower_details_rectangle.png) no-repeat top left  / 100%;
            .tolang{
                position: absolute;
                bottom:0;
                width: 100%;
                height: 3rem;
                margin-top:  -1.8rem;
                text-align: center; 
                // background-image: linear-gradient(top,rgba(245,239,241,0),rgb(108, 177, 247));
                background-image: linear-gradient(top,rgba(245,239,241,0),rgba(238, 238, 238, 0.8));
                // background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(245,239,241,0)),to(rgba(	255,182,193,.8)));
                display: flex;
                justify-content: center;
                // align-items: center;
                    // .iconfont{
                    //     line-height: 1.875rem;
                    //     font-size: .8rem;
                    //     color: #FFB6C1;
                    // }
                    img{
                        width: 24px;
                        height: 24px;
                        animation: myanimation .8s linear infinite;
                    }
                     @keyframes myanimation
                    {
                        0%   {transform:translateY(0rem);} 
                        50%  {transform:translateY(1rem);} 
                        // 75%  {transform:translateY(1rem);}
                        100% {transform:translateY(1.5rem);}
                    }
                }
        }
        .recommended{
            width: 100%;
            z-index: 2222222222222;
            >div:nth-of-type(1) {
                width: 100%;
                height: 2rem;
                line-height: 2rem;
                font-size: 16px;
                font-weight: 800;
                color: rgb(83, 83, 83);
            }
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
                 .sort_content_box{
      padding: .3rem 0;
    //   padding-top: 0.2rem;
      border-bottom: .0625rem solid #dcdcdc;
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
        display: flex;
        z-index: 2222;
        .img_box{
          width:30%;
          height: 4.5rem;
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
          img{
            width: 100%;
            height: 100%;
            max-height: 10rem;
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
              // font-size: .45rem; 
              // border-radius: 3px;
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
                color: #8a8a8a;
                font-size: 0.4rem;
             }
              >div:nth-of-type(2){ 
                  padding-left: 0.2rem;
                   color: #8a8a8a;
                font-size: 0.4rem;
              }
            }
        }
        .sort_content1,.sort_content2{
        //     >div:nth-of-type(1){
        //     word-wrap:break-word;
        //     overflow: hidden;
        //     text-overflow: ellipsis;
        //     -webkit-line-clamp: 3;
        //     -webkit-box-orient: vertical;
        //     display: -webkit-box; 
        //     font-size: .75rem; 
        //     line-height: 0.98rem;
        //     width:100%; 
        //     height: 2.8rem;
        //     overflow: hidden; 
        //     justify-content: space-around;
        //     word-spacing: 5px;
        //   }
        //    >div:nth-of-type(2){ 
        //     height: 1.5rem; 
        //     font-weight: 600;
        //     width: auto; 
        //     font-size: .45rem;
        //     color: #409EFF;  
        //     border-radius: 3px;
        //     word-spacing: 5px;
             
        //     >strong{
        //           height: 1.2rem;
        //       line-height: 1.2rem;
        //       display: inline-block;
        //       margin-top: 0.2rem;
        //       font-weight: 600;
        //       width: auto;
        //       padding:0 5px; 
        //       font-size: .45rem;
        //       color: #409EFF;
        //       background: #ecf5ff;
        //       border: 1px solid #b3d8ff;
        //       border-radius: 3px; 
        //     }
        //   }

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
                color: #8a8a8a;
                font-size: 0.4rem;
             }
            >div:nth-of-type(2){ 
                padding-left: 0.2rem; 
                color: #8a8a8a;
                font-size: 0.4rem;
            }
          }
        }
        .sort_content1,.sort_content0,.sort_content2,.sort_contentGame{
            strong{
                font-weight: 500;
                width: auto;
                font-size: .45rem;
                color: #0080ff;
                border: 1px solid #b3d8ff;
                border-radius: 3px;
                height: 1rem;
                line-height: 0.95rem;
                padding: 0px 3px 3px 3px;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                vertical-align: text-bottom;
                display: inline-block;
                text-align: center;
                 >img{
                    // vertical-align: text-bottom;
                    margin-left: -5px;
                }
            }
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            font-weight: 600;
            word-spacing: 5px;
            font-size: .75rem;
            // color: #666666;
            line-height: 1.27rem;
            width:70%;
            padding-left:.625rem ;
            height: 4.5rem;
            overflow: hidden;
            word-wrap:break-word;
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
        }
    }
    
</style>
