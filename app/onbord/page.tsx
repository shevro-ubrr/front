'use client'

import {useEffect, useState} from "react";
import {redirect, RedirectType} from 'next/navigation'
import Header from "@/shared/header";
import ProgressBar from "@/shared/ProgressBar";

type IQuestion = { question_text: string, variants: string[] };

const questions = [
    {
        question_text: "Как лучше всего описать Ваш текущий статус?",
        variants: ["Школьник (12–17 лет)", "Студент (18–25 лет)", "Родитель", "Педагог/Тьютор"]
    },
    {
        question_text: "Как Вы оцениваете свой уровень знаний в личных финансах?",
        variants: ["Начальный — знаю базовые термины, но редко применяю", "Средний — умею планировать бюджет и копить", "Продвинутый — инвестирую, оптимизирую налоги, обучаю других"]
    },
    {
        question_text: "Ведёте ли Вы личный или семейный бюджет?",
        variants: ["Нет", "Иногда (раз-два в год)", "Регулярно (ежемесячно)"]
    },
    {
        question_text: "Знакомо ли Вам понятие «сложный процент»",
        variants: ["Не слышал(а)", "Слышал(а), но затрудняюсь объяснить", "Могу чётко объяснить и применяю на практике"]
    }
] as IQuestion[];


export default function OnboardingPage() {
    const [question, setQuestion] = useState<IQuestion>();
    const [step, setStep] = useState(0);
    const [questionResult, setQuestionResult] = useState<string[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const addQuestionResult = (answer: string) => {
        setQuestionResult(before => [...before, answer]);
        setSelectedAnswer(null); // Reset selection for next question
        if (step + 1 == questions.length) {
            onSubmit();
            return;
        }
        setStep(step => step + 1);
    }

    const goToPreviousQuestion = () => {
        if (step > 0) {
            setStep(step => step - 1);
            // Keep the previous answer selected when going back
            setSelectedAnswer(questionResult[step - 1]);
            // Remove the last answer when going back
            setQuestionResult(before => before.slice(0, -1));
        }
    }

    const onSubmit = () => {
        fetch("https://guidesai.ru/onboard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(questionResult),
        });
        redirect("/tests", RedirectType.replace);
    }

    useEffect(() => {
        setQuestion(questions[step]);
        // Reset selected answer when question changes
        if (step < questionResult.length) {
            setSelectedAnswer(questionResult[step]);
        } else {
            setSelectedAnswer(null);
        }
    }, [step])

    useEffect(() => {
        fetch("https://guidesai.ru/set-cookie", {
            method: "GET",
            credentials: "include",
        });
    }, []);

    if (!question) {
        return <>Загрузка</>;
    }

    return (
        <main className="flex flex-col items-center w-full h-full">
            <Header/>
            <div className="px-8 w-full">
                <ProgressBar steps={questions.length} currentStep={step}/>
            </div>
            <div className="flex flex-col items-center h-full gap-10 justify-center p-8">
                <div className="text-center font-bold text-xl">{question.question_text}</div>
                <div className="flex flex-col gap-2 w-full max-w-md">
                    {question.variants.map(variant => (
                        <label key={variant}
                               className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                            <input
                                type="radio"
                                name="question"
                                value={variant}
                                checked={selectedAnswer === variant}
                                onChange={() => setSelectedAnswer(variant)}
                                className="h-4 w-4"
                            />
                            <span>{variant}</span>
                        </label>
                    ))}
                </div>
                <div className="flex gap-4 items-center">
                    {step > 0 && (
                        <button
                            onClick={goToPreviousQuestion}
                            className="p-2 text-gray-600 hover:text-gray-800"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                    )}
                    <button
                        className={`px-4 py-2 rounded ${selectedAnswer ? 'bg-[var(--main-red)] text-white' : 'bg-[#e2a298] text-gray-500 cursor-not-allowed'}`}
                        disabled={!selectedAnswer}
                        onClick={() => selectedAnswer && addQuestionResult(selectedAnswer)}
                    >
                        {step + 1 === questions.length ? 'Завершить' : 'Далее'}
                    </button>
                </div>
            </div>
        </main>
    )
}