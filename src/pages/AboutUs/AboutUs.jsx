import React from 'react';
import Container from '../../components/Container/Container';

const AboutUs = () => {
  return (
    <Container>
      <section className="mb-24 mt-8 bg-white feature-box px-28 py-20 rounded-4xl">
        <div>
          <h3 className="text-5xl font-bold text-[#03373D]">About Us</h3>
          <p className="text-sm text-[#606060] w-[500px] mt-4 mb-12">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        {/* Tabs */}
        <div className="border-t border-gray-400/20 pt-12">
          <div className="tabs tabs-border">
            <input type="radio" name="my_tabs_2" className="tab" aria-label="Story" />
            <div className="tab-content bg-base-100 mt-12">
              <p>
                We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment
                to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether
                it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
              </p>
              <br />
              <p>
                We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment
                to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether
                it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
              </p>
              <br />
              <p>
                We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment
                to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether
                it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
              </p>
            </div>

            <input type="radio" name="my_tabs_2" className="tab" aria-label="Mission" defaultChecked />
            <div className="tab-content bg-base-100 mt-12">
              <p>
                Our mission is to revolutionize the logistics industry by providing cutting-edge, technology-driven courier services that
                prioritize speed, security, and absolute transparency for every client.
              </p>
              <br />
              <p>
                We aim to be the most dependable and future-forward delivery partner in Bangladesh, empowering both small and large
                merchants to scale their businesses without logistical hassle.
              </p>
              <br />
              <p>
                We strive to connect customers with essential convenience, continuously improving our network and technology, ensuring our
                commitment to the community grows, one successful parcel at a time.
              </p>
            </div>

            <input type="radio" name="my_tabs_2" className="tab" aria-label="Success" />
            <div className="tab-content bg-base-100 mt-12">
              <p>
                Our success is measured by the tangible growth of our merchant partners and the sustained, high satisfaction rate of every
                end customer we serve across the nation.
              </p>
              <br />
              <p>
                Having successfully completed millions of crucial deliveries across all 64 districts, we maintain a consistently high
                on-time delivery rate, proving our reliability in complex logistical environments.
              </p>
              <br />
              <p>
                We continually invest in smart automation and real-time route optimization systems, proudly setting new benchmarks for
                efficiency and dependability in the entire courier market. Our innovation ensures your parcels move faster and safer.
              </p>
            </div>

            <input type="radio" name="my_tabs_2" className="tab" aria-label="Team & Others" />
            <div className="tab-content bg-base-100 mt-12">
              <p>
                Behind our service is a diverse and highly dedicated team of logistics experts, innovative technologists, and professional
                customer service agents working 24/7.
              </p>
              <br />
              <p>
                We believe that a local understanding of the market, coupled with a global standard in technology, is key to providing
                flawless delivery experiences nationwide.
              </p>
              <br />
              <p>
                Our core value is collaboration and ownership. Every team member is committed to overcoming logistical challenges and
                ensuring complete satisfaction for all our stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AboutUs;
