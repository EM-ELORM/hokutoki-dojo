import './index.css';
import './index.adaptive.css'
import trainers from '@moki/trainers.json'
import typeTraining from '@moki/typeTraining.json'
import {FC, useState} from 'react';
import {getImageUrl} from "@/libs/utils.ts";

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
        <form className={`pos-form`}>
            <input type={`text`} placeholder={`Имя *`} className={`input-contact`}/>
            <input type={`text`} placeholder={`Телефон *`} className={`input-contact`}/>
            <input type={`text`} placeholder={`Ссылка на социальную сеть`} className={`input-contact`}/>

            <>
                <input
                    type={`text`}
                    value={selectedTraining || `Тип тренировки *`}
                    onClick={() => setIsTrainingModalOpen(true)}
                    className={`input-contact`}
                    readOnly
                />
                {isTrainingModalOpen && (
                    <div className={`modal`}>
                        <div className={`list-modal`}>
                            <button className={`close`} onClick={() => setIsTrainingModalOpen(false)}
                                    style={{backgroundImage: `url(${getImageUrl(`close.svg`, `svg`)})`}}
                            ></button>
                            {typeTraining.map((item, idx) => (
                                <div className={`element-list`} key={idx}
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
                    <div className={`modal`}>
                        <div className={`list-modal`}>
                            <button className={`close`} onClick={() => setIsTrainerModalOpen(false)}
                                    style={{backgroundImage: `url(${getImageUrl(`close.svg`, `svg`)})`}}
                            ></button>
                            {trainers.map((item, idx) => (
                                <div className={`element-list`} key={idx}
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
