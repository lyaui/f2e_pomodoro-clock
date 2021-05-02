import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { SModalBackdrop, SModal, SModalHeader, SModalBody, SModalFooter } from './style';

const portalElement = document.getElementById('overlays');

const Modal = () => (
  <Fragment>
    {ReactDOM.createPortal(<SModalBackdrop>Hooray!</SModalBackdrop>, portalElement)}
    {ReactDOM.createPortal(
      <SModal>
        <SModalHeader>Hooray!</SModalHeader>
        <SModalBody>
          You can check this task in done list. <br />
          Don’t forget to select next task to continue.
        </SModalBody>
        <SModalFooter></SModalFooter>
      </SModal>,
      portalElement,
    )}
  </Fragment>
);

export default Modal;
