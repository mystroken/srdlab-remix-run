import { useRef, type ReactNode, useEffect } from "react";
import { CLOSE } from "~/data/images";

interface ModalProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  onClose?: () => void;
}

export const Modal = ({ title, children, footer, onClose }: ModalProps) => {
  const modalRef = useRef();
  const close = () => {
    if (onClose) {
      onClose();
    }
    console.log("closed");
  };
  const handleEscapeKey = (event: any) => {
    if (event.key === "Escape") {
      close();
    }
  };

  const handleOutsideClick = (event: any) => {
    if (modalRef.current && !modalRef.current!.contains(event.target)) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={modalRef}
      className="fixed top-0 bottom-0 left-0 right-0 bg-[#000a] flex items-start justify-center px-8 py-12 pt-32"
    >
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
