import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private db: AngularFireDatabase) { }


  

  // get(saleId): Promise<string>
  // {console.log("reports");
  //   return this.db.object('/report/' + saleId).map((response: Response) => response.json)

   
  // }
   

  getall(saleId)
  {
    return this.db.list('/report/' + saleId)
  }


  create(sale,key)
  {
    // return this.db.list('/report').push(sale);
    const toSend = this.db.list(`/report/${key}/`);
    return toSend.push(sale);
    
  }

  update(sale,saleId){
    this.db.object('/report/' + saleId).update(sale);
  }


}
