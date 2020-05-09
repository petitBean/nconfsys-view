<template>
    <div>
      <nconfsys-header></nconfsys-header>
      <div class="content" style="">
        <div class="content-top" style="padding-left: 20px;padding-right: 20px;padding-bottom: 3px;padding-top: 2px;">
          <div class="sider-left">
            <div class="search">
              <div class="search-box">
                <div style="overflow: hidden">
                  <div style="float:left;margin:3px">
                    <label>
                      <span style="font-size: 15px;font-weight: bolder;color: #464c5b;text-align:center;font-family: 'PingFang SC' ;margin: 4px">搜索会议</span>
                    </label>
                  </div>
                  <div style="float: left">
                    <div>
                      <Input placeholder="会议名/关键字" v-model="key" style="width: 300px">
                        <Icon type="ios-search" slot="suffix" @click="tosearch"/>
                      </Input>
                    </div>
                  </div>
                </div>
                <div class="conf-tag" style="float: bottom">
                  <div style="float:left;margin:3px">
                    <label>
                      <span style="font-size: 15px;font-weight: bolder;color: #464c5b;text-align:center;font-family: 'PingFang SC' ;margin: 4px">选择列表显示的会议标签</span>
                    </label>
                  </div>
                  <div>
                    <CheckboxGroup v-model="checkValue">
                      <Checkbox v-for="item in checkBoxList" v-bind:label="item" border></Checkbox>
                    </CheckboxGroup>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="sider-right">
             <div>
               <div class="a-icon" @click="toConfManageCenter">
                 <a href="#">
                   <Icon class="a-icon-imag" type="md-folder" size="40"/>
                 </a>
                 <div style="float: bottom">
                   创建会议
                 </div>
               </div>
               <!--<div class="a-icon" @click="toPaperManagCenter">
                 <a href="#">
                 <Icon class="a-icon-imag" type="ios-paper" size="40" />
                 </a>
                 <div style="float: bottom">
                   论文评阅中心
                 </div>
               </div>-->
               <div class="a-icon" @click="toPersonalCenter">
                 <a href="#">
                   <Icon class="a-icon-imag" type="md-contact"  size="40"/>
                 </a>
                 <div style="float: bottom">
                   个人中心
                 </div>
               </div>
             </div>
          </div>
        </div>

        <div class="content-bottom" style="background-color: white">
          <!--最多显示n条-->
          <div class="bottom-left" style="background-color: white">
            <!-- 会议列表-->
            <div class="conf-list">
              <Tag style="background-color: #2db7f5">
                <span style="padding:3px;font-size: 16px;">会议列表</span>
              </Tag>
             <!-- <span class="conf-list-span">会议列表</span>-->
            </div>
            <div class="focused-conf-list">

              <div v-for="item in conferenceList" class="conf box-border" style="width: 100%;height: 160px;margin: 5px">
                <div class="conf-title font-title" style=" height: 36px">
                  <span>{{item.confName}}</span>
                </div>
                <div class="conf-content font-content" style="height: 90px">
                  {{item.confIntroduce}}
                </div>
                <div class="conf-menu" style="">
                  <div  class="conf-menu-icon" style="">
                    <Icon type="ios-star-outline"  size="20"/>
                  </div>
                  <div class="conf-menu-icon">
                    <Icon type="ios-thumbs-up-outline" size="20" />
                  </div>
                  <div class="conf-menu-icon">
                    <Icon type="ios-eye-outline" size="23" />
                  </div>
                  <div class="conf-detail a-hover" style="">
                    <a href="#" @click="todetail(item.confId)">查看详情>></a>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div class="bottom-right" style="background-color: white">
            <!--推荐会议的小海报等信息-->
            <div class="recommand-conf-list" style="background-color: white">
              <div class="command-conf-show" style="background-color: #2db7f5;margin-right: 25px;padding: 3px;padding-left: 20px">
                <span>推荐会议展视</span>
              </div>
              <div v-for="item in commandedList" class="small-poster-div" style="border-style: solid;border-color: #2d8cf0;border-width: 1px">
                <a href="#">
                 <img style="height: 100%;width: 100%" v-bind:src="'http://localhost:8671/nconf-gateway/api-conf-service/conf-service/img/'+item.bigPosterUrl">
                </a>
              </div>

             <!-- 推荐会议的小海报等信息-->
            </div>
            <!--最近举办的会议-->
            <div class="hot-conf-list">
              <div class="command-conf-show" style=" background-color: #2db7f5;margin-right: 25px;padding: 3px;padding-left: 20px;margin-top: 40px">
                <span>热门会议</span>
              </div>
              <div class="v-container-box-shadow box-border" style="background-color: #f8f8f9;margin-top: 5px;;margin-right: 45px;margin-left: 23px">
                <div style="overflow: hidden">
                  <div class="hot-conf-icon">
                    <Icon type="md-flame" />
                  </div>
                  <div class="hot-conf-span">
                    <span>
                      第一届中国学术会议
                    </span>
                  </div>
                </div>

                <div style="overflow: hidden">
                  <div class="hot-conf-icon">
                    <Icon type="md-flame" />
                  </div>
                  <div class="hot-conf-span">
                    <span>
                      第一届中国学术会议
                    </span>
                  </div>
                </div>

                <div style="overflow: hidden">
                  <div class="hot-conf-icon">
                    <Icon type="md-flame" />
                  </div>
                  <div class="hot-conf-span">
                    <span>
                      第一届中国学术会议
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nconfsys-footer></nconfsys-footer>
    </div>
