<template>
    <div class="my-privacy-policy">
        <div class="navber">
            <div class="left" @click="go_back">
                <img src="../../static/img/left.png" alt="">
            </div>
            <div class="title">
                Privacy policy
            </div> 
            <div class="right">
            </div>
        </div>
        <div class="privacy-policy-content">
            <h1>PRIVACY POLICY</h1>
            <div><span>51happlay.com</span> was developed by a team of developers in Hong Kong.</div>
            <h3>Last Modified: July 11, 2018</h3>
            <div class="privacy-policy-title">Overview</div>
            <div>Your privacy is very important to us. We keep the following fundamental guidelines when operating our service (website & apps):</div>
            <ul>
                <li>We don't ask you for personal information unless we truly need it.</li>
                <li>We don't store sensitive personal information on our servers.</li>
                <li>The applications do not send us any critically important information like your login credentials; instead those are encrypted and stored locally in your device.</li>
                <li>Your social information displayed to other people is subjected to the restrictions and permissions that you have defined in your account in each of your social networks.</li>
                <li>We don't share your information with anyone except to comply with the law.</li>
                <li>We may use non-personal statistical information to analyze the use in our website and apps, and that's in order to improve our service; diagnose technical problems, improve UI and features, maintain security, etc.</li>

            </ul>
            <div>The Privacy Policy applies to all users of the Service, including developers, users who are also contributors of content, information, and other materials or services.</div>
            <div class="privacy-policy-title">Acceptance of Policy</div>
            <div>By accessing, browsing and/or using the services, you acknowledge that you have read understood, and agree to the Privacy Policy, including any future modifications. If you do not agree to the policy, then please cease using the services.</div>
            <div class="privacy-policy-title">Modification of Policy</div>
            <div>
                This Privacy Policy is subject to revision from time to time on a going-forward basis. We will post any revised version of the Privacy Policy. If we modify the Privacy Policy, we will post the modifications on the website. The most current version will be always located under the "Privacy Policy" page. We will also indicate the last-modified date which is also the last effective date at the top of this page. We don't send direct personal notifications to users when modifications occur. By continuing to access or use the services after we have posted a modification on the website, you are indicating that you agree to be bound by 
                the modified Privacy Policy. If the modified Privacy Policy is not acceptable to you, your only recourse is to cease using the services.
            </div>
            <div class="privacy-policy-title">Personally Identifying Information</div>
            <div>
                Collecting non-personally identifying information is to better understand how our visitors use its app.
            </div>
            <div class="privacy-policy-title">
                Analytics Information
            </div>
            <div>
                We use third-party analytics tools to help us measure traffic and usage trends for the Service. We collect and use this analytics information in aggregate form such that it cannot reasonably be manipulated to identify any particular individual user.
            </div>
            <div class="privacy-policy-title">
                Location Information
            </div>
            <div>
                Our application will only access your location information when you use and will not be disclosed to third parties and others.
            </div>
            <div class="privacy-policy-title">
                Read Call Log And Read Sms
            </div>
            <div>
                Our new feature, you can synchronize the phone and watch, get your call log and text messages, you can make better use of your change program features, we promised not to provide your call log and short to any person or third party interest information.
            </div>
            <div class="privacy-policy-title">
                Business Transfers
            </div>
            <div>
                If <span>51happlay.com</span>  substantially all of its assets were acquired, or in the unlikely event that we go out 
                of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any 
                acquirer of <span>51happlay.com</span> may continue to use your personal information as set forth in this policy.
            </div>
            <div class="privacy-policy-title">
                Contact Us
            </div>
            <div>
                If you have questions or concerns about our Privacy Policy, please contact us by sending an email to: <span>IceAlanD307@gmail.com</span>
            </div>
            <div class="privacy-policy-title">Terms Of Use</div>
            <div>
                Before using any of our services, please read our Terms Of Use.
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    methods : {
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
    }
}
</script>

<style lang="scss" scoped>
    .my-privacy-policy{
        width: 100%;
        padding: 0.5rem;
        .privacy-policy-content{
            width: 100%;
            margin-top: 2rem;
            h1, h2, h3, h4, h5, h6 { 
                font-weight: bold;
            }
            .privacy-policy-title{
                width: 100%; 
                margin: 0.5rem 0;
                font-size: 0.9rem;
                font-weight: 600;
                line-height: 2rem;
            }
            div{
                text-align: justify;
                line-height: 2;

            }
            ul{ 
                display: block;
                list-style-type: disc;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                padding-inline-start: 40px;
            }
            li{
                list-style:disc;
                text-align: justify;
                line-height: 2;
            }
            span{
                color: rgb(145, 156, 252);
                font-weight:600;
            }
        }
        .navber{
            height: 2.2rem;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 2019;
            padding: .3125rem .625rem;
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
        }
    }
</style>


