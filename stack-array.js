// Lets start by creating a Stack Class
class Stack {
    constructor() {
        this.items = [] //1 this is our step #1
    } // Essentially we need a data structure that will store the elements of the stack, this is done by using an Array this.items = []
    push(element) {
        this.items.push(element); // .push method is responsible for adding new elements to the stack, but we can only add new elements to the top of the stack, which is the end of the stack
    }
    pop() {
        return this.items.pop(); // .pop() is responsible from removing items from the top of the stack which is the last item added to the stack following the LIFO principles (Last in First Out)
    } // These are the only methods available for Adding and Removing items from Our Array
    peek() {
        return this.items[this.items.length - 1]; // The .peek() method allows us to know what the last element added to our stack was
    } // We are a subtracting by -1 because we want an ordinal count and not a cardinal count
    isEmpty () {
        return this.items.length === 0;
    } // This Method checks to see if the stack is Empty. If it is empty then it returns True and if the Stack is not Empty then we are returned a False!
    size() { // We are implementing a Length for our Stack but instead in a Stack we use the term 'size()'
        return this.items.length;
    } 
    clear() { // the clear() method simply empties the stack, and removes all of its elements
        this.items = []; // this is an altenative to calling the .pop() method which we could use to empty until our stack is completely empty
    } // Great! And now we are Finished! Our Stack Class is Implemented!
    // Now We Are Going to Learn how to use the Stack Class that we have just created
    // First step is to Instantiate the Stack Class that we have just created
}      
const stack = new Stack ();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peek()); // now lets add another element
stack.push(11);
console.log(stack.size()); // This is that size() method we created earlier that is a resemblance of .length() for arrays;
console.log(stack.isEmpty()); // This gives us false because our stack is not empty hehe lol
stack.push(15); // Now lets remove 2 items from our Stack by envoking the .pop() method!
stack.pop();
stack.pop();
console.log(stack.size()); // now We will have an output of 2, because we have removed 15, and 11. Remember LIFO. so our count was 4.15 3.11 2.8 1.5