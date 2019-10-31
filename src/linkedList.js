class Node {
  constructor(data, next = null ) {
    this.value = data;
    this.next = next;
  }
}


class LinkedList {
   constructor() {
     this.head = null;
     this.size = 0;
   }

   //add element to head

  insertFirst(data) {
     this.head = new Node(data, this.head);
     this.size++;
  }

  //insert element to last

  insertLast(data) {
     var current = this.head;

     if(this.head === null) {
       this.insertFirst(data);
       return;
     }

     while(current.next !== null) {
       current = current.next;
     }
     current.next = new Node(data);
     this.size++;
  }


  // insert at index

  insertAt(data,index) {
     if(index > 0 && index > this.size) {
       return;
     }

     if (index === 0 ) {
        this.insertFirst(data)
        return;
     }

     var current = this.head;
     var previous;
     var count = 0;

     while (index > count) {
       previous = current;
       current = current.next;
       count ++;
     }

     previous.next = new Node(data, current);
     this.size++;
  }


  // remove all

  removeAll() {
     this.head = null;
     this.size = 0;
  }

  // remove element from index

  removeAtIndex(index) {
    if(index > 0 && index > this.size) {
      return;
    }

    var current = this.head;
    var previous;
    var count = 0;


    if (index === 0 ) {
      this.head = current.next;
      this.size--;
      return;
    }

    while (index > count) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = current.next;
    this.size--;



  }

  //reverse linked list

  reverse() {
     let current = this.head;
     let next = null, prev = null;

     while(current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
     }
     this.head = prev;
  }

  //print all elements from linked list

  printAll() {
     var current = this.head;

     while (current) {
       console.log(current.value);
       current = current.next;
     }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);

ll.reverse();
ll.printAll();
