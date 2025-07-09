'use client'

import {useState} from "react";

type ITest = {
    id: string;
    name: string;
    description: string;
}

const tests: ITest[] = [
    {id: "35", name: "как выйти на пенсию в 35", description: "Test 1"},
    {id: "money", name: "личный и семейный бюджет", description: "Test 2"},
    {id: "paper", name: "ценные бумаги", description: "Test 3"},
]

export default function TestsPage() {

    return (
        <main className="main">
            {tests.map((test, i) => (
                <div key={i} className="testCard">
                    <p>{test.name}</p>
                    <p>{test.description}</p>
                </div>
            ))}
        </main>
    )
}