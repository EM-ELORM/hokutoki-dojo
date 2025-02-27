export const getImageUrl = (imageName: string, type: 'svg' | 'png') => {
    return `${import.meta.env.BASE_URL}/img/${type}/${imageName}`;
};