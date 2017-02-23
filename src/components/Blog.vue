<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <scroller :show-scrollbar="false">
        <div class="blogDetail-wrapper">
            <img class="blogImage"
                 v-bind:src="blogImageUrl"
                 resize="cover"/>
            <div class="blog-summary">
                <div class="blogCategoryLogo">
                    <img class="blogCategoryLogoImage"
                         v-bind:src="blogCategoryLogoUrl"
                         resize="contain"
                    />
                </div>

                <div class="blogSummaryWrapper">
                    <text class="normalText" :value="blogCategory"/>
                    <text class="normalText" :value="blogCreatedTime"/>
                </div>
            </div>
            <web ref="webview"
                 :src="blogDetailUrl"
                 class="webview"/>
        </div>
    </scroller>
</template>
<style>
.blogDetail-wrapper{
    display:flex;
}
.top{
    background-color:orange;
    flex-direction:row;
    justify-content:space-between;
}
.blogImage{
    height:350px;
}
.blog-summary{
    height:64px;
    display:flex;
    padding:8px;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
}
.blogCategoryLogo{
    width:48px;
    height:48px;
    margin-left:16px;
}
.blogSummaryWrapper{
    display:flex;
    height:48px;
    flex-direction:column;
    margin-left:16px;
}
.blogCategory{
    height:20px;
}
.blogCreatedTime{
    height:20px;
}
.blogCategoryLogoImage{
    width:48px;
    height:48px;
}
.normalText{
    flex:1;
    font-size:16px;
}
.webview{
    height:2000px;
}

</style>
<script>
    import {BlogUtils} from '../utils/BlogUtils';
    import {TimeUtils} from '../utils/TimeUtils';
    export default{
        data(){
            return{
            }
        },
        components:{
        },
        created(){
            this.loadBlogData();
        },
        methods:{
            loadBlogData(){
                let blogId = this.$route.params.id;
                this.$store.dispatch('getBlogDetailById',blogId);
            },
        },
        computed:{
            blogImageUrl(){
                return this.$store.getters.getBlogDetail.image_url;
            },
            blogCategoryLogoUrl(){
                return BlogUtils.parseBlogCategory(this.$store.getters.getBlogDetail);
            },
            blogCategory(){
                let blog = this.$store.getters.getBlogDetail;
                return blog.category;
            },
            blogCreatedTime(){
                let blog = this.$store.getters.getBlogDetail;
                return TimeUtils.formatTimeYMDHM(blog.created_time);
            },
            blogDetailUrl(){
                    return 'http://olel07toq.bkt.clouddn.com/index.html#/blogs/weex/'+this.$route.params.id;
            }
        }
    }

</script>
