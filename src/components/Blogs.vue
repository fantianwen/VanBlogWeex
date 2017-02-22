<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <list class='blog-list'>

        <refresh class="loading" @refresh="onrefresh" :display="shouldRefresh ? 'show' : 'hide'">
            <text class="indicator">Refreshing ...</text>
        </refresh>

        <cell class="blog-cell" v-for="blog in blogs">
            <div>
                <div class="type-wrapper">
                    <img class="category_image"
                         v-bind:src="blogCategoryImage(blog)"
                         resize="contain"/>
                    <!--<text class="blog_type">{{blog.category}}</text>-->
                </div>
                <img class="blog_image"
                     v-bind:src="blogImageUrl(blog)"
                     resize="contain"/>
                <div class="title-wrapper">
                    <text class="blog_title">{{blog.name}}</text>
                </div>
                <div class="summary-wrapper">
                    <text class="blog_summary">{{blog.summary}}</text>
                </div>
            </div>
        </cell>

        <loading class="loading" @loading="onloading" :display="showLoading">
            <text class="indicator">Loading ...</text>
        </loading>
    </list>

</template>

<script>
    import {TimeUtils} from '../utils/TimeUtils';
    import {BlogUtils} from '../utils/BlogUtils';
    import {Requests} from '../apis/Blogs';
    const modal = weex.requireModule('modal')
    export default{
        data(){
            return{
                shouldRefresh:false,
                loadMore:false,
                showLoading:'hide',
                blogs:[],
                pageNo:0
            }
        },
        components:{
        },
        methods:{
            loadDate(){
                Requests.getBlogs(this.pageNo)
                    .then((response)=> {
                        console.log(response);
                        this.showLoading = 'hide';
                        this.shouldRefresh = false;
                        this.pageNo = this.pageNo + 1;
                        let isFirstPage = response.first;
                        let isLastPage = response.last;
                        if(isFirstPage){
                            this.blogs = response.content;
                        }else{
                            this.blogs = this.blogs.concat(response.content);
                        }
                    })
                    .catch('error');
            },
            blogCreatedTime(createTime){
                return TimeUtils.formatTimeYMDHM(createTime);
            },
            currentBlogPageNo(){
                return this.$store.getters.getCurrentBlogPageNo+1;
            },
            blogImageUrl(blog){
                return blog.image_url;
            },
            blogCategoryImage(blog){
                return BlogUtils.parseBlogCategory(blog);
            },
            onloading(event){
                modal.toast({ message: 'loading', duration: 1 });
                this.shouldRefresh = false;
                this.showLoading = 'show';
                this.loadDate();
            },
            onrefresh(event){
                modal.toast({ message: 'onRefresh', duration: 1 });
                this.shouldRefresh = true;
                this.pageNo = 0;
                this.loadDate();
            }
        },
        created(){
           this.loadDate();
        },
    }


</script>

<style scoped>
.blog-list{
}
.blog-cell{
    padding-top:16px;
    padding-bottom:16px;
    background-color:#efeff4;
    margin-bottom:16px;
}
.blog_image{
    flex:1;
    height:400px;
    margin-left:16px;
    margin-right:16px;
}

.title-wrapper{
    margin-top:8px;
    margin-left:16px;
}

.blog_title{
    font-size:48px;
    color: #666666;
}

.summary-wrapper{
    margin-left:22px;
}

.blog_summary{
    font-size:18px;
    color: #666666;
}
.type-wrapper{
    margin-left:16px;
    margin-bottom:32px;
}
.blog_type{
    text-align:end;
    margin-right:16px;
    font-size:18px;
}
.category_image{
    width:140px;
    height:20px;
    position:absolute;
    right:16px;
}
.loading{
    display: flex;
    height:48px;
    align-items: center;
    justify-content: center;
}
.indicator{
    font-size:16px;
    color:orange;
}


</style>