
  <template>
    <div>
      <Upload :headers="headObj" action="http://localhost:8671/nconf-gateway/api-conf-service/conf-service/file/upload">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
      </Upload>

      <button style="width:200px;height:50px;background-color: red" @click="cl">hhhhhhhh</button>
    </div>

  </template>
  <script>
      export default {
          name:'testPage',
          methods:{
              cl(){
                  alert(this.headObj.Authorization);
              }
          },
           data(){
               return{
                   headObj:{
                       Authorization: 'Bearer '+window.sessionStorage.getItem('token'),
                   }
               }
           }
      }
  </script>
