import { Check } from "@phosphor-icons/react";


export default function Success() {
    return (
      <>
        <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-red-600"><Check className="mt-4 inline-block justify-items-center" size={32} color="#dc2626" /></p>
                
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Usuário Cadastrado!</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">verifique seu e-mail para confirmar sua identidade.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/login"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Fazer Login
              </a>
              <a href="#" className="text-sm font-semibold text-gray-900">
                Ajuda <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }
  