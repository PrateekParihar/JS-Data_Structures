// Binary tree traversal
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  /*
  <=> elements must be comparable
  1. recurse down left subtree        (< case)
  2. recurse down right subtree       (> case)
  3. handle finding a duplicate value (= case)
  4. create a new node     (found a null leaf)
  */
  insert(val) {
    const node = new Node(val);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let currNode = this.root;

    while (true) {
      // console.log("---",currNode)

      if (val < currNode.val) {
        if (!currNode.left) {
          currNode.left = node;
          break;
        }
        currNode = currNode.left;
      }
      if (val > currNode.val) {
        if (!currNode.right) {
          currNode.right = node;
          break;
        }
        currNode = currNode.right;
      }

      if (currNode.val == val) {
        return this;
      }
    }

    return this;
  }

  /*
  Two steps process -
  1. FIND the element, if exits
  2. REPLACE the node we want to remove with its successor (if any) to maintain BST invariants

  BST invariants : left subtree has smaller elements and right subtree has larger 
  
  Find phase :
    In this one of the four things will happen:
      1. Hit a null node (value does not exits)
      2. Comparator value equals to 0 (found it!)
      3. Comparator value less than 0 (the value, if exits, is in the left subtree)
      4. Comparator value greater than 0 (the value, if exits, is in the right subtree)

  Remove phase :
    Four cases:
      1. Node to remove is a leaf node
        No side effect. jsut remove.
      2. Node to remove has a right subtree but no left subtree
      3. Node to remove has a left subtree but no right subtree
        The successor of the node will be the root node of the left/right subtree.
      4. Node to remove has both a left and a right subtree
        The successor can be be the largest value in the left subtree or the smallest value in the right subtree
  */
  remove(val) {
    // If a node is successfully removed, a reference will be received.
    return (!removeNodeHelper(this.root, val) === false);

  }
}

function removeNodeHelper(root,key){
  if(!root){
    // empty tree 
    return false;
  }

  if(key > root.data){
    root.left = removeNodeHelper(root.left, key);
    return root;
  }else if(key > root.data){
    root.right = removeNodeHelper(root.right, key);
    return root;
  }else{

    // case 1 - a leaf node
    if (!root.left && !root.right){
      root = null;
      return root;
    }

    // case 2 & 3 - single child case
    if(!root.left) return root.right;
    if(!root.right) return root.left;

    // case 4 - both child
    let currNode = root.right;
    // get the smallest value in right subtree
    while(currNode.left){
      currNode = currNode.left;
    }

    root.data = currNode.data;
    // delete value from right subtree
    root.right = removeNodeHelper(root.right, currNode.data);
    return root;
  }

}

class BinaryTreeTravesal extends BinarySearchTree {
  preOrder() {

  }

  inOrder() {

  }

  postOrder() {

  }
}



const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)


console.log(JSON.stringify(traverse(tree.root)))

tree.remove(6);
console.log(JSON.stringify(traverse(tree.root)))
function traverse(node) {
  const tree = { val: node.val };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

