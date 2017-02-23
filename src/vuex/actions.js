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
            .catch(()=> {
                console.log('error when getBlogs');
            });
    },
    getBlogDetailById({commit,dispatch}, blogId){
        Requests.getBlogDetailById(blogId)
            .then((response)=> {
                console.log(response);
                commit('setBlogDetail',response.responseData);
            })
            .catch(()=> {
                console.log('error when getBlogDetailById');
            });
    }
};

export {actions};