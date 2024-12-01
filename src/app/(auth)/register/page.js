"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitted value: ", {
                name: name,
                password: password,
            });
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="lg:w-full inset-4 lg:inset-0 max-w-md p-8 space-y-3 bg-white/20 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Register</h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500 dark:text-black"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium"
                        >
                            Name
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500 dark:text-black"
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500 dark:text-black"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 text-white bg-violet-600 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                        Sign up
                    </button>
                </form>
                <p className="text-sm text-center text-gray-100">
                    Don't have an account?{" "}
                    <Link
                        href="/login"
                        className="text-violet-300 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
