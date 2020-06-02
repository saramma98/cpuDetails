import { Component, OnInit } from '@angular/core';
import{HardwareDetService} from '../service/hardware-det.service';
import{HardwareContent} from '../class/HardwareContent';
import { Key } from 'protractor';

@Component({
  selector: 'app-hardware-details',
  templateUrl: './hardware-details.component.html',
  styleUrls: ['./hardware-details.component.css']
})
export class HardwareDetailsComponent implements OnInit {

  systemDetails:any;
  biosDetails:any;
  baseboardDetails:any;
  chassisDetails:any;

  systemData:HardwareContent[]=[];
  biosData:HardwareContent[]=[];
  baseboardData:HardwareContent[]=[];
  chassisData:HardwareContent[]=[];
   



  constructor( private hardwareDetService: HardwareDetService) { }

  ngOnInit(): void {
    this.getHardwareDetails();
  }

  getHardwareDetails(){
    this.hardwareDetService.getHardwareDetails().subscribe((response:any)=>{
      console.log(response);
      this.details(response);
    })

  }
  details(response){

    var keyValue=[];
    console.log('**************');
    console.log(response);

    

      this.systemDetails= response.systemData;
      this.biosDetails=response.biosData;
      this.systemDetails= response.baseboardData;
      this.chassisDetails=response.chassisData;
      console.log(this.systemDetails);
      console.log(this.biosDetails);

      for( let c in this.systemDetails){
        
        console.log("qwerty" + c );
        console.log("12345" +this.systemDetails[c]);
        const cpuD: HardwareContent={
          name : c,
          value: this.systemDetails[c] 
        }
        this.systemData.push(cpuD);
        }

        for(let b in this.biosDetails){
          const cpuD:HardwareContent={
            name: b,
            value: this.biosDetails[b]
          }
          this.biosData.push(cpuD);
        }
        for(let b in this.baseboardDetails){
          const cpuD:HardwareContent={
            name: b,
            value: this.baseboardDetails[b]
          }
          this.baseboardData.push(cpuD);
        } 
        for(let b in this.chassisDetails){
          const cpuD:HardwareContent={
            name: b,
            value: this.chassisDetails[b]
          }
          this.chassisData.push(cpuD);
        } 
      }
      
    }

    
