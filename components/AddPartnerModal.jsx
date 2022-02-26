import { useState } from 'react';

const AddPartnerModal = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className='add-partner-modal-container'>
      <div className='add-partner-modal'>
        <div className='add-partner-modal-head'>
          <h2>Add partner</h2>
          <i className='bx bx-x'></i>
        </div>
      </div>
    </div>
  );
};

export default AddPartnerModal;
