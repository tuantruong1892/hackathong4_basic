import './App.css';
import React, { useEffect, useState } from 'react';
import NotesService from './services/notes.services';
import { TiDelete } from "react-icons/ti";


const App: React.FC = () => {
  const [notes, setnotes] = useState<any>([]);
const[status,setStatus] =useState<boolean>(false)
useEffect(() => {
    
    const fetchData = async () => {
        try {
            const student = new NotesService();
            const response2 = await student.getAll();
            console.log('API Response:', response2);

            setnotes(response2);

        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu', error);
        } 
    }
    fetchData();

  }, [status]);
  const handleClickDelete = async (id: any) => {
    
    try {
        const user = new NotesService();
        const response = await user.deleteNotes(id);
        if (response.status === 201) {
            alert('Xóa dữ liệu thành công');
  setStatus(!status)
        } else {
            alert('Lỗi khi xóa người dùng');
        }
    } catch (e: any) {
        alert(e.response.data.message);
    }

};
  return (
    <> <div className="header"><div className="header-note-app">
        <div className="header-note">
          <h1>Note App</h1>
        </div>
        <div className="add-new-note">
          <div className="table-content-add">
            <p>title</p>
            <textarea
              className="box-add-new"
             
            ></textarea>
            <button className="icon-add-new">
            </button>
          </div>
        </div>
      </div></div>
      <div className="main">
      <div className="table-list-data">
      {notes.map((item: any) => {
        return (
          <div className="box-list-item">
            <p>{item.content}</p>
            <TiDelete onClick={() => handleClickDelete(item.id)}/>

            
          </div>
        );
      })}
    </div>
      </div>
    </>
  );
};


export default App;
