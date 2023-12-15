export interface RadioButtonObject {
    subscription:string
    commitment:string
    firstMonth?:string  
    nextMonth?:string 
    firstMonthPrice:number
    nextMonthPrice?:number
}

export interface AtomComplexRadioButtonProps {
    radioButtonElement:RadioButtonObject
    onClick:()=>void
}