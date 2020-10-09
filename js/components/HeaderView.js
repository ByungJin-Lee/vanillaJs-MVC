import View from "./View.js"

class vHeader extends View{    
    constructor(){
        //부모 호출
        super();
        //log tag   
        this.tag = "[vHeader]";        
        this.inputElement = document.createElement('input', {type:'text'})
        this.displayElement = document.createElement('span')
        //render view
        this.render();
        
    }    
    connectedCallback(){
        console.log(this.tag + " add Element");
    }
    render(){        
        //render view function        
        var container = document.createElement('header');        
        if(this.hasAttribute('text'))
            container.textContent = this.getAttribute('text');
        //container
        if(this.hasAttribute('placeholder-input'))
            this.inputElement.placeholder = this.getAttribute('placeholder-input')
        this.bindInputEvent()
            //binding Event
        container.appendChild(this.inputElement)
        container.appendChild(this.displayElement)
        //spanButton
        this.appendChild(container)        
    }
    bindInputEvent()
    {                
        this.inputElement.addEventListener('keyup', (e)=>this.onInput(e))
    }
    onInput(e){
        if(e.keyCode == 13) e.returnValue = false;
        this.displayElement.textContent = this.inputElement.value;
        this.emit('@submit', {input : this.inputElement.value})
    }
    static self(){
        return this
    }
}

export default vHeader