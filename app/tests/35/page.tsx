"use client";
import { useState } from "react";
import Header from "@/shared/header";
import TextSelectionPopup from "@/shared/TextSelectionPopup";

const questions = [
        {
                question: "Что такое личный бюджет?",
                options: [
                        "A. Список всех крупных покупок",
                        "B. Сумма зарплаты без учёта трат",
                        "C. Соотношение всех доходов и расходов человека",
                        "D. Бюджет, который утверждает государство"
                ],
                correct: 2,
        },
        {
                question: "Какой из этих расходов считается обязательным?",
                options: [
                        "A. Новый смартфон",
                        "B. Коммунальные платежи",
                        "C. Билеты в кино",
                        "D. Поход в кафе"
                ],
                correct: 1,
        },
        {
                question: "Какой бюджет считается положительным?",
                options: [
                        "A. Доходов меньше, чем расходов",
                        "B. Доходов и расходов одинаково",
                        "C. Доходов больше, чем расходов",
                        "D. Бюджет вообще не ведётся"
                ],
                correct: 2,
        },
        {
                question: "Какой способ планирования бюджета предполагает деление на 50%, 30% и 20%?",
                options: [
                        "A. Метод «нулевого баланса»",
                        "B. Метод «финансовой подушки»",
                        "C. Метод «конвертов»",
                        "D. Метод 50/30/20"
                ],
                correct: 3,
        },
        {
                question: "Что такое резервный фонд?",
                options: [
                        "A. Деньги, которые выдали родители",
                        "B. Средства на развлечения",
                        "C. Деньги, отложенные на случай непредвиденных ситуаций",
                        "D. Золотой запас страны"
                ],
                correct: 2,
        },
        {
                question: "Какой подход НЕ относится к ведению семейного бюджета?",
                options: [
                        "A. Совместный",
                        "B. Раздельный",
                        "C. Индивидуальный налоговый",
                        "D. Смешанный"
                ],
                correct: 2,
        },
        {
                question: "Какая из привычек поможет улучшить контроль над бюджетом?",
                options: [
                        "A. Не думать о мелких тратах",
                        "B. Записывать расходы и доходы",
                        "C. Всегда брать кредит на покупки",
                        "D. Покупать вещи только по акции"
                ],
                correct: 1,
        }
];

