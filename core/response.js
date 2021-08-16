/** Class representing the response which has the property of htmlResponse, for the purpose 
 * of setting and getting the rendered html response. This class is responsible for setting 
 * the property of the response instance. The significance of this class lies in setting and 
 * getting the response data which will be mandatory for displaying the data to the screen.
 */
class Response {

    /**
     * Sets the html data.
     * @param {string} htmlResponse 
     */
    setContent(htmlResponse) {
        this.htmlResponse = htmlResponse;
    }

    /**
     * Gets the html response.
     * @returns {string} The html response data.
     */
    getContent() {
        return this.htmlResponse;
    }

    /**
     * Sets the status code for writing data.
     * @param {number} statusCode 
     */
    setStatusCode(statusCode) {
        this.statusCode = statusCode;
    }

    /**
     * Gets the status code.
     * @returns {number} The status code.
     */
    getStatusCode() {
        return this.statusCode;
    }

    /**
     * Sets the content type for writing data.
     * @param {string} contentType
     */
    setContentType(contentType) {
        this.contentType = contentType;
    }

    /**
     * Gets the content type.
     * @returns {number} The content type.
     */
    getContentType() {
        return this.contentType;
    }
}
module.exports = Response;