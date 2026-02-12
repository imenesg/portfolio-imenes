import homePrint from '../../public/home.png'
import perfilPrint from '../../public/perfil.png'
import idrcPrint from '../../public/idrc.png'
import gestaoPrint from '../../public/gestao.png'

const projectsMock = [
    {
        title: "Home",
        image:
        homePrint,
        url: "https://home.registrocivil.org.br",
    },
    {
        title: "Pefil - cidadão",
        image:
        perfilPrint,
        url: "https://perfil.idrc.org.br",
    },
    {
        title: "Pefil - Gestão",
        image:
        gestaoPrint,
        url: "https://www.youtube.com/watch?v=9fQoAh1T-DQ",
    },
];

function ProjectCard({project}) {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:border-zinc-600"
        >
            {/* Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                />

                {/* Gradient overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"/>
            </div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {project.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-400 opacity-0 transition group-hover:opacity-100">
                    Clique para saber mais →
                </p>
            </div>
        </a>
    );
}

export default function ProjectCards({items = projectsMock}) {
    return (
        <section className="mx-auto w-full max-w-6xl px-6 py-16 container">
            <header className="mb-10">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Meus projetos
                </h2>
                <p className="mt-2 text-zinc-400">
                    Alguns trabalhos e aplicações desenvolvidas
                </p>
            </header>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {items.map((project, idx) => (
                    <ProjectCard key={idx} project={project}/>
                ))}
            </div>
        </section>
    );
}
