import { Label, Paragraph } from '../../typography';

import useTheme from '@storeen/system/src/hooks/theme/useTheme';

import { radius500 } from '@storeen/system/src/utils/theme/radius';

const labelStyle = {
  display: 'inline-flex'
};

const descriptionStyle = {
  margin: '5px 0 0'
};

const Radio = ({
  appearance = 'minimal',
  id = null,
  name = '',
  value = '',
  text = '',
  description = '',
  checked = false,
  onChange = () => null,
  ...props
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <div
        className={`input-check input-form ${description &&
          'with-description'}`}
      >
        <Label id={`${id}-radio-label`} htmlFor={id} customStyle={labelStyle}>
          <input
            type="radio"
            id={id}
            name={name}
            value={value}
            aria-checked={checked}
            aria-label={`${id}-radio-label`}
            checked={checked}
            onChange={onChange}
            {...props}
          />
          <span>{text}</span>
        </Label>
        {description && (
          <Paragraph
            text={description}
            color="muted"
            customStyle={descriptionStyle}
          />
        )}
      </div>

      <style jsx>
        {`
          :global(.input-check > label) {
            position: relative;
            cursor: pointer;
          }

          div {
            display: flex;
            flex-direction: column;
          }

          input {
            margin: 0;
            width: 18px;
            height: 18px;
            opacity: 0;
          }

          span {
            margin-left: 6px;
            user-select: none;
            display: inline-block;
          }

          span::before {
            content: '';
            border-radius: 50%;
            border: 1px solid ${theme.borderColor};
            width: 18px;
            height: 18px;
            position: absolute;
            top: 1px;
            left: 0;
            transform: rotate(0deg) scale(1);
            display: block;
          }

          span::after {
            content: '';
            border: 5px solid ${theme.focus.borderColor};
            border-radius: ${radius500};
            position: absolute;
            top: 5px;
            left: 4px;
            transform: scale(0);
            display: block;
          }

          span::before,
          span::after {
            transition: all 0.15s ease-in-out;
          }

          input:focus + span::before {
            border-color: ${theme.focus.borderColor};
            box-shadow: ${theme.focus.boxShadow};
          }

          input:checked + span::before {
            border-color: ${theme.focus.borderColor};
          }

          input:checked + span::after {
            transform: scale(1);
          }
        `}
      </style>
    </>
  );
};

export default Radio;