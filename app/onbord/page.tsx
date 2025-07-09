'use client'

import {useEffect, useState} from "react";
import {redirect, RedirectType} from 'next/navigation'
import Header from "@/shared/header";

type IQuestion = { question_text: string, variants: string[] };

const questions = [
    {
        question_text: "Как лучше всего описать Ваш текущий статус?",
        variants: ["Школьник (12–17 лет)", "Студент (18–25 лет)", "Родитель", "Педагог/Тьютор"]
    },
    {question_text: "Мяу2", variants: ["Я башмак", "Я умный"]}
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
        //fetch();
        redirect("/tests", RedirectType.replace);
    }

    useEffect(() => {
        setQuestion(questions[step]);
    }, [step])

    if (!question) {
        return <>Загрузка</>;
    }

    return (
        <main className="flex flex-col items-center  w-full h-full">
            <Header/>
            <div className="flex flex-col items-center h-full gap-10 justify-center">
                <div>{question.question_text}</div>
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