import { useState } from 'react';

import {
  Image,
  Menu,
  MenuGroup,
  MenuItem,
  SideSheet,
  TabList,
  Tab,
  Header,
  Button,
  theming
} from '@storeen/components';

import { borderRadius8 } from '@storeen/system';

const Logo = () => (
  <>
    <Image
      src={require('../../public/static/images/logo-all-horizontal.svg')}
      alt="Storeen logo com nome horizontal"
      width="120px"
      height="auto"
      marginBottom={9}
      marginX={4}
      sx={{
        textAlign: 'left',
        display: ['none', 'none', 'none', 'block']
      }}
    />
    <Image
      src={require('../../public/static/images/logo-icon.svg')}
      alt="Storeen logo icone"
      width="34px"
      height="34px"
      marginBottom={9}
      marginX="auto"
      sx={{
        display: ['block', 'block', 'block', 'none']
      }}
    />
  </>
);

const Nav = () => (
  <>
    <div>
      <Logo />
      <TabList>
        <Tab text="Início" icon="home" href="/home" />
        <Tab text="Relatórios" icon="bar-chart" href="/reports" />
        <Tab text="Pedidos" icon="clipboard" href="/orders" />
        <Tab text="Produtos" icon="box" href="/products" />
        <Tab text="Promoções" icon="dollar-sign" href="/promotions" />
        <Tab text="Categorias" icon="tag" href="/categories" />
      </TabList>
    </div>
    <TabList>
      <Tab text="Configurações" icon="settings" href="/settings" />
    </TabList>
  </>
);

const UserInfo = () => {
  const [visibleUserInfo, setVisibleUserInfo] = useState(false);

  const handleClickUserInfo = () => {
    setVisibleUserInfo(!visibleUserInfo);
  };

  return (
    <Menu
      id="user-info"
      isVisible={visibleUserInfo}
      text="Minha conta"
      onClick={handleClickUserInfo}
    >
      <MenuGroup id="user-info" isVisible={!visibleUserInfo}>
        <MenuItem href="/account">Meus dados</MenuItem>
        <MenuItem href="/">Sair</MenuItem>
      </MenuGroup>
    </Menu>
  );
};

const Content = ({ children, padding }) => {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const handleClickMenu = () => {
    setVisibleSidebar(!visibleSidebar);
  };

  return (
    <>
      <div className="container">
        <nav className="side-sheet">
          <Nav />
        </nav>
        <main>
          <Header>
            <div className="nav-button">
              <Button
                appearance="minimal"
                icon="menu"
                hasBorder={false}
                onClick={handleClickMenu}
              />
            </div>
            <Button appearance="minimal" icon="external-link" hasBorder={false}>
              ver minha loja
            </Button>
            <UserInfo />
          </Header>
          <div className="main-container">
            <div className="main-children">{children}</div>
          </div>
        </main>
        <SideSheet
          isVisible={visibleSidebar}
          width="180px"
          onClose={handleClickMenu}
        >
          <Nav />
        </SideSheet>
      </div>

      <style jsx>
        {`
          .container {
            width: 100%;
            min-height: 100%;
          }

          nav {
            background-color: ${theming.colors.gray0};
            border-right: 1px solid ${theming.colors.gray200};
            text-align: center;
            padding: 20px 0 10px;
            width: 180px;
            height: 100vh;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
            position: sticky;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-shrink: 0;
          }

          main {
            flex: 1;
          }

          .nav-button {
            display: none;
          }

          .main-container {
            padding: ${padding};
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }

          .main-children {
            margin: 20px auto 0;
            width: 800px;
          }

          @media (max-width: 64em) {
            nav {
              width: 125px;
            }

            :global(.side-sheet) :global(ul) :global(li) {
              border-radius: ${borderRadius8};
              margin: 10px;
            }

            :global(.side-sheet) :global(ul) :global(li) :global(a) {
              flex-direction: column;
            }

            :global(.side-sheet)
              :global(ul)
              :global(li)
              :global(a)
              :global(span) {
              margin: 10px 0 0 0 !important;
            }

            .main-container {
              padding: 40px 50px;
            }

            .main-children {
              width: 100%;
              margin: 0 auto;
            }
          }

          @media (max-width: 40em) {
            nav {
              display: none;
            }

            .nav-button {
              display: block;
            }

            .main-container {
              padding: 40px 30px;
            }
          }

          @media (min-width: 40em) {
            .container {
              display: flex;
              flex-grow: 1;
            }
          }
        `}
      </style>
    </>
  );
};

export default Content;
