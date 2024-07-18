import Navbar from "../components/Navbar";
export default function Component() {
  return (
    <div className="flex flex-col min-h-screen mx-[5%] bg-slate-900 text-gray-300">
      <Navbar />
      <main className="flex-1">
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="">
                <div className="flex flex-col ">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-200 mb-16">
                    Personalización de logotipos y camisetas
                  </h1>
                  <p className="text-muted-foreground md:text-xl text-gray-400 mb-20">
                    Deja volar tu creatividad con un sinfin de posibilidades de
                    como se vería tu camiseta con tu logo o diseño
                    personalizado.
                  </p>
                  <div className="mx-auto my-6">
                    <a
                      href="/customizer"
                      className=" bg-orange-500 p-6 px-10 md:px-16 rounded-xl text-2xl hover:bg-orange-400  "
                    >
                      Comenzar
                    </a>
                  </div>
                </div>
              </div>
              <img
                src="/bg.jpg"
                alt="About"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>

        <section >
          <div className="flex w-[900px] mx-auto items-center justify-center relative">
            <img
              src="/canvas (2).png"
              alt="canvas"
              className="h-[20rem] absolute top-0 left-20 overflow-hidden "
            />
            <img
              src="/canvas (2).png"
              alt="canvas"
              className="h-[20rem] absolute top-0 left-0 overflow-hidden "
            />
            <img
              src="/canvas (2).png"
              alt="canvas"
              className="h-[20rem]  overflow-hidden "
            />
          </div>
        </section>

        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold  sm:text-4xl tracking-wide text-gray-200">
                  Servicio
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Podras customizar de varias maneras como quieres que se vea tu
                  remera, luego guardar la imagen para poder usarlas a tu gusto
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
                        Selecione a cor da camiseta para combinar com seu
                        estilo.
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
                src="/bg.jpg"
                alt="Services"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Nossos Projetos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Veja alguns dos projetos que concluímos para nossos clientes
                  satisfeitos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/bg.jpg"
                alt="Project 1"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">Simple y gratuito</h3>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Desenvolvemos uma plataforma web personalizada para uma
                  empresa do setor de varejo, otimizando seus processos e
                  melhorando a experiência do usuário.
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
            Redes Sociais
          </a>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
