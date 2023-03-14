import Link from 'next/link';
import { FiInstagram, FiFacebook } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-600 py-12 text-white transition-colors duration-150 bg-zinc-900">
        <div className="col-span-1 lg:col-span-2">
          <Link
            href="/"
            className="flex  items-center font-bold md:mr-24"
          >
            <span className="rounded-full border border-zinc-700 mr-2">
              {/* <> */}
            </span>
            <span>ICB Grande Nordeste</span>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Inicio
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Sobre
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="text-white font-bold hover:text-zinc-200 transition ease-in-out duration-150">
                INFORMAÇÕES LEGAIS
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Politica de Privacidade
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Termos de Uso
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-6 flex items-start lg:justify-end text-white">
          <div className="flex space-x-6 items-center h-10">
            <a
              aria-label="Facebook"
              href="https://l.instagram.com/?u=https%3A%2F%2Fm.facebook.com%2Fpages%2Fcategory%2FReligious-organization%2FIgreja-Casa-da-B%C3%AAn%C3%A7%C3%A3o-Grande-Nordeste-101132181962057%2F&e=AT3oIkw7OrpmU0Tjk7zbF-RgD7FpRXEacjbGHNXEpgkT4MGptCHYCEIlvT1faMPItus7_zxIlwVg6n7Bz4WB0D0lnzT08KOr3eETqQ"
            >
              <FiFacebook />
            </a>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/icbgrandenordeste/"
            >
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4 text-white">
        <div>
          <span>&copy; Igreja Casa Da Benção Grande Nordeste. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}