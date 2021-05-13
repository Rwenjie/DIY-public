<!--
 * @FileDescription: TODO
 * @Author: Rwenjie
 * @Date: 2021/5/13
 * @LastEditors: Modified by : Rwenjie
 * @LastEditTime: Modified time : 2021/5/13
 -->

<template>
    <div id="goods-detail" style="margin: 0 10px">
        <div style="text-align: left; margin:10px 20px 5px 20px">
            <span v-if="starStatus">
                <v-btn icon color="red" @click="cancelLike">
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <span style="margin-top: 5px">199人收藏</span>
            </span>
            <span v-else>
                <v-btn icon color="red" @click="giveLike">
                    <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
                <span>199人收藏</span>
            </span>
            <span style="float: right">
                <v-btn icon>
                    <v-icon>mdi-basket-fill</v-icon>
                </v-btn>
                3444人已购买
            </span>
        </div>
        <h3><p>{{goodsItem.title}}</p></h3>
        <div style="text-align: left; margin: 10px">
            <ul class="promo-meta">
                <li class="detail-price">
                    <span class="property-type" style="">价格</span>
                    <span class="property-cont" style=""><em class="r-rmb">￥</em>{{sku.price}}</span>
                </li>
                <li class="detail-price">
                    <span class="property-type" style="">价格</span>
                    <span class="property-cont" style=""><em class="r-rmb">￥</em>{{sku.price}}</span>
                </li>
                <li class="detail-price">
                    <span class="property-type" style="">价格</span>
                    <span class="property-cont" style=""><em class="r-rmb">￥</em>{{sku.price}}</span>
                </li>

            </ul>
            <div style="text-align: left; padding-left: 24px">
                <span class="property-type" style="float: left">配送
                </span>
                <div class="J_LogisticInfo" style=" float: left">
                    <span id="J-from" style="line-height: 40px;">湖北襄阳</span>
                    <span style="display: inline-block; width: 100px">
                        <area-cascader :size="small" v-model="address" type="all" :data="$pcaa" :level="1"></area-cascader>
                        <area-select v-model="address" type="all" :data="$pcaa" :level="2"></area-select>
                    </span>

                    <span id="J-to"  style="; width: auto">
                        <span>

                        </span>
                    </span>
                </div>
            </div>


        </div>

    </div>
</template>

<script>


    export default {
        name: "GoodsDetail",
        components:{
        },
        props: {
            starStatus: true,
            goodsItem: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        data() {
            return{
                address:[],
                sku: {
                    title: "红色",
                    image: "http://image5.suning.cn/uimg/b2c/newcatentries/0070130691-000000000826244625_5_800x800.jpg",
                    price: 2557.89,
                    stock: 345,
                },
                selectedAddress: ''
            }
        },
        methods: {
            selectAddress(address) {
                this.selectedAddress = `${address.province}${address.city}${address.detail}`
            }
        }


    }
</script>

<style scoped>

    .promo-meta {
        list-style-type: none;
    }
    .property-type {
        display: inline-block;
        width: 60px;
        line-height: 40px;
        color: #6c6c6c;
    }
    .property-cont {
        font-size: 26px;
        color: #FF4400;
        line-height: 12px;
    }
    .r-rmb {
        font-style: normal;
        font-weight: bolder;
        margin-right: 4px;

    }
    .J_LogisticInfo {

    }
</style>