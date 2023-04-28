import { IAccordion } from './types/accordion.types';
import './Accordion.css';
import { removeTimezoneOffset } from '../../utils/timezone.function';

function Accordion (props: IAccordion) {
  const handleOnClick = (e: any) => {
    const panel = e.target.nextElementSibling;
    panel.classList.toggle('active');
    panel.style.maxHeight = panel.scrollHeight + "px"
  }

  const { timeArray = [] } = props;

  const renderData = () => timeArray
  .map((time, index) => <p key={index} className='a-font t-color t-font'>
      {!(index % 2) ? "Entrada: " : "Saída: "}
      {removeTimezoneOffset(new Date(time)).toString()}
    </p>)

  return (
    <>
      <button onClick={handleOnClick} className="a-font t-color accordion">Mostrar registros</button>
      <div className="panel a-font t-color ">
        {renderData()}
      </div>
    </>
  )
}

export default Accordion;