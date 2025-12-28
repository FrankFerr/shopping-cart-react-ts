export class LocalStorage{

    static saveState<T>(key: string, value: T){
        try{
            const serializedState = JSON.stringify(value)
            localStorage.setItem(key, serializedState)
        }
        catch(err){
            console.log("Errore durante il salvataggio del carrello -> ", err)
        }
    }
    
    static loadState<T>(key: string): T | undefined{
        try{
            const serializedState = localStorage.getItem(key)
    
            if(serializedState === null || serializedState === undefined){
                return undefined
            }
    
            return JSON.parse(serializedState) as T
        }
        catch(err){
            console.log("Errore durante il caricamento del carrello -> ", err)
        }
    }
}