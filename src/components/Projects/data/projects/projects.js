import cenaestelarImg from '../../../../assets/images/projects/cenaestelar/cenaestelar.png';
import devorumImg from '../../../../assets/images/projects/devorum/devorum.png';
export const projects = [
  {
    media: devorumImg,
    name: 'Devorum',
    type: "Projeto Pessoal",
    link: 'https://devorum.vercel.app/',
    description: `Uma plataforma de perguntas e respostas para atender às necessidades de
    quem precisa. A plataforma permite que façam perguntas, obtenham ajuda
    e interajam em um ambiente de aprendizado colaborativo.`,
  },
  {
    media: cenaestelarImg,
    name: 'Cena Estelar',
    type: "Projeto Pessoal",
    link: 'https://cenaestelar.netlify.app/',
    description: `Um projeto em desenvolvimento de filmes que assisti com meus
     amigos. Junto aos títulos, adicionamos nossas opiniões, média de notas e disponibilzamos 
     uma seção de filmes que pretendemos assistir.`,
  },
  {
    media: null,
    name: 'Confectus',
    type: "Projeto Pessoal",
    link: 'https://www.npmjs.com/package/confectus',
    description: `Sua solução de linha de comando para configuração de ambientes de desenvolvimento de forma rápida e fácil.
    Especialmente projetado para simplificar o processo em projetos backend de JavaScript e TypeScript.`,
  },
  {
    media: null,
    name: 'Em breve',
    link: null,
    description: 'Estou trabalhando em um produto ainda melhor!',
  },
];
