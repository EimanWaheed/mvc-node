const dispatcher=require(`${process.env.FILEPATH}/core/dispatcher.js`);
/** Class representing running application from single entry point. */
module.exports=class ApplicationRun{
    runApp(){
        console.log('App is invoked');
        const dispatchReq=new dispatcher();
        dispatchReq.dispatchRequest();
    }
}