import styled from 'styled-components'
import { Props } from '.'
export const P = styled.p<Props>`
  color: ${(props) => props.theme.corPrincipal}
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
`
