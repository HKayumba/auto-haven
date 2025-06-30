import { Button } from "@/components/ui/button";
import { Car, Users, Wrench } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="relative h-[600px] bg-gradient-to-b from-[var(--auto-haven-blue)] to-black">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('images/home-car.avif')" }}
        ></div>
        <div className="py-32 max-w-screen-2xl mx-auto relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="font-montserrat text-5xl md:text-6xl font-bold mb-6">
              Find Your Perfect Vehicle at Auto Haven USA
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Premium car trading services with nationwide delivery and
              exceptional customer support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#DC2626] hover:bg-red-700 text-white"
              >
                Explore Inventory
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#0F172A]"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="py-16 max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Auto Haven USA
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              We provide top-tier car trading services with a focus on quality,
              trust, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[var(--auto-haven-lightgray)] p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-[var(--auto-haven-blue)] rounded-full p-4 mb-4">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Premium Selection</h3>
              <p className="text-gray-600">
                Access to a carefully curated collection of high-quality
                vehicles that meet our rigorous standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[var(--auto-haven-lightgray)] p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-[var(--auto-haven-blue)] rounded-full p-4 mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our professional staff has decades of experience in the
                automotive industry.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[var(--auto-haven-lightgray)] p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-[var(--auto-haven-blue)] rounded-full p-4 mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Comprehensive Service
              </h3>
              <p className="text-gray-600">
                From selection to financing and delivery, we handle every aspect
                of your car buying journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="bg-[var(--auto-haven-gray)] py-20">
        <div className="py-16 max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Vehicles</h2>
            <p className="text-body max-w-3xl mx-auto">
              Explore some of our premium selections available for purchase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vehicle Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/luxury-sedan.avif"
                  alt="Luxury Sedan"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="font-montserrat text-xl font-semibold text-[var(--auto-haven-blue)]">
                  2023 Mercedes-Benz E-Class
                </h4>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[var(--auto-haven-red)] font-semibold">
                    $58,900
                  </span>
                  <Button className="bg-[var(--auto-haven-blue)] hover:bg-blue-900 text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </div>

            {/* Vehicle Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/sports-car.avif"
                  alt="Sports Car"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="font-montserrat text-xl font-semibold text-[var(--auto-haven-blue)]">
                  2023 Chevrolet Corvette
                </h4>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[var(--auto-haven-red)] font-semibold">
                    $67,200
                  </span>
                  <Button className="bg-[var(--auto-haven-blue)] hover:bg-blue-900 text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </div>

            {/* Vehicle Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/range-rover-sport.jpg"
                  alt="Luxury SUV"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="font-montserrat text-xl font-semibold text-[var(--auto-haven-blue)]">
                  2023 Range Rover Sport
                </h4>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-autohaven-red font-semibold">
                    $72,500
                  </span>
                  <Button className="bg-[var(--auto-haven-blue)] hover:bg-blue-900 text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-[var(--auto-haven-red)] hover:bg-red-700 text-white"
            >
              View All Vehicles
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="py-16 max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Customer Testimonials</h2>
            <p className="text-body max-w-3xl mx-auto">
              Hear what our satisfied customers have to say about their
              experience with Auto Haven USA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[var(--auto-haven-lightgray)] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[var(--auto-haven-blue)] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JS
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold">John Smith</h4>
                  <p className="text-sm text-gray-500">Los Angeles, CA</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "Auto Haven USA made buying my dream car a breeze. Their team
                was professional, knowledgeable, and helped me find the perfect
                vehicle within my budget."
              </p>
              <div className="flex text-yellow-400 mt-4">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-autohaven-lightgray p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[var(--auto-haven-blue)] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MJ
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold">
                    Maria Johnson
                  </h4>
                  <p className="text-sm text-gray-500">Chicago, IL</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "I was skeptical about buying a car online, but Auto Haven USA
                exceeded my expectations. The car was delivered in perfect
                condition and exactly as described."
              </p>
              <div className="flex text-yellow-400 mt-4">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[var(--auto-haven-lightgray)] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[var(--auto-haven-blue)] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  RT
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold">
                    Robert Thomas
                  </h4>
                  <p className="text-sm text-gray-500">Miami, FL</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "The financing options provided by Auto Haven USA were
                excellent. I got a great rate, and the paperwork was handled
                efficiently. Couldn't be happier!"
              </p>
              <div className="flex text-yellow-400 mt-4">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--auto-haven-gray)] py-20 text-white">
        <div className="py-16 max-w-screen-2xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat text-4xl text-[var(--auto-haven-blue)] md:text-5xl font-bold mb-6">
              Ready to Find Your Perfect Vehicle?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-500">
              Contact us today to discuss your needs or schedule a visit to our
              showroom.
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
                className="border-[var(--auto-haven-blue)] bg-transparent text-[var(--auto-haven-blue)] hover:bg-[var(--auto-haven-blue)] hover:text-white"
              >
                Contact Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
