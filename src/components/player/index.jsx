import Actor from "../actor";

const Player = ({skin}) => {
  
  const data = {
    h: 32,
    w: 32
  }

  return (
    <div className="zone-container">
      <Actor sprite={`/sprites/skins/${skin}.png`} data={data} />
    </div>
  );


};

export default Player;