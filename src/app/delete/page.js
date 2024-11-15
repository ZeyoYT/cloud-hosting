"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DeleteAccountPage() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCancel = () => {
        router.push('/dashboard'); // Or wherever the user should go if they cancel
    };

    const handleDelete = async () => {
        if (!email) {
            setError('Email is required.');
            return;
        }

        try {const response = await fetch('/api/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }), 
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                setTimeout(() => router.push('/'), 2000); 
            } else {
                setError(data.message || 'Failed to delete account.');
                console.error('Delete request failed:', data);
            }
        } catch (err) {
            setError('An error occurred while deleting your account.');
            console.error('Error during deletion process:', err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4 text-red-900">Delete Account</h1>
                <p className="mb-6 text-red-500">
                    Please enter your email to confirm and delete your account. This action cannot be undone.
                </p>

                {success && <p className="text-center text-green-400 mb-6">Account deleted successfully. Redirecting...</p>}
                {error && <p className="text-center text-red-400 mb-6">{error}</p>}

                <div>
                    <label className="block text-sm font-medium text-blue-900">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="mt-1 w-full p-3 rounded-md bg-cyan-200 text-blue-700"
                    />
                </div>

                <div className="flex justify-between mt-6">
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Confirm and Delete
                    </button>
                    <button
                        onClick={handleCancel}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
