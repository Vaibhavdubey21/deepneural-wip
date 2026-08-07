'use client';

import { AlertTriangle, CheckCircle, Send } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Send form data to the API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      // Success
      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 dark:border-slate-700 shadow-md bg-white dark:bg-zinc-800 p-4 md:p-5">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-4">
          <CheckCircle size={40} className="text-green-500 mb-2" />
          <h3 className="text-lg font-bold text-center mb-1 text-zinc-900 dark:text-white">
            Thank You!
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-center text-sm">
            Your message has been received. We&apos;ll get back to you shortly.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-2.5"
          id="contact-form"
        >
          {error && (
            <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-3 py-2 rounded-md flex items-start text-sm">
              <AlertTriangle size={16} className="mr-2 shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-0.5"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className={`w-full px-3 py-1.5 text-sm border rounded-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-slate-700'
                  }`}
                placeholder="John Doe"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="mt-0.5 text-xs text-red-600 dark:text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-0.5"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-3 py-1.5 text-sm border rounded-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-slate-700'
                  }`}
                placeholder="john@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <p className="mt-0.5 text-xs text-red-600 dark:text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-0.5"
            >
              Company (Optional)
            </label>
            <input
              id="company"
              type="text"
              className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-slate-700 rounded-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Your Company"
              {...register('company')}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-0.5"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={3}
              className={`w-full px-3 py-1.5 text-sm border rounded-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-slate-700'
                }`}
              placeholder="How can we help you?"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && (
              <p className="mt-0.5 text-xs text-red-600 dark:text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full !text-white"
            disabled={isSubmitting}
            icon={<Send size={16} />}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
