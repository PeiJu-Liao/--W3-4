const opticalData = [
  {
    id: 1,
    image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-1.png?raw=true'
  },
  {
    id: 2,
    image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-2.png?raw=true'
  },
  {
    id: 3,
    image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-3.png?raw=true'
  },
  {
    id: 4,
    image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-4.png?raw=true'
  },
  {
    id: 5,
    image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-5.png?raw=true'
  },
  {
    id: 6,
    image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-6.png?raw=true'
  }
]

const opticalFrameWrap = document.querySelector('.glassesFrame__opticalWrap')
const sunglass = false;

const createCard = (data, times) => {
  let cardHTML = '';
  data.forEach(item => {
    cardHTML += `
      <div class="${sunglass ? 'glassesFrame__opticalWrap-card' : 'glassesFrame__suglassWrap-card'}glassesFrame__opticalWrap-card" alt="">
        <img src="${item.image}" alt="" />
        <div class="glassesFrame__cardFooter">
          <div class="glassesFrame__cardFooter--info">
            <p>BJ41600S</p>
            <P>NTD3,490</P>
          </div>
          <span class="mr-2"></span>
          <span></span>
        </div>
        </img>
      </div>
    `
  })
  let render = ''
  for (let i = 0; i < times; i++) {
    render += cardHTML
  }
  return render
}

opticalFrameWrap.innerHTML = createCard(opticalData, 2)


