<template>
  <!--筹备组论文管理中心-->
  <div class="paper-manage-center">
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
              <div class="solicitemanage" v-show="this.menu===0">
                <div class="now-content-name content-title-pane" style="">
                  <div style="float: left;padding: 2px;margin-left: 5px;margin-right: 5px"><Icon type="ios-navigate" size="20" /></div>
                  <span class="content-title-span" style="">征稿管理</span>
                </div>
                <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                  <Card>
                    <Card style="width:100%;min-height: 320px">
                      <div style="color: #333333">
                        <div style="color: #333333">
                          <div style="font-weight: bolder;font-size: 16px;display: block;float: left">
                            <template>
                              <Row  style="width: 600px">
                                <Col span="12">
                                  <DatePicker type="datetimerange" v-model="solicitStartFrom.dates" placeholder="选择时间" style="width: 300px"></DatePicker>
                                </Col>
                              </Row>
                            </template>
                          </div>
                          <div style="float: right;margin-bottom: 5px;margin-right: 15px">
                            <Button type="primary" size="large" @click="submitPaperDemand" >提交</Button>
                          </div>
                        </div>
                      </div>
                      <Divider />
                      <div style="text-align:center">
                        <Input v-model="solicitStartFrom.demand" type="textarea"  placeholder="在此输入征稿要求和相关说明" :rows="8" />
                      </div>
                    </Card>
                    <div>
                    </div>
                  </Card>
                </div>
              </div>

            <!-- 评阅管理-->
            <div class="paperReview" v-show="this.menu===1">
              <div class="now-content-name content-title-pane" style="">
                <div class="content-title-icon">
                  <Icon type="ios-navigate" size="20" />
                </div>
                <span class="content-title-span" style="">论文评阅</span>
              </div>
              <div class="content-show" style="padding: 20px;overflow: hidden">
                <Menu mode="horizontal" :theme="theme1" active-name="1">
                  <MenuItem name="1" @click.native="paperList">
                    <Icon type="ios-list" />
                    论文列表
                  </MenuItem>
                  <MenuItem name="5" @click.native="professorList">
                    <Icon type="ios-list" />
                    专家列表
                  </MenuItem>
                  <MenuItem name="2" @click.native="viewDemand">
                    <Icon type="ios-at" />
                    评阅要求
                  </MenuItem>
                  <MenuItem name="3" @click.native="viewReslt">
                    <Icon type="ios-list" />
                    论文评阅结果
                  </MenuItem>
                </Menu>
                <!--内容区-->
                <div style="display: block;height: 600px;width: 100%;" v-show="this.viewmanagmenu===3">
                  <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                    <Card>
                      <Card style="width:100%;min-height: 320px">
                        <div style="color: #333333">
                          <div style="color: #333333">
                            <div style="font-weight: bolder;font-size: 16px;display: block;float: left">
                            </div>
                            <div style="float: right;margin-bottom: 5px;margin-right: 15px">
                              <Button type="primary" size="large" @click="submitViewDemand" >提交</Button>
                            </div>
                          </div>
                        </div>
                        <Divider />
                        <div style="text-align:center">
                          <Input v-model="solicitStartFrom.viewDemand" type="textarea"  placeholder="在此输入论文评阅要求和相关说明" :rows="8" />
                        </div>
                      </Card>
                      <div>
                      </div>
                    </Card>
                  </div>
                </div>

                <div style="display: block;height: 600px;width: 100%;" v-show="this.viewmanagmenu===1" >
                  <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                    <Card>
                      <Card style="width:100%;min-height: 320px">
                        <div style="color: #333333">
                          <div style="color: #333333">
                            <template>
                              <Table border :columns="paperListTableHeader" :data="paperListTableData">
                                <template slot-scope="{ row, index }" slot="action">
                                  <Button type="primary" size="large" style="margin-right: 5px;width:80px;height:30px" @click="">管理</Button>
                                </template>
                              </Table>
                            </template>
                          </div>
                        </div>
                      </Card>
                      <div>
                      </div>
                    </Card>
                  </div>
                </div>

                <div style="display: block;height: 600px;width: 100%;" v-show="this.viewmanagmenu===2">
                  <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                    <Card>
                      <Card style="width:100%;min-height: 320px">
                        <div style="color: #333333">
                          <div style="color: #333333">
                            <template>
                              <Table border :columns="professorListTableHeader" :data="professorListTableData">
                                <template slot-scope="{ row, index }" slot="action">
                                  <Button type="primary" size="large" style="margin-right: 5px;width:80px;height:30px" @click="">管理</Button>
                                </template>
                              </Table>
                            </template>
                          </div>
                        </div>
                      </Card>
                      <div>
                      </div>
                    </Card>
                  </div>
                </div>

                <div style="display: block;height: 600px;width: 100%;" v-show="this.viewmanagmenu===4">
                  <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                    <Card>
                      <Card style="width:100%;min-height: 320px">
                        <div style="color: #333333">
                          <div style="color: #333333">
                            <template>
                              <Table border :columns="viewResultListTableHeader" :data="viewResultListTableData">
                                <template slot-scope="{ row, index }" slot="action">
                                  <Button type="primary" size="large" style="margin-right: 5px;width:80px;height:30px" @click="">管理</Button>
                                </template>
                              </Table>
                            </template>
                          </div>
                        </div>
                      </Card>
                      <div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            <div class="professorManag" v-show="this.menu===2">
              <div class="now-content-name content-title-pane" style="">
                <div class="content-title-icon">
                  <Icon type="ios-navigate" size="20" />
                </div>
                <span class="content-title-span" style="">专家管理</span>
              </div>
              <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                <Card>
                  <div class="content-show" style="padding: 20px;overflow: hidden">
                    <Menu mode="horizontal"  active-name="1">
                      <MenuItem name="1" @click.native="managerList">
                        <Icon type="md-person" />
                        专家列表
                      </MenuItem>
                      <MenuItem name="2" @click.native="addManager">
                        <Icon type="md-send" />
                        添加专家
                      </MenuItem >
                    </Menu>
                    <!--内容区-->
                    <div style="display: block;height: 600px;width: 100%;" v-show="this.managermenu===1">
                      <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                        <Table border :columns="workerTableHeader" :data="workerTableData">
                          <!--<template slot-scope="{ row, index }" slot="action">
                            <Button type="primary" size="large" style="margin-right: 5px;width:80px;height:30px" @click="todetail(index)">详情</Button>
                          </template>-->
                        </Table>
                      </div>
                    </div>

                    <div style="display: block;height: 600px;width: 100%;" v-show="this.managermenu===2">
                      <Card style="width:100%;min-height: 320px">
                        <div style="color: #333333">
                          <div style="float: right;margin-bottom: 5px;margin-right: 15px">
                            <Button type="primary"  @click="toaddManager">确认添加</Button>
                          </div>
                        </div>
                        <Divider />
                        <Card >
                          <div style="margin-top: 80px;margin-left: 200px;margin-bottom: 300px">
                            <Form ref="formCustom" :model="addManagerForm" :rules="ruleCustom" :label-width="80">
                              <div style="width: 400px;margin: 30px">
                                <FormItem label="用户名" prop="userName">
                                  <Input type="text" v-model="addManagerForm.userName" number></Input>
                                </FormItem>
                              </div>
                              <div style="width: 400px;margin: 30px">
                                <FormItem label="姓名" prop="name">
                                  <Input type="text" v-model="addManagerForm.name" number></Input>
                                </FormItem>
                              </div>
                              <div style="width: 400px;margin: 30px">
                                <FormItem label="新密码" prop="password">
                                  <Input type="password" v-model="addManagerForm.password"></Input>
                                </FormItem>
                              </div>
                              <div style="width: 400px;margin: 30px">
                                <FormItem label="确认密码" prop="passwordCheck">
                                  <Input type="password" v-model="addManagerForm.passwordCheck"></Input>
                                </FormItem>
                              </div>
                              <div style="width: 400px;text-align: center;margin: 30px">
                                <FormItem>
                                  <!-- <Button type="primary" @click="handleSubmitChangePass('formCustom')">提交</Button>
                                   <Button @click="handleResetChangePass('formCustom')" style="margin-left: 40px">重置</Button>-->
                                </FormItem>
                              </div>
                            </Form>
                          </div>
                        </Card>
                      </Card>
                    </div>
                  </div>
                </Card>
              </div>            </div>

            <div class="notice"  v-if="false">
              <div class="now-content-name content-title-pane" style="">
                <div class="content-title-icon">
                  <Icon type="ios-navigate" size="20" />
                </div>
                <span class="content-title-span" style="">会议通知</span>
              </div>
              <div class="content-show" style="padding: 20px;overflow: hidden">
                <Menu mode="horizontal"  active-name="1">

                  <MenuItem name="2" @click.native="sendNotice">
                    <Icon type="md-send" />
                    发送通知
                  </MenuItem >
                </Menu>
                <!--内容区-->


                <div style="display: block;height: 600px;width: 100%;" v-show="this.noticemenu===1">
                  <Card style="width:100%;min-height: 320px">
                    <div style="color: #333333">
                      <span style="font-weight: bolder;font-size: 14px;display: block;float: left">
                        <Cascader :data="noticedata" v-model="noticevalue" @on-change="selectUser">
                        </Cascader>
                      </span>
                      <div style="float: right;margin-bottom: 5px;margin-right: 15px">
                        <Button type="primary"  @click="tosendnotice">发送通知</Button>
                      </div>
                    </div>
                    <Divider />
                    <div style="text-align:center">
                      <Input v-model="noticeFrom.content" type="textarea"  placeholder="在此输入通知内容" :rows="8" />
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <div class="announce" v-show="false">
              <div class="now-content-name content-title-pane" style="">
                <div class="content-title-icon">
                  <Icon type="ios-navigate" size="20" />
                </div>
                <span class="content-title-span" style="">会议公告</span>
              </div>
              <div class="content-show" style="background-color: #f9fafc;padding: 20px;overflow: hidden">
                <Row style="background:#eee;padding:20px">
                  <Col span="7" offset="1">
                    <Card :bordered="true">
                      <p slot="title">标题</p>
                      <div style="height: 100px;width: 260px;">
                        内容
                      </div>
                    </Card>
                  </Col>
                  <Col span="7" offset="1">
                    <Card :bordered="true">
                      <p slot="title">标题</p>
                      <div style="height: 100px;width: 260px;">
                        内容
                      </div>
                    </Card>
                  </Col>
                  <Col span="7" offset="1">
                    <Card :bordered="true">
                      <p slot="title">标题</p>
                      <div style="height: 100px;width: 260px;">
                        内容
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row style="background:#eee;padding:20px">
                  <Col span="7" offset="1">
                    <Card :bordered="true">
                      <p slot="title">标题</p>
                      <div style="height: 100px;width: 260px;">
                        内容
                      </div>
                    </Card>
                  </Col>
                  <Col span="7" offset="1">
                    <Card :bordered="true">
                      <p slot="title">标题</p>
                      <div style="height: 100px;width: 260px;">
                        内容
                      </div>
                    </Card>
                  </Col>
                  <Col span="7" offset="1">
                    <Card :bordered="true">
                      <p slot="title">标题</p>
                      <div style="height: 100px;width: 260px;">
                        内容
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>

            <div class="documents"   style="overflow: hidden" v-show="this.menu===4">
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
  import MenuList from "../components/MenuList";
  import SearchBox from "../components/SearchBox";
    export default {
        name: "paper-manage-center",
        components:{
            NconfsysFooter,
            NconfsysHeader,
            MenuList,
            SearchBox,
        },
        data(){

            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码！'));
                } else {
                    if (this.addManagerForm.passwordCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwordCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码！'));
                } else if (value !== this.addManagerForm.password) {
                    callback(new Error('两次输入的密码不同!'));
                } else {
                    callback();
                }
            };
            const validateUserName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不可为空'));
                }
                // 模拟异步验证效果
                else if (!Number.isInteger(value)) {
                    return  callback(new Error('用户名只可包含数字'));
                }
                else if (value<1000000){
                    return  callback(new Error('用户名必须大于6位'));
                }
                else if (value>999999999999){
                    return  callback(new Error('用户名必须小于12位'));
                }
                else {
                    callback();
                }
            };
            const validateName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入用户名！'));
                }
                // 模拟异步验证效果
            };
            return{
                confId:'',
                theme1:'light',
                //searchPaperPlaceholder:'搜索paper: ID/论文名称/作者名称',
                professorManagePlaceholder:'专家ID/姓名',
                itemlist:[
                    {
                        name:"1",
                        message:"征稿管理"
                    },
                    {
                        name:"2",
                        message:"评阅管理"
                    },
                    {
                        name:"3",
                        message:"专家管理"
                    },
                    {
                        name:'4',
                        message:"我的通知"
                    },
                    /*{
                        name:'5',
                        message:"会议公告"
                    },*/
                    {
                        name:"5",
                        message:"资料中心"
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
                noticeFrom:{
                    confId:'',
                    range:'',
                    content:'',
                },
                noticedata: [{
                    value: '0',
                    label: '所有会议管理员'
                },
                    {
                        value: '1',
                        label: '所有用户'
                    },
                    {
                        value: '2',
                        label: '所有参会人员'
                    }],
                noticecontent:'',

                //征稿管理
                solicitStartFrom:{
                    demand:'',
                    viewDemand:'略',
                   // switch:false,
                    dates:[],
                    confId:'',
                },

                viewDemandFrom:{
                    confId:'',
                    viewDemand:''
                },

                //评阅管理
                paperListTableHeader:[
                    {
                        title: '论文ID',
                        key: 'paperId'
                    },
                    {
                        title: '题目',
                        key: 'paperTopic'
                    },
                    {
                        title: '作者',
                        key: 'paperAuthor'
                    },
                    {
                        title: '评阅状态',
                        key: 'viewStatus'
                    },

                ],
                paperListTableData:[
                    {
                        paperId:'12345',
                        paperTopic:'hhhhhhhh',
                        paperAuthor:'王兴泽',
                        viewStatus:'评阅中',
                    },
                ],

                professorListTableHeader:[
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
                        title: '电话',
                        key: 'phone'
                    },

                ],
                professorListTableData:[
                    {
                        userName:'12345',
                        name:'王兴泽',
                        email:'56666666@qq.com',
                        phone:'123344444',
                    }
                ],

                viewResultListTableHeader:[
                    {
                        title: '论文ID',
                        key: 'paperId'
                    },
                    {
                        title: '论文作者',
                        key: 'paperAuthor'
                    },
                    {
                        title: '评阅专家',
                        key: 'name'
                    },
                    {
                        title: '得分',
                        key: 'score'
                    },

                ],
                viewResultListTableData:[
                    {
                        paperId:'11111111',
                        paperAuthor:'wxz ',
                        name:'王兴泽',
                        score:'89',
                    }
                ],

                //工作人员管理
                viewmanagmenu:1,
                managermenu:1,
                workerTableHeader:[
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

                    /* {
                         title: '操作',
                         slot: 'action',
                         width: 150,
                         align: 'center'
                     }*/
                ],

                workerTableData:[],
                chosedrole:[],
                addmanagervalue:[{
                    value: 'ROLE_SECRETARY',
                    label: '秘书组'
                },
                    {
                        value: 'ROLE_FINANCER',
                        label: '财务管理'
                    },
                    {
                        value: 'ROLE_PAPER_MANAGER',
                        label: '论文管理员'
                    }],
                addManagerForm:{
                    name:'',
                    userName:'',
                    password:'',
                    //passwordCheck:'',
                    confId:'',
                    //role:'',
                    roleName:'ROLE_PROGESSOR',
                },
                ruleCustom: {
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { max:15,type: 'string', min: 6, message: '密码至少6位小于15位', trigger: 'blur' },
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwordCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    userName: [
                        { validator: validateUserName, trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ]
                },
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
              let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/conference/initpapermanagcenter?confId='+this.confId;
              this.$http.get(url).then((response)=>{
                  if (response.status===200){
                      if (response.data.code===200){
                          console.log('bbbbb'+response.data.data.solicitStartFrom);
                          console.log(response.data.data.professorList);
                          this.workerTableData=response.data.data.professorList;
                          this.viewResultListTableData=response.data.data.viewResultVoList;
                          this.professorListTableData=response.data.data.professorList;
                          this.paperListTableData=response.data.data.paperVoList;
                          if(response.data.data.solicite!==null){
                              this.solicitStartFrom=response.data.data.solicite;
                          }
                      }
                      else {
                          this.$Message.error(response.data.code);
                      }
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
                this.noticemenu=1;
            },

            selectUser(value, selectedData){
                console.log('v'+value);
                this.noticeFrom.range=value[0];
            },

            tosendnotice(){
                this.noticeFrom.confId=window.sessionStorage.getItem('confId');
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/mail/sendnotice';
                this.$http.post(url,this.noticeFrom).then((response)=>{
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


            //发布征稿消息
            submitPaperDemand(){
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/solicite/createOneSolicite';
                this.solicitStartFrom.confId=window.sessionStorage.getItem('confId');
                if (this.solicitStartFrom.length<2){
                    this.$Message.error('请选择征稿日期');
                    return;
                }
                this.$http.post(url,this.solicitStartFrom).then((response)=>{
                    if (response.status===200){
                        if (response.data.code===200){
                            this.$Message.success("成功");
                        }
                        else {
                            this.$Message.error(response.data.message);
                        }
                    }
                    else {
                        this.$Message.error(response.status);
                    }
                }).catch();
                console.log(this.solicitStartFrom.startDate);
                console.log(this.solicitStartFrom.endDate);
            }
            ,

            //工作人员管理
            managerList(){
                this.managermenu=1;
            },
            selectRole(value, selectedData) {
                console.log('v'+value);
                this.addManagerForm.roleName=value;
            },
            addManager(){
                this.managermenu=2;
            },
            //添加管理人员
            toaddManager(){
                if(this.addManagerForm.roleName===null){
                    this.$Message.error('请选择工作职务！');
                    return;
                }
                this.addManagerForm.confId=this.confId;
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/user/addManager';
                this.$http.post(url,this.addManagerForm).then((response)=>{
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

            //
            submitViewDemand(){
                this.viewDemandFrom.confId=this.confId;
                this.viewDemandFrom.viewDemand=this.solicitStartFrom.viewDemand;
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/solicite/addViewDemand';
                this.$http.post(url,this.viewDemandFrom).then((response)=>{
                    if (response.status===200){
                        if (response.data.code===200){
                            this.$Message.success('成功！');
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
            paperList(){this.viewmanagmenu=1;},
            professorList (){this.viewmanagmenu=2;},
            viewDemand (){this.viewmanagmenu=3;},
            viewReslt(){this.viewmanagmenu=4;},


        },//methods
    }
</script>

<style scoped>

</style>
