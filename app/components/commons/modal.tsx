import type { ReactNode } from "react";
import { CLOSE } from "~/data/images";

interface ModalProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  onClose?: () => void;
}

export const Modal = ({ title, children, footer, onClose }: ModalProps) => {
  const close = () => {
    if (onClose) {
      onClose();
    }
    console.log("closed");
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#000a] flex items-start justify-center px-8 py-12 pt-32">
      <div className="flex flex-col bg-white rounded-lg lg:w-3/6 p-6">
        <div className="flex justify-between p-3 items-center text-lg">
          <strong>{title}</strong>
          <button onClick={close}>
            <img src={CLOSE} alt="" className="w-4 h-4" />
          </button>
        </div>
        <div className="px-3 py-5">{children}</div>
        {footer}
      </div>
    </div>
  );
};
