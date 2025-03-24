import {FC, useState} from "react";
import {useLayout} from "@context/UseLayout.tsx";
import {ScheduleAdaptiveProps} from "@/interface";


export const ScheduleAdaptive: FC<ScheduleAdaptiveProps> = (
    {
        headers,
        selectedSchedule
    }
) => {
    const {handleOpenTrainerModal} = useLayout();
    const [activeLesson, setActiveLesson] = useState<number | null>(null);

    const toggleLesson = (id: number) => {
        setActiveLesson(activeLesson === id ? null : id);
    };

    return (
        <div className={`pos-column-schedule-adaptive`}>
            {headers.map((item, i) => (
                <div className={`header-schedule index-one`} key={`${item.desc}-${i}`}>
                    {item.desc}
                </div>
            ))}
            {selectedSchedule?.schedule.map((item) => (
                <div className={`pos-column-schedule-adaptive`} key={`${item.id}`}>
                    <button
                        className={`time-schedule index-one`}
                        style={{background: `var(${item.color})`}}
                        onClick={() => toggleLesson(item.id)}
                    >
                        {item.lessons}
                    </button>
                    {activeLesson === item.id && (
                        <div className={`pos-element-column-adaptive`}>
                            {headers.map((header, index) => (
                                <div className={`dis-element-column-adaptive`} key={`${header.desc}-${index}`}>
                                    {header.weekday.map((weekday, index) => (
                                        <div className={`header-schedule`} key={`${weekday}-${index}`}>
                                            {weekday}
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <div className={`dis-element-column-adaptive`}>
                                {item.times.map((time, index) => (
                                    <div
                                        className={`time-schedule`}
                                        style={{
                                            background: time === '' ? '#CECECE' : `var(${item.color})`,
                                            cursor: time !== '' ? 'pointer' : ''
                                        }}
                                        key={`${index}-${time}`}
                                        onClick={() => time !== '' && handleOpenTrainerModal({trainerId: item.trainerId})}
                                    >
                                        {time}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
