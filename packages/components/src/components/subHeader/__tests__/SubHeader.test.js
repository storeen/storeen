import { render, fireEvent } from '@testing-library/react';

import { SubHeader } from '../index';

describe('SubHeader', () => {
  test('should render', () => {
    const { getByRole } = render(<SubHeader />);

    expect(getByRole('heading')).toBeInTheDocument();
  });

  test('should have children', () => {
    const content = 'im content';
    const { getByText } = render(<SubHeader>{content}</SubHeader>);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should have title', () => {
    const { getByRole } = render(<SubHeader title="im title" />);

    expect(getByRole('heading')).toHaveTextContent('im title');
  });

  test('should have sub title', () => {
    const { getByText } = render(<SubHeader subTitle="im sub title" />);

    expect(getByText('im sub title')).toBeInTheDocument();
  });

  test('should have click back button', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <SubHeader title="im title" hasBack onClick={onClick} />
    );

    const button = getByRole('button');

    expect(button).toHaveAttribute('aria-label', 'chevron-left');
    expect(getByRole('img')).toHaveAttribute('aria-label', 'chevron-left');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
