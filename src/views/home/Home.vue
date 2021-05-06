<!--
 * @FileDescription: TODO
 * @Author: Rwenjie
 * @Date: 2021/5/2
 * @LastEditors: Modified by : Rwenjie
 * @LastEditTime: Modified time : 2021/5/2
 -->

<template>
    <div id="home">
        <el-container>
            <el-aside width="400px">
                <v-card
                        class="mx-auto"
                        max-width="400">
                    <v-list>
                        <v-list-item-group
                                v-model="model"
                                active-class="border"
                                color="indigo">
                            <v-list-item
                                    v-for="(item, i) in items"
                                    :key="i">
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </el-aside>
            <el-header>
                <v-toolbar
                        dark
                        prominent
                        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
                >
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title>Vuetify</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-export</v-icon>
                    </v-btn>
                </v-toolbar>
            </el-header>

        </el-container>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data: () => ({
            items: [
                {
                    icon: 'mdi-wifi',
                    text: 'Wifi',
                },
                {
                    icon: 'mdi-bluetooth',
                    text: 'Bluetooth',
                },
                {
                    icon: 'mdi-chart-donut',
                    text: 'Data Usage',
                },
            ],
            model: 1,
        }),
    }
</script>

<style scoped>

</style>