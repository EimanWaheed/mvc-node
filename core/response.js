
module.exports=class Response{
    setContent(htmlResponse){
        this.htmlResponse=htmlResponse;
    }
    getContent(){
        return this.htmlResponse;
    }
}