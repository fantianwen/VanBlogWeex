<template>
    <div>
        <img style="width:750; height:750;" src="blogImageUrl"></img>
        <div class="title">
            <text style="font-size:50; color: #ff0000">你好，image</text>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                blogImageUrl:'',
            }
        },
        created(){
           this.loadBlogData();
        },
        components:{
        },
        methods:{
            loadBlogData(){
                console('路由携带信息:'+this.$router.params.id);
            }
        }

    }

</script>

<style>

</style>
