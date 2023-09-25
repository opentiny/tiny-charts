import React, { useState } from 'react';
import scrollToAnchor from '../utils/scrollToAnchor';

export default function NavSearch(props) {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [isTrue, setIsTrue] = useState(false);
  const { titleData } = props;
  // 检测输入值
  const handleSearch = e => {
    const iptValue = e.target.value;
    setValue(iptValue);
    titleData.forEach(data => {
      if (data.title.indexOf(iptValue) !== -1) {
        setIsTrue(true);
        setTitle(data.title);
      }
    });
  };
  // 回车搜索
  const isSearch = e => {
    if (e.code === 'Enter') {
      if (isTrue) {
        scrollToAnchor(title);
      }
    }
  };
  // 点击清空
  const clearIpt = () => {
    setValue('');
    setIsTrue(false);
  };

  return (
    <div className="ic-nav-search-container">
      <div className="ic-nav-search">
        <i className="ic-nav-search-icon">
          <svg viewBox="0 0 1024 1024" version="1.1" p-id="2600" width="12" height="12">
            <path
              d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z"
              p-id="2601"
            />
          </svg>
        </i>
        <input
          type="text"
          className="ic-nav-search-input"
          placeholder="搜索图表"
          value={value}
          onChange={e => {
            handleSearch(e);
          }}
          onKeyUp={e => {
            isSearch(e);
          }}
        />
        <i
          className="ic-nav-search-cancelicon"
          style={value !== '' ? { diaplay: 'block' } : { display: 'none' }}
          onClick={() => {
            clearIpt();
          }}
        >
          <svg viewBox="0 0 1024 1024" version="1.1" p-id="3558" width="12" height="12">
            <path d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z" p-id="3559" />
            <path
              d="M927.846568 511.997953c0-229.315756-186.567139-415.839917-415.838893-415.839917-229.329059 0-415.85322 186.524161-415.85322 415.839917 0 229.300406 186.524161 415.84094 415.85322 415.84094C741.278405 927.838893 927.846568 741.29836 927.846568 511.997953M512.007675 868.171955c-196.375529 0-356.172979-159.827125-356.172979-356.174002 0-196.374506 159.797449-356.157629 356.172979-356.157629 196.34483 0 356.144326 159.783123 356.144326 356.157629C868.152001 708.34483 708.352505 868.171955 512.007675 868.171955"
              p-id="3560"
            />
            <path
              d="M682.378947 642.227993 553.797453 513.264806 682.261267 386.229528c11.661597-11.514241 11.749602-30.332842 0.234337-41.995463-11.514241-11.676947-30.362518-11.765975-42.026162-0.222057L511.888971 471.195665 385.223107 344.130711c-11.602246-11.603269-30.393217-11.661597-42.025139-0.059352-11.603269 11.618619-11.603269 30.407544-0.059352 42.011836l126.518508 126.887922L342.137823 639.104863c-11.662621 11.543917-11.780301 30.305213-0.23536 41.96988 5.830799 5.89015 13.429871 8.833179 21.086248 8.833179 7.53972 0 15.136745-2.8847 20.910239-8.569166l127.695311-126.311801L640.293433 684.195827c5.802146 5.8001 13.428847 8.717546 21.056572 8.717546 7.599072 0 15.165398-2.917446 20.968567-8.659217C693.922864 672.681586 693.950494 653.889591 682.378947 642.227993"
              p-id="3561"
            />
          </svg>
        </i>
      </div>
    </div>
  );
}
