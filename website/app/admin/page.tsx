"use client";
import { useEffect, useState } from "react";

export default function Admin() {
    const [appointments, setAppointments] = useState<any[]>([]);
    const [inquiries, setInquiries] = useState<any[]>([]);

    useEffect(() => {
        const savedAppointments = JSON.parse(
            localStorage.getItem("appointments") || "[]"
        );
        setAppointments(savedAppointments);
        const savedInquiries = JSON.parse(
            localStorage.getItem("inquiries") || "[]"
        );
        setInquiries(savedInquiries);
    }, []);
    return (
        <main className="min-h-screen bg-[#fff9f6] p-8">
            <h1 className="text-3xl font-serif text-[#a65c70] mb-2">
                Sunita Makeover Admin Panel
            </h1>

            <p className="text-gray-500 mb-8">
                Welcome to your salon dashboard.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-[#a65c70]">
                        Appointments
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Manage customer appointments.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-[#a65c70]">
                        Customer Inquiries
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Total Appointments: {appointments.length}
                        <p className="text-gray-500 mt-2">
                            Total Customer Inquiries: {inquiries.length}
                        </p>
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-[#a65c70]">
                        Business Performance
                        <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">
                            <h2 className="text-xl font-semibold text-[#a65c70] mb-4">
                                Appointment Management
                            </h2>

                            {appointments.length === 0 ? (
                                <p className="text-gray-500">No appointments yet.</p>
                            ) : (
                                appointments.map((appointment, index) => (
                                    <div key={index} className="border-b py-3">
                                        <p>{appointment.name}</p>
                                        <p>{appointment.phone}</p>
                                        <p>{appointment.service}</p>
                                        <p>{appointment.date}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </h2>
                    <p className="text-gray-500 mt-2">
                        View salon performance.
                    </p>
                </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">
                <h2 className="text-xl font-semibold text-[#a65c70] mb-4">
                    Customer Inquiry Management
                </h2>

                {inquiries.length === 0 ? (
                    <p className="text-gray-500">No inquiries yet.</p>
                ) : (
                    inquiries.map((inquiry, index) => (
                        <div key={index} className="border-b py-3">
                            <p><strong>Name:</strong> {inquiry.name}</p>
                            <p><strong>Phone:</strong> {inquiry.phone}</p>
                            <p><strong>Message:</strong> {inquiry.message}</p>
                        </div>
                    ))
                )}
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">
                <h2 className="text-xl font-semibold text-[#a65c70] mb-4">
                    WhatsApp Confirmations & Reminders
                </h2>

                <p className="text-gray-500">
                    WhatsApp number not added yet.
                </p>

                <p className="text-gray-500 mt-2">
                    Appointment confirmations and reminders will be available after WhatsApp setup.
                </p>
            </div>
        </main>
    );
}