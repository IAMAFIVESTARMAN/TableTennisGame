const Player = (props) => {
  // console.log(props.score[+props.id])

  return (
    <>
      <div className="flex flex-col justify-between gap-24 items-center   ">
        <h2 className="text-5xl text-white">Player {`#${+props.id + 1}`}</h2>
        <p className="text-8xl text-white">{props.score}</p>

        <button
          className="py-64 px-5 bg-stone-900 text-white text-7xl "
          onClick={() => props.Oninchandler(props.id)}
        >
          +
        </button>
        <button
          className="py-64 px-4 bg-stone-900 text-white text-7xl "
          onClick={() => props.Ondechandler(props.id)}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Player;
