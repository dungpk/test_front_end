import { useState } from 'react';
import './form-dialog.css';
import { DataItem } from './expense-view';

type DialogProps = {
  onClose: VoidFunction;
  addItem: (item: DataItem) => void;
};

export const Dialog = ({ onClose, addItem }: DialogProps) => {
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    category: '',
    createdDate: new Date().toLocaleString(),
    payDate: new Date().toLocaleString(),
    paymentMethod: '',
    money: '',
    note: '',
  });

  const handleAddData = () => {
    // Tạo dữ liệu mới từ các giá trị trong dialog
    const newData: DataItem = {
      createdDate: '123',
      name: '123',
      phone: '123',
      category: '123',
      paymentMethod: '123',
      money: 123,
    };

    addItem(newData);
    onClose();
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle logic when Save button is clicked
    console.log('Form values:', formValues);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        className="modal"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: '#000',
          opacity: 0.4,
          zIndex: -1,
        }}
      ></div>
      <div style={{ background: '#fff', width: 500, height: 400, zIndex: 1 }} className="container">
        {/* Code nội dung thẻ dialog trong này   */}
        <div>
          day la header <button onClick={() => onClose()}>Đóng thẻ dialog</button>
        </div>

        <div>
          <h2>Thêm thông tin chi</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Tên người nhận:</label>
              <input type="text" name="name" value={formValues.name} onChange={handleChange} />
            </div>
            <div>
              <label>Số điện thoại:</label>
              <input type="text" name="phone" value={formValues.phone} onChange={handleChange} />
            </div>
            <div>
              <label>Danh mục chi:</label>
              <input
                type="text"
                name="category"
                value={formValues.category}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Ngày tạo phiếu:</label>
              <input
                type="text"
                name="createdDate"
                value={formValues.createdDate}
                onChange={handleChange}
                disabled
              />
            </div>
            <div>
              <label>Ngày tạo phiếu:</label>
              <input
                type="text"
                name="payDate"
                value={formValues.payDate}
                onChange={handleChange}
                disabled
              />
            </div>
            <div>
              <label>Phương thức thanh toán:</label>
              <input
                type="text"
                name="paymentMethod"
                value={formValues.paymentMethod}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Tổng tiền chi:</label>
              <input type="text" name="money" value={formValues.money} onChange={handleChange} />
            </div>
            <div>
              <label>Ghi chú:</label>
              <textarea name="note" value={formValues.note} onChange={handleChange} />
            </div>
            <div>
              <button type="submit" onClick={() => handleAddData()}>
                Lưu
              </button>
              <button type="button" onClick={() => onClose()}>
                Hủy
              </button>
            </div>
          </form>
        </div>

        {/* <div className="main2">
          day la div
          <div className="section">
            <div className="border2">11111</div>
            <div className="border2">222222222222</div>
          </div>
        </div> */}
        <div>day la footer</div>
      </div>
    </div>
  );
};
