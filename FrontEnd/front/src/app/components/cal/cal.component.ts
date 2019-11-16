import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.scss']
})


export class CalComponent implements OnInit {

  constructor(public client: HttpClient) {
  }



  inputText = "0"
  num1 = "";
  num2 = "";
  toantu = "";
  button1 = [".", "0", "=", "÷"]
  button2 = ["1", "2", "3", "x"]
  button3 = ["4", "5", "6", "-"]
  button4 = ["7", "8", "9", "+"]
  button5 = ["AC", "Del"]
  isinit = true;


  onclickso(num) {
    if (num == "AC") {
      this.inputText = "0";
      this.isinit = true;
      this.num1 = " "
    }
    else if (num == "Del") {
      if (this.inputText.length == 1) {
        this.inputText = this.inputText.substring(0, this.inputText.length - 1)
        this.inputText = "0"
        this.isinit = true
      }
      else {
        this.inputText = this.inputText.substring(0, this.inputText.length - 1)
      }
    }
    else if (num == "=") {
      this.num2 = this.inputText;
      console.log("so2: " + this.num2);
      console.log(this.inputText);
      this.client.get('http://localhost:3000/calc/' + this.toantu + "/" + this.num1 + "/" + this.num2, {}).subscribe((value) => {
        this.inputText = value['kq']
        
      })
    }
    else if (num == "+" || num == "-" || num == "x" || num == "÷") {
      this.num1 = this.inputText + num
      this.toantu = num
      this.inputText += num;
      console.log("so 1:" + this.num1);
      console.log(this.toantu);
      if (this.isinit == false) {
        this.inputText = ""
      }
    }


    else if (this.isinit) {
      this.inputText = num;
      this.isinit = false;
    }
    else {
      this.inputText += num;

    }
  }


  ngOnInit() {
  }

}
