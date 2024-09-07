import React from 'react';
import Header from './components/Header';
import './App.css'
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLaptop } from '@fortawesome/free-solid-svg-icons';
import studentIllustration from './assets/Students-pana.svg';


function App() {
  return (
    <div>
      <FontAwesomeIcon icon={faBook} />
      <FontAwesomeIcon icon={faLaptop} />
      <Header />
      <div>
      <h1>
        Welcome, Students!
      </h1>
      <img src={studentIllustration} alt="Student illustration" style={{ width: '100%', height: 'auto' }} />
    </div>
      <div className='container'>
        <Balance />
      </div>
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
      
    </div>
  );
}
 
export default App;