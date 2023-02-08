// MENU
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const links = document.querySelectorAll('.main-nav__item');

const navLinckHandleClick = () => {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
}

links.forEach(link => {
  link.addEventListener('click', navLinckHandleClick)
})

// Mock data for amount block
const deals314 = [
  {
    time: '17:28:19',
    active: 'USD/BTC',
    sum: 0.1760,
    amount: 'BTC',
    roi: 6.23,
  },
  {
    time: '17:28:18',
    active: 'USD/ETH',
    sum: 1.1811,
    amount: 'ETH',
    roi: 14.85,
  },
  {
    time: '17:28:17',
    active: 'USD/LTC',
    sum: 61.9281,
    amount: 'LTC',
    roi: 7.17,
  },
  {
    time: '17:36:12',
    active: 'USD/BTC',
    sum: 0.0960,
    amount: 'BTC',
    roi: -0.89,
  },
  {
    time: '17:36:09',
    active: 'USD/ETH',
    sum: 1.1532,
    amount: 'ETH',
    roi: 0.78,
  },
  {
    time: '17:35:20',
    active: 'USD/ETH',
    sum: 1.4486,
    amount: 'ETH',
    roi: 1.02,
  },
]

const deals567 = [
  {
    time: '15:28:19',
    active: 'USD/BTC',
    sum: 0.2760,
    amount: 'BTC',
    roi: 4.23,
  },
  {
    time: '15:28:18',
    active: 'USD/ETH',
    sum: 0.0111,
    amount: 'ETH',
    roi: 0.85,
  },
  {
    time: '15:28:17',
    active: 'USD/LTC',
    sum: 101.92,
    amount: 'LTC',
    roi: 9.17,
  },
  {
    time: '15:36:12',
    active: 'USD/BTC',
    sum: 0.160,
    amount: 'BTC',
    roi: 0.12,
  },
  {
    time: '15:36:09',
    active: 'USD/ETH',
    sum: 2.2532,
    amount: 'ETH',
    roi: -0.78,
  },
  {
    time: '15:35:20',
    active: 'USD/ETH',
    sum: 3.4896,
    amount: 'ETH',
    roi: 4.02,
  },
]

const deals980 = [
  {
    time: '11:30:19',
    active: 'USD/BTC',
    sum: 0.3460,
    amount: 'BTC',
    roi: 6.03,
  },
  {
    time: '11:30:18',
    active: 'USD/ETH',
    sum: 1.1154,
    amount: 'ETH',
    roi: 1.75,
  },
  {
    time: '12:28:17',
    active: 'USD/LTC',
    sum: 11.82,
    amount: 'LTC',
    roi: 2.17,
  },
  {
    time: '15:40:12',
    active: 'USD/BTC',
    sum: 0.1369,
    amount: 'BTC',
    roi: 1.13,
  },
  {
    time: '15:41:09',
    active: 'USD/ETH',
    sum: 2.2532,
    amount: 'ETH',
    roi: 0.78,
  },
  {
    time: '15:42:20',
    active: 'USD/ETH',
    sum: 2.3496,
    amount: 'ETH',
    roi: -4.02,
  },
]

const deals1092 = [
  {
    time: '13:10:19',
    active: 'USD/BTC',
    sum: 0.2459,
    amount: 'BTC',
    roi: 1.09,
  },
  {
    time: '11:10:18',
    active: 'USD/ETH',
    sum: 0.1154,
    amount: 'ETH',
    roi: -1.05,
  },
  {
    time: '14:28:17',
    active: 'USD/LTC',
    sum: 7.22,
    amount: 'LTC',
    roi: 4.37,
  },
  {
    time: '14:40:12',
    active: 'USD/BTC',
    sum: 0.3369,
    amount: 'BTC',
    roi: 3.13,
  },
  {
    time: '14:41:09',
    active: 'USD/ETH',
    sum: 8.7532,
    amount: 'ETH',
    roi: 2.78,
  },
  {
    time: '14:42:20',
    active: 'USD/ETH',
    sum: 1.9496,
    amount: 'ETH',
    roi: 3.22,
  },
]

const similarDataTable = document.querySelector('.amount__data');
const similarDataRowTemplate = document.querySelector('#similar-data-row')
  .content
  .querySelector('.amount__data-row');

const similarRowFragment = document.createDocumentFragment();
const amountButtons = document.querySelectorAll('.amount .buttons__btn');

let activeData = 1;

//Use template to parse data table
const getRowsForDataTAble = (deals) => {
  deals.forEach((deal) => {
    const rowElement = similarDataRowTemplate.cloneNode(true);
    const deposit = `${deal.sum} ${deal.amount}`;
    const roi = `${deal.roi}%`;
    const roiData = rowElement.querySelector('#roi');
    if (deal.roi < 0) {
      roiData.classList.remove('amount__data-title--green');
      roiData.classList.add('amount__data-title--red');
    }
    rowElement.querySelector('#time').textContent = deal.time;
    rowElement.querySelector('#active').textContent = deal.active;
    rowElement.querySelector('#sum').textContent = deposit;
    roiData.textContent = roi;
    similarRowFragment.appendChild(rowElement);
  });
  similarDataTable.appendChild(similarRowFragment);
};

