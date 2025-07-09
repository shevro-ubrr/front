'use client'

import Image from "next/image";
import Link from "next/link";
import Header from "@/shared/header";
import {useEffect, useState} from "react";

type ITest = {
    id: string;
    name: string;
    imageSrc: string;
    recommended: boolean;
}

const imageSize = 96;

const _tests: ITest[] = [
    {id: "35", name: "Как выйти <br/> на пенсию в 35", imageSrc: "/logo_test_2.svg", recommended: false},
    {id: "money", name: "Личный и семейный бюджет", imageSrc: "/logo_test_1.svg", recommended: false},
    {id: "paper", name: "Ценные бумаги", imageSrc: "/logo_test_3.svg", recommended: false},
]

const Status = ({active}: { active: boolean }) => {
    if (!active) {
        return <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.2" cx="12.5" cy="12.5" r="11" stroke-width="3" fill="#262626"></circle>
        </svg>
    }
    return <svg width="23" height="23" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#0FA958"
              d="M22.8142 3.06497L24.9355 5.18629L8.50043 21.621L0.0654297 13.1863L2.18675 11.065L8.50043 17.378L22.8142 3.06497Z"/>
    </svg>
}

const CourseCard = ({test}: { test: ITest }) => {
    const [isRead, setIsRead] = useState(false);

    useEffect(() => {
        // Проверяем localStorage при монтировании компонента
        const readStatus = localStorage.getItem(`test_${test.id}_read`);
        console.log(readStatus)
        setIsRead(readStatus === 'true');
    }, [test.id]);

    const handleClick = () => {
        // Обновляем состояние и сохраняем в localStorage
        const newStatus = !isRead;
        setIsRead(newStatus);
        localStorage.setItem(`test_${test.id}_read`, String(newStatus));
    };

    return (
        <Link
            className="testCard"
            href={`/tests/${test.id}`}
            onClick={handleClick}
        >
            <Image
                src={test.imageSrc}
                alt={""}
                width={imageSize}
                height={imageSize}
                className="absolute translate-x-44 translate-y-8"
            />
            <div className="flex flex-col gap-2">
                <p className="w-40" dangerouslySetInnerHTML={{__html: test.name}}/>
            </div>
            <div className="absolute translate-x-[250px] translate-y-[-10px]">
                <Status active={isRead}/>
            </div>
            <div className="flex flex-row items-center gap-1 text-xl">
                10
                <Image src={"/system-uicons_coins.svg"} alt={""} width={30} height={30}/>
            </div>
        </Link>
    );
};


export default function TestsPage() {

    const [tests, setTests] = useState<ITest[]>(_tests);

    useEffect(() => {
        fetch("https://guidesai.ru/recommended_courses", {
            method: "GET",
            credentials: "include",
        }).then(async (res) => {

            if (!res.ok) return;

            const json = await res.json();
            const recommended = json.recommended_courses as string[];

            setTests(tests.map(test => ({...test, recommended: recommended.includes(test.id)})));
        });
    }, []);

    return (
        <main className="main">
            <Header/>
            <p className="p-3 text-2xl">Рекомендованные</p>
            <div className="testCardContainer">
                {tests.filter(t => t.recommended).map((test, i) => (
                    <CourseCard test={test} key={i}/>
                ))}
            </div>
            <hr/>
            <div className="testCardContainer">
                {tests.filter(t => !t.recommended).map((test, i) => (
                    <CourseCard test={test} key={i}/>
                ))}
            </div>
        </main>
    )
}