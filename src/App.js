import { useState } from 'react';

let nextId = 0;


 function List(){
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  const deleteArtist = (id) => {
    setArtists(artists.filter((a) => a.id !== id));
  };

  return (
    <div>
    <h1>Inspiring sculptors:</h1>
    <input 
    value={name}
    onChange={e => setName(e.target.value)}
    />
    <button onClick={() => {
      setArtists([
        ...artists,
        {id: nextId++, name: name}
      ]);
    }}>Add</button>

    <ul>
      {artists.map((a) => {
        return (
        <li Key={a.id}>
          {a.name}{''}
          <button onClick={() => deleteArtist(a.id)}>Delete</button>
        </li>
      );
      })}
    </ul>

    </div>
  );
}

export default List;
