<template>
    <div class="ic-example-explore" style="width: 100%">
        <MediaScreen v-if="pageName === 'MediaScreen'"></MediaScreen>
        <KeyboardFocus v-else-if="pageName === 'KeyboardFocus'"></KeyboardFocus>
        <Card v-else-if="pageName === 'Card'"></Card>
        <Overview v-else-if="pageName === 'Overview'"></Overview>
        <Massive v-else-if="pageName === 'Massive'"></Massive>
        <Linter v-else-if="pageName === 'Linter'"></Linter>
        <IntraViewport v-else-if="pageName === 'IntraViewport'"></IntraViewport>
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
                                <div class="ic-example-chart" v-for="(subitem, subindex) in item.children" :key="subindex"
                                    @click="handleCard(subitem.routePath)">
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
    <div id="footer"></div>
</template>

<script>
import APIData from '../../api';
import Card from '../card/index.vue';
import Massive from '../massive/index.vue';
import MediaScreen from '../media-screen/index.vue';
import Linter from '../linter/index.vue';
import KeyboardFocus from '../keyboard-focus/index.vue';
import Overview from '../../main/overview/index.vue';
import IntraViewport from '../intra-viewport/index.vue';
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
        Card,
        Search,
        Massive,
        Overview,
        APiTable,
        Linter,
        MediaScreen,
        KeyboardFocus,
        MarkdownPage,
        IntraViewport,
    },
    data() {
        return {
            isOverview: false,
            chartName: '',
            dataCard: [],
            filterData: [],
            theme: localStorage.getItem('chartTheme') || 'hdesign-light',
            jsiframe: 'origin',
            APIData: [],
            mdName: 'ReadMe',
            showMarkdown: false,
            pageName: ''
        };
    },
    watch: {
        $route: {
            async handler(val) {
                let docContent = document.getElementsByClassName('app-container')[0]
                if (docContent) {
                    docContent.style.opacity = 0
                    setTimeout(() => {
                        docContent.style.opacity = 1;
                        docContent.scrollTop = 0
                    }, 20)
                }
                let name = val.hash.split('/')[2].split('?')[0];
                let themeStr = val.hash.split('/')[2].split('?')[1];
                let theme = themeStr.slice(themeStr.indexOf('=') + 1);
                this.pageName = name;
                this.isOverview = name === 'Overview';
                if (!this.Overview) {
                    if (name.indexOf('Chart') !== -1 && name !== 'EChartsNative') {
                        await this.axios.get(`example_data/${name}.json`).then(res => {
                            this.dataCard = JSON.parse(JSON.stringify(res.data));
                            this.updateDataCard(theme);
                            this.filterData = [...this.dataCard.paths];
                        });
                        this.APIData = APIData[name];
                    } else {
                        this.showMarkdown = true;
                        this.mdName = name;
                    }
                }
                const isDarkTheme = val.href.includes('dark');
                this.theme = isDarkTheme ? 'hdesign-dark' : 'hdesign-light';
                if (isDarkTheme) {
                    new TinyThemeTool(CUSTOM_DARK_THEME, 'tinyStyleSheetId');
                } else {
                    new TinyThemeTool('', 'tinyStyleSheetId');
                }
            },
            immediate: true,
        },
        theme: {
            handler(val) {
                this.updateDataCard(val);
                // this.sendMessage()
                this.$bus.emit('themeChange', val);
                localStorage.setItem('chartTheme', this.theme) // 将主题选择保存到浏览器中
            },
            deep: true
        }
    },
    created() {
        window.addEventListener('message', this.sendMessage, false);
    },
    mounted() {
        if (window.TDCommon) {
            const footer = new window.TDCommon(['#footer'], {});
            footer.renderFooter();
        }
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
        },
        updateDataCard(theme) {
            if (!this.dataCard.paths) return;
            this.dataCard.paths.forEach(item => {
                if (item.children) {
                    item.children.forEach(item => {
                        if (process.env.NODE_ENV === 'production') {
                            item.imagePath = import.meta.env.VITE_PUBLISH_URL + item.imagePath.replace(item.imagePath.split('/')[3], theme);
                        } else {
                            item.imagePath = item.imagePath.replace(item.imagePath.split('/')[3], theme);
                        }
                        
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
            if (process.env.NODE_ENV === 'production') {
                window.open(`/${import.meta.env.VITE_PLAYGROUND_URL}/playground.html?name=${item}&theme=${this.theme}`);
            } else {
                window.open(`/playground.html?name=${item}&theme=${this.theme}`);
            }
            
        },
    },
};
</script>

<style lang="less" scoped>
:deep(.tiny-grid__header-wrapper) {
    background-color: var(--ti-base-color-bg-1);
}
</style>
