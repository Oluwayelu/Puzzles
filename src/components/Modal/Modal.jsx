import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import "./modal.css";

const Modal = ({ children, header, close }) => {
  return (
    <div className="modal">
      <div onClick={close} className="modal-bg" />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        className="card"
      >
        <div className="card-header">
          {header && <h2>{header}</h2>}
          <div onClick={close}>
            <FaTimes className="error" />
          </div>
        </div>
        <div className="card-body">{children}</div>
      </motion.div>
    </div>
  );
};

export default Modal;
