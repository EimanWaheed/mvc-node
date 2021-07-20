module.exports=class Request{
    constructor(){
    }
    static getInstance(){
        if(!Request.instance){
            Request.instance=new Request();
        }
        return Request.instance;
    }
    get getController(){
        return this.controllername;
    }
    get getAction(){
        return this.action;
    }
    set setController(name){
        this.controllername=name;
    }
    set setAction(action){
        this.action=action;
    }
}
//const singletonInstance=new Request();
//Object.freeze(singletonInstance);
//export default singletonInstance;
//module.exports=singletonInstance;

