import { CurrencyDollarIcon } from "@heroicons/react/24/solid"; // Ensure this matches your installed version

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col items-center justify-center">
      <div className="mb-8">
        <CurrencyDollarIcon className="h-24 w-24 text-yellow-400" />
      </div>

      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Financial Tracker</h1>
        <p className="text-lg">
          Manage your money wisely and keep your finances in check.
        </p>
      </header>

      <div className="flex space-x-4">
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded shadow-lg">
          Get Started
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded shadow-lg">
          Learn More
        </button>
      </div>
    </div>
  );
}
