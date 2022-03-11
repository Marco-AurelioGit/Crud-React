import { useEffect, useState } from 'react';
import Card from './Card/Card';
import Axios from 'axios';
import './App.css';

function App() {
  const [values, setValues] = useState();
  const [listFuncionarios, setListFuncionarios] = useState([]);


  const handleChange = (value) => {
      setValues((prevValues) => ({
        ...prevValues,
        [value.target.name]: value.target.value
      }))
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/getFuncionarios').then((response) => {
      setListFuncionarios(response.data)
    })
  },[listFuncionarios])

  const registrarFuncionario = () => {
    Axios.post('http://localhost:3001/create', {
      nome: values.nome,
      idade: values.idade,
      email: values.email,
      cargo: values.cargo,
      pais: values.pais,
    }).then(() => {
      setListFuncionarios([
        ...listFuncionarios,
        {
          nome: values.nome,
          idade: values.idade,
          email: values.email,
          cargo: values.cargo,
          pais: values.pais,
        }
      ])
    })
  }

  return (
    <div className="App">
      <div className='cadastro'>
        <label>Nome:</label>
        <input type="text" name="nome" onChange={handleChange}/>
        <label>Idade:</label>
        <input type="number" name="idade" onChange={handleChange}/>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange}/>
        <label>Cargo:</label>
        <input type="text" name="cargo" onChange={handleChange}/>
        <label>País:</label>
        <input type="text" name="pais" onChange={handleChange}/>
        <button onClick={registrarFuncionario}>Adicionar</button>
      </div>
        {listFuncionarios.map((val) => {
          return (
              <Card
                key={val.id}
                listCard={listFuncionarios}
                setListCard={setListFuncionarios}
                id={val.id}
                nome={val.nome}
                idade={val.idade}
                email={val.email}
                pais={val.pais}
                cargo={val.cargo}
              />
          )
        })}
      </div>
  );
}

export default App;
