import React from 'react';

import { IModalRootProps } from './utils/interfaces';

const ModalRoot = ({ modalRootName }: IModalRootProps) => {
  return <div id={modalRootName} />;
};

export default ModalRoot;
