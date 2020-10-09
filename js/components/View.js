class View extends HTMLElement{
    constructor(){
        super()                
    }    
    emit(eName, data)
    {
        const cEvent = new CustomEvent(eName, {detail:data})
        document.dispatchEvent(cEvent)
        return this
    }    
}

export default View