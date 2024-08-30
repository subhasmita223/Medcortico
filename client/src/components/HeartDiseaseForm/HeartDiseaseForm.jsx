import Button from "./Button";
import styles from "./HeartDiseaseForm.module.css";
import { useState } from "react";

const HeartDiseaseForm = () => {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [chestPain, setChestPain] = useState("");
  const [restingBP, setRestingBP] = useState("");
  const [cholesterol, setCholesterol] = useState("");
  const [fastingBS, setFastingBS] = useState("");
  const [maxHR, setMaxHR] = useState("");
  const [exerciseAngina, setExerciseAngina] = useState("");
  const [restECG, setRestECG] = useState("");
  const [stDepression, setStDepression] = useState("");
  const [stSlope, setStSlope] = useState("");
  const [majorVessels, setMajorVessels] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    
    console.log({
      age,
      sex,
      chestPain,
      restingBP,
      cholesterol,
      fastingBS,
      maxHR,
      exerciseAngina,
      restECG,
      stDepression,
      stSlope,
      majorVessels,
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.form_wrapper}>
        <h1 className={styles.heading}>Heart Disease Prediction Model</h1>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="sex">Sex</label>
            <input
              type="text"
              name="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="chestPain">Chest Pain Types</label>
            <input
              type="text"
              name="chestPain"
              value={chestPain}
              onChange={(e) => setChestPain(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="restingBP">Resting Blood Pressure</label>
            <input
              type="number"
              name="restingBP"
              value={restingBP}
              onChange={(e) => setRestingBP(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="cholesterol">Serum Cholesterol (mg/dL)</label>
            <input
              type="number"
              name="cholesterol"
              value={cholesterol}
              onChange={(e) => setCholesterol(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="fastingBS">Fasting Blood Sugar 120 mg/dL</label>
            <input
              type="number"
              name="fastingBS"
              value={fastingBS}
              onChange={(e) => setFastingBS(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="maxHR">Maximum Heart Rate Achieved</label>
            <input
              type="number"
              name="maxHR"
              value={maxHR}
              onChange={(e) => setMaxHR(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="exerciseAngina">Exercise Induced Angina</label>
            <input
              type="text"
              name="exerciseAngina"
              value={exerciseAngina}
              onChange={(e) => setExerciseAngina(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="restECG">Resting Electrocardiographic Results</label>
            <input
              type="text"
              name="restECG"
              value={restECG}
              onChange={(e) => setRestECG(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="stDepression">ST Depression Induced by Exercise</label>
            <input
              type="number"
              name="stDepression"
              value={stDepression}
              onChange={(e) => setStDepression(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="stSlope">Slope of Peak Exercise ST Segment</label>
            <input
              type="text"
              name="stSlope"
              value={stSlope}
              onChange={(e) => setStSlope(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="majorVessels">Major Vessels Colored by Fluoroscopy</label>
            <input
              type="number"
              name="majorVessels"
              value={majorVessels}
              onChange={(e) => setMajorVessels(e.target.value)}
            />
          </div>

          <div className={styles.submitButtonWrapper}>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeartDiseaseForm;
