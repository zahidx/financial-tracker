"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use the new `next/navigation` hook
import { db } from "../components/firebase"; 
import { collection, addDoc, Timestamp, getDocs, updateDoc, doc } from "firebase/firestore"; 
import Modal from "./Modal"; // Import Modal component
import { FaEdit } from "react-icons/fa";

const Content = ({ userData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingBook, setEditingBook] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [routerAvailable, setRouterAvailable] = useState(false);
  const router = useRouter(); // Now using next/navigation

  useEffect(() => {
    setIsClient(true);
    setRouterAvailable(true);

    const fetchBooks = async () => {
      try {
        const booksSnapshot = await getDocs(collection(db, "books"));
        const booksList = booksSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooks(booksList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books: ", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSave = async () => {
    if (bookName.trim()) {
      try {
        await addDoc(collection(db, "books"), {
          name: bookName,
          createdAt: Timestamp.now(),
        });

        handleCloseModal();
        setBooks((prevBooks) => [
          { name: bookName, createdAt: Timestamp.now() },
          ...prevBooks,
        ]);
        setBookName(""); 
      } catch (error) {
        console.error("Error saving book: ", error);
      }
    }
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    setBookName(book.name);
    setIsModalOpen(true);
  };

  const handleRename = async () => {
    if (bookName.trim() && editingBook) {
      try {
        const bookRef = doc(db, "books", editingBook.id);
        await updateDoc(bookRef, {
          name: bookName,
        });

        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.id === editingBook.id ? { ...book, name: bookName } : book
          )
        );

        handleCloseModal();
        setEditingBook(null);
        setBookName(""); 
      } catch (error) {
        console.error("Error renaming book: ", error);
      }
    }
  };

  const handleBookClick = (bookId) => {
    if (routerAvailable) {
      router.push(`/book/${bookId}`); // Navigate using next/navigation
    }
  };

  if (!isClient) {
    return null;
  }

  const formatTimestamp = (timestamp) => {
    const timeAgo = Math.floor((Timestamp.now().seconds - timestamp.seconds) / 60);
    if (timeAgo < 1) return "less than a minute ago";
    if (timeAgo === 1) return "1 minute ago";
    return `${timeAgo} minutes ago`;
  };
  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/5 bg-gradient-to-r from-[#101529] to-[#2E093C] text-white p-6 flex flex-col justify-between">
        <div>
          <div className="text-center mb-6">
            <span className="block text-lg">{userData?.firstName || "User"}</span>
          </div>
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md">
              Cashbook
            </button>
          </div>
        </div>
      </div>

      <div className="w-4/5 bg-white dark:bg-gray-800 p-8 flex flex-col">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          Welcome, {userData?.firstName || "User"}!
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Tom's Business
          </h2>
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Business Team</div>
          <div className="text-gray-700 dark:text-gray-300 mb-4">Your Role: Owner</div>
          <div className="flex items-center mb-6">
            <input
              type="text"
              placeholder="Search by book name..."
              className="w-1/3 p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-4"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md">
              Search
            </button>
          </div>
        </section>

            <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Books
      </h3>
      <div className="space-y">
        {loading ? (
          <div>Loading...</div>
        ) : (
          books.map((book) => (
            <div
              key={book.id}
              className="flex flex-col border-b border-gray-900 pb-4 relative group w-3/4 text-gray-800 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 p-5"
              onClick={() => handleBookClick(book.id)} // Navigate on book click
            >
              <div className="text-lg">{book.name}</div>
              <div className="text-sm text-gray-500 mt-1">
                {formatTimestamp(book.createdAt)}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigation on button click
                  handleEdit(book);
                }}
                className="absolute top-2 right-2 text-gray-50 group-hover:block hidden"
              >
                <FaEdit />
              </button>
            </div>
          ))
        )}
      </div>
    </div>

        <div className="mt-auto text-right mb-64 mr-20">
          <button
            onClick={handleOpenModal}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md"
          >
            Add New Book
          </button>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        handleSave={handleSave}
        handleRename={handleRename}
        bookName={bookName}
        setBookName={setBookName}
        editingBook={editingBook}
      />
    </div>
  );
};

export default Content;
