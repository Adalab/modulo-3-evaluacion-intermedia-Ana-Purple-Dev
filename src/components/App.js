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
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('Escoge una opción');

  const handleSelect = (ev) => {
    let filteredByCounselor;
    setSelect(ev.target.value);
    if (ev.target.value === 'Escoge una opción') {
      filteredByCounselor = adalabers.results;
    } else {
      filteredByCounselor = adalabers.results.filter(
        (oneAdalaber) => oneAdalaber.counselor === ev.target.value
      );
    }
    setData([...filteredByCounselor]);
  };

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
    console.log(ev.target.value);
    const filteredAdalabersByName = adalabers.results.filter((oneAdalaber) =>
      oneAdalaber.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filteredAdalabersByName);
    setData([...filteredAdalabersByName]);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleClickAddAdalaber = (ev) => {
    console.log(data);
    setData([...data, newAdalaber]);
  };

  const handleNewAdalaber = (ev) => {
    setNewAdalaber({ ...newAdalaber, [ev.target.id]: ev.target.value });
  };

  const htmlData = data.map((oneAdalaber, index) => {
    return (
      <tr key={index}>
        <td>{oneAdalaber.name}</td>
        <td>{oneAdalaber.counselor}</td>
        <td>{oneAdalaber.speciality}</td>
        <td>
          {oneAdalaber.social_networks.map((oneNetwork, index) => {
            return <a href={oneNetwork.url}>{oneNetwork.name}</a>;
          })}
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Adalabers</h1>
      <form>
        <label htmlFor=''>Nombre</label>
        <input
          autoComplete='off'
          type='search'
          name='search'
          placeholder='Ej:Maricarmen'
          value={search}
          onInput={handleSearch}
        />
        <label htmlFor=''>Escoge una tutora</label>
        <select name='' id='' onChange={handleSelect} value={select}>
          <option value='Escoge una opción'>Escoge una opción</option>
          <option value='Yanelis'>Yanelis</option>
          <option value='Dayana'>Dayana</option>
          <option value='Iván'>Iván</option>
          <option value='Miguel'>Miguel</option>
        </select>
      </form>
      <table className='table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
            <th>Redes</th>
          </tr>
        </thead>
        <tbody>
          <tr>{htmlData}</tr>
          <tr>{htmlData}</tr>
          <tr>{htmlData}</tr>
          <tr>{htmlData}</tr>
        </tbody>
      </table>
      <section>
        <h2>Añadir una Adalaber</h2>
        <form action='' onSubmit={handleSubmit}>
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
