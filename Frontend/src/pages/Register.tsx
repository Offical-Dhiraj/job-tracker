import { useState } from "react";
import { api } from "../api/axios";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await api.post("/auth/register", { email, password });
    window.location.href = "/login";
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="glass p-8 rounded-2xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <Input placeholder="Email" onChange={(e:any) => setEmail(e.target.value)} />
        <Input type="password" className="mt-4 p-2 w-full rounded-md bg-gray-600 " placeholder="Password" onChange={(e:any) => setPassword(e.target.value)} />

        <Button className="mt-5 w-full" onClick={register}>
          Register
        </Button>
        <p className="text-gray-300 mt-2">
            If you have already  an Account <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}