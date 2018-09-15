<template>
        <ul class="footer" :style="{background:bgColor}">
            <li v-for="menu in menuList" @click="changeBg(menu)">
                <router-link :to="menu.path">{{menu.name}}</router-link>
            </li>
        </ul>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        props:['menuList'],
        name: "CommonFooter",
        methods:{
            changeBg(menu){
                this.$store.dispatch('changeBg',menu);
            }
        },
        computed:mapState(['bgColor'])
    }
</script>

<style lang="scss">
    .footer{
        height: 1rem;
        background: rgb(33 , 150 , 243);
        line-height: 1rem;
        position: fixed;
        width: 100%;
        bottom: 0;
        display: flex;
        text-align: center;
        li{
            flex-grow: 1;
        };
        a{
            color:#ccc;
            outline: none;
            &.router-link-exact-active{
                color: #fff;
            }
        }
    }
</style>