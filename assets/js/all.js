"use strict";

var opticalData = [{
  id: 1,
  image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-1.png?raw=true'
}, {
  id: 2,
  image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-2.png?raw=true'
}, {
  id: 3,
  image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-3.png?raw=true'
}, {
  id: 4,
  image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-4.png?raw=true'
}, {
  id: 5,
  image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-5.png?raw=true'
}, {
  id: 6,
  image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-6.png?raw=true'
}];
var opticalFrameWrap = document.querySelector('.glassesFrame__opticalWrap');
var sunglass = false;

var createCard = function createCard(data, times) {
  var cardHTML = '';
  data.forEach(function (item) {
    cardHTML += "\n      <div class=\"".concat(sunglass ? 'glassesFrame__opticalWrap-card' : 'glassesFrame__suglassWrap-card', "glassesFrame__opticalWrap-card\" alt=\"\">\n        <img src=\"").concat(item.image, "\" alt=\"\" />\n        <div class=\"glassesFrame__cardFooter\">\n          <div class=\"glassesFrame__cardFooter--info\">\n            <p>BJ41600S</p>\n            <P>NTD3,490</P>\n          </div>\n          <span class=\"mr-2\"></span>\n          <span></span>\n        </div>\n        </img>\n      </div>\n    ");
  });
  var render = '';

  for (var i = 0; i < times; i++) {
    render += cardHTML;
  }

  return render;
};

opticalFrameWrap.innerHTML = createCard(opticalData, 2);
//# sourceMappingURL=all.js.map
