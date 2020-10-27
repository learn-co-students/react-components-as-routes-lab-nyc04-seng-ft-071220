import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map((director, id) => (
          <div key={id}>
              <h3>Name: {director.name}</h3>
              <p>Movies:</p>
              <ul>
                  {director.movies.map((movie, id) => (
                      <li key={id}>{movie}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
}

export default Directors
