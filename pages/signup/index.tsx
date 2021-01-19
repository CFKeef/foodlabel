import React, { useReducer } from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import { reducer, initialState } from "./reducer";
import styles from "../../styles/Signup.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import axios, { AxiosResponse } from "axios";

const Signup: React.FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  // Handles dispatching state change based on the name of the input for text input field
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: [e.target.name, e.target.value],
    });
  };

  // Handles dispatching state change based on the name of the input for check box input fields
  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: [e.target.name, e.target.checked],
    });
  };

  // Middleware to create the new user
  const handleSubmit = () => {
    // Need to write validation function

    axios
      .post("/api/db/user/register", {
        state,
      })
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          router.push("/login");
        }
      });
  };

  return (
    <Layout showFullNav={false}>
      <Head>
        <title>Sign Up</title> <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.contentContainer}>
        <div className={styles.posContainer}>
          <h1>Get Started</h1>
          <p>Create your Foodlabel Account to start creating labels today</p>
          <div className={styles.inputContainer}>
            <label>Email Address</label>
            <input
              type="email"
              value={state.email}
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
              value={state.password}
              name="password"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                handleTextChange(ev);
              }}
              placeholder={"Password"}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Confirm Password</label>
            <input
              type="password"
              value={state.confirmPassword}
              name="confirmPassword"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                handleTextChange(ev);
              }}
              placeholder={"Confirm Password"}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Company Name (Optional)</label>
            <input
              type="text"
              value={state.companyName}
              name="companyName"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                handleTextChange(ev);
              }}
              placeholder={"Company Name (Optional)"}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Referrer Code (Optional)</label>
            <input
              type="text"
              value={state.referrer}
              name="referrer"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                handleTextChange(ev);
              }}
              placeholder={"Referrer Code (Optional)"}
            />
          </div>
          <div className={styles.checkBoxContainer}>
            <input
              type="checkbox"
              name="termFlag"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                handleCheckBoxChange(ev);
              }}
            />
            <span className={styles.textSpan}>
              I have read and agree to the{" "}
              <Link href={"/terms"}>Terms of Service</Link> &{" "}
              <Link href={"/privacy"}>Privacy Policy</Link>
            </span>
          </div>
          <div className={styles.checkBoxContainer}>
            <input
              type="checkbox"
              name="newsLetterFlag"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                handleCheckBoxChange(ev);
              }}
            />
            <span className={styles.textSpan}>Sign up for our newsletter</span>
          </div>
          <button onClick={() => handleSubmit()} className={styles.button}>
            Sign Up
          </button>
          <span className={styles.loginSpan}>
            Already have an account? <Link href={"/login"}>Login here</Link>
          </span>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
