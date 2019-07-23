import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { TranslateService, LangChangeEvent } from 'ng2-translate';
import { CookieService } from 'ngx-cookie-service';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';
import { Subscription } from 'rxjs';



interface Photo { 
  url: string; 
} 



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {



  photoListStrem: FirebaseListObservable<Photo[]>;

  title: any;
  price: any;
  category: string;
  imageUrl: string;
  imageName: string;
  name: string;

    categories$; 
    product:any={};
    id;
    language = "";
    browserLang = "";
    downloadUrl: string;
    nextAvailableKey: string;
    subscription: Subscription;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private translate: TranslateService,
    private cookie: CookieService,
    private productService: ProductService,
    private db: AngularFireDatabase) {  


      this.photoListStrem = this.db.list('/photos/list');



      this.id = this.route.snapshot.paramMap.get('id');
    
    if (this.id) 
    {
      this.productService.getBoth(this.id).take(1).subscribe(p => {
        this.product = p
        this.nextAvailableKey = this.product.imageName
        this.downloadUrl = this.product.imageUrl

      });
      
    }
    else
    {
      this.nextAvailableKey = this.photoListStrem.push({}).key;
    }

    translate.onLangChange.subscribe(lang=>{
      this.browserLang = lang;
  })

  this.language = this.cookie.get("language")
    
    
      this.categories$ = categoryService.getAllEnglish();
      this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.getBoth(this.id).take(1).subscribe(p => this.product = p);

    
  }

  save(product){

    console.log(product);
    if (this.id)  //update part 
    {
        this.productService.updateBoth(this.id, product); 

      this.subscription = (this.productService.getAllBoth())
      .subscribe(p => this.product = p);

    }
    else 
    {
        this.productService.createBoth(product, product.code);
      
    }

    this.router.navigate(['/admin/products']);
  }

  delete()
  {
      if(!confirm('Are you sure yow want to delete this product from english?')) return;
      
      this.productService.deleteBoth(this.id);
      const storageRef: firebase.storage.Reference = firebase.storage().ref(`/photos/list/${this.nextAvailableKey}`); 
      storageRef.delete()
      this.router.navigate(['/admin/products']);
    
  }


  photoSelectedForList(event: any) {

    const file: File = event.target.files[0];
    const metaData = {'contentType': file.type}
    const storageRef: firebase.storage.Reference = firebase.storage().ref(`/photos/list/${this.nextAvailableKey}`); 
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

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.browserLang = event.lang
      console.log(this.browserLang);

      if(this.browserLang === "en" || this.browserLang === "")
      {
        
        this.id = this.route.snapshot.paramMap.get('id');
        this.categories$ = this.categoryService.getAllEnglish();
      if (this.id) this.productService.getBoth(this.id).take(1).subscribe(p => this.product = p);
  
      }
  
      else
      {
        this.categories$ = this.categoryService.getAllEnglish();
        this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.productService.getBoth(this.id).take(1).subscribe(p => this.product = p);
  
      }
      
  });
  }

}
