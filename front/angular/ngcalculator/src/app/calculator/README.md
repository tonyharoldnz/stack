This implements a rather dodgy calculator using Angular.
Sourced from an example at https://www.techiediaries.com/angular-data-event-property-binding/
The original had compile errors because it expected to be able to assign null to this.firstOperand
This has been corrected to enable compilation but the logic is now broken when the AC button is clicked.
This is not a concern as the project is designed to show how Angular works, not to be an actual calculator.

