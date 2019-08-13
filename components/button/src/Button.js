import Icon from 'components/icon';
import { Text } from 'components/typography';

import useTheme from 'themes/useTheme';

const defaultStyle = {
  width: 'auto'
};

const Button = ({
  children,
  appearance = 'default',
  type = 'button',
  text = '',
  icon = '',
  customStyle = {},
  disabled = false,
  onClick = null,
  ...props
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <button
        type={type}
        disabled={disabled}
        aria-disabled={disabled}
        style={{ ...defaultStyle, ...customStyle }}
        onClick={onClick}
        {...props}
      >
        {children ? (
          <>{children}</>
        ) : (
          <>
            {icon && <Icon name={icon} size={17} color={theme.color} />}
            {text && (
              <Text text={text} customStyle={{ margin: icon && '0 0 0 5px' }} />
            )}
          </>
        )}
      </button>

      <style jsx>
        {`
          button {
            font-size: 14px;
            color: ${theme.color};
            background-color: ${theme.backgroundColor};
            border: 1px solid ${theme.borderColor};
            border-radius: 8px;
            height: 39px;
            padding: 0 10px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            vertical-align: middle;
          }

          :hover {
            color: ${theme.hover.color};
            background-color: ${theme.hover.backgroundColor};
            border-color: ${theme.hover.borderColor};
          }
        `}
      </style>
    </>
  );
};

export default Button;
