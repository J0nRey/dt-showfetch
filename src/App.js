import './App.css';
import 'styled-components'
import React, {useState, useEffect} from 'react'
import DataTable, {createTheme} from 'react-data-table-component';

const App = () => {
  // 1 - Configurar los hooks
  const [users, setUsers] = useState( [] )

  // 2 - Funcion para mostrarlos datos con fetch
  const URL = 'https://fakestoreapi.com/users'
  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setUsers(data)
  }

  useEffect( () => {
    showData()
  }, [])

  // 3 - Configuramos las columnaspara Datatable
  const columns = [
    {
      name: 'ID',
      selector: row => row.id
    },
    {
      name: 'NAME',
      selector: row => row.username
    },
    {
      name: 'USERNAME',
      selector: row => row.username
    },
    {
      name: 'EMAIL',
      selector: row => row.email
    },
    {
      name: 'PHONE',
      selector: row => row.phone
    },
    {
      name: 'PASSWORD',
      selector: row => row.password
    },
  ]

  // 4 - Personalizar Tema
/*   createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }); */

  // 5 - Mostramos la data en Datatable
  return (
    <div className="App">
      <h1>React DataTable</h1>

<DataTable 
  columns = {columns}
  data = {users}
  pagination
//  theme='solarized'
/>

    </div>
  );
}

export default App;
