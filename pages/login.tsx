import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";
import { createUser, getUser } from "@/firebase/user";
const Login = () => {
  //
  const router = useRouter();
  const [username, setUsername] = useState("");
  //
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`menu/${username}`);

    const existingUser = await getUser(username);

    if (!existingUser) {
      createUser(username);
    }
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
