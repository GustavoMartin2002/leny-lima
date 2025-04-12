import { Product } from "../models/product.model";

export const products: Product[] = [
    {
        id: 'amanhecer',
        name: 'Amanhecer',
        video: 'amanhecer.mp4',
        link: 'https://pay.kiwify.com.br/jciH1R3',
        text1: 'Você sente que padrões repetitivos e crenças limitantes estão te impedindo de avançar? Está pronta(o) para uma transformação profunda e consistente? A Mentoria Amanhecer é para quem deseja romper barreiras internas, fortalecer sua confiança e construir um novo caminho com clareza e propósito.',
        module: [
            {
                photo: 'module1.webp',
                topic1: 'Identificação e ressignificação de padrões limitantes',
                topic2: 'Reprogramação mental para eliminar autosabotagem',
                topic3: 'Exercicios práticos para fortalecer um mindset positivo'
            },
            {
                photo: 'module2.webp',
                topic1: 'Rotinas diárias para equilíbrio emocional e bem-estar',
                topic2: 'Técnicas de alinhamento energético e conexão interior',
                topic3: 'Estratégias para manter constância e disciplina na transformação'
            },
            {
                photo: 'module3.webp',
                topic1: 'Práticas de autovalorização e autoafirmação',
                topic2: 'Desenvolvimento da comunicação assertiva e empoderada',
                topic3: 'Exercícios para cultivar segurança e autenticidade na vida diária'
            }
        ],
        bonus: [
            {
                photo: 'bonus1.webp',
                title: 'Gestão do Tempo e Disciplina',
                text: 'Organize sua rotina para produtividade máxima'
            },
            {
                photo: 'bonus2.webp',
                title: 'Inteligência Emocional e Networking',
                text: 'Relacionamentos estratégicos e equilíbrio emocional'
            },
            {
                photo: 'bonus3.webp',
                title: 'Direcionamento para Empreendedorismo',
                text: 'Dicas práticas para alavancar sua carreira ou negócio'
            }
        ],
        podCast: {
            img: 'card-podcast.webp',
            text1: 'DE R$ 1507,97',
            text2: 'POR: R$ 00,00'
        },
        text2: 
        'Aqui, o foco será no desenvolvimento das habilidades que surgem a partir do reconhecimento do seu verdadeiro potencial, explorando forças, talentos e paixões, para criar uma nova visão sobre o que é possível alcançar na vida. Esse é o momento de reconstruir a confiança e se alinhar com o que realmente motiva e energiza.',
        timeline: [
            {
                title:'Autoconhecimento profundo',
                text: ' Explorando talentos, forças internas e paixões pessoais.'
            },
            {
                title: 'Construção de uma nova visão',
                text: 'Desenvolver uma perspectiva clara sobre suas intenções e objetivos, criando um plano realista para alcançá-los.'
            },
            {
                title: 'Fortalecimento da confiança e poder pessoal',
                text: 'Ajudar a solidificar a autoestima e confiança, ampliando a capacidade de se posicionar com clareza e assertividade na vida.'
            }
        ],
        payment: {
            value_through: 'R$5999,99',
            parcel_value: '205,20',
            cash_value: 'ou R$ 2052,00 à vista',
            encounters: '(6 ENCONTROS)'
        }
    },

    // {
    //     id: 'resplandecer_florescer', 
    //     name: 'Resplancer e Florescer', 
      
    // },
]