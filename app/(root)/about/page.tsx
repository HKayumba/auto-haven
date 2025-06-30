import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[var(--auto-haven-blue)] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('images/home-hero.avif')",
          }}
        ></div>
        <div className="py-28 max-w-screen-2xl mx-auto relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-6">
              About Auto Haven USA
            </h1>
            <p className="text-lg md:text-xl">
              Learn about our journey, our mission, and the team behind Auto
              Haven USA.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="py-16 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="images/about-showroom.avif"
                alt="Auto Haven USA Showroom"
                className="rounded-lg shadow-md w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-body mb-6">
                Founded in 2005, Auto Haven USA began with a simple mission: to
                transform the car buying experience by providing exceptional
                vehicles and unparalleled customer service.
              </p>
              <p className="text-body mb-6">
                What started as a small dealership in Los Angeles has grown into
                a nationwide operation with a reputation for quality,
                transparency, and integrity. Our founder, Michael Richardson, a
                lifelong car enthusiast, identified a gap in the market for a
                dealership that truly put customers first.
              </p>
              <p className="text-body mb-6">
                Today, Auto Haven USA is a leading car trading company with
                operations across the United States. We maintain our founding
                principles while embracing innovation and technology to deliver
                the best possible experience to our customers.
              </p>
              <Button className="bg-[var(--auto-haven-red)] hover:bg-red-700 text-white mt-4">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-[var(--auto-haven-gray)]">
        <div className="py-16 max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-body max-w-3xl mx-auto">
              At Auto Haven USA, we're driven by core values that shape
              everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">
                We carefully select every vehicle in our inventory to ensure it
                meets our rigorous standards for performance, safety, and
                reliability.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Transparency</h3>
              <p className="text-gray-600">
                We provide complete vehicle histories and honest assessments, so
                you can make informed decisions with confidence.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Customer Service</h3>
              <p className="text-gray-600">
                Our team is dedicated to providing personalized service and
                ensuring your complete satisfaction throughout the buying
                process.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously adopt new technologies and methodologies to
                improve our services and enhance the customer experience.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with the highest ethical standards, building
                lasting relationships based on trust and mutual respect.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                We are committed to giving back to the communities we serve
                through charitable initiatives and sustainable business
                practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="py-16 max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-body max-w-3xl mx-auto">
              Our experienced professionals are passionate about cars and
              committed to providing exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                <img
                  src="/images/team/michael-ceo.avif"
                  alt="Michael Richardson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-1">
                Michael Richardson
              </h3>
              <p className="text-[var(--auto-haven-red)] font-medium mb-3">
                Founder & CEO
              </p>
              <p className="text-gray-600 text-sm">
                Car enthusiast with over 25 years of experience in the
                automotive industry.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                <img
                  src="images/team/sarah-od.avif"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-1">
                Sarah Johnson
              </h3>
              <p className="text-[var(--auto-haven-red)] font-medium mb-3">
                Operations Director
              </p>
              <p className="text-gray-600 text-sm">
                Expert in streamlining processes and ensuring exceptional
                customer experiences.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                <img
                  src="images/team/david-hs.avif"
                  alt="David Martinez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-1">
                David Martinez
              </h3>
              <p className="text-[var(--auto-haven-red)] font-medium mb-3">
                Head of Sales
              </p>
              <p className="text-gray-600 text-sm">
                Dedicated to helping customers find the perfect vehicle for
                their needs.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                <img
                  src="images/team/emily-fm.avif"
                  alt="Emily Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-1">
                Emily Chen
              </h3>
              <p className="text-[var(--auto-haven-red)] font-medium mb-3">
                Finance Manager
              </p>
              <p className="text-gray-600 text-sm">
                Specialist in securing competitive financing options for our
                customers.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[var(--auto-haven-blue)] hover:bg-blue-900 text-white inline-flex items-center gap-2">
              <Users size={18} />
              Join Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[var(--auto-haven-blue)] to-blue-900 py-16 text-white">
        <div className="py-16 max-w-screen-2xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the Auto Haven Difference?
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Visit our showroom or contact us today to learn more about our
              vehicles and services.
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
