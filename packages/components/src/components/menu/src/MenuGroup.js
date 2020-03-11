import useTheme from '@storeen/system/src/hooks/theme/useTheme';

import { mono0 } from '@storeen/system/src/utils/theme/colors';
import { radius500 } from '@storeen/system/src/utils/theme/radius';

const MenuGroup = ({
  children,
  appearance = 'minimal',
  id = null,
  hidden = true
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <ul role="menu" id={id} aria-orientation="vertical" hidden={hidden}>
        {children}
      </ul>

      <style jsx>
        {`
          ul {
            background-color: ${mono0};
            border: 1px solid ${theme.borderColor};
            border-radius: ${radius500};
            list-style: none;
            padding: 5px;
            margin: 5px 0 0;
            min-width: 110px;
            width: 100%;
            position: absolute;
            right: 0;
            left: auto;
          }
        `}
      </style>
    </>
  );
};

export default MenuGroup;