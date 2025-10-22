export const useAdd = () => {
    const add = (a: number, b:number):number => a+b;
    return{add}    /* Returns add inside an object so I can export it as a const */
};