import Link from 'next/link'
import { Menu, Container } from 'semantic-ui-react'
import styled from 'styled-components'

const Nav = styled(Menu)`
  &&& {
    background: #409eff;
    height: 52px;
    color: #fff;
  }
`

const Logo = styled.img`
  display: inline-block;
  width: 128px;
  height: 52px;
  padding: 10px 0;
`

const NavItem = styled(Menu.Item)`
  &&& {
    a {
      color: #fff;
    }
  }
`

export default () => (
  <Nav fluid borderless>
    <Container>
      <NavItem>
        <Link href="/">
          <a>
            <Logo src="static/logo-emlakim.svg" alt="Emlakım Logo" />
          </a>
        </Link>
      </NavItem>
      <Menu.Menu position="right">
        <NavItem>
          <Link href="/login">Giriş Yap</Link>
        </NavItem>
        <NavItem>
          <Link href="/register">Hesap Aç</Link>
        </NavItem>
      </Menu.Menu>
    </Container>
  </Nav>
)
