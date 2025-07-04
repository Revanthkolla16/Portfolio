import React from 'react'
import { useForm } from 'react-hook-form'

const contactInfo = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    value: "revanthkolla23@gmail.com",
    link: "mailto:revanthkolla23@gmail.com"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Location",
    value: "Hyderabad, India",
    link: null
  }
]

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/revanth-kolla",
    icon: (
      <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
    )
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Revanth2006/",
    icon: (
      <img src="/leetcode.svg" alt="LeetCode" className="w-8 h-8 leetcode-icon" />
    )
  },
  {
    name: "GitHub",
    url: "https://github.com/Revanthkolla16",
    icon: (
      <img src="/github.svg" alt="GitHub" className="w-8 h-8" />
    )
  }
]

const Contact = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to start a project or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
          </p>
        </div>

        {/* Contact Form & Info Row */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          {/* Contact Form (Left) */}
          <ContactForm />

          {/* Info & Quick Links (Right) */}
          <div className="flex-1 flex flex-col justify-center items-center w-full max-w-3xl mx-auto md:mx-0">
            {/* Email & Location Info */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full mb-8">
              {/* Email */}
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white mb-2 shadow-lg">
                  {contactInfo[0].icon}
                </div>
                <h4 className="text-white font-semibold text-lg">{contactInfo[0].title}</h4>
                <a 
                  href={contactInfo[0].link}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-base"
                >
                  {contactInfo[0].value}
                </a>
              </div>
              {/* Location */}
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white mb-2 shadow-lg">
                  {contactInfo[1].icon}
                </div>
                <h4 className="text-white font-semibold text-lg">{contactInfo[1].title}</h4>
                <p className="text-gray-400 text-base">{contactInfo[1].value}</p>
              </div>
            </div>
            {/* Quick Links */}
            <div className="w-full flex flex-col items-center mb-2">
              <h4 className="text-white font-semibold mb-4 text-lg">Quick links</h4>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link w-14 h-14 rounded-full flex items-center justify-center bg-gray-800/60 border border-gray-700 text-gray-400 transition-all duration-300 transform hover:scale-110 shadow-md hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_16px_#06b6d4,0_0_32px_#3b82f6]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 my-6 mt-12 text-sm">
          © 2025 Revanth Kolla
        </div>
      </div>
      <style>{`
      .leetcode-icon {
        filter: grayscale(1) brightness(0.8);
        transition: filter 0.3s;
      }
      .social-link:hover .leetcode-icon {
        filter: none;
      }
      `}</style>
    </div>
  )
}

function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [message, setMessage] = React.useState("");
  const [messageType, setMessageType] = React.useState(""); // 'success' or 'error'

  const onSubmit = async (data) => {
    setMessage("");
    setMessageType("");
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      setMessage(result.message);
      setMessageType(result.success ? "success" : "error");
      if (result.success) reset();
    } catch (err) {
      setMessage("Something went wrong. Please try again later.");
      setMessageType("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 w-full max-w-2xl bg-gray-800/60 rounded-xl p-8 shadow-lg border border-gray-700 mx-auto md:mx-0">
      {message && (
        <div className={`mb-6 px-4 py-3 rounded text-center font-medium shadow transition-all duration-300
          ${messageType === 'success' ? 'bg-green-600/80 text-white border border-green-400' : 'bg-red-600/80 text-white border border-red-400'}`}
        >
          {message}
        </div>
      )}
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
        <input
          id="name"
          className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Your Name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
        <input
          id="email"
          type="email"
          className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="you@example.com"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address'
            }
          })}
        />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
        <textarea
          id="message"
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Type your message here..."
          {...register('message', { required: 'Message is required' })}
        ></textarea>
        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-md hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 cursor-pointer"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

export default Contact 