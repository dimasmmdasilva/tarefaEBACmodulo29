import { SidebarContainer, AvatarImage } from './styles'
import Titulo from '../../components/Título'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <AvatarImage src="https://github.com/dimasmmdasilva.png" alt="Avatar" />
      <Titulo>Dimas Marcondes Moreira da Silva</Titulo>
    </SidebarContainer>
  )
}

export default Sidebar
