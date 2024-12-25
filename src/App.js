import React, { useState, useEffect } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const res = await fetch(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      const data = await res.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {user ? (
        <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-lg w-full">
          <div className="flex items-center justify-center p-6">
            <img
              src={user.picture.large}
              alt="User"
              className="w-28 h-28 rounded-full border-2 border-gray-300"
            />
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {user.name.first} {user.name.last}
              </h2>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-600">Gender: {user.gender}</p>
              <p className="text-sm text-gray-600">Phone: {user.phone}</p>
              <p className="text-sm text-gray-600">Cell: {user.cell}</p>
            </div>
          </div>
          <hr />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Address
            </h3>
            <p className="text-sm text-gray-600">
              {user.location.street.number} {user.location.street.name},{" "}
              {user.location.city}, {user.location.state},{" "}
              {user.location.country} - {user.location.postcode}
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
              Date of Birth
            </h3>
            <p className="text-sm text-gray-600">
              {new Date(user.dob.date).toLocaleDateString()}
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
              Nationality
            </h3>
            <p className="text-sm text-gray-600">{user.nat}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Loading...</p>
      )}
    </div>
  );
}
