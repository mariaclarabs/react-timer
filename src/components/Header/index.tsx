import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

import logoImg from '../../assets/logo.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
