"use client";

import { useState } from 'react'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.')
      return
    }
    // Simulate async submit
    setTimeout(() => setSubmitted(true), 800)
  }

  if (submitted) {
    return (
      <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-600 dark:text-primary-400">Thank you!</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Your message has been received. We’ll get back to you soon.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom max-w-xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <span>📬</span>
            <span>Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Let’s Connect</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Have questions or want a demo? Fill out the form and our team will reach out!</p>
        </div>
        <form className="bg-white/90 dark:bg-gray-800/90 border border-primary-300 dark:border-primary-700 rounded-2xl p-8 shadow-2xl space-y-6" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="input-field"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="input-field"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="input-field"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="button-primary w-full">Send Message</button>
        </form>
      </div>
    </section>
  )
}