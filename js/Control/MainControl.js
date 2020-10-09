import vHeader from "../components/HeaderView.js"

const tag = "[MainControl]"

export default {
    init(){        
        console.log(tag + "init");
        customElements.define('v-header', vHeader);
        
        //submit event Listener
        document.addEventListener('@submit', (e)=>{
            this.onsubmit(e.detail.input)
        })
    },
    onsubmit(data){
        console.log(data)
    }
}