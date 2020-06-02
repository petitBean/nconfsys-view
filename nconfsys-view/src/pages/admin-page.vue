<template>
  <div>
    <div class="wrapper-header">
      <nconfsys-header></nconfsys-header>
    </div>
    <div style="width: 100%;height: 5px;background-color: #dcdee2">

    </div>
    <div class="content-container" style="">
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
                <MenuItem v-for="item in itemlist"  :name= "item.nam" @click.native="select(item.nam)" >
                  {{item.message}}
                </MenuItem>
              </MenuGroup>
            </Menu>
          </div>
        </div>
      </div>


      <div class="right-pane border-left" >
        <div style="background-color: white">

          <div class="tagmanage" v-show="this.menu===0"  style="overflow: hidden">
            <div class="now-content-name content-title-pane" style="">
              <div class="content-title-icon">
                <Icon type="ios-navigate" size="20" />
              </div>
              <span class="content-title-span" style="">会议标签管理</span>
            </div>
            <div class="content-show" style="padding: 20px;overflow: hidden">
              <Menu mode="horizontal"  active-name="1">
                <MenuItem name="1" @click.native="tagList">
                  <Icon type="ios-paper" />
                  标签列表
                </MenuItem>
                <MenuItem name="2" @click.native="addTag">
                  <Icon type="ios-image" />
                  添加标签
                </MenuItem >
              </Menu>
              <!--内容区-->
              <div style="display: block;height: 600px;width: 100%;" v-show="this.tagmenu===0&&this.menu===0">
                <Card style="width:100%;min-height: 320px">
                  <template>
                    <Table border :columns="tagTableHeader" :data="tagTableData">
                      <template slot-scope="{ row, index }" slot="action">
                        <Button type="error" size="large" style="margin-right: 5px;width:80px;height:30px" @click="deleteTag(index)">删除</Button>
                      </template>
                    </Table>
                  </template>
                </Card>
              </div>
              <div style="display: block;height: 600px;width: 100%;" v-show="this.tagmenu===1&&this.menu===0">
                <Card style="width:100%;min-height: 320px">
                  <div style="margin: 90px">
                    <Form ref="formValidate" style="margin-bottom: 100px" :model="tagForm" :rules="ruleValidate" :label-width="80">
                      <div style="width: 600px;margin: 15px">
                        <FormItem label="标签名" prop="username">
                          <Input v-model="tagForm.tagName" style="width: 400px" placeholder="输入标签名..."></Input>
                        </FormItem>
                      </div>
                      <div style="width: 600px;margin: 15px;display: block" >
                        <FormItem label="描述" style="display: block" prop="email">
                          <div style="display: block;width: 100%">
                            <div style="display: block;width: 300px;float: left">
                              <Input v-model="tagForm.tagDescription" maxlength="40" show-word-limit type="textarea" placeholder="输入标签描述/说明..." style="width: 400px" />
                            </div>
                          </div>
                        </FormItem>
                      </div>
                      <FormItem style="margin: 40px;margin-left: 10px">
                        <Button type="primary" style="width: 400px"  @click="handleSubmit('formValidate')">
                         添加标签
                        </Button>
                      </FormItem>
                    </Form>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div class="usermanage" v-show="this.menu===1"  style="overflow: hidden">
            <div class="now-content-name content-title-pane" style="">
              <div class="content-title-icon">
                <Icon type="ios-navigate" size="20" />
              </div>
              <span class="content-title-span" style="">用户管理</span>
            </div>
            <div class="content-show" style="padding: 20px;overflow: hidden">
              <Menu mode="horizontal"  active-name="1">
                <MenuItem name="1" >
                  <Icon type="ios-paper" />
                  用户列表
                </MenuItem>
               <!-- <MenuItem name="2" @click.native="addTag">
                  <Icon type="ios-image" />
                  添加标签
                </MenuItem >-->
              </Menu>
              <!--内容区-->
              <div style="display: block;height: 600px;width: 100%;">
                <Card style="width:100%;min-height: 320px">
                  <template>
                    <Table border :columns="userTableHeader" :data="userTableData">
                      <template slot-scope="{ row, index }" slot="action">
                        <Button type="error" size="large" style="margin-right: 5px;width:80px;height:30px" @click="lockUser(index)">冻结</Button>
                      </template>
                      <template slot-scope="{ row, index }" slot="action1">
                        <Button type="primary" size="large" style="margin-right: 5px;width:80px;height:30px" @click="userDetail(index)">详情</Button>
                      </template>
                    </Table>
                  </template>
                </Card>
              </div>
              <div style="display: block;height: 600px;width: 100%;" v-show="this.tagmenu===1">
                <Card style="width:100%;min-height: 320px">
                  <template>
                    <Table border :columns="tagTableHeader" :data="tagTableData">
                      <template slot-scope="{ row, index }" slot="action">
                        <Button type="primary" size="large" style="margin-right: 5px;width:80px;height:30px" @click="deleteTag(index)">下载</Button>
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
    <div class="wrapper-footer">
      <nconfsys-footer></nconfsys-footer>
    </div>
  </div>
