// type DNode<T> = {
//     value: T,
//     prev?: DNode<T>,
//     next?: DNode<T>,
// }

// class DoublyLinkedList<T> {
//     public length: number;
//     private head?: DNode<T>;

//     constructor() {
//         this.length = 0;
//     }

//     prepend(item: T): void {

//     }
//     insertAt(item: T, idx: number): void {

//     }
//     append(item: T): T | undefined {

//     }
//     remove(item: T): T | undefined {

//     }
//     get(idx: number): T | undefined {
//         let curr = this.head;
//         for (let i = 0; i < idx && curr; i++) {
//             curr = curr.next;
//         }
//         return curr?.value;
//     }
//     removeAt(idx: number): T | undefined {

//     }
// }