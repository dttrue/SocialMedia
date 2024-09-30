export const getFontFamily = (baseFont = 'Inter', weight) => {
    switch (weight) {
        case '100':
            return `${baseFont}-Thin.ttf`;
        case '200':
            return `${baseFont}-ExtraLight.ttf`;
        case '300':
            return `${baseFont}-Light.ttf`;
        case '400':
            return `${baseFont}-Regular.ttf`;
        case '500':
            return `${baseFont}-Medium.ttf`;
        case '600':
            return `${baseFont}-SemiBold.ttf`;
        case '700':
            return `${baseFont}-Bold.ttf`;
        case '800':
            return `${baseFont}-ExtraBold.ttf`;
        case '900':
            return `${baseFont}-Black.ttf`;
        default:
            return `${baseFont}-Regular.ttf`;
    }
};
