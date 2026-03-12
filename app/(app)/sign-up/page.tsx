// // import React from "react";

// // export default function Signup() {
// //   return ;
// // }
// "use client";

// import { useState } from "react";
// import {
//   User,
//   Mail,
//   Lock,
//   Eye,
//   EyeOff,
//   ArrowRight,
//   Github,
//   Chrome,
// } from "lucide-react";

// interface FormState {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirm: string;
// }

// interface InputFieldProps {
//   id: string;
//   label: string;
//   icon: React.ComponentType<{ size?: number }>;
//   type: string;
//   name: keyof FormState;
//   form: FormState;
//   focused: string;
//   showToggle?: boolean;
//   showValue?: boolean;
//   onToggle?: () => void;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onFocus: (id: string) => void;
//   onBlur: () => void;
// }

// const InputField = ({
//   id,
//   label,
//   icon: Icon,
//   type,
//   name,
//   form,
//   focused,
//   showToggle,
//   showValue,
//   onToggle,
//   onChange,
//   onFocus,
//   onBlur,
// }: InputFieldProps) => (
//   <div className="relative group">
//     <label
//       htmlFor={id}
//       className={`absolute left-10 transition-all duration-200 pointer-events-none text-sm font-medium z-10 ${
//         focused === id || form[name]
//           ? "-top-2.5 left-3 text-xs bg-[#0f0f0f] px-1 text-amber-400"
//           : "top-3.5 text-zinc-500"
//       }`}
//     >
//       {label}
//     </label>
//     <div className="absolute left-3 top-3.5 text-zinc-500 group-focus-within:text-amber-400 transition-colors">
//       <Icon size={16} />
//     </div>
//     <input
//       id={id}
//       name={name}
//       type={showToggle ? (showValue ? "text" : "password") : type}
//       autoComplete="off"
//       value={form[name]}
//       onChange={onChange}
//       onFocus={() => onFocus(id)}
//       onBlur={onBlur}
//       placeholder=""
//       className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-10 py-3.5 text-sm text-white outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/20 transition-all placeholder-transparent"
//     />
//     {showToggle && (
//       <button
//         type="button"
//         onClick={onToggle}
//         className="absolute right-3 top-3.5 text-zinc-500 hover:text-amber-400 transition-colors"
//       >
//         {showValue ? <EyeOff size={16} /> : <Eye size={16} />}
//       </button>
//     )}
//   </div>
// );

// type SocialProvider = {
//   icon: React.ComponentType<{ size?: number }>;
//   label: string;
// };

// const socialProviders: SocialProvider[] = [
//   { icon: Github, label: "GitHub" },
//   { icon: Chrome, label: "Google" },
// ];

// const getStrengthColor = (index: number, length: number): string => {
//   if (length < index * 3) return "bg-zinc-800";
//   if (index <= 1) return "bg-red-500";
//   if (index <= 2) return "bg-orange-400";
//   if (index <= 3) return "bg-yellow-400";
//   return "bg-green-400";
// };

// export default function SignUpPage() {
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const [showConfirm, setShowConfirm] = useState<boolean>(false);
//   const [form, setForm] = useState<FormState>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirm: "",
//   });
//   const [focused, setFocused] = useState<string>("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
//     e.preventDefault();
//     console.log("Form submitted:", form);
//   };

//   const sharedFieldProps = {
//     form,
//     focused,
//     onChange: handleChange,
//     onFocus: setFocused,
//     onBlur: () => setFocused(""),
//   };

//   return (
//     <div
//       className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4"
//       style={{ fontFamily: "'Georgia', serif" }}
//     >
//       {/* Background */}
//       <div
//         className="fixed inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
//           backgroundSize: "32px 32px",
//         }}
//       />
//       <div className="fixed top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="fixed bottom-0 right-1/4 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative w-full max-w-md">
//         <div className="relative bg-[#0f0f0f] border border-zinc-800/80 rounded-2xl p-8 shadow-2xl">
//           {/* Corner accent */}
//           <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden rounded-tl-2xl pointer-events-none">
//             <div className="absolute -top-8 -left-8 w-16 h-16 border border-amber-400/20 rounded-full" />
//           </div>

//           {/* Logo & Header */}
//           <div className="mb-8">
//             <div className="flex items-center gap-2 mb-6">
//               <div className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center">
//                 <div className="w-3 h-3 bg-[#0f0f0f] rounded-sm" />
//               </div>
//               <span
//                 className="text-white font-semibold tracking-tight text-sm"
//                 style={{ fontFamily: "monospace" }}
//               >
//                 FORMA
//               </span>
//             </div>
//             <h1 className="text-2xl font-bold text-white mb-1 tracking-tight">
//               Create your account
//             </h1>
//             <p className="text-zinc-500 text-sm">
//               Join thousands already using Forma.
//             </p>
//           </div>

//           {/* Social Buttons */}
//           <div className="grid grid-cols-2 gap-3 mb-6">
//             {socialProviders.map(({ icon: Icon, label }) => (
//               <button
//                 key={label}
//                 type="button"
//                 className="flex items-center justify-center gap-2 border border-zinc-800 rounded-xl py-2.5 text-zinc-400 text-sm hover:border-zinc-600 hover:text-white transition-all duration-150 bg-zinc-900/40 hover:bg-zinc-900"
//               >
//                 <Icon size={15} />
//                 <span>{label}</span>
//               </button>
//             ))}
//           </div>

