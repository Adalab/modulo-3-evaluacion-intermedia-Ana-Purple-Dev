import '../styles/App.css';
import adalabers from '../data/adalabers.json';
import { useState } from 'react';

function App() {
  console.log(adalabers);
  const [data, setData] = useState(adalabers.results);
  const [newAdalaber, setNewAdalaber] = useState({
    name: '',
    counselor: '',
    speciality: '',
  });

  const handleClickAddAdalaber = (ev) => {};

  const handleNewAdalaber = (ev) => {};

  const htmlData = data.map((oneAdalaber, index) => {
    return (
      <tr>
        <td key={index}>{oneAdalaber.name}</td>
        <td>{oneAdalaber.counselor}</td>
        <td>{oneAdalaber.speciality}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Adalabers</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>{htmlData}</tr>
          <tr>{htmlData}</tr>
          <tr>{htmlData}</tr>
        </tbody>
      </table>
      <section>
        <h2>Añadir una Adalaber</h2>
        <form action=''>
          <label htmlFor=''>Nombre</label>
          <input
            type='text'
            onInput={handleNewAdalaber}
            name='name'
            id='name'
            value={newAdalaber.name}
          />
          <label htmlFor=''>Tutora</label>
          <input
            type='text'
            onInput={handleNewAdalaber}
            name='counselor'
            id='counselor'
            value={newAdalaber.counselor}
          />
          <label htmlFor=''>Especialidad</label>
          <input
            type='text'
            onInput={handleNewAdalaber}
            name='speciality'
            id='speciality'
            value={newAdalaber.speciality}
          />
          <input
            type='submit'
            onClick={handleClickAddAdalaber}
            value='Añadir una nueva Adalaber'
          />
        </form>
      </section>
    </div>
  );
}

export default App;
