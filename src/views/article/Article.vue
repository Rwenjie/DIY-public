<!--
 * @FileDescription: TODO
 * @Author: Rwenjie
 * @Date: 2021/5/5
 * @LastEditors: Modified by : Rwenjie
 * @LastEditTime: Modified time : 2021/5/5
 -->

<template>
    <div id="article">
        <el-container>
            <el-aside width="75%" style="
                                        background: #F5F8FA;
                                        height: 10000px;
                                        border: 1px solid #d1d7dc;
                                        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
                <div style="padding: 30px 40px 15px" >
                    <v-divider></v-divider>
                    <div style="max-width: 900px;
                                margin: 0 auto">
                        <div style="margin-bottom: 5px"><i class="el-icon-caret-top"></i></div>
                        <div style="margin-bottom: 5px">上一篇</div>
                        <div style="margin-bottom: 5px">编码字母-让我们成为侦探</div>

                        <div style="padding-top: 30px">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                        <div style="max-width: 900px;
                                        margin: 20px auto 20px auto;">
                            <v-sheet
                                    color="white"
                                    elevation="4"
                                    height="auto"
                                    :rounded=true
                                    width="100%">
                                <div class="post-body" style="padding: 50px;
                                                        position: relative">

                                    <h1 class="post-title" style="margin-bottom: 30px;
                                                                   text-align: left;
                                                                    margin-top: 30px;">
                                        <a href="http://krokotak.com/2015/07/coded-letter-lets-be-detectives/">CODED LETTER – Let’s Be Detectives</a>
                                    </h1>
                                    <div class="post-meta-top" style="border-bottom: 1px solid #e0e0e0;
                                                                            border-top: 1px solid #e0e0e0;
                                                                            padding: 15px 0px;
                                                                             margin-bottom: 30px;">
                                        <el-row>
                                            <el-col :span="12">
                                                <div style="text-align: left">
                                                    <span v-if="starStatus">
                                                        <v-btn icon color="red" @click="cancelLike">
                                                            <v-icon>mdi-star</v-icon>
                                                        </v-btn>
                                                        <span style="margin-top: 5px">199人收藏</span>
                                                    </span>
                                                    <span v-else>
                                                        <v-btn icon color="red" @click="giveLike">
                                                            <v-icon>mdi-star-outline</v-icon>
                                                        </v-btn>
                                                        <span>199人收藏</span>
                                                    </span>
                                                </div>
                                            </el-col>
                                            <el-col :span="12">
                                                <row>
                                                    <ul style="list-style-type: none;">
                                                        <li v-for="tag in tags"
                                                            style="display:inline;
                                                                    float: right;
                                                                    margin: 0 0 5px 5px">
                                                            <el-tag size="small"
                                                                    :key="tag"
                                                                    style="">{{tag}}</el-tag>
                                                        </li>
                                                    </ul>
                                                </row>
                                                <div>
                                                    <ul style="list-style-type: none">
                                                        <li v-for="category in categories"
                                                            style="display: block;
                                                                    float: right;
                                                                    margin: 0 0 5px 5px">
                                                            <el-tag size="small"
                                                                    type="warning"
                                                                    :key="category"style="">{{category}}</el-tag>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </el-col>
                                        </el-row>

                                    </div>
                                    <div class="post-content">

                                        <p style="text-align: center;"><strong>Watch video:</strong></p>
                                        <p style="text-align: center;">
                                            <iframe src="//player.bilibili.com/player.html?aid=587904007&bvid=BV1wB4y1w7Lm&cid=335748601&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe><br>
                                            <strong>How to make:</strong></p>
                                        <p style="text-align: center;"><img class="aligncenter size-full wp-image-68531" src="http://krokotak.com/wp-content/uploads/2017/09/2-13.jpg" alt="" width="595" height="1276" srcset="http://krokotak.com/wp-content/uploads/2017/09/2-13.jpg 595w, http://krokotak.com/wp-content/uploads/2017/09/2-13-140x300.jpg 140w, http://krokotak.com/wp-content/uploads/2017/09/2-13-477x1024.jpg 477w, http://krokotak.com/wp-content/uploads/2017/09/2-13-173x372.jpg 173w, http://krokotak.com/wp-content/uploads/2017/09/2-13-269x576.jpg 269w, http://krokotak.com/wp-content/uploads/2017/09/2-13-326x700.jpg 326w" sizes="(max-width: 595px) 100vw, 595px"></p>
                                        <p style="text-align: center;">&nbsp;printable templates:</p>
                                        <p><a href="http://print.krokotak.com/p?x=05bfe34161c64292924bc6ca437a267f"><img class="wp-image-68536 size-medium alignleft" src="http://krokotak.com/wp-content/uploads/2017/09/pum-212x300.jpg" alt="" width="212" height="300" srcset="http://krokotak.com/wp-content/uploads/2017/09/pum-212x300.jpg 212w, http://krokotak.com/wp-content/uploads/2017/09/pum-263x372.jpg 263w, http://krokotak.com/wp-content/uploads/2017/09/pum.jpg 271w" sizes="(max-width: 212px) 100vw, 212px"></a></p>
                                        <p style="text-align: center;"><a href="http://print.krokotak.com/p?x=b1348c74aa274e1ba125be565a257e15"><img class="wp-image-68537 size-medium alignleft" src="http://krokotak.com/wp-content/uploads/2017/09/sk-212x300.jpg" alt="" width="212" height="300" srcset="http://krokotak.com/wp-content/uploads/2017/09/sk-212x300.jpg 212w, http://krokotak.com/wp-content/uploads/2017/09/sk-263x372.jpg 263w, http://krokotak.com/wp-content/uploads/2017/09/sk.jpg 271w" sizes="(max-width: 212px) 100vw, 212px"></a></p>

                                    </div>

                                </div>

                            </v-sheet>
                        </div>

                        <div style="max-width: 900px;
                                        margin: 20px auto 20px auto;">
                            <div style="text-align: left">
                                <h3>推荐购买</h3>
                            </div>
                            <v-sheet
                                    color="white"
                                    elevation="4"
                                    height="auto"
                                    :rounded=true
                                    width="100%">
                                <el-row>
                                    <el-col :span="12">
                                        <test></test>
                                    </el-col>
                                    <el-col :span="12">
                                        <goods-detail :goods-item="goods"></goods-detail>
                                    </el-col>
                                </el-row>
                            </v-sheet>
                        </div>
                    </div>
                </div>

            </el-aside>
            <el-main style="background: #f0f3f5">Main</el-main>
        </el-container>
    </div>
