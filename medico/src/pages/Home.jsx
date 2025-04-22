import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import SymptomChecker from '../components/SymptomChecker';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import ResultCard from '../components/ResultCard';
const Home = () => {
  const [symptoms, setSymptoms] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setSymptoms(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', { symptoms });
            setResult(response.data);
        } catch (error) {
            console.error("There was an error fetching the data!", error);
        } finally {
            setLoading(false);
        }
    };

  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <div>
      <div className="p-8 md:p-12 mx-auto w-[80%] bg-[#000]/10  rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-4">Symptom Checker</h1>
            <form onSubmit={handleSubmit} className='mb-4'>
                <input
                    type='text'
                    value={symptoms}
                    onChange={handleInputChange}
                    placeholder="Enter your symptoms separated by commas"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
                <button 
                    type="submit" 
                    disabled={loading}
                    className={`w-full py-2 rounded-md text-white ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} transition duration-200`}
                >
                    {loading ? 'Loading...' : 'Check Symptoms'}
                </button>
            </form>
            {result && <ResultCard data={result} />}
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
