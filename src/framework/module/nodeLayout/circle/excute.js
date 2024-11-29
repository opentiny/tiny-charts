function getDegree(n, nodeIdxMap, edges) {
    const degrees = [];
    for (let i = 0; i < n; i++) {
        degrees[i] = 0;
    }
    edges.forEach((e) => {
        if (e.start) {
            degrees[nodeIdxMap[e.start]] += 1;
        }
        if (e.target) {
            degrees[nodeIdxMap[e.end]] += 1;
        }
    });
    return degrees;
};

function compareDegree(a, b) {
    if (a.degree < b.degree) {
        return -1;
    }
    if (a.degree > b.degree) {
        return 1;
    }
    return 0;
}

function initHierarchy(nodes, edges, nodeMap, directed) {
    nodes.forEach((_, i) => {
        nodes[i].children = [];
        nodes[i].parent = [];
    });
    if (directed) {
        edges.forEach((e) => {
            let startIdx = 0;
            if (e.start) {
                startIdx = nodeMap[e.start];
            }
            let endIdx = 0;
            if (e.end) {
                endIdx = nodeMap[e.end];
            }
            nodes[startIdx].children.push(nodes[endIdx].id);
            nodes[endIdx].parent.push(nodes[startIdx].id);
        });
    } else {
        edges.forEach((e) => {
            let startIdx = 0;
            if (e.start) {
                startIdx = nodeMap[e.start];
            }
            let endIdx = 0;
            if (e.end) {
                endIdx = nodeMap[e.end];
            }
            nodes[startIdx].children.push(nodes[endIdx].id);
            nodes[endIdx].children.push(nodes[startIdx].id);
        });
    }
}

function connect(a, b, edges) {
    const m = edges.length;
    for (let i = 0; i < m; i++) {
        if (
            (a.id === edges[i].start && b.id === edges[i].end) ||
            (b.id === edges[i].start && a.id === edges[i].end)
        ) {
            return true;
        }
    }
    return false;
}

/**
 * 根据节点的拓扑结构排序
 * @return {array} orderedNodes 排序后的结果
 */
function topologyOrdering(directed,nodes,edges) {

	const cnodes = [...nodes];
	const orderedCNodes = [cnodes[0]];
	const resNodes = [nodes[0]];
	const pickFlags = [];
	const n = nodes.length;
	pickFlags[0] = true;
	initHierarchy(cnodes, edges, nodeMap, directed);
	let k = 0;
	cnodes.forEach((cnode, i) => {
		if (i !== 0) {
			if (
				(i === n - 1 ||
					degrees[i] !== degrees[i + 1] ||
					connect(orderedCNodes[k], cnode, edges)) &&
				pickFlags[i] !== true
			) {
				orderedCNodes.push(cnode);
				resNodes.push(nodes[nodeMap[cnode.id]]);
				pickFlags[i] = true;
				k++;
			} else {
				const children = orderedCNodes[k].children;
				let foundChild = false;
				for (let j = 0; j < children.length; j++) {
					const childIdx = nodeMap[children[j]];
					if (degrees[childIdx] === degrees[i] && pickFlags[childIdx] !== true) {
						orderedCNodes.push(cnodes[childIdx]);
						resNodes.push(nodes[nodeMap[cnodes[childIdx].id]]);
						pickFlags[childIdx] = true;
						foundChild = true;
						break;
					}
				}
				let ii = 0;
				while (!foundChild) {
					if (!pickFlags[ii]) {
						orderedCNodes.push(cnodes[ii]);
						resNodes.push(nodes[nodeMap[cnodes[ii].id]]);
						pickFlags[ii] = true;
						foundChild = true;
					}
					ii++;
					if (ii === n) {
						break;
					}
				}
			}
		}
	});
	return resNodes;
}

/**
 * 根据节点度数大小排序
 * @return {array} orderedNodes 排序后的结果
 */
