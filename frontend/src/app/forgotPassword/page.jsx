'use client'; // needed for useState to work
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import OAuth from '../components/OAuth';

export default function ForgotPassword() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let port = 5000;

  // backend stuff
  // TODO: CHANGE THIS TO FORGOT PASSWORD
  const sendEmailForgotPassword = async () => {
    const response = await fetch(`http://localhost:${port}/api/auth/send`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <div className="login-background">
        <form
          name="publish-form"
          id="form"
          className=" w-1/3 justify-center mx-auto pt-3" // POSTIION MUST BE ABOSLUTE
        >
          <div className="mb-5 relative top-32">
            <label
              className="block text-white text-[2rem] font-bold mb-5"
              htmlFor="password"
            >
              Forgot Password
            </label>
            <div className="text-white mb-3 ">
              We will send you an email with instructions on how to reset your
              password.
            </div>
            <input
              name="email-address"
              className="shadow appearance-none border rounded w-full py-3 px-2 text-gray-700 placeholder-blue-400 leading-tight focus:outline-none focus:shadow-outline"
              id="email-address"
              type="text"
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              // multiple
            />
          </div>

          {/* Send email */}
          <div className="items-center justify-between relative top-32">
            <button
              id="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-1/4 italic py-2 px-4 pb-3: rounded focus:outline-none focus:shadow-outline mb-5"
              type="button"
              onClick={sendEmailForgotPassword}
            >
              Send Email
            </button>
          </div>
          <div className="flex items-center justify-center relative top-52">
            Return to &nbsp;
            <Link href="/" className="text-primary-theme-lb underline">
              Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
