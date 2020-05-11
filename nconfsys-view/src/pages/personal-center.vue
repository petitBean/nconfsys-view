<template>
  <!--个人中兴-->
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

            <div class="mayjinedconf" v-show="menu===0">
              <div class="now-content-name content-title-pane" style="">
                <div style="float: left;padding: 2px;margin-left: 5px;margin-right: 5px"><Icon type="ios-navigate" size="20" /></div>
                <span class="content-title-span" style="">我加入的会议</span>
              </div>
              <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                <template>
                  <Table border :columns="tableHeader" :data="tableData">
                    <template slot-scope="{ row, index }" slot="action">
                      <div v-if="tableData[index].status===3">
                        <Button type="primary" size="small" style="margin-right: 5px;width:80px;height:30px" @click="toPay(index)">缴费</Button>
                      </div>
                      <div v-else-if="tableData[index].status===2">
                        <Button type="primary" size="small" style="margin-right: 5px;width:80px;height:30px" @click="toUploadPaper(index)">提交论文</Button>
                      </div>
                      <div v-else>
                        <Button type="primary" size="small" style="margin-right: 5px;width:80px;height:30px" @click="todetail(index)">详情</Button>
                      </div>
                    </template>
                  </Table>
                </template>
              </div>
            </div>

            <!--提交论文-->
            <div class="uploadpapaper" v-show="this.uploadpapermenu===1">
              <div class="now-content-name content-title-pane" style="">
                <div class="content-title-icon">
                  <Icon type="ios-navigate" size="20" />
                </div>
                <span class="content-title-span" style="">提交论文</span>
              </div>
              <div class="content-show" style="padding: 20px;overflow: hidden">
                <Menu mode="horizontal"  active-name="1">
                  <div style="float: right;margin-left: 20px;margin-right: 5px">
                    <Button type="primary" size="small" style="margin-right: 5px;width:80px;height:30px" @click="cancelUploadPaper">取消</Button>
                  </div>
                  <div style="float: left;margin-left: 20px;margin-right: 5px">
                    <Upload :on-success=" handleSuccess"
                            :on-error="handleFormatError"
                            :data="fileParam"
                            :max-size="20480"
                            action="http://localhost:8671/nconf-gateway/api-conf-service/conf-service/file/uploadpaper">
                      <Button icon="ios-cloud-upload-outline">上传论文</Button>
                    </Upload>
                  </div>
                </Menu>
                <!--内容区-->
                <div style="display: block;height: 600px;width: 100%;">
                  <Card style="width:100%;min-height: 320px">
                    <span style="font-weight: bolder;font-size: 14px;display: block;float: left">
                      论文要求及说明：
                    </span>
                    <div>
                      <span>
                      <!--{{this.solicite.demand}}-->
                      </span>
                    </div>
                    <Divider></Divider>
                    <div style="text-align:center">
                      <Input v-model="fileParam.topic" type="textarea"  placeholder="在此输入论文题目" :rows="8" />
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <!--提交论文-->
            <div class="uploadpapaper" v-show="this.paymenu===1">
              <div class="now-content-name content-title-pane" style="">
                <div class="content-title-icon">
                  <Icon type="ios-navigate" size="20" />
                </div>
                <span class="content-title-span" style="">支付中心</span>
              </div>
              <div class="content-show" style="padding: 20px;overflow: hidden">
                <Menu mode="horizontal"  active-name="1">
                  <div style="float: right;margin-left: 20px;margin-right: 5px">
                    <Button type="primary" size="small" style="margin-right: 5px;width:80px;height:30px" @click="cancelPay">取消</Button>
                  </div>
                  <div style="float: left;margin-left: 20px;margin-right: 5px">
                   <!-- <Upload :on-success=" handleSuccess"
                            :on-error="handleFormatError"
                            :data="fileParam"
                            :max-size="20480"
                            action="http://localhost:8671/nconf-gateway/api-conf-service/conf-service/file/uploadpaper">
                      <Button icon="ios-cloud-upload-outline">上传文件</Button>
                    </Upload>-->
                  </div>
                </Menu>
                <!--内容区-->
                <div style="display: block;height: 600px;width: 100%;">
                  <Card style="width:100%;min-height: 320px">
                    <div>金额：<Input type="text" readonly ></Input></div>
                    <span style="font-weight: bolder;font-size: 14px;display: block;float: left">
                      缴费要求
                      <Input  type="textarea"  placeholder="在此输入缴费相关说明" :rows="8" />
                    </span>
                    <div>
                      <span>
                      <!--{{this.payCategory.payDemand}}-->
                     </span>
                      <div>
                        <Button type="primary" size="large" style="width: 100px" @click="pay">模拟支付</Button>
                      </div>
                    </div>

                  </Card>
                </div>
              </div>
            </div>


            <!--收藏的会议-->
            <div class="" v-if="this.menu===1">
              <div class="now-content-name content-title-pane" style="">
                <div style="float: left;padding: 2px;margin-left: 5px;margin-right: 5px"><Icon type="ios-navigate" size="20" /></div>
                <span class="content-title-span" style="">我管理的会议</span>
              </div>
              <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                <template>
                  <Table border :columns="manageConfTableHeader" :data="manageConfTableData">
                    <template slot-scope="{ row, index }" slot="action">
                      <Button type="primary" size="large" style="margin-right: 5px;width:80px;height:30px" @click="tomanagePage(index)">管理</Button>
                    </template>
                  </Table>
                </template>
              </div>
            </div>

            <div class="applyjoinconf" v-if="this.menu===2">
              <div class="now-content-name content-title-pane" style="">
                <div style="float: left;padding: 2px;margin-left: 5px;margin-right: 5px"><Icon type="ios-navigate" size="20" /></div>
                <span class="content-title-span" style="">申请加入会议</span>
              </div>
              <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                <Card>
                  <div style="min-height: 200px;">
                    <div style="overflow: hidden">
                      <div style="float:left;margin:3px">
                        <label>
                          <span style="font-size: 15px;font-weight: bolder;color: #464c5b;text-align:center;font-family: 'PingFang SC' ;margin: 4px">搜索会议</span>
                        </label>
                      </div>
                      <div style="float: left">
                        <div>
                          <Input placeholder="会议名/ID" v-model="key" style="width: 300px">
                            <Icon type="ios-search" slot="suffix" @click="tosearch"/>
                          </Input>
                        </div>
                      </div>
                    </div>
                    <template>
                      <div style="margin-top: 15px">
                        <Table border  :columns="tableHeader3" @on-select="choseconf" :data="tableData3"></Table>
                      </div>
                    </template>
                  </div>
                  <Divider />
                  <Card style="width:100%;min-height: 320px">
                    <div style="color: #333333">
                      <span style="font-weight: bolder;font-size: 14px;display: block;float: left">请输入申请理由和相关说明：</span>
                     <div style="float: right;margin-bottom: 5px;margin-right: 15px">
                       <Button type="primary" size="large" @click="toApply">提交申请</Button>
                     </div>
                    </div>
                    <Divider />
                    <div style="text-align:center">
                      <Input v-model="applicationFrom.reason" type="textarea"  placeholder="在此输入申请理由和相关说明" :rows="8" />
                    </div>
                  </Card>
                  <div>
                  </div>
                </Card>
              </div>
            </div>

            <div class="completeinfo" v-if="this.menu===3">
              <div class="now-content-name content-title-pane" style="">
                <div style="float: left;padding: 2px;margin-left: 5px;margin-right: 5px"><Icon type="ios-navigate" size="20" /></div>
                <span class="content-title-span" style="">完善个人信息</span>
              </div>
              <div class="content-show" style="background-color: #f9fafc;padding: 20px">
                <Card >
                  <div style="margin: 80px">
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                      <div style="width: 600px;margin: 15px">
                        <FormItem label="姓名" prop="name">
                          <Input v-model="formValidate.name" placeholder="输入你的姓名"></Input>
                        </FormItem>
                      </div>
                      <div style="width: 600px;margin: 15px" >
                        <FormItem label="住址" prop="address">
                          <Input type="textarea" v-model="formValidate.address" placeholder="输入你的详细地址"></Input>
                        </FormItem>
                      </div>
                      <div style="width: 600px;margin: 15px">
                        <FormItem label="电话" prop="phone">
                          <Input v-model="formValidate.phone" placeholder="输入你的手机号码"></Input>
                        </FormItem>
                      </div>
                      <div style="width: 600px;margin: 15px;display: block" >
                        <FormItem label="邮箱" style="display: block" prop="email">
                          <div style="display: block;width: 100%">
                            <div style="display: block;width: 400px;float: left">
                              <Input v-model="formValidate.email" placeholder=""></Input>
                            </div>
                            <div style="display: block;width: 100px;float: right">
                              <Button type="primary" style="float: right"  @click="sendMail()">
                                <div v-if="this.codeissended===0">获取验证码</div>
                                <div v-if="this.codeissended!==0">重新获取</div>
                              </Button>
                            </div>
                          </div>
                        </FormItem>
                      </div>
                      <div style="width: 600px;margin: 15px" >
                        <FormItem label="验证码" prop="confirmCode">
                          <Input  v-model="formValidate.confirmCode" placeholder="输入邮箱收到的验证码！"></Input>
                        </FormItem>
                      </div>
                      <FormItem label="性别" prop="gender" style="margin: 15px">
                        <RadioGroup v-model="formValidate.gender">
                          <Radio label="male" style="margin-left: 20px">男</Radio>
                          <Radio label="female" style="margin-left: 15px">女</Radio>
                        </RadioGroup>
                      </FormItem>
                      <FormItem style="margin: 40px;margin-left: 150px">
                        <Button type="primary"  @click="handleSubmit('formValidate')">提交</Button>
                        <Button @click="handleReset('formValidate')" style="margin-left: 50px">重置</Button>
                      </FormItem>
                    </Form>
                  </div>
                </Card>
              </div>
            </div>

            <div class="changepass" v-if="this.menu===5" >
              <div class="now-content-name content-title-pane" style="">
                <div class="content-title-icon">
                  <Icon type="ios-navigate" size="20" />
                </div>
                <span class="content-title-span" style="">修改密码</span>
              </div>
              <Card >
                <div style="margin-top: 80px;margin-left: 200px;margin-bottom: 300px">
                  <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                    <div style="width: 400px;margin: 30px">
                      <FormItem label="旧密码" prop="oldpassword">
                        <Input type="text" v-model="formCustom.oldpassword" number></Input>
                      </FormItem>
                    </div>
                    <div style="width: 400px;margin: 30px">
                      <FormItem label="新密码" prop="password">
                        <Input type="password" v-model="formCustom.password"></Input>
                      </FormItem>
                    </div>
                    <div style="width: 400px;margin: 30px">
                      <FormItem label="确认密码" prop="passwordCheck">
                        <Input type="password" v-model="formCustom.passwordCheck"></Input>
                      </FormItem>
                    </div>
                    <div style="width: 400px;text-align: center;margin: 30px">
                      <FormItem>
                        <Button type="primary" @click="handleSubmitChangePass('formCustom')">提交</Button>
                        <Button @click="handleResetChangePass('formCustom')" style="margin-left: 40px">重置</Button>
                      </FormItem>
                    </div>
                  </Form>
                </div>
              </Card>
            </div>


            <div class="notice"  v-if="this.menu===4">
              <div class="now-content-name content-title-pane" style="">
                <div class="content-title-icon">
                  <Icon type="ios-navigate" size="20" />
                </div>
                <span class="content-title-span" style="">发送通知</span>
              </div>
              <div class="content-show" style="padding: 20px;overflow: hidden">
                <Menu mode="horizontal"  active-name="1">
                  <MenuItem name="2" @click.native="sendNotice">
                    <Icon type="md-send" />
                    发送通知
                  </MenuItem >
                </Menu>
                <!--内容区-->
               <!-- <div style="display: block;height: 600px;width: 100%;" v-show="this.noticemenu===1">
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
                </div>-->

                <div style="display: block;height: 600px;width: 100%;" v-show="this.noticemenu===1">
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

            <div class="announce" v-show="this.menu===50">
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

        <!--    <div class="documents"   style="overflow: hidden">
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
                &lt;!&ndash;内容区&ndash;&gt;
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
            </div>-->


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
  import ActionTable from "../components/ActionTable";
  import NconfsysFooter from "../components/NconfsysFooter";
  import MenuList from "../components/MenuList";
  import SearchBox from "../components/SearchBox";

    export default {
        name: "personal-center",
        components:{
            NconfsysHeader,
            NconfsysFooter,
            MenuList,
            ActionTable,
            SearchBox,
        },
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码！'));
                } else {
                    if (this.formCustom.passwordCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwordCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码！'));
                } else if (value !== this.formCustom.password) {
                    callback(new Error('两次输入的密码不同!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入旧密码！'));
                }
                // 模拟异步验证效果
                callback();
            };

            return {
                uploadpapermenu:0,
                paymenu:0,
                codeissended:0,
                formValidate: {
                    name: '',
                    email: '',
                    phone:'',
                    address: '',
                    gender: '',
                    confirmCode:'',
                    username:'',
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不可为空', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '电话不可为空', trigger: 'blur' }
                    ],
                    confirmCode: [
                        { required: true, message: '验证码不可为空', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '地址不可为空', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '邮箱不可为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    gender: [
                        { required: true, message: '选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],

                },
                menu:0,
                noticemenu:1,
                theme1:'light',
                professorManagePlaceholder:'',
                searchPlaceholder:'输入文件名',
                searchPaperPlaceholder:'',
                theme3: 'light',
                key: '',
                actionName: '会议详情',
                itemlist: [
                    {
                        name: '1',
                        message: "我加入的会议"
                    },
                    {
                        name: '2',
                        message: "我管理的会议"
                    },
                    {
                        name: "3",
                        message: "申请加入会议"
                    },
                    {
                        name: "4",
                        message: "完善个人信息"
                    },
                   /* {
                        name: "5",
                        message: "创建会议"
                    },*/
                    {
                        name: "5",
                        message: "发送通知"
                    },
                    {
                        name: "6",
                        message: "修改密码"
                    },
                ],
                payCategory:{
                    payDemanded: '无',
                    amount:20,
                },
                payParam:{
                    confId:'',
                    userName:'',
                    amount:'',
                },
                solicite:{
                    viewDemand:'无',
                },
                fileParam:{
                    userName:'',
                    topic:'',
                    confId:'',
                },
                tableHeader: [
                    {
                        title: '会议ID',
                        key: 'confId'
                    },
                    {
                        title: '会议名称',
                        key: 'confName',
                        width:300,
                    },
                    /*{
                        title: '简介',
                        key: 'confIntroduce'
                    },*/
                    {
                        title: '会议状态',
                        width: 100,
                        key: 'confStatusStr'
                    },
                    {
                        title: '举办时间',
                        width: 150,
                        key: 'startTimeStr'
                    },
                    {
                        title: '申请状态',
                        width: 100,
                        key: 'applicationStatus'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 100,
                        align: 'center'
                    }
                ],
                tableData: [
                   /* {
                        confId:'122222',
                        confName:'ccccc1',
                        status:2,
                    },
                    {
                        confId:'122222',
                        confName:'ccccc1',
                        status:3,
                    }*/
                ],
                manageConfTableHeader:[
                    {
                        title: '会议ID',
                        key: 'confId'
                    },
                    {
                        title: '会议名称',
                        key: 'confName'
                    },
                    {
                        title: '会议状态',
                        key: 'confStatusStr'
                    },
                    {
                        title: '举办时间',
                        key: 'startTimeStr'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                manageConfTableData:[
                ],
                 /*fileParam:{
                     confId:'0001',
                     userName:'13720131232',
                     note:'无',
                 },*/
               /* documentHeader: [
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
                documentData: [],*/
                tableHeader3: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '会议ID',
                        key: 'confId'
                    },
                    {
                        title: '会议名称',
                        key: 'confName'
                    },
                    {
                        title: '简介',
                        key: 'confIntroduce'
                    },
                    {
                        title: '会议状态',
                        key: 'status'
                    },
                    {
                        title: '举办时间',
                        key: 'startTime'
                    },

                ],
                tableData3: [],
                applicationFrom: {
                      userName: '',
                      confId: '',
                      reason:'',
                 },
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


                formCustom: {
                    oldpassword:'',
                    password: '',
                    username: '',
                    passwordCheck: ''
                },
                ruleCustom: {
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwordCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    oldpassword: [
                        { validator: validateAge, trigger: 'blur' }
                    ]
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
            //查询用户及加入的会议
            init(){
                let  url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/conference/initpersonal?username='+window.sessionStorage.getItem('username');
                this.$http.get(url).then((response)=>{
                    if(response.status===200){
                        console.log(response.data.data);
                        this.tableData=response.data.data.joinedConference;
                        this.solicite.viewDemand=response.data.data.solicite;
                        this.payCategory=response.data.data.payCategory;
                        console.log(response.data.data);
                        this.manageConfTableData=response.data.data.myManagConfTableVoList;
                    }
                    else {
                        if (response.status===500){
                            this.$Message.error("系统异常！退出重试！");
                        }
                    }
                }).catch((error)=>{
                    if (error.response){
                        if (error.response.status===504){
                            this.$Message.warning('请求超时！请刷新页面！');
                        }
                        else {
                            this.$Message.warning('请重新登录！');
                        }
                    }
                });
            },
            //响应菜单的点击事件
            select(name){
                this.menu=name-1;
            },

            //我加入的会议

            //完善个人信息
            sendMail(){
                this.codeissended++;
                 let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/mail/get_identicode?username='+window.sessionStorage.getItem('username')+"&to="+this.formValidate.email;
                 this.$http.get(url).then((response)=>{
                     if (response.status===200){
                         if (response.data.code===200) {
                             this.$Message.success('验证码已经发送到邮箱' + this.formValidate.email + '请查收！');
                         }
                         else {
                             this.$Message.error(response.data.message+'请求失败！请重试');
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
                             this.$router.push('/user-login');
                         }
                     }
                     else {
                         this.$Message.error("失败！请重试!")
                     }
                 });
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.formValidate.username=window.sessionStorage.getItem('username');
                      let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/user/completeUserInfo';
                      this.$http.post(url,this.formValidate).then((response)=>{
                          if (response.status===200){
                             // console.log(response.data);
                              if(response.data.code===200){
                                  this.$Message.success('成功');
                              }
                              else {
                                  this.$Message.error(response.data.message);
                              }
                          }
                          else if (response.status===504){
                              this.$Message.error('请求超时，请重试!');
                          }
                          else {
                              this.$Message.error('失败'+response.status);
                          }
                      }).catch();
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },


            //申请加入会议
            tosearch(){
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/conference/searche_by_IdOrNameLike?key='+this.key;
                let message=this.$Message;
                    this.$http.get(url).then((response)=>{
                        console.log(response.data);
                        this.tableData3=response.data.data;
                    }).catch((error)=>{
                        if (error.response){
                             if(error.response.status===504){
                                 message.error('网络异常！')
                             }
                        }
                        else if(error.request){

                        }
                    });

            },
            choseconf(selection,raw){
                if (selection.length>1){
                    this.$Message.error("每次只可选择申请一个会议！");
                }
                else {
                   this.applicationFrom.confId=selection[0].confId;
                    //console.log(this.applicationFrom.confId);
                }
            },
            toApply(){
                this.applicationFrom.userName=window.sessionStorage.getItem('username');
                console.log(this.applicationFrom.confId);
                 if (this.applicationFrom.confId===''){
                     this.$Message.error("请选择一个会议！");
                     return;
                 }
                 if (this.applicationFrom.userName===null){
                     this.$Message.error("请重新登录！");
                     return;
                 }
                 let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/application/create_application';
                 console.log(this.applicationFrom);
                 this.$http.post(url,this.applicationFrom).then((response)=>{
                     if (response.status===200 && response.data.code===200){
                         if (response.data.code===200){
                             this.$Message.success("申请成功！");
                         }
                         else {
                             this.$Message.error(response.data.message);
                         }
                     }
                     else {
                         this.$Message.success("申请失败！"+response.data.message);
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
            //查看会议详情
            todetail(index){
                console.log(this.tableData[index].confName);
            },


            //修改密码
            handleSubmitChangePass () {
                this.formCustom.username=window.sessionStorage.getItem('username');
                     let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/user/changePass?username='+this.formCustom.username
                              +'&password='+this.formCustom.oldpassword
                              +'&newPassword='+this.formCustom.password;
                     this.$http.post(url).then((response)=>{
                         if (response.status===200){
                             if(response.data.code===200){
                                 this.$Message.success('修改成功!重新登录！');
                                 this.$router.push('/user-login');
                             }
                             else{
                                 this.$Message.error("修改失败！");
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
                                 this.$router.push('/user-login');
                             }
                         }
                         else {
                             this.$Message.error("失败！请重试!")
                         }
                     });
            },
            handleResetChangePass () {
                this.$refs.formCustom.resetFields();
            },

            //资料
            //资料中心
          /*  handleSuccess(response, file) {
                /!*file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';*!/
                console.log(response);
                this.$Message.success("文件上传成功！");
            },
            handleFormatError (file) {
                console.log("失败");
                this.$Message.error("文件上传失败！请重试！");
            },*/

          /*  findList(type){
               // console.log('VVVVVVVVVVVVVVVVVVVvvvvvvvvvvvvvvvv'+type);
                let  url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/resource/find_by_ConIdAndType?confId='+'0001&type='+type;
                this.$http.get(url).then((response)=>{
                    if (response.status===200){
                        this.documentData=response.data.data;
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
                    if (response.status===504){
                        this.$Message.warning('请求超时 ！请重试！');
                    }
                    else {
                        this.$Message.warning('请重新登录重试！');
                    }
                });
            },*/

            //下载
            dowload(index){
                console.log(this.documentData[index].storeName);
                let fileName=this.documentData[index].storeName;
                //测试下载文件(注意web的上下文)
                window.location.href = 'http://localhost:8671/nconf-gateway/api-conf-service/conf-service/file/download?fileName='+fileName ;
            },


            //通知
            myNoticeList(){
                this.noticemenu=1;
            },
            sendNotice(){
                this.noticemenu=1;
            },
            tosendnotice(){
                console.log(this.noticedata[0].value);
                alert(this.noticedata[0]);
                alert(this.noticecontent);
            },

            //我管理的会议
            tomanagePage(index){
                let roleName=this.manageConfTableData[index].roleName;
                if (roleName===null){
                    this.$Message.error('角色信息错误');
                    return;
                }
                else if(roleName==='ROLE_SECRETARY'){
                    window.sessionStorage.setItem('confId',this.manageConfTableData[index].confId);
                   this.$router.push('/conf-manage-center');
                }
                else if(roleName==='ROLE_FINANCER'){
                    window.sessionStorage.setItem('confId',this.manageConfTableData[index].confId);
                    this.$router.push('/financer-page');
                }
                else if(roleName==='ROLE_PAPER_MANAGER'){
                    window.sessionStorage.setItem('confId',this.manageConfTableData[index].confId);
                    this.$router.push('/paper-manage-center');
                }
                else if (roleName==='ROLE_PROGESSOR'){
                    window.sessionStorage.setItem('confId',this.manageConfTableData[index].confId);
                    this.$router.push('/paper-view-center');
                }
            },

            //
            toUploadPaper(index){
                this.fileParam.confId=this.tableData[index].confId;
                this.menu=100;
               this.uploadpapermenu=1;
            },
            toPay(index){

                this.payParam.confId=this.tableData[index].confId;
               // window.sessionStorage.setItem('confId',this.manageConfTableData[index].confId);
                this.menu=100;
                this.paymenu=1;
            },
            cancelUploadPaper(){
                this.uploadpapermenu=0;
                this.menu=0;
            },
            cancelPay(){
                this.paymenu=0;
                this.menu=0;
            },
            pay(){
                this.payParam.amount=0;
                //this.payParam.confId=window.sessionStorage.getItem('confId');
                this.payParam.userName=window.sessionStorage.getItem('username');
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/order/order_pay';
                this.$http.post(url,this.payParam).then((response)=>{
                    if (response.status===200){
                        if(response.data.code===200){
                            this.$Message.success('成功！');
                        }
                        else{
                            this.$Message.error("失败！");
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
                            this.$router.push('/user-login');
                        }
                    }
                    else {
                        this.$Message.error("失败！请重试!")
                    }
                });

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
        },
    }
</script>

<style scoped>

</style>
