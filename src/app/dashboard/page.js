"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from '../../../lib/auth';

export default function Dashboard() {
  const isUserLoggedIn = useAuth();
  const router = useRouter();
  const [servers, setServers] = useState([]);

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push('/login');
    } else {
      fetchServers();
    }

    AOS.init({ duration: 1000 });
  }, [isUserLoggedIn, router]);

  const fetchServers = async () => {
    try {
      const response = await fetch('/api/servers');
      const data = await response.json();
      setServers(data);
    } catch (error) {
      console.error('Error fetching servers:', error);
    }
  };

  const toggleServerStatus = async (id) => {
    try {
      const response = await fetch(`/api/servers/${id}/toggle`, {
        method: 'POST',
      });
      const data = await response.json();
      
      // Update server status in local state
      setServers((prevServers) =>
        prevServers.map((server) =>
          server._id === id ? { ...server, status: data.status } : server
        )
      );
    } catch (error) {
      console.error('Error toggling server status:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('logout'));
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      {isUserLoggedIn ? (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servers.length > 0 ? (
              servers.map((server) => (
                <div
                  key={server._id}
                  className="flex flex-col items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm"
                  data-aos="fade-up"
                >
                  <span className="text-lg font-medium text-gray-700 mb-2">
                    {server.name}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-semibold mb-4 ${
                      server.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {server.status}
                  </span>
                  <button
                    onClick={() => toggleServerStatus(server._id)}
                    className={`px-4 py-2 text-sm font-medium text-white rounded ${
                      server.status === 'Active' ? 'bg-red-500' : 'bg-green-500'
                    } hover:opacity-90 transition`}
                  >
                    {server.status === 'Active' ? 'Stop' : 'Start'}
                  </button>
                </div>
              ))
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
