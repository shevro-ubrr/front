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

    const addQuestionResult = (answer: string) => {
        setQuestionResult(before => [...before, answer]);
        if (step + 1 == questions.length) {
            onSubmit();
            return;
        }
        setStep(step => step + 1);
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
        <main className="flex flex-col items-center  w-full h-full">
            <Header/>
            <div className="px-8 w-full">
                <ProgressBar steps={questions.length} currentStep={step}/>
            </div>
            <div className="flex flex-col items-center h-full gap-10 justify-center p-8">
                <div className="text-center font-bold text-xl">{question.question_text}</div>
                <div className={"flex flex-col gap-2"}>
                    {question.variants.map(variant => (
                        <button className={"task_button"} key={variant}
                                onClick={() => addQuestionResult(variant)}>{variant}</button>
                    ))}
                </div>
            </div>
        </main>
    )
}