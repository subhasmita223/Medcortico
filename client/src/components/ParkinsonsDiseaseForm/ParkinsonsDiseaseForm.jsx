import Button from "./Button";
import styles from "./ParkinsonsDiseaseForm.module.css";
import { useState } from "react";

const ParkinsonsDiseaseForm = () => {
  const [mdvpHz1, setMdvpHz1] = useState("");
  const [mdvpHz2, setMdvpHz2] = useState("");
  const [mdvpHz3, setMdvpHz3] = useState("");
  const [mdvpPercent, setMdvpPercent] = useState("");
  const [mdvpAbs, setMdvpAbs] = useState("");
  const [mdvp, setMdvp] = useState("");
  const [jitter, setJitter] = useState("");
  const [mdvpDB, setMdvpDB] = useState("");
  const [shimmer, setShimmer] = useState("");
  const [shimmer2, setShimmer2] = useState("");
  const [nhr, setNhr] = useState("");
  const [hnr, setHnr] = useState("");
  const [rpde, setRpde] = useState("");
  const [dfa, setDfa] = useState("");
  const [spread1, setSpread1] = useState("");
  const [spread2, setSpread2] = useState("");
  const [d2, setD2] = useState("");
  const [ppe, setPpe] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    
    console.log({
      mdvpHz1,
      mdvpHz2,
      mdvpHz3,
      mdvpPercent,
      mdvpAbs,
      mdvp,
      jitter,
      mdvpDB,
      shimmer,
      shimmer2,
      nhr,
      hnr,
      rpde,
      dfa,
      spread1,
      spread2,
      d2,
      ppe,
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.form_wrapper}>
        <h1 className={styles.heading}>Parkinson's Disease Prediction Model</h1>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="mdvpHz1">MDVP (Hz)</label>
            <input
              type="number"
              name="mdvpHz1"
              value={mdvpHz1}
              onChange={(e) => setMdvpHz1(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="mdvpHz2">MDVP (Hz)</label>
            <input
              type="number"
              name="mdvpHz2"
              value={mdvpHz2}
              onChange={(e) => setMdvpHz2(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="mdvpHz3">MDVP (Hz)</label>
            <input
              type="number"
              name="mdvpHz3"
              value={mdvpHz3}
              onChange={(e) => setMdvpHz3(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="mdvpPercent">MDVP (%)</label>
            <input
              type="number"
              name="mdvpPercent"
              value={mdvpPercent}
              onChange={(e) => setMdvpPercent(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="mdvpAbs">MDVP (Abs)</label>
            <input
              type="number"
              name="mdvpAbs"
              value={mdvpAbs}
              onChange={(e) => setMdvpAbs(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="mdvp">MDVP</label>
            <input
              type="number"
              name="mdvp"
              value={mdvp}
              onChange={(e) => setMdvp(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="jitter">Jitter</label>
            <input
              type="number"
              name="jitter"
              value={jitter}
              onChange={(e) => setJitter(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="mdvpDB">MDVP (dB)</label>
            <input
              type="number"
              name="mdvpDB"
              value={mdvpDB}
              onChange={(e) => setMdvpDB(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="shimmer">Shimmer</label>
            <input
              type="number"
              name="shimmer"
              value={shimmer}
              onChange={(e) => setShimmer(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="shimmer2">Shimmer</label>
            <input
              type="number"
              name="shimmer2"
              value={shimmer2}
              onChange={(e) => setShimmer2(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="nhr">NHR</label>
            <input
              type="number"
              name="nhr"
              value={nhr}
              onChange={(e) => setNhr(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="hnr">HNR</label>
            <input
              type="number"
              name="hnr"
              value={hnr}
              onChange={(e) => setHnr(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="rpde">RPDE</label>
            <input
              type="number"
              name="rpde"
              value={rpde}
              onChange={(e) => setRpde(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="dfa">DFA</label>
            <input
              type="number"
              name="dfa"
              value={dfa}
              onChange={(e) => setDfa(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="spread1">Spread 1</label>
            <input
              type="number"
              name="spread1"
              value={spread1}
              onChange={(e) => setSpread1(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="spread2">Spread 2</label>
            <input
              type="number"
              name="spread2"
              value={spread2}
              onChange={(e) => setSpread2(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="d2">D2</label>
            <input
              type="number"
              name="d2"
              value={d2}
              onChange={(e) => setD2(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="ppe">PPE</label>
            <input
              type="number"
              name="ppe"
              value={ppe}
              onChange={(e) => setPpe(e.target.value)}
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

export default ParkinsonsDiseaseForm;
