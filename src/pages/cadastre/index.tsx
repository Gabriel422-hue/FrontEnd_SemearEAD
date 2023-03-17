import { Switch } from "@headlessui/react";
import {useState} from "react";
import Footer from "../../components/Footer";
import Navbar01 from "../../components/navebars/navbar01";
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/router';


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Cadastre() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  
  function handleCadastre(data){
    const userData = {
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      cpf: data.cpf,
      address: data.address,
      city: data.city,
      state: data.state,
      cep: data.cep,
      church: data.church,
    };
  
    axios.post('http://localhost:8080/users', userData)
    .then(response => {
      if (response.status === 201) {
        router.push('/success');
      } else {
        console.log(response.data);
      }
      })
      .catch(error => {
        console.log(error);
      });
  }
  const [agreed, setAgreed] = useState(false);
  return (
    <>
      <Navbar01 />
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="ml-20 text-lg font-medium leading-6 text-gray-900">
                Cadastre Seus Dados
              </h3>
              <p className="ml-20 mt-1 text-sm text-gray-600">
                Use informações validas.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit(handleCadastre)}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nome
                      </label>
                      <input
                       {...register('name')}
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-600 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Sobrenome
                      </label>
                      <input
                       {...register('lastname')}
                        type="text"
                        name="lastname"
                        id="lastname"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-600 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        E-mail
                      </label>
                      <input
                       {...register('email')}
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-600 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Senha
                      </label>
                      <input
                       {...register('password')}
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-600 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="cpf"
                        className="block text-sm font-medium text-gray-700"
                      >
                        CPF
                      </label>
                      <input
                       {...register('cpf')}
                        placeholder="xxx.xxx.xxx-xx"
                        max={11}
                        type="text"
                        name="cpf"
                        id="cpf"
                        autoComplete="cpf"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-600 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Endereço
                      </label>
                      <input
                       {...register('address')}
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-600 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Cidade
                      </label>
                      <input
                       {...register('city')}
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-600 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Estado
                      </label>
                      <input
                       {...register('state')}
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="address-level1"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-600 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        CEP
                      </label>
                      <input
                       {...register('cep')}
                        type="text"
                        name="cep"
                        id="cep"
                        autoComplete="postal-code"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-600 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Igreja
                      </label>
                      <select
                       {...register('church')}
                        id="church"
                        name="church"
                        autoComplete="church-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-600 sm:text-sm"
                      >
                        <option>ICB CAETES 1</option>
                        <option>ICB CAETES 3</option>
                        <option>ICB CRUZ DE REBOUÇAS</option>
                      </select>
                    </div>
                    <Switch.Group
                      as="div"
                      className="flex gap-x-4 sm:col-span-2"
                    >
                      <div className="flex h-6 items-center">
                        <Switch
                          checked={agreed}
                          onChange={setAgreed}
                          className={classNames(
                            agreed ? "bg-red-600" : "bg-gray-200",
                            "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                          )}
                        >
                          <span className="sr-only">Agree to policies</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              agreed ? "translate-x-3.5" : "translate-x-0",
                              "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                            )}
                          />
                        </Switch>
                      </div>
                      <Switch.Label className="text-sm leading-6 text-gray-600">
                        Concordo com a politica de privacidade{" "}
                        <a href="#" className="font-semibold text-red-600">
                          politica&nbsp;privacidade
                        </a>
                        .
                      </Switch.Label>
                    </Switch.Group>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                  >
                    Cadastrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
