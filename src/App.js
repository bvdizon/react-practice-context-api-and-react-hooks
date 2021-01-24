import React from 'react';
import './App.css';
import AddForm from './components/AddForm';
import Alert from './components/Alert';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Alert />
      <AddForm />
    </div>
  );
};

export default App;
