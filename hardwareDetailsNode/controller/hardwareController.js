
const HardwareDetails = require('../service/hardwareDetails')
 const hwDets = new HardwareDetails();


class HardwareDetailsController{
    constructor(){
       
    }


    
    getdetails= (req,res) =>{

        console.log('inside controller')
       
        const system = hwDets.getSystemDetails().then(res=> console.log('res1'+res)).catch(err=>console.log('erro1'+err));
        const bios = hwDets.getBiosDetails().then(res=> console.log('res2'+res)).catch(err=>console.log('erro2'+err));
        const baseboard= hwDets.getBaseboardDetails().then(res=> console.log('re3'+res)).catch(err=>console.log('erro3'+err));
        const chassis= hwDets.getChassisDetails().then(res=> console.log('res4'+res)).catch(err=>console.log('erro4'+err));

       

        Promise.all(
            [system.catch(error=>{return error;}),
            bios.catch(error => {return error ;}),
            baseboard.catch(error=>{return error;}),
            chassis.catch(error => {return error ;})
            ]
        )
        .then(values =>{

            const hardwareData={
                'systemData':values[0],
                'biosData' : values[1],
                'baseboardData':value[2],
                'chassis':value[3]

            }
            res.json(hardwareData)
        })




        .catch(error => {
             return res.json(error)
            })
    }


}

module.exports=HardwareDetailsController;