import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { submitParkinsonDiseaseForm, clearError } from '../redux/parkinsonDiseaseSlice';
import Button from "./Button";
import styles from "./ParkinsonsDiseaseForm.module.css";

const ParkinsonsDiseaseForm = () => {
  const [formData, setFormData] = useState({
    mdvpHz1: "",
    mdvpHz2: "",
    mdvpHz3: "",
    mdvpPercent: "",
    mdvpAbs: "",
    mdvp: "",
    jitter: "",
    mdvpDB: "",
    shimmer: "",
    shimmer2: "",
    nhr: "",
    hnr: "",
    rpde: "",
    dfa: "",
    spread1: "",
    spread2: "",
    d2: "",
    ppe: ""
  });

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(state => state.parkinsonDisease);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitParkinsonDiseaseForm(formData));
  };

  useEffect(() => {
    if (success) {
      // Reset form on successful submission
      setFormData({
        mdvpHz1: "",
        mdvpHz2: "",
        mdvpHz3: "",
        mdvpPercent: "",
        mdvpAbs: "",
        mdvp: "",
        jitter: "",
        mdvpDB: "",
        shimmer: "",
        shimmer2: "",
        nhr: "",
        hnr: "",
        rpde: "",
        dfa: "",
        spread1: "",
        spread2: "",
        d2: "",
        ppe: ""
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
        <h1 className={styles.heading}>Parkinson's Disease Prediction Model</h1>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="mdvpHz1">MDVP (Hz)</label>
            <input
              type="number"
              name="mdvpHz1"
              value={formData.mdvpHz1}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="mdvpHz2">MDVP (Hz)</label>
            <input
              type="number"
              name="mdvpHz2"
              value={formData.mdvpHz2}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="mdvpHz3">MDVP (Hz)</label>
            <input
              type="number"
              name="mdvpHz3"
              value={formData.mdvpHz3}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="mdvpPercent">MDVP (%)</label>
            <input
              type="number"
              name="mdvpPercent"
              value={formData.mdvpPercent}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="mdvpAbs">MDVP (Abs)</label>
            <input
              type="number"
              name="mdvpAbs"
              value={formData.mdvpAbs}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="mdvp">MDVP</label>
            <input
              type="number"
              name="mdvp"
              value={formData.mdvp}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="jitter">Jitter</label>
            <input
              type="number"
              name="jitter"
              value={formData.jitter}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="mdvpDB">MDVP (dB)</label>
            <input
              type="number"
              name="mdvpDB"
              value={formData.mdvpDB}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="shimmer">Shimmer</label>
            <input
              type="number"
              name="shimmer"
              value={formData.shimmer}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="shimmer2">Shimmer</label>
            <input
              type="number"
              name="shimmer2"
              value={formData.shimmer2}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="nhr">NHR</label>
            <input
              type="number"
              name="nhr"
              value={formData.nhr}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="hnr">HNR</label>
            <input
              type="number"
              name="hnr"
              value={formData.hnr}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="rpde">RPDE</label>
            <input
              type="number"
              name="rpde"
              value={formData.rpde}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="dfa">DFA</label>
            <input
              type="number"
              name="dfa"
              value={formData.dfa}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="spread1">Spread 1</label>
            <input
              type="number"
              name="spread1"
              value={formData.spread1}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="spread2">Spread 2</label>
            <input
              type="number"
              name="spread2"
              value={formData.spread2}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="d2">D2</label>
            <input
              type="number"
              name="d2"
              value={formData.d2}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="ppe">PPE</label>
            <input
              type="number"
              name="ppe"
              value={formData.ppe}
              onChange={handleChange}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ParkinsonsDiseaseForm;

