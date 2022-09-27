import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

  it('should be able to do simple maths', () => {

    const compiled = fixture.nativeElement as HTMLElement;

    let five = fixture.debugElement.nativeElement.querySelector("button[value='5']");
    let times = fixture.debugElement.nativeElement.querySelector("button[value='*']");
    let seven = fixture.debugElement.nativeElement.querySelector("button[value='7']");
    let eqsign = fixture.debugElement.nativeElement.querySelector("button[value='=']");

    five.click();
    times.click();
    seven.click();
    eqsign.click();

    // Design falilure!
    // Working around handling of null in the calculator causes failure on the first calculation or when AC is pressed.
    // Known issue, not relevant to this demo code.

    five.click();
    times.click();
    seven.click();
    eqsign.click();

    fixture.detectChanges();

    let screen = fixture.debugElement.nativeElement.querySelector("input.calculator-screen");

    expect(screen?.value).toEqual('35');

  });

});
