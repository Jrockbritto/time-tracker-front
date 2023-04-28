import { IFetchTimes, ITime, ITimesPage } from "./types/time.types";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { timeRegister, times } from "../../api/times";
import { format } from "date-fns";
import './Times.css';
import Record from "../../components/Record";
import Accordion from "../../components/Accordion";

function Times(props: ITimesPage) {
  let today: ITime | undefined;
  const todayDate = format(new Date(), 'dd/MM/yyyy');
  const { user } = props;

  const [list, setList] = useState<ITime[]>([]);
  const [selected, setSelected] = useState<ITime | undefined>(today);
  const [refresh, setRefresh] = useState<boolean>(false);


  const onSubmit = async (payload: IFetchTimes) => {
    const data = await times({ id: user.id });
    today = data.find((time: ITime) => time.date === todayDate);
    setSelected(today) 
    setList(data);
  }

  const handleOnClick = async () => {
    await timeRegister();
    setRefresh(true)
  };
  
  useEffect(() => {
    onSubmit({ id: user.id })
    setRefresh(false)
  }, [user, refresh])

  const renderRecords = () =>
    list.filter((record) => record.date !== selected?.date).map((time) => {
      return(<Record key={time.date} selected={selected} setSelected={setSelected} time={time}/>)
    })

  return(
    <div className="t-wrapper">
      <div className="t-header">
        <span className="time-text-wrapper t-font a-font f-color">
          <p className="t-fw-700">Relógio de ponto</p>
        </span>
        <span className="time-text-wrapper t-font a-font f-color t-ta-right">
        <p className="t-fw-700">{user.name} {user.lastName}</p>
          <p className="t-fw-300 t-color">Usuário</p>
        </span>
      </div>
      <div className="d-wrapper a-font f-color">
        <div className="t-info-wrapper a-font f-color">
          <p className="t-font-duration t-fw-700">{selected?.time.hours}h {selected?.time.minutes}m {selected?.time.seconds}s</p>
          {selected?.firstOfJourney !== undefined ?
            <p className="t-font">Horas de hoje ({selected?.date})</p> :
            <p className="t-font">Horas do dia ({selected?.date})</p>}
        </div>
        <div className="t-journey-wrapper a-font f-color">
          <p className="t-font t-fw-700">Jornada {selected?.journey}</p>
        </div>
      </div>
      <div className="t-button-wrapper">
        {selected?.firstOfJourney !== undefined ? 
          <Button
            text={selected?.firstOfJourney ?
              "Marcar entrada" :
              "Marcar saída" }
            type="submit"
            onClick={handleOnClick}/> :
          null
        }
      </div>
      <Accordion timeArray={selected?.timeArray} />
      <div className="t-days-wrapper a-font f-color">
        <p className="t-font t-fw-700">Dias anteriores</p>
        <div>
          {renderRecords()}
        </div>
      </div>
    </div>
  )
}

export default Times;