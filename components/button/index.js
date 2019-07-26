import Icon from '../icon';
import { Text } from '../typography';

const Button = ({
  children,
  type = 'button',
  text = '',
  icon = '',
  border = '1px solid gray',
  margin,
  onClick = null,
  ...props
}) => (
  <>
    <button type={type} onClick={onClick} style={{ margin }} {...props}>
      {children ? (
        <>{children}</>
      ) : (
        <>
          {icon && <Icon name={icon} size={17} />}
          {text && <Text text={text} margin={icon && '0 0 0 5px'} />}
        </>
      )}
    </button>

    <style jsx>
      {`
        button {
          font-size: 14px;
          border: ${border};
          border-radius: 8px;
          height: 39px;
          padding: 0 10px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
        }
      `}
    </style>
  </>
);

export default Button;
