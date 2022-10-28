import { LockClosedIcon } from "@heroicons/react/20/solid";

export const Registro = () => {
  return (
    <>
      <div className="flex justify-center py-2 px-5 bg-gray h-screen ">
        <div className="block p-3 rounded-lg shadow-lg w-2/4 bg-white">
          <div className="flex min-h-full items-center justify-center py-1 px-4 sm:px-6 lg:px-8 ">
            <div className="w-full space-y-1 ">
              <div>
                <h2 className="text-center text-3xl font-bold text-gray-900">
                  Registrate
                </h2>
              </div>
              {/* --------------------------------------------------------FORM-------------------------------------------------------------- */}
              <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="space-y-2 rounded-md shadow-sm ">
                  <div>
                    <label htmlFor="first_name" className="font-medium">
                      Nombre
                    </label>
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                      required
                      className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="font-medium">
                      Apellido
                    </label>
                    <input
                      id="last_name"
                      name="last_name"
                      type="text"
                      required
                      className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Apellido"
                    />
                  </div>
                  <div>
                    <label htmlFor="personal_phone" className="font-medium">
                      Telefono
                    </label>
                    <input
                      id="personal_phone"
                      name="personal_phone"
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                      className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Telefono"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="font-medium">
                      Direccion
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="textarea"
                      required
                      className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Direccion"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="font-medium">
                      Contraseña
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Contraseña"
                    />
                  </div>
                  <div>
                    <label htmlFor="username" className="font-medium">
                      Username
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Contraseña"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-medium">
                      Correo
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Correo"
                    />
                  </div>
                </div>

                <div className="flex flex-row justify-center space-x-4">
                  <div>
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Registrarse
                    </button>
                  </div>
                  
                  <div>
                    <a
                      href="/"
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </form>
              {/* --------------------------------------------------------FORM-------------------------------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