export default function Page() {
        const [answers, setAnswers] = useState(Array(questions.length).fill(null));
        const [submitted, setSubmitted] = useState(false);

        const handleChange = (qIndex: number, oIndex: number) => {
                const newAnswers = [...answers];
                newAnswers[qIndex] = oIndex;
                setAnswers(newAnswers);
        };

        const handleSubmit = () => {
                setSubmitted(true);
        };

        const score = answers.reduce((acc, a, i) => (a === questions[i].correct ? acc + 1 : acc), 0);

        return (
            <main className="page-container">
                    <TextSelectionPopup/>
                    <Header />

                    <article className="longread">
                            <h3>📖 Лонгрид: Личный и семейный бюджет</h3>

                            <p><strong>🔹 Что такое личный и семейный бюджет</strong></p>
                            <p>
                                    Финансовая грамотность начинается с умения управлять своими деньгами. А основа этого — бюджет: план доходов
                                    и расходов на определённый период, чаще всего на месяц.
                            </p>
                            <p><strong>Личный бюджет</strong> — это доходы и расходы одного человека.</p>
                            <p><strong>Семейный бюджет</strong> — совокупность доходов и расходов всех членов семьи, которые ведут совместное хозяйство.</p>
                            <p><strong>🔍 Важно:</strong> Не обязательно быть специалистом по экономике. Главное — понимать, откуда приходят деньги и куда они уходят.</p>

                            <p><strong>🔹 Из чего состоит бюджет</strong></p>
                            <div className="budget-components">
                                    <div>
                                            <h4>Доходы:</h4>
                                            <ul>
                                                    <li>Основные (зарплата, пенсия, стипендия)</li>
                                                    <li>Дополнительные (подработки, доходы от аренды, кэшбэк, проценты по вкладам)</li>
                                            </ul>
                                    </div>
                                    <div>
                                            <h4>Расходы:</h4>
                                            <ul>
                                                    <li>Обязательные (коммунальные услуги, проезд, еда, кредиты)</li>
                                                    <li>Переменные (одежда, развлечения, спонтанные покупки)</li>
                                            </ul>
                                    </div>
                                    <div>
                                            <h4>Накопления и инвестиции:</h4>
                                            <ul>Отложенные средства — очень важная часть!</ul>
                                    </div>
                                    <div>
                                            <h4>Резерв:</h4>
                                            <ul>Непредвиденные траты</ul>
                                    </div>
                            </div>

                            <p>
                                    🎯 Цель бюджета — не просто записывать цифры, а контролировать денежные потоки и достигать финансовых целей.
                            </p>

                            <p><strong>🔹 Виды бюджета: плюсы и минусы</strong></p>
                            <table className="budget-table">
                                    <thead>
                                    <tr>
                                            <th>Вид бюджета</th>
                                            <th>Пример</th>
                                            <th>Что это значит</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                            <td>Отрицательный</td>
                                            <td>Доход 50 000 ₽, расходы 60 000 ₽</td>
                                            <td>Живёте в долг. Нужен срочный пересмотр!</td>
                                    </tr>
                                    <tr>
                                            <td>Нейтральный</td>
                                            <td>Доход 50 000 ₽, расходы 50 000 ₽</td>
                                            <td>Вроде всё хорошо, но нет подушки безопасности</td>
                                    </tr>
                                    <tr>
                                            <td>Положительный</td>
                                            <td>Доход 50 000 ₽, расходы 40 000 ₽</td>
                                            <td>Отлично! Есть деньги на сбережения</td>
                                    </tr>
                                    </tbody>
                            </table>

                            <p><strong>🔹 Как начать вести бюджет</strong></p>
                            <ol className="steps">
                                    <li>Записывайте все доходы и расходы. Удобнее — в приложении или таблице.</li>
                                    <li>Фиксируйте даже мелкие траты (кофе, проезд).</li>
                                    <li>Разбейте расходы по категориям (Питание, транспорт, ЖКУ, развлечения, здоровье, инвестиции и др.).</li>
                                    <li>Проанализируйте, какие категории «съедают» большую часть бюджета и где можно сэкономить без потери качества жизни.</li>
                                    <li>Определите финансовую цель: купить технику, накопить на отпуск, создать резерв в 3-6 месячных расходов.</li>
                                    <li>Выберите метод планирования бюджета:
                                            <ul>
                                                    <li>50/30/20: 50% — обязательные расходы, 30% — желания, 20% — сбережения.</li>
                                                    <li>"Конверты": каждому виду расходов соответствует свой лимит.</li>
                                                    <li>"Цифровые корзины": виртуальные кошельки в приложениях.</li>
                                            </ul>
                                    </li>
                            </ol>

                            <p><strong>🔹 Бюджет в семье: совместный или раздельный?</strong></p>
                            <p>3 подхода к семейному бюджету:</p>
                            <ul>
                                    <li><strong>Совместный</strong> — все доходы складываются в одну «копилку» и тратятся на общие нужды.</li>
                                    <li><strong>Раздельный</strong> — каждый сам оплачивает свою часть расходов.</li>
                                    <li><strong>Смешанный</strong> — фиксированные общие траты (например, жильё, еда) — совместно, остальное — по своему усмотрению.</li>
                            </ul>
                            <p>👪 <strong>Важно:</strong> нужно договориться, кому и сколько удобно вносить в общий бюджет, чтобы избежать конфликтов.</p>

                            <p><strong>🔹 Типичные ошибки при планировании бюджета</strong></p>
                            <ul className="errors">
                                    <li>🚫 Нет финансовой цели</li>
                                    <li>🚫 Не учитываются мелкие расходы</li>
                                    <li>🚫 Игнорируются непредвиденные ситуации</li>
                                    <li>🚫 Отсутствуют накопления</li>
                                    <li>🚫 Расходы не фиксируются регулярно</li>
                            </ul>
                            <p>✅ Привычка вести бюджет — как чистить зубы: поначалу непривычно, потом не можешь без неё.</p>

                            <ol className="quiz-questions">
                                    {questions.map((q, qIndex) => (
                                        <li key={qIndex}>
                                                {q.question}
                                                <ul>
                                                        {q.options.map((opt, oIndex) => (
                                                            <li key={oIndex}>
                                                                    <label>
                                                                            <input
                                                                                type="radio"
                                                                                name={`question-${qIndex}`}
                                                                                checked={answers[qIndex] === oIndex}
                                                                                onChange={() => handleChange(qIndex, oIndex)}
                                                                                disabled={submitted}
                                                                            />{" "}
                                                                            {opt}{" "}
                                                                            {submitted && oIndex === q.correct && (
                                                                                <strong style={{ color: "green" }}>✅</strong>
                                                                            )}
                                                                            {submitted && answers[qIndex] === oIndex && oIndex !== q.correct && (
                                                                                <strong style={{ color: "red" }}>❌</strong>
                                                                            )}
                                                                    </label>
                                                            </li>
                                                        ))}
                                                </ul>
                                        </li>
                                    ))}
                            </ol>

                            {!submitted ? (
                                <button onClick={handleSubmit}>Проверить</button>
                            ) : (
                                <p>
                                        Ваш результат: <strong>{score} из {questions.length}</strong>{" "}
                                        ({score >= 5 ? "✅ Пройдено!" : "❌ Попробуйте ещё раз"})
                                </p>
                            )}
                    </article>

                    <style jsx>{`
        .page-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
          font-family: "Arial", sans-serif;
          color: #1a1a1a;
          line-height: 1.6;
          background: #f9f9f9;
        }
        .highlight.red {
          background-color: #e60000;
          color: white;
          padding: 15px 20px;
          border-radius: 6px;
          margin-bottom: 20px;
          text-align: center;
        }
        .longread h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          color: #00457c;
        }
        .budget-components {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 20px;
        }
        .budget-components > div {
          background: white;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 0 5px rgba(0,0,0,0.1);
        }
        ul, ol {
          margin-left: 20px;
          margin-bottom: 1rem;
        }
        .budget-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        .budget-table th, .budget-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        .budget-table th {
          background-color: #00457c;
          color: white;
        }
        .steps li {
          margin-bottom: 10px;
        }
        .errors {
          color: #b30000;
          font-weight: bold;
        }
        .quiz-questions > li {
          margin-bottom: 20px;
        }
        .quiz-questions ul {
          list-style-type: none;
          padding-left: 0;
        }
        .quiz-questions ul li {
          margin-bottom: 6px;
          cursor: default;
        }
        .quiz-questions ul li strong {
          color: #007700;
        }
        .reels ul {
          list-style-type: disc;
          padding-left: 20px;
        }

        .quiz-questions > li {
                margin-bottom: 20px;
        }
        .quiz-questions ul {
                list-style: none;
                padding-left: 0;
        }
        button {
                padding: 10px 20px;
                background-color: #00457c;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 10px;
        }
        button:hover {
                background-color: #003355;
        }
      `}</style>
            </main>
        );
}
