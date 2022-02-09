//generate random id
export const uniqIdGenerator = () => {
    const uniqId = () =>
        Math.floor((Math.random() + 1) * 0x10000)
            .toString(16)
            .substring(1);
    return `${uniqId()}-${uniqId()}-${uniqId()}`;
};