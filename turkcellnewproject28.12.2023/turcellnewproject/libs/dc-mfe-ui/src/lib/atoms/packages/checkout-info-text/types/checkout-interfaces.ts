export interface CheckoutObject {
    firstMonth:string  
    nextMonth:string 
    firstMonthPrice:string
    nextMonthPrice:string
}

export interface AtomCheckoutProps {
    checkoutElement:CheckoutObject
    onClick:()=>void
}