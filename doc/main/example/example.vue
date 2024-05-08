<!--
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
<div class="ic-example-explore" style="width: 100%">
    <Overview v-if="isOverview"></Overview>
    <template v-else>
        <MarkdownPage :mdName="mdName" v-if="showMarkdown"></MarkdownPage>
        <template v-else>
            <div class="ic-example-list-container">
                <Search :title="dataCard.title" @input="handleInput" placeholder="输入关键字搜索案例"></Search>
                <div class="ic-example-chart">
                    <div class="ic-example-chart-item" v-for="(item, index) in filterData" :key="index">
                        <div class="card-title">
                            <h3>{{ item.title }}</h3>
                        </div>
                        <div class="card-content">
                            <div class="ic-example-chart" v-for="(subitem, subindex) in item.children" :key="subindex" @click="handleCard(subitem.routePath)">
                                <div class="chart-title">
                                    {{ subitem.name }}
                                </div>
                                <div class="chart-content">
                                    <img :src="subitem.imagePath" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ic-example-chartProperty">
                <div className="table-title">
                    <h3>配置项说明</h3>
                </div>
                <APiTable :apiDescription="APIData" :chartName="chartName"></APiTable>
            </div>
        </template>
    </template>
</div>
</template>

<script>
import APIData from '../../api';
import Overview from '../../main/overview/index.vue';
import TinyThemeTool from '@opentiny/vue-theme/theme-tool';
import {
    CUSTOM_DARK_THEME
} from '../theme/dark-theme.js';
import Search from '../../main/example/components/search.vue';
import APiTable from '../../main/example/components/api-table.vue';
import MarkdownPage from '../../main/example/components/markdown.vue';

export default {
    name: 'Example',
    components: {
        Overview,
        Search,
        APiTable,
        MarkdownPage,
    },
    data() {
        return {
            isOverview: false,
            chartName: '',
            dataCard: [],
            filterData: [],
            theme: 'light',
            jsiframe: 'origin',
            APIData: [],
            mdName: 'ReadMe',
            showMarkdown: false,
        };
    },
    created() {
        window.addEventListener('message', this.sendMessage, false);
    },
    methods: {
        sendMessage(e) {
            this.isOverview = e.data.chartName === 'Overview';
            if (e.data.chartName === 'EChartsNative' || e.data.chartName.indexOf('Chart') === -1) {
                this.showMarkdown = !this.isOverview;
                this.mdName = e.data.chartName;
            } else {
                this.showMarkdown = false;
                this.chartName = e.data.chartName;
                this.APIData = APIData[this.chartName];
            }
            if (e.data.theme?.toLocaleLowerCase().includes('dark')) {
                new TinyThemeTool(CUSTOM_DARK_THEME, 'tinyStyleSheetId');
            } else {
                new TinyThemeTool('', 'tinyStyleSheetId');
            }
            this.theme = e.data.theme;
            this.updateDataCard(this.theme);
        },
        updateDataCard(theme) {
            if (!this.dataCard.paths) return;
            this.dataCard.paths.forEach(item => {
                if (item.children) {
                    item.children.forEach(item => {
                        item.imagePath = item.imagePath.replace(item.imagePath.split('/')[3], theme);
                    });
                }
            });
        },
        handleSearch(val) {
            let menuData = [...this.dataCard.paths];
            this.filterData = [];
            menuData.forEach(item => {
                let filter = false;
                let filterItem = {
                    title: item.title,
                    children: [],
                };
                item.children.forEach(idx => {
                    if (idx.name.indexOf(val) !== -1) {
                        filter = true;
                        filterItem.children.push(idx);
                    }
                });
                filter && this.filterData.push(filterItem);
            });
        },
        handleInput(val) {
            this.handleSearch(val);
        },
        handleCard(item) {
            window.open(`./playground.html?name=${item}&theme=${this.theme}`);
        },
    },
    watch: {
        $route: {
            async handler(val) {
                let name = val.hash.split('/')[2].split('?')[0];
                this.isOverview = name === 'Overview';
                if (!this.Overview) {
                    if (name.indexOf('Chart') !== -1 && name !== 'EChartsNative') {
                        await this.axios.get(`example_data/${name}.json`).then(res => {
                            this.dataCard = JSON.parse(JSON.stringify(res.data));
                            this.updateDataCard(this.theme);
                            this.filterData = [...this.dataCard.paths];
                        });
                        this.APIData = APIData[this.chartName];
                    } else {
                        this.showMarkdown = true;
                        this.mdName = name;
                    }
                }
            },
            immediate: true,
        },
        theme:{
            handler(val){
                this.updateDataCard(val)
            },
            deep: true
        }
    },
};
</script>

<style lang="less" scoped>
:deep(.tiny-grid__header-wrapper) {
    background-color: var(--ti-base-color-bg-1);
}
</style>
