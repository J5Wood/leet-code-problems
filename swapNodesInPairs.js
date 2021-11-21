var swapPairs = function(head) {
    if(!head) return head
    let currentNode = head
    let nextNode = head.next
    
    if(currentNode && nextNode){
        [currentNode.val, nextNode.val] = [nextNode.val, currentNode.val]
    }
    if(nextNode && nextNode.next) swapPairs(nextNode.next)
    return head
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

a = new ListNode(5)
b = new ListNode(4, a)
c = new ListNode(3, b)
d = new ListNode(2, c)
e = new ListNode(1, d)


console.log(swapPairs(e))
console.log(swapPairs([]))
console.log(swapPairs(new ListNode()))

