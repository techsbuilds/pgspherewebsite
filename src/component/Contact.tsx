"use client";

import axios from "axios";
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  mobile_no: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  mobile_no?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    mobile_no: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.mobile_no.trim()) {
      newErrors.mobile_no = "Contact number is required";
    } else if (!phoneRegex.test(formData.mobile_no)) {
      newErrors.mobile_no = "Enter a valid 10-digit mobile number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL

    e.preventDefault();
    setSuccessMessage(null);
    setSubmitError(null);
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      // Simulate submit
      await new Promise(resolve => setTimeout(resolve, 500));
      if (!API_URL) {
        throw new Error("Backend URL is not configured.");
      }
      const response = await axios.post<{ message?: string }>(`${API_URL}/contact`, formData)

      if (response.status === 201) {
        setSuccessMessage("Thanks! Your message has been sent.");
        setFormData({ name: "", email: "", mobile_no: "", message: "" });
      } else {
        const maybeMessage = response.data?.message || "We couldn't submit your request. Please try again.";
        setSubmitError(maybeMessage);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError<{ message?: string }>(error)) {
        const axiosMessage = error.response?.data?.message;
        const networkMessage = error.message === "Network Error" ? "Network error. Please check your connection and try again." : undefined;
        setSubmitError(axiosMessage || networkMessage || "Something went wrong while sending your message. Please try again.");
      } else if (error instanceof Error) {
        setSubmitError(error.message || "Something went wrong while sending your message. Please try again.");
      } else {
        setSubmitError("Something went wrong while sending your message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="py-16 bg-gray-100 ">
      <div className="w-full px-3 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wider">
            <span className="text-[#202947]">CONTACT</span>{" "}
            <span className="text-[#202947]">US</span>
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="w-6 sm:w-8 h-0.5 bg-[#202947]"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#202947] rounded-full mx-2"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#202947] rounded-full mx-2"></div>
            <div className="w-6 sm:w-8 h-0.5 bg-[#202947]"></div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {successMessage && (
              <div role="status" aria-live="polite" className="rounded-xl border border-green-200 bg-green-50 p-3 text-green-800">
                {successMessage}
              </div>
            )}
            {submitError && (
              <div role="alert" aria-live="assertive" className="rounded-xl border border-red-200 bg-red-50 p-3 text-red-800">
                {submitError}
              </div>
            )}
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202947] focus:border-transparent transition-all duration-300 placeholder:text-gray-500 placeholder:font-medium text-sm sm:text-base bg-white text-gray-900 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202947] focus:border-transparent transition-all duration-300 placeholder:text-gray-500 placeholder:font-medium text-sm sm:text-base bg-white text-gray-900 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Contact Number */}
            <div>
              <input
                type="tel"
                id="mobile_no"
                name="mobile_no"
                placeholder="Your Contact Number"
                value={formData.mobile_no}
                onChange={handleInputChange}
                maxLength={10}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202947] focus:border-transparent transition-all duration-300 placeholder:text-gray-500 placeholder:font-medium text-sm sm:text-base bg-white text-gray-900 ${errors.mobile_no ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.mobile_no && (
                <p className="mt-1 text-sm text-red-600">{errors.mobile_no}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Your Message"
                rows={6}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202947] focus:border-transparent transition-all duration-300 resize-none placeholder:text-gray-500 placeholder:font-medium text-sm sm:text-base bg-white text-gray-900 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#202947] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f3a] transition-colors duration-300 flex items-center gap-2 mx-auto text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Scroll to Top Button */}
        
      </div>
    </div>
  );
}
