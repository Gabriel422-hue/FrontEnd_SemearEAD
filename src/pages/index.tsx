import Footer from "../components/Footer";
import Navbar01 from "../components/navebars/navbar01";
import imginit from "../assets/img-inicio.png";

export default function Home() {
  return (
  <>
  <Navbar01/>
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-yellow-500 bg-opacity-90 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="30" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#FFFF" />
                <stop offset={0} stopColor="#336588" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            CENTRO DE ENSINO E CAPACITAÇÃO BIBLICA
            </h2>
            <p className="mt-6 font-dancing-script text-5xl leading-8 text-#336588">
              Seminário Semear
            </p>
            <p className="font-bold mt-5 mx-auto">
              EAD
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/courses"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm border border-transparent hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Quero ser aluno
              </a>
              <a href="/login" className="text-sm font-semibold leading-6 text-white">
                Já sou aluno <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-8">
            <img
              className="absolute top-10 left-0 w-[36rem] max-w-none rounded-lg bg-white/5 ring-1 ring-white/10 transform: rotate-6"
              src={imginit.src}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  )
}
