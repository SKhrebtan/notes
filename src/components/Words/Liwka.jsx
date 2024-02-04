import { useState } from 'react';
import { ReactComponent as DeleteSvg } from '../../img/delete.svg';
import { Modal } from 'components/Modal/Modal';

export const Liwka = ({ data, value, handleDelete }) => {
     const [showModal, setShowModal] = useState(false);
    return (
    <li className="li">
            <div className="translate-block">
              <strong style={{ width: 'calc((100% - 10px) / 2)' }}>
                {data}
              </strong>
              <span style={{ width: 'calc((100% - 10px) / 2)' }}>{value}</span>
            </div>
            <button
              style={{
                width: '24px',
                height: '24px',
                padding: '0px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                border: 'none',
              }}
              type="button"
              // onClick={() => handleDelete(key)}
                onClick={() => setShowModal(true) }
            >
              <DeleteSvg />
            </button>
            {showModal && <Modal setShowModal={setShowModal} handleDelete={handleDelete} data={data} />}
          </li>
)
}