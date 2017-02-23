/**
 * Created by RadAsm on 17/2/16.
 */
"use strict";
import {fetch} from '../utils/fetch'

const getBlogDetailById = "/blogs/getBlogDetailById";
const saveBlog = "/blogs/insertOne";
const getBlogsByPage = "/blogs/getBlogsByPage";
const getCategories = "/category/getAllCategories";

const Requests = {
    getBlogs(pageNo) {
        return fetch(getBlogsByPage + "?pageNo=" + pageNo + "&pageSize=8");
    },
    getBlogDetailById(blogId){
        return fetch(getBlogDetailById + "?id=" + blogId);
    }
};

export {Requests};