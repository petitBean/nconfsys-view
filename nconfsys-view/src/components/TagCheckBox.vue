<template>
  <CheckboxGroup v-model="border">
    <Checkbox label="科学技术" border></Checkbox>
    <Checkbox label="苹果" border></Checkbox>
    <Checkbox label="西瓜" border></Checkbox>
    <Checkbox label="科学技术" border></Checkbox>
    <Checkbox label="科学技术" border></Checkbox>
    <Checkbox label="科学技术" border></Checkbox>
    <Checkbox label="科学技术" border></Checkbox>

  </CheckboxGroup>
</template>
<script>
    export default {
        name:'TagCheckBox',

        data () {
            return {
                border: ['苹果']
            }
        }
    }
</script>
