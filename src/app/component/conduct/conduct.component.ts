import { Component, OnInit } from '@angular/core';
import { ContentServiceService } from 'src/app/sevice/contentService/content-service.service';

@Component({
  selector: 'app-conduct',
  templateUrl: './conduct.component.html',
  styleUrls: ['./conduct.component.css']
})
export class ConductComponent implements OnInit {

  constructor(private content : ContentServiceService) { }
  list=[{name:"raj",no:5},{name:"bala",no:5}] 

  ngOnInit() {
    this.list=[{name:"raj",no:5},{name:"bala",no:8}]
    this.order(this.list)
  }

 order(list: { name: string; no: number; }[]) {
  for(let i =0;i<list.length;i++){ 
    for(let l =0;l<list.length;l++){
      if(list[i].no > list[l].no){
        let object = list[i]
        list[i]=list[l]
        list[l] = object
      }
    }
  }
  
}

  fun(name : string){
    this.content.fun(name)
  }
}

