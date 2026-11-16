"use client";

import { useState } from "react";

export default function ContentGenerator() {
    const [topic, setTopic] = useState("");
    const [content, setContent] = useState("");

    const generateContent = () => {
        if (!topic.trim()) {
            alert("Please enter a topic.");
            return;
        }

        setContent(
            `✨ Sunita Makeover ✨

${topic}

Enhance your beauty and feel confident!
Contact Sunita Makeover for more details.

#SunitaMakeover #Beauty #Makeup`
        );
    };

    return (
        <main className="min-h-screen bg-[#fff9f6] px-6 py-16">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-serif text-[#a65c70] text-center">
                    AI Content Generator
                </h1>

                <p className="text-gray-500 text-center mt-4 mb-10">
                    Create beauty content for your salon.
                </p>

                <div className="bg-white rounded-2xl shadow-sm p-8 space-y-5">
                    <div>
                        <label className="block mb-2">Enter your topic</label>
                        <input
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Example: Bridal Makeup"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    <button
                        onClick={generateContent}
                        className="w-full bg-[#a65c70] text-white py-4 rounded-full font-semibold"
                    >
                        Generate Content
                    </button>

                    {content && (
                        <div className="bg-[#f8eeed] rounded-xl p-5">
                            <h2 className="font-semibold text-[#a65c70] mb-3">
                                Generated Content
                            </h2>
                            <p className="whitespace-pre-line text-gray-700">{content}</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}