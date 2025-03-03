import {FC, useState} from "react";

interface ScheduleAdaptiveProps {
    headers: {
        desc: string;
        weekday: string[];
    }[];
    selectedSchedule?: {
        id: number;
        schedule: {
            lessons: string;
            times: string[];
            color: string;
        }[];
    };
}

export const ScheduleAdaptive: FC<ScheduleAdaptiveProps> = (
    {
        headers,
        selectedSchedule

    }
) => {
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
