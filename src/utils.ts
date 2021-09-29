export const clone = (obj: any) => {
    obj.name = 'clone function';
    return JSON.parse(JSON.stringify(obj));
};