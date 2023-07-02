import React, { useState } from 'react';

const Location = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [ward, setWard] = useState('');
  const [route, setRoute] = useState('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });

          // Generate random values for ward and route based on latitude and longitude
          const wards = ['Ward 1', 'Ward 2', 'Ward 3', 'Ward 4', 'Ward 5'];
          const routes = ['Route 1', 'Route 2', 'Route 3', 'Route 4', 'Route 5'];

          const randomWard = wards[Math.floor(Math.random() * wards.length)];
          const randomRoute = routes[Math.floor(Math.random() * routes.length)];

          setWard(randomWard);
          setRoute(randomRoute);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <button className='loc-btn' onClick={getLocation}>Get Location</button>

      {userLocation && (
        <div className='location'>
          <h2>User Location:</h2>
          <input type="text" value={userLocation.latitude} readOnly />
          <input type="text" value={userLocation.longitude} readOnly />
        </div>
      )}

      <div>
        <label>Ward:</label>
        <input type="text" value={ward} readOnly />
      </div>
      <div>
        <label>Route:</label>
        <input type="text" value={route} readOnly />
      </div>
    </div>
  );
};

export default Location;
