export const useDivide =() =>{
    const divide = (a:number,b:number):number | string =>
    (b === 0)? "error division by zero": a/b;
    return{divide};    /* Returns divide inside an object so I can export it as a const */
};