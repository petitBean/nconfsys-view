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
                  <MenuItem name="5">
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
            <!--征稿-->
            <div class="solicit">
              <div class="now-content-name content-title-pane" style="">
                <div class="content-title-icon">
                  <Icon type="ios-navigate" size="20" />
                </div>
                <span class="content-title-span" style="">会议征稿</span>
              </div>
              <div class="content-show" style="padding: 20px;overflow: hidden">
                <Menu mode="horizontal" :theme="theme1" active-name="1">
                  <MenuItem name="1">
                    <Icon type="ios-cloud-upload" />
                    提交论文
                  </MenuItem>
                  <MenuItem name="5">
                    <Icon type="md-menu" />
                    征稿列表
                  </MenuItem>
                  <MenuItem name="2">
                    <Icon type="md-help-circle" />
                    论文要求
                  </MenuItem>

                  <div style="float: right;margin-left: 20px;margin-right: 5px">
                    <Upload
                      multiple action="//jsonplaceholder.typicode.com/posts/">
                      <Button icon="ios-cloud-upload-outline">提交论文</Button>
                    </Upload>
                  </div>
                  <div style="float:right;margin-left: 20px;">
                    <search-box :placeholder="searchPaperPlaceholder"></search-box>
                  </div>
                </Menu>
                <!--内容区-->
                <div style="display: block;height: 600px;width: 100%;background-color: red">

                </div>
              </div>
            </div>
           <!-- 评阅管理-->
            <div class="paperReview">
              <div class="now-content-name content-title-pane" style="">
                <div class="content-title-icon">
                  <Icon type="ios-navigate" size="20" />
                </div>
                <span class="content-title-span" style="">论文评阅</span>
              </div>
              <div class="content-show" style="padding: 20px;overflow: hidden">
                <Menu mode="horizontal" :theme="theme1" active-name="1">
                  <MenuItem name="1">
                    <Icon type="ios-list" />
                    论文列表
                  </MenuItem>
                  <MenuItem name="5">
                    <Icon type="ios-list" />
                    专家列表
                  </MenuItem>
                  <MenuItem name="2">
                    <Icon type="ios-at" />
                    分配评阅专家
                  </MenuItem>
                  <MenuItem name="3">
                    <Icon type="ios-list" />
                    论文评阅结果
                  </MenuItem>
                  <div style="float:right;margin-right: 20px;">
                    <search-box :placeholder="searchPaperPlaceholder"></search-box>
                  </div>
                </Menu>
                <!--内容区-->
                <div style="display: block;height: 600px;width: 100%;background-color: red">

                </div>
              </div>
            </div>
            <div class="professorManag">
              <div class="now-content-name content-title-pane" style="">
                <div class="content-title-icon">
                  <Icon type="ios-navigate" size="20" />
                </div>
                <span class="content-title-span" style="">专家管理</span>
              </div>
              <div class="content-show" style="padding: 20px;overflow: hidden">
                <Menu mode="horizontal" :theme="theme1" active-name="1">
                  <MenuItem name="1">
                    <Icon type="ios-list" />
                    专家列表
                  </MenuItem>
                  <MenuItem name="2">
                    <Icon type="md-person-add" />
                    新增专家
                  </MenuItem>

                  <div style="float:right;margin-right: 20px;">
                    <search-box :placeholder="professorManagePlaceholder"></search-box>
                  </div>
                </Menu>
                <!--内容区-->
                <div style="display: block;height: 600px;width: 100%;background-color: red">

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
  import Upload from "../components/Upload";
    export default {
        name: "paper-manage-center",
        components:{
            NconfsysFooter,
            NconfsysHeader,
            MenuList,
            SearchBox,
        },
        data(){
            return{
                theme1:'light',
                searchPaperPlaceholder:'搜索paper: ID/论文名称/作者名称',
                professorManagePlaceholder:'专家ID/姓名',
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
                        message:"会议征稿"
                    },
                    {
                        nam:"5",
                        message:"评阅管理"
                    },
                    {
                        nam:"6",
                        message:"专家管理"
                    },

                ],
            }
        }
    }
</script>

<style scoped>

</style>
