import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";

const Player = ({skin}) => {

  const { dir, step, walk } = useWalk(3);

  const data = {
    h: 32,
    w: 32
  }

  useKeyPress((event) => {
    event.preventDefault();
    const dir = event.key.replace("Arrow", "").toLowerCase();
    walk(dir)
  })

  return (
    <div className="zone-container">
      <Actor sprite={`/sprites/skins/${skin}.png`} data={data}  step={step} dir={dir}/>
    </div>
  );


};

export default Player;