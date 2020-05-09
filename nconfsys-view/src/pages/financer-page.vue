<template>
    <div>
      <div class="conf-header">
        <nconfsys-header></nconfsys-header>
      </div>
      <div class="conf-content">
        <div class="left-pane">
          <div class="left-menu " >
            <div class="menu-name color-primary font-title" >
              <div class="menu-span-icon" >
                <Icon type="md-menu" size="22"/>
              </div>
              <div class="menu-span">
                <span>菜 单 栏</span>
              </div>
            </div>
            <div class="menu-list-pane" >
              <Menu  active-name="1" >
                <MenuGroup title="">
                  <MenuItem v-for="item in itemlist"  :name= "item.name" @click.native="select(item.name)" >
                    {{item.message}}
                  </MenuItem>
                </MenuGroup>
              </Menu>
            </div>
          </div>
        </div>

        <div class="right-pane">
          <div style="">
            <div class="right-content-show border-left" >

              <div class="paymanage" v-show="this.menu===0">
              <div class="now-content-name content-title-pane" style="">
                <div style="float: left;padding: 2px;margin-left: 5px;margin-right: 5px"><Icon type="ios-navigate" size="20" /></div>
                <span class="content-title-span" style="">收费标准</span>
              </div>
              <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                <Card style="width:100%;min-height: 320px">
                  <div style="color: #333333">
                    <div style="color: #333333">
                      <div style="display: block;float: left;margin-bottom:20px;width: 700px;color: #333333;font-weight: bolder;font-size: 14px">
                        <div style="display: block;float: left">收费时间段：</div>
                        <div style="display: block;float: right">
                          <template>
                            <Row  style="width: 600px">
                              <Col span="12">
                                <DatePicker type="datetimerange" v-model="categoryFrom.dates" placeholder="选择时间" style="width: 300px"></DatePicker>
                              </Col>
                            </Row>
                          </template>
                        </div>
                      </div>
                      <div style="font-weight: bolder;font-size: 16px;display: block;float: left">
                      </div>
                      <div style="float: right;margin-bottom: 5px;margin-right: 15px">
                        <Button type="primary" size="large" @click="submitpayCategory" >提交</Button>
                      </div>
                    </div>
                  </div>
                  <Divider />
                  <div style="display: block;float: left;margin-bottom:20px;width: 250px;color: #333333;font-weight: bolder;font-size: 14px">
                    <div style="display: block;float: left">金额：</div>
                    <div style="display: block;float: right">
                      <Input v-model="categoryFrom.amount"  type="text" number  placeholder="在此输入金额"  />
                    </div>
                  </div>
                  <div style="text-align:center">
                    <Input v-model="categoryFrom.demand" type="textarea"  placeholder="在此输入缴费相关说明" :rows="8" />
                  </div>
                </Card>
                <div>
                </div>
              </div>
            </div>

              <div class="payResult" v-show="this.menu===1">
                <div class="now-content-name content-title-pane" style="">
                  <div class="content-title-icon">
                    <Icon type="ios-navigate" size="20" />
                  </div>
                  <span class="content-title-span" style="">收费情况</span>
                </div>
                <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                  <Card>
                    <div class="content-show" style="padding: 20px;overflow: hidden">
                      <Menu mode="horizontal"  active-name="1">
                        <MenuItem name="1" @click.native="payedList">
                          <Icon type="md-person" />
                          已缴清单
                        </MenuItem>
                        <MenuItem name="2" @click.native="nopayList">
                          <Icon type="md-send" />
                          未缴清单
                        </MenuItem >
                      </Menu>
                      <!--内容区-->

                      <div style="display: block;height: 600px;width: 100%;" v-show="this.paymenu===1">
                        <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                          <Table border :columns="payedTableHeader" :data="payedTableData">
                            <!--<template slot-scope="{ row, index }" slot="action">
                              <Button type="primary" size="large" style="margin-right: 5px;width:80px;height:30px" @click="todetail(index)">详情</Button>
                            </template>-->
                          </Table>
                        </div>
                      </div>

                      <div style="display: block;height: 600px;width: 100%;" v-show="this.paymenu===2">
                        <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                          <Table border :columns="nopayTableHeader" :data="nopayTableData">
                            <!--<template slot-scope="{ row, index }" slot="action">
                              <Button type="primary" size="large" style="margin-right: 5px;width:80px;height:30px" @click="todetail(index)">详情</Button>
                            </template>-->
                          </Table>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div class="notice"  v-show="this.menu===2">
                <div class="now-content-name content-title-pane" style="">
                  <div class="content-title-icon">
                    <Icon type="ios-navigate" size="20" />
                  </div>
                  <span class="content-title-span" style="">会议通知</span>
                </div>
                <div class="content-show" style="padding: 20px;overflow: hidden">
                  <Menu mode="horizontal"  active-name="1">
                    <MenuItem name="1" @click.native="myNoticeList">
                      <Icon type="md-person" />
                      我的通知
                    </MenuItem>
                    <MenuItem name="2" @click.native="sendNotice">
                      <Icon type="md-send" />
                      发送通知
                    </MenuItem >
                  </Menu>
                  <!--内容区-->
                  <div style="display: block;height: 600px;width: 100%;" v-show="this.noticemenu===1">
                    <Card style="width:100%;min-height: 320px">
                      <Collapse v-model="value1">
                        <Panel name="1">
                          史蒂夫·乔布斯
                          <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                        </Panel>
                        <Panel name="2">
                          斯蒂夫·盖瑞·沃兹尼亚克
                          <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                        </Panel>
                        <Panel name="3">
                          乔纳森·伊夫
                          <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                        </Panel>
                      </Collapse>
                    </Card>
                  </div>

                  <div style="display: block;height: 600px;width: 100%;" v-show="this.noticemenu===2">
                    <Card style="width:100%;min-height: 320px">
                      <div style="color: #333333">
                      <span style="font-weight: bolder;font-size: 14px;display: block;float: left">
                        <Cascader :data="noticedata" v-model="noticevalue">
                        </Cascader>
                      </span>
                        <div style="float: right;margin-bottom: 5px;margin-right: 15px">
                          <Button type="primary"  @click="tosendnotice">发送通知</Button>
                        </div>
                      </div>
                      <Divider />
                      <div style="text-align:center">
                        <Input v-model="noticecontent" type="textarea"  placeholder="在此输入通知内容" :rows="8" />
                      </div>
                    </Card>
                  </div>
                </div>
              </div>

              <div class="documents"  v-show="this.menu===3" style="overflow: hidden">
                <div class="now-content-name content-title-pane" style="">
                  <div class="content-title-icon">
                    <Icon type="ios-navigate" size="20" />
                  </div>
                  <span class="content-title-span" style="">资料中心</span>
                </div>
                <div class="content-show" style="padding: 20px;overflow: hidden">
                  <Menu mode="horizontal"  active-name="1">
                    <MenuItem name="1" @click.native="findList(1)">
                      <Icon type="ios-paper" />
                      文档
                    </MenuItem>
                    <MenuItem name="2" @click.native="findList(0)">
                      <Icon type="ios-image" />
                      图片
                    </MenuItem >
                    <MenuItem name="4" @click.native="findList(4)">
                      <Icon type="md-list-box" />
                      表格
                    </MenuItem>
                    <MenuItem name="5" @click.native="findList(3)">
                      <Icon type="md-menu" />
                      其他
                    </MenuItem>
                    <div style="float: right;margin-left: 20px;margin-right: 5px">
                      <Upload :on-success=" handleSuccess"
                              :on-error="handleFormatError"
                              :data="fileParam"
                              :max-size="20480"
                              action="http://localhost:8671/nconf-gateway/api-conf-service/conf-service/file/upload">
                        <Button icon="ios-cloud-upload-outline">上传文件</Button>
                      </Upload>
                    </div>
                    <div style="float:right;margin-left: 20px;">
                      <search-box :placeholder="searchPlaceholder"></search-box>
                    </div>
                  </Menu>
                  <!--内容区-->
                  <div style="display: block;height: 600px;width: 100%;">
                    <Card style="width:100%;min-height: 320px">
                      <template>
                        <Table border :columns="documentHeader" :data="documentData">
                          <template slot-scope="{ row, index }" slot="action">
                            <Button type="primary" size="large" style="margin-right: 5px;width:80px;height:30px" @click="dowload(index)">下载</Button>
                          </template>
                        </Table>
                      </template>
                    </Card>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="conf-footer">
        <nconfsys-footer></nconfsys-footer>
      </div>
    </div>
