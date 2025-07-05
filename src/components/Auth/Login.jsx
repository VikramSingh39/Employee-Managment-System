import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showTable, setShowTable] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  const showCredential = () => {
    setShowTable(prev => !prev);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
      <div className="">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 py-3 px-5 text-xl border-emerald-600 rounded-full "
            type="email"
            placeholder="enter your email"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 py-3 px-5 text-xl border-emerald-600 rounded-full mt-3"
            type="password"
            placeholder="enter your password"
          />

          <button className="text-white outline-none  border-none py-2 px-25 text-xl bg-emerald-600 rounded-full mt-7 cursor-pointer">
            Login
          </button>
        </form>

        <button onClick={showCredential} className="text-white outline-none  border-none py-2 px-25 text-xl bg-red-600 rounded-full mt-7 cursor-pointer">
            Show Login Credential
          </button>

            {showTable && (
            <div className="mt-5">
              <table className="border border-white text-left">
                <thead>
                  <tr>
                    <th className="border border-white px-4 py-2">Email</th>
                    <th className="border border-white px-4 py-2">Password</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-white px-4 py-2">admin@me.com</td>
                    <td className="border border-white px-4 py-2">123</td>
                  </tr>
                  <tr>
                    <td className="border border-white px-4 py-2">emp1@me.com</td>
                    <td className="border border-white px-4 py-2">123</td>
                  </tr>
                  <tr>
                    <td className="border border-white px-4 py-2">emp2@me.com</td>
                    <td className="border border-white px-4 py-2">123</td>
                  </tr>
                  <tr>
                    <td className="border border-white px-4 py-2">emp3@me.com</td>
                    <td className="border border-white px-4 py-2">123</td>
                  </tr>
                  <tr>
                    <td className="border border-white px-4 py-2">emp4@me.com</td>
                    <td className="border border-white px-4 py-2">123</td>
                  </tr>
                  <tr>
                    <td className="border border-white px-4 py-2">emp5@me.com</td>
                    <td className="border border-white px-4 py-2">123</td>
                  </tr>
                </tbody>
              </table>
            </div>
            )}
      
      </div>

    </div>
  );
};
export default Login;
