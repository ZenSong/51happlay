
<template>
  <div class="aboutus">
    <div class="navber">
      <div class="left" @click="go_back">
          <img src="../../static/img/left.png" alt="">
      </div>
      <div class="title">
          About us
      </div>
      <div class="right">
      </div>
    </div>
    <div class="aboutus_box">
        <p class="title">About us:</p> 
        <p class="content">
         51happlay.com is a professional news and information site.To bring the highest level of service and satisfaction to our customers.51happlay.com is dedicated to providing exceptional service to our customers.We appreciate your support over the years.
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutus',
  data () {
    return {
    }
  },
  
  methods:{
    go_back(){  
       if(this.$route.query.language != undefined) {
            var myLanguage = this.$route.query.language.split("-")[0].toLocaleLowerCase()
            var myLanguageCountry = this.$route.query.language 
            if(myLanguage == "es") { 
                var guo;
                var language;
                if(myLanguageCountry.split("-")[1] == undefined) {
                    language = "es-MX"
                    guo = "MX"
                }
                else { 
                    language = myLanguageCountry
                    guo = myLanguageCountry.split("-")[1]
                }  
                this.$router.push({
                    path :'/spain',
                    query: {
                    language : language,
                    country : guo
                    }
                })
            }
            else if (myLanguage == "pt") { 
                var guo1;
                var language1;
                if(myLanguageCountry.split("-")[1] == undefined) {
                    language1 = "pt-BR"
                    guo1 = "BR"
                }
                else { 
                    language1 = myLanguageCountry
                    guo1 = myLanguageCountry.split("-")[1]
                    
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
        }
        else {
            this.$router.push("/")
            
        } 
    },
  
  },
}
</script>
<style lang="scss" scoped>
.aboutus{
    margin-top: 2.5rem;
    
}
.navber{
   height: 2.2rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2019;
  padding: .3125rem .625rem;
  // background: #f5eff1;
  background-color: #7d7e80 !important;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  .left{
    height:1.5625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >img{
       height: 80%;
    }
  }
  .title{
    color: white;

   line-height:1.5625rem;
    font-size: 0.9rem;
  }
  .right{
    height: 1.5625rem;
    padding:0 .5rem;
    img{
      margin-top: .3125rem;
    }
  }
}
.aboutus_box{
//   margin:  9.375rem .625rem 0 .625rem;
  .title{ 
    line-height:1.25rem;
    padding:.625rem  .625rem 0 .625rem; 
  }
  .content{
    font-size: .625rem;
    line-height: 1.25rem;
    padding: .625rem;
    text-indent: 1.25rem;
    word-spacing: 3px;
    text-align: justify; 
  }
}
</style>