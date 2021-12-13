import { Component, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { QAPIService } from '../services/q-api.service';
import { IQusestion } from '../viewModels/i-qusestion';
import { IResult } from '../viewModels/i-result';
import { Ichoice } from '../viewModels/ichoice';

@Component({
  selector: 'app-q-test',
  templateUrl: './q-test.component.html',
  styleUrls: ['./q-test.component.scss']
})
export class QTestComponent implements OnInit {
  qus: IQusestion[] = [];
  choices: Ichoice[] = [];
  score: number = 0;
  message!: string;
  jsonresults: Ichoice[] = [];

  constructor(private api: QAPIService) { }

  // this function to check for is all question answerd or not 
  //if all answerd return the answer correction and score
  sendanswers() {
    //this line check to any question not answerd
    let check = this.choices.find(c => c.value=="")
    if (this.qus.length === this.choices.length && check == null) {
        this.score = this.choices.filter(c => c.status == true).length;
        //calculete score %
        this.score = (this.score / this.qus.length) * 100;
        this.message = `Your Score : ${this.score} %`
        this.jsonresults=this.choices;
    }
  }

  ngOnInit(): void {
    //to retreve data for questions from servece api
    this.api.getqestions().subscribe(paranms => {
      this.qus = paranms;
    })
  }

  //this function assign selected choice in array 
  addAnswer(ans: Ichoice, i: number) {
    this.choices[i] = ans;
  }

}
