import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const Modal = ({
  isOpen,
  handleClose,
  handleSave,
  handleRename,
  bookName,
  setBookName,
  editingBook
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {editingBook ? "Rename Book" : "Add New Book"}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            &times;
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Book Name</label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Daily Expense"
          />
        </div>
        <div className="text-right">
          <button
            onClick={editingBook ? handleRename : handleSave}  // Dynamically choose the handler
            className="bg-blue-600 text-white py-2 px-6 rounded-md"
          >
            {editingBook ? "Save Changes" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
