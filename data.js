/*
  ЗМІСТ ПРЕЗЕНТАЦІЇ ЛР № 6 — тільки текст. Дизайн у style.css, логіка в app.js.

  Як заповнити кроки:
    steps: { t: 'текст кроку зі звіту', f: номер рисунка (assets/fig-NN.png) }
    Порожній t показує на слайді підказку «Вставте текст кроку зі звіту».
    Слово «Solved» у тексті кроку показує штамп «Solved» на скріншоті.
    У тексті можна використовувати <code>...</code> для шляхів і параметрів.
  weak: яку перевірку мав застосунок (коротко).
  tag:  коротка назва техніки (вгорі слайда).
*/
window.REPORT = {
  meta: {
    num: '06',
    course: 'Безпека веб-додатків',
    lab: 'Лабораторна робота № 6',
    title: ['Unsafe', 'File', 'Upload'],
    brand: 'File/Upload',
    badge: 'Web Security Academy · File Upload · ЛР 06 · ',
    topicLead: 'Уразливості завантаження файлів:',
    topicRest: 'виконання довільного коду через web shell, обходи обмежень типів файлів, path traversal.',
    author: 'Дзяман Наталія',
    group: 'КБ-307',
    teacher: 'Побережник В. О.',
    teacherTitle: 'д.філ., ст. викл. каф. ЗІ',
    org: 'НУ «Львівська політехніка»',
    dept: 'ІКТА · кафедра ЗІ',
    city: 'Львів',
    year: '2026',
    goal: 'Ознайомитися з уразливостями завантаження файлів, навчитися знаходити типові недоліки валідації та обґрунтовано обирати заходи захисту для механізмів завантаження файлів у вебзастосунках.',
    goalEm: 'Ознайомитися',
    tools: ['Burp Suite · Proxy', 'Burp Suite · Repeater', 'Visual Studio Code', 'PortSwigger Web Security Academy'],
    reference: 'https://portswigger.net/web-security/file-upload'
  },

  captions: {
    12: 'Завдання виконано', 21: 'Завдання виконано', 28: 'Завдання виконано', 35: 'Завдання виконано'
  },

  labs: [
    {
      uk: 'Web shell без жодних перевірок',
      en: 'Remote code execution via web shell upload',
      tag: 'Web shell · RCE',
      weak: 'Перевірки типу й розширення відсутні',
      url: 'https://portswigger.net/web-security/file-upload/lab-file-upload-remote-code-execution-via-web-shell-upload',
      steps: [
        { t: '', f: 1 }, { t: '', f: 2 }, { t: '', f: 3 }, { t: '', f: 4 },
        { t: '', f: 5 }, { t: '', f: 6 }, { t: '', f: 7 }, { t: '', f: 8 },
        { t: '', f: 9 }, { t: '', f: 10 }, { t: '', f: 11 },
        { t: 'Завдання успішно виконано — стенд позначено як «Solved».', f: 12 }
      ]
    },
    {
      uk: 'Обхід обмеження Content-Type',
      en: 'Web shell upload via Content-Type restriction bypass',
      tag: 'Content-Type bypass',
      weak: 'Сервер довіряє заголовку Content-Type від клієнта',
      url: 'https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-content-type-restriction-bypass',
      steps: [
        { t: '', f: 13 }, { t: '', f: 14 }, { t: '', f: 15 }, { t: '', f: 16 },
        { t: '', f: 17 }, { t: '', f: 18 }, { t: '', f: 19 }, { t: '', f: 20 },
        { t: 'Завдання успішно виконано — стенд позначено як «Solved».', f: 21 }
      ]
    },
    {
      uk: 'Web shell через path traversal',
      en: 'Web shell upload via path traversal',
      tag: 'Path traversal',
      weak: 'Виконання заборонене лише в теці завантажень',
      url: 'https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-path-traversal',
      steps: [
        { t: '', f: 22 }, { t: '', f: 23 }, { t: '', f: 24 }, { t: '', f: 25 },
        { t: '', f: 26 }, { t: '', f: 27 },
        { t: 'Завдання успішно виконано — стенд позначено як «Solved».', f: 28 }
      ]
    },
    {
      uk: 'Обхід чорного списку розширень',
      en: 'Web shell upload via extension blacklist bypass',
      tag: 'Blacklist bypass',
      weak: 'Чорний список розширень замість білого',
      url: 'https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-extension-blacklist-bypass',
      steps: [
        { t: '', f: 29 }, { t: '', f: 30 }, { t: '', f: 31 }, { t: '', f: 32 },
        { t: '', f: 33 }, { t: '', f: 34 },
        { t: 'Завдання успішно виконано — стенд позначено як «Solved».', f: 35 }
      ]
    }
  ],

  conclusions: {
    intro: ['Захист завантаження файлів має бути комплексним:', 'одна перевірка — це не захист.'],
    cards: [
      { h: 'Білий список розширень', p: 'Дозволяти лише явно потрібні типи файлів; чорні списки завжди можна обійти альтернативним розширенням чи конфігурацією сервера.' },
      { h: 'Перевірка реального вмісту', p: 'Тип файлу визначає сервер за вмістом (magic bytes), а не за заголовком Content-Type чи іменем від клієнта.' },
      { h: 'Безпечні імена й шляхи', p: 'Сервер генерує випадкове ім’я та сам обирає теку; параметр filename не впливає на шлях збереження.' },
      { h: 'Ізольоване сховище', p: 'Файли користувачів зберігаються окремо (інший домен чи об’єктне сховище) без права виконання скриптів.' }
    ],
    principles: ['Whitelist розширень', 'Перевірка magic bytes', 'Випадкові імена файлів', 'Без виконання в теці завантажень', 'Ізольоване сховище']
  }
};
