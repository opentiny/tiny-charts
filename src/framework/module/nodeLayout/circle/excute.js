function getDegree(t, r, e) {
	const n = [];
	for (let e = 0; e < t; e++) {
	  n[e] = 0;
	}
	e.forEach((e) => {
	  if (e.start) {
		n[r[e.start]] += 1;
	  }
	  if (e.target) {
		n[r[e.end]] += 1;
	  }
	});
	return n;
  }
  function compareDegree(e, t) {
	if (e.degree < t.degree) {
	  return -1;
	}
	if (e.degree > t.degree) {
	  return 1;
	}
	return 0;
  }
  function initHierarchy(n, e, i, t) {
	n.forEach((e, t) => {
	  n[t].children = [];
	  n[t].parent = [];
	});
	if (t) {
	  e.forEach((e) => {
		let t = 0;
		if (e.start) {
		  t = i[e.start];
		}
		let r = 0;
		if (e.end) {
		  r = i[e.end];
		}
		n[t].children.push(n[r].id);
		n[r].parent.push(n[t].id);
	  });
	} else {
	  e.forEach((e) => {
		let t = 0;
		if (e.start) {
		  t = i[e.start];
		}
		let r = 0;
		if (e.end) {
		  r = i[e.end];
		}
		n[t].children.push(n[r].id);
		n[r].children.push(n[t].id);
	  });
	}
  }
  function connect(t, r, n) {
	const i = n.length;
	for (let e = 0; e < i; e++) {
	  if (
		(t.id === n[e].start && r.id === n[e].end) ||
		(r.id === n[e].start && t.id === n[e].end)
	  ) {
		return true;
	  }
	}
	return false;
  }
  function topologyOrdering(e, d, t) {
	const s = [...d];
	const a = [s[0]];
	const o = [d[0]];
	const l = [];
	const u = d.length;
	l[0] = true;
	initHierarchy(s, t, nodeMap, e);
	let c = 0;
	s.forEach((e, r) => {
	  if (r !== 0) {
		if (
		  (r === u - 1 || degrees[r] !== degrees[r + 1] || connect(a[c], e, t)) &&
		  l[r] !== true
		) {
		  a.push(e);
		  o.push(d[nodeMap[e.id]]);
		  l[r] = true;
		  c++;
		} else {
		  const n = a[c].children;
		  let t = false;
		  for (let e = 0; e < n.length; e++) {
			const i = nodeMap[n[e]];
			if (degrees[i] === degrees[r] && l[i] !== true) {
			  a.push(s[i]);
			  o.push(d[nodeMap[s[i].id]]);
			  l[i] = true;
			  t = true;
			  break;
			}
		  }
		  let e = 0;
		  while (!t) {
			if (!l[e]) {
			  a.push(s[e]);
			  o.push(d[nodeMap[s[e].id]]);
			  l[e] = true;
			  t = true;
			}
			e++;
			if (e === u) {
			  break;
			}
		  }
		}
	  }
	});
	return o;
  }
  function degreeOrdering(e) {
	const r = [];
	e.forEach((e, t) => {
	  e.degree = degrees[t];
	  r.push(e);
	});
	r.sort(compareDegree);
	return r;
  }
  let center;
  let radius;
  let startRadius;
  let endRadius;
  let clockwise;
  let startAngle;
  let endAngle;
  let divisions;
  let ordering;
  let angleRatio = 1;
  let nodeMap = {};
  let degrees = [];
  let astep;
  function execute(e, t, r, n) {
	let i = n.layout;
	let d = i.width || r.width;
	let s = i.height || r.height;
	center = i.center || [0, 0];
	radius = i.radius || null;
	startRadius = i.startRadius || null;
	endRadius = i.endRadius || null;
	clockwise = i.clockwise == undefined ? true : i.clockwise;
	startAngle = i.startAngle || 0;
	endAngle = i.endAngle || 2 * Math.PI;
	divisions = i.divisions || 1;
	ordering = i.ordering || null;
	const a = e.length;
	const o = t.edges;
	if (a === 0) {
	  return;
	}
	if (a === 1) {
	  e[0].x = center[0];
	  e[0].y = center[1];
	  return;
	}
	const l = (endAngle - startAngle) / a;
	e.forEach((e, t) => {
	  nodeMap[e.id] = t;
	});
	degrees = getDegree(e.length, nodeMap, o);
	if (!d && typeof window !== "undefined") {
	  d = window.innerWidth;
	}
	if (!s && typeof window !== "undefined") {
	  s = window.innerHeight;
	}
	if (!radius && !startRadius && !endRadius) {
	  radius = s > d ? d / 2 : s / 2;
	} else if (!startRadius && endRadius) {
	  startRadius = endRadius;
	} else if (startRadius && !endRadius) {
	  endRadius = startRadius;
	}
	astep = l * angleRatio;
	let u = [];
	if (ordering === "topology") {
	  u = topologyOrdering(false, e, o);
	} else if (ordering === "topology-directed") {
	  u = topologyOrdering(true, e, o);
	} else if (ordering === "degree") {
	  u = degreeOrdering(e);
	} else {
	  u = e;
	}
	const c = Math.ceil(a / divisions);
	for (let r = 0; r < a; ++r) {
	  let e = radius;
	  if (!e && startRadius !== null && endRadius !== null) {
		e = startRadius + (r * (endRadius - startRadius)) / (a - 1);
	  }
	  if (!e) {
		e = 10 + (r * 100) / (a - 1);
	  }
	  let t =
		startAngle +
		(r % c) * astep +
		((2 * Math.PI) / divisions) * Math.floor(r / c);
	  if (!clockwise) {
		t =
		  endAngle -
		  (r % c) * astep -
		  ((2 * Math.PI) / divisions) * Math.floor(r / c);
	  }
	  u[r].x = center[0] + Math.cos(t) * e;
	  u[r].y = center[1] + Math.sin(t) * e;
	  u[r].weight = degrees[r];
	}
  }
  export default execute;
  