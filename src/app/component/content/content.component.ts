import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ContentServiceService } from 'src/app/sevice/contentService/content-service.service';

@Component({
  selector: 'app-content [name]',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private content: ContentServiceService, private fb: FormBuilder) { }

  @ViewChild("messageContainer") mContainer!: ElementRef;

  @Input() name: any
  other = null
  profile = "none"
  src = "assets/img/OIP (1).jpg"
  data = [{ name: "raj", con: [{ name: "raj", cons: "hi" }, { name: "you", cons: "hi" }, { name: "you", cons: "he" }] }, { name: "bala", con: [{ name: "raj", cons: "hi" }, { name: "you", cons: "hi" }, { name: "you", cons: "fine" }] }]
  ngOnInit(): void {
    this.content.open.subscribe(val => this.other = val)
    console.log(this.name)
  }

  ngAfterViewChecked() {
    this.mContainer.nativeElement.scrollTop = this.mContainer.nativeElement.scrollHeight;
  }
  chat= this.fb.group({
    input : new FormControl("",[])
  })
  submitFun() {
    let data: any
    let chat = this.chat.get("input")?.value
    if (chat != null) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].name == this.name) {
          data = this.data[i].con

        }
      }
      let obj = { name: "you", cons: chat}
      data.push(obj)
      // this.inpName = ""
    }
  }
  visible(style: any) {
    this.profile = style
  }
}
