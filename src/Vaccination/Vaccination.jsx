// import React, { useState, useEffect } from 'react';
// import './Vaccination.css';
// import Navbar from '../Components/Navbar';

// const Vaccination = () => {
//   const [vaccinations, setVaccinations] = useState([]);
//   const [vaccineName, setVaccineName] = useState('');
//   const [doctor, setDoctor] = useState('');
//   const [date, setDate] = useState('');

//   // Load stored vaccinations from localStorage
//   useEffect(() => {
//     const storedVaccinations = JSON.parse(localStorage.getItem('vaccinations')) || [];
//     setVaccinations(storedVaccinations);
//   }, []);

//   // Save vaccinations to localStorage whenever the vaccinations state changes
//   useEffect(() => {
//     localStorage.setItem('vaccinations', JSON.stringify(vaccinations));
//   }, [vaccinations]);

//   const addVaccination = () => {
//     if (vaccineName && doctor && date) {
//       const newVaccination = { id: Date.now(), vaccineName, doctor, date };
//       setVaccinations([...vaccinations, newVaccination]);
//       setVaccineName('');
//       setDoctor('');
//       setDate('');
//     }
//   };

//   const removeVaccination = (id) => {
//     setVaccinations(vaccinations.filter(vaccination => vaccination.id !== id));
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="vaccination">
//       <h2>Vaccination To-Do List</h2>
//       <div className="vaccination-form">
//         <input
//           type="text"
//           placeholder="Vaccine Name"
//           value={vaccineName}
//           onChange={(e) => setVaccineName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Doctor"
//           value={doctor}
//           onChange={(e) => setDoctor(e.target.value)}
//         />
//         <input
//           type="date"
//           placeholder="Date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <button onClick={addVaccination}>Add</button>
//       </div>
//       <table className="vaccination-table">
//         <thead>
//           <tr>
//             <th>Vaccine Name</th>
//             <th>Doctor</th>
//             <th>Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vaccinations.map(vaccination => (
//             <tr key={vaccination.id}>
//               <td>{vaccination.vaccineName}</td>
//               <td>{vaccination.doctor}</td>
//               <td>{vaccination.date}</td>
//               <td>
//                 <button onClick={() => removeVaccination(vaccination.id)}>Remove</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </>
//   );
// };

// export default Vaccination;


import React, { useState, useEffect } from 'react';
import './Vaccination.css';
import Navbar from '../Components/Navbar';

const Vaccination = () => {
  const [vaccinations, setVaccinations] = useState([]);
  const [vaccineName, setVaccineName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');

  // Load stored vaccinations from localStorage
  useEffect(() => {
    const storedVaccinations = JSON.parse(localStorage.getItem('vaccinations')) || [];
    console.log('Loaded vaccinations from localStorage:', storedVaccinations);
    setVaccinations(storedVaccinations);
  }, []);

  // Save vaccinations to localStorage whenever the vaccinations state changes
  useEffect(() => {
    console.log('Saving vaccinations to localStorage:', vaccinations);
    localStorage.setItem('vaccinations', JSON.stringify(vaccinations));
  }, [vaccinations]);

  const addVaccination = () => {
    if (vaccineName && doctor && date) {
      const newVaccination = { id: Date.now(), vaccineName, doctor, date };
      const updatedVaccinations = [...vaccinations, newVaccination];
      console.log('Adding vaccination:', newVaccination);
      setVaccinations(updatedVaccinations);
      setVaccineName('');
      setDoctor('');
      setDate('');
    }
  };

  const removeVaccination = (id) => {
    const updatedVaccinations = vaccinations.filter(vaccination => vaccination.id !== id);
    console.log('Removing vaccination with id:', id);
    setVaccinations(updatedVaccinations);
  };

  return (
    <>
      <Navbar />
      <div className="vaccination">
        <h2>Vaccination To-Do List</h2>
        <div className="vaccination-form">
          <input
            type="text"
            placeholder="Vaccine Name"
            value={vaccineName}
            onChange={(e) => setVaccineName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button onClick={addVaccination}>Add</button>
        </div>
        <table className="vaccination-table">
          <thead>
            <tr>
              <th>Vaccine Name</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vaccinations.map(vaccination => (
              <tr key={vaccination.id}>
                <td>{vaccination.vaccineName}</td>
                <td>{vaccination.doctor}</td>
                <td>{vaccination.date}</td>
                <td>
                  <button onClick={() => removeVaccination(vaccination.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Vaccination;