</template>

<script>
    import NconfsysHeader from "../components/NconfsysHeader";
    import NconfsysFooter from "../components/NconfsysFooter";
    export default {
        name: "admin-page",
        components:{
            NconfsysHeader,
            NconfsysFooter,
        },
        data(){
            return{
                tagmenu:0,
                menu:0,
                itemlist:[
                    {
                        nam:"1",
                        message:"标签管理"
                    },
                    {
                        nam:'2',
                        message:"用户管理"
                    },
                ],
                tagTableHeader: [
                    {
                        title: 'ID',
                        key: 'tagId'
                    },
                    {
                        title: '名称',
                        key: 'tagName',
                        width:180,

                    },
                    {
                        title: '相关描述',
                        key: 'tagDescription',
                        width:450,
                    },
                    {
                        title: '删除',
                        slot: 'action',
                        width: 110,
                        align: 'center'
                    }
                ],
                tagTableData:[
                    {
                        tagId:'0000001',
                        tagName:'计算机科学与',
                        tagDescription:'保函计算机科学与技术/软件工程',
                    },
                    {
                        tagId:'0000001',
                        tagName:'计算机科学与',
                        tagDescription:'保函计算机科学与技术/软件工程',
                    },
                ],

                userTableHeader: [
                    {
                        title: '用户名',
                        key: 'userName',
                        width:230,
                    },
                    {
                        title: '状态',
                        key: 'status'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '性别',
                        key: 'sex'
                    },
                    {
                        title: '邮箱',
                        key: 'email'
                    },
                    {
                        title: '冻结',
                        slot: 'action',
                        width: 100,
                        align: 'center'
                    },
                    {
                        title: '详情',
                        slot: 'action1',
                        width: 100,
                        align: 'center'
                    }
                ],
                userTableData:[
                    {
                        userName:'0000001',
                        status:'待完善',
                        name:'王兴泽',
                        sex:'男',
                        email:'2020-09-12'
                    },
                    {
                        userName:'0000001',
                        status:'待完善',
                        name:'王兴泽',
                        sex:'男',
                        email:'2020-09-12'
                    },
                ],
                tagForm:{
                    tagName:'',
                    tagDescription:'',
                },
                ruleValidate: {
                    tagName: [
                        { required: true, message: '标签名不可为空', trigger: 'blur' }
                    ],
                    tagDescription: [
                        { required: true, message: '标签说明不可为空', trigger: 'blur' },
                    ],
                },
            }
        },
        methods:{
            select(name){
                this.menu=name-1;
               /* this.commentmenu=0;
                this.readmenu=0;*/
            },
            tagList(){
                this.tagmenu=0;
            },
            addTag(){
                this.tagmenu=1;
            },
            deleteTag(){

            },
            lockUser(){

            },
            userDetail(){

            },
        },
    }
</script>

<style scoped>

</style>
