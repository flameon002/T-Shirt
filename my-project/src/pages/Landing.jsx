import Navbar from "../components/Navbar";
import { PiTShirtBold } from "react-icons/pi";
import { FaPen } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import { RiImageAddFill } from "react-icons/ri";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white">
      <header className="flex items-center justify-between p-6">
        <div className="text-4xl font-bold flex gap-3">
          <img src="favicon.png" alt="Logo icon" className="h-10" />
          <span className="text-blue-400">T-Shirt </span>
          <span className="text-pink-400">Custom</span>
        </div>
      </header>
      <main className="px-4 py-10 text-center md:px-6">
        <section id="about" className="w-full py-10 md:py-24 lg:py-32 ">
          <h1 className="text-4xl font-bold md:text-5xl">
            Tu camiseta<span className="text-pink-500"> Imaginada</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Crea tu propia camiseta sin limite de creatividad de manera gratuita
          </p>
          <div className="mt-6 space-x-4">
            <a
              href="/customizer"
              className="bg-pink-600 hover:bg-fuchsia-600  text-xl text-white font-semibold p-5 rounded-xl "
            >
              Empieza a crear gratis
            </a>
          </div>
        </section>

        <section>
          <div className="mt-12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <img
              src="/canvas.png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 hover:scale-105 aspect-[16/16]"
            />
            <img
              src="/canvas (8).png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 aspect-[16/9] hover:scale-105"
            />
            <img
              src="/canvas (3).png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 aspect-[16/9] hover:scale-105"
            />
            <img
              src="/canvas (4).png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 aspect-[16/9] hover:scale-105"
            />
            <img
              src="/canvas (5).png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 aspect-[16/9] hover:scale-105"
            />
            <img
              src="/canvas(6).png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 aspect-[16/9]  hover:scale-105"
            />
          </div>
        </section>

        <div className="mt-6 flex justify-around bg-black/40 p-4">
          <p>✨ Cada camiseta es única!</p>
          <p>✨ Deja volar tu imaginacion!</p>
          <p>✨ Infinitas posibilidades!</p>
          {/* <p>✨ Unimaginable scenes!</p> */}
        </div>

        <section id="about" className="w-full py-10 md:py-24 lg:py-32 ">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold  sm:text-4xl tracking-wide text-gray-200">
                  Servicio
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Customiza sin limites como quieres que se vea tu
                  remera, luego guardar la imagen para poder usarlas a tu gusto.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Customizacion de{" "}
                        <span className="font-extrabold text-blue-400 text-2xl">
                          logos / dibujos
                        </span>
                      </h3>
                      <p className="text-muted-foreground">
                        Coloca tus logos o diseños a modo de estampados de
                        camisetas personalizadas.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Cambia de{" "}
                        <span className="font-extrabold text-blue-400 text-2xl">
                          colores
                        </span>
                      </h3>
                      <p className="text-muted-foreground">
                        Selecciona el color de tu camiseta para combinar con tu estilo.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Sube tus{" "}
                        <span className="font-extrabold text-blue-400 text-2xl">
                          imagenes
                        </span>
                      </h3>
                      <p className="text-muted-foreground">
                        Sube tus propias imagenes y úsalas como estampas de la
                        camiseta.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/customizer2.png"
                alt="Services"
                className="mx-auto overflow-hiddeno hover:scale-105 rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex gap-1">
                  <PiTShirtBold size={50} />
                  <FaPen size={20}/>
                </div>
                <h3 className="mt-4 text-xl font-semibold">
                  Customizacion de{" "}
                  <span className="font-extrabold text-blue-400 text-2xl">
                    logos / dibujos
                  </span>
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Our product is designed for lightning-fast performance,
                  ensuring your business stays ahead of the curve.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
              <IoColorPaletteOutline size={50}/>
                {/* <ShieldIcon className="h-12 w-12 text-gray" /> */}
                <h3 className="mt-4 text-xl font-semibold">
                  Cambia de{" "}
                  <span className="font-extrabold text-blue-400 text-2xl">
                    colores
                  </span>
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Trust our robust security features and reliable infrastructure
                  to protect your data and keep your business running smoothly.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                {/* <SettingsIcon className="h-12 w-12 text-gray" /> */}
                <RiImageAddFill size={50}/>
                <h3 className="mt-4 text-xl font-semibold">
                  Sube tus{" "}
                  <span className="font-extrabold text-blue-400 text-2xl">
                    imagenes
                  </span>
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Trust our robust security features and reliable infrastructure
                  to protect your data and keep your business running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py- md:py-24 lg:py-8">
          <div className=" px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 lg:grid-cols-2 lg:gap-12">
              <img
                src="/bg.jpg"
                alt="Project 1"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">Simple y gratuito</h3>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Desarrollamos una plataforma web personalizada para un empresa
                  del sector retail, optimizando sus procesos y mejorando la
                  experiencia del usuario.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">
                  Muestra tus resultados a tus clientes
                </h3>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Implementa una solucion para mostrar tus diseños a tus
                  clientes antes de comenzar
                </p>
              </div>
              <img
                src="/bg.jpg"
                alt="Project 2"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>


        <section>
          <div className="mt-12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <img
              src="/canvas.png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 hover:scale-105 aspect-[9/16]"
            />
            <img
              src="/canvas (8).png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 aspect-[5/3] hover:scale-105"
            />
            <img
              src="/canvas (3).png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 aspect-[5/3] hover:scale-105"
            />
            <img
              src="/canvas (4).png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 aspect-[5/3] hover:scale-105"
            />
            <img
              src="/canvas (5).png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 aspect-[5/3] hover:scale-105"
            />
            <img
              src="/canvas(6).png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 aspect-[5/3] hover:scale-105"
            />
          </div>
        </section>

        
        <section>
          <div className="mt-12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <img
              src="/canvas.png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 hover:scale-105 aspect-[5/3]"
            />
            <img
              src="/canvas (8).png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 aspect-[5/3] hover:scale-105"
            />
            <img
              src="/canvas (3).png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 aspect-[5/3] hover:scale-105"
            />
            <img
              src="/canvas (4).png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 aspect-[5/3] hover:scale-105"
            />
            <img
              src="/canvas (5).png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 aspect-[5/3] hover:scale-105"
            />
            <img
              src="/canvas(6).png"
              alt="T-shirt design 1"
              className="rounded-lg bg-gray-700/30 aspect-[5/3] hover:scale-105"
            />
          </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 LauDev</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            href="#"
            className="text-xs hover:underline underline-offset-4 text-muted-foreground"
            prefetch={false}
          >
            Contato
          </a>
          <a
            href="#"
            className="text-xs hover:underline underline-offset-4 text-muted-foreground"
            prefetch={false}
          >
            Redes sociales
          </a>
        </nav>
      </footer>
    </div>
  );
}

