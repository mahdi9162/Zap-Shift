import React from 'react';
import Container from '../../../components/Container/Container';
import { FaRocket } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { GoPackage } from 'react-icons/go';
import { MdOutlinePayment } from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa';
import { GiReturnArrow } from 'react-icons/gi';

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: 'Express & Standard Delivery',
      description:
        'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
      icon: <FaRocket />,
    },
    {
      id: 2,
      title: 'Nationwide Delivery',
      description:
        'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.',
      icon: <FaGlobe />,
    },
    {
      id: 3,
      title: 'Fulfillment Solution',
      description:
        'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.',
      icon: <GoPackage />,
    },
    {
      id: 4,
      title: 'Cash on Home Delivery',
      description: '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
      icon: <MdOutlinePayment />,
    },
    {
      id: 5,
      title: 'Corporate Service / Contract In Logistics',
      description: 'Customized corporate services which includes warehouse and inventory management support.',
      icon: <FaHandshake />,
    },
    {
      id: 6,
      title: 'Parcel Return',
      description:
        'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.',
      icon: <GiReturnArrow />,
    },
  ];

  return (
    <Container>
      <section className="bg-[#03373D] px-40 py-24 rounded-4xl my-24">
        <h3 className="text-[#FFFFFF] text-center font-bold text-3xl mb-5">Our Services</h3>
        <p className="text-[#DADADA] mx-auto text-center w-96">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we
          deliver on time, every time.
        </p>
        {/* Mapping */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-8 h-80 flex flex-col items-center text-center rounded-2xl shadow-lg border border-transparent transition-all hover:scale-[1.03] duration-700 hover:shadow-2xl hover:border-primary ${
                service.id === 2 ? 'bg-[#caeb66]' : 'bg-base-100'
              }`}
            >
              <div className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-primary/10">{service.icon}</div>
              <h3 className="text-xl font-extrabold mb-3">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default OurServices;
