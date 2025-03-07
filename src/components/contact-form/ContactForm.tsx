import './index.css';
import './index.adaptive.css'
import trainers from '@moki/trainers.json'
import typeTraining from '@moki/typeTraining.json'
import {FC, useState} from 'react';

export const ContactForm: FC = () => {
    const [isTrainingModalOpen, setIsTrainingModalOpen] = useState(false);
    const [isTrainerModalOpen, setIsTrainerModalOpen] = useState(false);
    const [selectedTraining, setSelectedTraining] = useState('');
    const [selectedTrainer, setSelectedTrainer] = useState('');

    const handleSelectTraining = (training: string) => {
        setSelectedTraining(training);
        setIsTrainingModalOpen(false);
    };

    const handleSelectTrainer = (trainer: string) => {
        setSelectedTrainer(trainer);
        setIsTrainerModalOpen(false);
    };

    return (
        <form className={`pos-contact-form`}>
            <input placeholder={`Имя *`} className={`input-contact`}/>
            <input placeholder={`Телефон *`} className={`input-contact`}/>
            <input placeholder={`Ссылка на социальную сеть`} className={`input-contact`}/>

            <>
                <input
                    value={selectedTraining || `Тип тренировки *`}
                    onClick={() => setIsTrainingModalOpen(true)}
                    className={`input-contact`}
                    readOnly
                />
                {isTrainingModalOpen && (
                    <div className={`modal-contact`}>
                        <div className={`list-modal-contact`}>
                            <button className={`close`} onClick={() => setIsTrainingModalOpen(false)}></button>
                            {typeTraining.map((item, idx) => (
                                <div className={`element-list-contact`} key={idx}
                                     onClick={() => handleSelectTraining(`${item.name}`)}>{item.name}</div>
                            ))}
                        </div>
                    </div>
                )}
            </>

            <>
                <input
                    type={`text`}
                    value={selectedTrainer || `Тренер *`}
                    onClick={() => setIsTrainerModalOpen(true)}
                    className={`input-contact`}
                    readOnly
                />
                {isTrainerModalOpen && (
                    <div className={`modal-contact`}>
                        <div className={`list-modal-contact`}>
                            <button className={`close`} onClick={() => setIsTrainerModalOpen(false)}></button>
                            {trainers.map((item, idx) => (
                                <div className={`element-list-contact`} key={idx}
                                     onClick={() => handleSelectTrainer(`${item.trainer.name}`)}>{item.trainer.name}</div>
                            ))}
                        </div>
                    </div>
                )}
            </>

            <button className={`btn-red-contact`}>Оставить заявку</button>
        </form>
    );
};
