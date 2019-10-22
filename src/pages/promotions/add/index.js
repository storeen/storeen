import Router from 'next/router';

import Page from 'layouts/adminContent';

import SubHeader from 'components/subHeader';
import Container from 'components/container';
import Input from 'components/input';
import Select from 'components/select';
import Radio from 'components/radio';
import Checkbox from 'components/checkbox';
import Collapse from 'components/collapse';
import Footer from 'components/footer';
import Button from 'components/button';

import useLayout from 'hooks/layout/useLayout';

const promotionTypeOptions = [
  {
    value: 'valor fixo'
  },
  {
    value: 'porcentagem'
  },
  {
    value: 'frete grátis'
  },
  {
    value: 'compre x leve y'
  }
];

const AddPromotion = () => {
  const handleBack = () => Router.push('/promotions');

  return (
    <>
      <SubHeader title="Nova Promoção" hasBack onClick={handleBack} />
      <Container title="Geral" isForm>
        <Input
          labelText="Título da promoção"
          id="promotion-title"
          name="promotion-title"
        />
        <Select
          labelText="Tipo"
          id="promotion-type"
          name="promotion-type"
          options={promotionTypeOptions}
        />
        <Input
          labelText="Valor do desconto"
          id="discount-value"
          name="discount-value"
          mask="money"
        />
        <Checkbox
          id="promotion-active"
          name="promotion-active"
          text="Ativar promoção?"
        />
      </Container>
      <Container title="Aplicável" isForm>
        <Radio id="all" name="applicable" value="all" text="Todo o pedido" />
        <Radio
          id="categorie-specific"
          name="applicable"
          value="ategorie-specific"
          text="Categorias específicas"
        />
        <Radio
          id="product-specific"
          name="applicable"
          value="product-specific"
          text="Produtos específicas"
        />
      </Container>
      <Container title="Requisitos mínimos" isForm>
        <Radio
          id="total-value-minimum"
          name="minimum-requirements"
          value="total-value-minimum"
          text="Valor total do pedido mínimo"
        />
        <Radio
          id="quantity-itens-minimum"
          name="minimum-requirements"
          value="quantity-itens-minimum"
          text="Quantidade de itens do pedido mínimo"
        />
      </Container>
      <Container title="Código promocional" isForm>
        <Collapse
          content={
            <Checkbox
              id="code"
              name="code"
              text="Habilitar código promocional?"
            />
          }
          action="onChange"
        >
          <Input
            labelText="Código da promoção"
            id="promotional-code"
            name="promotional-code"
          />
          <Checkbox
            id="promotional-code-unique"
            name="promotional-code-unique"
            text="Cupom de uso único por CPF?"
          />
        </Collapse>
      </Container>
      <Container title="Agendar" isForm>
        <Collapse
          content={
            <Checkbox id="schedule" name="schedule" text="Agendar promoção?" />
          }
          action="onChange"
        >
          todo
        </Collapse>
      </Container>
      <Footer>
        <Button text="Salvar" />
      </Footer>
    </>
  );
};

export default useLayout(Page)(AddPromotion);