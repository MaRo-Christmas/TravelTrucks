# 🚐 TravelTrucks – Campervan Rental App

TravelTrucks — це фронтенд-застосунок для оренди кемперів. Ви можете переглядати каталог автофургонів, фільтрувати їх за зручностями, переглядати деталі та відгуки, а також здійснити бронювання.

## 🛠 Стек технологій

- **React + Vite**
- **React Router DOM**
- **Redux Toolkit + Redux Persist**
- **Axios**
- **SCSS Modules**
- **Formik + Yup**
- **react-hot-toast**

## 🔗 Live demo

➡️ [https://travel-trucks-nine-beta.vercel.app](https://travel-trucks-nine-beta.vercel.app)

## 📦 Встановлення та запуск

> Переконайся, що встановлено **Node.js (версія LTS)**

### 1. Клонувати репозиторій

```bash
git clone https://github.com/MaRo-Christmas/TravelTrucks.git
cd travel-trucks
```

## 2. Встановити залежності

```bash
npm install
```

## 3. Запустити у режимі розробки

```bash
npm run dev
```

## Основні сторінки

- **Домашня сторінка**

  - Містить банер із головним закликом до дії
  - Кнопка “View Now” веде до каталогу

- **Сторінка каталогу**

  - Відображає всі доступні транспортні засоби
  - Реалізована фільтрація за:
    - локацією (текстове поле)
    - типом кузова (вибір одного)
    - зручностями (вибір кількох)
  - Кожну картку можна додати в обране
  - Є кнопка “Load More” для довантаження

- **Сторінка окремого кемпера**
  - Детальний опис кемпера
  - Галерея фото
  - Відгуки користувачів із рейтингами
  - Форма бронювання з нотифікацією при успішній відправці
  - Виведено технічні параметри:
    - `transmission`, `engine`, `AC`, `bathroom`, `kitchen`, `TV`, `radio`, `refrigerator`, `microwave`, `gas`, `water`
    - `form`, `length`, `width`, `height`, `tank`, `consumption`

---

## Маршрутизація

- `/` — Домашня сторінка
- `/catalog` — Сторінка каталогу
- `/catalog/:id` — Сторінка конкретного кемпера
- `*` — Сторінка 404 (Not Found)

---

## Стан додатку

- Реалізовано з використанням **Redux Toolkit**
- Стан включає:
  - Список транспортних засобів
  - Стан фільтрів
  - Список обраних (збережено через `redux-persist`)
- Перед кожним фільтрованим запитом:
  - Попередні результати скидаються
  - Виводиться лише актуальний список згідно фільтрів

---

## Функціональні вимоги

- 🔗 Кнопка “View Now” веде на `/catalog`
- 📍 Фільтрація транспортних засобів:
  - Локація (input)
  - Тип кузова (1 вибір)
  - Зручності (множинний вибір)
- ❤️ Обране:
  - Можна додавати/видаляти транспортні засоби
  - Зберігається в `localStorage`
- 💶 Ціна в UI: формат `€8000.00`
- 🔎 Кнопка “Show more” відкриває сторінку кемпера в **новій вкладці**
- 🔄 Кнопка “Load More” підвантажує наступну сторінку результатів
- ⭐ Відгуки: п’ятизіркова шкала, текстові коментарі
- 📝 Форма бронювання:
  - Імʼя, email, дата, коментар
  - Валідація (Formik + Yup)
  - Нотифікація про успішну відправку (react-hot-toast)
