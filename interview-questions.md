# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object destructuring?

  Your answer: Destructuring is the act of pulling information from an object or an array to be used in another block of code. This is useful to help keep the code more concise and easier to read.

  Researched answer: It's a Javascript feature that can be used to extract properties and bind them to variables. It's a useful feature that will allow you to use parts of other objects that you may need to use in the current object.



2. What are React lifecycle methods? Provide three examples.

  Your answer: React lifestyle methods are methods that are called in the life cycle of the React app. one of them is render(), another is return(), and I believe the other is the constructor.

  Researched answer: React lifecycle methods are in the lifecycle of the React app and they each act in a way to help manipulate the VDOM. In the stage of Mounting, there is the Constructor() and the render() methods. Render is also used in the Updating part of the lifecycle. And in the Unmounting stage, there is a method called componentWillUnmount() 



3. What is the difference between a class and an object?

  Your answer: A class is something that can contain methods and can inherit methods from other classes. A class can store a lot more information than a regular object. Objects store simple information and attributes they cannot store methods and or functions within them as classes can. There are higher-order functions that can call an object but cannot call a class.

  Researched answer: Essentially a class is a blueprint for an instance that will contain objects. Objects store data on a smaller scale and typically live within classes where they carry out tasks when the Class is called upon


4. What is the difference between a HTML div and a span?

  Your answer: An HTML div is what starts the block of code in HTML and JSX. A button can be stored in a `<div>`

  Researched answer: A div is on the block level and will wrap an entire block of code. As for where the span happens more on an inline-level and is used to wrap small portions of code.



5. What is a React Fragment (or <>) and why would you want to use it?

  Your answer: A React Fragment is typically kept in the return portion of the app. This is the transition from the app to JSX language. Code that is put into the React Fragments that is intended to show and or be interacted with will show in the browser. Also, things in JSX can pull from other apps in the same file structure.

  Researched answer: React Fragments allow other fragments of code to run within them mainly JSX. In the previous question divs and spans were talked about. Those are examples of fragments that can be run between the open and closing brackets in the return part of the code.



6. What does it mean to create a responsive UI? What are three options for creating a responsive design?

  Your answer: to create a responsive UI it needs to work on multiple sized screens and devices. one option is to create a site for a desktop, another is to create an app, and the third is to make a mobile site that can be accessed on a mobile phone.

  Researched answer: To create a responsive design is to have all size screens for different devices in mind when designing and building a website. What this means is that the website should show all of the relevant content on different-sized screens without stretching and or cutting off images or text. In many cases researched a good rule to work on is to start with the mobile screens first and scale-up. Three options are media queries which you design layouts for different media types. Fluid grids will allow your content to move with the changing of the screen size. And one of the crowning jewels and something that was mentioned on many sites researched was to have flexible images. If the HTML container supports it and if the image is flexible it will render to the size of the browser window.



7. What are props in React?

  Your answer: Props in React are methods that are imported from one file to another. When called upon in the React Fragments they will communicate with the other app. Typically they are called with this.props syntax

  Researched answer: Props are arguments that are passed into react components from one component to another. This is typically done with an HTML attribute in the file that it's being passed from. This means the argument is declared in the JSX code in the form of an HTML tag to be called in another app using the name assigned in the originating app with .props added to it.



8. What is `this` in JavaScript?

  Your answer: If you're mentioning the backticks that are encasing the word "this", then you are talking about the method of string interpolation. This makes the process of returning a string with code in it more seamless. example  ` the ${code} is in this sentence`

  Another explanation is that we use `this` when calling methods from an object to be used elsewhere in a react component.

  Researched answer: `this` is a practice in which the programmer can call on another method that lives elsewhere in the same component. Calling it in this way will allow the method that was declared to be used multiple times instead of having to be written over and over again. Props can be used to call this method if it is passed on correctly from the component in which it lives



9. STRETCH: What is a ternary operator in JavaScript?

  Your answer: The ternary operator is a shortcut when it comes to determining a conditional that would have a truthy or falsy outcome. the syntax way more simplified and makes the code more elegant. An example of syntax would be: ("conditional ? outcome: another outcome")

  Researched answer: As mentioned above the ternary operator is a shortcut. To dig deeper into the operator, it is the only Javascript operator to take in three operands. Also, it's typically used when there are only two options or outcomes from the conditional ie an if or else.



10. STRETCH: What is an anonymous function in JavaScript?

  Your answer: A solid guess for this would be that it's a function without a name.

  Researched answer: An anonymous function is a function that does not have a name and often is not accessible after it was created. It is said that they are often arguments that are being passed to higher-order functions or being used for construction the result of a higher-order function that needs to return a function. If the function is being used once or rarely then it may be lighter to use an anonymous function.

  In working on these challenges and searching google for help, I have come across anonymous functions in almost all of the tutorials and articles that I have looked for a solution to the problem I was having. With that being said, using an anonymous function seems to be a good option when trying to show someone how the code works without having to call it later because you're just showing someone how to create the function.



## Looking Ahead: Terms for Next Week
- Ruby- Is a dynamic open-source programming language with a focus on making the code simple to help aid in productivity. The syntax is described as elegant and easy to read and write.
- Object-oriented programming - or OOP is a type of programming that uses chunks of declared code to help complete complex tasks.(Similar to our classes in JavaScript)
- RSpec - is an domain-specific language testing tool that is written in Ruby. (I believe this may be similar to our JS's Jest)
- Instance variable - a variable that can be defined in an initializer and pass data to other classes. (similar to `this` and or props)
- Ruby blocks - anonymous functions that can be passed into methods - reuseable blocks of code.
- Ruby hashes - a collection of key value pairs it is similar to our arrays and may have some similarities to classes in JS as well.
