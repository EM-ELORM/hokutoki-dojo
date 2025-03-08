export const getImageUrl = (imageName: string, type: 'svg' | 'png') => {
    return `${import.meta.env.BASE_URL}/img/${type}/${imageName}`;
};

export const getChatIdFromEnv = (chatKey: string): string | null => {
    const chatId = import.meta.env[`${chatKey}`];
    return chatId || null;
};