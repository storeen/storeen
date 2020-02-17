import { render } from '@testing-library/react';

import Alert from '../index';

import {
  primary700,
  mono200,
  negative700,
  positive700
} from 'utils/theme/colors';

const content = 'im content';

describe('Alert', () => {
  test('should render', () => {
    const { container } = render(<Alert />);

    expect(container).toBeInTheDocument();
  });

  test('should have children', () => {
    const { getByText } = render(<Alert>{content}</Alert>);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should have title and description', () => {
    const { getByRole, getByText } = render(
      <Alert title="im title" description="im description" />
    );

    const title = getByRole('heading');
    const description = getByText('im description');

    expect(title).toHaveTextContent('im title');
    expect(description).toBeInTheDocument();
  });

  test('should have default theme', () => {
    const { getByText } = render(<Alert appearance="default">{content}</Alert>);

    const text = getByText(content);

    expect(text).toHaveStyle(`border-left: 4px solid ${primary700}`);
  });

  test('should have minimal theme', () => {
    const { getByText } = render(<Alert appearance="minimal">{content}</Alert>);

    const text = getByText(content);

    expect(text).toHaveStyle(`border-left: 4px solid ${mono200}`);
  });

  test('should have negative theme', () => {
    const { getByText } = render(
      <Alert appearance="negative">{content}</Alert>
    );

    const text = getByText(content);

    expect(text).toHaveStyle(`border-left: 4px solid ${negative700}`);
  });

  test('should have positive theme', () => {
    const { getByText } = render(<Alert>{content}</Alert>);

    const text = getByText(content);

    expect(text).toHaveStyle(`border-left: 4px solid ${positive700}`);
  });
});
