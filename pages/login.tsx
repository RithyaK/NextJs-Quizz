import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";
const Login = () => {
  //
  const router = useRouter();
  const [username, setUsername] = useState("");
  //
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`menu/${username}`);
  }
  //
  return (
    <div className={styles.container}>
      <form className={styles.login} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
