import useCountdown from '../../../hooks/useCountdown';

const formatNumber = (num: number) =>
  Math.floor(num).toString().padStart(2, '0');

const formatTime = (time: number) =>
  `${formatNumber(time / 60)}:${formatNumber(time % 60)}`;

const Countdown = () => {
  const time = useCountdown(2 * 60);

  return <p>{formatTime(time)}</p>;
};

export default Countdown;
