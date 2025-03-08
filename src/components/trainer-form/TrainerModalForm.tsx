import './index.css'
import './index.adaptive.css'
import {TrainerModalProps} from "@/interface";
import typeTraining from '@moki/typeTraining.json'
import {FC, useState} from 'react';
import * as yup from "yup";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {sendMessageToTelegram} from "@/service/sendMessageToTelegram.ts";
import {InputMask} from "primereact/inputmask";

const schema = yup.object().shape({
    name: yup.string().trim().required(`Введите имя`),
    phone: yup.string().matches(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/, `Некорректный номер`).required(`Введите телефон`),
    socialLink: yup
        .string()
        .matches(/^$|^https?:\/\/(t\.me|vk\.com|wa\.me)\/.+$/, `Введите ссылку на Telegram, VK или WhatsApp`)
        .notRequired()
        .nullable(),
    training: yup.string().required(`Выберите тип тренировки`),
});

export const TrainerModalForm: FC<TrainerModalProps> = (
    {
        bgButtonTrainer,
        trainerId
    }
) => {
    const [isTrainingModalOpen, setIsTrainingModalOpen] = useState(false);

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
        },
    });

    const onSubmit = async (data: any) => {
        console.log(data)
        if (trainerId) {
            await sendMessageToTelegram(data, trainerId);
        }
        reset()
    };

    return (
        <form className={`pos-trainer-form`} onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name={`name`}
                control={control}
                render={({field}) => (
                    <>
                        <input
                            {...field}
                            placeholder={`Имя *`}
                            className={`input-trainer`}
                        />
                        {errors.name &&
                            <span className={`error-trainer-message`}>{errors.name.message}</span>}
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
                            className={`input-trainer-phone`}
                        />
                        {errors.phone &&
                            <span className={`error-trainer-message`}>{errors.phone.message}</span>}
                    </>
                )}
            />

            <Controller
                name={`socialLink`}
                control={control}
                render={({field}) => (
                    <>
                        <input
                            {...field}
                            value={field.value ?? ''}
                            placeholder={`Ссылка на Telegram, VK или WhatsApp`}
                            className={`input-trainer`}
                        />
                        {errors.socialLink &&
                            <span className={`error-trainer-message`}>{errors.socialLink.message}</span>}
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
                            className={`input-trainer`}
                            readOnly
                        />
                        {errors.training &&
                            <span className={`error-trainer-message`}>{errors.training.message}</span>}
                    </>
                )}
            />


            {isTrainingModalOpen && (
                <div className={`modal-trainer`}>
                    <div className={`list-modal-trainer`}>
                        <button className={`close`} onClick={() => setIsTrainingModalOpen(false)}></button>
                        {typeTraining.map((item, idx) => (
                            <div className={`element-list-trainer`} key={idx}
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

            <button className={`btn-trainer`} style={{background: `var(${bgButtonTrainer})`}}>
                Оставить заявку
            </button>
        </form>
    );
};
