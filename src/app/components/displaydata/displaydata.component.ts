import { Component } from '@angular/core';
import { Dispdata } from 'src/app/classes/dispdata';
import { DataserviceService } from 'src/app/services/dataservice.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent {
  fileName= 'ExcelSheet.xlsx';
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
  details: Dispdata[] = this.dataserv.getTrainee().details;
  constructor(private dataserv:DataserviceService){}
  ngOnInit():void{
    this.getDetails();
  }
   getDetails(){
    this.dataserv.getTraineeTable().subscribe(data=>{
      this.details=data;
      console.log(this.details);
    });
  }
}