<template>
    <div>
      <div style="height: auto">
        <div class="">
          <div class="header-pane">
            <nconfsys-header></nconfsys-header>
          </div>
          <div class="content-container" >
            <div class="layout">
              <Layout>
                <Content :style="{padding: '0 50px'}">
                  <Card style="min-height: 200px;padding-right: 40px">
                    <p slot="title" class="card-title">创建会议</p>
                    <Form :model="formItem" :label-width="80">
                      <FormItem label="会议名称">
                        <Input v-model="formItem.confName" placeholder="输入会议名称"></Input>
                      </FormItem>
                      <FormItem label="会议主题">
                        <Input v-model="formItem.confTopic" placeholder=""></Input>
                      </FormItem>
                      <FormItem label="举办地点">
                        <Input v-model="formItem.address" placeholder=""></Input>
                      </FormItem>
                      <FormItem label="关键字">
                        <Input v-model="formItem.keyWords" placeholder=""></Input>
                      </FormItem>
                      <FormItem label="起始时间">
                        <Row  style="width: 600px">
                          <Col span="12">
                            <DatePicker type="datetimerange" v-model="formItem.dates" placeholder="Select date and time" style="width: 300px"></DatePicker>
                          </Col>
                        </Row>
                      </FormItem>

                      <FormItem label="支持在线">
                        <RadioGroup v-model="formItem.isOnline">
                          <Radio label="male">支持</Radio>
                          <Radio label="female">不支持</Radio>
                        </RadioGroup>
                      </FormItem>
                      <FormItem label="会议标签">
                        <CheckboxGroup v-model="formItem.tags">
                          <Checkbox label="计算机"></Checkbox>
                          <Checkbox label="生物学"></Checkbox>
                          <Checkbox label="数学"></Checkbox>
                          <Checkbox label="人工智能"></Checkbox>
                        </CheckboxGroup>
                      </FormItem>
                      <FormItem>
                        <Button type="primary" @click="submit" style="width: 100px">创   建</Button>
                        <Button style="margin-left: 15px;width: 100px" @click="cancel">取   消</Button>
                      </FormItem>
                    </Form>
                  </Card>
                </Content>
              </Layout>
            </div>
          </div>
          <div clas="footer-pane">
            <nconfsys-footer></nconfsys-footer>
          </div>
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
        name: "createConf-page",
        components:{
            NconfsysFooter,
            NconfsysHeader,
            MenuList,
            ConNav,
            SearchBox,
        },
        data () {
            return {
                formItem: {
                    confName: '',
                    keyWords: '',
                    confTopic:'',
                    address:'',
                    dates:['',''],
                    isOnline: '',
                    tags: ['', ''],
                    userId:'',
                }
            }
        },
        methods:{
            submit(){
                this.f.userId=window.sessionStorage.getItem('username');
                console.log(this.formItem);
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/conference/createconf';
                this.$http.post(url,this.formItem).then((response)=>{
                  console.log(response);
                });
            },
            cancel(){

            },
        }
    }
</script>

<style scoped>
  .card-title{
    font-weight: bolder;
    font-size: 20px;
    text-align: center;
    color: #17233d;
  }
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
