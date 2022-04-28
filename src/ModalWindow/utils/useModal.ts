import { useState } from 'react';

type FunctionUseModalType = () => [boolean, (isShow: boolean) => void];

const useModal: FunctionUseModalType = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (isShow: boolean) => {
    setIsOpen(isShow);
  };

  return [isOpen, toggle];
};

export default useModal;
