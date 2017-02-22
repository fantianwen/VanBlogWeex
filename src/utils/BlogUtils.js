/**
 * Created by RadAsm on 17/2/22.
 */
"use strict";
const BlogUtils = {
    parseBlogCategory(blog){
        let category = blog.category;
        let categoryImageUrl;
        switch (category) {
            case 'android':
                categoryImageUrl = 'http://o7zh7nhn0.bkt.clouddn.com/android_logo.png';
                break;
            case 'weex':
                categoryImageUrl = 'http://www.weex.help/public/images/weex.png';
                break;
            case 'python':
                categoryImageUrl = 'http://o7zh7nhn0.bkt.clouddn.com/python_logo.png';
                break;
            case 'git':
                categoryImageUrl = 'https://git-scm.com/images/logo@2x.png';
                break;
            case 'gradle':
                categoryImageUrl = 'http://o7zh7nhn0.bkt.clouddn.com/gradle-logo.png';
                break;
            case 'React-Native':
                categoryImageUrl = 'http://o7zh7nhn0.bkt.clouddn.com/reactlogo.png';
                break;
            default:
                categoryImageUrl = "";
                break;
        }
        return categoryImageUrl;
    }
};

export {BlogUtils};
