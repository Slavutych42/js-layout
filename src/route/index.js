// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const first = require('./first')
const second = require('./second')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', first)
router.use('/sec', second)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
