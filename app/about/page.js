"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">About Financial Tracker</h1>
        
        <p className="text-center text-gray-600 mb-6">
          Welcome to Financial Tracker! Our goal is to help you manage your finances effortlessly, giving you an easy way to track your income, expenses, and savings.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Key Features</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Track your income and expenses in real-time.</li>
            <li>Set financial goals and monitor your progress.</li>
            <li>Get insights into your spending habits.</li>
            <li>Secure and easy-to-use dashboard for managing finances.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">How It Works</h2>
          <p className="text-gray-700">
            Financial Tracker allows you to enter your income and expenses and categorize them accordingly. With our easy-to-use dashboard, you can visualize your financial health at a glance.
            You can also set budgets for specific categories, ensuring that you stick to your financial goals.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
          <p className="text-gray-700">
            Our app is designed with simplicity in mind, while offering powerful features to manage your finances effectively. Whether you're looking to save for a goal or keep track of your expenses, Financial Tracker has you covered.
          </p>
        </section>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
