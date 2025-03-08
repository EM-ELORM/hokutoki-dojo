import './index.css';
import './index.adaptive.css'
import trainers from '@moki/trainers.json';
import {useLayout} from "@/context/UseLayout.tsx";
import {useEffect, useState} from "react";
import {getImageUrl} from "@/libs/utils.ts";
import {Price} from "@components/price/Price.tsx";
import {TrainerModalForm} from "@components/trainer-form/TrainerModalForm.tsx";
import {Trainer} from "@/interface";

export const TrainerModal = () => {
    const {setIsOpenTrainerModal, trainerId} = useLayout();
    const [trainer, setTrainer] = useState<Trainer | null>(null);

    const trainersData: Trainer[] = trainers;

    useEffect(() => {
        const foundTrainer = trainersData.find(t => t.id === trainerId) || null;
        setTrainer(foundTrainer);
    }, [trainerId, trainersData]);

    return (
        <div className={`trainer-modal-screen`}>
            <div className={`trainer-modal`}>
                <button className={`close`} onClick={() => setIsOpenTrainerModal(false)}></button>
                <div className={`pos-content-trainer-modal`}>
                    <div className={`square-scroll-trainer-modal`}>
                        <div className={`scroll-content-trainer-modal scroll-hide`}>

                            <h1 className={`h1-trainer-modal`}>Тренер</h1>

                            <div className={`center-header-trainer-modal`}>
                                <div className={`pos-header-trainer-modal`}>
                                    <div
                                        className={`img-modal-trainer`}
                                        style={{
                                            backgroundImage: `url('${getImageUrl(`${trainer?.trainer.img}`, `png`)}')`
                                        }}
                                    ></div>
                                    <div className={`pos-but-header-trainer-modal`}>
                                        <button
                                            className={`btn-trainer-modal`}
                                            style={{
                                                backgroundColor: `var(${trainer?.color})`
                                            }}
                                        >
                                            {trainer?.trainer.name}
                                        </button>
                                        <a
                                            href={`tel:${trainer?.trainer.phone}`}
                                            className={`btn-trainer-modal`}
                                            style={{
                                                backgroundColor: `var(${trainer?.color})`
                                            }}
                                        >
                                            {trainer?.trainer.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <h2 className={`h2-trainer-modal`}>Прайс-лист</h2>

                            <Price
                                trainerId={trainerId}
                                textColor={`text-[#000]`}
                                mt={`mt-[0px]`}
                            />

                            <h2 className={`h2-trainer-modal`}>Описание</h2>

                            <div className={`center-header-trainer-modal`}>
                                <div className={`pos-content-desc-trainer-modal`}>
                                    {trainer?.description}
                                </div>
                            </div>

                            <h2 className={`h2-trainer-modal`}>Свяжитесь с тренером</h2>

                            <TrainerModalForm
                                bgButtonTrainer={`${trainer?.color}`}
                                trainerId={`${trainer?.trainer.chatId}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
