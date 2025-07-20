"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth";
import InputField from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signIn(email, password);
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-12 rounded-2xl shadow-md bg-popover lg:min-w-[400px] space-y-8"
      >
        <h1 className="text-xl font-bold">Prijava</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div className="">
          <InputField
            name="email"
            type="email"
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="">
          <InputField
            name="password"
            type="password"
            id="password"
            label="Lozinka"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          buttonStyle="outline"
          className="rounded-xl"
          size="sm"
        >
          {loading ? "Prijavljivanje..." : "Prijavi se"}
        </Button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Nemate nalog?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Registrujte se
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
