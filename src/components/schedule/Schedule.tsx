import './index.css'
import './index.adaptive.css'
import {FC, useState} from "react";
import schedules from '../../moki/shedule.json'
import {ScheduleAdaptive} from "./ScheduleAdaptive.tsx";

export const Schedule: FC = () => {
    const [selectedScheduleId, setSelectedScheduleId] = useState<number>(200);

    const headers = schedules.header;
    const selectedSchedule = schedules.schedules.find(schedule => schedule.id === selectedScheduleId);

    const handleButtonClick = (id: number) => {
        setSelectedScheduleId(id);
    };

    return (
        <>
            <div className={`pos-schedule`}>

                <div className={`pos-btn-schedule`}>
                    <button className={`btn-red`} onClick={() => handleButtonClick(200)}>
                        ул. Академика Глушко, 47Б
                    </button>
                    <button className={`btn-red`} onClick={() => handleButtonClick(201)}>
                        ул. Юлиуса Фучика, 48А
                    </button>
                </div>

                <div className={`border-column`}></div>

                <div className={`pos-schedule-elements`}>
                    {headers.map((item) => (
                        <div className={`pos-column-schedule`} key={item.desc}>
                            <div className={`header-schedule index-one`}>
                                {item.desc}
                            </div>
                            {item.weekday.map((weekday) => (
                                <div key={weekday} className={`header-schedule`}>
                                    {weekday}
                                </div>
                            ))}
                        </div>
                    ))}

                    {selectedSchedule?.schedule.map((item) => (
                        <div className={`pos-column-schedule`} key={item.lessons}>
                            <div className={`time-schedule index-one`} style={{background: `var(${item.color})`}}>
                                {item.lessons}
                            </div>
                            {item.times.map((time, index) => (
                                <div key={index} className={`time-schedule`} style={{background: `var(${item.color})`}}>
                                    {time}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <ScheduleAdaptive
                    headers={headers}
                    selectedSchedule={selectedSchedule}
                />
            </div>
        </>
    )
}
