import Titulo from '../../components/Título'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSection } from './styles'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="secundario">
        Sou natural da cidade de Pindamonhangaba (1988) no interior de São
        Paulo, onde tive minha primeira experiência com um computador na casa do
        meu tio João em 1994. Atuei como Profissional em Educação Física de 2011
        até 2022 e no dias atuais, em transição de carreira, estou realizando o
        Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas na
        UNISAL em Campinas de forma presencial e realizo o Curso para
        Desenvolvedor Full Stack Python na EBAC, Escola Britânica de Artes
        Criativas e Tecnologia. Durante essa trajetória passo muitas horas
        estudando e aperfeiçoando os conhecimentos em prática para me tornar um
        profissional de alta qualificação e desempenho.
      </Paragrafo>
      <GitHubSection>
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=dimasmmdasilva&theme=dracula" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=dimasmmdasilva&layout=compact&langs_count=7&theme=dracula" />
      </GitHubSection>
    </section>
  )
}
export default Sobre
