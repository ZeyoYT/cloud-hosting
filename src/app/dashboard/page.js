"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../lib/auth';

export default function Dashboard() {
  const isUserLoggedIn = useAuth();
  const router = useRouter();
  const [servers, setServers] = useState([]);

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push('/login'); // Redirect to login page if not logged in
    } else {
      // Fetch servers (dummy data for demonstration)
      setServers([
        { id: 1, name: 'Server A', status: 'Active' },
        { id: 2, name: 'Server B', status: 'Inactive' },
      ]);
    }
  }, [isUserLoggedIn, router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('logout')); // Trigger the logout event
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      {isUserLoggedIn ? (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
          <div className="space-y-4">
            {servers.length > 0 ? (
              <ul>
                {servers.map((server) => (
                  <li
                    key={server.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm"
                  >
                    <span className="text-lg font-medium text-gray-700">
                      {server.name}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-semibold ${
                        server.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {server.status}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No servers available.</p>
            )}
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Redirecting to login...</p>
      )}
    </div>
  );
}
