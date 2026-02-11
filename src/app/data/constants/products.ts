import ProductModel from "../models/product.model";

export const products: ProductModel[] = [
    {
        id: "florescer_premium",
        active: process.env["NG_APP_FLORESCER_PREMIUM"] === "true",
        name: "Florescer Premium",
        resume: "O ecossistema de implementação para mulheres que cansaram da teoria e querem transformar conhecimento em legado e faturamento.",
        photos: [
            "florescer_premium/card-florescer.webp",
            "florescer_premium/modal-florescer.webp",
        ],
        link: "https://pay.kiwify.com.br/iCMI8Nr",
        description: [
            "Sejamos honestas, você já sabe que é capaz. Você já tem o conhecimento técnico, mas existe um abismo silencioso que separa a mulher que você sabe que pode ser: O abismo entre o SABER e o FAZER.",
            "O mercado está cheio de eternas estudantes. O resultado? Você estuda, mas não vê a cor do dinheiro e nem o reconhecimento que merece.",
            "Chega de apenas plantar. O Florescer Premium é uma mesa de negócios. É uma mentoria de implementação desenhada para quem cansou da teoria e precisa de orientação no campo de batalha.",
        ],
        timeline: [
            {
                icon: "florescer_premium/light.svg",
                title: "Implementação",
            },
            {
                icon: "florescer_premium/position.svg",
                title: "Posicionamento",
            },
            {
                icon: "florescer_premium/scale.svg",
                title: "Escala",
            },
        ],
        modules: [
            {
                title: "Módulo 1: O Despertar da Consciência",
                topics: [
                    "Identificação de padrões repetitivos",
                    "Ressignificação de crenças limitantes",
                    "Reprogramação mental contra autossabotagem",
                ],
            },
            {
                title: "Módulo 2: Alinhamento e Estratégia",
                topics: [
                    "Rotinas diárias para equilíbrio emocional",
                    "Estratégias de constância e disciplina",
                    "Planejamento estratégico de carreira",
                ],
            },
            {
                title: "Módulo 3: Posicionamento e Poder",
                topics: [
                    "Práticas de autovalorização e comunicação assertiva",
                    "Vendas e negociação",
                    "Construção de autoridade no nicho",
                ],
            },
        ],
        methodology: [
            {
                title: "Intimidade",
                text: "Acesso direto à mentora Leny Lima",
            },
            {
                title: "Prática Radical",
                text: "Foco total em ação, menos teoria, mais ação",
            },
            {
                title: "Personalização",
                text: "Ajustando a rota especificamente para você",
            },
        ],
        bonus: [
            {
                title: "Voz e Alcance",
                text: "Mentoria de Podcast, estrutura para lançar ou ser convidada",
            },
            {
                title: "Comunicação Magnética",
                text: "Palestra Memorável, treinamento de oratória para vender ideias",
            },
            {
                title: "Networking de Elite",
                text: "Networking com outras mulheres que estão na mesma frequência",
            },
        ],
        deliverables: [
            { text: "6 meses de Mentoria em Grupo (Encontros Semanais)" },
            { text: "6 meses de Bônus de Suporte (Total: 1 ano)" },
            { text: "1 Sessão VIP Individual com Leny Lima" },
            { text: "Acesso a aulas gravadas sobre Posicionamento, Mentalidade e Estratégia Digital" },
            { text: "Planners e exercícios de autoconhecimento para aplicar no dia a dia" },
        ],
        headline: {
            title: "O seu próximo nível exige uma nova versão de você!",
            text: "Você pode continuar tentando sozinha, batendo cabeça e duvidando de si mesma, ou entrar para um ambiente que não vai te deixar desistir. O solo está fértil, as sementes estão na sua mão. Só falta você decidir florescer!",
        },
        payment: {
            anchor_price: "5.000,00",
            currency: "R$",
            value_through: "12",
            parcel_value: "382,36",
            cash_value: "3.697,00",
        },
        details: {
            duration: "1 Ano de Acompanhamento",
            format: "Aulas Ao Vivo + Gravadas",
            encounters: "Encontros Semanais",
            guarantee: "Garantia de 7 dias",
        },
    },
    {
        id: "amanhecer",
        active: process.env["NG_APP_AMANHECER"] === "true",
        name: "Amanhecer",
        resume: "A Mentoria Amanhecer é para quem deseja romper barreiras internas, fortalecer sua confiança e construir um novo caminho com clareza e propósito.",
        photos: [
            "amanhecer/card-amanhecer.webp",
            "amanhecer/modal-amanhecer.webp",
        ],
        link: "https://pay.kiwify.com.br/jciH1R3",
        description: [
            "A Mentoria Amanhecer é para quem deseja romper barreiras internas, fortalecer sua confiança e construir um novo caminho com clareza e propósito.",
            "Aqui, o foco será no desenvolvimento das habilidades que surgem a partir do reconhecimento do seu verdadeiro potencial, explorando forças, talentos e paixões, para criar uma nova visão sobre o que é possível alcançar na vida.",
            "Esse é o momento de reconstruir a confiança e se alinhar com o que realmente motiva e energiza.",
        ],
        methodology: [
            {
                title: "Autoconhecimento profundo",
                text: "Explorando talentos, forças internas e paixões pessoais.",
            },
            {
                title: "Construção de uma nova visão",
                text: "Desenvolver uma perspectiva clara sobre suas intenções e objetivos, criando um plano realista para alcançá-los.",
            },
            {
                title: "Fortalecimento da confiança e poder pessoal",
                text: "Ajudar a solidificar a autoestima e confiança, ampliando a capacidade de se posicionar com clareza e assertividade na vida.",
            },
        ],
        timeline: [
            {
                icon: "",
                title: "Autoconhecimento profundo",
            },
            {
                icon: "",
                title: "Construção de uma nova visão",
            },
            {
                icon: "",
                title: "Fortalecimento da confiança e poder pessoal",
            },
        ],
        modules: [
            {
                title: "Autoconhecimento profundo",
                topics: [
                    "Identificação e ressignificação de padrões limitantes",
                    "Reprogramação mental para eliminar autosabotagem",
                    "Exercicios práticos para fortalecer um mindset positivo",
                ],
            },
            {
                title: "Construção de uma nova visão",
                topics: [
                    "Rotinas diárias para equilíbrio emocional e bem-estar",
                    "Técnicas de alinhamento energético e conexão interior",
                    "Estratégias para manter constância e disciplina na transformação",
                ],
            },
            {
                title: "Fortalecimento da confiança e poder pessoal",
                topics: [
                    "Práticas de autovalorização e autoafirmação",
                    "Desenvolvimento da comunicação assertiva e empoderada",
                    "Exercícios para cultivar segurança e autenticidade na vida diária",
                ],
            },
        ],
        deliverables: [
            { text: "6 meses de Mentoria em Grupo (Encontros Semanais)" },
            { text: "6 meses de Bônus de Suporte (Total: 1 ano)" },
            { text: "1 Sessão VIP Individual (1-on-1) com Leny Lima" },
            { text: "Planner Físico Florescer 2026 enviado para sua casa" },
        ],
        bonus: [
            {
                title: "Gestão do Tempo e Disciplina",
                text: "Organize sua rotina para produtividade máxima",
            },
            {
                title: "Inteligência Emocional e Networking",
                text: "Relacionamentos estratégicos e equilíbrio emocional",
            },
            {
                title: "Direcionamento para Empreendedorismo",
                text: "Dicas práticas para alavancar sua carreira ou negócio",
            },
        ],
        payment: {
            anchor_price: "R$5999,99",
            currency: "R$",
            value_through: "12",
            parcel_value: "212,22",
            cash_value: "2.052,00",
        },
        details: {
            duration: "3 meses",
            format: "Encontros Semanais",
            encounters: "6 ENCONTROS",
            guarantee: "Garantia de 7 dias",
        },
    },
]