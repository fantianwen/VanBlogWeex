import * as APIS_BLOGS from '../apis/Blogs'

const stream = weex.requireModule('stream')
const baseURL = "http://112.74.32.29:8082";

export function fetch(path) {
    return new Promise((resolve, reject) => {
        stream.fetch({
            method: 'GET',
            url: `${baseURL}/${path}`,
            type: 'json'
        }, (response) => {
            if (response.status == 200) {
                resolve(response.data)
            }
            else {
                reject(response)
            }
        }, () => {
        })
    })
}

