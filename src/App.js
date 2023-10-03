import React, { useState } from 'react';

import Header from './components/Header/Header';
import UserInputForm from './components/UserInput/UserInputForm';
import InputList from './components/InputList/InputList';

const App = () => {

  // const inputData = [
  //   {
  //     'username': 'Max',
  //     'age': 32
  //   },
  //   {
  //     'username': 'Soumya',
  //     'age': 21
  //   }
  // ];

  const [inputData, setInputData] = useState([]);

  const onSubmitHandler = (uName, uAge) => {
    setInputData((prevdata) => {
      return [...prevdata, {'username': uName, 'age': uAge, 'id': Math.random().toString()}];
    });
    console.log(inputData);
  }

  
  return (
    <div>
      <Header />

      <UserInputForm onSaveInputData={onSubmitHandler} />

      <InputList datas={inputData} />

    </div>
  );
}

export default App;