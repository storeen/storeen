import Page from '../../../layouts/adminSettingsContent/account';

import {
  Container,
  Stack,
  Input,
  Disclosure,
  Footer,
  Button
} from '@storeen/components';

import useAccountProfile from '../../../containers/useAccountProfile';

import useLayout from '../../../hooks/layout/useLayout';

const AccountSettings = () => {
  const {
    state: { personal, password },
    actions: { onChange }
  } = useAccountProfile();

  return (
    <>
      <Container
        title="Dados pessoais"
        subTitle="Iremos usar essas informações para entrar em contato com você."
      >
        <Stack>
          <Input
            labelText="Nome"
            id="name"
            name="personal.name"
            value={personal.name}
            onChange={onChange}
          />
          <Input
            type="email"
            labelText="Email"
            id="email"
            name="personal.email"
            value={personal.email}
            onChange={onChange}
          />
          <Input
            type="tel"
            labelText="Telefone"
            id="phone"
            name="personal.phone"
            value={personal.phone}
            mask="phone"
            onChange={onChange}
          />
        </Stack>
      </Container>
      <Container
        title="Senha"
        subTitle="Caso seja necessário a alteração da sua senha, clique no botão abaixo."
      >
        <Disclosure as={<Button appearance="minimal">Alterar senha</Button>}>
          <Stack>
            <Input
              type="password"
              labelText="Senha atual"
              id="actual-password"
              name="password.actualPassword"
              value={password.actualPassword}
              onChange={onChange}
            />
            <Input
              type="password"
              labelText="Nova senha"
              id="new-password"
              name="password.newPassword"
              value={password.newPassword}
              onChange={onChange}
            />
            <Input
              type="password"
              labelText="Confirmação da nova senha"
              id="new-confirm-password"
              name="password.newConfirmPassword"
              value={password.newConfirmPassword}
              onChange={onChange}
            />
          </Stack>
        </Disclosure>
      </Container>
      <Footer>
        <Button>Salvar</Button>
      </Footer>
    </>
  );
};

export default useLayout(Page)(AccountSettings);
