export default function Footer() {
    return (
        <footer
            className="relative mt-24 overflow-hidden border-t border-zinc-800 bg-gradient-to-b from-zinc-950 to-black text-zinc-300">

            <div
                className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-zinc-500/10 blur-3xl"/>
            <div
                className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-zinc-500/10 blur-3xl"/>

            <div className="relative mx-auto max-w-6xl px-6 py-14">
                <div className="grid gap-10 md:grid-cols-3">

                    <div>
                        <h3 className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-xl font-semibold text-transparent">
                            Gabriel Imenes
                        </h3>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
                            Desenvolvedor fullstack focado na criação de aplicações web
                            robustas, APIs e interfaces modernas. Sempre buscando resolver
                            problemas reais com soluções simples e bem estruturadas.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                            Contato
                        </h4>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <a
                                    href="mailto:imenesgabriel@gmail.com"
                                    className=" group inline-flex items-center gap-2 transition hover:text-emerald-400"
                                >
                                    <span className=" h-2 w-2 rounded-full bg-emerald-400/70 transition
                                group-hover:bg-emerald-400"/>
                                    imenesgabriel@gmail.com
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.linkedin.com/in/gabriel-imenes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 transition hover:text-cyan-400"
                                >
                                <span
                                    className="h-2 w-2 rounded-full bg-cyan-400/70 transition group-hover:bg-cyan-400"/>
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                            Disponível para projetos
                        </h4>

                        <p className="mt-4 text-sm text-zinc-400">
                            Aberto a oportunidades freelance e posições full-time. Vamos
                            conversar sobre sua ideia.
                        </p>

                        <a
                            href="mailto:imenesgabriel@gmail.com"
                            className="mt-6 inline-block rounded-xl bg-zinc-400 px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-300"
                        >
                            Enviar e-mail
                        </a>
                    </div>
                </div>

                {/* bottom bar */}
                <div
                    className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-xs text-zinc-500 md:flex-row">
                    <p>© {new Date().getFullYear()} Gabriel Imenes. Todos os direitos reservados.</p>

                    <div className="flex items-center gap-6">
                        <a
                            href="#top"
                            className="transition hover:text-zinc-300"
                        >
                            Voltar ao topo ↑
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
        ;
}
