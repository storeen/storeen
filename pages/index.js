import Container from '../components/container';
import SubHeader from '../components/subHeader';
import Button from '../components/button';
import Input from '../components/input';
import { Heading, Paragraph } from '../components/typography';

const Home = () => (
  <>
    <div>
      <SubHeader title="Produtos">
        <Button text="Novo produto" margin="0 10px 0 0" />
        <Button text="Filtrar" icon="filter" />
      </SubHeader>
      <Container title="Geral">
        <Input labelText="Título do produto" id="title" name="title" />
        <Input id="product" name="product" placeholder="Camiseta Longa" />
        <Input
          id="search"
          name="search"
          placeholder="Pesquisar"
          icon="search"
          marginBottom={0}
        />
      </Container>
    </div>
    <div>
      <SubHeader title="Promoções" hasBack>
        <Button text="Novo produto" />
      </SubHeader>
      <Container title="Geral">
        <Heading is="h3" text="R$ 90,60 de desconto" margin="0 0 20px" />
        <Paragraph text="Não expira" />
        <Paragraph text="Não tem valor de pedido" />
      </Container>
    </div>
    <style jsx>
      {`
        div {
          width: 800px;
          margin: 50px auto;
        }
      `}
    </style>
  </>
);

export default Home;
