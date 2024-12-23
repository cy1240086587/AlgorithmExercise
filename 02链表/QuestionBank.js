// 初始化链表
class ListNode {
    val
    next = null
    constructor(value) {
        this.val = value
        this.next = null
    }
}

// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
// 示例 1：
// 输入：head = [1,2,6,3,4,5,6], val = 6
// 输出：[1,2,3,4,5]
// 示例 2：
// 输入：head = [], val = 1
// 输出：[]
// 示例 3：
// 输入：head = [7,7,7,7], val = 7
// 输出：[]
// 提示：
// 列表中的节点数目在范围 [0, 104] 内
// 1 <= Node.val <= 50
// 0 <= val <= 50
var removeElements = function (head, val) {
    const newListNode = new ListNode(0, head)

    let newHeadNode = newListNode

    while (newHeadNode.next) {
        if (newHeadNode.next.val == val) {
            newHeadNode.next = newHeadNode.next.next
            continue
        }
        newHeadNode = newHeadNode.next
    }

    return newListNode.next
};


// 你可以选择使用单链表或者双链表，设计并实现自己的链表。
// 单链表中的节点应该具备两个属性：val 和 next 。val 是当前节点的值，next 是指向下一个节点的指针/引用。
// 如果是双向链表，则还需要属性 prev 以指示链表中的上一个节点。假设链表中的所有节点下标从 0 开始。
// 实现 MyLinkedList 类：
// MyLinkedList() 初始化 inkedList 对象。
// int get(int index) 获取链表中下标MyL为 index 的节点的值。如果下标无效，则返回 -1 。
// void addAtHead(int val) 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
// void addAtTail(int val) 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
// void addAtIndex(int index, int val) 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
// void deleteAtIndex(int index) 如果下标有效，则删除链表中下标为 index 的节点。
// 示例：
// 输入
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// 输出
// [null, null, null, null, 2, null, 3]
// 解释
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
// myLinkedList.get(1);              // 返回 2
// myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
// myLinkedList.get(1);              // 返回 3
// 提示：
// 0 <= index, val <= 1000
// 请不要使用内置的 LinkedList 库。
// 调用 get、addAtHead、addAtTail、addAtIndex 和 deleteAtIndex 的次数不超过 2000 。
class LinkNode {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

var MyLinkedList = function () {
    this.size = 0;
    this.tail = null;
    this.head = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let node = new LinkNode(val, this.head)
    this.head = node
    this.size++
    if (!this.tail) {
        this.tail = node
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let node = new LinkNode(val, null)
    this.size++
    if (this.tail) {
        this.tail.next = node
        this.tail = node
        return
    }
    this.tail = node
    this.head = node
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1

    return this.getNode(index).val
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) return
    if (index <= 0) {
        this.addAtHead(val)
        return
    }
    if (index == this.size) {
        this.addAtTail(val)
        return
    }


    let newNode = this.getNode(index - 1)
    let midNode = new LinkNode(val, newNode.next)
    newNode.next = midNode
    this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return

    if (index == 0) {
        this.head = this.head.next
        if (index == this.size - 1) {
            this.tail = this.head
        }
        this.size--
        return
    }


    let newNode = this.getNode(index - 1)
    newNode.next = newNode.next.next;

    if (index == this.size - 1) {
        this.tail = newNode
    }

    this.size--

};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function (index) {
    if (index < 0 || index >= this.size) return null

    let newNode = new LinkNode(0, this.head)
    while (index >= 0) {
        newNode = newNode.next
        index--
    }

    return newNode
};


// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// 示例 1：
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
// 示例 2：
// 输入：head = [1,2]
// 输出：[2,1]
// 示例 3：
// 输入：head = []
// 输出：[]
// 提示：
// 链表中节点的数目范围是 [0, 5000]
// -5000 <= Node.val <= 5000
// 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
var reverseList = function (head) {
    if (!head || !head.next) return head;
    let newNode = new LinkNode(head.val, null)

    while (head.next) {
        let nextNode = head.next
        newNode = new LinkNode(nextNode.val, newNode)
        head = head.next
    }
    return newNode
};

// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
// 示例 1：
// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]
// 示例 2：
// 输入：head = []
// 输出：[]
// 示例 3：
// 输入：head = [1]
// 输出：[1]
// 提示：
// 链表中节点的数目在范围 [0, 100] 内
// 0 <= Node.val <= 100
var swapPairs = function (head) {
    if (!head || !head.next) return head

    const newNode = new LinkNode(0, head)
    let headNode = newNode
    while (headNode.next && headNode.next.next) {
        let midNode = new LinkNode(headNode.next.val, headNode.next.next.next)
        headNode.next = new LinkNode(headNode.next.next.val, midNode)
        headNode = headNode.next.next
    }

    return newNode.next
};

// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
// 示例 1：
// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// 示例 2：
// 输入：head = [1], n = 1
// 输出：[]
// 示例 3：
// 输入：head = [1,2], n = 1
// 输出：[1]
// 提示：
// 链表中结点的数目为 sz
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
// 进阶：你能尝试使用一趟扫描实现吗？
var removeNthFromEnd = function (head, n) {
    let newNode = new LinkNode(0, head)
    let headNode = newNode
    let fastNode = null
    let slowNode = headNode
    let num = 1
    while (headNode.next) {
        fastNode = headNode.next
        headNode = headNode.next
        if (num > n) {
            slowNode = slowNode.next
        }
        num++
    }
    if (n == 1) {
        slowNode.next = null
    } else {
        slowNode.next = new ListNode(slowNode.next.next.val, slowNode.next.next.next)
    }
    return newNode.next
};

// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
// 图示两个链表在节点 c1 开始相交：
// 题目数据 保证 整个链式结构中不存在环。
// 注意，函数返回结果后，链表必须 保持其原始结构 。
// 示例 1：
// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// 输出：Intersected at '8'
// 解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
// 从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
// 在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
// 示例 2：
// 输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// 输出：Intersected at '2'
// 解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
// 从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。
// 在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
// 示例 3：
// 输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// 输出：null
// 解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
// 由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
// 这两个链表不相交，因此返回 null 。
// 提示：
// listA 中节点数目为 m
// listB 中节点数目为 n
// 0 <= m, n <= 3 * 104
// 1 <= Node.val <= 105
// 0 <= skipA <= m
// 0 <= skipB <= n
// 如果 listA 和 listB 没有交点，intersectVal 为 0
// 如果 listA 和 listB 有交点，intersectVal == listA[skipA + 1] == listB[skipB + 1]
// 进阶：你能否设计一个时间复杂度 O(n) 、仅用 O(1) 内存的解决方案
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null
    let newNodeListA = new LinkNode(0, headA)
    let newNodeListB = new LinkNode(0, headB)
    let lenNodeListA = 0
    let lenNodeListB = 0
    let headNodeA = newNodeListA
    let headNodeB = newNodeListB
    while (headNodeA.next) {
        headNodeA = headNodeA.next
        lenNodeListA++
    }
    while (headNodeB.next) {
        headNodeB = headNodeB.next
        lenNodeListB++
    }
    let indexA = 0
    let indexB = 0
    if (lenNodeListA > lenNodeListB) {
        while (indexA < lenNodeListA - lenNodeListB) {
            headA = headA.next
            indexA++
        }
    } else if (lenNodeListA < lenNodeListB) {
        while (indexB < lenNodeListB - lenNodeListA) {
            headB = headB.next
            indexB++
        }
    }
    while (headA && headA != headB) {
        headA = headA.next
        headB = headB.next
    }
    return headA
};


