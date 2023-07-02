import React, { useState } from 'react';

const ImageUploadButton = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));

    // Generate random values for category, subcategory, ward, and route
    const categories = ['Waste', 'Footpath quality', 'Obstruction','unsafe zone','enchroachment'];
    const subcategories = {
      Waste: ['litter', 'slit', 'garbage',],
      enchroachment: ['by planters', 'by vendors', 'by planting'],
      obstruction: ['low hanging wires', 'junction boxes','construction debris']
      
    };

    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomSubcategory = subcategories[randomCategory][Math.floor(Math.random() * subcategories[randomCategory].length)];
    

    setCategory(randomCategory);
    setSubcategory(randomSubcategory);
   
  };

  return (
    <div>
      <input className='ip' type="file" onChange={handleImageUpload} />
      <div>
        <label>Category:</label>
        <input className='ip' type="text" value={category} disabled />
      </div>
      <div>
        <label>Subcategory:</label>
        <input className='ip' type="text" value={subcategory} disabled />
      </div>
      
    </div>
  );
};

export default ImageUploadButton;
