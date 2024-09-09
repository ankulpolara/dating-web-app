





"use client";
import React, { useState } from "react";

export const Register = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(true);
    const [loading, setLoading] = useState(false);
    // const [Gloading, setGLoading] = useState(false);

    const handleSubmit = () => {
        // Implement form submission logic
        console.log("Form submitted", { userName, email, password });
        setLoading(true);
        // Simulate form submission
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-400 via-purple-500 to-blue-600 text-white p-4 bg-[#ffffff58]">
            <h1 className="text-3xl font-bold mb-8">Register</h1>
            <div className=" w-full sm:w-1/2  md:w-2/6 p-10 rounded-lg bg-[#ffffff51] flex flex-col justify-center items-center">

                {/* Username Input */}
                <div className="w-full max-w-md mb-4">
                    <label className="block text-white mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        className="w-full p-2 border-b-2 rounded-xl border-white bg-transparent text-white outline-none"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>

                {/* Email Input */}
                <div className="w-full max-w-md mb-4">
                    <label className="block text-white mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full p-2 border-b-2 rounded-xl border-white bg-transparent text-white outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password Input */}
                <div className="w-full max-w-md mb-4 relative">
                    <label className="block text-white mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type={show ? "password" : "text"}
                        className="w-full p-2 border-b-2 rounded-xl border-white bg-transparent text-white outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                        className="absolute right-2 text-gray-500 top-10 cursor-pointer"
                        onClick={() => setShow(!show)}
                    >
                        {show ? "Show" : "Hide"}
                    </span>
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    className={`mt-4 w-full max-w-md p-3 text-white bg-blue-500 rounded-xl ${loading ? "opacity-50" : "hover:bg-blue-600"}`}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Submit"}
                </button>

                <p className="mt-4">
                    Have an Account?{" "}
                    <a href="/sign-in" className="text-pink-400 hover:text-pink-600">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
};







// const handleSubmit = async () => {
//         userName.trim();
//         // Define the regex pattern for email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         // Check if all fields are filled
//         if (!userName || !email || !password) {
//             toast.warn("All fields are mandatory");
//             return;
//         }

//         // Validate the email format
//         if (!emailRegex.test(email)) {
//             toast.warn("Please enter a valid email address");
//             return;
//         }

//         // Validate that the userName does not contain spaces
//         if (/\s/.test(userName)) {
//             toast.warn("Username must not contain spaces");
//             return;
//         }

//         // If all validations pass, proceed with form submission
//         const data = { userName, email, password };
//         setLoading(true);
//         let response = await axiosInstance("/signup", "post", data);
//         if (response.success === false) {
//             toast.warn(response.message);
//             setLoading(false);
//             return;
//         }
//         console.log(response);
//         setLoading(false);





//         // Clear the form fields
//         setUserName("");
//         setemail("");
//         setpassword("");
//         navigate("/sign-in");
//     // }