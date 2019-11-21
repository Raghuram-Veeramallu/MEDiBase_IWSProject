import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecordsService } from 'src/app/shared/services/records.service';
import { UidService } from 'src/app/shared/services/uid.services';
import { SelectedYearService } from 'src/app/shared/services/selectedYear.service';
//import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  years:Observable<any[]>;

  records: any;

  cards = [{ title: 'First Card'}, { title: 'Second Card'}, { title: 'Third Card'}];
  
  constructor(
     private recordService: RecordsService,
     private uidService: UidService,
     private selectedYrSrv: SelectedYearService,
     //private cardComponent: CardComponent
  ) {
      this.getMedicalRecords();
      console.log(this.selectedYrSrv.getYear());
  }

  getMedicalRecords(){
    this.records = this.recordService.getRecordPerYear(this.uidService.getUid(), this.selectedYrSrv.getYear());
    //this.cardComponent.cday=this.records.;
    console.log(this.records);
  }

  ngOnInit() {
    this.getMedicalRecords();
  }

}
