"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth";
import InputField from "@/components/ui/Input";
import CustomButton from "@/components/custom/CustomButton";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signUp(email, password, firstName, lastName, "user");
      router.push("/login");
    } catch (err) {
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSignup}
        className="p-12 rounded-2xl shadow-md bg-popover lg:min-w-[600px] space-y-8"
      >
        <h1 className="text-xl font-bold">Registracija</h1>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="">
            <InputField
              name="firstName"
              type="text"
              id="firstName"
              label="Ime"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="">
            <InputField
              name="lastName"
              type="text"
              id="lastName"
              label="Prezime"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
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
        <CustomButton
          type="submit"
          disabled={loading}
          buttonStyle="outline"
          className="rounded-xl"
          size="sm"
        >
          {loading ? "Registrovanje..." : "Registruj se"}
        </CustomButton>
        <p className="mt-4 text-center text-sm text-gray-600">
          Već imate nalog?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Prijavite se
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
