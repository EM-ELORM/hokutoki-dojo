import {dataProps} from "@/interface";
import {toast} from "react-toastify";

export const sendMessageToTelegram = async (
    data: dataProps,
    chatKey: string
): Promise<void> => {
    const SEND_URL = `http://localhost:4000/send`;

    const requestBody = {
        name: data.name,
        phone: data.phone,
        socialLink: data.socialLink,
        training: data.training,
        chatKey: chatKey,
    };

    try {
        const response = await fetch(SEND_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });
        const result = await response.json();
        if (result === true || result.ok) {
            toast.success(`Заявка успешно отправилась!`)
        } else {
            console.error('Ошибка отправки сообщения:', result.description);
        }
    } catch (error) {
        console.error('Ошибка при запросе:', error);
    }
};
