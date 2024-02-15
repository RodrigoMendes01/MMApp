import { Container } from "./styles"
import brand from '../../assets/svg/carrinho.png';
import lupa from '../../assets/svg/lupa.svg';
import user from '../../assets/svg/user-icon.svg'
import bag from '../../assets/svg/saco-de-papel.svg'

export default function Header () {
  return (
    <Container>
      <div id="company-brand">
        <img src={brand} alt="Carrinho de compras"/>
      </div>

      <div id="search-bar">
          <input type="text" placeholder="Pesquisa..."/>
          <img src={lupa} alt="Lupa de Pesquisa" />
      </div>

      <div id="profile-car">
        <div><a href="/login"><img src={bag} alt="" /></a></div>
        <div><a href="/products"><img src={user} alt=""/></a></div>
      </div>
    </Container>
  )
}