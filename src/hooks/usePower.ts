export const usePower = () =>{
    const power =(a:number,b:number):number => {
        let result = 1;
        for(let i = 0; i < Math.abs(b); i++) {
            result *= a;
        }
        return (b<0)? 1/result:result;  /* handeing negative powers */
    }
    return {power};  /* Returns power inside an object, so I can export it as a const */
};