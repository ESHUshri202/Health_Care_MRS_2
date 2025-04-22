import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Enter Your Symptoms',
      description: 'Describe your symptoms in detail using our intuitive search interface.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Our advanced AI processes your symptoms and compares them with thousands of medical conditions.',
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      number: '03',
      title: 'Get Comprehensive Results',
      description: 'Receive detailed information about potential conditions, treatments, and lifestyle recommendations.',
      image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      number: '04',
      title: 'Take Informed Action',
      description: 'Use our recommendations to make better health decisions or share results with your healthcare provider.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          MediGenius uses a simple four-step process to provide you with accurate health insights.
        </p>
        
        <div className="mt-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-20 last:mb-0`}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                <div className="w-20 h-1 bg-primary-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
