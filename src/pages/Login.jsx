import { LockClosedIcon } from "@heroicons/react/20/solid";
import "./login.css";
// import { useNavigate,Link } from 'react-router-dom';
// import React, { useContext, useState } from 'react';
// import { AuthContext } from "../contexts/auth/AuthContext";


export const Login = () => {
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const onLogin = async (e) => {
//     e.preventDefault();
//     try {
//         const response = await axios.post(                
//             'https://jail-project.herokuapp.com/api/v1/login',
//             { email, password },
//             { headers: { 'accept': 'application/json' } }
//         )
//         const {access_token, token_type, user} = response.data.data 
//         login(user, `${token_type} ${access_token}`);   
//         navigate('/');     
//         console.log(token_type);  
//         console.log(access_token);
//         console.log(user);
//         console.log(response);

//     } catch (error) {
//         console.log(error.response.data.message, 'error');
//         setEmail('');
//         setPassword('');
//     }
// }

  return (
    <>    
      <div className="flex flex-row justify-center h-screen">

        <div className="flex justify-center py-12 bg-black">
          <div className="block p-3 rounded-l-lg shadow-lg max-w-sm bg-white">
            <div className="flex min-h-full items-center justify-center pt-5 pb-5 px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-md space-y-8">
                <div>
                  <img
                    className="mx-auto h-40 w-min"
                    src="https://cdn-icons-png.flaticon.com/512/8263/8263115.png"
                    alt="Your Company"
                  />
                  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Ingresa en tu cuenta
                  </h2>
                  <p className="mt-2 text-center text-sm text-gray-600">
                    O puedes{" "}
                    <a
                      href="/registro"
                      className="font-medium text-indigo-600 hover:text-indigo-500 "
                    >
                      Registrarte
                    </a>
                  </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                      <label htmlFor="email-address" className="sr-only">
                        Correo
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Correo"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">
                        Contraseña
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Contraseña"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-sm  ">
                      <a
                        href="/ConfirmarCor"
                        className="font-medium text-indigo-600 hover:text-indigo-500 "
                      >
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon
                          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                          aria-hidden="true"
                        />
                      </span>
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-center py-12 bg-indigo-600">
          <div className="block p-3 rounded-r-lg shadow-lg max-w-xl bg-white">
            <img
              src="public/images/poli1.jpg"
              className="rounded-lg h-auto w-96"
            />
          </div>
        </div>

      </div>           
    </>
  );
};
