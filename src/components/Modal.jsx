import { useDispatch } from "react-redux";
import { actionTypes } from "../redux/actionTypes";

const Modal = ({todo, close}) => {

 const dispatch = useDispatch()

const handleSubmit = (e) => {
  e.preventDefault()

  const newText = e.target[1].value

  const updated = {...todo, text: newText}

  dispatch({
    type: actionTypes.UPDATE_TODO,
    payload: updated,
  })

  close()

}

  return (
    <div className="modal d-block text-dark bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todo'yu Düzenle</h5>
            <button
              type="button"
              className="btn-close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">
            <label>Yeni Başlık</label>
            <input defaultValue={todo.text} className="form-control shadow mt-2" type="text" />
          </div>
          <div className="modal-footer">
            <button
              onClick={close}
              type="button"
              className="btn btn-secondary"
              
            >
              Vazgeç
            </button>
            <button type="submit" className="btn btn-primary">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