</template>

<script>
  import NconfsysHeader from "../components/NconfsysHeader";
  import NconfsysFooter from "../components/NconfsysFooter";
  import DropDownMenu from "../components/DrowpDownMenu";
  import SearchBox from "../components/SearchBox";
  import TagCheckBox from "../components/TagCheckBox";
  import ConfsysList from "../components/ConfsysList";
  import ScollDiv from "../components/ScollDiv";
    export default {
        name: "confsys-page",
        components: {
            ScollDiv,
            NconfsysHeader,
            NconfsysFooter,
            DropDownMenu,
            SearchBox,
            TagCheckBox,
            ConfsysList,
        },
        mounted(){
            this.initpage();
        },
        data(){
            return{
                key:'',
                placeholder:'',
                conferenceList:[],
                commandedList:[],
                tagList:[],
                countAll:0,
                checkValue:[],
                checkBoxList:[],
            }
        },
        methods:{
            initpage(){
                console.log(this.checkValue);
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/conference/getHomePageVo';
                let status=0;
                let times=0;
                let message=this.$Message;
                while (status!==200 && times<5 ){
                    this.$http(url).then((response)=>{
                        let re=response.data;
                        let data=re.data;
                        status=response.status;
                        this.conferenceList=data.conferenceList;
                        this.commandedList=data.commandedList;
                        this.tagList=data.tagList;
                        this.countAll=data.countAll;
                        this.checkBoxList=data.tagList;
                    }).catch(function (error) {
                        status=error.response.status;
                        times++;
                        if (error.response) {
                            status=error.response.status;
                            times++;
                            //失败，判断主要的几个状态
                        } else if (error.request) {
                            message.error("系统异常！");
                        } else {
                            console.log('Error', error.message);
                            message.error("系统异常！");
                        }
                        console.log(error.config);
                    });
                    times++;
                }

            },

            tosearch(){
                console.log(this.key);
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/conference/searche_conf_bykey?key='+this.key;
                console.log(url);
                let times=0;
                let status=0;
                let message=this.$Message;
                console.log(this.key);
                this.$http.get(url).then((response)=>{
                    console.log(response.data);
                    this.conferenceList=response.data.data;
                    status=response.status;
                }).catch((error)=>{
                    if (error.response){
                            status=error.response.status;
                            times++;
                    }
                    else if(error.request){
                        status=error.request.status;
                        times++;
                    }
                });
            },
            todetail(confId){
                window.sessionStorage.setItem('confId',confId);
                this.$router.push('/conf-detail-page');
            },
            toPersonalCenter(){
                this.$router.push('/personal-center');
            },
            toPaperManagCenter(){
                this.$router.push('/paper-view-center');
            },
            toConfManageCenter(){
                this.$router.push('/createconf');
            }
        },

    }
</script>

<style scoped>

</style>
