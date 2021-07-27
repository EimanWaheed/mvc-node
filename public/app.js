const dispatcher=require('/home/eiman.waheed/Desktop/mvc-node/core/dispatcher.js');

//calling dispatcher
function runApp(){
    //console.log('App is invoked');
    dispatcher.Dispatch();
}

module.exports={
    runApp
};