//           {/* Divider */}
//           <div className="flex items-center gap-3 mb-6">
//             <div className="flex-1 h-px bg-zinc-800" />
//             <span className="text-zinc-600 text-xs tracking-widest uppercase">
//               or
//             </span>
//             <div className="flex-1 h-px bg-zinc-800" />
//           </div>

//           {/* Form Fields */}
//           <div className="space-y-4">
//             <div className="grid grid-cols-2 gap-3">
//               <InputField
//                 id="firstName"
//                 label="First name"
//                 icon={User}
//                 type="text"
//                 name="firstName"
//                 {...sharedFieldProps}
//               />
//               <InputField
//                 id="lastName"
//                 label="Last name"
//                 icon={User}
//                 type="text"
//                 name="lastName"
//                 {...sharedFieldProps}
//               />
//             </div>
//             <InputField
//               id="email"
//               label="Email address"
//               icon={Mail}
//               type="email"
//               name="email"
//               {...sharedFieldProps}
//             />
//             <InputField
//               id="password"
//               label="Password"
//               icon={Lock}
//               type="password"
//               name="password"
//               showToggle
//               showValue={showPassword}
//               onToggle={() => setShowPassword((p) => !p)}
//               {...sharedFieldProps}
//             />
//             <InputField
//               id="confirm"
//               label="Confirm password"
//               icon={Lock}
//               type="password"
//               name="confirm"
//               showToggle
//               showValue={showConfirm}
//               onToggle={() => setShowConfirm((p) => !p)}
//               {...sharedFieldProps}
//             />
//           </div>

//           {/* Password Strength */}
//           {form.password && (
//             <div className="mt-3 flex gap-1">
//               {[1, 2, 3, 4].map((i) => (
//                 <div
//                   key={i}
//                   className={`h-1 flex-1 rounded-full transition-all duration-300 ${getStrengthColor(i, form.password.length)}`}
//                 />
//               ))}
//             </div>
//           )}

//           {/* Terms */}
//           <p className="text-zinc-600 text-xs mt-5 leading-relaxed">
//             By signing up, you agree to our{" "}
//             <span className="text-amber-400/70 cursor-pointer hover:text-amber-400 transition-colors">
//               Terms of Service
//             </span>{" "}
//             and{" "}
//             <span className="text-amber-400/70 cursor-pointer hover:text-amber-400 transition-colors">
//               Privacy Policy
//             </span>
//             .
//           </p>

//           {/* Submit */}
//           <button
//             type="button"
//             onClick={handleSubmit}
//             className="mt-5 w-full bg-amber-400 hover:bg-amber-300 text-black font-semibold rounded-xl py-3 flex items-center justify-center gap-2 transition-all duration-150 text-sm group"
//           >
//             Create account
//             <ArrowRight
//               size={15}
//               className="group-hover:translate-x-0.5 transition-transform"
//             />
//           </button>

//           {/* Sign in */}
//           <p className="text-center text-zinc-600 text-sm mt-5">
//             Already have an account?{" "}
//             <span className="text-amber-400 cursor-pointer hover:text-amber-300 transition-colors font-medium">
//               Sign in
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Github,
  Chrome,
} from "lucide-react";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm: string;
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
  //   { icon: Github, label: "GitHub" },
  { icon: Chrome, label: "Google" },
];

const getStrengthColor = (index: number, length: number): string => {
  if (length < index * 3) return "bg-slate-200";
  if (index <= 1) return "bg-red-400";
  if (index <= 2) return "bg-orange-400";
  if (index <= 3) return "bg-yellow-400";
  return "bg-green-400";
};

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [focused, setFocused] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", form);
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
      {/* Soft background blobs */}
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
              Create your account
            </h1>
            {/* <p className="text-slate-400 text-sm">
              Join thousands already using Forma.
            </p> */}
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
            <div className="grid grid-cols-2 gap-3">
              <InputField
                id="firstName"
                label="First name"
                icon={User}
                type="text"
                name="firstName"
                {...sharedFieldProps}
              />
              <InputField
                id="lastName"
                label="Last name"
                icon={User}
                type="text"
                name="lastName"
                {...sharedFieldProps}
              />
            </div>
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
            <InputField
              id="confirm"
              label="Confirm password"
              icon={Lock}
              type="password"
              name="confirm"
              showToggle
              showValue={showConfirm}
              onToggle={() => setShowConfirm((p) => !p)}
              {...sharedFieldProps}
            />
          </div>

          {/* Password Strength */}
          {form.password && (
            <div className="mt-3 flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${getStrengthColor(i, form.password.length)}`}
                />
              ))}
            </div>
          )}

          {/* Terms */}
          <p className="text-slate-400 text-xs mt-5 leading-relaxed">
            By signing up, you agree to our{" "}
            <span className="text-indigo-500 cursor-pointer hover:text-indigo-700 transition-colors">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-indigo-500 cursor-pointer hover:text-indigo-700 transition-colors">
              Privacy Policy
            </span>
            .
          </p>

          {/* Submit */}
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-3 flex items-center justify-center gap-2 transition-all duration-150 text-sm group shadow-md shadow-indigo-200"
          >
            Create account
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>

          {/* Sign in */}
          <p className="text-center text-slate-400 text-sm mt-5">
            Already have an account?{" "}
            <span className="text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors font-medium">
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
