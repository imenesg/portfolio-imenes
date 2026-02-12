import codebitLogo from '../../public/codebit_logo.jpg'

export interface Experience {
    company: string;
    start: string;
    end: string;
    position: string;
    description: string;
    logo: string;
}

const experiencesMock: Experience[] = [
    {
        company: "(ꓭ/ CodeBit - Programando Soluções",
        start: "10/22",
        end: "09/23",
        position: "Estagiário",
        description:
            "Atuei como Estagiário Fullstack Web participando do desenvolvimento e manutenção de aplicações web, contribuindo tanto no front-end quanto no back-end. Trabalhei na criação de interfaces responsivas e acessíveis utilizando HTML, CSS, JavaScript e frameworks modernos como React, Vue, Bootstrap e Tailwind. No back-end, colaborei na construção de APIs e regras de negócio com Node.js e frameworks baseados em JavaScript. Participei da organização do código com Git, utilizando controle de versão com branches e revisão de código. Também contribuí com melhorias de UI/UX, correção de bugs e implementação de novas funcionalidades, trabalhando em equipe e seguindo boas práticas de desenvolvimento.",
        logo: codebitLogo,
    },
    {
        company: "(ꓭ/ CodeBit - Programando Soluções",
        start: "09/23",
        end: "04/24",
        position: "Desenvolvedor nível I",
        description: "Atuei como Desenvolvedor Web Fullstack no desenvolvimento de aplicações web modernas, trabalhando no front-end e back-end com Vue.js, React, Node.js e AdonisJS. Contribuí para performance e estabilidade das aplicações utilizando ferramentas como Sentry e Redis. Participei do ciclo completo de desenvolvimento, aplicando boas práticas de código e versionamento com Git, em colaboração com a equipe.",
        logo: codebitLogo,
    },
    {
        company: "(ꓭ/ CodeBit - Programando Soluções",
        start: "04/24",
        end: "04/25",
        position: "Desenvolvedor nível II",
        description: "Atuei no desenvolvimento de um sistema de transferência digital de veículos (ATPV-e), contribuindo para funcionalidades que permitem a transferência entre comprador e vendedor em diferentes estados. O projeto possibilitou a realização do processo de forma presencial e digital por Cartórios de Registro Civil, ampliando a flexibilidade e a acessibilidade do serviço. Trabalhei na implementação e manutenção de funcionalidades, seguindo boas práticas de desenvolvimento e colaboração em equipe.",
        logo: codebitLogo,
    },
    {
        company: "(ꓭ/ CodeBit - Programando Soluções",
        start: "04/25",
        end: "04/atual",
        position: "Desenvolvedor nível III",
        description: "Atuei na criação e manutenção de sites, realizando melhorias de performance e implementando novos fluxos de administração nas plataformas. Trabalhei no monitoramento de erros com Sentry, analisando falhas e apoiando a correção de problemas em produção. Prestei suporte técnico direto aos usuários do sistema, identificando, reproduzindo e corrigindo bugs, sempre aplicando boas práticas de desenvolvimento e qualidade de código.",
        logo: codebitLogo,
    },
];

function ExperienceCard({item}: { item: Experience }) {
    return (
        <div
            className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur transition hover:border-zinc-600 hover:bg-zinc-900 container">
            <div className="flex items-start gap-4 flex-col sm:flex-row">
                <img
                    src={item.logo}
                    alt={`Logo ${item.company}`}
                    className="h-14 w-14 rounded-xl object-contain bg-white p-2"
                />

                <div className="flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-lg font-semibold text-white">
                            {item.company}
                        </h3>
                        <span className="text-sm text-zinc-400">
              {item.start} — {item.end}
            </span>
                    </div>
                    <h4 className="text-fm font-semibold text-white">
                        {item.position}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function ExperienceList({items = experiencesMock}) {
    return (
        <section className="mx-auto w-full max-w-5xl px-6 py-16">
            <header className="mb-10">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Experiência como desenvolvedor web
                </h2>
            </header>

            <div className="grid gap-6">
                {items.map((item, idx) => (
                    <ExperienceCard key={idx} item={item}/>
                ))}
            </div>
        </section>
    );
}
