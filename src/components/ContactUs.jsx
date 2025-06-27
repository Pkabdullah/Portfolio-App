"use client";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { ArrowUp } from "lucide-react";
const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    async function handleForm(e) {
        e.preventDefault();
        if (name === "" || email === "" || message === "" || subject === "") {
            toast.error("All fields are required");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({ name, email, message, subject }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();
            console.log("data", data);
            console.log("Form submitted:", name, email, subject, message);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");

            toast.success("Message Send successfully!");
            router.push("/")
        } catch (error) {
            toast.error("An error occurred while Sending Message.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="w-full lg:pt-20 relative" id="contact">
            <ToastContainer />

            <div className="w-full absolute left-0 bottom-0 min-h-96 top-1">
                <Image
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                    width={1}
                    height={1}
                />
            </div>

            <div className="flex flex-col items-center">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center font-supreme">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-300 md:mt-6 mt-4 mb-6 text-center max-w-xl px-4">
                    Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                </p>

                <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
                    <form onSubmit={handleForm}>
                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-300"
                                htmlFor="name"
                            >
                                Full Name
                            </label>
                            <input
                                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                                type="text"
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-300"
                                htmlFor="email"
                            >
                                Email Address
                            </label>
                            <input
                                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                                name="email"
                                id="email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-300"
                                htmlFor="Subject"
                            >
                                Subject
                            </label>
                            <input
                                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                                name="Subject"
                                id="subject"
                                type="text"
                                onChange={(e) => setSubject(e.target.value)}
                                value={subject}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-300"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                                rows="3"
                                name="message"
                                id="message"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <div className="relative group">
                                <button
                                    className={`relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95`}
                                    disabled={loading}
                                >
                                    <span
                                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                    ></span>

                                    <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                                        <div className="relative z-10 flex items-center space-x-2">
                                            <span className="transition-all duration-500 group-hover:translate-x-1"
                                            >  {loading ? "Submitting..." : "Submit"}</span
                                            >
                                            <svg
                                                className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                                                data-slot="icon"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                                    fillRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                    </span>
                                </button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>

           
 
        </section>
    );
};

export default ContactUs;
