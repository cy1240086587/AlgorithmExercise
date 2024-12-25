// 使用栈实现队列的下列操作：
// push(x) -- 将一个元素放入队列的尾部。
// pop() -- 从队列首部移除元素。
// peek() -- 返回队列首部的元素。
// empty() -- 返回队列是否为空。
// 示例:
// MyQueue queue = new MyQueue();
// queue.push(1);
// queue.push(2);
// queue.peek();  // 返回 1
// queue.pop();   // 返回 1
// queue.empty(); // 返回 false
// 说明:
// 你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
// 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
// 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
var MyQueue = function () {
    this.stackIn = []
    this.stackOut = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stackIn.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let lenStackOut = this.stackOut.length
    if (lenStackOut) {
        return this.stackOut.pop()
    }
    while (this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop())
    }
    return this.stackOut.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let x = this.pop()
    this.stackOut.push(x)
    return x
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stackIn.length == 0 && this.stackOut.length == 0
};

// 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
// 实现 MyStack 类：
// void push(int x) 将元素 x 压入栈顶。
// int pop() 移除并返回栈顶元素。
// int top() 返回栈顶元素。
// boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
// 注意：
// 你只能使用队列的标准操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
// 你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
// 示例：
// 输入：
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// 输出：
// [null, null, null, 2, 2, false]
// 解释：
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // 返回 2
// myStack.pop(); // 返回 2
// myStack.empty(); // 返回 False
// 提示：
// 1 <= x <= 9
// 最多调用100 次 push、pop、top 和 empty
// 每次调用 pop 和 top 都保证栈不为空
// 进阶：你能否仅用一个队列来实现栈。
var MyStack = function () {
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let size = this.queue.length
    while (size > 1) {
        this.queue.push(this.queue.shift())
        size--
    }
    return this.queue.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let x = this.pop()
    this.push(x)
    return x
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue.length == 0
};

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
// 示例 1：
// 输入：s = "()"
// 输出：true
// 示例 2：
// 输入：s = "()[]{}"
// 输出：true
// 示例 3：
// 输入：s = "(]"
// 输出：false
// 示例 4：
// 输入：s = "([])"
// 输出：true
// 提示：
// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成
var isValid = function (s) {
    let stack = []
    let map = {
        "(": ")",
        "{": "}",
        "[": "]",
    }
    for (let i of s) {
        if (map[i]) {
            stack.push(i)
            continue
        }
        if (map[stack.pop()] != i) return false
    }
    return stack.length == 0
};

// 给出由小写字母组成的字符串 s，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
// 在 s 上反复执行重复项删除操作，直到无法继续删除。
// 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
// 示例：
// 输入："abbaca"
// 输出："ca"
// 解释：
// 例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
// 提示：
// 1 <= s.length <= 105
// s 仅由小写英文字母组成。
var removeDuplicates = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] != s[i]) {
            stack.push(s[i])
        } else {
            stack.pop()
        }
    }
    let result = stack.join("")
    return result
};

// 给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。
// 请你计算该表达式。返回一个表示表达式值的整数。
// 注意：
// 有效的算符为 '+'、'-'、'*' 和 '/' 。
// 每个操作数（运算对象）都可以是一个整数或者另一个表达式。
// 两个整数之间的除法总是 向零截断 。
// 表达式中不含除零运算。
// 输入是一个根据逆波兰表示法表示的算术表达式。
// 答案及所有中间计算结果可以用 32 位 整数表示。
// 示例 1：
// 输入：tokens = ["2","1","+","3","*"]
// 输出：9
// 解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
// 示例 2：
// 输入：tokens = ["4","13","5","/","+"]
// 输出：6
// 解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
// 示例 3：
// 输入：tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// 输出：22
// 解释：该算式转化为常见的中缀算术表达式为：
//   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22
// 提示：
// 1 <= tokens.length <= 104
// tokens[i] 是一个算符（"+"、"-"、"*" 或 "/"），或是在范围 [-200, 200] 内的一个整数
// 逆波兰表达式：
// 逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。
// 平常使用的算式则是一种中缀表达式，如 ( 1 + 2 ) * ( 3 + 4 ) 。
// 该算式的逆波兰表达式写法为 ( ( 1 2 + ) ( 3 4 + ) * ) 。
// 逆波兰表达式主要有以下两个优点：
// 去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + * 也可以依据次序计算出正确结果。
// 适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中
var evalRPN = function (tokens) {
    const stack = []
    for (const token of tokens) {
        if (isNaN(Number(token))) {
            const n2 = stack.pop()
            const n1 = stack.pop()
            switch (token) {
                case "+":
                    stack.push(n1 + n2)
                    break
                case "-":
                    stack.push(n1 - n2)
                    break
                case "*":
                    stack.push(n1 * n2)
                    break
                case "/":
                    stack.push(n1 / n2 | 0)
                    break
            }
        } else {
            stack.push(Number(token))

        }
    }
    return stack[0]
};


// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回 滑动窗口中的最大值 。
// 示例 1：
// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// 示例 2：
// 输入：nums = [1], k = 1
// 输出：[1]
// 提示：
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length
var maxSlidingWindow = function (nums, k) {
    let queue = []
    let fastIndex = 0
    let slowIndex = 0
    let result = []

    while (fastIndex < k) {
        let back = queue[queue.length - 1]
        while (back != undefined && back < nums[fastIndex]) {
            queue.pop()
            back = queue[queue.length - 1]
        }
        queue.push(nums[fastIndex])
        fastIndex++
    }

    // 第一次初始化
    result.push(queue[0])

    while (fastIndex < nums.length) {
        // 判断窗口移除元素是否为最大值进行处理
        let front = queue[0]
        if (nums[slowIndex] == front) {
            queue.shift()
        }

        // 判断窗口增加元素处理流程
        let back = queue[queue.length - 1]
        while (back != undefined && back < nums[fastIndex]) {
            queue.pop()
            back = queue[queue.length - 1]
        }
        queue.push(nums[fastIndex])

        result.push(queue[0])
        fastIndex++
        slowIndex++
    }

    return result
};



// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
// 示例 1:
// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:
// 输入: nums = [1], k = 1
// 输出: [1]
// 提示：
// 1 <= nums.length <= 105
// k 的取值范围是 [1, 数组中不相同的元素的个数]
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
// 进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。
var topKFrequent = function (nums, k) {
    let queue = []
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }

    for (let m of map.keys()) {
        let item = map.get(m)

        if (queue[0] == undefined || map.get(queue[0]) <= item) {
            queue.unshift(m)
        }
        else if (map.get(queue[queue.length - 1]) >= item) {
            queue.push(m)
        }
        else {
            queue.unshift(queue[0])
            let n = 1
            while (n < queue.length) {
                if (map.get(queue[n + 1]) < item) {
                    queue[n] = m
                    break
                }
                queue[n] = queue[n + 1]
                n++
            }
        }
    }

    let result = []

    for (let j = 0; j < k; j++) {
        result.push(queue[j])
    }

    return result
};