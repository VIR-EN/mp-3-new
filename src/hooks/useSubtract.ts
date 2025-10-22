export const useSubtract = ()=>{
    const subtract = (a:number, b:number):number => a-b;
    return{subtract};  /* Returns subtract inside an object, so I can export it as a const */
};