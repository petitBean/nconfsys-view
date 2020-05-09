<template>
  <div>
    <div style="height: auto">
      <div class="">
        <div class="header-pane">
          <nconfsys-header></nconfsys-header>
        </div>
        <div class="content-container" style="width:100%;">
          <div class="layout">
            <Layout>
              <Content :style="{padding: '0 50px'}">
                <Card style="min-height: 200px;padding-left: 40px;padding-right: 50px">
                  <p slot="title" class="card-title">完善会议信息</p>
                  <Form :model="confDetail" :label-width="80">
                    <FormItem label="会议议题">
                      <Input v-model="confDetail.confSubject"  maxlength="30" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="会期">
                      <Input v-model="confDetail.confSession"  type="textarea" maxlength="200" :autosize="{minRows: 3,maxRows: 15}" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="联系方式">
                      <Input v-model="confDetail.contect"  type="textarea" maxlength="200" :autosize="{minRows: 3,maxRows: 15}" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="会议简介">
                      <Input v-model="confDetail.confIntroduce" type="textarea"  maxlength="1000" :autosize="{minRows: 3,maxRows: 15}" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="主办方介绍">
                      <Input v-model="confDetail.confOrgnizeIntroduce" type="textarea"  maxlength="1000" :autosize="{minRows: 3,maxRows: 15}" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="重要组织">
                      <Input v-model="confDetail.groupIntroduce" type="textarea" maxlength="1000" :autosize="{minRows: 3,maxRows: 15}" placeholder=""></Input>
                    </FormItem>

                    <FormItem label="计划人数">
                      <Input v-model="confDetail.peopleNum" size="small" type="number"  placeholder=""></Input>
                    </FormItem>
                    <FormItem label="征稿时间">
                      <Row  style="width: 600px">
                        <Col span="12">
                          <DatePicker type="datetimerange" v-model="confDetail.paperCollectionDate" placeholder="" style="width: 300px"></DatePicker>
                        </Col>
                      </Row>
                    </FormItem>
                    <FormItem label="缴费时间">
                      <Row  style="width: 600px">
                        <Col span="12">
                          <DatePicker type="datetimerange" v-model="confDetail.payDate" placeholder="" style="width: 300px"></DatePicker>
                        </Col>
                      </Row>
                    </FormItem>
                    <FormItem label="上传海报">
                      <Upload
                        :headers="headerObj"
                        :on-success=" handleSuccess"
                        :on-error="handleFormatError"
                        :data="fileParam"
                        :max-size="8192"
                        action="http://localhost:8671/nconf-gateway/api-conf-service/conf-service/file/upload">
                        <Button icon="ios-cloud-upload-outline">上传图片</Button>
                        <div slot="tip" class="el-upload__tip">不超过8Mb</div>
                      </Upload>
                    </FormItem>
                    <FormItem>
                      <Button type="primary" @click="submit" style="width: 100px">提    交 </Button>
                      <Button style="margin-left: 15px;width: 100px" @click="cancel">取   消</Button>
                    </FormItem>
                  </Form>
                </Card>
              </Content>
            </Layout>
          </div>
        </div>
        <div class="footer-pane">
          <nconfsys-footer></nconfsys-footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import NconfsysHeader from "../components/NconfsysHeader";
    import NconfsysFooter from "../components/NconfsysFooter";
    export default {
        name:'completedConfInfo-page',
        components:{
            NconfsysFooter,
            NconfsysHeader,
        },
        data () {
            return {
                fileParam:{
                    userName:'',
                    confId:'',
                },
                confDetail: {
                    confSession: '',
                    confSubject: '',
                    bigPosterUrl: '',
                    contect: '',
                    peopleNum: '',
                    paperCollectionDate: [],
                    payDate: [],
                    groupIntroduce: '',
                    confOrgnizeIntroduce:'',
                    confIntroduce:'',
                    confId:'',

                },
                headerObj: {
                    Authorization: 'Bearer ' + window.sessionStorage.getItem('token'),
                },
            }
        },
        mounted(){
            this.confId=window.sessionStorage.getItem('confId');
        },
        methods:{
            submit(){
                this.confDetail.confId=window.sessionStorage.getItem('confId');
                let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/conferencedetail/create_one_detail';
                this.$http.post(url,this.confDetail).then((response)=>{
                       if (response.data.code===200){
                           this.$Message.success("成功！");
                           window.sessionStorage.setItem('confId',this.confDetail.confId);
                           this.$router.push('/conf-detail-page');
                       }
                       else {
                           this.$Message.error("网络错误！请重试！")
                       }
                });
            },
            handleSuccess(response, file) {
                console.log(response);
                if(response.code===200){
                    this.$Message.success("文件上传成功！");
                    this.confDetail.bigPosterUrl=response.data;
                    return;
                }
                else {
                    this.$Message.error("文件上传失败！请重试！");
                }
            },
            handleFormatError (file) {
                console.log("失败");
                this.$Message.error("文件上传失败！请重试！");
            },
            cancel(){

            },
        },
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


