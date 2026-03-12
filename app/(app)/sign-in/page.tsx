"use client";

import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Github,
  Chrome,
} from "lucide-react";

interface FormState {
  email: string;
  password: string;
}

interface InputFieldProps {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  type: string;
  name: keyof FormState;
  form: FormState;
  focused: string;
  showToggle?: boolean;
  showValue?: boolean;
  onToggle?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (id: string) => void;
  onBlur: () => void;
}

const InputField = ({
  id,
  label,
  icon: Icon,
  type,
  name,
  form,
  focused,
  showToggle,
  showValue,
  onToggle,
  onChange,
  onFocus,
  onBlur,
}: InputFieldProps) => (
  <div className="relative group">
    <label
      htmlFor={id}
      className={`absolute left-10 transition-all duration-200 pointer-events-none text-sm font-medium z-10 ${
        focused === id || form[name]
          ? "-top-2.5 left-3 text-xs bg-white px-1 text-indigo-600"
          : "top-3.5 text-slate-400"
      }`}
    >
      {label}
    </label>
    <div className="absolute left-3 top-3.5 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
      <Icon size={16} />
    </div>
    <input
      id={id}
      name={name}
      type={showToggle ? (showValue ? "text" : "password") : type}
      autoComplete="off"
      value={form[name]}
      onChange={onChange}
      onFocus={() => onFocus(id)}
      onBlur={onBlur}
      placeholder=""
      className="w-full bg-white border border-slate-200 rounded-xl px-10 py-3.5 text-sm text-slate-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all placeholder-transparent"
    />
    {showToggle && (
      <button
        type="button"
        onClick={onToggle}
        className="absolute right-3 top-3.5 text-slate-400 hover:text-indigo-500 transition-colors"
      >
        {showValue ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    )}
  </div>
);

type SocialProvider = {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
};

const socialProviders: SocialProvider[] = [
  { icon: Github, label: "GitHub" },
  { icon: Chrome, label: "Google" },
];

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({ email: "", password: "" });
  const [focused, setFocused] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log("Login submitted:", form);
  };

  const sharedFieldProps = {
    form,
    focused,
    onChange: handleChange,
    onFocus: setFocused,
    onBlur: () => setFocused(""),
  };

  return (
    <div
      className="min-h-screen bg-slate-50 flex items-center justify-center px-4"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* Background blobs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-80 h-80 bg-violet-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        <div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-xl shadow-slate-200/60">
          {/* Logo & Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm" />
              </div>
              <span
                className="text-slate-800 font-semibold tracking-tight text-sm"
                style={{ fontFamily: "monospace" }}
              >
                FURMART
              </span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">
              Welcome back
            </h1>
            <p className="text-slate-400 text-sm">
              Sign in to continue to Furmart.
            </p>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {socialProviders.map(({ icon: Icon, label }) => (
              <button
                key={label}
                type="button"
                className="flex items-center justify-center gap-2 border border-slate-200 rounded-xl py-2.5 text-slate-600 text-sm hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-150 bg-white"
              >
                <Icon size={15} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-slate-400 text-xs tracking-widest uppercase">
              or
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <InputField
              id="email"
              label="Email address"
              icon={Mail}
              type="email"
              name="email"
              {...sharedFieldProps}
            />
            <InputField
              id="password"
              label="Password"
              icon={Lock}
              type="password"
              name="password"
              showToggle
              showValue={showPassword}
              onToggle={() => setShowPassword((p) => !p)}
              {...sharedFieldProps}
            />
          </div>

          {/* Forgot password */}
          <div className="flex justify-end mt-3">
            <span className="text-indigo-500 text-xs cursor-pointer hover:text-indigo-700 transition-colors font-medium">
              Forgot your password?
            </span>
          </div>

          {/* Remember me */}
          <label className="flex items-center gap-2.5 mt-4 cursor-pointer group">
            <div className="w-4 h-4 rounded border border-slate-300 group-hover:border-indigo-400 transition-colors flex items-center justify-center bg-white">
              <div className="w-2 h-2 rounded-sm bg-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>
            <span className="text-slate-500 text-xs">
              Remember me for 30 days
            </span>
          </label>

          {/* Submit */}
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-3 flex items-center justify-center gap-2 transition-all duration-150 text-sm group shadow-md shadow-indigo-200"
          >
            Sign in
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>

          {/* Sign up link */}
          <p className="text-center text-slate-400 text-sm mt-5">
            Don't have an account?{" "}
            <span className="text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors font-medium">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
