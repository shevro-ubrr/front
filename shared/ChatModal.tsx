'use client'

import {useEffect, useState} from 'react';

type IProps = {
    isOpen: boolean;
    onClose: () => void;
    initialMessage: string;
}

export default function ChatModal({ isOpen, onClose, initialMessage }:IProps) {
    const [messages, setMessages] = useState<{text: string, sender: string}[]>([]);
    const [input, setInput] = useState('');

    // Инициализируем чат с выделенным текстом
    useEffect(() => {
        if (isOpen && initialMessage) {
            setMessages([{ text: initialMessage, sender: 'user' }]);
            // Здесь можно добавить автоматический запрос к API
            // sendChatRequest(initialMessage);
        }
    }, [isOpen, initialMessage]);

    const handleSend = () => {
        if (input.trim()) {
            const newMessage = { text: input, sender: 'user' };
            setMessages([...messages, newMessage]);
            setInput('');

            // Здесь можно добавить запрос к API чата
            // sendChatRequest(input);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md max-h-[80vh] flex flex-col">
                <div className="p-4 border-b flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Чат</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        ✕
                    </button>
                </div>

                <div className="flex-1 p-4 overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`mb-3 p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100 mr-auto'}`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>

                <div className="p-4 border-t">
                    <div className="flex">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Введите сообщение..."
                        />
                        <button
                            onClick={handleSend}
                            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
                        >
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}