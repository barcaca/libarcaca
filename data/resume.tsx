import { Icons } from '@/components/icons'

import bikcraftSS1 from '../public/bikcraft-origamid-ss-01.png'
import bikcraftSS2 from '../public/bikcraft-origamid-ss-02.png'
import bikcraftSS3 from '../public/bikcraft-origamid-ss-03.png'
import bikcraftSS4 from '../public/bikcraft-origamid-ss-04.png'
import bikcraftThumbnail from '../public/bikcraft-origamid-thumbnail.png'
import decodificadorSS1 from '../public/decodificador-ss-01.png'
import decodificadorSS2 from '../public/decodificador-ss-02.png'
import decodificadorThumbnail from '../public/decodificador-thumbnail.png'
import pokedexSS1 from '../public/pokedex-ss-01.png'
import pokedexSS2 from '../public/pokedex-ss-02.png'
import pokedexThumbnail from '../public/pokedex-thumbnail.png'
import recipeonSS1 from '../public/recipeon-ss-01.png'
import recipeonSS2 from '../public/recipeon-ss-02.png'
import recipeonSS3 from '../public/recipeon-ss-03.png'
import recipeonThumbnail from '../public/recipeon-thumbnail.png'
import taskflowSS1 from '../public/taskflow-ss-01.png'
import taskflowSS2 from '../public/taskflow-ss-02.png'
import taskflowThumbnail from '../public/taskflow-thumbnail.png'

export const DATA = {
  name: 'Luan Barcaça',
  initials: 'LB',
  url: '#',
  location: 'São José dos Campos, SP',
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
      title: 'Recipeon',
      href: 'https://github.com/barcaca/recipeon-next',
      type: 'Curso Prático',
      original: 'recipeon-next',
      description:
        'Recipeon é um projeto desenvolvido como parte de um desafio do OracleOne, inicialmente inspirado no conceito do AluraGeek. Trata-se de uma plataforma dedicada a receitas, permitindo visualização e criação de receitas. A aplicação apresenta interface onde os usuários podem explorar receitas detalhadas, ingredientes e modos de preparo, além de contar com funcionalidades para filtrar e buscar pratos pelo nome. O projeto foi concebido com um design exclusivo no Figma e implementado utilizando tecnologias de ponta, como Next.js, ShadCN UI, Tailwind CSS, e TypeScript. No back-end, foi utilizado o JSON Server para simular uma API funcional.',
      technologies: [
        { name: 'Next.js', icon: Icons.nextjs },
        { name: 'Typescript', icon: Icons.typescript },
        { name: 'TailwindCSS', icon: Icons.tailwindcss },
        { name: 'Shadcn UI', icon: Icons.shadcn },
      ],
      links: [
        {
          type: 'Website',
          href: 'https://recipeon-next.vercel.app',
          icon: Icons.globe,
        },
        {
          type: 'Source',
          href: 'https://github.com/barcaca/recipeon-next',
          icon: Icons.gitHub,
        },
      ],
      images: [recipeonThumbnail, recipeonSS1, recipeonSS2, recipeonSS3],
    },
    {
      title: 'Bikcraft Origamid',
      href: 'https://github.com/barcaca/bikcraft-origamid-barcaca',
      type: 'Curso Prático',
      original: 'bikcraft-origamid',
      description:
        'Bikcraft é um projeto desenvolvido durante o curso da Origamid, oferecendo uma plataforma completa para a exibição de bicicletas elétricas. A aplicação apresenta informações detalhadas sobre os modelos, além de seções dedicadas a seguro, termos e orçamento, tudo isso com uma interface moderna e fluida. O projeto também inclui uma página de contato totalmente funcional. No front-end, foram utilizadas tecnologias de ponta como Next.js, ShadCN UI, Tailwind CSS, TypeScript e animações elegantes com Framer Motion, proporcionando uma experiência visual atraente e responsiva.',
      technologies: [
        { name: 'Next.js', icon: Icons.nextjs },
        { name: 'Typescript', icon: Icons.typescript },
        { name: 'TailwindCSS', icon: Icons.tailwindcss },
        { name: 'Shadcn UI', icon: Icons.shadcn },
        { name: 'Framer Motion', icon: Icons.framermotion },
      ],
      links: [
        {
          type: 'Website',
          href: 'https://bikcraft-origamid-barcaca.vercel.app',
          icon: Icons.globe,
        },
        {
          type: 'Source',
          href: 'https://github.com/barcaca/bikcraft-origamid-barcaca',
          icon: Icons.gitHub,
        },
      ],
      images: [
        bikcraftThumbnail,
        bikcraftSS1,
        bikcraftSS2,
        bikcraftSS3,
        bikcraftSS4,
      ],
    },
    {
      title: 'Pokedéx',
      href: 'https://pokedex-barcaca.vercel.app',
      original: 'pokedex',
      type: 'Projeto Pessoal',
      description:
        'Este projeto de Pokédex foi criado para fins de aprendizado sobre consumo de APIs, oferecendo uma experiência interativa para visualizar e pesquisar Pokémons. A interface intuitiva permite explorar informações detalhadas sobre cada Pokémon de forma dinâmica e rápida. O front-end é desenvolvido com Next.js, ShadCN UI, Tailwind CSS e TypeScript, garantindo performance e responsividade. Os dados são fornecidos pela PokeAPI, permitindo acesso a uma vasta gama de informações sobre os Pokémons.',
      technologies: [
        { name: 'Next.js', icon: Icons.nextjs },
        { name: 'Typescript', icon: Icons.typescript },
        { name: 'TailwindCSS', icon: Icons.tailwindcss },
        { name: 'Shadcn UI', icon: Icons.shadcn },
      ],
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
      images: [pokedexThumbnail, pokedexSS1, pokedexSS2],
    },
    {
      title: 'TaskFlow',
      href: 'https://taskflow-barcaca.vercel.app',
      original: 'taskflow',
      type: 'Projeto Pessoal',
      description:
        'TaskFlow é uma solução completa para gestão de tarefas e projetos, desenvolvida com tecnologias modernas. Com ele, você pode criar, editar e excluir tarefas de forma prática, além de gerenciar projetos e organizar suas atividades usando tags personalizadas. O front-end é construído com Next.js, ShadCN UI, Tailwind CSS e TypeScript, garantindo uma interface dinâmica e responsiva. No back-end, utilizamos Prisma e Supabase para proporcionar um gerenciamento de dados eficiente e seguro.',
      technologies: [
        { name: 'Next.js', icon: Icons.nextjs },
        { name: 'Typescript', icon: Icons.typescript },
        { name: 'TailwindCSS', icon: Icons.tailwindcss },
        { name: 'Shadcn UI', icon: Icons.shadcn },
        { name: 'Prisma', icon: Icons.prisma },
        { name: 'Supabase', icon: Icons.supabase },
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
      images: [taskflowThumbnail, taskflowSS1, taskflowSS2],
    },
    {
      title: 'Decodificador de Texto Alura',
      href: 'https://alura-challenger-decodificador-de-texto.vercel.app',
      original: 'decodificador-de-texto',
      type: 'Desafio',
      description:
        'Este projeto é um simples decodificador de texto que permite a criptografia e descriptografia de mensagens usando regras de substituição específicas. Foi desenvolvido com HTML, CSS e JavaScript.',
      technologies: [
        { name: 'HTML5', icon: Icons.html },
        { name: 'TailwindCSS', icon: Icons.tailwindcss },
        { name: 'Javascript', icon: Icons.javascript },
      ],
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
      images: [decodificadorThumbnail, decodificadorSS1, decodificadorSS2],
    },
  ],
}
