class Node {
  value: number[];
  left: Node | null;
  right: Node | null;

  constructor(value: number[]) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/* class Tree {
  root: Node | null;

  constructor(sortedArray: number[]) {
    this.root = this.buildTree(sortedArray);
  }

  private buildTree(sortedArray: number[]): Node | null {
    if (sortedArray.length === 0) {
      return null;
    }

    const midIdx = Math.floor(sortedArray.length / 2);
    const node = new Node(sortedArray[midIdx]);

    node.left = this.buildTree(sortedArray.slice(0, midIdx));
    node.right = this.buildTree(sortedArray.slice(midIdx + 1));

    return node;
  }
} */

let test = new Node([1, 1]);

let trajectory: number[] = [1, 2, 3];

console.log(test);

export {};
