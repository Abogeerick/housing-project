import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaSquareXTwitter, FaPinterest, FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <footer className="text-gray-800 mt-8 py-12 px-4 md:px-8 lg:px-16">
            <ul className="flex flex-wrap justify-around items-start">
                <li className="flex flex-col space-y-4 mb-8">
                    <span className="text-xl font-semibold text-indigo-500 text-center">Maramani</span>
                    <p className="font-sans text-xl leading-relaxed text-gray-800">
                        Maramani LLC is an International Business incorporated in the USA with Company number 2020-000926283. Specialized in creating house plans since 2014, we work with a diverse team of professionals to bring you the best and affordable building documents for the African market.
                    </p>
                </li>
    
                <li className="flex flex-col space-y-3">
                    <span className="text-lg font-semibold text-gray-800">Quick Links</span>
                    <div className="flex flex-col space-y-2">
                        <NavLink to="/" className="text-gray-800 hover:bg-indigo-500 hover:text-white rounded-lg p-2 transition-colors duration-300">Home</NavLink>
                        <NavLink to="/about" className="text-gray-800 hover:bg-indigo-500 hover:text-white rounded-lg p-2 transition-colors duration-300">About</NavLink>
                        <NavLink to="/contact" className="text-gray-800 hover:bg-indigo-500 hover:text-white rounded-lg p-2 transition-colors duration-300">Contact Us</NavLink>
                        <NavLink to="/blog" className="text-gray-800 hover:bg-indigo-500 hover:text-white rounded-lg p-2 transition-colors duration-300">Blog</NavLink>
                    </div>
                </li>
    
                <li className="flex flex-col space-y-4">
                    <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-2">
                        <input
                            className="w-full border-b-2 border-gray-800 bg-transparent py-1 px-2 text-gray-800 focus:border-indigo-500 outline-none"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Enter Email"
                        />
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white font-medium p-2 mt-3 hover:bg-indigo-700 transition-all ease-in-out duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                    <div className="flex gap-4 text-gray-800">
                        <FaInstagram className="text-2xl hover:text-indigo-500" />
                        <FaSquareXTwitter className="text-2xl hover:text-indigo-500" />
                        <FaPinterest className="text-2xl hover:text-indigo-500" />
                        <FaSquareFacebook className="text-2xl hover:text-indigo-500" />
                    </div>
                </li>
            </ul>
            <hr className="my-8 border-gray-700" />
            <small className="text-xs text-center text-gray-800">
                &#169; 2023 Ecomm All rights reserved.
            </small>
        </footer>
    );
}

export default Footer;
