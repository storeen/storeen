import { useState } from 'react';
import Router from 'next/router';

import Page from '../../layouts/adminContent';

import {
  Menu,
  MenuGroup,
  MenuItem,
  SubHeader,
  Button,
  Table,
  TableRow,
  TableBodyCell,
  TextTableCell,
  Icon,
  theming
} from '@storeen/components';

import useLayout from '../../hooks/layout/useLayout';

const headers = ['Nome', 'Preço', 'Estoque', 'Visibilidade'];
const items = [
  {
    name: 'Vestido Blue Denim',
    price: 99.0,
    stock: 9,
    visible: true
  },
  {
    name: 'Vestido Yellow Denim',
    price: 89.0,
    stock: 3,
    visible: false
  },
  {
    name: 'Vestido Pink Denim',
    price: 79.0,
    stock: 5,
    visible: true
  },
  {
    name: 'Vestido Red Denim',
    price: 109.0,
    stock: 15,
    visible: false
  }
];

const Filter = () => {
  const [visibleFilter, setVisibleFilter] = useState(false);

  const handleClickFilter = () => {
    setVisibleFilter(!visibleFilter);
  };

  return (
    <Menu
      id="filter"
      isVisible={visibleFilter}
      hasBorder
      appearance="minimal"
      icon="filter"
      text="Filtrar"
      onClick={handleClickFilter}
    >
      <MenuGroup id="filter" isVisible={!visibleFilter}>
        <MenuItem>todo</MenuItem>
        <MenuItem>todo</MenuItem>
      </MenuGroup>
    </Menu>
  );
};

const Products = () => {
  const handleAddProduct = () => Router.push('/products/add');

  return (
    <>
      <SubHeader title="Produtos">
        <Button onClick={handleAddProduct}>Novo produto</Button>
      </SubHeader>
      <Table
        headers={headers}
        optionsHeader={<Filter />}
        hasSearch
        ariaLabel="Produtos"
        placeholderSearchSuffix="produtos"
      >
        {items.map(item => (
          <TableRow key={item.name}>
            <TableBodyCell>
              <TextTableCell text={item.name} />
            </TableBodyCell>
            <TableBodyCell>
              <TextTableCell text={item.price} />
            </TableBodyCell>
            <TableBodyCell>
              <TextTableCell text={item.stock} />
            </TableBodyCell>
            <TableBodyCell>
              <TextTableCell>
                <Icon
                  name="eye"
                  color={
                    item.visible
                      ? theming.colors.green700
                      : theming.colors.red700
                  }
                />
              </TextTableCell>
            </TableBodyCell>
          </TableRow>
        ))}
      </Table>
    </>
  );
};

export default useLayout(Page)(Products);
