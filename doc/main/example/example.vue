<template>
    <div class="ic-example-explore" style="width: 100%">
        <MediaScreen v-if="pageName === 'MediaScreen'"></MediaScreen>
        <DragManager v-else-if="pageName === 'DragManager'"></DragManager>
        <KeyboardFocus v-else-if="pageName === 'KeyboardFocus'"></KeyboardFocus>
        <Card v-else-if="pageName === 'Card'"></Card>
        <Overview v-else-if="pageName === 'Overview'"></Overview>
        <Massive v-else-if="pageName === 'Massive'"></Massive>
        <Linter v-else-if="pageName === 'Linter'"></Linter>
        <IntraViewport v-else-if="pageName === 'IntraViewport'"></IntraViewport>
        <ExpandLegend v-else-if="pageName === 'ExpandLegend'"></ExpandLegend>
        <Canvas v-else-if="pageName === 'Canvas'"></Canvas>
        <LineManager v-else-if="pageName === 'LineManager'"></LineManager>
        <LineOption v-else-if="pageName === 'LineOption'"></LineOption>
        <LineAnimation v-else-if="pageName === 'LineAnimation'"></LineAnimation>
        <VueNode v-else-if="pageName === 'VueNode'"></VueNode>
        <HTMLNode v-else-if="pageName === 'HTMLNode'"></HTMLNode>
        <ReactNode v-else-if="pageName === 'ReactNode'"></ReactNode>
        <AngularNode v-else-if="pageName === 'AngularNode'"></AngularNode>
        <AnimationEasing v-else-if="pageName === 'AnimationEasing'"></AnimationEasing>
        <Animation v-else-if="pageName === 'Animation'"></Animation>
        <GridLayout v-else-if="pageName === 'GridLayout'"></GridLayout>
        <CircleLayout v-else-if="pageName === 'CircleLayout'"></CircleLayout>
        <MindmapLayout v-else-if="pageName === 'MindmapLayout'"></MindmapLayout>
        <CustomizeLayout v-else-if="pageName === 'CustomizeLayout'"></CustomizeLayout>
        <LinearArcLayout v-else-if="pageName === 'LinearArcLayout'"></LinearArcLayout>
        <CircleArcLayout v-else-if="pageName === 'CircleArcLayout'"></CircleArcLayout>
        <Connector v-else-if="pageName === 'Connector'"></Connector>
        <Contextmenu v-else-if="pageName === 'Contextmenu'"></Contextmenu>
        <FrameWork v-else-if="pageName === 'FrameworkLifeCycle'"></FrameWork>
        <template v-else>
            <MarkdownPage :mdName="mdName" v-if="showMarkdown" class="markdown-layout"></MarkdownPage>
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
                    <div v-if="pageName === 'GridChart'">
                        <div class="desc">网格图由关系图引擎封装开发，该图的布局配置方法可参考：<a @click="pathUpdata('/GridLayout')" class="link-text">网格图配置详情</a></div>
                    </div>
                    <div v-else-if="pageName === 'CircleChart'">
                        <div class="desc">环形图由关系图引擎封装开发，该图的布局配置方法可参考：<a @click="pathUpdata('/CircleLayout')" class="link-text">环形图配置详情</a></div>
                    </div>
                    <div v-else-if="pageName === 'LinearArcChart'">
                        <div class="desc">线形弧线图由关系图引擎封装开发，该图的布局配置方法可参考：<a @click="pathUpdata('/LinearArcLayout')" class="link-text">线形弧线图配置详情</a></div>
                    </div>
                    <div v-else-if="pageName === 'CircleArcChart'">
                        <div class="desc">圆形弧线图由关系图引擎封装开发，该图的布局配置方法可参考：<a @click="pathUpdata('/CircleArcLayout')" class="link-text">圆形弧线图配置详情</a></div>
                    </div>
                    <div v-else-if="pageName === 'CustomizeChart'">
                        <div class="desc">自定义布局图由关系图引擎封装开发，该图的布局配置方法可参考：<a @click="pathUpdata('/CustomizeLayout')" class="link-text">自定义布局图配置详情</a></div>
                    </div>
                    <div v-else-if="pageName === 'MindmapChart'">
                        <div class="desc">思维导图由关系图引擎封装开发，该图的布局配置方法可参考：<a @click="pathUpdata('/MindmapLayout')" class="link-text">思维导图配置详情</a></div>
                    </div>
                    <div v-else>
                        <div className="table-title">
                            <h3>配置项说明</h3>
                        </div>
                        <APiTable :apiDescription="APIData" :chartName="chartName"></APiTable>
                    </div>
                </div>
            </template>
        </template>

    </div>
