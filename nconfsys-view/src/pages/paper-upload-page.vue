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
                  <p slot="title" class="card-title">提交论文</p>

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
    export default {
        name: "paper-upload-page"
    }
</script>

<style scoped>

</style>
