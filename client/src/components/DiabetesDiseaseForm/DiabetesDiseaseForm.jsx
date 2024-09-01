import { useState, useEffect } from "react";
import styles from "./DiabetesDiseaseForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { submitDiabetesDiseaseForm, clearError } from "../redux/diabetesDiseaseSlice";

const DiabetesDiseaseForm = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.diabetesDisease);

  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPedigree: "",
    age: "",
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
    dispatch(submitDiabetesDiseaseForm(formData));
  };

  useEffect(() => {
    if (success) {
      // Reset form on successful submission
      setFormData({
        pregnancies: "",
        glucose: "",
        bloodPressure: "",
        skinThickness: "",
        insulin: "",
        bmi: "",
        diabetesPedigree: "",
        age: "",
      });
    }
    if (error) {
      // Optionally handle error, e.g., show a notification or reset error state
      setTimeout(() => {
        dispatch(clearError());
      }, 5000);
    }
  }, [success, error, dispatch]);

  return (
    <section className={styles.container}>
      <div className={styles.form_wrapper}>
        <h1 className={styles.heading}>Diabetes Detection Model</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="pregnancies">Number of Pregnancies</label>
            <input
              type="number"
              name="pregnancies"
              value={formData.pregnancies}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="glucose">Glucose Level</label>
            <input
              type="number"
              name="glucose"
              value={formData.glucose}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="bloodPressure">Blood Pressure Value</label>
            <input
              type="number"
              name="bloodPressure"
              value={formData.bloodPressure}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="skinThickness">Skin Thickness Value</label>
            <input
              type="number"
              name="skinThickness"
              value={formData.skinThickness}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="insulin">Insulin Value</label>
            <input
              type="number"
              name="insulin"
              value={formData.insulin}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="bmi">BMI Value</label>
            <input
              type="number"
              name="bmi"
              value={formData.bmi}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="diabetesPedigree">Diabetes Pedigree Function</label>
            <input
              type="number"
              name="diabetesPedigree"
              value={formData.diabetesPedigree}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <button type="submit" className={styles.submitButton} disabled={loading}>
              Submit
            </button>
          </div>
        </form>
        {error && <div className={styles.error}>{error}</div>}
        {success && <div className={styles.success}>Form submitted successfully!</div>}
      </div>
    </section>
  );
};

export default DiabetesDiseaseForm;
