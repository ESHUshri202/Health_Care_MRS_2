import React from "react";

const ResultCard = ({ data }) => {
  const { predicted_disease, dis_desc, dis_pre, dis_die, dis_med, dis_wrkout } =
    data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full place-content-center mt-4 space-y-4">
      {/* Predicted Disease Card */}
      <div className="p-4 bg-slate-700 text-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Predicted Disease:</h2>
        <p className="text-lg">{predicted_disease}</p>
      </div>

      {/* Description Card */}
      <div className="p-4 bg-slate-700 text-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Description:</h3>
        <p>{dis_desc}</p>
      </div>

      {/* Precautions Card */}
      <div className="p-4 bg-slate-700 text-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Precautions:</h3>
        <ul className="list-disc list-inside">
          {dis_pre.map((pre, index) => (
            <li key={index}>{pre}</li>
          ))}
        </ul>
      </div>

      {/* Medications Card */}
      <div className="p-4 bg-slate-700 text-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Medications:</h3>
        <ul className="list-disc list-inside">
          {dis_med.map((med, index) => (
            <li key={index}>{med}</li>
          ))}
        </ul>
      </div>

      {/* Diet Card */}
      <div className="p-4 bg-slate-700 text-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Diet:</h3>
        <ul className="list-disc list-inside">
          {dis_die.map((die, index) => (
            <li key={index}>{die}</li>
          ))}
        </ul>
      </div>

      {/* Recommended Workouts Card */}
      <div className="p-4 bg-slate-700 text-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Recommended Workouts:</h3>
        <ul className="list-disc list-inside">
          {dis_wrkout.map((workout, index) => (
            <li key={index}>{workout}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultCard;
