import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Título'
import { BotaoTema, Descricao, SidebarContainer } from './styles'
type Props = {
  trocaTema: () => void
}
const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo>Dimas Marcondes Moreira da Silva</Titulo>
      <Paragrafo tipo="secundario"> </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full Stack Python | Software Engineer
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Mudar o Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)
export default Sidebar
