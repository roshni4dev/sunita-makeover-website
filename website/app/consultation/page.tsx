"use client";

import { useState } from "react";

export default function Consultation() {
    const [service, setService] = useState("");
    const [skinType, setSkinType] = useState("");
    const [message, setMessage] = useState("");

    return (
        <main className="min-h-screen bg-[#fff9f6] px-6 py-16">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-serif text-[#a65c70] text-center">
                    AI Beauty Consultation
                </h1>

                <p className="text-gray-500 text-center mt-4 mb-10">
                    Tell us about your beauty needs.
                </p>

                <div className="bg-white rounded-2xl shadow-sm p-8 space-y-5">
                    <div>
                        <label className="block mb-2">Which service do you need?</label>
                        <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="w-full border rounded-lg p-3"
                        >
                            <option value="">Select a service</option>
                            <option>Bridal Makeup</option>
                            <option>Party Makeup</option>
                            <option>Hair Styling</option>
                            <option>Facial</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2">Your skin type</label>
                        <select
                            value={skinType}
                            onChange={(e) => setSkinType(e.target.value)}
                            className="w-full border rounded-lg p-3"
                        >
                            <option value="">Select skin type</option>
                            <option>Dry</option>
                            <option>Oily</option>
                            <option>Combination</option>
                            <option>Normal</option>
                            <option>Not sure</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2">Tell us more</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Describe your beauty needs..."
                            className="w-full border rounded-lg p-3"
                            rows={4}
                        />
                    </div>

                    <button
                        onClick={() =>
                            alert(
                                "Thank you! AI consultation will be available after AI setup."
                            )
                        }
                        className="w-full bg-[#a65c70] text-white py-4 rounded-full font-semibold"
                    >
                        Get Beauty Consultation
                    </button>
                </div>
            </div>
        </main>
    );
}