"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Car } from "lucide-react";
import { toast } from "sonner";
//import { useToast } from "@/hooks/use-toast";

const page = () => {
  //const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast(
        "Message Sent. Thanks for reaching out! We'll get back to you shortly."
      );
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[var(--auto-haven-blue)] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('images/contact-hero.jpg')",
          }}
        ></div>
        <div className="py-16 max-w-screen-2xl mx-auto relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl">
              Get in touch with our team to discuss your automotive needs or
              schedule a visit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="py-16 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-body mb-8">
                Have a question about our services or interested in a specific
                vehicle? We'd love to hear from you. Our dedicated team is ready
                to assist you with any inquiries.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-[var(--auto-haven-blue)] rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-700">(555) 123-4567</p>
                    <p className="text-gray-500 text-sm">
                      Monday-Friday: 9AM - 6PM
                    </p>
                    <p className="text-gray-500 text-sm">
                      Saturday: 10AM - 4PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[var(--auto-haven-blue)] rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-1">
                      Email
                    </h3>
                    <p className="text-gray-700">info@autohaven-usa.com</p>
                    <p className="text-gray-500 text-sm">
                      We aim to respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[var(--auto-haven-blue)] rounded-full p-3 mr-4">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-1">
                      Visit Us
                    </h3>
                    <p className="text-gray-700">1234 Auto Haven Drive</p>
                    <p className="text-gray-700">Los Angeles, CA 90001</p>
                    <p className="text-gray-500 text-sm">By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-[var(--auto-haven-gray) rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--auto-haven-blue)] focus:border-autohaven-blue"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--auto-haven-blue)] focus:border-autohaven-blue"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--auto-haven-blue)] focus:border-autohaven-blue"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--auto-haven-blue)] focus:border-autohaven-blue"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Vehicle Purchase">
                          Vehicle Purchase
                        </option>
                        <option value="Vehicle Selling">Vehicle Selling</option>
                        <option value="Financing Options">
                          Financing Options
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--auto-haven-blue)] focus:border-autohaven-blue"
                      required
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[var(--auto-haven-red)] hover:bg-red-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
          {/* Map or Image */}
          <div className="mt-12">
            <div className="rounded-lg overflow-hidden shadow-md h-64 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.04443877126!2d-118.74139234979474!3d34.02060840125777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sna!4v1747906323537!5m2!1sen!2sna"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--auto-haven-gray)]">
        <div className="py-16 max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            {/* FAQ Item */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-montserrat font-semibold text-xl mb-2">
                How does your car trading process work?
              </h3>
              <p className="text-gray-700">
                Our process begins with a consultation to understand your needs.
                We then source vehicles that match your criteria, handle all
                paperwork and logistics, and deliver the vehicle to your
                location.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-montserrat font-semibold text-xl mb-2">
                Do you offer financing options?
              </h3>
              <p className="text-gray-700">
                Yes, we partner with multiple financial institutions to offer
                competitive financing options tailored to your needs and credit
                situation.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-montserrat font-semibold text-xl mb-2">
                Can I trade in my current vehicle?
              </h3>
              <p className="text-gray-700">
                Absolutely! We accept trade-ins and will provide a fair market
                value for your current vehicle, which can be applied toward your
                new purchase.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-montserrat font-semibold text-xl mb-2">
                Do you offer nationwide delivery?
              </h3>
              <p className="text-gray-700">
                Yes, we offer nationwide delivery services. Delivery times and
                fees vary depending on your location, but we ensure your vehicle
                arrives in perfect condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--auto-haven-gray)] py-16 text-white">
        <div className="py-16 max-w-screen-2xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat text-3xl text-[var(--auto-haven-blue)] md:text-4xl font-bold mb-6">
              Ready to Find Your Perfect Vehicle?
            </h2>
            <p className="text-lg mb-8 text-gray-500">
              Browse our inventory or contact our team to start your journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-[var(--auto-haven-red)] hover:bg-red-700 text-white"
              >
                Browse Inventory
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[var(--auto-haven-blue)] text-[var(--auto-haven-blue)] bg-transparent hover:bg-[var(--auto-haven-blue)] hover:text-white"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
