/**
 * Created by RadAsm on 17/2/16.
 */
"use strict";
import {Requests} from '../apis/Blogs';

const actions = {
    getBlogs({commit,dispatch}, pageNo){
        Requests.getBlogs(pageNo)
            .then((response)=> {
                console.log(response);
                commit('setCurrentBlogPageNo', response.number);
                commit('setBlogLastPage', response.last);
                commit('setBlogsData', response.content);
            })
            .catch('error');
    }
};

export {actions};