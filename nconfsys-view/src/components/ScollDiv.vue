<template>
  <Scroll :on-reach-top="handleReachTop" height="500" >
    <Card dis-hover v-for="(item, index) in list2" :key="index" style="margin: 32px 0">
      Content {{ item }}
    </Card>
  </Scroll>
</template>
<script>
    export default {
        name:'ScollDiv',
        data () {
            return {
                list2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        methods: {
            handleReachTop () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const first = this.list2[0];
                        for (let i = 1; i < 11; i++) {
                            this.list2.unshift(first - i);
                        }
                        resolve();
                    }, 2000);
                });
            }
        }
    }
</script>
