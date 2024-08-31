import Button from "./Button";
import styles from "./HeartDiseaseForm.module.css";
import { useState } from "react";

const HeartDiseaseForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.heartDisease);

  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    chestPain: "",
    restingBP: "",
    cholesterol: "",
    fastingBS: "",
    maxHR: "",
    exerciseAngina: "",
    restECG: "",
    stDepression: "",
    stSlope: "",
    majorVessels: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
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
            <label htmlFor="restECG">
              Resting Electrocardiographic Results
            </label>
            <input
              type="text"
              name="restECG"
              value={restECG}
              onChange={(e) => setRestECG(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="stDepression">
              ST Depression Induced by Exercise
            </label>
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

          <div style={{ display: "flex", justifyContent: "end" }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeartDiseaseForm;
