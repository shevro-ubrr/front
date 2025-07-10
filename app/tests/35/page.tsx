'use client'

import { useEffect, useState } from "react";
import { redirect, RedirectType } from "next/navigation";
import Header from "@/shared/header";
import ProgressBar from "@/shared/ProgressBar";
import TextSelectionPopup from "@/shared/TextSelectionPopup";

type IQuestion = { question_text: string; variants: string[] };

const questions: IQuestion[] = [
    {
        question_text: "Как часто Вы планируете свой бюджет?",
        variants: [
            "Никогда",
            "Редко — иногда составляю план",
            "Регулярно — ежемесячно или чаще",
        ],
    },
    {
        question_text: "Какие финансовые инструменты Вы используете?",
        variants: [
            "Только наличные",
            "Банковские карты и счета",
            "Инвестиционные счета, депозиты, акции",
        ],
    },
    {
        question_text: "Что для Вас важнее при выборе инвестиций?",
        variants: [
            "Максимальная доходность",
            "Низкий риск",
            "Долгосрочная стабильность",
            "Социальная или экологическая ответственность",
        ],
    },
    {
        question_text: "Готовы ли Вы повышать финансовую грамотность?",
        variants: [
            "Нет, меня устраивает мой уровень",
            "Да, иногда читаю статьи и смотрю видео",
            "Активно обучаюсь и применяю знания на практике",
        ],
    },
];

