import './index.css';
import './index.adaptive.css';
import React, {FC, useEffect, useState} from 'react';
import trainers from '@moki/trainers.json';
import schedules from '@moki/shedule.json';
import {ScheduleAdaptive} from './ScheduleAdaptive.tsx';
import {useLayout} from '@/context/UseLayout.tsx';

export const Schedule: FC = () => {
    const {handleOpenTrainerModal} = useLayout();
    const [selectedScheduleId, setSelectedScheduleId] = useState<number>(200);
    const [hoverTrainer, setHoverTrainer] = useState<{
        name: string;
        x: number;
        y: number;
    } | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setHoverTrainer(null);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headers = schedules.header;
    const selectedSchedule = schedules.schedules.find(
        schedule => schedule.id === selectedScheduleId
    );

    const handleButtonClick = (id: number) => {
        setSelectedScheduleId(id);
    };

    const handleMouseEnter = (trainerId: number, event: React.MouseEvent<HTMLDivElement>) => {
        const trainer = trainers.find(tr => tr.id === trainerId);
        if (trainer) {
            const rect = event.currentTarget.getBoundingClientRect();
            setHoverTrainer({
                name: trainer.trainer.name,
                x: rect.left + window.scrollX + rect.width / 2,
                y: rect.top + 55
            });
        }
    };

    const handleMouseLeave = () => {
        setHoverTrainer(null);
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
                            <div
                                className={`time-schedule index-one`}
                                style={{background: `var(${item.color})`}}
                                onMouseEnter={(e) => handleMouseEnter(item.trainerId, e)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleOpenTrainerModal({trainerId: item.trainerId})}
                            >
                                {item.lessons}
                            </div>
                            {item.times.map((time, index) => (
                                <div
                                    key={index}
                                    className={`time-schedule`}
                                    style={{
                                        background: time === '' ? '#CECECE' : `var(${item.color})`,
                                        cursor: time !== '' ? 'pointer' : ''
                                    }}
                                    onMouseEnter={(e) => time !== '' && handleMouseEnter(item.trainerId, e)}
                                    onMouseLeave={time !== '' ? handleMouseLeave : undefined}
                                    onClick={() => time !== '' && handleOpenTrainerModal({ trainerId: item.trainerId })}
                                >
                                    {time}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {hoverTrainer && (
                    <div
                        className={`tooltip`}
                        style={{
                            left: `${hoverTrainer.x}px`,
                            top: `${hoverTrainer.y}px`,
                        }}
                    >
                        {hoverTrainer.name}
                    </div>
                )}

                <ScheduleAdaptive headers={headers} selectedSchedule={selectedSchedule}/>

                <div className={`pos-schedule-info`}>
                    <div className={`schedule-info`}>*Расписание по субботам может измениться</div>
                </div>
            </div>
        </>
    );
};
