"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Contact Us</h1>
        
        <p className="text-center text-gray-600 mb-6">
          If you have any questions, feel free to reach out to us using the form below.
        </p>
        
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Your Message</label>
            <textarea
              id="message"
              placeholder="Write your message here"
              className="w-full p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
