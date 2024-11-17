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
    AOS.init({ duration: 900 });
    document.title = "Dashboard | Cloud Hosting";
  }, []);

  useEffect(() => {
    if (isUserLoggedIn) {
      router.push('/');
    } else {
      fetchServers();
    }

    AOS.init({ duration: 1000 });
  }, []);

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
    
      setServers((prevServers) =>
        prevServers.map((server) =>
          server._id === id ? { ...server, status: data.status } : server
        )
      );
    } catch (error) {
      console.error('Error toggling server status:', error);
    }
  };

  const handleDelete = () => {
    router.push('/delete');
  };

  const handleEdit = () => {
    router.push('/update');
  };

  function getProperDate(data) {
    const date = new Date(data);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {isUserLoggedIn ? (
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-5xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
            <div className="flex space-x-4">
              <button
                onClick={handleEdit}
                className="px-5 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
              >
                Edit Account
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition"
              >
                Delete Account
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servers.length > 0 ? (
              servers.map((server) => (
                <div
                  key={server._id}
                  className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105"
                  data-aos="fade-up"
                >
                  <span className="text-lg font-semibold text-gray-800 mb-2">
                    {server.type}
                  </span>
                  <span className="text-md font-semibold text-gray-500 mb-2">
                    {getProperDate(server.createdAt)}
                  </span>
                  
                  <button
                    className={`w-full px-4 py-2 text-sm font-medium text-white rounded-md ${
                      server.status === 'Active' ? 'bg-red-500' : 'bg-green-500'
                    } hover:bg-opacity-90 transition`}
                  >
                    {server.status === 'Active' ? 'Stop' : 'Start'}
                  </button>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600">No servers available.</p>
            )}
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Redirecting to login...</p>
      )}
    </div>
  );
}
