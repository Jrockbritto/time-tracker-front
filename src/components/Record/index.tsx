import { IRecord } from '../../pages/Times/types/time.types';
import './Record.css';

function Records(props: IRecord) {
  const { time, setSelected } = props;

  const handleOnClick = () => {
    setSelected(time)
  };

  return (
    <div onClick={handleOnClick} className="r-wrapper t-font a-font">
      <p className='r-date'>{time?.date}</p>
      <p className='r-duration'>{time?.time.hours}h {time?.time.minutes}m {time?.time.seconds}s</p>
    </div>
  );
}

export default Records;
