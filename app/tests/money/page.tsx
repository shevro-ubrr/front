'use client'

import Header from "@/shared/header";
import TextSelectionPopup from "@/shared/TextSelectionPopup";


export default function BudgetGuide() {

    return (
        <main className="flex flex-col items-center w-full h-full bg-gray-50">
            <Header/>
            <TextSelectionPopup />

            {/* Красный заголовок с логотипом */}
            <div className="w-full bg-[var(--main-red)] py-6 mb-8">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center">
                        <h1 className="text-3xl font-bold text-white text-center">
                            💰 Деньги не игрушка (или все-таки игрушка?)
                        </h1>
                    </div>
                    <p className="text-white text-center italic mt-2">
                        Гид по личному и семейному бюджету для тех, кто уже почти взрослый
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl">

                {/* Предупреждение */}
                <div className="bg-ubrir-light-red border-l-4 border-ubrir-red p-4 mb-8 rounded-r">
                    <p className="font-medium">
                        <span className="text-ubrir-red">Внимание!</span> Эта статья не про то, как стать миллионером к
                        18 годам.
                        Это про то, как не остаться без денег на пиццу в середине месяца 🍕
                    </p>
                </div>

                {/* Введение */}
                <section id="intro" className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-ubrir-red">
                    <h2 className="text-2xl font-semibold text-ubrir-red mb-4">
                        🎯 Зачем вообще нужен бюджет?
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Представьте: вы получили карманные деньги или зарплату с подработки.
                        Через неделю в кошельке пустота, а до следующего финансирования еще две недели.
                        Знакомо? Именно для этого и нужен бюджет!
                    </p>
                    <p className="mb-4">
                        <strong>Бюджет</strong> — это не скучная таблица с цифрами.
                        Это ваш финансовый GPS, который поможет добраться до цели, не заблудившись в море импульсивных
                        покупок.
                    </p>

                    <div className="bg-ubrir-light-red p-4 rounded mt-4">
                        <p className="font-medium">
                            <span className="text-ubrir-red">Фишка:</span> Люди, которые ведут бюджет, в среднем
                            откладывают на 15-20% больше денег,
                            чем те, кто этого не делает. Это не магия — это планирование!
                        </p>
                    </div>
                </section>

                {/* Личный бюджет */}
                <section id="personal" className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-ubrir-red mb-4 border-b-2 border-ubrir-red pb-3">
                        👤 Личный бюджет: твои деньги — твои правила
                    </h2>

                    <div className="flex flex-col gap-6">
                        {/* Доходы */}
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-medium text-ubrir-red mb-2">
                                <span
                                    className="bg-ubrir-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">1</span>
                                Откуда берутся деньги?
                            </h3>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li><strong>Карманные деньги</strong> от родителей</li>
                                <li><strong>Подработка</strong> (курьер, репетиторство, фриланс)</li>
                                <li><strong>Подарки</strong> на день рождения и праздники</li>
                                <li><strong>Стипендия</strong> (если учитесь в колледже)</li>
                                <li><strong>Продажа ненужных вещей</strong></li>
                            </ul>
                        </div>

                        {/* Расходы */}
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-medium text-ubrir-red mb-2">
                                <span
                                    className="bg-ubrir-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">2</span>
                                Куда деньги исчезают?
                            </h3>

                            <div className="overflow-x-auto mt-3">
                                <table className="min-w-full border-collapse border border-gray-300">
                                    <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 p-2 text-left">Категория</th>
                                        <th className="border border-gray-300 p-2 text-left">Примеры</th>
                                        <th className="border border-gray-300 p-2 text-left">Приоритет</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="border border-gray-300 p-2"><strong>Обязательные</strong></td>
                                        <td className="border border-gray-300 p-2">Проезд, обеды, школьные
                                            принадлежности
                                        </td>
                                        <td className="border border-gray-300 p-2">🔥 Высокий</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 p-2"><strong>Важные</strong></td>
                                        <td className="border border-gray-300 p-2">Одежда, книги, курсы</td>
                                        <td className="border border-gray-300 p-2">⚡ Средний</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2"><strong>Желательные</strong></td>
                                        <td className="border border-gray-300 p-2">Кино, кафе, игры</td>
                                        <td className="border border-gray-300 p-2">⭐ Низкий</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Правило 50/30/20 */}
                    <div className="mt-8">
                        <h3 className="text-xl font-medium text-ubrir-red mb-3">
                            <span
                                className="bg-ubrir-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">3</span>
                            Правило 50/30/20 для подростков
                        </h3>
                        <p className="mb-4">Классическая формула распределения денег:</p>

                        <div className="bg-gray-100 p-4 rounded-lg mb-4 font-mono">
                            <p>📊 50% — на необходимое (еда, транспорт, учеба)</p>
                            <p>🎮 30% — на развлечения и хобби</p>
                            <p>💎 20% — на накопления и цели</p>
                        </div>

                        <div className="bg-ubrir-light-red p-4 rounded">
                            <p className="font-medium">
                                <span className="text-ubrir-red">Пример:</span> Если у вас есть 10,000 рублей в месяц,
                                то:
                            </p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>5,000 руб. — на обязательные расходы</li>
                                <li>3,000 руб. — на развлечения</li>
                                <li>2,000 руб. — откладываем на мечту</li>
                            </ul>
                        </div>
                    </div>

                    {/* Финансовая цель */}
                    <div className="mt-8">
                        <h3 className="text-xl font-medium text-ubrir-red mb-3">
                            <span
                                className="bg-ubrir-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">4</span>
                            Как поставить финансовую цель?
                        </h3>
                        <p className="mb-4">Цель должна быть <strong>SMART</strong>:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>S</strong>pecific (конкретная) — не хочу денег, а хочу новый iPhone</li>
                            <li><strong>M</strong>easurable (измеримая) — точная сумма, например 80,000 рублей</li>
                            <li><strong>A</strong>chievable (достижимая) — реально ли накопить эту сумму?</li>
                            <li><strong>R</strong>elevant (важная) — действительно ли вам это нужно?</li>
                            <li><strong>T</strong>ime-bound (ограниченная по времени) — к какой дате?</li>
                        </ul>

                        <div className="bg-ubrir-light-red p-4 rounded">
                            <p className="font-medium">
                                <span className="text-ubrir-red">Лайфхак:</span> Разделите большую цель на маленькие
                                этапы.
                                Хотите накопить 60,000 на ноутбук за год? Это всего 5,000 в месяц или 167 рублей в день!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Семейный бюджет */}
                <section id="family" className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-ubrir-red mb-4 border-b-2 border-ubrir-red pb-3">
                        🏠 Семейный бюджет: командная работа
                    </h2>

                    <p className="mb-4">
                        Семейный бюджет — это как футбольная команда. Каждый играет свою роль,
                        но цель общая — победа (в данном случае, финансовое благополучие).
                    </p>

                    <div className="mt-6">
                        <h3 className="text-xl font-medium text-ubrir-red mb-3">
                            <span
                                className="bg-ubrir-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">1</span>
                            Виды семейного бюджета
                        </h3>

                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full border-collapse border border-gray-300">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 p-2 text-left">Тип</th>
                                    <th className="border border-gray-300 p-2 text-left">Как работает</th>
                                    <th className="border border-gray-300 p-2 text-left">Плюсы</th>
                                    <th className="border border-gray-300 p-2 text-left">Минусы</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border border-gray-300 p-2"><strong>Совместный</strong></td>
                                    <td className="border border-gray-300 p-2">Все деньги в общий котел</td>
                                    <td className="border border-gray-300 p-2">Прозрачность, взаимопомощь</td>
                                    <td className="border border-gray-300 p-2">Нужно согласовывать траты</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-gray-300 p-2"><strong>Раздельный</strong></td>
                                    <td className="border border-gray-300 p-2">Каждый тратит свои деньги</td>
                                    <td className="border border-gray-300 p-2">Финансовая независимость</td>
                                    <td className="border border-gray-300 p-2">Сложно планировать общие цели</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2"><strong>Смешанный</strong></td>
                                    <td className="border border-gray-300 p-2">Общие расходы + личные деньги</td>
                                    <td className="border border-gray-300 p-2">Баланс свободы и ответственности</td>
                                    <td className="border border-gray-300 p-2">Нужно договариваться о правилах</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <div>
                            <h3 className="text-xl font-medium text-ubrir-red mb-3">
                                <span
                                    className="bg-ubrir-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">2</span>
                                Как подростку участвовать?
                            </h3>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Изучите семейные доходы и расходы</strong></li>
                                <li><strong>Предложите свою помощь</strong></li>
                                <li><strong>Берите ответственность</strong></li>
                                <li><strong>Учитесь на примере</strong></li>
                            </ol>

                            <div className="bg-ubrir-light-red p-4 rounded mt-4">
                                <p className="font-medium">
                                    <span className="text-ubrir-red">Важно!</span> Не стоит вмешиваться в серьезные
                                    финансовые решения семьи без приглашения.
                                    Ваша задача — учиться, а не указывать взрослым, что делать.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-ubrir-red mb-3">
                                <span
                                    className="bg-ubrir-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">3</span>
                                Семейные финансовые цели
                            </h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Отпуск на море летом</li>
                                <li>Ремонт в квартире</li>
                                <li>Покупка автомобиля</li>
                                <li>Финансовая подушка безопасности</li>
                                <li>Накопления на ваше образование</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Приложения */}
                <section id="apps" className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-ubrir-red mb-4 border-b-2 border-ubrir-red pb-3">
                        📱 Приложения и инструменты
                    </h2>

                    <p className="mb-4">
                        В 2025 году вести бюджет в блокноте — это как писать SMS на кнопочном телефоне.
                        Можно, но зачем?
                    </p>

                    <div className="mt-6">
                        <h3 className="text-xl font-medium text-ubrir-red mb-3">
                            <span
                                className="bg-ubrir-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">1</span>
                            Топ-5 приложений для учета финансов
                        </h3>

                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full border-collapse border border-gray-300">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 p-2 text-left">Приложение</th>
                                    <th className="border border-gray-300 p-2 text-left">Особенности</th>
                                    <th className="border border-gray-300 p-2 text-left">Цена</th>
                                    <th className="border border-gray-300 p-2 text-left">Для кого</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border border-gray-300 p-2"><strong>Дзен-мани</strong></td>
                                    <td className="border border-gray-300 p-2">Автоматическая синхронизация с банками
                                    </td>
                                    <td className="border border-gray-300 p-2">Бесплатно</td>
                                    <td className="border border-gray-300 p-2">Ленивые гении</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-gray-300 p-2"><strong>CoinKeeper</strong></td>
                                    <td className="border border-gray-300 p-2">Красивый интерфейс, звуки монет</td>
                                    <td className="border border-gray-300 p-2">1,299₽ навсегда</td>
                                    <td className="border border-gray-300 p-2">Любители эстетики</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2"><strong>Monefy</strong></td>
                                    <td className="border border-gray-300 p-2">Простота использования</td>
                                    <td className="border border-gray-300 p-2">499₽/год</td>
                                    <td className="border border-gray-300 p-2">Минималисты</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-gray-300 p-2"><strong>Money Flow</strong></td>
                                    <td className="border border-gray-300 p-2">Продвинутая аналитика</td>
                                    <td className="border border-gray-300 p-2">299₽/месяц</td>
                                    <td className="border border-gray-300 p-2">Аналитики</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2"><strong>Excel/Google Sheets</strong></td>
                                    <td className="border border-gray-300 p-2">Полная настройка под себя</td>
                                    <td className="border border-gray-300 p-2">Бесплатно</td>
                                    <td className="border border-gray-300 p-2">Любители покопаться</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium text-ubrir-red mb-3">
                            <span
                                className="bg-ubrir-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">2</span>
                            Базовая структура таблицы бюджета
                        </h3>
                        <p className="mb-4">Если решили использовать Excel или Google Sheets, вот минимальная
                            структура:</p>

                        <div className="bg-gray-100 p-4 rounded-lg mb-4 font-mono">
                            <p>📅 Дата | 💰 Сумма | 📂 Категория | 📝 Комментарий</p>
                            <p>01.03 | -500 | Транспорт | Проездной</p>
                            <p>02.03 | -200 | Еда | Обед в школе</p>
                            <p>03.03 | +5000 | Доход | Карманные деньги</p>
                            <p>04.03 | -1500 | Развлечения | Кино с друзьями</p>
                        </div>

                        <div className="bg-ubrir-light-red p-4 rounded">
                            <p className="font-medium">
                                <span className="text-ubrir-red">Совет:</span> Начните с простого! Не пытайтесь сразу
                                создать сложную систему с 50 категориями.
                                Достаточно 5-7 основных категорий.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Лайфхаки */}
                <section id="tips" className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-ubrir-red mb-4 border-b-2 border-ubrir-red pb-3">
                        🎯 Лайфхаки и секреты экономии
                    </h2>

                    <div className="flex flex-col">
                        <div>
                            <h3 className="text-xl font-medium text-ubrir-red mb-3">
                                <span
                                    className="bg-ubrir-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">1</span>
                                Правило 24 часов
                            </h3>
                            <p className="mb-6">
                                Хотите что-то купить? Подождите сутки. Если желание не прошло — покупайте.
                                Это спасет вас от импульсивных трат.
                            </p>

                            <h3 className="text-xl font-medium text-ubrir-red mb-3">
                                <span
                                    className="bg-ubrir-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">2</span>
                                Метод конвертов (цифровая версия)
                            </h3>
                            <p className="mb-4">Создайте виртуальные конверты для разных целей:</p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>🍕 Красный конверт — еда и развлечения</li>
                                <li>🎮 Синий конверт — хобби и игры</li>
                                <li>👕 Зеленый конверт — одежда</li>
                                <li>💎 Золотой конверт — накопления на мечту</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-ubrir-red mb-3">
                                <span
                                    className="bg-ubrir-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">3</span>
                                Экономия для школьников
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="min-w-full border-collapse border border-gray-300">
                                    <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 p-2 text-left">Категория</th>
                                        <th className="border border-gray-300 p-2 text-left">Как сэкономить</th>
                                        <th className="border border-gray-300 p-2 text-left">Экономия</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="border border-gray-300 p-2"><strong>Школьные
                                            принадлежности</strong></td>
                                        <td className="border border-gray-300 p-2">Покупать оптом, использовать
                                            прошлогодние
                                        </td>
                                        <td className="border border-gray-300 p-2">30-50%</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 p-2"><strong>Обеды</strong></td>
                                        <td className="border border-gray-300 p-2">Готовить дома, брать с собой</td>
                                        <td className="border border-gray-300 p-2">50-70%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2"><strong>Развлечения</strong></td>
                                        <td className="border border-gray-300 p-2">Студенческие скидки, акции</td>
                                        <td className="border border-gray-300 p-2">20-40%</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 p-2"><strong>Одежда</strong></td>
                                        <td className="border border-gray-300 p-2">Распродажи, секонд-хенды</td>
                                        <td className="border border-gray-300 p-2">40-80%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2"><strong>Транспорт</strong></td>
                                        <td className="border border-gray-300 p-2">Льготный проездной, велосипед</td>
                                        <td className="border border-gray-300 p-2">30-60%</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="bg-ubrir-light-red p-4 rounded mb-6">
                            <p className="font-medium">
                                <span className="text-ubrir-red">Суперсовет:</span> Ведите дневник трат хотя бы
                                неделю. Записывайте ВСЕ расходы,
                                даже на жвачку. Будете удивлены, куда уходят деньги!
                            </p>
                        </div>

                        <h3 className="text-xl font-medium text-ubrir-red mb-3">
                            <span
                                className="bg-ubrir-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">4</span>
                            Как увеличить доходы?
                        </h3>
                        <p className="mb-4">Легальные способы заработка для старшеклассников:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Репетиторство</strong> младших школьников</li>
                            <li><strong>Фриланс</strong> (дизайн, тексты, переводы)</li>
                            <li><strong>Курьерская работа</strong> (с 16 лет)</li>
                            <li><strong>Помощь соседям</strong> (выгул собак, уборка)</li>
                            <li><strong>Продажа самодельных товаров</strong> (украшения, сладости)</li>
                        </ul>

                        <div className="bg-ubrir-light-red p-4 rounded">
                            <p className="font-medium">
                                <span className="text-ubrir-red">Внимание!</span> Работа не должна мешать учебе.
                                Ваша главная задача — получить образование, а заработок — приятный бонус.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Заключение */}
                <section id="conclusion" className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-ubrir-red mb-4 border-b-2 border-ubrir-red pb-3">
                        🎓 Заключение: деньги — это инструмент, а не цель
                    </h2>

                    <p className="mb-6">
                        Поздравляю! Теперь вы знаете больше о финансах, чем многие взрослые.
                        Но помните: деньги — это не самоцель, а инструмент для достижения ваших мечт и целей.
                    </p>

                    <div className="bg-ubrir-light-red p-4 rounded mb-6">
                        <p className="font-medium"><span className="text-ubrir-red">Главные выводы:</span></p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Бюджет — это не ограничение, а свобода выбора</li>
                            <li>Правило 50/30/20 работает в любом возрасте</li>
                            <li>Лучше начать с простого, чем не начать вообще</li>
                            <li>Экономия — это навык, который развивается с практикой</li>
                            <li>Семейный бюджет — это командная работа</li>
                        </ul>
                    </div>

                    <p className="mb-6">
                        Начните прямо сейчас! Скачайте приложение, создайте таблицу или просто запишите свои доходы и
                        расходы за последнюю неделю.
                        Первый шаг — самый важный.
                    </p>

                    <div className="bg-ubrir-light-red p-4 rounded">
                        <p className="font-medium">
                            <span className="text-ubrir-red">Помните:</span> Финансовая грамотность — это не про то, как
                            стать богатым.
                            Это про то, как не быть бедным и иметь возможность делать то, что вам действительно важно.
                        </p>
                    </div>

                    <p className="mt-6 mb-4 text-center">
                        Удачи вам в мире финансов! Пусть ваши доходы растут быстрее расходов, а мечты сбываются точно в
                        срок 💪
                    </p>
                </section>

                <footer className="text-center text-gray-600 text-sm mt-8 pb-8">
                    <p>Эта статья создана для образовательных целей. Помните: лучший советчик по финансам — это ваш
                        собственный опыт и здравый смысл.</p>
                    <p className="mt-2 italic">Берегите деньги и они будут беречь вас! 💰</p>
                </footer>
            </div>
        </main>
    );
}