export default function EarlyRetirementGuide() {
    const [question, setQuestion] = useState<IQuestion>();
    const [step, setStep] = useState(0);
    const [questionResult, setQuestionResult] = useState<string[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const addQuestionResult = (answer: string) => {
        setQuestionResult((before) => [...before, answer]);
        setSelectedAnswer(null);
        if (step + 1 === questions.length) {
            onSubmit();
            return;
        }
        setStep((step) => step + 1);
    };

    const goToPreviousQuestion = () => {
        if (step > 0) {
            setStep((step) => step - 1);
            setSelectedAnswer(questionResult[step - 1]);
            setQuestionResult((before) => before.slice(0, -1));
        }
    };

    const onSubmit = () => {
        fetch("https://guidesai.ru/finance-test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(questionResult),
        });
        redirect("/tests", RedirectType.replace);
    };

    useEffect(() => {
        setQuestion(questions[step]);
        if (step < questionResult.length) {
            setSelectedAnswer(questionResult[step]);
        } else {
            setSelectedAnswer(null);
        }
    }, [step]);

    useEffect(() => {
        fetch("https://guidesai.ru/set-cookie", {
            method: "GET",
            credentials: "include",
        });
    }, []);

    if (!question) {
        return <>Загрузка...</>;
    }

    return (
        <main className="flex flex-col items-center w-full h-full bg-gray-50">
            <Header/>
            <TextSelectionPopup />

            {/* УБРИР стиль - синий заголовок с логотипом */}
            <div className="w-full bg-ubrir-red py-6 mb-8">
                <div className="container mx-auto px-4">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold text-[var(--ubrir-red)]">
                            Финансовая свобода: выход на пенсию в 35 лет
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl">
                {/* Введение */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-ubrir-red">
                    <h2 className="text-2xl font-semibold text-ubrir-red mb-4">
                        Финансовая независимость — это реально
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Движение FIRE (Financial Independence, Retire Early) набирает популярность среди клиентов УБРИР.
                        Наши эксперты подготовили детальный план, как достичь финансовой свободы к 35 годам.
                    </p>
                    <div className="bg-ubrir-light-red p-4 rounded">
                        <p className="font-medium">
                             <span className="text-ubrir-red">Экспертное мнение:</span> При грамотном инвестировании
                            и финансовой дисциплине выход на пенсию в 35 лет возможен при доходе от 100 000 ₽/мес.
                        </p>
                    </div>
                </section>

                {/* Теория */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-ubrir-red mb-4">
                        Основы финансовой независимости
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Карточка 1 */}
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-medium text-ubrir-red mb-2">
                                <span className="bg-ubrir-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">1</span>
                                Сила сложных процентов
                            </h3>
                            <p className="text-gray-700 mb-3">
                                Инвестируя 50 000 ₽ ежемесячно под 10% годовых, через 15 лет вы получите:
                            </p>
                            <div className="bg-ubrir-light-red p-3 rounded text-center font-bold text-ubrir-red">
                                ≈ 20 000 000 ₽
                            </div>
                        </div>

                        {/* Карточка 2 */}
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-medium text-ubrir-red mb-2">
                                <span className="bg-ubrir-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">2</span>
                                Правило 4%
                            </h3>
                            <p className="text-gray-700 mb-3">
                                Снимая 4% от капитала ежегодно, вы не исчерпаете средства за 30+ лет.
                            </p>
                            <div className="bg-ubrir-light-red p-3 rounded text-center font-bold text-ubrir-red">
                                25 000 000 ₽ → 100 000 ₽/мес
                            </div>
                        </div>
                    </div>
                </section>

                {/* Практика */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-ubrir-red mb-4">
                        План действий от УБРИР
                    </h2>

                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="bg-ubrir-red text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                                1
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">Определите цель</h3>
                                <p className="text-gray-700">
                                    Рассчитайте ежемесячные расходы и умножьте на 300 (25 лет × 12 месяцев).
                                </p>
                                <div className="mt-2 p-3 bg-gray-100 rounded">
                                    <p className="font-medium text-ubrir-red">Пример расчета:</p>
                                    <p>50 000 ₽/мес × 300 = 15 000 000 ₽</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-ubrir-red text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                                2
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">Оптимизируйте бюджет</h3>
                                <p className="text-gray-700">
                                    Используйте мобильное приложение УБРИР для анализа расходов.
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                                    <li>Сократите ненужные подписки</li>
                                    <li>Рефинансируйте кредиты</li>
                                    <li>Используйте кэшбэк до 10%</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-ubrir-red text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                                3
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">Инвестируйте регулярно</h3>
                                <p className="text-gray-700">
                                    Открывайте ИИС в УБРИР и получайте налоговый вычет 13%.
                                </p>
                                <div className="mt-2 grid grid-cols-2 gap-2">
                                    <div className="border p-2 rounded text-center">
                                        <div className="font-medium text-ubrir-red">ETF</div>
                                        <div className="text-sm">Доходность 8-12%</div>
                                    </div>
                                    <div className="border p-2 rounded text-center">
                                        <div className="font-medium text-ubrir-red">Облигации</div>
                                        <div className="text-sm">Доходность 6-9%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Калькулятор */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-ubrir-red mb-4">
                        Калькулятор финансовой свободы
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Ежемесячные расходы (₽)</label>
                                <input
                                    type="number"
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-ubrir-red focus:border-transparent"
                                    placeholder="50 000"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Ежемесячные инвестиции (₽)</label>
                                <input
                                    type="number"
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-ubrir-red focus:border-transparent"
                                    placeholder="30 000"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Ожидаемая доходность (% годовых)</label>
                                <input
                                    type="number"
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-ubrir-red focus:border-transparent"
                                    placeholder="10"
                                />
                            </div>
                        </div>
                        <div className="bg-ubrir-light-red p-4 rounded flex flex-col justify-center">
                            <h3 className="text-lg font-medium text-ubrir-red mb-2 text-center">
                                Ваш план достижения FIRE
                            </h3>
                            <div className="text-center mb-4">
                                <div className="text-3xl font-bold text-ubrir-red">12 лет</div>
                                <div className="text-gray-600">до финансовой свободы</div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Необходимый капитал:</span>
                                    <span className="font-medium">15 000 000 ₽</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Накопите за год:</span>
                                    <span className="font-medium">420 000 ₽</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>С учетом сложного %:</span>
                                    <span className="font-medium">≈ 9 800 000 ₽</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="w-full mt-4 bg-ubrir-red hover:bg-ubrir-dark-red text-white py-3 px-4 rounded font-medium transition-colors">
                        Получить персональный план от эксперта УБРИР
                    </button>
                </section>

                {/* Тест */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-ubrir-red mb-4">
                        Проверьте свою готовность к FIRE
                    </h2>

                    <div className="px-8 w-full mb-6">
                        <ProgressBar steps={questions.length} currentStep={step}/>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <div className="text-center font-bold text-xl text-gray-800">
                            {question.question_text}
                        </div>

                        <div className="flex flex-col gap-3 w-full max-w-md">
                            {question.variants.map((variant) => (
                                <label
                                    key={variant}
                                    className="flex items-center gap-3 p-3 hover:bg-ubrir-light-red rounded-lg cursor-pointer border border-gray-200 has-[:checked]:border-ubrir-red has-[:checked]:bg-ubrir-light-red transition-colors"
                                >
                                    <input
                                        type="radio"
                                        name="question"
                                        value={variant}
                                        checked={selectedAnswer === variant}
                                        onChange={() => setSelectedAnswer(variant)}
                                        className="h-5 w-5 text-ubrir-red focus:ring-ubrir-red"
                                    />
                                    <span className="flex-1">{variant}</span>
                                </label>
                            ))}
                        </div>

                        <div className="flex gap-4 items-center mt-4">
                            {step > 0 && (
                                <button
                                    onClick={goToPreviousQuestion}
                                    className="p-2 text-gray-600 hover:text-ubrir-red rounded-full hover:bg-gray-100"
                                    aria-label="Назад"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                                    </svg>
                                </button>
                            )}
                            <button
                                className={`px-6 py-3 rounded-lg font-medium ${
                                    selectedAnswer
                                        ? "bg-ubrir-red hover:bg-ubrir-dark-red text-white"
                                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                } transition-colors`}
                                disabled={!selectedAnswer}
                                onClick={() => selectedAnswer && addQuestionResult(selectedAnswer)}
                            >
                                {step + 1 === questions.length ? "Получить результат" : "Следующий вопрос"}
                            </button>
                        </div>
                    </div>
                </section>

                {/* Контакты */}
                <section className="bg-ubrir-red rounded-lg shadow-md p-6 text-white">
                    <h2 className="text-2xl font-semibold mb-4">
                        Персональное сопровождение от УБРИР
                    </h2>
                    <p className="mb-4">
                        Наши финансовые советники помогут составить индивидуальный план достижения
                        финансовой свободы с учетом ваших возможностей и целей.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-medium mb-2">Контакты</h3>
                            <p>Телефон: <a href="tel:+78002001234" className="underline">8 800 200-12-34</a></p>
                            <p>Email: <a href="mailto:fire@ubrir.ru" className="underline">fire@ubrir.ru</a></p>
                        </div>
                        <div>
                            <h3 className="font-medium mb-2">Офисы</h3>
                            <p>Более 200 отделений по всей России</p>
                            <button className="mt-2 bg-white text-ubrir-red px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
                                Найти ближайший офис
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}


