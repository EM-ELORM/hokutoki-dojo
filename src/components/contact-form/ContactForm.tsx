import './index.css';
import './index.adaptive.css';
import typeTraining from '@moki/typeTraining.json';
import {FC, useState} from 'react';
import * as yup from 'yup';
import trainers from '@moki/trainers.json';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {sendMessageToTelegram} from "@/service/sendMessageToTelegram.ts";
import {InputMask} from 'primereact/inputmask';

const schema = yup.object().shape({
    name: yup.string().trim().required(`Введите имя`),
    phone: yup.string().matches(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/, `Некорректный номер`).required(`Введите телефон`),
    socialLink: yup
        .string()
        .matches(/^$|^https?:\/\/(t\.me|vk\.com|wa\.me)\/.+$/, `Введите корректную ссылку на Telegram, VK или WhatsApp`)
        .notRequired()
        .nullable(),
    training: yup.string().required(`Выберите тип тренировки`),
    trainer: yup.string().required(`Выберите тренера`),
});

export const ContactForm: FC = () => {
    const [isTrainingModalOpen, setIsTrainingModalOpen] = useState(false);
    const [isTrainerModalOpen, setIsTrainerModalOpen] = useState(false);
    const [trainerId, setTrainerId] = useState<string>('')

    const {
        control,
        handleSubmit,
        setValue,
        reset,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            phone: '',
            socialLink: '',
            training: '',
            trainer: '',
        },
    });

    const onSubmit = async (data: any) => {
        if (trainerId) {
            await sendMessageToTelegram(data, trainerId);
        }
        reset()
    };

    return (
        <form className={`pos-contact-form`} onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name={`name`}
                control={control}
                render={({field}) => (
                    <>
                        <input
                            {...field}
                            placeholder={`Имя *`}
                            className={`input-contact`}
                        />
                        {errors.name &&
                            <span className={`error-contact-message`}>{errors.name.message}</span>}
                    </>
                )}
            />

            <Controller
                name={`phone`}
                control={control}
                render={({field}) => (
                    <>
                        <InputMask
                            {...field}
                            mask={`+7(999)999-99-99`}
                            placeholder={`Телефон *`}
                            className={`input-contact`}
                        />
                        {errors.phone &&
                            <span className={`error-contact-message`}>{errors.phone.message}</span>}
                    </>
                )}
            />

            <Controller
                name={`socialLink`}
                control={control}
                render={({field}) => (
                    <>
                        <input {...field} value={field.value ?? ''} placeholder={`Ссылка на Telegram, VK или WhatsApp`}
                               className={`input-contact`}/>
                        {errors.socialLink &&
                            <span className={`error-contact-message`}>{errors.socialLink.message}</span>}
                    </>
                )}
            />

            <Controller
                name={`training`}
                control={control}
                render={({field}) => (
                    <>
                        <input
                            value={field.value || `Тип тренировки *`}
                            onClick={() => setIsTrainingModalOpen(true)}
                            className={`input-contact`}
                            readOnly
                        />
                        {errors.training &&
                            <span className={`error-contact-message`}>{errors.training.message}</span>}
                    </>
                )}
            />

            {isTrainingModalOpen && (
                <div className={`modal-contact`}>
                    <div className={`list-modal-contact`}>
                        <button className={`close`} onClick={() => setIsTrainingModalOpen(false)}></button>
                        {typeTraining.map((item, idx) => (
                            <div
                                className={`element-list-contact`}
                                key={idx}
                                onClick={() => {
                                    setIsTrainingModalOpen(false);
                                    setValue('training', item.name, {shouldValidate: true});
                                }}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <Controller
                name={`trainer`}
                control={control}
                render={({field}) => (
                    <>
                        <input
                            value={field.value || `Тренер *`}
                            onClick={() => setIsTrainerModalOpen(true)}
                            className={`input-contact`}
                            readOnly
                        />
                        {errors.trainer &&
                            <span className={`error-contact-message`}>{errors.trainer.message}</span>}
                    </>
                )}
            />

            {isTrainerModalOpen && (
                <div className={`modal-contact`}>
                    <div className={`list-modal-contact`}>
                        <button className={`close`} onClick={() => setIsTrainerModalOpen(false)}></button>
                        {trainers.map((item, idx) => (
                            <div
                                className={`element-list-contact`}
                                key={idx}
                                onClick={() => {
                                    setTrainerId(item.trainer.chatId)
                                    setIsTrainerModalOpen(false);
                                    setValue('trainer', item.trainer.name, {shouldValidate: true});
                                }}
                            >
                                {item.trainer.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <button className={`btn-red-contact`}>Оставить заявку</button>
        </form>
    );
};
