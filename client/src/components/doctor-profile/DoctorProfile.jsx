import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DoctorProfile = () => {
  const { id } = useParams(); // Assuming the doctor ID is passed as a URL parameter
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`/api/doctors/${id}`);
        setDoctor(response.data);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!doctor) return <div>No doctor found</div>;

  return (
    <div>
      <h1>Dr. {doctor.name}</h1>
      <img src={doctor.profilePhoto} alt={`${doctor.name}'s profile`} style={{ width: '150px', height: '150px' }} />
      <p>Years of Experience: {doctor.yearsOfExperience}</p>
      <p>Specialized In: {doctor.specializedIn}</p>
      <p>Email: {doctor.email}</p>
      <p>License Number: {doctor.licenseNumber}</p>
      <button onClick={() => alert('Appointment booked!')}>Book an Appointment</button>
    </div>
  );
};

export default DoctorProfile;
