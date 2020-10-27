import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor, id) => (
          <div key={id}>
              <h3>Name: {actor.name}</h3>
              <p>Movies:</p>
              <ul>
                  {actor.movies.map((movie, id) => (
                      <li key={id}>{movie}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
};

export default Actors;
