import React from 'react';
import { Code, Database, Server, Lock, FileCode, GitBranch } from 'lucide-react';

const Developer = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Developer Resources</h1>
            <p className="text-xl text-gray-300">
              Build innovative healthcare solutions with our powerful API and developer tools.
            </p>
            <div className="mt-8">
              <a href="#documentation" className="btn btn-primary mr-4">View Documentation</a>
              <a href="#api-keys" className="btn btn-outline">Get API Keys</a>
            </div>
          </div>
        </div>
      </div>

      {/* API Overview */}
      <section id="documentation" className="section bg-white">
        <div className="container">
          <h2 className="section-title">API Overview</h2>
          <p className="section-subtitle">
            Our comprehensive API allows you to integrate MediGenius's powerful health prediction capabilities into your applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card p-6">
              <div className="mb-4 text-[#0DD3B9]">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Symptom Analysis</h3>
              <p className="text-gray-600">
                Submit symptoms and receive AI-powered analysis with potential conditions and confidence scores.
              </p>
            </div>

            <div className="card p-6">
              <div className="mb-4 text-[#0DD3B9]">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Medical Database</h3>
              <p className="text-gray-600">
                Access our extensive database of medical conditions, treatments, medications, and health recommendations.
              </p>
            </div>

            <div className="card p-6">
              <div className="mb-4 text-[#0DD3B9]">
                <Server size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Webhooks</h3>
              <p className="text-gray-600">
                Set up webhooks to receive real-time updates and notifications for your integrated applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">Code Examples</h2>
          <p className="section-subtitle">
            Get started quickly with these sample code snippets for common API operations.
          </p>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Symptom Analysis Request</h3>
              <div className="bg-[#0f172a] text-white p-6 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>
{`// JavaScript Example
const analyzeSymptoms = async (symptoms) => {
  try {
    const response = await fetch('https://api.medigenius.com/v1/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify({
        symptoms: symptoms,
        includeRecommendations: true,
        language: 'en'
      })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error analyzing symptoms:', error);
  }
};

// Example usage
const results = await analyzeSymptoms([
  'headache', 
  'fever', 
  'fatigue'
]);
console.log(results);`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Response Format</h3>
              <div className="bg-[#0f172a] text-white p-6 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>
{`// Example Response
{
  "requestId": "req_7f8e9d2c3b4a",
  "timestamp": "2025-06-15T14:22:33Z",
  "results": {
    "conditions": [
      {
        "name": "Common Cold",
        "probability": 0.85,
        "description": "A viral infectious disease of the upper respiratory tract...",
        "recommendations": {
          "medications": [
            {
              "name": "Acetaminophen",
              "dosage": "As directed on packaging",
              "purpose": "Reduce fever and relieve pain"
            },
            {
              "name": "Decongestants",
              "dosage": "As directed on packaging",
              "purpose": "Relieve nasal congestion"
            }
          ],
          "precautions": [
            "Rest adequately",
            "Stay hydrated",
            "Wash hands frequently"
          ],
          "diet": [
            "Chicken soup",
            "Hot tea with honey",
            "Citrus fruits"
          ],
          "workouts": [
            "Light walking",
            "Gentle stretching",
            "Rest until symptoms improve"
          ]
        }
      },
      {
        "name": "Influenza",
        "probability": 0.65,
        "description": "A contagious respiratory illness caused by influenza viruses...",
        "recommendations": {
          // Similar structure as above
        }
      }
    ]
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="api-keys" className="section bg-white">
        <div className="container">
          <h2 className="section-title">Getting Started</h2>
          <p className="section-subtitle">
            Follow these steps to start integrating MediGenius into your applications.
          </p>

          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex">
                <div className="mr-6">
                  <div className="w-12 h-12 rounded-full bg-[#0DD3B9] text-white flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Create a Developer Account</h3>
                  <p className="text-gray-700 mb-4">
                    Sign up for a developer account to access our API dashboard and documentation.
                  </p>
                  <a href="#" className="text-[#0DD3B9] font-medium hover:underline">
                    Register for Developer Access →
                  </a>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex">
                <div className="mr-6">
                  <div className="w-12 h-12 rounded-full bg-[#0DD3B9] text-white flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Generate API Keys</h3>
                  <p className="text-gray-700 mb-4">
                    Create API keys for your applications in the developer dashboard. We offer both test and production environments.
                  </p>
                  <div className="flex items-center text-[#0DD3B9] font-medium">
                    <Lock size={18} className="mr-1" />
                    <span>Secure Authentication Required</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex">
                <div className="mr-6">
                  <div className="w-12 h-12 rounded-full bg-[#0DD3B9] text-white flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Explore Documentation</h3>
                  <p className="text-gray-700 mb-4">
                    Review our comprehensive API documentation to understand available endpoints, parameters, and response formats.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="flex items-center text-[#0DD3B9] font-medium hover:underline">
                      <FileCode size={18} className="mr-1" />
                      <span>API Reference</span>
                    </a>
                    <a href="#" className="flex items-center text-[#0DD3B9] font-medium hover:underline">
                      <GitBranch size={18} className="mr-1" />
                      <span>SDK Libraries</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex">
                <div className="mr-6">
                  <div className="w-12 h-12 rounded-full bg-[#0DD3B9] text-white flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Test in Sandbox</h3>
                  <p className="text-gray-700 mb-4">
                    Use our interactive sandbox environment to test API calls and see responses in real-time before implementing in your application.
                  </p>
                  <a href="#" className="btn btn-primary inline-block">
                    Open API Sandbox
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">API Pricing</h2>
          <p className="section-subtitle">
            Flexible pricing options to suit projects of all sizes, from startups to enterprise solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Free Tier */}
            <div className="card p-8 border-t-4 border-gray-400">
              <h3 className="text-2xl font-bold mb-2">Free Tier</h3>
              <p className="text-3xl font-bold mb-6">$0<span className="text-lg font-normal text-gray-600">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>100 API calls per day</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Basic symptom analysis</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Standard response time</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Community support</li>
              </ul>
              <a href="#" className="btn btn-outline w-full text-center">Get Started</a>
            </div>

            {/* Professional Tier */}
            <div className="card p-8 border-t-4 border-[#0DD3B9] transform scale-105 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-[#0DD3B9] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-3xl font-bold mb-6">$99<span className="text-lg font-normal text-gray-600">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>10,000 API calls per day</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Advanced symptom analysis</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Priority response time</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Email support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Webhooks integration</li>
              </ul>
              <a href="#" className="btn btn-primary w-full text-center">Subscribe Now</a>
            </div>

            {/* Enterprise Tier */}
            <div className="card p-8 border-t-4 border-[#1e293b]">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-3xl font-bold mb-6">Custom<span className="text-lg font-normal text-gray-600"> pricing</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Unlimited API calls</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Full feature access</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Dedicated infrastructure</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>24/7 priority support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Custom integration support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>SLA guarantees</li>
              </ul>
              <a href="#" className="btn btn-outline w-full text-center">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developer;
