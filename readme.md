**#1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
Answer: getElementsByID catches the html element by the unique ID of the element where getElementsByClassName catches by class names and querySelector/querySelectorAll can catch a element by any selectors.

**#2. How do you create and insert a new element into the DOM?**
Answer: We first create the element using createElement function and store it into a variable then we insert content into it, then we find the target element and append it.

**#3. What is Event Bubbling? And how does it work?**
Answer: Event bubbling is a series of event which starts from the target element and then goes by parent event, grandparent event, great grand parent event and so on. If 


**#4. What is Event Delegation in JavaScript? Why is it useful?**
Answer: Event Delegation is a method where a event is called on parent elements but at the same time, this same event call can manage all it's children and nested children events. It is useful in many ways specially it helps to write less and clean code which helps to consume less memory.