<template>
    <div class="header" :style="{background:bgColor}">
        <span class="tip">首页</span>
        <h1 class="title">{{title}}</h1>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "CommonHeader",
        computed:mapState(['bgColor','title']),
    }
</script>

<style lang="scss">
    .header{
        height: 1rem;
        width: 100%;
        background: rgb(33 , 150 , 243);
        line-height: 1rem;
        position: fixed;
        top:0;
    }
    .tip{
        font-size: 16px;
        color: #fff;
    }
    .title{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
        color: #fff;
    }
</style>