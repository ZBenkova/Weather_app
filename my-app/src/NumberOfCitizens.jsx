import { useState } from "react";

function NumberOfCitizens() {
  const [citizens, setCitizens] = useState(1100);

  function addCitizen() {
    setCitizens((prev) => prev + 1);
  }

  return (
    <div className="card">
      <h2>Number of citizens in Olomučany</h2>
      <p>{citizens}</p>
      <button onClick={addCitizen}>Add Citizen</button>
    </div>
  );
}

export default NumberOfCitizens;

// function NumberOfCitizens() {
//   return (
//     <div className="card">
//       <h2>The number of citizens in Olomučany</h2>
//       <p>There lives around 1100 inhabitants</p>
//     </div>
//   );
// }
// export default NumberOfCitizens;
