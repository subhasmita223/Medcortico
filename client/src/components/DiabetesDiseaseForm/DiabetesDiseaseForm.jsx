import { useState } from "react";
import styles from "./DiabetesDiseaseForm.module.css";

const DiabetesDiseaseForm = () => {
  const [pregnancies, setPregnancies] = useState("");
  const [glucose, setGlucose] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [skinThickness, setSkinThickness] = useState("");
  const [insulin, setInsulin] = useState("");
  const [bmi, setBmi] = useState("");
  const [diabetesPedigree, setDiabetesPedigree] = useState("");
  const [age, setAge] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    
    console.log({
      pregnancies,
      glucose,
      bloodPressure,
      skinThickness,
      insulin,
      bmi,
      diabetesPedigree,
      age,
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.form_wrapper}>
        <h1 className={styles.heading}>Diabetes Detection Model</h1>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="pregnancies">Number of Pregnancies</label>
            <input
              type="number"
              name="pregnancies"
              value={pregnancies}
              onChange={(e) => setPregnancies(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="glucose">Glucose Level</label>
            <input
              type="number"
              name="glucose"
              value={glucose}
              onChange={(e) => setGlucose(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="bloodPressure">Blood Pressure Value</label>
            <input
              type="number"
              name="bloodPressure"
              value={bloodPressure}
              onChange={(e) => setBloodPressure(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="skinThickness">Skin Thickness Value</label>
            <input
              type="number"
              name="skinThickness"
              value={skinThickness}
              onChange={(e) => setSkinThickness(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="insulin">Insulin Value</label>
            <input
              type="number"
              name="insulin"
              value={insulin}
              onChange={(e) => setInsulin(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="bmi">BMI Value</label>
            <input
              type="number"
              name="bmi"
              value={bmi}
              onChange={(e) => setBmi(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="diabetesPedigree">Diabetes Pedigree Function</label>
            <input
              type="number"
              name="diabetesPedigree"
              value={diabetesPedigree}
              onChange={(e) => setDiabetesPedigree(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DiabetesDiseaseForm;
