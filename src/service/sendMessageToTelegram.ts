import {dataProps} from "@/interface";
import {getChatIdFromEnv} from "@/libs/utils";
import {toast} from "react-toastify";

export const sendMessageToTelegram = async (
    data: dataProps,
    chatKey: string
): Promise<void> => {
    const BOT_URL = import.meta.env.VITE_BOT_URL;
    const BOT_ID = import.meta.env.VITE_BOT_ID;

    const chatId = getChatIdFromEnv(chatKey);

    if (!chatId) {
        console.error(`Ошибка: chatId для ключа ${chatKey} не найден`);
        return;
    }

    const text = `Новая заявка на сайте Hokutoki Dojo:\n\n` +
        `<b>Имя:</b> ${data.name}\n` +
        `<b>Контакты:</b> ${data.phone}\n` +
        `<b>Социальная ссылка:</b> <a href="${data.socialLink || '#'}">${data.socialLink || 'Ссылка не указана'}</a>\n` +
        `<b>Тренировка:</b> ${data.training}`;

    const message = encodeURIComponent(text);

    const url = `${BOT_URL}${BOT_ID}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${message}`;

    try {
        const response = await fetch(url);
        const result = await response.json();
        if (result.ok) {
            toast.success(`Заявка успешно отправилась!`)
        } else {
            console.error('Ошибка отправки сообщения:', result.description);
        }
    } catch (error) {
        console.error('Ошибка при запросе:', error);
    }
};
