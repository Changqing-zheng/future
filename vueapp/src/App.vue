<template>
  <div id="app">
    <CommonHeader></CommonHeader>
    <router-view class="content"/>
    <CommonFooter :menuList="menuList"></CommonFooter>
  </div>
</template>
<script>
    import CommonHeader from '@/components/CommonHeader.vue';
    import CommonFooter from '@/components/CommonFooter.vue';
    export default {
        data(){
          return {
              menuList:[{
                  name:'电影',
                  path:'/movie',
                  bgColor:'rgb(33, 150, 243)',
                  title:'movie'
              },{
                  name:'音乐',
                  path:'/music',
                  bgColor:'rgb(0, 150, 136)',
                  title:'music'
              },{
                  name:'书籍',
                  path:'/book',
                  bgColor:'rgb(121, 85, 72)',
                  title:'book'
              },{
                  name:'图片',
                  path:'/photo',
                  bgColor:'#3f51b5',
                  title:'photo'
              }]
          }
        },
        components:{
            CommonHeader,
            CommonFooter
        },
        created(){
            var path = this.$route.path;
            var menu = this.menuList.filter(elem=>{
                return elem.path == path;
            });
            this.$store.dispatch('changeBg',menu[0]);
        }
    }
</script>
<style lang="scss">
  .content{
    margin: 1rem 0;
  }
</style>