function degreeOrdering(nodes) {
	const orderedNodes = [];
	nodes.forEach((node, i) => {
		node.degree = degrees[i];
		orderedNodes.push(node);
	});
	orderedNodes.sort(compareDegree);
	return orderedNodes;
}

/** 布局中心 */
let center;

 /** 固定半径，若设置了 radius，则 startRadius 与 endRadius 不起效 */
 let radius

 /** 起始半径 */
let startRadius;

 /** 终止半径 */
let endRadius;

/** 是否顺时针 */
let clockwise;

 /** 起始角度 */
let startAngle;

 /** 终止角度 */
let endAngle;



 /** 节点在环上分成段数（几个段将均匀分布），在 endRadius - startRadius != 0 时生效 */
let divisions;

/** 节点在环上排序的依据，可选: 'topology', 'degree', 'null' */
let ordering;

 /** how many 2*pi from first to last nodes */
let angleRatio = 1;

let nodeMap = {};

let degrees = [];

let astep;

// 执行布局
function execute(nodes,data,containerSize,options) {
    let layout = options.layout;
    let width = layout.width || containerSize.width;
    let height = layout.height || containerSize.height;
    center =  layout.center || [0,0];
    radius =  layout.radius || null;
    startRadius =  layout.startRadius || null;
    endRadius =  layout.endRadius || null;
    clockwise = layout.clockwise == undefined ? true : layout.clockwise;
    startAngle = layout.startAngle || 0;
    endAngle = layout.endAngle || 2 * Math.PI;
    divisions = layout.divisions || 1;
    ordering = layout.ordering || null;
    const n = nodes.length;
    const edges = data.edges;
	if (n === 0) {
		return;
	}
	if (n === 1) {
		nodes[0].x = center[0];
		nodes[0].y = center[1];
		return;
	}

	const angleStep = (endAngle - startAngle) / n;
	// layout

	nodes.forEach((node, i) => {
		nodeMap[node.id] = i;
	});

	degrees = getDegree(nodes.length, nodeMap, edges);

	if (!width && typeof window !== 'undefined') {
		width = window.innerWidth;
	}
	if (!height && typeof window !== 'undefined') {
		height = window.innerHeight;
	}
	if (!radius && !startRadius && !endRadius) {
		radius = height > width ? width / 2 : height / 2;
	} else if (!startRadius && endRadius) {
		startRadius = endRadius;
	} else if (startRadius && !endRadius) {
		endRadius = startRadius;
	}

	astep = angleStep * angleRatio;

	let layoutNodes = [];
	if (ordering === 'topology') {
		// layout according to the topology
		layoutNodes = topologyOrdering(false,nodes,edges);
	} else if (ordering === 'topology-directed') {
		// layout according to the topology
		layoutNodes = topologyOrdering(true,nodes,edges);
	} else if (ordering === 'degree') {
		// layout according to the descent order of degrees
		layoutNodes = degreeOrdering(nodes);
	} else {
		// layout according to the original order in the data.nodes
		layoutNodes = nodes;
	}


	const divN = Math.ceil(n / divisions); // node number in each division
	for (let i = 0; i < n; ++i) {
		let r = radius;
		if (!r && startRadius !== null && endRadius !== null) {
			r = startRadius + (i * (endRadius - startRadius)) / (n - 1);
		}
		if (!r) {
			r = 10 + (i * 100) / (n - 1);
		}
		let angle =
			startAngle + (i % divN) * astep + ((2 * Math.PI) / divisions) * Math.floor(i / divN);
		if (!clockwise) {
			angle = endAngle - (i % divN) * astep - ((2 * Math.PI) / divisions) * Math.floor(i / divN);
		}
		layoutNodes[i].x = center[0] + Math.cos(angle) * r;
		layoutNodes[i].y = center[1] + Math.sin(angle) * r;
		layoutNodes[i].weight = degrees[i];
	}
}

export default execute