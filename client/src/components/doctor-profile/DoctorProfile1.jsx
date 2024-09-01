import React from 'react';

const DoctorProfile = () => {
  const doctor = {
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiologist',
    address: '123 Health St, Wellness City, TX 75001',
    experience: 15, // years of experience
    appointmentTimings: 'Monday to Friday: 9:00 AM - 5:00 PM',
  };

  return (
    <div style={styles.profileContainer}>
      <h2 style={styles.title}>Doctor's Profile</h2>
      <div style={styles.detailsContainer}>
        <p><strong>Name:</strong> {doctor.name}</p>
        <p><strong>Specialization:</strong> {doctor.specialization}</p>
        <p><strong>Address:</strong> {doctor.address}</p>
        <p><strong>Years of Experience:</strong> {doctor.experience} years</p>
        <p><strong>Appointment Timings:</strong> {doctor.appointmentTimings}</p>
      </div>
    </div>
  );
};

const styles = {
  profileContainer: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  detailsContainer: {
    lineHeight: '1.6',
  },
};

export default DoctorProfile;
