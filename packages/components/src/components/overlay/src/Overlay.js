/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react';

import { Box } from '../../box';
import { Portal } from '../../portal';

import preventBodyScroll from '../utils/preventBodyScroll';

export const Overlay = ({
  children,
  id = null,
  isVisible = false,
  shouldRemoveBodyScroll = false,
  onClose = null,
  ...props
}) => {
  const handleBodyScroll = preventScroll => {
    if (shouldRemoveBodyScroll && isVisible) {
      preventBodyScroll(preventScroll);
    }
  };

  useEffect(() => {
    handleBodyScroll(true);

    return () => {
      handleBodyScroll(false);
    };
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <Portal id={id}>
          <Box
            onClick={onClose}
            styleConfig={{
              backgroundColor: 'rgba(51, 51, 51, 0.3)',
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 1,
              display: `${isVisible ? 'flex' : 'none'}`,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            {...props}
          >
            {children}
          </Box>
        </Portal>
      )}
    </>
  );
};
