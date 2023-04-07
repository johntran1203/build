// Todo list application

// Define the todo item object
function TodoItem(title, description, dueDate, priority, completed) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
    
    }
  
  
  // Define the todo list object
  const todoList = {
    items: [],
  
    // Add a todo item to the list
    addItem: function(item) {
      if (!(item instanceof TodoItem)) {
        throw new Error("Invalid todo item object.");
      }
  
      //complete
    },
  
    // Remove a todo item from the list
    removeItem: function(item) {
      //complete
    },
  
    // Find a todo item in the list by title
    findItemByTitle: function(title) {
      return this.items.find(item => item.title === title);
    },
  
    // Find all todo items in the list that match a given priority
    findItemsByPriority: function(priority) {
      //complete
    },
  
    // Find all todo items in the list that are due on or before a given date
    findItemsDueBefore: function(date) {
      //complete
    },
  
    // Mark a todo item as completed
    completeItem: function(item) {
      if (!(item instanceof TodoItem)) {
        throw new Error("Invalid todo item object.");
      }
  
      //complete
    }
  };
  
  // Test the todo list
  const item1 = new TodoItem("Buy groceries", "Milk, bread, eggs", new Date("2023-04-12"), "High", false);
  //create two more items
  
  todoList.addItem(item1);
  //add 2 more items
  
  console.log(todoList.items); // Output: [TodoItem, TodoItem, TodoItem]
  
  console.log(todoList.items); // Output: [TodoItem, TodoItem]
  
  console.log(todoList.findItemByTitle("Buy groceries")); // Output: TodoItem
  
  console.log(todoList.findItemsByPriority("High")); // Output: [TodoItem]
  
  console.log(todoList.findItemsDueBefore(new Date("2023-04-14"))); // Output: [TodoItem]
  
  todoList.completeItem(item1);
  
  console.log(item1.completed); // Output: true