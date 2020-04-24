<template>
  <!--秘书处-->
   <div style="height: auto">
    <div class="">
      <div class="header-pane">
        <nconfsys-header></nconfsys-header>
      </div>
      <div class="content-container" >
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
              <menu-list v-bind:itemlist="itemlist"></menu-list>
            </div>
        </div>

      </div>
        <div class="right-pane">
          <div style="">
            <div class="right-content-show border-left" >
              <div class="notice">
                <div class="now-content-name content-title-pane">
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

              <div class="announce">
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
              <div class="documents" style="overflow: hidden">
                <div class="now-content-name content-title-pane" style="">
                  <div class="content-title-icon">
                    <Icon type="ios-navigate" size="20" />
                  </div>
                  <span class="content-title-span" style="">资料中心</span>
                </div>
                <div class="content-show" style="padding: 20px;overflow: hidden">
                  <Menu mode="horizontal" :theme="theme1" active-name="1">
                    <MenuItem name="1">
                      <Icon type="ios-paper" />
                      文档
                    </MenuItem>
                    <MenuItem name="2">
                      <Icon type="ios-image" />
                      图片
                    </MenuItem>
                    <MenuItem name="4">
                      <Icon type="logo-youtube" />
                      视频
                    </MenuItem>
                    <MenuItem name="4">
                      <Icon type="md-menu" />
                      其他
                    </MenuItem>
                    <div style="float: right;margin-left: 20px;margin-right: 5px">
                      <Upload
                        multiple action="//jsonplaceholder.typicode.com/posts/">
                        <Button icon="ios-cloud-upload-outline">上传文件</Button>
                      </Upload>
                    </div>
                    <div style="float:right;margin-left: 20px;">
                      <search-box :placeholder="searchPlaceholder"></search-box>
                    </div>
                  </Menu>
                  <!--内容区-->
                  <div style="display: block;height: 600px;width: 100%;background-color: red">
                    分为文档等
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
      <div clas="footer-pane">
        <nconfsys-footer></nconfsys-footer>
      </div>
     </div>
   </div>
</template>

<script>
  import NconfsysHeader from "../components/NconfsysHeader";
  import NconfsysFooter from "../components/NconfsysFooter";
  import MenuList from "../components/MenuList";
  import SearchBox from "../components/SearchBox";
  import ConNav from "../components/ConNav"
    export default {
        name: "secretary-page",
        components:{
            NconfsysFooter,
            NconfsysHeader,
            MenuList,
            ConNav,
            SearchBox,
        },
        data(){
            return{
                searchPlaceholder:'名称/关键字..',
                itemlist:[
                    {
                        nam:'1',
                        message:"我的通知"
                    },
                    {
                        nam:'2',
                        message:"会议公告"
                    },
                    {
                        nam:"3",
                        message:"资料中心"
                    },
                    {
                        nam:"4",
                        message:"工作组管理"
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
    }
</script>

<style scoped>

</style>
