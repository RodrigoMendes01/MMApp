import { Container } from "./styles"

export default function Header () {
  return (
    <Container>
      <div id="company_brand">
        LOGO
      </div>

      <div id="search-bar">
        <div>
          <input type="text" />
          <img src="" alt="" />
        </div>
      </div>

      <div id="profile-car">
        <div>USER</div>
        <div>CARRINHO</div>
      </div>
    </Container>
  )
}