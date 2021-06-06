export const getObjectPropSafely = (fn: any, defaultValue: any = '') => {
    try {
        return fn();
    } catch (e) {
        return defaultValue;
    }
};