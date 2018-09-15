<template>
    <div>
        <h1>我是一个ComponentA</h1>
        <component-b :msg="msg"></component-b>
        <component-c @xx="fn"></component-c>
        {{msg}}
    </div>
</template>

<script>
    import ComponentB from '@/views/ComponentB.vue';
    import ComponentC from '@/views/ComponentC.vue';
    export default {
        data(){
          return{
              msg:0
          }
        },
        components:{
            ComponentB,
            ComponentC
        },
        methods:{
            fn(a){
                this.msg += a;
            }
        }
    }
</script>

<style scoped>

</style>