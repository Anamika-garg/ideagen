import React from 'react';

const themes = [
  { id: 1, name: 'Dawn', author: 'by Shopify', imgSrc: 'https://via.placeholder.com/300x200' },
  { id: 2, name: 'Spotlight', author: 'by Shopify', imgSrc: 'https://via.placeholder.com/300x200' },
  { id: 3, name: 'Refresh', author: 'by Shopify', imgSrc: 'https://via.placeholder.com/300x200' },
  { id: 4, name: 'Sense', author: 'by Shopify', imgSrc: 'https://via.placeholder.com/300x200' },
];

const Theme = () => {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">Popular free themes</h2>
        <p className="text-gray-600">Made with core features you can easily customize—no coding needed.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {themes.map(theme => (
          <div key={theme.id} className="bg-white rounded-lg shadow p-4">
            <img src={theme.imgSrc} alt={`${theme.name} Theme`} className="w-full h-40 object-cover rounded-md mb-4" />
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{theme.name}</h3>
                <p className="text-gray-500">{theme.author}</p>
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button className="px-6 py-2 bg-gray-100 text-blue-500 rounded-md hover:bg-gray-200 transition">
          Visit Theme Store
        </button>
      </div>
    </div>
  );
};

export default Theme;
