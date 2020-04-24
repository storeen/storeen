import { Overlay } from '../../overlay';

import { theming } from '../../../theme/theming';

export const SideSheet = ({
  children,
  width = '620px',
  isVisible = false,
  onClose = null
}) => (
  <>
    <Overlay
      id="side-sheet"
      isVisible={isVisible}
      shouldRemoveBodyScroll
      onClose={onClose}
    >
      <nav className="side-sheet">{children}</nav>
    </Overlay>

    <style jsx>
      {`
        nav {
          background-color: ${theming.colors.gray0};
          border-right: 1px solid ${theming.colors.gray200};
          padding: 20px 0 10px;
          max-width: ${width};
          height: 100vh;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          -ms-overflow-style: -ms-autohiding-scrollbar;
          position: fixed;
          top: 0;
          left: 0;
          transform: ${isVisible
            ? 'translate3d(0, 0, 0)'
            : 'translate3d(-125px, 0, 0)'};
          will-change: transform;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-shrink: 0;
        }
      `}
    </style>
  </>
);
