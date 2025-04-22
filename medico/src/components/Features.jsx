import React from 'react';
import { 
  Brain, 
  Pill, 
  ShieldAlert, 
  Apple, 
  Dumbbell, 
  HeartPulse 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-primary-500" />,
      title: 'AI-Powered Diagnosis',
      description: 'Our advanced AI analyzes your symptoms to identify potential conditions with high accuracy.'
    },
    {
      icon: <Pill className="h-10 w-10 text-primary-500" />,
      title: 'Medication Information',
      description: 'Get detailed information about recommended medications, including usage and potential side effects.'
    },
    {
      icon: <ShieldAlert className="h-10 w-10 text-primary-500" />,
      title: 'Precautionary Measures',
      description: 'Learn about preventive measures to avoid complications and speed up recovery.'
    },
    {
      icon: <Apple className="h-10 w-10 text-primary-500" />,
      title: 'Personalized Diet Plans',
      description: 'Receive customized dietary recommendations to support your recovery and overall health.'
    },
    {
      icon: <Dumbbell className="h-10 w-10 text-primary-500" />,
      title: 'Exercise Recommendations',
      description: 'Get appropriate workout suggestions based on your condition to maintain fitness safely.'
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-primary-500" />,
      title: 'Health Monitoring',
      description: 'Track your symptoms and recovery progress over time with our intuitive dashboard.'
    }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Our Features</h2>
        <p className="section-subtitle">
        Health Care provides a complete range of health management tools designed to help you better understand and take control of your health.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 hover:translate-y-[-5px]">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
