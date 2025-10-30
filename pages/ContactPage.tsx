
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-light">
      {/* Page Header */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">Get In Touch</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
                <p className="mt-2 text-gray-600">Fill up the form and our team will get back to you within 24 hours.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="text-gray-700">8089223990</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="text-gray-700">aptivoraglobalsolutions@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-gray-700">Aptivora global solutions<br></br>
                    St. Thomas College (Autonomous)
Thrissur - 680 001, Kerala, India</span>
                </div>
              </div>
             
            </div>

            {/* Contact Form */}
         <form
  action="https://formspree.io/f/xgvpvgla"
  method="POST"
  className="space-y-6"
>
  <div>
    <label
      htmlFor="name"
      className="block text-sm font-medium text-gray-700"
    >
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      required
      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
    />
  </div>

  <div>
    <label
      htmlFor="email"
      className="block text-sm font-medium text-gray-700"
    >
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      required
      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
    />
  </div>

  <div>
    <label
      htmlFor="message"
      className="block text-sm font-medium text-gray-700"
    >
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={5}
      required
      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary-dark transition-colors duration-300 shadow-lg"
  >
    Send Message
  </button>
</form>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
