'use client'

import Image from "next/image";
import Link from "next/link";

type ITest = {
    id: string;
    name: string;
    imageSrc: string;
}

const imageSize = 96;

const tests: ITest[] = [
    {id: "35", name: "Как выйти <br/> на пенсию в 35", imageSrc: "/logo_test_2.svg"},
    {id: "money", name: "Личный и семейный бюджет", imageSrc: "/logo_test_1.svg"},
    {id: "paper", name: "Ценные бумаги", imageSrc: "/logo_test_3.svg"},
]

const Header = () => {

    return (
        <Link className="header__logo" href="/">
            <img src="https://gidpofinansam.com/assets/upload/logo.svg" alt=""/>
            <div className="delimiter"></div>
            <div className="text">Финансовая грамотность</div>
        </Link>
    )
}

export default function TestsPage() {

    return (
        <main className="main">
            <Header/>
            <div className="testCardContainer">
                {tests.map((test, i) => (
                    <Link key={i} className="testCard" href={`/tests/${test.id}`}>
                        <Image src={test.imageSrc} alt={""} width={imageSize} height={imageSize}
                               className="absolute translate-x-44"/>
                        <div className="flex flex-col gap-2">
                            <p>Пройдено</p>
                            <p className="w-40" dangerouslySetInnerHTML={{__html: test.name}}/>
                        </div>
                        <div className="flex flex-row items-center gap-1 text-xl">
                            10
                            <Image src={"/system-uicons_coins.svg"} alt={""} width={30} height={30}/>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}