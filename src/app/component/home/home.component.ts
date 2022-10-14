import { Component, OnInit, Input } from '@angular/core';
import { ContentServiceService } from 'src/app/sevice/contentService/content-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private content: ContentServiceService) { }

  con_name = ""
  other = "raj"
  profile = "none"
  src = "assets/img/OIP (1).jpg"
  data = [{ name: "raj", con: [{ name: "raj", cons: "hi" }, { name: "you", cons: "hi" }, { name: "you", cons: "he" }] }, { name: "bala", con: [{ name: "raj", cons: "hi" }, { name: "you", cons: "hi" }, { name: "you", cons: "fine" }] }]
  datas: any
  inpName = ""
  ngOnInit(): void {

    this.content.open.subscribe(val => this.con_name = val)
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].name == this.con_name) {
          this.datas = this.data[i].con
          
        }
    }
  }
  
 submitFun() {
    let obj = { name: "you", cons: this.inpName }
    this.datas.push(obj)
    window.scrollTo(0, document.body.scrollHeight)
    console.log(document.body.scrollHeight)
  }
  visible(style:any) {
    this.profile=style
  }

}
