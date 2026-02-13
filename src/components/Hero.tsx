export default function Hero() {
    return (
        <section
            className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white">
            <div
                className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-zinc-500/20 blur-3xl"/>
            <div
                className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-zinc-500/30 blur-3xl"/>
            <div
                className="relative mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-16 px-6 py-16 md:grid-cols-2">
                <div className="order-2 md:order-1">
                    <p className="mb-6 text-sm tracking-widest text-zinc-300 sm:text-base">
                        OLÁ, SOU GABRIEL IMENES
                    </p>

                    <h1 className="font-extrabold leading-[0.95] tracking-tight">
            <span
                className="block from-white to-zinc-400 bg-clip-text text-4xl text-zinc-300 sm:text-6xl md:text-7xl lg:text-8xl">
              Desenvolvedor
            </span>
                        <span className="block bg-clip-text text-4xl text-zinc-300 sm:text-6xl md:text-7xl lg:text-8xl">
              fullstack
            </span>
                    </h1>

                    <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
                        Sou Tecnólogo em Análise e Desenvolvimento de Sistemas e atuo como
                        desenvolvedor com foco na criação de soluções web orientadas a
                        necessidades reais de negócio. Possuo experiência no
                        desenvolvimento de aplicações robustas, APIs REST e sistemas web
                        completos.
                    </p>

                </div>

            </div>
        </section>
    );
}
