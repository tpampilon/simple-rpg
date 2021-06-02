import Sprite from "../sprite";

const Actor = ({ sprite, data, step = 0, dir = 0}) => {

  const { h, w } = data;


  return (
    <div>
      <Sprite 
        image={sprite}
        data={{
          x: step * w,
          y: dir * h,
          h,
          w
        }}
      />
    </div>
  );
}

export default Actor;