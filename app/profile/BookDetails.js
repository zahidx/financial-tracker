"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../components/firebase"; // Adjust path as necessary
import { doc, getDoc } from "firebase/firestore";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const router = useRouter();
  const { id } = router.query; // Get the book ID from the URL

  useEffect(() => {
    const fetchBookDetails = async () => {
      if (!id) return; // Ensure id is available

      try {
        const bookDoc = await getDoc(doc(db, "books", id));
        if (bookDoc.exists()) {
          setBook(bookDoc.data());
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching book details: ", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.name}</h1>
      <p>Created at: {book.createdAt.toDate().toLocaleString()}</p>
      {/* Render other book details */}
    </div>
  );
};

export default BookDetails;
