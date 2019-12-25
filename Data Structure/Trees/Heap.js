
class MaxBinaryHeap {

    constructor() {
        this.list = [];
    }

    insert(val) {
        /*
        1.  Insert val at the end of the array list
        2.  Heapifyup/BubbleUp
            a)  Get the parent index - floor((i-1)/2)  --> i is child indices
            b)  Compare child and parent. If child is greater than parent then swap
        */
        //nullcheck
        if(!val) return this.list;
        //push the value into the list
        this.list.push(val);
        let childIndex = this.list.length - 1;
        let parentIndex = Math.floor((childIndex - 1) / 2);
        // bubbleup or HeapifyUp
        while (childIndex > 0) {
            this.bubbleUp(childIndex, parentIndex, this.list);
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex - 1) / 2);
        }
        return this.list;
    }

    bubbleUp(childIndex, parentIndex, list) {
        let child = list[childIndex];
        let parent = list[parentIndex];
        if(child>parent){
            //swap
            [list[childIndex],list[parentIndex]] = [list[parentIndex],list[childIndex]];
        }
        return;
    }

    remove() {
        /*
        1)  Replace last element of list with root(first element)
        2)  HeapifyDown/BubbleDown
            a) compare parent with its child. --> child (2i +1) and (2i +2) --> i is parentindex
            b) if child is greater than parent than swap
            c) if both child is grater than parent than swap bigger child with parent
        */
       let length = this.list.length;
       if(length < 0) return undefined;
       //swap root with last element
       [this.list[0],this.list[length -1]] = [this.list[length -1],this.list[0]];
       let root = this.list.pop(); // to be returned it end
       this.bubbleDownIterative(0);
       return root;
    }


    //[ 20, 9, 15, 1, 8, 5, 4 ]
    // recursive solution
    bubbleDown(index){
        /*
        1)  set left,right ans largest index
        2)  find the laegest child and set largest to index
        3)  Do Swap and call function recursivly to further bubble down
        */

        let left = 2*index +1,
            right = 2*index +2,
            largest = index;
        const length = this.list.length;

        // if left child is gretaer than parent
        if(left < length && this.list[largest] < this.list[left]){
            largest = left;
        }
        // if right child is gretaer than parent
        if(right < length && this.list[largest] < this.list[right]){
            largest = right;
        }

    // do swap with
        if(index !== largest){
            [this.list[index],this.list[largest]] = [this.list[largest],this.list[index]];
            this.bubbleDown(largest);
        }

        return;
    }

    // bubble down iterative


    bubbleDownIterative(index){
        /*
        1)  set left,right ans largest index
        2)  find the laegest child and set largest to index
        3)  Do Swap and call function recursivly to further bubble down
        */
       let largest = index;
       const length = this.list.length;
        while(true){
            let left = 2*largest +1,
                right = 2*largest +2;
            

            // if left child is gretaer than parent
            if(left < length && this.list[largest] < this.list[left]){
                largest = left;
            }
            // if right child is gretaer than parent
            if(right < length && this.list[largest] < this.list[right]){
                largest = right;
            }

            // do swap with
            if(index === largest) break;
            [this.list[index],this.list[largest]] = [this.list[largest],this.list[index]];
        }
    }

}

let maxheap = new MaxBinaryHeap();
maxheap.insert(5);
maxheap.insert(1);
maxheap.insert(9);
maxheap.insert(15);
maxheap.insert(8);
maxheap.insert(20);
maxheap.insert(4);
console.log(maxheap.insert())
console.log(maxheap.remove())
console.log(maxheap.remove())
console.log(maxheap.remove())
console.log(maxheap.remove())
