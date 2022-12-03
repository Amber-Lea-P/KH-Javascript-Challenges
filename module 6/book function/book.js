const Book = function (title, author, isbn, stock, cost){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.stock = stock;
    this.cost = cost;
  this.summary = () => `${this.title} by ${this.author} (ISBN:${this.isbn}) costs $${this.cost}`;
    
    this.isAvailable = () => (this.stock > 0 ? `${this.title} is available` : `${this.title} is not available at the moment`);
  };
  
  const newBook = new Book('bob', 'batman', 432456, 4, 4.53)
  console.log(newBook.summary());
  console.log(newBook.isAvailable());
  