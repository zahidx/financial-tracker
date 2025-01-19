// pages/book/[id].js

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../components/firebase"; // Adjust path based on your project structure
import { doc, getDoc } from "firebase/firestore";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query; // Get the book ID from the URL

  useEffect(() => {
    const fetchBookDetails = async () => {
      if (!id) return; // Avoid running the fetch before the ID is available

      try {
        const bookDocRef = doc(db, "books", id);
        const bookSnapshot = await getDoc(bookDocRef);

        if (bookSnapshot.exists()) {
          setBook(bookSnapshot.data());
        } else {
          console.log("No such book!");
        }
      } catch (error) {
        console.error("Error fetching book details: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">{book.name}</h1>
      <p>Created at: {new Date(book.createdAt.seconds * 1000).toLocaleDateString()}</p>
      {/* Display other details as needed */}
    </div>
  );
};

export default BookDetails;
