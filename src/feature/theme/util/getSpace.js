// 间距的放大梯度
const zoomGradient = [1, 2, 3, 4, 5];

export default function getSpace(base) {
  const spaces = zoomGradient.map(item => item * base);

  return {
    space: spaces[1], // 8
    spaceSM: spaces[0], // 4
    spaceLG: spaces[2], // 12
    spaceXL: spaces[3], // 16
    spaceXXL: spaces[4], // 20
  };
}
