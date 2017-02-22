/**
 * Created by RadAsm on 17/2/16.
 */
"use strict";
const getters = {
    getBlogsData(state){
        return state.blogs.blogsData;
    },
    getCurrentBlogPageNo(state){
        return state.blogs.currentPageNo;
    }
};

export {getters};