# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* triggers OnClick()
* onClick handles handleAdd() method
*handleAdd() dispatchs addOne() method in Actions/index.js which in turn return type(ADD_ONE) invokes the reducer
* And in reducer based on the type in switch statement that case action is executed(here increments by 1)and updates the state and returns the value to App.js to display

...

* TotalDisplay shows the total plus 1.
