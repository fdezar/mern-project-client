import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const isEmailValid = () => {
//     return email.includes("@");
//   };

  const handleEmailInput = e => setEmail(e.target.value);
  const handlePasswordInput = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault()

    // mirar qué se necesita si se necesita algo más
  }

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmailInput}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordInput}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
