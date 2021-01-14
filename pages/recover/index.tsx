import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/Register.module.scss";

const Recover: React.FunctionComponent = () => {
  const [email, setEmail] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <Layout showFullNav={false}>
      <Head>
        <title>Register</title> <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.contentContainer}>
        <div className={styles.posContainer}>
          <h1>Forgot Password</h1>
          <p>
            Enter your email and we’ll send you a link to reset your password
          </p>
          <div className={styles.inputContainer}>
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                handleTextChange(ev);
              }}
              placeholder={"Email Address"}
            />
          </div>
          <button onClick={() => handleSubmit()} className={styles.button}>
            Sign Up
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Recover;
