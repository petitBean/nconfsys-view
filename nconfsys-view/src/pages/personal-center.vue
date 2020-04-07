<template>
  <!--个人中兴-->
  <div class="personal-center" style="height: auto">
    <nconfsys-header></nconfsys-header>
    <div class="conf-content v-box-shadow" style="">
      <div class="">面包屑</div>
      <div class="left-menu " style=";">
        <div class="menu-name color-primary font-title" style="">
          <div class="menu-span-icon">
            <Icon type="md-menu" size="22"/>
          </div>
          <div class="menu-span" >
            <span>菜 单 栏</span>
          </div>
        </div>
        <div class="menu-list-pane" style="background-color:white">
          <menu-list v-bind:itemlist="itemlist"></menu-list>
        </div>
      </div>
      <div class="right-content-show border-left " style="">
        <div class="now-content-name content-title-pane" style="">
          <div style="float: left;padding: 2px;margin-left: 5px;margin-right: 5px"><Icon type="ios-navigate" size="20" /></div>
          <span class="content-title-span" style="">我加入的会议</span>
        </div>
        <div class="content-show" style="background-color: #f9fafc;padding: 20px">
           <action-table :table-header="tableHeader"  :table-data="tableData"  :action-name="actionName"></action-table>
        </div>

        <div class="now-content-name content-title-pane" style="">
          <div class="content-title-icon">
            <Icon type="ios-navigate" size="20" />
          </div>
          <span class="content-title-span" style="">我的通知</span>
        </div>
        <div class="content-show" style="background-color: #f9fafc;padding: 20px">
          <List>
            <ListItem>
              <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="This is title" description="This is description, this is description." />
              <template slot="action">
                <li>
                  <a href="">标记为已读</a>
                </li>
                <li>
                  <a href="">More</a>
                </li>
              </template>
            </ListItem>
            <ListItem>
              <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="This is title" description="This is description, this is description." />
              <template slot="action">
                <li>
                  <a href="" class="color-primary">标记为已读</a>
                </li>
                <li>
                  <a href="">More</a>
                </li>
              </template>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
   <nconfsys-footer></nconfsys-footer>
  </div>

</template>

<script>
  import NconfsysHeader from "../components/NconfsysHeader";
  //import Table from "../components/Table";
  import ActionTable from "../components/ActionTable";
  import NconfsysFooter from "../components/NconfsysFooter";
  import MenuList from "../components/MenuList";

    export default {
        name: "personal-center",
        components:{
            NconfsysHeader,
            NconfsysFooter,
            MenuList,
            ActionTable,

        },
        data () {
            return{
                actionName:'会议详情',
                itemlist:[
                    {
                        nam:'1',
                        message:"我加入的会议"
                    },
                    {
                        nam:'2',
                        message:"我收藏的会议"
                    },
                    {
                        nam:"3",
                        message:"申请加入会议"
                    },
                    {
                        nam:"4",
                        message:"完善个人信息"
                    },
                    {
                        nam:"5",
                        message:"创建会议"
                    },
                    {
                        nam:"6",
                        message:"我的通知"
                    },
                    {
                        nam:"7",
                        message:"修改密码"
                    },
                ],
                tableHeader: [
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
                        key: 'introduce'
                    },
                    {
                        title: '会议状态',
                        key: 'confStatus'
                    },
                    {
                        title: '举办时间',
                        key: 'startTime'
                    },
                    {
                        title: '申请状态',
                        key: 'reqStatus'
                    },
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                tableData: [
                    {
                        confName: '第一届学学术会议',
                        confId: '133334784728',
                        confStatus: '征文中',
                        reqStatus: '已通过',
                        startTime: '2020-12-30'
                    },
                    {
                        confName: '第一届学学术会议',
                        confId: '133334784728',
                        confStatus: '征文中',
                        reqStatus: '已通过',
                        startTime: '2020-12-30'
                    },
                    {
                        confName: '第一届学学术会议',
                        confId: '133334784728',
                        confStatus: '征文中',
                        reqStatus: '已通过',
                        startTime: '2020-12-30'
                    },
                    {
                        confName: '第一届学学术会议',
                        confId: '133334784728',
                        confStatus: '征文中',
                        reqStatus: '已通过',
                        startTime: '2020-12-30'
                    },
                ]
            }
        }
        ,
        methods:{
            _createConf(){
                console.log("hhhhh")
            },
            getname(value){
                console.log("xx");
            }
        },


    }
</script>

<style scoped>

</style>
