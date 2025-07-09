import React from "react";

type ProgressBarProps = {
    steps: number; // Общее количество шагов
    currentStep: number; // Текущий шаг (начинается с 1)
};

const ProgressBar = ({ steps, currentStep }: ProgressBarProps) => {
    return (
        <div className="w-full">
            {/* Обертка прогресс-бара */}
            <div className="flex items-center justify-between mb-2">
                {Array.from({ length: steps }).map((_, index) => (
                    <React.Fragment key={index}>
                        {/* Шаг (круг с номером) */}
                        <div
                            className={`flex items-center justify-center w-8 h-8 rounded-full ${
                                index + 1 <= currentStep
                                    ? "bg-[var(--main-red)] text-white"
                                    : "bg-gray-200 text-gray-600"
                            } font-semibold`}
                        >
                            {index + 1}
                        </div>
                        {/* Линия между шагами (кроме последнего) */}
                        {index < steps - 1 && (
                            <div
                                className={`flex-1 h-1 mx-2 ${
                                    index + 1 < currentStep ? "bg-[var(--main-red)]" : "bg-gray-200"
                                }`}
                            ></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            {/* Подписи шагов (опционально) */}
            <div className="flex justify-between text-sm text-gray-600">
                <span>Начало</span>
                <span>Шаг 2</span>
                <span>Завершение</span>
            </div>
        </div>
    );
};

export default ProgressBar;