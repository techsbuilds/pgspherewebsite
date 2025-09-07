"use client";
import axios from "axios";
import { useState } from "react";
import { Eye, EyeOff, User, Mail, Phone, Building, MapPin, Lock } from "lucide-react";

interface FormData {
    full_name: string;
    email: string;
    contactno: string;
    pgname: string;
    address: string;
    password: string;
}

interface FormErrors {
    full_name?: string;
    email?: string;
    contactno?: string;
    pgname?: string;
    address?: string;
    password?: string;
}

export default function SignupForm() {
    const [formData, setFormData] = useState<FormData>({
        full_name: "",
        email: "",
        password: "",
        contactno: "",
        pgname: "",
        address: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Full Name validation
        if (!formData.full_name.trim()) {
            newErrors.full_name = "Full name is required";
        } else if (formData.full_name.trim().length < 2) {
            newErrors.full_name = "Full name must be at least 2 characters";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // contactno validation
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!formData.contactno.trim()) {
            newErrors.contactno = "contactno number is required";
        } else if (!phoneRegex.test(formData.contactno)) {
            newErrors.contactno = "Please enter a valid 10-digit mobile number";
        }

        // PG Name validation
        if (!formData.pgname.trim()) {
            newErrors.pgname = "PG name is required";
        } else if (formData.pgname.trim().length < 2) {
            newErrors.pgname = "PG name must be at least 2 characters";
        }

        // Address validation
        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
        } else if (formData.address.trim().length < 10) {
            newErrors.address = "Address must be at least 10 characters";
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 3) {
            newErrors.password = "Password must be at least 3 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSuccessMessage(null);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            const response = await axios.post(`${API_URL}/auth/sign-up`, formData);

            if(response.data.success){
                setSuccessMessage(response.data.message || "🎉 Account created successfully! Welcome aboard! 🎉");
            }
            // Here you would typically send the data to your backend
            console.log("Form submitted:", formData);

            // Reset form after successful submission
            setFormData({
                full_name: "",
                email: "",
                contactno: "",
                pgname: "",
                address: "",
                password: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error creating account. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen md:pt-40 pb-20 bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
            <div className="w-full max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Create Your <span className="text-[#202947]">Account</span>
                    </h1>
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-12 h-0.5 bg-gray-300"></div>
                        <div className="w-2 h-2 bg-[#202947] rounded-full mx-4"></div>
                        <div className="w-12 h-0.5 bg-gray-300"></div>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Join PG Sphere and start managing your PG efficiently
                    </p>
                </div>

                {/* Form */}
                <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {successMessage && (
                            <div role="status" aria-live="polite" className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-800 flex items-center gap-3 shadow-sm">
                                <span className="text-2xl" aria-hidden>🥳</span>
                                <p className="m-0 font-semibold">
                                    {successMessage}
                                </p>
                                <span className="ml-auto text-2xl" aria-hidden>✅</span>
                            </div>
                        )}
                        {/* Row 1: Full Name and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        id="full_name"
                                        name="full_name"
                                        value={formData.full_name}
                                        onChange={handleInputChange}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#202947] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500 ${errors.full_name ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                {errors.full_name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.full_name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#202947] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                )}
                            </div>
                        </div>

                        {/* Row 2: contactno and PG Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* contactno */}
                            <div>
                                <label htmlFor="contactno" className="block text-sm font-medium text-gray-700 mb-2">
                                    contactno Number *
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="tel"
                                        id="contactno"
                                        name="contactno"
                                        value={formData.contactno}
                                        onChange={handleInputChange}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#202947] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500 ${errors.contactno ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Enter your 10-digit mobile number"
                                        maxLength={10}
                                    />
                                </div>
                                {errors.contactno && (
                                    <p className="mt-1 text-sm text-red-600">{errors.contactno}</p>
                                )}
                            </div>

                            {/* PG Name */}
                            <div>
                                <label htmlFor="pgname" className="block text-sm font-medium text-gray-700 mb-2">
                                    PG Name *
                                </label>
                                <div className="relative">
                                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        id="pgname"
                                        name="pgname"
                                        value={formData.pgname}
                                        onChange={handleInputChange}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#202947] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500 ${errors.pgname ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Enter your PG name"
                                    />
                                </div>
                                {errors.pgname && (
                                    <p className="mt-1 text-sm text-red-600">{errors.pgname}</p>
                                )}
                            </div>
                        </div>
                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password *
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#202947] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500 ${errors.password ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Create a strong password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                            )}
                        </div>

                        {/* Address */}
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                                Address *
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#202947] focus:border-transparent transition-colors resize-none text-gray-900 placeholder-gray-500 ${errors.address ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Enter your complete address"
                                />
                            </div>
                            {errors.address && (
                                <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                            )}
                        </div>



                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#202947] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a1f3a] focus:ring-2 focus:ring-[#202947] focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Creating Account..." : "Create Account"}
                            </button>
                        </div>

                        {/* Login Link */}
                        <div className="text-center pt-4">
                            <p className="text-sm text-gray-600">
                                Already have an account?{" "}
                                <a href="/login" className="text-[#202947] font-semibold hover:underline">
                                    Sign in here
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
