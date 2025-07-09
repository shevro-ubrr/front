'use client'

import {useEffect, useState} from "react";
import {redirect, RedirectType} from 'next/navigation'

type IQuestion = { question_text: string, variants: string[] };

const questions = [
    {question_text: "Мяу1", variants: ["Я башмак", "Я умный"]},
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
        <main className="flex flex-col items-center justify-center w-full h-full gap-10">
            <div>{question.question_text}</div>
            <div className={"flex flex-col gap-2"}>
                {question.variants.map(variant => (
                    <button className={"task_button"} key={variant}
                            onClick={() => addQuestionResult(variant)}>{variant}</button>
                ))}
            </div>
        </main>
    )
}