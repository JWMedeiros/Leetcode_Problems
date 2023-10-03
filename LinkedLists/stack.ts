type SNode<T> = {
    value: T,
    previous?: SNode<T>;
}

class Stack <T> {
    public length: number;
    private head?: SNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = {value: item} as SNode<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }
        node.previous = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if(this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }
        const head = this.head as SNode<T>;
        this.head = head.previous;

        // Free memory if needed.
        head.previous = undefined;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}