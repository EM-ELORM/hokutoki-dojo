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
    const [activeLesson, setActiveLesson] = useState<string | null>(null);

    const toggleLesson = (lesson: string) => {
        setActiveLesson(activeLesson === lesson ? null : lesson);
    };

    return (
        <div className={`pos-column-schedule-adaptive`}>
            {headers.map((item) => (
                <div className={`header-schedule index-one`} key={item.desc}>
                    {item.desc}
                </div>
            ))}
            {selectedSchedule?.schedule.map((item) => (
                <div className={`pos-column-schedule-adaptive`} key={item.lessons}>
                    <button
                        className={`time-schedule index-one`}
                        style={{background: `var(${item.color})`}}
                        onClick={() => toggleLesson(item.lessons)}
                    >
                        {item.lessons}
                    </button>
                    {activeLesson === item.lessons && (
                        <div className={`pos-element-column-adaptive`}>
                            {headers.map((item) => (

                                <div className={`dis-element-column-adaptive`} key={item.desc}>
                                    {item.weekday.map((weekday) => (
                                        <div className={`header-schedule`} key={weekday}>
                                            {weekday}
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <div className={`dis-element-column-adaptive`}>
                                {item.times.map((time, index) => (
                                    <div
                                        className={`time-schedule`}
                                        style={{background: `var(${item.color})`}}
                                        key={index}
                                        onClick={() => handleOpenTrainerModal({trainerId: item.trainerId})}
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
