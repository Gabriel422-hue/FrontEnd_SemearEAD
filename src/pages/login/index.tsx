import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Footer from '../../components/Footer'
import Navbar01 from '../../components/navebars/navbar01'
import logoImg from '../../assets/logo.svg'

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8080/login", { email, password });
  
      console.log(response.data.message);
  
      localStorage.setItem("token", response.headers.authorization);
  
      console.log(response); // log the response object to check for errors

      console.log(localStorage.getItem("token"));
  
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Navbar01/>
      <div className="flex h-screen  bg-gray-50 items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-22 w-auto"
              src={logoImg.src}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Faça login em sua conta
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email 
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                 <div className="text-sm">
                <a href="cadastre" className="font-medium text-red-500  hover:text-black">
                  Cadastre-se!
                </a>
              </div>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-red-500  hover:text-black">
                  Esqueceu sua senha?
                </a>
              </div>
             
            </div>

            <div>
              <button
                
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}


