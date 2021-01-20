import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/Login.module.scss";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";

const Login: React.FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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

  const handleSubmit = () => {
    const state = { email: email, password: password };

    axios
      .post("/api/db/user/login", {
        state,
      })
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          router.push("/dashboard");
        }
        console.log(res);
      });
  };

  return (
    <Layout showFullNav={false}>
      <Head>
        <title>Log In</title> <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.contentContainer}>
        <div className={styles.posContainer}>
          <h1>Login</h1>
          <p>Login to your foodlabel account to continue</p>
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
            Login
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
