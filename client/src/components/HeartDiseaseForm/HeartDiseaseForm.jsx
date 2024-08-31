import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitHeartDiseaseForm, clearError } from '../redux/heartDiseaseSlice';
import Button from "./Button";
import styles from "./HeartDiseaseForm.module.css";

const HeartDiseaseForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.heartDisease);

  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    chestPain: '',
    restingBP: '',
    cholesterol: '',
    fastingBS: '',
    maxHR: '',
    exerciseAngina: '',
    restECG: '',
    stDepression: '',
    stSlope: '',
    majorVessels: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitHeartDiseaseForm(formData));
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  return (
    <section className={styles.container}>
      <div className={styles.form_wrapper}>
        <h1 className={styles.heading}>Heart Disease Prediction Model</h1>
        {error && (
          <div className={styles.error}>
            <p>{error}</p>
            <button onClick={handleClearError}>Clear Error</button>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div className={styles.form_control} key={key}>
              <label htmlFor={key}>{key}</label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
              />
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeartDiseaseForm;
