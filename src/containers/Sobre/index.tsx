import Titulo from '../../components/Título'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSection } from './styles'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo>
        Sou natural da cidade de Pindamonhangaba no interior de São Paulo
        (1988), foi aonde tive minha primeira experiência com um computador na
        casa do meu tio João (1994). Atuei como Profissional em Educação Física
        (2011/2022) e no momento vivencio a fase de transição de carreira. Estou
        Estou realizando o Curso Superior de Tecnologia em Análise e
        Desenvolvimento de Sistemas na UNISAL em Campinas (2023/2024) de forma
        presencial e de forma online o Curso para Desenvolvedor Full Stack
        Python na EBAC, Escola Britânica de Artes Criativas e Tecnologia
        (2023/2024). Durante essa trajetória estou dedicando muitas horas, todos
        os dias, estudando e aperfeiçoando os conhecimentos práticos para me
        tornar um profissional de alta qualidade e desempenho.
      </Paragrafo>
      <GitHubSection>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=dimasmmdasilva&layout=compact&langs_count=7&theme=dracula" />
      </GitHubSection>
    </section>
  )
}
export default Sobre
