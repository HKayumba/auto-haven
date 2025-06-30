import { Button } from "@/components/ui/button";
import { Car, Wrench, Users, Mail } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[var(--auto-haven-blue)] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('images/services-hero.avif')",
          }}
        ></div>
        <div className="py-16 max-w-screen-2xl mx-auto relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl">
              Discover our comprehensive range of automotive services designed
              to meet your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="py-16 max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Automotive Solutions
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              At Auto Haven USA, we offer a wide range of services to ensure a
              seamless experience from selection to delivery and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Service 1 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="bg-[var(--auto-haven-blue)] rounded-full p-5 inline-block">
                  <Car className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Premium Car Trading
                </h3>
                <p className="text-body mb-4">
                  Our core service focuses on connecting buyers with their ideal
                  vehicles. We handle the entire trading process, from sourcing
                  high-quality cars that meet our rigorous standards to managing
                  all paperwork and ensuring a smooth transaction.
                </p>
                <p className="text-body mb-6">
                  Whether you&apos;re looking to buy or sell a vehicle, our team of
                  experts will guide you through every step, offering
                  competitive pricing and transparent communication throughout.
                </p>
                <Button className="bg-[var(--auto-haven-red)] hover:bg-red-700 text-white">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="bg-[var(--auto-haven-blue)] rounded-full p-5 inline-block">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Vehicle Inspection & Certification
                </h3>
                <p className="text-body mb-4">
                  Every vehicle in our inventory undergoes a comprehensive
                  multi-point inspection by our certified technicians. We
                  thoroughly examine mechanical components, electrical systems,
                  bodywork, and more to ensure the highest quality.
                </p>
                <p className="text-body mb-6">
                  Our certification process provides peace of mind, guaranteeing
                  that your vehicle meets our stringent standards for safety,
                  performance, and reliability.
                </p>
                <Button className="bg-[var(--auto-haven-red)] hover:bg-red-700 text-white">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="bg-[var(--auto-haven-blue)] rounded-full p-5 inline-block">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Financing Solutions
                </h3>
                <p className="text-body mb-4">
                  We partner with leading financial institutions to offer
                  competitive financing options tailored to your needs. Our
                  finance team will work closely with you to secure the best
                  rates and terms available.
                </p>
                <p className="text-body mb-6">
                  From traditional auto loans to lease options, we provide
                  transparent information and guidance to help you make informed
                  decisions about financing your vehicle purchase.
                </p>
                <Button className="bg-[var(--auto-haven-red)] hover:bg-red-700 text-white">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="bg-[var(--auto-haven-blue)] rounded-full p-5 inline-block">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Nationwide Delivery
                </h3>
                <p className="text-body mb-4">
                  Distance is no obstacle when purchasing from Auto Haven USA.
                  We offer reliable nationwide delivery services, bringing your
                  vehicle directly to your doorstep in perfect condition.
                </p>
                <p className="text-body mb-6">
                  Our delivery process includes regular updates, careful
                  handling, and detailed documentation to ensure your vehicle
                  arrives safely and on time, wherever you are in the United
                  States.
                </p>
                <Button className="bg-[var(--auto-haven-red)] hover:bg-red-700 text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-[var(--auto-haven-gray)]">
        <div className="py-16 max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
            <p className="text-body max-w-3xl mx-auto">
              We&apos;ve streamlined our process to provide a seamless and efficient
              experience from start to finish.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="hidden md:block absolute left-0 right-0 z-[1] mt-16"></div>

            {/* Step 1 */}
            <div className="relative z-[2] flex flex-col items-center text-center mb-10 md:mb-0 md:w-1/4 px-4">
              <div className="bg-[var(--auto-haven-blue)] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-3">Consultation</h3>
              <p className="text-gray-600">
                We discuss your needs, preferences, and budget to understand
                exactly what you&apos;re looking for.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-[2] flex flex-col items-center text-center mb-10 md:mb-0 md:w-1/4 px-4">
              <div className="bg-[var(--auto-haven-blue)] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-3">Vehicle Selection</h3>
              <p className="text-gray-600">
                We identify suitable vehicles from our inventory or source
                options that match your requirements.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-[2] flex flex-col items-center text-center mb-10 md:mb-0 md:w-1/4 px-4">
              <div className="bg-[var(--auto-haven-blue)] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-3">Transaction</h3>
              <p className="text-gray-600">
                We handle all paperwork, financing arrangements, and logistics
                to ensure a smooth process.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative z-[2] flex flex-col items-center text-center md:w-1/4 px-4">
              <div className="bg-[var(--auto-haven-blue)] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 font-bold">
                4
              </div>
              <h3 className="text-2xl font-semibold mb-3">Delivery</h3>
              <p className="text-gray-600">
                We deliver your vehicle to your location, ensuring it arrives in
                perfect condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-white">
        <div className="py-16 max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Service Packages</h2>
            <p className="text-body max-w-3xl mx-auto">
              Choose from our range of comprehensive service packages designed
              to meet different needs and budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[var(--auto-haven-blue)] text-white p-6 text-center">
                <h3 className="font-montserrat text-2xl font-semibold">
                  Standard
                </h3>
                <p className="mt-2">Essential trading services</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Vehicle sourcing & selection
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Basic vehicle inspection
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Transaction paperwork handling
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Standard financing options
                  </li>
                </ul>
                <Button className="w-full bg-[var(--auto-haven-red)] hover:bg-red-700 text-white">
                  Select Package
                </Button>
              </div>
            </div>

            {/* Premium Package */}
            <div className="border-2 border-[var(--auto-haven-red)] rounded-lg overflow-hidden shadow-md">
              <div className="bg-[var(--auto-haven-red)] text-white p-8 text-center relative">
                <span className="absolute top-0 right-0 bg-yellow-400 text-[var(--auto-haven-blue)] text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </span>
                <h3 className="font-montserrat text-2xl font-semibold">
                  Premium
                </h3>
                <p className="mt-2">Enhanced trading experience</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Priority vehicle sourcing
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Comprehensive inspection
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Complete paperwork handling
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Premium financing options
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Nationwide delivery included
                  </li>
                </ul>
                <Button className="w-full bg-[var(--auto-haven-blue)] hover:bg-blue-900 text-white">
                  Select Package
                </Button>
              </div>
            </div>

            {/* Luxury Package */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[var(--auto-haven-blue)] text-white p-6 text-center">
                <h3 className="font-montserrat text-2xl font-semibold">
                  Luxury
                </h3>
                <p className="mt-2">Elite concierge service</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Dedicated personal concierge
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Expert vehicle selection
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Premium vehicle certification
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Custom financing solutions
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Express white-glove delivery
                  </li>
                </ul>
                <Button className="w-full bg-[var(--auto-haven-red)] hover:bg-red-700 text-white">
                  Select Package
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--auto-haven-gray)] py-16 text-white">
        <div className="py-16 max-w-screen-2xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat text-3xl text-[var(--auto-haven-blue)] md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-gray-500">
              Contact our team today to discuss how we can help with your
              automotive needs.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--auto-haven-red)] hover:bg-red-700 text-white !cursor-pointer"
              >
                Contact Us Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
