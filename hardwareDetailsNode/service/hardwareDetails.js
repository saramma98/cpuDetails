const si = require('systeminformation');

class HardwareDetails{
    constructor(){}

    getSystemDetails () {
        console.log('inside service system')
        return new Promise((resolve, reject) => {
      
          si.system((err,data)=>{
            if (err){
              reject(err)
              return ;

            }
            console.log("system" +data);
            resolve(data)
          })
        })
      
      }
      getBiosDetails(){
        console.log('inside service bios')

        return new Promise((resolve, reject) => {
          si.bios((err,data)=>{
            if (err){
              reject(err)
              return;
            }
            console.log("bios" +data);
            resolve(data)   })
        })
      
      }
      getBaseboardDetails(){
        
        return new Promise((resolve, reject) => {
          si.baseboard((err,data)=>{
            if (err){
                console.log('inside service base bord reject')

              reject(err)
              return;
            }
            console.log("basebrd" +data);
            resolve(data)   })
        })
      
      }
      getChassisDetails(){
        return new Promise((resolve, reject) => {
          si.chassis((err,data)=>{
             
            if (err){
              reject(err)
              return;
            }
            console.log("chassiss" +data);
            resolve(data)   })
        })
      
      }
      
}


module.exports= HardwareDetails;