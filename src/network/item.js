/**
 * @FileDescription:
 * @Author: Rwenjie
 * @Date: 2021/5/3
 * @LastEditors: Modified by : Rwenjie
 * @LastEditTime: Modified time : 2021/5/3
 **/

import {request} from "./request";

//商品分类列表
export function categoryList(){
    return request({
        url: '/category/listing',
    })
}

//发布商品
export function submitGoods(goods) {
    return request({
        url: '/goods/submit',
        params: {
            goods
        }
    })
}