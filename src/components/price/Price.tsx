import './index.css'
import './index.adaptive.css'
import trainers from '@moki/trainers.json'
import {FC} from "react";

export const Price: FC = () => {
    const data = trainers

    return (
        data.map((trainer) => (
            <div key={trainer.id} className={`pos-price`}>

                <div className={`pos-btn`}>
                    <button className={`btn-price`} style={{background: `var(${trainer.color})`}}>{trainer.trainer.name}</button>
                </div>

                <div className={`pos-type-training`} style={{borderBottom: `3px solid var(${trainer.color})`}}>
                    <div>Групповые тренировки</div>
                    <div>Индивидуальные тренировки</div>
                </div>

                <div className={`pos-list-group`}>

                    <div className={`pos-type-training adaptive`}
                         style={{borderBottom: `3px solid var(${trainer.color})`}}>
                        <div>Групповые тренировки</div>
                    </div>

                    <div className={`pos-column`}>
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

                    <div className={`pos-type-training adaptive`}
                         style={{borderBottom: `3px solid var(${trainer.color})`}}>
                        <div>Индивидуальные тренировки</div>
                    </div>

                    <div className={`pos-column`}>
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
        ))
    )
}