</template>

<script>
    import NconfsysHeader from "../components/NconfsysHeader";
    import NconfsysFooter from "../components/NconfsysFooter";
    import SearchBox from "../components/SearchBox";
    export default {
        name: "financer-page",
        components:{
            NconfsysHeader,
            NconfsysFooter,
            SearchBox,
        },

        data(){
            return{
                confId:'',
                theme1:'light',
                searchPlaceholder:'输入文件名',
                itemlist: [
                    {
                        name: '1',
                        message: "收费要求"
                    },
                    {
                        name: '2',
                        message: "收费情况"
                    },
                    {
                        name: "3",
                        message: "发送通知"
                    },
                    {
                        name: "4",
                        message: "资料中心"
                    },
                ],
                menu:0,
                noticemenu:1,
                fileParam:{
                    confId:'0001',
                    userName:'13720131232',
                    note:'无',
                },
                documentHeader: [
                    {
                        title: '文件名',
                        key: 'originName'
                    },
                    {
                        title: '下载次数',
                        key: 'downloadTimes'
                    },
                    {
                        title: '备注',
                        key: 'note'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                documentData: [],
                //notice
                value1: [],
                noticevalue: [],
                noticedata: [{
                    value: 'allmanager',
                    label: '所有会议管理员'
                },
                    {
                        value: 'alluser',
                        label: '所有用户'
                    },
                    {
                        value: 'all',
                        label: '所有参会人员'
                    }],
                noticecontent:'',

                //收费标准
                paymenu:1,
                payStand:{
                    dates:[],
                    amount:'',
                    demand:'',
                    confId:'',
                },
                payedTableHeader:[
                    {
                        title: '用户名',
                        key: 'userName'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '邮箱',
                        key: 'email'
                    },
                    {
                        title: '手机',
                        key: 'phone'
                    },
                    {
                        title: '金额',
                        key: 'amount'
                    },

                    /* {
                         title: '操作',
                         slot: 'action',
                         width: 150,
                         align: 'center'
                     }*/
                ],
                payedTableData:[
                    {
                     userName:'xxxxxxx',
                     name:'xxxxxx',
                     email:'12345555',
                     phone:'12344444',
                     amount:12.8,
                    },
                ],
                nopayTableHeader:[
                    {
                        title: '用户名',
                        key: 'userName'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '邮箱',
                        key: 'email'
                    },
                    {
                        title: '手机',
                        key: 'phone'
                    },
                    {
                        title: '应缴金额',
                        key: 'amount'
                    },

                    /* {
                         title: '操作',
                         slot: 'action',
                         width: 150,
                         align: 'center'
                     }*/
                ],
                nopayTableData:[
                    {
                        userName:'xxxxxxx',
                        name:'xxxxxx',
                        email:'12345555',
                        phone:'12344444',
                        amount:12.8,
                    },
                ],

                categoryFrom:{
                    amount:'',
                    confId:'',
                    payDemand:'',
                    dates:[],
                }
            }
        },

        mounted(){
            this.confId=window.sessionStorage.getItem('confId');
            this.fileParam.confId=this.confId;
            this.fileParam.userName=window.sessionStorage.getItem('username');
            this.init();
        },

        methods:{
            init(){
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/order/init?confId='+this.confId;
                this.$http.get(url).then((response)=>{
                    if (response.status===200){
                        if(response.data.code===200){
                            this.categoryFrom=response.data.data.payCategory;
                            this.nopayTableData=response.data.data.nonPayList;
                            this.payedTableData=response.data.data.hasPayList;
                        }
                    }else {
                        this.$Message.error("请求失败！请刷新页面")
                    }
                }).catch();
            },
            //响应菜单的点击事件
            select(name){
                this.menu=name-1;
            },


            //资料
            findList(type){
                console.log('VVVVVVVVVVVVVVVVVVVvvvvvvvvvvvvvvvv'+type);
                let  url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/resource/find_by_ConIdAndType?confId='+this.confId
                    +'&type='+type;
                this.$http.get(url).then((response)=>{
                    if (response.status===200){
                        if (response.data.code===200){
                            this.documentData=response.data.data;
                        }else {
                            this.$Message.error("文件读取失败！"+response.data.message);
                        }
                    }
                    else {
                        if (response.status===504){
                            this.$Message.warning('请求超时 ！请重试！');
                        }
                        else {
                            this.$Message.warning('请重新登录重试！');
                        }
                    }
                }).catch((error)=>{
                    if (error.response){
                        if (error.response.status===504){
                            this.$Message.error("网络异常！请重试!")
                        }
                        else {
                            this.$Message.error("请重新登录");
                            this.$router.push('/user-login');
                        }
                    }
                    else {
                        this.$Message.error("失败！请重试!")
                    }
                });
            },

            //下载
            dowload(index){
                //console.log(this.documentData[index].storeName);
                let fileName=this.documentData[index].storeName;
                //测试下载文件(注意web的上下文)
                window.location.href = 'http://localhost:8671/nconf-gateway/api-conf-service/conf-service/file/download?fileName='+fileName ;
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/file/addDownloadTime?resourceId='+this.documentData[index].resourceId;
                this.$http.post(url).then((response)=>{
                    if (response.status===200 && response.data.code===200){
                        this.documentData[index].downloadTimes=this.documentData[index].downloadTimes+1;
                    }
                }).catch();
            },
            //资料中心
            handleSuccess(response, file) {
                /*file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';*/
                console.log(response);
                this.$Message.success("文件上传成功！");
            },
            handleFormatError (file) {
                console.log("失败");
                this.$Message.error("文件上传失败！请重试！");
            },
            //通知
            myNoticeList(){
                this.noticemenu=1;
            },
            sendNotice(){
                this.noticemenu=2;
            },
            tosendnotice(){
                console.log(this.noticedata[0].value);
                alert(this.noticedata[0]);
                alert(this.noticecontent);
            },

            //收费标准
            submitpayCategory(){
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/pay_category/create_one';
                this.$http.post(url,this.categoryFrom).then((response)=>{
                    if (response.status===200){
                        if (response.data.code===200){
                            this.$Message.success('成功！');
                            this.init();
                        }
                        else {
                            this.$Message.error(response.data.message);
                        }
                    }
                    else {
                        this.$Message.error(response.status);
                    }
                }).catch((error)=>{
                    if (error.response){
                        if (error.response.status===504){
                            this.$Message.error("网络异常！请重试!")
                        }
                        else {
                            this.$Message.error("请重新登录");
                            // this.$router.push('/user-login');
                        }
                    }
                    else {
                        this.$Message.error("失败！请重试!")
                    }
                });

            },
            payedList(){
                this.paymenu=1;
            },
            nopayList(){
                this.paymenu=2;
            }

        },//methods
    }
</script>

<style scoped>

</style>
