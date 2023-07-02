import React, { useState } from 'react';

const Location = () => {
  const [userLocation, setUserLocation] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
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
      <button onClick={getLocation}>Get Location</button>

      {userLocation && (
        <div>
          <h2>User Location:</h2>
          <input type="text" value={userLocation.latitude} readOnly />
          <input type="text" value={userLocation.longitude} readOnly />
        </div>
      )}
    </div>
  );
};

export default Location;