</template>

<script>
import APIData from '../../api';
import Card from '../card/index.vue';
import Massive from '../massive/index.vue';
import MediaScreen from '../media-screen/index.vue';
import DragManager from '../drag-manager/index.vue';
import Linter from '../linter/index.vue';
import KeyboardFocus from '../keyboard-focus/index.vue';
import Overview from '../../main/overview/index.vue';
import IntraViewport from '../intra-viewport/index.vue';
import ExpandLegend from '../expandLegend/index.vue';
import TinyThemeTool from '@opentiny/vue-theme/theme-tool';
import {
    CUSTOM_DARK_THEME
} from '../theme/dark-theme.js';
import Search from '../../main/example/components/search.vue';
import APiTable from '../../main/example/components/api-table.vue';
import MarkdownPage from '../../main/example/components/markdown.vue';
import Canvas from '../canvas/index.vue';
import LineManager from '../line/api/index.vue';
import LineOption from '../line/option/index.vue';
import LineAnimation from '../line/animation/index.vue';
import VueNode from '../node/vue/index.vue';
import HTMLNode from '../node/html/index.vue';
import ReactNode from '../node/react/index.vue';
import AngularNode from '../node/angular/index.vue';
import AnimationEasing from '../animate/esaing/index.vue';
import Animation from '../animate/animate/index.vue';
import GridLayout from '../grid/index.vue';
import CircleLayout from '../circle/index.vue';
import LinearArcLayout from '../linearArc/index.vue';
import CircleArcLayout from '../circleArc/index.vue';
import CustomizeLayout from '../customize/index.vue';
import Connector from '../Connector/index.vue';
import Contextmenu from '../contextmenu/index.vue';
import MindmapLayout from '../mindmap/index.vue';
import FrameWork from '../framework/index.vue';

export default {
    name: 'Example',
    components: {
        Card,
        Linter,
        Search,
        Canvas,
        LineManager,
        LineOption,
        LineAnimation,
        Massive,
        Overview,
        APiTable,
        MediaScreen,
        DragManager,
        ExpandLegend,
        KeyboardFocus,
        MarkdownPage,
        IntraViewport,
        VueNode,
        HTMLNode,
        ReactNode,
        AngularNode,
        Animation,
        AnimationEasing,
        GridLayout,
        CircleLayout,
        LinearArcLayout,
        CircleArcLayout,
        CustomizeLayout,
        Connector,
        Contextmenu,
        MindmapLayout,
        FrameWork
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
            mdName: 'QuickStart',
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
                this.showMarkdown = false;
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
                this.theme = 'hdesign-light';
                new TinyThemeTool('', 'tinyStyleSheetId');
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
            this.updateDataCard(this.theme);
        },
        updateDataCard(theme) {
            if (!this.dataCard.paths) return;
            this.dataCard.paths.forEach(item => {
                if (item.children) {
                    item.children.forEach(item => {
                        if (process.env.NODE_ENV === 'production') {
                            if(item.imagePath.indexOf(`${import.meta.env.VITE_PUBLISH_URL}./`) == -1){
                                item.imagePath = import.meta.env.VITE_PUBLISH_URL + item.imagePath.replace(item.imagePath.split('/')[3], theme);
                            }else{
                                item.imagePath = item.imagePath.replace(item.imagePath.split('theme/')[1].split('/')[0], theme);
                            }
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
        pathUpdata(path) {
            window.parent.postMessage({ newMenuPath: path })
        }
    },
};
</script>

<style lang="less" scoped>
:deep(.tiny-grid__header-wrapper) {
    background-color: var(--ti-base-color-bg-1);
}
.link-text {
    color: #007dff;
}
.desc {
    color:var(--ti-base-color-common-7);
}
</style>