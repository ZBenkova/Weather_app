import { useState } from "react";

function Tips() {
  const [tipsList] = useState([
    "Take a walk in the Forest trail",
    "Visit the local playground with Children",
    "Check the weather before hiking",
    "Enjoy a quiet evening in your garden",
    "Support local farmers' market",
  ]);

  const [index, setIndex] = useState(0);

  function changeTip() {
    setIndex((prevIndex) => (prevIndex + 1) % tipsList.length);
  }
  return (
    <div className="card">
      <h2>Tip for Today</h2>
      <p>{tipsList[index]}</p>
      <button onClick={changeTip}>Next Tip 💡</button>
    </div>
  );
}
export default Tips;

// function Tips() {
//   return (
//     <div className="card">
//       <h2>How to spend time</h2>
//       <p>
//         Take a walk to the nearby forest or enjoy a coffee at the local hotel
//         Olberg
//       </p>
//     </div>
//   );
// }

// export default Tips;
