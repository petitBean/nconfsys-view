<template>
  <!--会议信息管理员页面-->
    <div class="conf-manage-center" >
      <nconfsys-header></nconfsys-header>
      <div style="overflow: hidden;" >
        <div class="conf-content v-box-shadow" >
          <div class="left-menu " >
            <div class="menu-name color-primary font-title" >
              <div class="menu-span-icon">
                <Icon type="md-menu" size="22"/>
              </div>
              <div class="menu-span">
                <span>菜 单 栏</span>
              </div>
            </div>
            <div class="menu-list-pane">
              <menu-list v-bind:itemlist="itemlist"></menu-list>
            </div>
          </div>
          <div class="right-content-show border-left" style="">
            <div class="now-content-name content-title-pane" style="">
              <div class="content-title-icon">
                <Icon type="ios-navigate" size="20" />
              </div>
              <span class="content-title-span" style="">我加入的会议</span>
            </div>
            <div class="content-show" style="background-color: #f9fafc;padding: 20px">
              <action-table :table-header="tableHeader" :table-data="tableData" action-name="进入从管理"></action-table>
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

      </div>
      <nconfsys-footer></nconfsys-footer>
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
            return {
                itemlist:[
                    {
                        nam:'1',
                        message:"会议列表"
                    },
                    {
                        nam:'2',
                        message:"我的通知"
                    },
                    {
                        nam:"3",
                        message:"会议公告"
                    },
                    {
                        nam:"4",
                        message:"会议信息管理"
                    },
                ],
                tableHeader: [
                    {
                        title: '会议名称',
                        slot: 'confName'
                    },
                    {
                        title: '会议ID',
                        key: 'confId'
                    },
                    {
                        title: '举办时间',
                        key: 'startTime'
                    },
                    {
                        title: '举办地点',
                        key: 'address'
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
                        name: 'John Brown',
                        startTime:'2019-1-12',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        startTime:'2019-1-12',
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        startTime:'2019-1-12',
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        startTime:'2019-1-1',
                    }
                ]
            }
        },
        methods:{
            cli1(){
                console.log('nnnn');
            },
            _click(){
                console.log("nnnnnnn");
            },
        }

    }
</script>

<style scoped>
  html, body{ margin:0; height:100%; }
</style>
