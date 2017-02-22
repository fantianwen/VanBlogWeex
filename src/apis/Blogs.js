/**
 * Created by RadAsm on 17/2/16.
 */
import {fetch} from '../utils/fetch'

const getBlogDetailById = "/blogs/getBlogDetailById";
const saveBlog = "/blogs/insertOne";
const getBlogsByPage = "/blogs/getBlogsByPage";
const getCategories = "/category/getAllCategories";

const Requests = {
    getBlogs(pageNo) {
        return fetch(getBlogsByPage + "?pageNo=" + pageNo + "&pageSize=8");
    }
};

export {Requests};