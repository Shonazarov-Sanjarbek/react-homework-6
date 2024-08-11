import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      < Header items = {["Каталог", "Доставка", "Условия", "Контакты"]} about = {["+ 375 736 463 64 72", "/", "+ 375 736 463 64 72"]} />
      < Hero hero = {["Худи, чашки для горячего чая и термосы", "Eлочные игрушки, брелочки", "Начало списка вещей, которые можно"]} />
      < Category />
      < Product />
      < Footer information = {["Все права защищены © 2015 интернет-магазин AIKEA.BY Беларусь.", "УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом реестре 158299{``}", "Политика конфиденциальности"]} menu = {["Главная | Каталог | Товары в наличии", "кидки | Популярное | Вдохновение", "Доставка | Услуги | Условия", "Контакты | Вставить | Cписок покупок", "Корзина | Личный кабинет | Избранное"]} contact = {["г.Минск", "Ул. Первомайская, Д. 1, Кв. 43", "+ 375 434 847 28 84", "+ 375 448 473 09 48", "ikeaekspress@gmail.com"]} />
    </>
  )
}

export default App