const handle314BtnClick = (btn) => {
  activeData = 1;
  amountButtons.forEach(b => b.classList.remove('buttons__btn--active'));
  btn.classList.add('buttons__btn--active');
  similarDataTable.textContent = '';
  getRowsForDataTAble(deals314);
}

const handle567BtnClick = (btn) => {
  activeData = 2;
  amountButtons.forEach(b => b.classList.remove('buttons__btn--active'));
  btn.classList.add('buttons__btn--active');
  similarDataTable.textContent = '';
  getRowsForDataTAble(deals567);
}

const handle980BtnClick = (btn) => {
  activeData = 3;
  amountButtons.forEach(b => b.classList.remove('buttons__btn--active'));
  btn.classList.add('buttons__btn--active');
  similarDataTable.textContent = '';
  getRowsForDataTAble(deals980);
}

const handle1092BtnClick = (btn) => {
  activeData = 4;
  amountButtons.forEach(b => b.classList.remove('buttons__btn--active'));
  btn.classList.add('buttons__btn--active');
  similarDataTable.textContent = '';
  getRowsForDataTAble(deals1092);
}

const initData = (activeData) => {
 if (activeData === 1) {
  handle314BtnClick(document.querySelector('#amount314'));
 } if (activeData === 2) {
  handle567BtnClick(document.querySelector('#amount567'));
 } if (activeData === 3) {
  handle980BtnClick(document.querySelector('#amount980'));
 } if (activeData === 4) {
  handle1092BtnClick(document.querySelector('#amount1092'));
 }
}

initData(activeData);

const handleNextDataBtnClick = () => {
  if (activeData < 4) {
    activeData = activeData + 1;
    initData(activeData)
  } else {
    activeData = 1;
    initData(activeData)
  }
}

setInterval(handleNextDataBtnClick, 4000)

//Increase Number Animation
var speed = 10;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}

// var waypoint = new Waypoint({
//   element: document.getElementById('nbr'),
//   handler: function(direction) {
//     console.log('Scrolled to waypoint!')
//   }
// })

// document.querySelector('#nbr').waypoint(function() {
//   alert('you have scrolled to the h1!');
//  });


incEltNbr("nbr"); /*Call this funtion with the ID-name for that element to increase the number within*/

// Text for potential block
const CHATGPT = 'ChatGPT';
const GPT3 = 'GPT3'
const DALLE2 = 'DALLE2'
const WHISPER = 'Whisper'
const ENTERPRISEGPT = 'EnterpriseGPT'

const potentialTexts = {
  EnterpriseGPT: 'Эти самообучающиеся программы стали важным инструментом в различных сферах бизнеса и жизни с момента своего появления.',
  Whisper: 'Whisper различает интонацию речи, акцент и диалект, а после генерирует текст из услышанного. Эта разработка помогает на слух понять любого человека на планете, на каком бы языке он не разговаривал.',
  DALLE2: 'DALL-E 2 генерирует изображения на основе текстовых описаний. Данный ИИ используют: веб-дизайнеры, дизайнеры интерьера/экстерьера, инженеры, NFT-художники, гейм-дизайнеры, модельеры, а также журналисты FORBES, New York Times, TIME, Guardian, BBC.',
  GPT3: 'GPT-3 используется для разработки интеллектуальных систем, которые улучшают анализ данных, автоматизацию бизнес-процессов и приносят прибыль уже через неделю использования.',
  ChatGPT: 'ChatGPT используется для разработки виртуальных помощников, которые облегчают общение с клиентами и повышают уровень продаж. ИИ успешно анализирует социальные сети, новостные ресурсы и финотчёты мировых компаний.',
}

const handlePotentialBtnClick = (btn) => {

  //text
  const potentialContent = document.querySelector('#potentialContent');
  const curentText = potentialTexts[btn.id];
  potentialContent.textContent = curentText;

  //buttons
  const buttons = document.querySelectorAll('.potential .buttons__btn');
  buttons.forEach(b => b.classList.remove('buttons__btn--active'));
  btn.classList.add('buttons__btn--active');
}

//Audio play
const btnAudioPlay = document.querySelector('#btn-audio-play');
const audio = document.querySelector('#audio');

const equalizers = document.querySelectorAll('.equalizer i');

const handleAudioPlay = () => {
  if (audio.paused) {
    audio.play()
    equalizers.forEach(e => e.classList.add('play'));
  } else {
    audio.pause();
    equalizers.forEach(e => e.classList.remove('play'));
  }
}
