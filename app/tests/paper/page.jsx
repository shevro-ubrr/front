'use client'
import {useState, useEffect} from 'react';
import Head from 'next/head';
import Header from "@/shared/header";
import TextSelectionPopup from "../../../shared/TextSelectionPopup";

export default function SecuritiesGuide() {
    const [currentSection, setCurrentSection] = useState(0);
    const sections = [
        {id: 'intro', title: 'Введение'},
        {id: 'basics', title: 'Основы'},
        {id: 'types', title: 'Виды'},
        {id: 'start', title: 'Старт'},
        {id: 'apps', title: 'Приложения'},
        {id: 'tips', title: 'Советы'},
        {id: 'quiz', title: 'Тест'},
    ];

    // Обновление текущей секции при прокрутке
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            let currentIndex = 0;

            sections.forEach((section, index) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const sectionTop = element.offsetTop;
                    const sectionHeight = element.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                        currentIndex = index;
                    }
                }
            });

            setCurrentSection(currentIndex);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Прокрутка к секции
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Ценные бумаги - твой путь к финансовой свободе! | УБРиР</title>
                <meta name="description" content="Полное руководство по инвестированию в ценные бумаги для начинающих"/>
            </Head>

            <Header/>
            <TextSelectionPopup />

            {/* Навигация с прогресс-баром */}
            <nav className="bg-white sticky top-0 z-50 shadow-md py-4">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="h-2 bg-gray-200 rounded-full mb-3">
                        <div
                            className="h-full bg-[var(--main-red)] rounded-full transition-all duration-500"
                            style={{width: `${(currentSection / (sections.length - 1)) * 100}%`}}
                        ></div>
                    </div>

                    <div className="flex justify-between">
                        {sections.map((section, index) => (
                            <div
                                key={section.id}
                                className={`text-center cursor-pointer px-2 ${index <= currentSection ? 'text-[var(--main-red)] font-medium' : 'text-gray-500'}`}
                                onClick={() => scrollToSection(section.id)}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-1 ${
                                    index <= currentSection ? 'bg-[var(--main-red)] text-white' : 'bg-gray-200'
                                }`}>
                                    {index + 1}
                                </div>
                                <span className="text-xs md:text-sm">{section.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Основное содержимое */}
            <main className="max-w-4xl mx-auto py-8 px-4">
                {/* Введение */}
                <section id="intro" className="mb-16 scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--main-red)] mb-6 pb-2 border-b-2 border-[var(--main-red)]">
                        🚀 Почему это важно для тебя?
                    </h2>
                    <p className="mb-6 text-lg">
                        Привет! 👋 Представь, что у тебя есть возможность не просто копить деньги под подушкой,
                        а заставить их работать на тебя. Звучит как магия? На самом деле это вполне реальная
                        штука под названием "инвестиции в ценные бумаги"!
                    </p>

                    <div className="bg-ubrir-light-red border-l-4 border-[var(--main-red)] p-6 mb-8 rounded-r-lg">
                        <p className="font-bold mb-3">Зачем тебе это нужно? 🤔</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Твои деньги будут расти быстрее инфляции</li>
                            <li>Ты сможешь накопить на мечты (машина, квартира, путешествия)</li>
                            <li>Это пассивный доход - деньги работают, пока ты спишь 😴</li>
                            <li>Раннее начало инвестирования = больше времени для роста капитала</li>
                        </ul>
                    </div>

                    <p className="text-lg">
                        Согласно исследованию Банка России, молодежь от 14 до 22 лет показывает более высокий
                        уровень финансовой грамотности, чем взрослые! 61% молодых людей формируют сбережения
                        и думают о будущем. Это отличная база для начала инвестиций! 📊
                    </p>
                </section>

                {/* Основы */}
                <section id="basics" className="mb-16 scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--main-red)] mb-6 pb-2 border-b-2 border-[var(--main-red)]">
                        🎯 Что такое ценные бумаги?
                    </h2>
                    <p className="mb-6 text-lg">
                        Ценная бумага - это как документ (сейчас чаще электронный), который подтверждает твои
                        права на что-то ценное. Это может быть:
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">📜 Основные виды:</h3>

                    <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-[var(--main-red)]">
                        <h4 className="text-xl font-bold mb-3">Акции 📈</h4>
                        <p className="mb-2"><span className="font-bold">Что это:</span> Доля в компании. Покупая акцию,
                            ты становишься совладельцем бизнеса!</p>
                        <p className="mb-2"><span className="font-bold">Как зарабатываешь:</span> Дивиденды + рост
                            стоимости акции</p>
                        <p className="mb-0">
                            <span className="font-bold">Пример:</span> Купил акцию Сбербанка за 250₽, через год она
                            стоит 300₽ +
                            получил дивиденды 25₽ = прибыль 75₽ (30%!) 🎉
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-[var(--main-red)]">
                        <h4 className="text-xl font-bold mb-3">Облигации 🏦</h4>
                        <p className="mb-2"><span className="font-bold">Что это:</span> Долговая расписка. Ты даешь
                            деньги в долг государству или компании</p>
                        <p className="mb-2"><span className="font-bold">Как зарабатываешь:</span> Регулярные выплаты
                            процентов (купоны)</p>
                        <p className="mb-0">
                            <span className="font-bold">Пример:</span> Купил облигацию на 1000₽ под 8% годовых = каждый
                            год
                            получаешь 80₽ + в конце вернут 1000₽
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full rounded-lg overflow-hidden shadow-md">
                            <thead>
                            <tr className="bg-[var(--main-red)] text-white">
                                <th className="py-3 px-4 text-left">Характеристика</th>
                                <th className="py-3 px-4 text-left">Акции 📈</th>
                                <th className="py-3 px-4 text-left">Облигации 🏦</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white even:bg-gray-50 hover:bg-gray-100">
                                <td className="py-3 px-4 border-b">Что ты покупаешь</td>
                                <td className="py-3 px-4 border-b">Долю в компании</td>
                                <td className="py-3 px-4 border-b">Долговую расписку</td>
                            </tr>
                            <tr className="bg-white even:bg-gray-50 hover:bg-gray-100">
                                <td className="py-3 px-4 border-b">Потенциальная доходность</td>
                                <td className="py-3 px-4 border-b">Высокая (но непредсказуемая)</td>
                                <td className="py-3 px-4 border-b">Умеренная (но стабильная)</td>
                            </tr>
                            <tr className="bg-white even:bg-gray-50 hover:bg-gray-100">
                                <td className="py-3 px-4 border-b">Риск</td>
                                <td className="py-3 px-4 border-b">Высокий</td>
                                <td className="py-3 px-4 border-b">Низкий-средний</td>
                            </tr>
                            <tr className="bg-white even:bg-gray-50 hover:bg-gray-100">
                                <td className="py-3 px-4 border-b">Срок</td>
                                <td className="py-3 px-4 border-b">Бессрочно</td>
                                <td className="py-3 px-4 border-b">Фиксированный</td>
                            </tr>
                            <tr className="bg-white even:bg-gray-50 hover:bg-gray-100">
                                <td className="py-3 px-4">Доход</td>
                                <td className="py-3 px-4">Дивиденды + рост цены</td>
                                <td className="py-3 px-4">Купонные выплаты</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Виды */}
                <section id="types" className="mb-16 scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--main-red)] mb-6 pb-2 border-b-2 border-[var(--main-red)]">
                        🎪 Разбираем подробнее
                    </h2>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">🏢 Акции - стань совладельцем бизнеса!</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                            <h4 className="text-lg font-bold mb-3 text-green-600">✅ Плюсы акций</h4>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Потенциально высокая доходность</li>
                                <li>Дивиденды (твоя доля прибыли)</li>
                                <li>Право голоса в компании</li>
                                <li>Ликвидность (легко продать)</li>
                                <li>Защита от инфляции</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
                            <h4 className="text-lg font-bold mb-3 text-red-600">❌ Минусы акций</h4>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Высокая волатильность (цена скачет)</li>
                                <li>Можешь потерять деньги</li>
                                <li>Нужно изучать компании</li>
                                <li>Эмоциональные качели</li>
                                <li>Дивиденды не гарантированы</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-ubrir-light-red border-l-4 border-[var(--main-red)] p-6 mb-8 rounded-r-lg">
                        <p className="font-bold mb-2">Крутой факт! 🤯</p>
                        <p>
                            Если бы ты купил акции Apple в 2010 году на $1000, то к 2020 году они стоили бы около
                            $10000!
                            Это рост в 10 раз за 10 лет!
                        </p>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Облигации - стабильность прежде всего</h3>
                    <p className="mb-6">
                        Облигации - это как выдать кредит, но не другу, а серьезной организации. Более безопасно и
                        предсказуемо, чем акции.
                    </p>

                    <h4 className="font-bold mb-4">Виды облигаций:</h4>

                    <div className="bg-white rounded-xl shadow-md p-6 mb-6 border-l-4 border-[var(--main-red)]">
                        <h4 className="text-lg font-bold mb-2">ОФЗ (Облигации федерального займа) 🇷🇺</h4>
                        <p className="mb-4">Самые надежные! Выпускает государство. Доходность 5-10% годовых.</p>
                        <div className="flex items-center gap-4">
                            <span className="font-medium">Риск:</span>
                            <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-1/3"></div>
                            </div>
                            <span>Низкий</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-[var(--main-red)]">
                        <h4 className="text-lg font-bold mb-2">Корпоративные облигации 🏢</h4>
                        <p className="mb-4">Выпускают компании. Доходность выше, но риск тоже больше.</p>
                        <div className="flex items-center gap-4">
                            <span className="font-medium">Риск:</span>
                            <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-500 w-2/3"></div>
                            </div>
                            <span>Средний</span>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                        <p className="font-bold mb-2">Важно понимать!</p>
                        <p>
                            Правило "риск-доходность": чем выше потенциальная прибыль, тем больше риск потерять деньги.
                            Акции могут принести 20-30% в год, но могут и упасть на 50%. Облигации дают 5-10%,
                            но редко теряют в цене.
                        </p>
                    </div>
                </section>

                {/* Старт */}
                <section id="start" className="mb-16 scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--main-red)] mb-6 pb-2 border-b-2 border-[var(--main-red)]">
                        🚀 Как начать инвестировать?
                    </h2>

                    <div className="bg-ubrir-light-red border-l-4 border-[var(--main-red)] p-6 mb-8 rounded-r-lg">
                        <p className="font-bold mb-2">Хорошие новости! 🎉</p>
                        <p>
                            С 14 лет ты можешь открыть брокерский счет (с согласия родителей) и начать инвестировать!
                            Минимальная сумма - от 1000 рублей.
                        </p>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Пошаговый план:</h3>

                    {[
                        {
                            number: 1, title: "Создай финансовую подушку 💰",
                            text: "Отложи 3-6 месячных доходов на 'черный день'. Инвестируй только свободные деньги!"
                        },
                        {
                            number: 2, title: "Выбери брокера 🏦",
                            text: "Это посредник между тобой и биржей. Популярные: Тинькофф, Сбер, ВТБ, Альфа-Банк."
                        },
                        {
                            number: 3, title: "Открой брокерский счет 📱",
                            text: "Обычно это можно сделать онлайн. Понадобится паспорт родителя и твое согласие."
                        },
                        {
                            number: 4, title: "Начни с простого 🎯",
                            text: "Первые покупки: ОФЗ или акции 'голубых фишек' (Сбербанк, Газпром, Яндекс)."
                        },
                        {
                            number: 5, title: "Изучай и развивайся 📚",
                            text: "Читай новости компаний, изучай отчеты, следи за экономикой. Знания = деньги!"
                        },
                    ].map((step, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md p-6 mb-6 border-l-4 border-[var(--main-red)]">
                            <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                            <p>{step.text}</p>
                        </div>
                    ))}

                    <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Стратегии для новичков:</h3>

                    <div className="bg-ubrir-light-red border-l-4 border-[var(--main-red)] p-6 rounded-r-lg">
                        <p className="font-bold mb-2">Правило 50/30/20 для инвестиций:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>50% - надежные инструменты (ОФЗ, акции "голубых фишек")</li>
                            <li>30% - акции перспективных компаний</li>
                            <li>20% - эксперименты (новые компании, отрасли)</li>
                        </ul>
                    </div>
                </section>

                {/* Приложения */}
                <section id="apps" className="mb-16 scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--main-red)] mb-6 pb-2 border-b-2 border-[var(--main-red)]">
                        📱 Лучшие приложения для инвестиций
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {[
                            {
                                icon: "🟡", name: "Тинькофф Инвестиции",
                                pros: "Крутой интерфейс, много обучающих материалов, социальная сеть инвесторов 'Пульс'",
                                commissions: "От 0,05% до 0,3%",
                                feature: "Можно копировать сделки успешных инвесторов",
                                convenience: 95
                            },
                            {
                                icon: "🟢", name: "СберИнвестор",
                                pros: "Надежность Сбербанка, интеграция с основным банковским приложением",
                                commissions: "От 0,05% до 0,3%",
                                feature: "Готовые инвестиционные портфели для начинающих",
                                convenience: 85
                            },
                            {
                                icon: "🔵", name: "ВТБ Инвестиции",
                                pros: "Простота использования, хорошая аналитика",
                                commissions: "От 0,1% до 0,3%",
                                feature: "Инвестиционные идеи от аналитиков банка",
                                convenience: 80
                            },
                        ].map((app, index) => (
                            <div key={index}
                                 className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="text-5xl mb-4 text-center">{app.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-center">{app.name}</h3>
                                <p className="mb-2"><span className="font-bold">Плюсы:</span> {app.pros}</p>
                                <p className="mb-2"><span className="font-bold">Комиссии:</span> {app.commissions}</p>
                                <p className="mb-4"><span className="font-bold">Фишка:</span> {app.feature}</p>

                                <div className="flex items-center gap-3">
                                    <span className="font-medium">Удобство:</span>
                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-[var(--main-red)] rounded-full"
                                            style={{width: `${app.convenience}%`}}
                                        ></div>
                                    </div>
                                    <span className="text-sm">
                    {app.convenience > 90 ? 'Отлично!' : app.convenience > 80 ? 'Хорошо!' : 'Нормально'}
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                        <p className="font-bold mb-2">Перед выбором брокера проверь:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>✅ Лицензию ЦБ РФ</li>
                            <li>✅ Размер комиссий</li>
                            <li>✅ Удобство приложения</li>
                            <li>✅ Обучающие материалы</li>
                            <li>✅ Техподдержку</li>
                        </ul>
                    </div>
                </section>

                {/* Советы */}
                <section id="tips" className="mb-16 scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--main-red)] mb-6 pb-2 border-b-2 border-[var(--main-red)]">
                        🎯 Лайфхаки для начинающего инвестора
                    </h2>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">💰 Как найти деньги на инвестиции:</h3>

                    {[
                        {
                            title: "Метод 'Округления' 🪙",
                            text: "Настрой автоматическое округление покупок до 50₽. Купил шоколадку за 43₽ → 7₽ идут в инвестиции. За месяц накопится 200-500₽!"
                        },
                        {
                            title: "Кэшбэк в инвестиции 💳",
                            text: "Весь кэшбэк с карты направляй на покупку ценных бумаг. Будешь удивлен, как быстро набирается сумма!"
                        },
                        {
                            title: "Челлендж '100 рублей в день' 📅",
                            text: "Каждый день откладывай 100₽ на инвестиции. За месяц = 3000₽, за год = 36000₽ + доходность!"
                        },
                    ].map((tip, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md p-6 mb-6 border-l-4 border-[var(--main-red)]">
                            <h4 className="text-lg font-bold mb-2">{tip.title}</h4>
                            <p>{tip.text}</p>
                        </div>
                    ))}

                    <h3 className="text-xl font-bold text-gray-800 mb-4">🧠 Психология инвестора:</h3>

                    <div className="bg-ubrir-light-red border-l-4 border-[var(--main-red)] p-6 mb-6 rounded-r-lg">
                        <p className="font-bold mb-3">Главные правила успешного инвестора:</p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-xl mr-2">🎯</span>
                                <span><strong>Диверсификация:</strong> Не клади все яйца в одну корзину</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">⏰</span>
                                <span><strong>Долгосрочность:</strong> Лучшие результаты - у тех, кто держит акции годами</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">📊</span>
                                <span><strong>Регулярность:</strong> Покупай понемногу, но постоянно</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">🧘</span>
                                <span><strong>Спокойствие:</strong> Не паникуй при падениях рынка</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">📚</span>
                                <span><strong>Обучение:</strong> Изучай компании перед покупкой их акций</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6 rounded-r-lg">
                        <p className="font-bold mb-3">Чего НЕ делать:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>❌ Не инвестируй последние деньги</li>
                            <li>❌ Не покупай акции по "горячим" советам из соцсетей</li>
                            <li>❌ Не пытайся угадать дно рынка</li>
                            <li>❌ Не продавай в панике при падении</li>
                            <li>❌ Не инвестируй то, что не понимаешь</li>
                        </ul>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">📈 Примеры успешных стратегий:</h3>

                    {[
                        {
                            title: "'Усреднение позиций' (DCA) 📊",
                            text: "Покупай одну и ту же акцию регулярно (например, каждый месяц на 2000₽), независимо от цены. Это сглаживает волатильность!"
                        },
                        {
                            title: "'Портфель лентяя' 😴",
                            text: "50% ОФЗ + 50% акции крупных компаний. Перебалансируй раз в год. Простота и эффективность!"
                        },
                    ].map((strategy, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md p-6 mb-6 border-l-4 border-[var(--main-red)]">
                            <h4 className="text-lg font-bold mb-2">{strategy.title}</h4>
                            <p>{strategy.text}</p>
                        </div>
                    ))}
                </section>

                {/* Тест */}
                <section id="quiz" className="mb-16 scroll-mt-24">
                    <div className="bg-gradient-to-r from-[var(--main-red)] to-ubrir-dark-red text-white rounded-2xl p-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">🧠 Тест: готов ли ты стать инвестором?</h2>

                        <div className="bg-white/20 rounded-xl p-6 mb-6">
                            <p className="font-bold mb-3">1. Ты нашел 10000₽. Что делаешь?</p>
                            <p className="mb-2">а) Трачу на новый айфон 📱</p>
                            <p className="mb-2">б) Кладу в копилку 🏦</p>
                            <p className="mb-4">в) Изучаю возможности инвестирования 📈</p>
                            <p className="text-sm italic">Правильный ответ: в) - но сначала убедись, что у тебя есть
                                финансовая подушка!</p>
                        </div>

                        <div className="bg-white/20 rounded-xl p-6 mb-6">
                            <p className="font-bold mb-3">2. Акции твоей компании упали на 20%. Твои действия?</p>
                            <p className="mb-2">а) Паникую и продаю все! 😱</p>
                            <p className="mb-2">б) Изучаю причины падения 🔍</p>
                            <p className="mb-4">в) Докупаю еще по низкой цене 💰</p>
                            <p className="text-sm italic">Правильный ответ: б) - всегда анализируй ситуацию перед
                                решением!</p>
                        </div>

                        <div className="bg-white/20 rounded-xl p-6 mb-6">
                            <p className="font-bold mb-3">3. Что важнее при выборе акций?</p>
                            <p className="mb-2">а) Красивое название компании ✨</p>
                            <p className="mb-2">б) Совет друга 👥</p>
                            <p className="mb-4">в) Финансовые показатели и перспективы 📊</p>
                            <p className="text-sm italic">Правильный ответ: в) - инвестируй только в то, что
                                понимаешь!</p>
                        </div>

                        <div className="bg-white/20 rounded-xl p-6">
                            <p className="font-bold mb-2">🎓 Результаты:</p>
                            <p className="mb-1">3 правильных ответа - ты готов стать инвестором! 🚀</p>
                            <p className="mb-1">2 правильных - изучи еще немного материала 📚</p>
                            <p>1 и меньше - начни с основ финансовой грамотности 💡</p>
                        </div>
                    </div>
                </section>

                {/* Заключение */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--main-red)] mb-6 pb-2 border-b-2 border-[var(--main-red)]">
                        🎯 Заключение
                    </h2>
                    <p className="mb-6 text-lg">
                        Поздравляю! 🎉 Теперь ты знаешь основы мира ценных бумаг. Помни: инвестирование - это марафон,
                        а не спринт. Чем раньше начнешь, тем больше времени у твоих денег на рост.
                    </p>

                    <div className="bg-ubrir-light-red border-l-4 border-[var(--main-red)] p-6 mb-6 rounded-r-lg">
                        <p className="font-bold mb-3">Твой план действий:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>✅ Создай финансовую подушку</li>
                            <li>✅ Изучи брокеров и выбери подходящего</li>
                            <li>✅ Открой брокерский счет</li>
                            <li>✅ Начни с малых сумм и простых инструментов</li>
                            <li>✅ Постоянно учись и развивайся</li>
                            <li>✅ Не бойся ошибок - они часть обучения!</li>
                        </ul>
                    </div>

                    <p className="mb-6 text-lg">
                        Инвестирование в ценные бумаги - это не только способ заработать деньги, но и возможность
                        понять,
                        как устроена экономика, научиться анализировать информацию и принимать взвешенные решения.
                        Эти навыки пригодятся тебе во всех сферах жизни! 🌟
                    </p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                        <p className="font-bold mb-2">Последний совет:</p>
                        <p>
                            Инвестируй только те деньги, которые можешь позволить себе потерять. Ценные бумаги - это
                            всегда риск,
                            но при правильном подходе этот риск оправдан потенциальной доходностью!
                        </p>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 text-white py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xl mb-4">💡 Помни: знания - твой главный актив! Удачных инвестиций! 🚀</p>
                    <p className="text-gray-400 italic">
                        Данная статья носит образовательный характер и не является инвестиционной рекомендацией
                    </p>
                </div>
            </footer>
        </div>
    );
}