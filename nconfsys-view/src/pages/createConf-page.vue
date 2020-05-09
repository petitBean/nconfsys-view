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
                            <DatePicker type="datetimerange" v-model="formItem.dates" placeholder="选择时间" style="width: 300px"></DatePicker>
                          </Col>
                        </Row>
                      </FormItem>

                      <FormItem label="支持在线">
                        <RadioGroup v-model="formItem.isOnline">
                          <Radio label="支持">支持</Radio>
                          <Radio label="不支持">不支持</Radio>
                        </RadioGroup>
                      </FormItem>
                      <FormItem label="会议标签">
                        <CheckboxGroup v-model="formItem.tags">
                          <Checkbox  v-for="item in this.allTags" v-bind:label="item.tagName"></Checkbox>
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
                allTags:[],
                formItem: {
                    confName: '',
                    keyWords: '',
                    confTopic:'',
                    address:'',
                    dates:[],
                    isOnline: '',
                    tags: [],
                    userName:'',
                }
            }
        },
        mounted(){
            this.init();
        },
        methods:{
            init(){
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/tag/get_all_tags';
                let status=0;
                let times=0;
               // while (status!==200 && times<5){
                    this.$http.get(url).then((response)=>{
                        status=response.status;
                        this.allTags=response.data.data;
                        times++;
                    }).catch((error)=>{
                        if (error.response){
                            status=error.response.status;
                            times++;
                        }
                        else {
                            times++;
                        }
                    });
             //   }

            },
            submit(){
                this.formItem.userName=window.sessionStorage.getItem('username');
               // console.log(this.formItem);
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/conference/createconf';
                this.$http.post(url,this.formItem).then((response)=>{
                  console.log(response.data);
                  if(response.status===200){
                      console.log(response.data.data);
                      window.sessionStorage.setItem('confId',response.data.data.confId)
                      this.$router.push('/complete-conf-page');
                  }
                  else {
                      this.$Message.error("失败！系统异常！")
                  }
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
