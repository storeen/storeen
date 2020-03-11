import { useState } from 'react';

import Page from '../../../layouts/adminSettingsContent/store';

import Container from '@storeen/components/src/components/container';
import Badge from '@storeen/components/src/components/badge';
import Dialog from '@storeen/components/src/components/dialog';
import { ImageDescription } from '@storeen/components/src/components/image';
import Disclosure from '@storeen/components/src/components/disclosure';
import { Paragraph } from '@storeen/components/src/components/typography';
import Input from '@storeen/components/src/components/input';
import Switch from '@storeen/components/src/components/switch';
import Footer from '@storeen/components/src/components/footer';
import Button from '@storeen/components/src/components/button';

import useSettingsPayments from '../../../containers/useSettingsPayments';

import useLayout from '@storeen/system/src/hooks/layout/useLayout';

const descriptionStyle = {
  margin: '0 0 20px'
};

const ContainerPayment = ({ children, disclosure, onClick }) => (
  <>
    <Container padding="15px" margin="0 0 20px" hasBoxShadow={false} hasBorder>
      <div>{children}</div>
      {disclosure}
      <Badge text="todo" onClick={onClick} />
    </Container>

    <style jsx>
      {`
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}
    </style>
  </>
);

const PaymentsSettings = () => {
  const [visibleDialog, setVisibleDialog] = useState(false);
  const {
    state: { mercadoPago, wirecard, pagSeguro, paypal },
    actions: { onChange }
  } = useSettingsPayments();

  const handleClickDialog = () => {
    setVisibleDialog(!visibleDialog);
  };

  return (
    <>
      <Container
        title="Meios de pagamento"
        subTitle="Selecione um meio de pagamento para receber os pagamentos."
      >
        <ContainerPayment
          disclosure={
            <Disclosure isOpen={mercadoPago.active}>
              <Paragraph
                text="Informe o endereço de e-mail que você usou para criar sua conta do Mercado Pago. Mais informações sobre como conectar o Mercado Pago podem ser encontradas aqui."
                color="muted"
                customStyle={descriptionStyle}
              />
              <Input
                type="email"
                labelText="Email"
                id="mercado-pago-email"
                name="mercadoPago.email"
                value={mercadoPago.email}
                onChange={onChange}
              />
            </Disclosure>
          }
          onClick={handleClickDialog}
        >
          <ImageDescription
            src={require('../../../public/static/images/payments/mercadopago.svg')}
            alt="Mercado Pago logo"
            description="Mercado Pago"
            width="32px"
            height="32px"
          />
          <Switch
            id="mercado-pago"
            name="mercadoPago.active"
            checked={mercadoPago.active}
            onChange={onChange}
          />
        </ContainerPayment>
        <ContainerPayment
          disclosure={
            <Disclosure isOpen={wirecard.active}>
              <Paragraph
                text="Informe o endereço de e-mail que você usou para criar sua conta da Wirecard. Mais informações sobre como conectar o Wirecard podem ser encontradas aqui."
                color="muted"
                customStyle={descriptionStyle}
              />
              <Input
                type="email"
                labelText="Email"
                id="wirecard-email"
                name="wirecard.email"
                value={wirecard.email}
                onChange={onChange}
              />
            </Disclosure>
          }
          onClick={handleClickDialog}
        >
          <ImageDescription
            src={require('../../../public/static/images/payments/wirecard.svg')}
            alt="Wirecard logo"
            description="Wirecard"
            width="32px"
            height="32px"
          />
          <Switch
            id="wirecard"
            name="wirecard.active"
            checked={wirecard.active}
            onChange={onChange}
          />
        </ContainerPayment>
        <ContainerPayment
          disclosure={
            <Disclosure isOpen={pagSeguro.active}>
              <Paragraph
                text="Informe o endereço de e-mail que você usou para criar sua conta da PagSeguro. Mais informações sobre como conectar o PagSeguro podem ser encontradas aqui."
                color="muted"
                customStyle={descriptionStyle}
              />
              <Input
                type="email"
                labelText="Email"
                id="pag-seguro-email"
                name="pagSeguro.email"
                value={pagSeguro.email}
                onChange={onChange}
              />
            </Disclosure>
          }
          onClick={handleClickDialog}
        >
          <ImageDescription
            src={require('../../../public/static/images/payments/pagseguro.svg')}
            alt="PagSeguro logo"
            description="PagSeguro"
            width="32px"
            height="32px"
          />
          <Switch
            id="pag-seguro"
            name="pagSeguro.active"
            checked={pagSeguro.active}
            onChange={onChange}
          />
        </ContainerPayment>
        <ContainerPayment
          disclosure={
            <Disclosure isOpen={paypal.active}>
              <Paragraph
                text="Informe o endereço de e-mail que você usou para criar sua conta da PayPal. Mais informações sobre como conectar o PayPal podem ser encontradas aqui."
                color="muted"
                customStyle={descriptionStyle}
              />
              <Input
                type="email"
                labelText="Email"
                id="paypal-email"
                name="paypal.email"
                value={paypal.email}
                onChange={onChange}
              />
            </Disclosure>
          }
          onClick={handleClickDialog}
        >
          <ImageDescription
            src={require('../../../public/static/images/payments/paypal.svg')}
            alt="PayPal logo"
            description="PayPal"
            width="32px"
            height="32px"
          />
          <Switch
            id="paypal"
            name="paypal.active"
            checked={paypal.active}
            onChange={onChange}
          />
        </ContainerPayment>
      </Container>
      <Footer>
        <Button text="Salvar" />
      </Footer>
      <Dialog visible={visibleDialog} onClose={handleClickDialog}>
        todo
      </Dialog>
    </>
  );
};

export default useLayout(Page)(PaymentsSettings);