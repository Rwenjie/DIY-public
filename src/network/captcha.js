/**
 * @FileDescription: 获取手机验证码
 * @Author: Rwenjie
 * @Date: 2021/3/10
 * @LastEditors: Modified by : Rwenjie
 * @LastEditTime: Modified time : 2021/3/10
 **/

import {request} from "./request";

// 发送验证码
export function getCode(phone){
    return request({
        url: '/captcha/sent',
        params: {
            phone
        },
    })
}

// 验证验证码
export function getCaptcha(mobile, smsCode){
    return request({
        url: '/login/sms',
        params:{
            mobile,
            smsCode
        }
    })
}