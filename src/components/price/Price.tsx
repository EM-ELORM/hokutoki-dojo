import './index.css'
import './index.adaptive.css'
import trainers from '@moki/trainers.json'
import {FC} from "react";
import {useLayout} from "@/context/UseLayout.tsx";

interface PriceProps {
    trainerId?: number | null;
    textColor?: string | null;
    mt?: string | null;
}

export const Price: FC<PriceProps> = (
    {
        trainerId,
        textColor,
        mt
    }
) => {
    const {handleOpenTrainerModal} = useLayout();
    const data = trainerId ? trainers.filter(trainer => trainer.id === trainerId) : trainers;

    if (trainerId && data.length === 0) {
        return <div>Тренер не найден</div>;
    }

    return (
        <>
            {data.map((trainer) => (
                <div key={trainer.id} className={`pos-price ${mt ? mt : null}`}>

                    {!trainerId && (<div className={`pos-btn`}>
                        <button
                            onClick={() => handleOpenTrainerModal({trainerId: trainer.id})}
                            className={`btn-price`}
                            style={{background: `var(${trainer.color})`}}
                        >
                            {trainer.trainer.name}
                        </button>
                    </div>)}

                    <div className={`pos-type-training ${textColor ? textColor : null}`}
                         style={{borderBottom: `3px solid var(${trainer.color})`}}>
                        <div>Групповые тренировки</div>
                        <div>Индивидуальные тренировки</div>
                    </div>

                    <div className={`pos-list-group ${mt ? mt : null}`}>

                        <div className={`pos-type-training adaptive ${textColor ? textColor : null}`}
                             style={{borderBottom: `3px solid var(${trainer.color})`}}>
                            <div>Групповые тренировки</div>
                        </div>

                        <div className={`pos-column ${textColor ? textColor : null}`}>
                            <div className={`content-column`}>
                                {trainer.price_list.group_training.map((group, index) => (
                                    <span key={index}>{group.months} мес. тренировок</span>
                                ))}
                            </div>
                            <div className={`content-column`}>
                                {trainer.price_list.group_training.map((group, index) => (
                                    <span key={index}>{group.price} рублей</span>
                                ))}
                            </div>
                        </div>

                        <div className={`border-column-price`} style={{
                            borderLeft: `3px solid var(${trainer.color})`,
                            borderTop: `3px solid var(${trainer.color})`
                        }}></div>

                        <div className={`pos-type-training adaptive ${textColor ? textColor : null}`}
                             style={{borderBottom: `3px solid var(${trainer.color})`}}>
                            <div>Индивидуальные тренировки</div>
                        </div>

                        <div className={`pos-column ${textColor ? textColor : null}`}>
                            <div className={`content-column`}>
                                {trainer.price_list.individual_training.map((ind, index) => (
                                    <span key={index}>{ind.count} {ind.count === 1 ? `тренировка` : `тренировок`}</span>
                                ))}
                            </div>
                            <div className={`content-column`}>
                                {trainer.price_list.individual_training.map((ind, index) => (
                                    <span key={index}>{ind.price} рублей</span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </>
    )
}