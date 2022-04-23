import "./Counter.style.scss";

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="show-counter">
      <p>{seconds}</p>
      <p>:</p>
      <p>{minutes}</p>
    </div>
  );
};

export default ShowCounter;
