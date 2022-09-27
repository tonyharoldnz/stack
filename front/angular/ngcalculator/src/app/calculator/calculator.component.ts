import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  currentNumber = '0';
  firstOperand = 0;
  firstOperandInitialised = false;
  operator = '';
  waitForSecondNumber = false;

  ngOnInit(): void {
  }
  public getNumber(v: string){
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0' ? this.currentNumber = v: this.currentNumber += v;
    }
  }
  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }
  
  private doCalculation(op: string , secondOp: number){
    console.log(this.firstOperand, op, secondOp);
    switch (op){
      case '+':
      return this.firstOperand += secondOp; 
      case '-': 
      return (this.firstOperand -= secondOp);
      case '*': 
      return this.firstOperand *= secondOp; 
      case '/': 
      return this.firstOperand /= secondOp; 
      case '=':
      return secondOp;
      default:
        return 0 ; 
     }
  }
  public getOperation(op: string){

    if(this.firstOperandInitialised === false){
      this.firstOperand = Number(this.currentNumber);
      this.firstOperandInitialised = true;

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
      this.firstOperandInitialised = true;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

  }
  public clear(){
    this.currentNumber = '0';
    this.firstOperand = 0;
    this.firstOperandInitialised = false;
    this.operator = '';
    this.waitForSecondNumber = false;
  }
}
