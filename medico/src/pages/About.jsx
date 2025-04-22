import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MediGenius</h1>
            <p className="text-xl text-gray-300">
              Revolutionizing healthcare with AI-powered symptom analysis and personalized health recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Medical professionals" 
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                MediGenius was founded in 2023 by a team of healthcare professionals and AI specialists who recognized the need for accessible, accurate health information.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission began when we observed how many people were turning to unreliable online sources for medical information, often leading to anxiety and misdiagnosis.
              </p>
              <p className="text-gray-700">
                We built MediGenius to bridge this gap, providing a reliable, AI-powered platform that helps users understand their symptoms and make informed health decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">Our Mission & Values</h2>
          <p className="section-subtitle">
            We're committed to making healthcare information accessible, accurate, and actionable for everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To empower individuals with accurate health information and personalized recommendations, enabling them to make informed decisions about their wellbeing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#0DD3B9] mr-2">✓</span>
                  <span>Democratize access to quality healthcare information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0DD3B9] mr-2">✓</span>
                  <span>Reduce anxiety through accurate symptom analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0DD3B9] mr-2">✓</span>
                  <span>Support healthcare professionals with supplementary tools</span>
                </li>
              </ul>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-[#b3fff5] p-3 rounded-full text-[#0DD3B9]">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">User-Centered</h4>
                    <p className="text-gray-700">We design every feature with our users' needs and experiences in mind.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 bg-[#b3fff5] p-3 rounded-full text-[#0DD3B9]">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Excellence</h4>
                    <p className="text-gray-700">We strive for the highest standards in our AI algorithms and health recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 bg-[#b3fff5] p-3 rounded-full text-[#0DD3B9]">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Accuracy</h4>
                    <p className="text-gray-700">We continuously refine our system to provide the most accurate information possible.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 bg-[#b3fff5] p-3 rounded-full text-[#0DD3B9]">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Compassion</h4>
                    <p className="text-gray-700">We approach healthcare with empathy, understanding the concerns of those seeking answers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Meet the experts behind MediGenius who are passionate about revolutionizing healthcare.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="card overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Dr. Emma Roberts" 
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Dr. Emma Roberts</h3>
                <p className="text-[#0DD3B9] mb-3">Chief Medical Officer</p>
                <p className="text-gray-600 text-sm">
                  Board-certified physician with 15+ years of experience in internal medicine and digital health.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="David Chen" 
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">David Chen</h3>
                <p className="text-[#0DD3B9] mb-3">AI Research Director</p>
                <p className="text-gray-600 text-sm">
                  Former Google AI researcher specializing in machine learning for healthcare applications.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Dr. Sarah Patel" 
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Dr. Sarah Patel</h3>
                <p className="text-[#0DD3B9] mb-3">Clinical Research Lead</p>
                <p className="text-gray-600 text-sm">
                  Specializes in evidence-based medicine and clinical validation of digital health tools.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Marcus Johnson" 
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Marcus Johnson</h3>
                <p className="text-[#0DD3B9] mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">
                  Tech entrepreneur with extensive experience building secure, scalable healthcare platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
