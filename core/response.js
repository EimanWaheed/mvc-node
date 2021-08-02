/** Class representing response which is displayed on the screen. */
module.exports=class Response{

    /**
     * Sets the html data.
     * @param {string} htmlResponse 
     */
    setContent(htmlResponse){
        this.htmlResponse=htmlResponse;
    }

    /**
     * Gets the html response.
     * @return {string} The html response data.
     */
    getContent(){
        return this.htmlResponse;
    }
}