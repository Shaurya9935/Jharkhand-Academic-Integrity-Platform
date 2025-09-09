import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f7fd] to-[#eaf1fb] flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center mt-10 mb-8">
        <span className="material-symbols-outlined text-5xl text-blue-600 mb-2">
          shield
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Jharkhand Academic Integrity Platform
        </h1>
        <p className="text-gray-500 mt-2 text-center text-lg">
          Sign in to your account
        </p>
      </div>

      {/* Login Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-gray-500 text-center mb-6">
          Enter your credentials to access your dashboard
        </p>
        <form>
          <label className="block mb-2 font-medium">Email Address</label>
          <div className="relative mb-4">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              mail
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
          <label className="block mb-2 font-medium">Password</label>
          <div className="relative mb-6">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              lock
            </span>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold text-lg hover:bg-blue-700 transition mb-4"
          >
            Sign In
          </button>
        </form>
        <hr className="my-4" />
        <div className="text-sm text-gray-500 mb-2 text-center">
          <span className="font-semibold">Demo Credentials:</span>
          <br />
          <span className="font-semibold">Student:</span>{" "}
          student@example.com / password123
          <br />
          <span className="font-semibold">Institution:</span>{" "}
          institution@example.com / password123
        </div>
        <div className="text-center mt-2">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
