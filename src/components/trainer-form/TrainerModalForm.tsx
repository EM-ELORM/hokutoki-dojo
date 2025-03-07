import './index.css'
import './index.adaptive.css'
import typeTraining from '@moki/typeTraining.json'
import {FC, useState} from 'react';

interface TrainerModalProps {
    bgButtonTrainer?: string
}

export const TrainerModalForm: FC<TrainerModalProps> = ({bgButtonTrainer}) => {
    const [isTrainingModalOpen, setIsTrainingModalOpen] = useState(false);
    const [selectedTraining, setSelectedTraining] = useState('');

    const handleSelectTraining = (training: string) => {
        setSelectedTraining(training);
        setIsTrainingModalOpen(false);
    };

    return (
        <form className={`pos-trainer-form`}>
            <input placeholder={`Имя *`} className={`input-trainer`}/>
            <input placeholder={`Телефон *`} className={`input-trainer`}/>
            <input placeholder={`Ссылка на социальную сеть`} className={`input-trainer`}/>

            <>
                <input
                    value={selectedTraining || `Тип тренировки *`}
                    onClick={() => setIsTrainingModalOpen(true)}
                    className={`input-trainer`}
                    readOnly
                />
                {isTrainingModalOpen && (
                    <div className={`modal-trainer`}>
                        <div className={`list-modal-trainer`}>
                            <button className={`close`} onClick={() => setIsTrainingModalOpen(false)}></button>
                            {typeTraining.map((item, idx) => (
                                <div className={`element-list-trainer`} key={idx}
                                     onClick={() => handleSelectTraining(`${item.name}`)}>{item.name}</div>
                            ))}
                        </div>
                    </div>
                )}
            </>

            <button className={`btn-trainer`} style={{background: `var(${bgButtonTrainer})`}}>
                Оставить заявку
            </button>
        </form>
    );
};
