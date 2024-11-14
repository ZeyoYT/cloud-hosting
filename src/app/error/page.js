import React from 'react';

export default function ErrorPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-red-500">Oops! Page Not Found.</h1>
            <p className="mt-4 text-gray-100">The page you are looking for does not exist or you don't have access to it.</p>
        </div>
    );
}
