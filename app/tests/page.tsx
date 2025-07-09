'use client'

import Image from "next/image";
import Link from "next/link";

type ITest = {
    id: string;
    name: string;
}

const imageSize = 96;

const tests: ITest[] = [
    {id: "35", name: "Как выйти <br/> на пенсию в 35"},
    {id: "money", name: "Личный и семейный бюджет"},
    {id: "paper", name: "Ценные бумаги"},
]

export default function TestsPage() {

    return (
        <main className="main">
            <div className="testCardContainer">
                {tests.map((test, i) => (
                    <Link key={i} className="testCard" href={`/tests/${test.id}`}>
                        <Image src={"/logo_test_1.svg"} alt={""} width={imageSize} height={imageSize}
                               className="absolute translate-x-44"/>
                        <p>Пройдено</p>
                        <p className="w-40 mt-4" dangerouslySetInnerHTML={{ __html: test.name }} />
                    </Link>
                ))}
            </div>
        </main>
    )
}