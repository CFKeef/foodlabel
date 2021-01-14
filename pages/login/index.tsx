import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/Login.module.scss";

const Login: React.FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "password":
        setPassword(e.target.value);
        return;
      case "email":
        setEmail(e.target.value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = () => {};

  return (
    <Layout showFullNav={false}>
      <Head>
        <title>Log In</title> <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.contentContainer}>
        <div className={styles.posContainer}>
          <h1>Get Started</h1>
          <p>Create your Foodlabel Account to start creating labels today</p>
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
          <div className={styles.inputContainer}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              name="password"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                handleTextChange(ev);
              }}
              placeholder={"Password"}
            />
          </div>
          <button onClick={() => handleSubmit()} className={styles.button}>
            Sign Up
          </button>
          <span className={styles.loginSpan}>
            Need an account? <Link href={"/signup"}>Sign up here</Link>
          </span>
          <span className={styles.loginSpan}>
            Forgot your information? <Link href={"/recover"}>Recover here</Link>
          </span>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
