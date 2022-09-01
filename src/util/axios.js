import axios from 'axios';
import {Message} from 'element-ui';

//设置请求超时时间
axios.defaults.timeout = 100000;

axios.interceptors.request.use(config => {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
        
        return config
    }, error => {
        return Promise.reject(error)
    }
)
//响应拦截
axios.interceptors.response.use(response => {
    return response
}, error => {
    //对响应错误做点什么
    if (error.response) {
        
        switch (error.response.status) {
            case 404:
                Message({
                    type: 'error',
                    message: '数据未找到' 
                });
                break;
            case 400:
                console.log(40000);
                Message({
                    type: 'error',
                    message: '请求失败' 
                });
                break;    
            case 500:
                Message({
                    type: 'error',
                    message: '服务器错误' 
                });
                
                break;
            default:
                Message({
                    type: 'error',
                    message: '网络错误' 
                });                
        }
    }
    return Promise.reject(error)
});

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.response.data)
        })
    })
}

export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.response.data)
        })
    })
}


