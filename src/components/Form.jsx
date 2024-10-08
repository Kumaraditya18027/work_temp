import React, { useState } from 'react';
import Select from 'react-select'; 
import tagOptions from '../assets/tags.json'; 
import categoryOptions from '../assets/categories.json'

const Form = () => {
  const [file, setFile] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTagChange = (selectedOptions) => {
    setSelectedTags(selectedOptions);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F5F5F5] via-[#B0C4DE] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-3xl p-8 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: '#F0F8FF', border: '1px solid #ffcccc' }}>
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center" style={{ fontFamily: 'Book Antiqua' }}>
          Quickgen
        </h2>

        <form className="space-y-6">
          {/* Category Dropdown */}
          <div className="flex justify-between items-center">
            <div className="flex-1 mr-2">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700" style={{ fontFamily: 'Book Antiqua' }}>
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="mt-1 block w-full p-3 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              >
                <option>Select a category</option>
                {categoryOptions.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            {/* Tags Input */}
            <div className="flex-1 ml-2">
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700" style={{ fontFamily: 'Book Antiqua' }}>
                Tags
              </label>
              <Select
                isMulti
                options={tagOptions}
                onChange={handleTagChange}
                className="mt-1"
                classNamePrefix="react-select"
                placeholder="Select tags..."
                closeMenuOnSelect={false}
                styles={{
                  control: (base) => ({
                    ...base,
                    border: '1px solid #ccc',
                    boxShadow: 'none',
                    '&:hover': {
                      border: '1px solid #007BFF',
                    },
                  }),
                }}
              />
            </div>
          </div>

          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700" style={{ fontFamily: 'Book Antiqua' }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="mt-1 block w-full p-3 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>

          {/* Description Input */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700" style={{ fontFamily: 'Book Antiqua' }}>
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              placeholder="Enter description"
              className="mt-1 block w-full p-3 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>

          {/* Host List Input */}
          <div>
            <label htmlFor="hostlist" className="block text-sm font-medium text-gray-700" style={{ fontFamily: 'Book Antiqua' }}>
              Host List (comma-separated)
            </label>
            <input
              type="text"
              id="hostlist"
              placeholder="Enter hosts separated by commas"
              className="mt-1 block w-full p-3 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>

          {/* PCAP File Upload Button */}
          <div className="flex items-center border border-gray-300 rounded-md bg-blue-300 p-2" style={{ width: 'fit-content' }}>
            <label className="block text-sm font-medium text-gray-700 mr-4" style={{ fontFamily: 'Book Antiqua' }}>
              PCAP File
            </label>
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              onClick={() => document.getElementById('file-upload').click()}
            >
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                className="hidden"
                accept=".pcap"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 01.993.883L11 6v3h3a1 1 0 01.117 1.993L14 11h-3v3a1 1 0 01-1.993.117L9 14v-3H6a1 1 0 01-.117-1.993L6 9h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md shadow-lg transition duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
