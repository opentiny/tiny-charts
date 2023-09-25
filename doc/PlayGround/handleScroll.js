const handleScroll = () => {
  // 纵向滚动条dom添加属性
  const sliderV = document.querySelector('.scrollbar.vertical>.slider');
  const scrollbarV = document.querySelector('.scrollbar.vertical');
  scrollbarV.onmousemove = () => {
    scrollbarV.style.setProperty('width', '8px', 'important');
    sliderV.style.setProperty('border-radius', '4px');
  };
  scrollbarV.onmouseleave = () => {
    scrollbarV.style.setProperty('width', '4px', 'important');
    sliderV.style.setProperty('border-radius', '2px');
  };
  sliderV.onmousedown = () => {
    document.onmousemove = () => {
      scrollbarV.style.setProperty('width', '8px', 'important');
      sliderV.style.setProperty('border-radius', '4px');
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      scrollbarV.style.setProperty('width', '4px', 'important');
      sliderV.style.setProperty('border-radius', '2px');
    };
  };
  // 横向滚动条dom添加属性
  const sliderH = document.querySelector('.scrollbar.horizontal>.slider');
  const scrollbarH = document.querySelector('.scrollbar.horizontal');
  scrollbarH.onmousemove = () => {
    scrollbarH.style.setProperty('height', '8px', 'important');
    sliderH.style.setProperty('border-radius', '4px');
  };
  scrollbarH.onmouseleave = () => {
    scrollbarV.style.setProperty('width', '4px', 'important');
    sliderV.style.setProperty('border-radius', '2px');
  };
  sliderH.onmousedown = () => {
    document.onmousemove = () => {
      scrollbarH.style.setProperty('height', '8px', 'important');
      sliderH.style.setProperty('border-radius', '4px');
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      scrollbarH.style.setProperty('height', '4px', 'important');
      sliderH.style.setProperty('border-radius', '2px');
    };
  };
};
export default handleScroll;
