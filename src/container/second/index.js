import {
  createElement,
  createHeader,
} from '../../script/layout.js'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

// Додаємо навігаційний елемент
const navigation = createElement('nav', 'navigation')

const knowledgeBaseLink = createElement(
  'a',
  'navigation__link',
  'База знань',
)
const informationLink = createElement(
  'a',
  'navigation__link navigation__link--active',
  'Інформація',
)

// Додаємо обробник події для навігаційних елементів
knowledgeBaseLink.addEventListener('click', () => {
  setActiveLink(knowledgeBaseLink, informationLink)
  // Ваш код для переходу на "База знань"
  // Наприклад, ви можете використовувати window.location.href
})

informationLink.addEventListener('click', () => {
  setActiveLink(informationLink, knowledgeBaseLink)
  // Ваш код для переходу на "Інформація"
  // Наприклад, ви можете використовувати window.location.href
})

navigation.append(knowledgeBaseLink, informationLink)

page.append(navigation)

// Додаємо картинку
const image = createElement('img')
image.src = '/img/img1.png' // Шлях до вашої картинки відносно папки public

page.append(image)

// Додаємо блок з поясненням терміну
const termExplanation = createElement(
  'div',
  'term-explanation',
)

const termExplanationTitle = createElement(
  'h2',
  'term-explanation-title',
  'Що таке база знань?',
)
const termExplanationText = createElement(
  'p',
  'term-explanation-text',
  'База знань — база даних, що містить правила виводу та інформацію про людський досвід і знання в певній предметній області. У самоосвітніх системах база знань також містить інформацію, що є результатом вирішення попередніх задач.',
)

termExplanation.append(
  termExplanationTitle,
  termExplanationText,
)

page.append(termExplanation)

// Додаємо функцію для встановлення активного елемента
const setActiveLink = (activeLink, inactiveLink) => {
  activeLink.classList.add('navigation__link--active')
  inactiveLink.classList.remove('navigation__link--active')
}

const telegramButton = createElement(
  'button',
  'telegram-button',
  "Перейти до ком'юніті у Телеграм",
)
page.append(telegramButton)
