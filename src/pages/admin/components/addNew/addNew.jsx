import React from "react";
import './addnew.scss';
import Header from '../common/header/header';
import TinyCME from './components/tinycme';

const AddNew = () => {
  return (
    <div className="admin__addNew">
      <Header />
      <div>
        <TinyCME />
      </div>
    </div>
    ) 
    
};

export default AddNew;
