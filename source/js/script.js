// MENU
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navButtonText = document.querySelector('.main-nav__open-btn-text');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navButtonText.classList.add('visually-hidden');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navButtonText.classList.remove('visually-hidden');
  }
});

const links = document.querySelectorAll('.main-nav__item');

const navLinckHandleClick = () => {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  navButtonText.classList.remove('visually-hidden');
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