</template>

<script>

    import Test from "./childComps/Test";
    import GoodsDetail from "./childComps/GoodsDetail";

    export default {
        name: "Article",
        components: {
           /* ArticleSwiper,

            VideoPlayTest*/
            Test,
            GoodsDetail
        },
        data(){
            return{
                starStatus: true,
                star: 199,
                tags: ["halloween","hand","pumpkin","skeleton","hand","pumpkin","skeleton"],
                categories:["With hands and feet", "paper toys", "halloween", "educational activities", "back to school"],
                goods: {
                    title: "diy小屋手工微景观小房子咖啡屋花房拼装店铺摆件礼物女微缩模型",
                    payMethod: [
                        {
                            id: 1,
                            label:  "支付宝",
                        },
                        {
                            id: 2,
                            label:  "微信支付",
                        },
                    ],
                    skus: [
                        {
                            title: "红色",
                            image: "http://image5.suning.cn/uimg/b2c/newcatentries/0070130691-000000000826244625_5_800x800.jpg",
                            price: 2557.89,
                            stock: 345,
                        },
                        {
                            title: "红色",
                            image: "http://image5.suning.cn/uimg/b2c/newcatentries/0070130691-000000000826244625_5_800x800.jpg",
                            price: 3000.89,
                            stock: 123,
                        }

                    ]
                }
            }
        },
        methods: {
            cancelLike() {
                this.starStatus = false;
                this.star--;
            },
            giveLike() {
                this.starStatus = true;
                this.star+=1;
            }
        }
    }
</script>

<style scoped>

</style>