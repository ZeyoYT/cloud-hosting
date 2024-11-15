"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '/lib/auth';

export default function PaymentGateway(data) {
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [email, setEmail] = useState('');
    const [upiId, setUpiId] = useState('users@upi');
    const [isPaid, setIsPaid] = useState(false);
    const [demoMode, setDemoMode] = useState(false);
    const router = useRouter();
    const isLoggedIn = useAuth(); 

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const from = urlParams.get('from');
        const serviceType = urlParams.get('plan');
        setType(serviceType);
        
        // if (!isLoggedIn || from != 'hosting') {
        //     router.push('/error'); 
        // }
    }, [isLoggedIn, router]);

    const handlePayment = () => {
        if (demoMode) {
            setTimeout(() => {
                alert("Payment successful!");
                setIsPaid(true);
                savePayment();
            }, 1000);
        } else {
            const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;
            window.open(upiUrl, "_blank");
        }
    };

    const savePayment = async () => {
        try {
            const response = await fetch('/api/savePayment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, type, email, amount, upiId }),
            });

            if (response.ok) {
                console.log("Payment details saved to database");
            } else {
                console.error("Failed to save payment details");
            }
        } catch (error) {
            console.error("Error saving payment details:", error);
        }
    };

    const handleConfirmPayment = () => {
        setIsPaid(true);
        savePayment();
        console.log("Payment confirmed by user");
    };

    useEffect(() => {
        const getPrice = localStorage.getItem('hosting_price');
        setAmount(getPrice);
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-red-900">Payment Gateway</h2>

                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg text-cyan-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border rounded-lg text-cyan-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Amount</label>
                    <input
                        className="w-full px-3 py-2 border rounded-lg text-cyan-500"
                        value={amount}
                        onChange={(e) => setAmount(getPrice)}
                        readOnly
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">UPI ID</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg text-cyan-500"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        id="demoMode"
                        checked={demoMode}
                        onChange={() => setDemoMode(!demoMode)}
                        className="mr-2"
                    />
                    <label htmlFor="demoMode" className="text-gray-700">Enable Demo Mode</label>
                </div>

                <button
                    onClick={handlePayment}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    {demoMode ? "Simulate Payment" : "Pay with Google Pay UPI"}
                </button>

                {isPaid ? (
                    <p className="mt-4 text-green-600 font-semibold">Payment Confirmed!</p>
                ) : (
                    <button
                        onClick={handleConfirmPayment}
                        className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
                    >
                        Confirm Payment
                    </button>
                )}
            </div>
        </div>
    );
}
