import React from 'react';

const servicesData = [
  {
    title: "Frontend Development",
    description: "Building responsive and dynamic web applications using modern frameworks like React js.",
  },
  {
    title: "UI Design",
    description: "Creating intuitive and user-friendly interfaces that enhance user experience and engagement.",
  },
  {
    title: "WordPress Development",
    description: "Developing custom WordPress themes and plugins to meet specific business needs and improve functionality.",
  },
  {
    title: "Graphic Design",
    description: "Designing visually appealing graphics and branding materials that convey your message effectively.",
  },
];

const Services = () => {
  return (
    <section className='py-14 m-4  ' id="services">
      <div className='max-w-7xl mx-auto text-center'>
      <div className='flex flex-row items-center justify-center ' id='projects'>
        <h2 className='font-bold text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 '>Services</h2>
        <div className='h-1 w-32 border border-orange-600 ml-6 bg-orange-600'></div>
      </div>
        <div className='grid m-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 -py-[30px]'>
          {servicesData.map((service, index) => (
            <div key={index} className='p-6 border border-gray-300 rounded-xl shadow-md hover:bg-gradient-to-t from-orange-600 to-pink-600 transition-shadow duration-300'>
              <h3 className='text-xl font-semibold mb-4'>{service.title}</h3>
              <p >{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
