import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have all of the digits on the keypad', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const elementArray = compiled.querySelectorAll('.digit');
    var idx = 0;
    expect(elementArray[idx++].textContent).toEqual('7'); 
    expect(elementArray[idx++].textContent).toEqual('8'); 
    expect(elementArray[idx++].textContent).toEqual('9'); 
    expect(elementArray[idx++].textContent).toEqual('4'); 
    expect(elementArray[idx++].textContent).toEqual('5'); 
    expect(elementArray[idx++].textContent).toEqual('6'); 
    expect(elementArray[idx++].textContent).toEqual('1'); 
    expect(elementArray[idx++].textContent).toEqual('2'); 
    expect(elementArray[idx++].textContent).toEqual('3'); 
    expect(elementArray[idx].textContent).toEqual('0');
    
  });

  it('should be able to do simple multiplication', () => {
    verifyCalculation(fixture, '3','*', '9', '27');
  });

  it('should be able to do simple division', () => {
    verifyCalculation(fixture, '25','/', '7', '3.5714285714285716');
  });

  it('should be able to do simple addition', () => {
    verifyCalculation(fixture, '140','+', '68', '208');
  });

  it('should be able to do simple subtraction', () => {
    verifyCalculation(fixture, '137','-', '205', '-68');
  });

  function verifyCalculation(fixture: ComponentFixture<CalculatorComponent>, op1: string, operator: string, op2: string, expected: string): void
  {
    fixture.debugElement.nativeElement.querySelector("button[value='all-clear']").click();
    op1.split('').forEach((digit) => {
      let button = fixture.debugElement.nativeElement.querySelector("button[value='" + digit + "']");
      button.click();
    });
    fixture.debugElement.nativeElement.querySelector("button[value='"+operator+"']").click();
    op2.split('').forEach((digit) => {
      let button = fixture.debugElement.nativeElement.querySelector("button[value='" + digit + "']");
      button.click();
    });
    fixture.debugElement.nativeElement.querySelector("button[value='=']").click();
  
    fixture.detectChanges();
  
    let screen = fixture.debugElement.nativeElement.querySelector("input.calculator-screen");
  
    expect(screen?.value).toEqual(expected);
  }
});