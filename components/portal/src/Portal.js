import { createPortal } from 'react-dom';

import usePortal from '../utils/usePortal';

const Portal = ({ id, children }) => {
  const target = usePortal(id);

  return !target ? null : createPortal(children, target);
};

export default Portal;
