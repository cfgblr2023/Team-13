import React, { useState } from 'react';

const Type = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [lineDistance, setLineDistance] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLineDistanceChange = (event) => {
    setLineDistance(event.target.value);
  };

  const handleUpload = () => {
    // Handle upload logic here
    console.log('Upload button clicked');
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="point">Point</option>
        <option value="line">Line</option>
      </select>
      
      {selectedOption === 'point' && (
        <div>
          <input type="file" />
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}

      {selectedOption === 'line' && (
        <div>
          <input
            type="number"
            placeholder="Enter line distance"
            value={lineDistance}
            onChange={handleLineDistanceChange}
          />
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}

      <p>Selected option: {selectedOption}</p>
      {selectedOption === 'line' && <p>Line distance: {lineDistance}</p>}
    </div>
  );
};

export default Type;
