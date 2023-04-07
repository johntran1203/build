// Todo list application

// Define the todo item object
function TodoItem(title, description, dueDate, priority, completed) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
    
    }
  
  const todoList = {
    items: [],
  
    // Add a todo item to the list
    addItem: function (item) {
      if (!(item instanceof TodoItem)) {
        throw new Error("Invalid todo item object.");
      }
  
      //complete
      return this.items.push(item)
    },
  
    // Remove a todo item from the list
    removeItem: function (item) {
      //complete
      return this.items.pop()
    },
  
    // Find a todo item in the list by title
    findItemByTitle: function (title) {
      return this.items.find((item) => item.title === title);
    },
  
    // Find all todo items in the list that match a given priority
    findItemsByPriority: function (priority) {
      return this.items.filter((item) => item.priority === "High");
      //complete
    },
  
    // Find all todo items in the list that are due on or before a given date
    findItemsDueBefore: function (date) {
      //complete
      return this.items.filter((item) => item.dueDate <= date);
    },
  
    // Mark a todo item as completed
    completeItem: function (item) {
      if (!(item instanceof TodoItem)) {
        throw new Error("Invalid todo item object.");
      }
      //complete
      return item.completed = true
  
    },
  }
  const item1 = new TodoItem(
    "Buy groceries",
    "Milk, bread, eggs",
    new Date("2023-04-12"),
    "High",
    false
  );
  //create two more items
  const item2 = new TodoItem(
    "make dinner",
    "rice, chicken, carrots",
    new Date("2023-04-07"),
    "High",
    true
  );
  
  const item3 = new TodoItem(
    "trash",
    "take out trash",
    new Date("2023-04-06"),
    "Low",
    false
  );
  
  todoList.addItem(item1);
  todoList.addItem(item2);
  todoList.addItem(item3);
  
  

console.log(todoList.items); // Output: [TodoItem, TodoItem, TodoItem]

console.log(todoList.items); // Output: [TodoItem, TodoItem]

console.log(todoList.findItemByTitle("Buy groceries")); // Output: TodoItem

console.log(todoList.findItemsByPriority("High")); // Output: [TodoItem]

console.log(todoList.findItemsDueBefore(new Date("2023-04-14"))); // Output: [TodoItem]

todoList.completeItem(item1);

console.log(item1.completed); // Output: true
