import decodificadorSS from '../public/decodificadss-01.png'
import { Icons } from '@/components/icons'

import bikcraftSS1 from '../public/bikcraft-origamid-ss-01.png'
import bikcraftSS2 from '../public/bikcraft-origamid-ss-02.png'
import bikcraftSS3 from '../public/bikcraft-origamid-ss-03.png'
import bikcraftSS4 from '../public/bikcraft-origamid-ss-04.png'
import pokedexSS from '../public/pokedex-ss-01.png'

export const DATA = {
  name: 'Luan Barcaça',
  initials: 'LB',
  url: '#',
  location: 'São José dos Campos, SP',
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    'Novato no desenvolvimento front-end. Animado para explorar o mundo da programação e contribuir para projetos',
  about:
    'Sou um aspirante a desenvolvedor front-end entusiasta por criar interfaces web limpas, responsivas e fáceis de usar. Minhas habilidades atuais incluem HTML, CSS, JavaScript e aprendendo React, Next.js e TypeScript. Estou animado para continuar aprendendo e aplicar o que aprendi e crescer através da experiência prática em projetos reais.',
  avatarUrl: '/me.png',
  contact: {
    email: 'luan.barcaca@gmail.com',
    tel: '+5512981329526',
  },

  projects: [
    {
      title: 'Bikcraft Origamid',
      href: 'https://github.com/barcaca/bikcraft-origamid-barcaca',
      type: 'Curso Prático',
      original: 'bikcraft-origamid',
      active: true,
      description:
        'Bikcraft é um projeto desenvolvido durante o curso da Origamid que apresenta uma plataforma para exibição de bicicletas elétricas, além de fornecer informações detalhadas sobre seguro, termos e orçamento, e inclui uma página de contato.',
      technologies: [
        'Next.js',
        'Typescript',
        'TailwindCSS',
        'Shadcn UI',
        'Framer Motion',
      ],
      links: [
        {
          type: 'Website',
          href: 'bikcraft-origamid-barcaca.vercel.app',
          icon: Icons.globe,
        },
        {
          type: 'Source',
          href: 'https://github.com/barcaca/bikcraft-origamid-barcaca',
          icon: Icons.gitHub,
        },
      ],
      images: [bikcraftSS1, bikcraftSS2, bikcraftSS3, bikcraftSS4],
    },
    {
      title: 'Pokedéx',
      href: 'https://pokedex-barcaca.vercel.app',
      original: 'pokedex',
      type: 'Projeto Pessoal',
      description:
        'Este é um projeto de Pokédex que permite visualizar e pesquisar PokémonsEste é um projeto de Pokédex criado para aprender a consumir APIs, que permite visualizar e pesquisar Pokémons de forma interativa.',
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Shadcn UI'],
      links: [
        {
          type: 'Website',
          href: 'https://pokedex-barcaca.vercel.app',
          icon: Icons.globe,
        },
        {
          type: 'Source',
          href: 'https://github.com/barcaca/pokedex-barcaca',
          icon: Icons.gitHub,
        },
      ],
      images: [pokedexSS],
    },
    {
      title: 'TaskFlow',
      href: 'https://taskflow-barcaca.vercel.app',
      original: 'taskflow',
      type: 'Projeto Pessoal',
      description:
        'TaskFlow é um projeto criado para aprendizagem sobre operações CRUD, permitindo criar, deletar e editar tarefas, além de gerenciar projetos e tags de forma eficiente.',
      technologies: [
        'Next.js',
        'Typescript',
        'TailwindCSS',
        'Shadcn UI',
        'Prisma',
        'Supabase',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://taskflow-barcaca.vercel.app',
          icon: Icons.globe,
        },
        {
          type: 'Source',
          href: 'https://github.com/barcaca/taskflow-barcaca',
          icon: Icons.gitHub,
        },
      ],
      images: [''],
    },
    {
      title: 'Decodificador de Texto Alura',
      href: 'https://alura-challenger-decodificador-de-texto.vercel.app',
      original: 'decodificador-de-texto',
      type: 'Desafio',
      description:
        'Este projeto é um simples decodificador de texto que permite a criptografia e descriptografia de mensagens usando regras de substituição específicas. Foi desenvolvido com HTML, CSS e JavaScript, onde o usuário pode inserir texto, criptografá-lo, descriptografá-lo e copiar o resultado para a área de transferência.',
      technologies: ['HTML5', 'TailwindCSS', 'Javascript'],
      links: [
        {
          type: 'Website',
          href: 'https://alura-challenger-decodificador-de-texto.vercel.app',
          icon: Icons.globe,
        },
        {
          type: 'Source',
          href: 'https://github.com/barcaca/alura-challenger-decodificador-de-texto',
          icon: Icons.gitHub,
        },
      ],
      images: [decodificadorSS],
    },
  ],
} as const
