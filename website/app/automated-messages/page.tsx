"use client";

import { useState } from "react";

export default function AutomatedMessages() {
    const [messageType, setMessageType] = useState("WhatsApp");
    const [message, setMessage] = useState(
        "Hello! Your appointment at Sunita Makeover is confirmed."
    );

    return (
        <main className="min-h-screen bg-[#fff9f6] px-6 py-16">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-serif text-[#a65c70] text-center">
                    Automated WhatsApp & SMS
                </h1>

                <p className="text-gray-500 text-center mt-4 mb-10">
                    Manage appointment confirmation and reminder messages.
                </p>

                <div className="bg-white rounded-2xl shadow-sm p-8 space-y-5">
                    <div>
                        <label className="block mb-2">Message Type</label>
                        <select
                            value={messageType}
                            onChange={(e) => setMessageType(e.target.value)}
                            className="w-full border rounded-lg p-3"
                        >
                            <option>WhatsApp</option>
                            <option>SMS</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2">Message Template</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}

                            className="w-full border rounded-lg p-3"
                            rows={5}
                        />
                    </div>

                    <button
                        onClick={() =>
                            alert(
                                `${messageType} setup is required before messages can be sent.`
                            )
                        }
                        className="w-full bg-[#a65c70] text-white py-4 rounded-full font-semibold"
                    >
                        Save Message Template
                    </button>

                    <p className="text-sm text-gray-500">
                        Actual WhatsApp and SMS delivery requires a verified number and
                        messaging service integration.
                    </p>
                </div>
            </div>
        </main>
    );
}