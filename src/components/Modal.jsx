export const Modal = (props) => {
  return (
    <>
      <div className="z-20 absolute  left-64 translate-x-32 bg-slate-50 py-20 w-3/4">
        <p className="mb-24 text-8xl">Rules of the Game</p>
        A plus button will update the socre and  a minus button to reduce player scores. then it's player 2's turn. After a player gets 11 points it should show that that player is the winner. 
The winning player always has to win with 2 points advantage. When its 10-10 the winning point will be 12
        <button
          onClick={props.onClose}
          className="absolute -top-1/4 -right-10 py-5 px-5 bg-slate-950 text-yellow-50 "
        >
          X
        </button>
      </div>

      <div
        onClick={props.onClose}
        className="z-10 absolute  top-0 left-0 w-full h-full  bg-slate-500 opacity-75"
      ></div>
    </>
  );
};
