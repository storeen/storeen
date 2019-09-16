/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';

import Image from 'components/image';
import { Dropdown, DropdownGroup, DropdownItem } from 'components/dropdown';
import { TabList, Tab } from 'components/tab';
import Header from 'components/header';
import Button from 'components/button';

import { mono0, mono200 } from 'themes/colors';
import { radius800 } from 'themes/radius';

const buttonStyle = {
  border: 'none'
};

const Logo = () => (
  <>
    <div className="desktop-logo">
      <Image
        src="/static/images/logo-all-horizontal.svg"
        width="120px"
        height="100%"
      />
    </div>
    <div className="mobile-logo">
      <Image src="/static/images/logo-icon.svg" width="35px" height="100%" />
    </div>

    <style jsx>
      {`
        div {
          text-align: left;
          margin: 0 20px 40px;
        }

        .mobile-logo {
          text-align: center;
          display: none;
        }

        @media (max-width: 1124px) {
          .mobile-logo {
            display: block;
          }

          .desktop-logo {
            display: none;
          }
        }
      `}
    </style>
  </>
);

const UserInfo = ({ id, hidden }) => (
  <DropdownGroup id={id} hidden={hidden}>
    <DropdownItem href="/settings/profile">Meus dados</DropdownItem>
    <DropdownItem href="/">Sair</DropdownItem>
  </DropdownGroup>
);

const Content = ({ children, padding }) => {
  const menuRef = useRef(null);
  const menuBackgroundRef = useRef(null);
  const [visibleUserInfo, setVisibleUserInfo] = useState(false);

  const handleClickMenu = () => {
    menuRef.current.classList.toggle('visible');
    menuBackgroundRef.current.classList.toggle('nav-background');
  };

  const handleClickUserInfo = () => {
    setVisibleUserInfo(!visibleUserInfo);
  };

  return (
    <>
      <div className="container">
        <nav ref={menuRef}>
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
        </nav>
        <main>
          <Header>
            <div className="nav-button">
              <Button
                appearance="minimal"
                icon="menu"
                customStyle={buttonStyle}
                onClick={handleClickMenu}
              />
            </div>
            <Button
              appearance="minimal"
              icon="external-link"
              text="ver minha loja"
              customStyle={buttonStyle}
            />
            <Dropdown
              id="user-info"
              visible={visibleUserInfo}
              text="Minha conta"
              onClick={handleClickUserInfo}
            >
              <UserInfo id="user-info" hidden={!visibleUserInfo} />
            </Dropdown>
          </Header>
          <div className="main-container">
            <div className="main-children">{children}</div>
          </div>
        </main>
        <div ref={menuBackgroundRef} onClick={handleClickMenu} />
      </div>

      <style jsx>
        {`
          .container {
            width: 100%;
            min-height: 100%;
            display: flex;
            flex-grow: 1;
          }

          nav {
            background-color: ${mono0};
            border-right: 1px solid ${mono200};
            text-align: center;
            padding: 20px 0 10px;
            width: 180px;
            height: 100vh;
            overflow: auto;
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

          .nav-background {
            background-color: rgba(51, 51, 51, 0.3);
            height: 100%;
            width: 100%;
            position: absolute;
            transition: background-color 0.2s;
            z-index: 1;
            display: none;
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

          @media (max-width: 1124px) {
            nav {
              width: 125px;
            }

            nav :global(ul) :global(li) {
              border-radius: ${radius800};
            }

            nav :global(ul) :global(li) :global(a) {
              flex-direction: column;
            }

            nav :global(ul) :global(li) :global(a) :global(span) {
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

          @media (max-width: 746px) {
            .visible {
              transform: translate3d(0, 0, 0);
            }

            nav {
              position: absolute;
              transform: translate3d(-125px, 0, 0);
              transition: transform 0.2s;
              will-change: transform;
              z-index: 2;
            }

            .nav-button {
              display: block;
            }

            .nav-background {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
};

export default Content;
