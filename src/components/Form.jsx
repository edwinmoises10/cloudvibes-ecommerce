import { useState } from "react";

export default function Form() {
  const labelClasses =
    "group flex flex-row items-center gap-4 p-4 rounded-2xl bg-gradient-to-bl from-slate-200 via-slate-500 to-slate-900 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 ease-out cursor-text";

  const labelTextClasses =
    "text-slate-300 font-bold tracking-wider uppercase whitespace-nowrap text-sm sm:text-base";

  const inputClasses =
    "w-80 bg-transparent border-none text-white placeholder-slate-400 focus:outline-none focus:ring-0 ";

  const labelText = "flex items-center justify-center text-white font-bold";

  function handleSumbit(event) {
    console.log(event);
    event.preventDefault();
  }

  const [inputValue, setInputValue] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const [formData, setFormData] = useState({});

  return (
    <div className="flex justify-center items-center w-full p-4">
      <div className="bg-linear-to-b from-slate-900 via-slate-700 to-slate-500 rounded-2xl w-full max-w-lg p-6 flex flex-col shadow-2xl">
        <h2 className="mb-6 text-end text-1xl font-light text-white uppercase tracking-widest drop-shadow-md">
          Checkout 🚀
        </h2>

        <form onSubmit={handleSumbit} className="flex flex-col gap-4" action="">
          {/* USERNAME */}
          <label htmlFor="username" className={labelClasses}>
            <span className={labelTextClasses}>Full Name:</span>
            <input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value.toUpperCase());
              }}
              type="text"
              className={inputClasses}
              name="username"
              placeholder="Type your name"
              autoComplete="off"
              maxLength="20"
            />
          </label>

          {/* EMAIL */}
          <label htmlFor="email" className={labelClasses}>
            <span className={labelTextClasses}>Email:</span>
            <input
              value={inputEmail}
              onChange={(e) =>
                setInputEmail(e.target.value.toLocaleUpperCase())
              }
              type="email"
              className={inputClasses}
              name="email"
              placeholder="user@example.com"
              maxLength="30"
              autoComplete="off"
            />
          </label>

          {/* PHONE */}
          <label htmlFor="phone" className={labelClasses}>
            <span className={labelTextClasses}>Phone:</span>
            <input
              type="tel"
              className={inputClasses}
              name="phone"
              placeholder="+1 234 567 890"
              maxLength="10"
              autoComplete="off"
            />
          </label>
          {/* date */}
          <span className={labelText}>{Date()}</span>
          <button
            type="submit"
            className="bg-sky-700 hover:bg-sky-900 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-purple-900/20 transition-all active:scale-95 "
          >
            <span>Buy</span>
          </button>
        </form>
      </div>
    </div>
  );
}
