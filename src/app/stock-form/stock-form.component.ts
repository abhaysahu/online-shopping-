import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs';
import { CategoryService } from '../category.service';


import * as firebase from 'firebase';

interface Photo {
  url: string; 
}



@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  

  photoListStrem: FirebaseListObservable<Photo[]>;

  title: any;
  price: any;
  category: string;
  imageUrl: string;
  imageName: string;
  name: string;

    categories$;
    product: any = {};
    id;
    downloadUrl: string;
    nextAvailableKey: string;
    subscription: Subscription;
    private key: string;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    categoryService: CategoryService, 
    private stockService: StockService,
    private db: AngularFireDatabase) {  


      this.photoListStrem = this.db.list('/photos/list');


 
      this.id = this.route.snapshot.paramMap.get('id');
      console.log("yes")
    
    if (this.id) 
    {
        this.stockService.get(this.id).take(1).subscribe(p => {
        this.product = p
        console.log(this.product)
        this.nextAvailableKey = this.product.imageName
        this.downloadUrl = this.product.imageUrl

      });
      
    }
    else
    {
      this.nextAvailableKey = this.photoListStrem.push({}).key;
    }

      this.categories$ = categoryService.getAllEnglish();
      
    if (this.id) this.stockService.get(this.id).take(1).subscribe(p => this.product = p);
    

    
    
  }

  save(stock){

    console.log(stock);
    if (this.id)  //update part 
    {
        this.stockService.update(this.id, stock);
    }
    
    else 
    {
      this.key=stock.code
        console.log(this.key)
        this.stockService.create(stock,this.key);
    }

    this.router.navigate(['/Stock']);
  }



  delete()
  {

      if(!confirm('Are you sure yow want to delete this product from english?')) return;
      
      this.stockService.delete(this.id);
      const storageRef: firebase.storage.Reference = firebase.storage().ref(`/stock/list/${this.nextAvailableKey}`); 
      storageRef.delete()
      console.log("yes")
      this.router.navigate(['/Stock']);
    
  }


  photoSelectedForList(event: any) {

    const file: File = event.target.files[0];
    const metaData = {'contentType': file.type}
    const storageRef: firebase.storage.Reference = firebase.storage().ref(`/stock/list/${this.nextAvailableKey}`); 
    const uploadTask: firebase.storage.UploadTask = storageRef.put(file, metaData);

   

    console.log("Uploading: ",file.name);

   uploadTask.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
   console.log("Upload is Complete!");
   this.downloadUrl = uploadSnapshot.downloadURL;
   console.log(this.downloadUrl)
  // firebase.database().ref(`/photos/list/${nextAvailableKey}`).set(downloadUrl)
  })

  }

  ngOnInit() {
  }


}
