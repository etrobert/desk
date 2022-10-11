import useCountdown from '../hooks/useCountdown';

const Countdown = () => {
  const time = useCountdown(2 * 60);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <p>
      {minutes}:{seconds}
    </p>
  );
};

export default Countdown;
