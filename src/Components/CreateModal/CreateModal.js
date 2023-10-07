import styles from "./CreateModal.module.css";

const CreateModal = (props) => {
  return (
    <div className={styles.modalBody}>
      <div className={styles.body}>
        <div className={styles.roomName}>
          <input className={styles.text} placeholder="ENTER ROOM NAME" />
        </div>
        <div className={styles.descName}>
          <textarea className={styles.text} placeholder="DESCRIPTION" />
        </div>
        <div className={styles.createModalBtns}>
          <div
            className={styles.cancelBtn}
              onClick={() => props.setModal(false)}
          >
            Cancel
          </div>
          <div className={styles.createBtn}>Create</div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
