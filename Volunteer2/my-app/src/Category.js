import React, { useState } from 'react';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const categories = ['Waste', 'Footpath', 'Encroachment', 'Unsafe Zone', 'Obstruction'];
  const subcategories = {
    Waste: ['litter','construction','slit','garbage'],
    Footpath: ['broken foot path','level difference'],
    Encroachment: ['by vendor', 'by parking', 'by planter'],
    'Unsafe Zone': ['dark zone'],
    Obstruction: ['Junction boxes', 'Low hanging wires', 'Transformers','overgrown weeds'],
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  const subcategoryOptions = subcategories[selectedCategory] || [];

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <select value={selectedSubcategory} onChange={handleSubcategoryChange}>
          <option value="">Select a subcategory</option>
          {subcategoryOptions.map((subcategory) => (
            <option value={subcategory} key={subcategory}>
              {subcategory}
            </option>
          ))}
        </select>
      )}

      {selectedCategory && (
        <div>
          <h2>Category: {selectedCategory}</h2>
          <h3>Subcategory: {selectedSubcategory}</h3>
        </div>
      )}
    </div>
  );
};

export default Category;
