<template>
    <div>
      <nconfsys-header></nconfsys-header>
      <div class="content">
        <div class="content-top" style="padding-left: 20px;padding-right: 20px;padding-bottom: 3px;padding-top: 2px">
          <div class="sider-left">
            <div class="search">
              <div class="search-box">
                <div style="overflow: hidden">
                  <div style="float:left;margin:3px">
                    <label>
                      <span style="font-size: 18px;text-align:center;font-family: 'PingFang SC' ;margin: 4px">搜索会议</span>
                    </label>
                  </div>
                  <div style="float: left">
                    <search-box :placeholder="placeholder"></search-box>
                  </div>
                </div>
                <div class="conf-tag" style="float: bottom">
                  <div style="float:left;margin:3px">
                    <label>
                      <span style="font-size: 14px;text-align:center;font-family: 'PingFang SC' ;margin: 4px">选择列表显示的会议标签</span>
                    </label>
                  </div>
                  <tag-check-box></tag-check-box>
                </div>
              </div>

            </div>
          </div>


          <div class="sider-right">
             <div>
               <div class="a-icon">
                 <a href="#">
                   <Icon class="a-icon-imag" type="md-folder" size="40"/>
                 </a>
                 <div style="float: bottom">
                   会议管理中心
                 </div>
               </div>
               <div class="a-icon">
                 <a href="#">
                 <Icon class="a-icon-imag" type="ios-paper" size="40" />
               </a>
                 <div style="float: bottom">
                   论文评阅中心
                 </div>
               </div>
               <div class="a-icon">
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

        <div class="content-bottom">
          <!--最多显示n条-->
          <div class="bottom-left">
            <!-- 会议列表-->
            <div class="conf-list">
              <Tag style="background-color: #2db7f5">
                <span style="padding:3px;font-size: 16px;">会议列表</span>
              </Tag>
             <!-- <span class="conf-list-span">会议列表</span>-->
            </div>
            <div class="focused-conf-list">
              <div class="conf box-border" style="width: 100%;height: 150px;margin: 5px">
                <div class="conf-title font-title" style=" ">
                  <span>第一届学术会议</span>
                </div>
                <div class="conf-content font-content" style="">
                  第五届常微分方程与动力系统国际会议(CODEDS2021)将于2021年1月5-7日在三亚举行。本届大会将继续遵循学术性、国际性的原则，特邀国内外常微分方程与动力系统领域内的学者专家前来参会，并做出精彩的报告。CODEDS2021旨在打造一场交流分享最新科研成果和研究方法的学术盛宴！诚邀各位专家和代表的参加
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
                    <a href="#">查看详情>></a>
                  </div>


                </div>
              </div>

              <div class="conf box-border" style="width: 100%;height: 150px;margin: 5px">
                <div class="conf-title font-title" style=" ">
                  <span>第一届学术会议</span>
                </div>
                <div class="conf-content font-content" style="">
                  第五届常微分方程与动力系统国际会议(CODEDS2021)将于2021年1月5-7日在三亚举行。本届大会将继续遵循学术性、国际性的原则，特邀国内外常微分方程与动力系统领域内的学者专家前来参会，并做出精彩的报告。CODEDS2021旨在打造一场交流分享最新科研成果和研究方法的学术盛宴！诚邀各位专家和代表的参加
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
                    <a href="#">查看详情>></a>
                  </div>


                </div>
              </div>

              <div class="conf box-border" style="width: 100%;height: 150px;margin: 5px">
                <div class="conf-title font-title" style=" ">
                  <span>第一届学术会议</span>
                </div>
                <div class="conf-content font-content" style="">
                  第五届常微分方程与动力系统国际会议(CODEDS2021)将于2021年1月5-7日在三亚举行。本届大会将继续遵循学术性、国际性的原则，特邀国内外常微分方程与动力系统领域内的学者专家前来参会，并做出精彩的报告。CODEDS2021旨在打造一场交流分享最新科研成果和研究方法的学术盛宴！诚邀各位专家和代表的参加
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
                    <a href="#">查看详情>></a>
                  </div>


                </div>
              </div>
            </div>


          </div>
          <div class="bottom-right">
            <!--推荐会议的小海报等信息-->
            <div class="recommand-conf-list">
              <div class="command-conf-show" style="background-color: #2db7f5;margin-right: 25px;padding: 3px;padding-left: 20px">
                <span>推荐会议展视</span>
              </div>
              <div class="small-poster-div">
                <a href="#">
                 <img style="height: 100%;width: 100%" src="./../assets/image/small-post/huawei.png">
                </a>
              </div>
              <div class="small-poster-div">
                <a href="#">
                  <img style="height: 100%;width: 100%" src="./../assets/image/small-post/huawei.png">
                </a>
              </div>
              <div class="small-poster-div">
                <a href="#">
                  <img style="height: 100%;width: 100%" src="./../assets/image/small-post/huawei.png">
                </a>
              </div>
              <div class="small-poster-div">
                <a href="#">
                  <img style="height: 100%;width: 100%" src="./../assets/image/small-post/huawei.png">
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
        data(){
            return{
                placeholder:'会议名/关键字..'
            }
        }
    }
</script>

<style scoped>

</style>
