<template>
  <div class="node-one">
    <div class="node-left">
			<img :src="info.iconPath">
		</div>
		<div class="node-right">
			<div class="title">{{ info.name }}</div>
			<!-- <div class="info">
				<span> {{ info.year }}</span>
				<span> {{ info.time }}</span>
				<span> {{ info.type }}</span>
			</div> -->
			<div class="rate">
				<tiny-rate v-model="info.rate" disabled disabled-void-icon-class="icon-starDisable" :max="5" allow-half size="12px" space="18px"></tiny-rate>
			</div>
			<div class="desc" :title="info.desc">{{  info.desc }}</div>
			<!-- <div class="link">{{ info.linkText }}</div> -->
			<div class="btn">
				<span class="triangle-right"></span>
				{{ info.btnText }}
			</div>
		</div>
  </div>
</template>

<script  >
import { Rate } from '@opentiny/vue'
export default {
  components: {
    TinyRate: Rate ,
  },
  props: {
    data: Object,
  },
  data() {
		
    return {
      info: {
        name: 'KILL BILL:VOL.1',
        year: 2003,
        time: 111,
				type: 'Action',
				rate: 4.5,
				desc: 'The Bride" was once part of a group of world class female assassins, until the group leader, "Bill" and the other assassins turn against her. Five years later "The Bride" awakens from the coma the assassins left her in and heads out to seek bloody revenge. Unlike conventional movies, Kill Bill is told in chapter format making the narrative flow more like a book than a film.',
				linkText: 'Read more',
        btnText: 'WATCH',
      },

    };
  },
  mounted() {
    if (this.data) {
      Object.assign(this.info, this.data);
    }
		let icons = {
			'KILL BILL:VOL.1': './image/charts/layout/2.webp',
		}
		this.info.iconPath = icons[this.info.name];
  },
  computed: {
    dynamicBackgroundColor() {
      if (this.info.id.includes('1')) {
        return '#2070F3';
      } else if (this.info.id.includes('2')) {
        return '#F4840C';
      } else if (this.info.id.includes('3')) {
        return '#09AA71';
      }
      return '#E02128'; // 默认背景颜色
    },
    currentInfo() {
      return this.info.more[this.selectedKey];
    }
  },

  methods: {
    handleClick(value) {
      this.selectedKey = value.vm.label;
    },
    formatText() {
      return `${this.info.peopleNum}/100`
    },
    getLabel(key) {
      const labels = {
        introduction: '部门介绍',
        address: '部门地址',
        iphone: '部门电话',
        email: '部门邮箱',
        contact: '部门联系人'
      };
      return labels[key] || key;
    }
  },
  watch: {
    data:{
      handler: function(newValue, oldValue) {
        Object.assign(this.info, newValue);
      },
      deep:true
    }
  }
}
</script>


<style lang="less" scoped>
.node-one {
	width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  font-family: Arial, sans-serif;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
	display: flex;
	.node-left {
		width: 40%;
		& > img {
			width: 100%;
			height: 100%;
		}
	}
	.node-right {
			width: 60%;
			// background-color: #000;
			padding: 12px;
			// color: #fff;
			.title {
				font-size: 16px;
			}
			.info {
				font-size: 12px;
				margin-top: 10px;
				&>span {
					margin-right: 16px;
				}
			}
			.desc {
				font-size: 11px;
				margin-top: 8px;
				line-height: 1.5;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
  			-webkit-line-clamp: 2;
			}
			.link {
				font-size: 14px;
    		color: #6D8FF0;
    		margin: 5px 0 9px;
			}
			.btn {
				color: #6D8FF0;
				border: 2px solid #6D8FF0;
				border-radius: 4px;
				line-height: 10px;
				padding: 5px 8px;
				display: inline-block;
				font-size: 12px;
				.triangle-right {
					width: 8px;
					height: 8px;
					background-color: #6D8FF0;
					clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
					transform: rotate(-270deg);
					margin-right: 4px;
					display: inline-block;
				}
			}
	}
}
</style>