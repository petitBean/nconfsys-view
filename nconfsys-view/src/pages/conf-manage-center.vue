<template>
  <!--会议信息管理员页面-->
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

            <div class="manager" v-if="this.menu===0">
              <div class="now-content-name content-title-pane" style="">
                <div style="float: left;padding: 2px;margin-left: 5px;margin-right: 5px"><Icon type="ios-navigate" size="20" /></div>
                <span class="content-title-span" style="">工作人员管理</span>
              </div>
              <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                <Card>
                  <div class="content-show" style="padding: 20px;overflow: hidden">
                    <Menu mode="horizontal"  active-name="1">
                      <MenuItem name="1" @click.native="managerList">
                        <Icon type="md-person" />
                        工作人员列表
                      </MenuItem>
                      <MenuItem name="2" @click.native="addManager">
                        <Icon type="md-send" />
                        添加工作人员
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
                      <span style="font-weight: bolder;font-size: 14px;display: block;float: left">
                        <Cascader v-model="chosedrole" :data="addmanagervalue" :transfer=true  @on-change="selectRole" trigger="hover" >
                        </Cascader>
                      </span>
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
                                  <Input type="text" v-model="addManagerForm.userName" ></Input>
                                </FormItem>
                              </div>
                              <div style="width: 400px;margin: 30px">
                                <FormItem label="姓名" prop="name">
                                  <Input type="text" v-model="addManagerForm.name" number></Input>
                                </FormItem>
                              </div>
                              <div style="width: 400px;margin: 30px">
                                <FormItem label="密码" prop="password">
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
              </div>
            </div>

            <div class="userpassedlist" v-show="this.menu===1">
              <div class="now-content-name content-title-pane" style="">
                <div style="float: left;padding: 2px;margin-left: 5px;margin-right: 5px"><Icon type="ios-navigate" size="20" /></div>
                <span class="content-title-span" style="">参会人员列表</span>
              </div>
              <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                <Table border :columns="userpassedTableHeader" :data="userpassedTableData">
                  <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" size="large" style="margin-right: 5px;width:80px;height:30px" @click="todetail(index)">详情</Button>
                  </template>
                </Table>
              </div>
            </div>

            <div class="applicationManag" v-if="this.menu===2">
              <div class="now-content-name content-title-pane" style="">
                <div style="float: left;padding: 2px;margin-left: 5px;margin-right: 5px"><Icon type="ios-navigate" size="20" /></div>
                <span class="content-title-span" style="">会议申请管理</span>
              </div>
              <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                  <Table border :columns="applicationManageTableHeader" :data="applicationManageTableData">
                    <template slot-scope="{ row, index }" slot="action">
                      <Button type="primary" size="small" style="margin-right: 5px;width:80px;height:30px" @click="passApply(index)">通过</Button>
                      <Button type="error"  size="small" style="margin-right: 5px;width:80px;height:30px" @click="refuseApply(index)">拒绝</Button>
                    </template>
                    <template slot-scope="{ row, index }" slot="reason">
                      <Button type="primary" size="small" @click.native="modal1 = true" style="margin-right: 5px;width:80px;height:30px" >理由</Button>
                      <div>
                        <Modal
                          v-model="modal1"
                          title="申请理由"
                          @on-ok="ok"
                          @on-cancel="cancel">
                          <p>{{applicationManageTableData[index].reason}}</p>
                        </Modal>
                      </div>
                    </template>
                  </Table>

                </div>
              </div>
            </div>


            <div class="notice"  v-if="this.menu===3">
              <div class="now-content-name content-title-pane" style="">
                <div class="content-title-icon">
                  <Icon type="ios-navigate" size="20" />
                </div>
                <span class="content-title-span" style="">会议通知</span>
              </div>
              <div class="content-show" style="padding: 20px;overflow: hidden">
                <Menu mode="horizontal"  active-name="1">
                  <!--<MenuItem name="1" @click.native="myNoticeList">
                    <Icon type="md-person" />
                    我的通知
                  </MenuItem>-->
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
                        <Cascader :data="noticedata" v-model="noticevalue" @on-change="selectUser" >
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

            <div class="documents" v-show="this.menu===4"  style="overflow: hidden">
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
  import NconfsysFooter from "../components/NconfsysFooter";
  import NconfsysHeader from "../components/NconfsysHeader";
  import MenuList from "../components/MenuList";
  import ActionTable from "../components/ActionTable";
    export default {
        name: "conf-manage-center",
        components: {
            NconfsysHeader,
            NconfsysFooter,
            MenuList,
            ActionTable,
        },
        data () {
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
            const validateUsername = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不可为空'));
                }
                // 模拟异步验证效果
                /*else if (!Number.isInteger(value)) {
                    return  callback(new Error('用户名只可包含数字'));
                }*/
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
                    return callback(new Error('请输入姓名！'));
                }
                // 模拟异步验证效果
            };
            return {
                modal1: false,
                confId:'',
                theme1:'light',
                searchPlaceholder:'输入文件名',
                theme3: 'primary',
                searchPaperPlaceholder:'搜索paper: ID/论文名称/作者名称',
                professorManagePlaceholder:'专家ID/姓名',
                menuchosed:0,
                itemlist:[
                    {
                        name:'1',
                        message:"工作人员管理"
                    },
                    {
                        name:'2',
                        message:"参会人员列表"
                    },
                    {
                        name:'3',
                        message:"会议申请管理"
                    },

                    {
                        name:'4',
                        message:"我的通知"
                    },
                    /*{
                        name:"6",
                        message:"会议公告"
                    },*/
                    {
                        name:"5",
                        message:"资料中心"
                    },
                ],
                tableHeader: [
                    {
                        title: '会议名称',
                        key: 'confName'
                    },

                    {
                        title: '会议ID',
                        key: 'confId'
                    },
                    {
                        title: '举办时间',
                        key: 'startTimeStr'
                    },
                    {
                        title: '身份',
                        key: 'roleName'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 100,
                        align: 'center'
                    }
                ],
                tableData: [],
                username:'',
                menu:0,
                noticemenu:1,
                managermenu:1,
                fileParam:{
                    confId:'',
                    userName:'',
                    note:'无',
                },
                documentHeader: [
                    {
                        title: '文件名',
                        key: 'originName'
                    },
                    {
                        title: '下载次数',
                        width:100,
                        key: 'downloadTimes'
                    },
                    {
                        title: '备注',
                        width:300,
                        key: 'note'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 130,
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
                //参会人员
                userpassedTableHeader:[
                    {
                        title: '用户名',
                        key: 'userName'
                    },
                    {
                        title: '姓名',
                        width:100,
                        key: 'name'
                    },
                    {
                        title: '邮箱',
                        width:200,
                        key: 'email'
                    },
                    {
                        title: '手机',
                        key: 'phone'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                userpassedTableData:[],
                //工作人员管理
                workerTableHeader:[
                    {
                        title: '用户名',
                        key: 'userName'
                    },
                    {
                        title: '姓名',
                        width:100,
                        key: 'name'
                    },
                    {
                        title: '邮箱',
                        width:200,
                        key: 'email'
                    },
                    {
                        title: '手机',
                        key: 'phone'
                    },
                    {
                        title: '职位',
                        width:100,
                        key: 'roleMessage'
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
                    confId:'',
                    roleName:''
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
                        { validator: validateUsername, trigger: 'blur' }
                    ],
                    name: [
                        { validator: validateName, trigger: 'blur' }
                    ]
                },
                //申请管理
                applicationManageTableHeader:[
                    {
                        width:150,
                        title: '用户名',
                        key: 'userName'
                    },
                    {
                        width:90,
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        width:180,
                        title: '邮箱',
                        key: 'email'
                    },
                    {
                        title: '手机',
                        width:120,
                        key: 'phone'
                    },
                    {
                        width:90,
                        title: '申请状态',
                        key: 'statusStr'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 220,
                        align: 'center'
                    },
                    {
                        title: '理由',
                        slot: 'reason',
                        width: 100,
                        align: 'center'
                    }
                ],
                applicationManageTableData:[
                    /*{
                        username:'123',
                        email:'123',
                        applicationId:'1111111',
                    }*/
                ],

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
                let username=window.sessionStorage.getItem('username');
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/conference/initconfmanagecenter?confId='+this.confId;
                this.$http.get(url).then((response)=>{
                    console.log('xxxxx'+response);
                    this.tableData=response.data.data.tableVoList;
                    this.userpassedTableData=response.data.data.passedVolist;
                    this.applicationManageTableData=response.data.data.applicationManageVoList;
                    this.workerTableData=response.data.data.workerList;
                }).catch();

            },
            tomanage(index){
             console.log(this.tableData[index].confName);
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
                this.$Message.success("文件上传成功！");
                /*file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';*/
                /*if(response.status===200){
                    if (response.data.code===200){
                        this.$Message.success("文件上传成功！");
                    }
                    else {
                        this.$Message.error('上传失败！'+response.data.message);
                    }
                }else {
                    this.$Message.error(response.status+'上传失败');
                }*/
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

            //工作人员管理
            managerList(){
                this.managermenu=1;
            },
            selectRole(value, selectedData) {
                console.log('v'+value);
                this.addManagerForm.roleName=value[0];
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

            //申请管理
            /*showApplyReason(index){
                 alert(this.applicationManageTableData[index].applicationId);

            },*/
            refuseApply(index){
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/application/refuseApply?applicationId='+this.applicationManageTableData[index].applicationId;
                this.$http.post(url).then((response)=>{
                    if (response.status===200){
                        if (response.data.code===200){
                            //成功
                            this.$Message.success('成功！');
                            this.applicationManageTableData[index].statusStr='未通过';
                            /*this.init();
                            this.menu=3;*/
                        }
                        else {
                            this.$Message.error('失败！'+response.data.message);
                        }
                    }
                    else {
                        this.$Message.error('失败！'+response.status);
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

            passApply(index){
               // alert(this.applicationManageTableData[index].applicationId);
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/application/passApply?applicationId='+this.applicationManageTableData[index].applicationId;
                this.$http.post(url).then((response)=>{
                    if (response.status===200){
                        if (response.data.code===200){
                            //成功
                            this.$Message.success('成功！');
                            this.applicationManageTableData.splice(index, 1);
                            this.init();
                           // this.menu=3;*/
                        }
                        else {
                            this.$Message.error('失败！'+response.data.message);
                        }
                    }
                    else {
                        this.$Message.error('失败！'+response.status);
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

            //对话框
            ok () {
                //this.$Message.info('Clicked ok');
            },
            cancel () {
               // this.$Message.info('Clicked cancel');
            }


        }

    }
</script>

<style scoped>
  html, body{ margin:0; height:100%; }
</style>
