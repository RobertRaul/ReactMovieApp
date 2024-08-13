export class Formatter{
    public static currency(valor:number):string{
        return new Intl.NumberFormat('en-US',{
            style:'currency',
            currency:'USD'
        }).format(valor)
    }
}