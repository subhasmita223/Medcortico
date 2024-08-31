// import { useState } from "react";

// const DiabetesForm = () => {
//   const [pregnancies, setPregnancies] = useState("");
//   const [glucose, setGlucose] = useState("");
//   const [bloodPressure, setBloodPressure] = useState("");
//   const [skinThickness, setSkinThickness] = useState("");
//   const [insulin, setInsulin] = useState("");
//   const [bmi, setBmi] = useState("");
//   const [diabetesPedigree, setDiabetesPedigree] = useState("");
//   const [age, setAge] = useState("");

//   const onSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission
//     console.log({
//       pregnancies,
//       glucose,
//       bloodPressure,
//       skinThickness,
//       insulin,
//       bmi,
//       diabetesPedigree,
//       age,
//     });
//   };

//   return (
//     <section className="flex justify-center items-center min-h-screen bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
//         <h1 className="text-2xl font-bold text-teal-900 mb-6">
//           Diabetes Prediction Form
//         </h1>
//         <form onSubmit={onSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div>
//               <label
//                 htmlFor="pregnancies"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Number of Pregnancies
//               </label>
//               <input
//                 type="number"
//                 name="pregnancies"
//                 value={pregnancies}
//                 onChange={(e) => setPregnancies(e.target.value)}
//                 className="mt-1 block w-full p-2 border border-teal-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="glucose"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Glucose Level
//               </label>
//               <input
//                 type="number"
//                 name="glucose"
//                 value={glucose}
//                 onChange={(e) => setGlucose(e.target.value)}
//                 className="mt-1 block w-full p-2 border border-teal-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="bloodPressure"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Blood Pressure (mm Hg)
//               </label>
//               <input
//                 type="number"
//                 name="bloodPressure"
//                 value={bloodPressure}
//                 onChange={(e) => setBloodPressure(e.target.value)}
//                 className="mt-1 block w-full p-2 border border-teal-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="skinThickness"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Skin Thickness (mm)
//               </label>
//               <input
//                 type="number"
//                 name="skinThickness"
//                 value={skinThickness}
//                 onChange={(e) => setSkinThickness(e.target.value)}
//                 className="mt-1 block w-full p-2 border border-teal-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div>
//               <label
//                 htmlFor="insulin"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Insulin Level (mu U/ml)
//               </label>
//               <input
//                 type="number"
//                 name="insulin"
//                 value={insulin}
//                 onChange={(e) => setInsulin(e.target.value)}
//                 className="mt-1 block w-full p-2 border border-teal-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="bmi"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 BMI (Body Mass Index)
//               </label>
//               <input
//                 type="number"
//                 step="0.1"
//                 name="bmi"
//                 value={bmi}
//                 onChange={(e) => setBmi(e.target.value)}
//                 className="mt-1 block w-full p-2 border border-teal-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="diabetesPedigree"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Diabetes Pedigree Function
//               </label>
//               <input
//                 type="number"
//                 step="0.01"
//                 name="diabetesPedigree"
//                 value={diabetesPedigree}
//                 onChange={(e) => setDiabetesPedigree(e.target.value)}
//                 className="mt-1 block w-full p-2 border border-teal-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="age"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Age
//               </label>
//               <input
//                 type="number"
//                 name="age"
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//                 className="mt-1 block w-full p-2 border border-teal-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//               />
//             </div>
//           </div>

//           <div className="flex justify-end mt-6">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-md shadow hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default DiabetesForm;
