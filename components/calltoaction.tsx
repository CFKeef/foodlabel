import React, { useState } from "react";

import styles from "../styles/calltoaction.module.scss";

const CallToAction: React.FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [didSubmit, setDidSubmit] = useState(false);

  // Handles sending the add to newsletter to our backend
  const handleSubmit = () => {
    setDidSubmit(true);
  };

  const generateForm = () => {
    if (!didSubmit)
      return (
        <form onSubmit={() => handleSubmit()}>
          <label>Email Address:</label>
          <input
            type="email"
            value={email}
            placeholder={"Email Address"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit{" "}
          </button>
        </form>
      );
    else return <p>Thanks!</p>;
  };

  return (
    <section className={styles.ctaContainer}>
      <div className={styles.contentContainer}>
        <h1>Newsletter</h1>
        <p>
          Join our newsletter to get the latest info on our product and get a
          gift!
        </p>
        {generateForm()}
      </div>
    </section>
  );
};

export default CallToAction;
