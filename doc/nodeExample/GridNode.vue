<template>
	<tiny-tooltip pre :content="tipContent" placement="bottom" effect="light">
		<div class="grid-card" :style="style">
			<img draggable="false" v-if="iconPath" :src="iconPath" />
			<div class="text" :style="`bottom:${data.height / 2 }px`"> {{ data.text }}</div>
		</div>
	</tiny-tooltip>
</template>

<script  >
import { ref } from 'vue';
import { Tooltip } from '@opentiny/vue'
export default {
	components: {
		TinyTooltip:  Tooltip
	},
	props: {
		data: Object,
	},
	data() {
		let styleObject = {};
		let data = this.data;
		let iconPath;
		let tipContent = [];
		let icons = {
			main: './image/charts/layout/servers_main.svg',
			portal: './image/charts/layout/servers_portal.svg',
			bms: './image/charts/layout/servers_bms.svg',
			ecs: './image/charts/layout/servers_ecs.svg',
			hecs: './image/charts/layout/servers_hecs.svg'
		}
		if(data.width) {
			styleObject.width = data.width + 'px';
		}
		if(data.height) {
			styleObject.height = data.height + 'px';
		}
		if(data.fill) {
			styleObject.background = data.fill;
		}
		iconPath = icons[data.name];
		if(data.name){
			tipContent.push(`服务器名称：${data.name} \n`)
		}
		if(data.ip){
			tipContent.push(`IP地址： ${data.ip}`)
		}
		if(!tipContent.length) {
			tipContent = null;
		}
		if (data.iconPath) {
			iconPath = data.iconPath;
		}
		return {
        style: styleObject,
			iconPath: iconPath,
			tipContent: tipContent
    }
	},
	mounted() {

	},
	computed: {

	},

	methods: {

	}
}
</script>


<style scoped>
.grid-card {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	border: 1px solid #6599ff;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
	position: relative;
	
}

.text {
	position: absolute;
	transform: translateY(100%);
	width: calc(100% + 30px);
	text-align: center;
	font-size: 12px;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	margin-bottom: -18px;
    color: var(--ti-base-color-common-7);
}
img{
}
img + .text{
  margin-bottom: -35px;
}
</style>
