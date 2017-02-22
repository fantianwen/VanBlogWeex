/**
 * Created by RadAsm on 17/2/16.
 */
"use strict";
const mutations = {
    setBlogsData(state, blogsData){
        if (state.blogs.currentPageNo === 0) {
            state.blogs.blogsData = blogsData;
        } else {
            state.blogs.blogsData = state.blogs.blogsData.concat(blogsData);
        }
    },
    setCurrentBlogPageNo(state, currentBlogPageNo){
        state.blogs.currentPageNo = currentBlogPageNo;
    },
    setBlogLastPage(state, blogLastPage){
        state.blogs.isLastPage = blogLastPage;
    }

};

export {mutations};