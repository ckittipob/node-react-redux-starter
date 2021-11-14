import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../../app/actions/modal";
import Popup from "reactjs-popup";

interface IProps {
  closeModal(): any;
  modalStore: {
    open: boolean;
    body: any;
  };
}

const ModalContainer: React.FC<IProps> = ({
  modalStore: { open, body },
  closeModal,
}) => {
  return (
    <Popup open={open} onClose={()=>closeModal()}>
      {body}
    </Popup>
  );
};
const mapStateToProps = (state: any) => ({
  modalStore: state.modal,
});

export default connect(mapStateToProps, { closeModal })(ModalContainer);
