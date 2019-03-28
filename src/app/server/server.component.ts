import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  ingredientcomp: string;
  ingredients = [];
  success = false;
  fail = false;
  dish: string;
  dish1 = {tomato: 1, egg: 1};
  dish2 = {carrot: 1, cucumber: 1, chicken: 1};
  dish3 = {greenpepper: 1, potato: 1, eggplant: 1};
  i = 0;
  counter1 = 0;
  counter2 = 0;
  counter3 = 0;
  serverId = 10;
  serverStatus = 'offLine';
  counter = 0;
  isLogin = false;
  userName: string;
  students: Student[] = [new Student('Bill Gates', 'Computer Science'),
    new Student('Steve Jobs', 'Computer Science'),
    new Student('Elon Musk', 'Computer Science')];
  addGredient() {
    this.success = false;
    this.fail = false;
    this.ingredients.push(this.ingredientcomp);
    this.ingredientcomp = null;
  }
  checkGredient() {
    for (this.i = 0; this.i < this.ingredients.length; this.i++) {
      if (this.ingredients[this.i] in this.dish1) {
        this.counter1++;
      }
      if (this.ingredients[this.i] in this.dish2) {
        this.counter2++;
      }
      if (this.ingredients[this.i] in this.dish3) {
        this.counter3++;
      }
    }
    if (this.counter1 === 2) {
      this.success = true;
      this.dish = '番茄炒蛋';
    } else if (this.counter2 === 3) {
      this.success = true;
      this.dish = '宫保鸡丁';
    } else if (this.counter3 === 3) {
      this.success = true;
      this.dish = '地三鲜';
    } else {
      this.fail = true;
    }
    this.ingredients.length = 0;
    this.counter1 = 0;
    this.counter2 = 0;
    this.counter3 = 0;
  }
  getServerStatus() {
    return this.serverStatus;
  }

  counterPlus() {
    this.counter ++;
  }

  resetCounter() {
    this.counter = 0;
  }

  login() {
    this.isLogin = true;
  }

  signOut() {
    this.isLogin = false;
  }

  // Event Binding
  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
