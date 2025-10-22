export const useMultiply = ()=>{
  const multiply = (a:number,b:number):number => a*b;
  return{multiply};   /* Returns multiply inside an object so I can export it as a const */
};