<template>
  <Table border :columns="tableHeader" :data="tableData">
    <template slot-scope="{ row }" slot="confName">
      <strong>{{ row.name }}</strong>
    </template>
    <template slot-scope="{ row, index }" slot="action">
      <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">{{actionName}}</Button>
     <!-- <Button type="error" size="small" @click="remove(index)">Delete</Button>-->
    </template>
  </Table>
</template>
<script>
    export default {
        name:'ActionTable',
        props:["tableData","tableHeader","actionName"],
        data () {
            return {

            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>
