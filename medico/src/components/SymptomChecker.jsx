import React, { useState } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";
import jsPDF from "jspdf";

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setSymptoms(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        symptoms,
      });
      setResult(response.data);
    } catch (error) {
      console.error("There was an error fetching the data!", error);
    } finally {
      setLoading(false);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("🚑Health Care - Symptom Checker Report", 20, 20);
    doc.setFontSize(12);

    const yStart = 30;
    let y = yStart;

    const addText = (label, value) => {
      doc.text(`${label}:`, 20, y);
      y += 7;
      if (Array.isArray(value)) {
        value.forEach((item) => {
          doc.text(`- ${item}`, 18, y);
          y += 7;
        });
      } else {
        doc.text(`${value}`, 25, y);
        y += 10;
      }
    };

    addText("Symptoms", symptoms);
    if (result) {
      addText("Predicted Disease", result.predicted_disease);
      addText("Description", result.dis_desc);
        addText("Precautions", result.dis_pre);
        addText("Medications", result.dis_med);
        addText("Diet", result.dis_die);
        addText("Recommended Workouts", result.dis_wrkout);
    }

    doc.save("symptom_report.pdf");
  };

  return (
    <>
      <div className="pt-16 md:pt-32 pb-10 md:pb-20">
        <div className="p-8 md:p-12 mx-auto w-[80%] bg-red-200 rounded-lg shadow-md">
          <h1 className="text-5xl font-bold text-center mb-12">
            Symptom Checker
          </h1>
          <form
            onSubmit={handleSubmit}
            className="mb-4 flex flex-col items-center justify-center gap-4"
          >
            <input
              type="text"
              value={symptoms}
              onChange={handleInputChange}
              placeholder="Enter your symptoms separated by commas"
              className="place-content-center p-2 w-[50%] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-[50%] py-2 rounded-md text-white ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              } transition duration-200`}
            >
              {loading ? "Loading..." : "Check Symptoms"}
            </button>
          </form>

          {result && (
            <>
              <ResultCard data={result} />
              <div className="flex justify-center mt-6">
                <button
                  onClick={generatePDF}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition duration-200"
                >
                  Download PDF Report
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SymptomChecker;
