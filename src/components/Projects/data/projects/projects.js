import devorumImg from '../../../../assets/images/projects/devorum/devorum.png';
import cenaestelarImg from '../../../../assets/images/projects/cenaestelar/cenaestelar.png';
import skycastImg from '../../../../assets/images/projects/skycast/skycast.png';

export const projects = [
  {
    media: devorumImg,
    name: 'Devorum',
    link: 'https://devorum.vercel.app/',
    description: `Uma plataforma de perguntas e respostas para atender às necessidades de
    quem precisa. A plataforma permite que façam perguntas, obtenham ajuda
    e interajam em um ambiente de aprendizado colaborativo.`,
  },
  {
    media: cenaestelarImg,
    name: 'Cena Estelar',
    link: 'https://cenaestelar.netlify.app/',
    description: `Um projeto em desenvolvimento de filmes que assisti com meus
     amigos. Junto aos títulos, adicionamos nossas opiniões, média de notas e disponibilzamos 
     uma seção de filmes que pretendemos assistir.`,
  },
  {
    media: skycastImg,
    name: 'SkyCast',
    link: 'https://luzin7.github.io/skycast/',
    description: `Uma aplicação web para visualização de informações climáticas em tempo real. `,
  },
  {
    media: null,
    name: 'Confectus',
    link: 'https://www.npmjs.com/package/confectus',
    description: `Sua solução de linha de comando para configuração de ambientes de desenvolvimento de forma rápida e fácil.
    Especialmente projetado para simplificar o processo em projetos backend de JavaScript e TypeScript.
    Simplifique sua vida de desenvolvedor e concentre-se no que realmente importa: criar código incrível!`,
  },
  {
    media: null,
    name: 'Em breve',
    link: null,
    description: 'Estou trabalhando em um produto ainda melhor!',
  },
];
