<template>
  <div class="pdf" v-show="fileType === 'pdf'">
    <p class="arrow">
      <ButtonGroup :size="buttonSize" style="padding-right: 20px;padding-left:10px ">
        <Button :size="buttonSize" type="default" :disabled="preIsDisable" @click="changePdfPage(0)" >
          <Icon type="ios-arrow-back" />
          上一页
        </Button>
        <Button :size="buttonSize" type="default" :disabled="nextIsDisable" @click="changePdfPage(1)">
          下一页
          <Icon type="ios-arrow-forward" />
        </Button>
      </ButtonGroup>
     第 {{currentPage}}页 /共{{pageCount}}页
      <Button style="display: block;float: right;margin-bottom: 3px;margin-right: 20px" type="primary" size="small">返回</Button>
    </p>
    <pdf
      :src="src"
    :page="currentPage"
    @num-pages="pageCount=$event"
    @page-loaded="currentPage=$event"
    @loaded="loadPdfHandler">
    </pdf>
  </div>
</template>
<script>
    import pdf from 'vue-pdf'
    export default {
        name: 'testpage',
        components: {
            pdf
        },
        data() {
            return {
                pdfUrl: '../../static/ppp.pdf',
                buttonSize: 'small',
                currentPage: 0, // pdf文件页码
                pageCount: 0, // pdf文件总页数
                fileType: 'pdf', // 文件类型
                src:'../../static/ppp.pdf',
                //src: 'http://localhost:8671/nconf-gateway/api-conf-service/conf-service/doc/f123884b-fff5-4521-a143-95f1a3797760.pdf', // pdf文件地址
            }
        },
        computed:{
            nextIsDisable:()=>{
               return this.currentPage !== this.pageCount;
            },
            preIsDisable:()=>{
                if (this.currentPage===3||this.currentPage===0){
                    return true;
                }
                else {
                    return false;
                }

            }

        },
        created() {
            // 有时PDF文件地址会出现跨域的情况,这里最好处理一下
            this.src = pdf.createLoadingTask(this.src)
        },
        methods:{
            // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
            changePdfPage (val) {
                // console.log(val)
                if (val === 0 && this.currentPage > 1) {
                    this.currentPage--
                    // console.log(this.currentPage)
                }
                if (val === 1 && this.currentPage < this.pageCount) {
                    this.currentPage++;
                    // console.log(this.currentPage)
                }
            },
            // pdf加载时
            loadPdfHandler (e) {
                this.currentPage = 1 // 加载的时候先加载第一页
            }
        }
    }
</script>
