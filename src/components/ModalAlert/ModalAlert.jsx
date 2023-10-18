import style from "./ModalAlert.module.css";

const ModalAlert = ({ children }) => {
  return (
    <div className={style.modalAlert}>
      <div className={style.msj}>{children}</div>
    </div>
  );
};

export default ModalAlert;