// 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
// 不允许修改 链表。
// 示例 1：
// 输入：head = [3,2,0,-4], pos = 1
// 输出：返回索引为 1 的链表节点
// 解释：链表中有一个环，其尾部连接到第二个节点。
// 示例 2：
// 输入：head = [1,2], pos = 0
// 输出：返回索引为 0 的链表节点
// 解释：链表中有一个环，其尾部连接到第一个节点。
// 示例 3：
// 输入：head = [1], pos = -1
// 输出：返回 null
// 解释：链表中没有环。
// 提示：
// 链表中节点的数目范围在范围 [0, 104] 内
// -105 <= Node.val <= 105
// pos 的值为 -1 或者链表中的一个有效索引
// 进阶：你是否可以使用 O(1) 空间解决此题？

var detectCycle = function (head) {
    if (!head || !head.next) return null
    let fastNode = head.next.next
    let slowNode = head.next
    while (fastNode && fastNode.next && fastNode != slowNode) {
        if (!fastNode.next.next) {
            return null
        }
        fastNode = fastNode.next.next
        slowNode = slowNode.next
    }
    if (!fastNode || !fastNode.next) return null
    slowNode = head
    while (slowNode != fastNode) {
        fastNode = fastNode.next
        slowNode = slowNode.next
    }
    return slowNode
};