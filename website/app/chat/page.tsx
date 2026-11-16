"use client";

import { useState } from "react";

export default function Chat() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<string[]>([]);

    const sendMessage = () => {
        if (!message.trim()) return;

        setMessages([...messages, message]);
        setMessage("");
    };

    return (
        <main className="min-h-screen bg-[#fff9f6] px-6 py-16">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-serif text-[#a65c70] text-center">
                    AI Chat Assistant
                </h1>

                <p className="text-gray-500 text-center mt-4 mb-10">
                    Ask us anything about our beauty services.
                </p>

                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <div className="min-h-64 space-y-4 mb-6">
                        {messages.length === 0 ? (
                            <p className="text-gray-400 text-center pt-16">
                                Welcome to Sunita Makeover! How can we help you?
                            </p>
                        ) : (
                            messages.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-[#f8eeed] rounded-xl p-3 text-gray-700"
                                >
                                    {item}
                                </div>
                            ))
                        )}
                    </div>

                    <div className="flex gap-2">
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") sendMessage();
                            }}
                            placeholder="Type your message..."
                            className="flex-1 border rounded-full px-4 py-3"
                        />

                        <button
                            onClick={sendMessage}
                            className="bg-[#a65c70] text-white px-6 rounded-full"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}