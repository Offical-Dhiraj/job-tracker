import { useState } from "react";
import { api } from "../api/axios";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="glass p-8 rounded-2xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>

        <Input placeholder="Email" onChange={(e:any) => setEmail(e.target.value)} />
        <Input type="password" className="mt-4 p-2 rounded-md w-full" placeholder="Password" onChange={(e:any) => setPassword(e.target.value)} />

        <Button className="mt-5 w-full" onClick={login}>
          Login
        </Button>
         <p className="text-gray-300 mt-2">
            If you don't have an Account <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}