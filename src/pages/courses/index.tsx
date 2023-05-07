import { ChartLine, Clock } from "@phosphor-icons/react"
import Footer from "../../components/Footer"
import Navbar01 from "../../components/navebars/navbar01"

const courses = [
    {
      id: 1,
      name: 'Modulo 01',
      href: 'login',
      imageSrc: 'https://cdn.pixabay.com/photo/2016/11/21/16/09/bible-1846174_960_720.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'R$ 100,00',
      descprition: 'Conhecimento Bíblico e Teológico',
      time: '120h' ,
      lessons: '50 Aulas'
    },
    {
      id: 2,
      name: 'Modulo 02',
      href: 'login',
      imageSrc: 'https://cdn.pixabay.com/photo/2016/11/21/16/09/bible-1846174_960_720.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'R$ 150,00',
      descprition: 'O Evangelho em Prática',
      time: '100h' ,
      lessons: '35 Aulas'
    },
    {
      id: 3,
      name: 'ECDC',
      href: 'login',
      imageSrc: 'https://cdn.pixabay.com/photo/2016/11/21/16/09/bible-1846174_960_720.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'R$ 75,00',
      descprition: 'Para Líderes e Professores do Ministéio Infantil',
      time: '64h' ,
      lessons:'20 Aulas'
    }
  ]
  
  export default function Courses () {
    return (
        <>
        <Navbar01/>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nossos Cursos</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {courses.map((courses) => (
              <div key={courses.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                  <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center">
                    <span className="text-white text-2xl font-bold">Comprar</span>
                  </div>
                  <img
                    src={courses.imageSrc}
                    alt={courses.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="font-bold text-black">
                      <a href={courses.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {courses.name}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">{courses.descprition}</p>
                    
                    <p className="mt-2 text-sm text-gray-500">  <Clock size={16} color="#dc2626"/> {courses.time}</p>

                    <p className="mt-2 text-sm text-gray-500">  <ChartLine size={16} color="#dc2626"/> {courses.lessons}</p>
                  </div>
                  <p className="text-1xl font-medium text-gray-900">{courses.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
    )
  }
  