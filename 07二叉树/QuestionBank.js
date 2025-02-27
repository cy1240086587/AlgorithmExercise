// 二叉树定义
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 前序遍历
// 递归法
var preorderTraversal = function (root) {
    let result = []

    const traversal = function (node) {
        if (!node) return

        result.push(node.val)
        traversal(node.left)
        traversal(node.right)
    }

    traversal(root)

    return result
};
// 迭代法
var preorderTraversal = function (root) {
    let result = []
    if (!root) return result
    let stack = [root]

    while (stack.length > 0) {
        let node = stack.pop()

        if (node != null) {
            result.push(node.val)
        } else {
            continue
        }

        stack.push(node.right)
        stack.push(node.left)
    }

    return result
};

// 中序遍历
// 递归法
var postorderTraversal = function (root) {
    let result = []

    const traversal = function (node) {
        if (!node) return

        traversal(node.left)
        result.push(node.val)
        traversal(node.right)
    }

    traversal(root)

    return result
};
// 迭代法
var postorderTraversal = function (root) {
    let result = []
    if (!root) return result
    let stack = []
    let node = root

    while (node != null || stack.length > 0) {
        if (node != null) {
            stack.push(node)
            node = node.left
        } else {
            let item = stack.pop()
            result.push(item.val)
            node = item.right
        }
    }

    return result
};

// 后序遍历
// 递归法
var inorderTraversal = function (root) {
    let result = []

    const traversal = function (node) {
        if (!node) return

        traversal(node.left)
        traversal(node.right)
        result.push(node.val)
    }

    traversal(root)

    return result
};
// 迭代法
var inorderTraversal = function (root) {
    let result = []
    if (!root) return result
    let stack = [root]

    while (stack.length > 0) {
        let node = stack.pop()

        if (node != null) {
            result.push(node.val)
        } else {
            continue
        }

        stack.push(node.left)
        stack.push(node.right)
    }

    result.reverse()
    return result
};


// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]
// 示例 2：

// 输入：root = [1]
// 输出：[[1]]
// 示例 3：

// 输入：root = []
// 输出：[]
var levelOrder = function (root) {
    let result = []
    if (!root) return result
    let queue = [root]
    while (queue.length > 0) {
        let size = queue.length
        let itemResult = []
        while (size > 0) {
            let node = queue.shift()
            itemResult.push(node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            size--
        }
        result.push(itemResult)
    }
    return result
};

// 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[15,7],[9,20],[3]]
// 示例 2：

// 输入：root = [1]
// 输出：[[1]]
// 示例 3：

// 输入：root = []
// 输出：[]
var levelOrderBottom = function (root) {
    let result = []
    if (!root) return result
    let queue = [root]
    while (queue.length > 0) {
        let size = queue.length
        let itemResult = []
        while (size > 0) {
            let node = queue.shift()
            itemResult.push(node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            size--
        }
        result.push(itemResult)
    }

    result.reverse()
    return result
};

// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
// 示例 1：
// 输入：root = [1,2,3,null,5,null,4]
// 输出：[1,3,4]

// 示例 2：
// 输入：root = [1,2,3,4,null,null,null,5]
// 输出：[1,3,4,5]

// 示例 3：
// 输入：root = [1,null,3]
// 输出：[1,3]

// 示例 4：
// 输入：root = []
// 输出：[]
var rightSideView = function (root) {
    let result = []
    if (!root) return result
    let queue = [root]

    while (queue.length > 0) {
        let size = queue.length
        while (size > 1) {
            let node = queue.shift()
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            size--
        }
        let resultItem = queue.shift()
        if (resultItem.left) {
            queue.push(resultItem.left)
        }
        if (resultItem.right) {
            queue.push(resultItem.right)
        }
        result.push(resultItem.val)
    }

    return result
};

// 给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10-5 以内的答案可以被接受。

// 输入：root = [3,9,20,null,null,15,7]
// 输出：[3.00000,14.50000,11.00000]

// 输入：root = [3,9,20,15,7]
// 输出：[3.00000,14.50000,11.00000]
var averageOfLevels = function (root) {
    let result = []
    if (!root) return result
    let queue = [root]
    result.push(root.val)
    while (queue.length > 0) {
        let size = queue.length
        let sum = 0
        while (size > 0) {
            let node = queue.shift()
            if (node.left) {
                queue.push(node.left)
                sum += node.left.val
            }
            if (node.right) {
                queue.push(node.right)
                sum += node.right.val
            }
            size--
        }
        if (queue.length > 0) {
            let averageItem = sum / queue.length
            result.push(averageItem)
        }
    }
    return result
};

// 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
// 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。

// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：[[1],[3,2,4],[5,6]]

// 输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// 输出：[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]

var levelOrder = function (root) {
    let result = []
    if (!root) return result
    let queue = [root]

    while (queue.length > 0) {
        let size = queue.length
        let resultItem = []
        while (size > 0) {
            let node = queue.shift()
            resultItem.push(node.val)
            let children = node.children
            if (children != null) {
                queue = queue.concat(children)
            }
            size--
        }
        result.push(resultItem)
    }

    return result
};

// 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。

// 输入: root = [1,3,2,5,3,null,9]
// 输出: [1,3,9]

// 输入: root = [1,2,3]
// 输出: [1,3]

var largestValues = function (root) {
    let result = []
    if (!root) return result
    let queue = [root]

    while (queue.length > 0) {
        let size = queue.length
        let max = null
        while (size > 0) {
            let node = queue.shift()
            let val = node.val
            if (max == null || val > max) {
                max = val
            }
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            size--
        }
        result.push(max)
    }
    return result
};

// 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
// 初始状态下，所有 next 指针都被设置为 NULL。

// 输入：root = [1,2,3,4,5,6,7]
// 输出：[1,#,2,3,#,4,5,6,7,#]
// 解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。

// 输入：root = []
// 输出：[]
function _Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

var connect = function (root) {
    if (!root) return root
    let queue = [root]

    while (queue.length > 0) {
        let size = queue.length

        while (size > 0) {
            let node = queue.shift()

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }

            if (size != 1) {
                node.next = queue[0]
            }

            size--
        }
    }

    return root
};


// 给定一个二叉树：
// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL 。
// 初始状态下，所有 next 指针都被设置为 NULL 。

// 输入：root = [1,2,3,4,5,null,7]
// 输出：[1,#,2,3,#,4,5,7,#]
// 解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化输出按层序遍历顺序（由 next 指针连接），'#' 表示每层的末尾。

// 输入：root = []
// 输出：[]
var connect = function (root) {
    if (!root) return root
    let queue = [root]

    while (queue.length > 0) {
        let size = queue.length

        while (size > 0) {
            let node = queue.shift()

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }

            if (size != 1) {
                node.next = queue[0]
            }

            size--
        }
    }

    return root
};

// 给定一个二叉树 root ，返回其最大深度。
// 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。

// 输入：root = [3,9,20,null,null,15,7]
// 输出：3

// 输入：root = [1,null,2]
// 输出：2
// 层序遍历法
var maxDepth = function (root) {
    let result = 0
    if (!root) return result
    let queue = [root]

    while (queue.length > 0) {
        let size = queue.length

        while (size > 0) {
            let node = queue.shift()

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }

            size--
        }

        result++
    }

    return result
};
// 递归法
var maxDepth = function (root) {
    const getDepth = function (node) {
        if (node == null) return 0
        let leftDepth = getDepth(node.left)
        let rightDepth = getDepth(node.right)
        let height = Math.max(leftDepth, rightDepth) + 1
        return height
    }
    let result = getDepth(root)
    return result
}

// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
// 说明：叶子节点是指没有子节点的节点。

// 输入：root = [3,9,20,null,null,15,7]
// 输出：2

// 输入：root = [2,null,3,null,4,null,5,null,6]
// 输出：5
// 层序遍历法
var minDepth = function (root) {
    let result = 0
    if (!root) return result
    let queue = [root]

    while (queue.length > 0) {
        let size = queue.length

        while (size > 0) {
            let node = queue.shift()

            if (!node.left && !node.right) {
                result++
                return result
            }

            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }

            size--
        }

        result++
    }

    return result
};
// 递归法
var minDepth = function (root) {
    const getHeight = function (node) {
        if (node.left == null && node.right == null) return 1

        let minHeight

        if (node.left && node.right) {
            minHeight = Math.min(getHeight(node.left), getHeight(node.right))
        } else if (node.left) {
            minHeight = getHeight(node.left)
        } else if (node.right) {
            minHeight = getHeight(node.right)
        }

        return minHeight + 1
    }
    if (!root) return 0
    let result = getHeight(root)
    return result
}


// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]

// 输入：root = [2,1,3]
// 输出：[2,3,1]

// 输入：root = []
// 输出：[]

// 递归法
var invertTree = function (root) {
    if (!root) {
        return null
    }
    const rightNode = root.right
    root.right = invertTree(root.left)
    root.left = invertTree(rightNode)
    return root
};
// 层序遍历
var invertTree = function (root) {
    if (!root) return root
    let queue = [root]

    while (queue.length > 0) {
        let size = queue.length

        while (size > 0) {
            let node = queue.shift()

            const rightNode = node.right
            node.right = node.left
            node.left = rightNode

            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }

            size--
        }
    }

    return root
};

// 给你一个二叉树的根节点 root ， 检查它是否轴对称。

// 输入：root = [1,2,2,3,4,4,3]
// 输出：true

// 输入：root = [1,2,2,null,3,null,3]
// 输出：false

// 层序遍历
var isSymmetric = function (root) {
    if (!root) return root
    let queue = [root]

    while (queue.length > 0) {
        let size = queue.length
        let lastIndex = queue.length - 1

        while (size > 0) {
            if (lastIndex > 0) {
                if (queue[0] && queue[lastIndex]) {
                    if (queue[0].val != queue[lastIndex].val) {
                        return false
                    }
                } else if (queue[0] != queue[lastIndex]) {
                    return false
                }
            }

            let node = queue.shift()

            if (!node) {
                lastIndex = lastIndex - 2
                size--
                continue
            }

            if (node.left) {
                queue.push(node.left)
            } else {
                queue.push(null)
            }

            if (node.right) {
                queue.push(node.right)
            } else {
                queue.push(null)
            }

            lastIndex = lastIndex - 2
            size--
        }
    }
    return true
};

// 递归法
var isSymmetric = function (root) {
    const compareNode = function (leftNode, rightNode) {
        if ((leftNode == null && rightNode != null) || (leftNode != null && rightNode == null)) {
            return false
        } else if (leftNode == null && rightNode == null) {
            return true
        } else if (leftNode.val != rightNode.val) {
            return false
        }

        let outCompare = compareNode(leftNode.left, rightNode.right)
        let insideCompare = compareNode(leftNode.right, rightNode.left)
        return outCompare && insideCompare
    }

    if (root == null) {
        return true
    }

    let result = compareNode(root.left, root.right)
    return result
}

// 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

// 输入：p = [1,2,3], q = [1,2,3]
// 输出：true

// 输入：p = [1,2], q = [1,null,2]
// 输出：false

var isSameTree = function (p, q) {
    const compareNode = function (leftNode, rightNode) {
        if ((leftNode == null && rightNode != null) || (leftNode != null && rightNode == null)) {
            return false
        } else if (leftNode == null && rightNode == null) {
            return true
        } else if (leftNode.val != rightNode.val) {
            return false
        }

        let outCompare = compareNode(leftNode.left, rightNode.left)
        let insideCompare = compareNode(leftNode.right, rightNode.right)
        return outCompare && insideCompare
    }

    let result = compareNode(p, q)
    return result
};

// 给你两棵二叉树 root 和 subRoot 。检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。如果存在，返回 true ；否则，返回 false 。
// 二叉树 tree 的一棵子树包括 tree 的某个节点和这个节点的所有后代节点。tree 也可以看做它自身的一棵子树。

// 输入：root = [3, 4, 5, 1, 2], subRoot = [4, 1, 2]
// 输出：true

// 输入：root = [3, 4, 5, 1, 2, null, null, null, null, 0], subRoot = [4, 1, 2]
// 输出：false
var isSubtree = function (root, subRoot) {
    const compareNode = function (leftNode, rightNode) {
        if ((leftNode == null && rightNode != null) || (leftNode != null && rightNode == null)) {
            return false
        } else if (leftNode == null && rightNode == null) {
            return true
        } else if (leftNode.val != rightNode.val) {
            return false
        }

        let outCompare = compareNode(leftNode.left, rightNode.left)
        let insideCompare = compareNode(leftNode.right, rightNode.right)
        return outCompare && insideCompare
    }

    let queue = [root]
    while (queue.length > 0) {
        let size = queue.length
        while (size > 0) {
            let node = queue.shift()

            if (node.val == subRoot.val) {
                let result = compareNode(node, subRoot)
                if (result) {
                    return true
                }
            }

            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }

            size--
        }
    }
    return false
};

// 给定一个 N 叉树，找到其最大深度。
// 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
// N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。

// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：3

// 输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// 输出：5
// 层序遍历法
var maxDepth = function (root) {
    let result = 0
    if (!root) return result
    let queue = [root]
    while (queue.length > 0) {
        let size = queue.length
        while (size > 0) {
            let node = queue.shift()

            if (!node) {
                size--
                continue
            }

            if (node.children) {
                queue = queue.concat(node.children)
            }

            size--
        }
        result++
    }
    return result
};
// 递归法
var maxDepth = function (root) {
    const getDepth = function (node) {
        if (node == null) return 0

        let maxDepthVal = 0
        let children = node.children

        if (children) {
            for (let i = 0; i < children.length; i++) {
                let childrenDepth = getDepth(children[i])
                maxDepthVal = Math.max(maxDepthVal, childrenDepth)
            }
        }


        let height = maxDepthVal + 1
        return height
    }
    let result = getDepth(root)
    return result
}

// 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
// 完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层（从第 0 层开始），则该层包含 1~ 2h 个节点。

// 输入：root = [1,2,3,4,5,6]
// 输出：6

// 输入：root = []
// 输出：0

// 输入：root = [1]
// 输出：1

// 递归法
var countNodes = function (root) {
    const getNodeNum = function (node) {
        if (!node) return 0

        let leftNodeNum = getNodeNum(node.left)
        let rightNodeNum = getNodeNum(node.right)

        let nodeNum = leftNodeNum + rightNodeNum + 1
        return nodeNum
    }

    if (!root) return 0
    let result = getNodeNum(root)
    return result
};

// 递归法【优化】
var countNodes = function (root) {
    const getNodeRow = function (node) {
        if (!node) return 0

        let leftRow = 0
        let rightRow = 0
        let leftNode = node.left
        let rightNode = node.right
        while (leftNode) {
            leftRow++
            leftNode = leftNode.left
        }
        while (rightNode) {
            rightRow++
            rightNode = rightNode.right
        }
        if (leftRow == rightRow) {
            return 2 ** (leftRow + 1) - 1
        }
        return getNodeRow(node.left) + getNodeRow(node.right) + 1
    }

    if (!root) return 0
    let result = getNodeNum(root)
    return result
};

// 层序遍历法
var countNodes = function (root) {
    let result = 0
    if (!root) return result
    let queue = [root]
    while (queue.length > 0) {
        let size = queue.length
        while (size > 0) {
            let node = queue.shift()

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }

            result++
            size--
        }

    }
    return result
}

// 给定一个二叉树，判断它是否是 
// 平衡二叉树

// 输入：root = [3,9,20,null,null,15,7]
// 输出：true

// 输入：root = [1,2,2,3,3,null,null,4,4]
// 输出：false

// 输入：root = []
// 输出：true
// 递归法
var isBalanced = function (root) {
    const getDepth = function (node) {
        if (!node) return 0

        let leftNodeDepth = getDepth(node.left)
        if (leftNodeDepth == -1) return -1

        let rightNodeDepth = getDepth(node.right)
        if (rightNodeDepth == -1) return -1

        if (Math.abs(leftNodeDepth - rightNodeDepth) > 1) {
            return -1
        } else {
            return Math.max(leftNodeDepth, rightNodeDepth) + 1
        }
    }

    if (!root) return true
    let result = getDepth(root)
    return result != -1
};

// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
// 叶子节点 是指没有子节点的节点。

// 输入：root = [1,2,3,null,5]
// 输出：["1->2->5","1->3"]

// 输入：root = [1]
// 输出：["1"]
// 递归法
var binaryTreePaths = function (root) {
    const getTreePath = function (node, fatherPath) {
        if (node.left == null && node.right == null) return [fatherPath + node.val]

        let nodePath = fatherPath + node.val + "->"

        let nodePathList = []
        if (node.left) {
            nodePathList = nodePathList.concat(getTreePath(node.left, nodePath))
        }
        if (node.right) {
            nodePathList = nodePathList.concat(getTreePath(node.right, nodePath))
        }

        return nodePathList
    }
    if (!root) return root
    let result = getTreePath(root, "")
    return result
};

// 给定二叉树的根节点 root ，返回所有左叶子之和。

// 输入: root = [3,9,20,null,null,15,7] 
// 输出: 24 
// 解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

// 输入: root = [1]
// 输出: 0
// 递归法
var sumOfLeftLeaves = function (root) {
    const getLeftLeaves = function (node) {
        if (!node) return 0

        let nodeLeftLeaves = 0

        if (node.left) {
            if (node.left.left == null && node.left.right == null) {
                nodeLeftLeaves += node.left.val
            } else {
                nodeLeftLeaves += getLeftLeaves(node.left)
            }
        }
        if (node.right) {
            nodeLeftLeaves += getLeftLeaves(node.right)
        }

        return nodeLeftLeaves
    }
    let result = getLeftLeaves(root)
    return result
};

// 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。
// 假设二叉树中至少有一个节点。

// 输入: root = [2,1,3]
// 输出: 1

// 输入: [1,2,3,4,null,5,6,null,null,7]
// 输出: 7
// 层序遍历法
var findBottomLeftValue = function (root) {
    if (!root) return root
    let result
    let queue = [root]

    while (queue.length > 0) {
        let size = queue.length

        result = queue[0].val

        while (size > 0) {
            let node = queue.shift()

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            size--
        }

    }
    return result
};
// 递归法
var findBottomLeftValue = function (root, depth) {
    const getBottomLeftValue = function (node) {
        if (node.left == null && node.right == null) {
            if (depth > maxDepth) {
                maxDepth = depth
                result = node.val
            }
        }
        if (node.left) {
            getBottomLeftValue(node.left, depth + 1)
        }
        if (node.right) {
            getBottomLeftValue(node.right, depth + 1)
        }
    }

    let maxDepth = 0
    let result = root.val
    getBottomLeftValue(root, maxDepth)
    return result
};

// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
// 叶子节点 是指没有子节点的节点。

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// 输出：true

// 输入：root = [1,2,3], targetSum = 5
// 输出：false

// 输入：root = [], targetSum = 0
// 输出：false
// 递归法
var hasPathSum = function (root, targetSum) {
    const findPathSum = function (node, fatherVal) {

        if (node.left == null && node.right == null) {
            let pathSum = fatherVal + node.val
            if (pathSum == targetSum) {
                result = true
                return
            }
            return
        }

        fatherVal = fatherVal + node.val

        if (node.left) {
            findPathSum(node.left, fatherVal)
        }
        if (node.right) {
            findPathSum(node.right, fatherVal)
        }
    }
    if (!root) return false
    let result = false
    findPathSum(root, 0)
    return result
};

// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
// 叶子节点 是指没有子节点的节点。

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：[[5,4,11,2],[5,8,4,5]]

// 输入：root = [1,2,3], targetSum = 5
// 输出：[]

// 输入：root = [1,2], targetSum = 0
// 输出：[]
// 递归法
var pathSum = function (root, targetSum) {
    const findPathSum = function (node, fatherPath, fatherVal) {
        if (node.left == null && node.right == null) {
            let pathSum = fatherVal + node.val
            if (pathSum == targetSum) {
                let path = fatherPath.concat([node.val])
                result.push(path)
            }
            return
        }

        let itemPath = fatherPath.concat([node.val])
        let itemSum = fatherVal + node.val

        if (node.left) {
            findPathSum(node.left, itemPath, itemSum)
        }
        if (node.right) {
            findPathSum(node.right, itemPath, itemSum)
        }

    }
    if (!root) return []
    let result = []
    findPathSum(root, [], 0)
    return result
};

// 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

// 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]

// 输入：inorder = [-1], postorder = [-1]
// 输出：[-1]

// 递归法
var buildTree = function (inorder, postorder) {
    if (!inorder.length) return null
    const midVal = postorder.pop()
    const root = new TreeNode(midVal)

    let rootIndex = inorder.indexOf(midVal)

    root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex))
    root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex))

    return root
};

// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

// 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]

// 输入: preorder = [-1], inorder = [-1]
// 输出: [-1]
var buildTree = function (preorder, inorder) {
    if (!preorder.length) return null
    const rootVal = preorder.shift()
    const root = new TreeNode(rootVal)

    let rootIndex = inorder.indexOf(rootVal)

    root.left = buildTree(preorder.slice(0, rootIndex), inorder.slice(0, rootIndex))
    root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex + 1))

    return root
};

// 给定一个不重复的整数数组 nums 。 最大二叉树 可以用下面的算法从 nums 递归地构建:
// 创建一个根节点，其值为 nums 中的最大值。
// 递归地在最大值 左边 的 子数组前缀上 构建左子树。
// 递归地在最大值 右边 的 子数组后缀上 构建右子树。
// 返回 nums 构建的 最大二叉树 。

// 输入：nums = [3,2,1,6,0,5]
// 输出：[6,3,5,null,2,0,null,null,1]

// 输入：nums = [3,2,1]
// 输出：[3,null,2,null,1]

// 递归法
var constructMaximumBinaryTree = function (nums) {
    if (!nums.length) return null
    let maxNum = -1
    let maxIndex = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxNum) {
            maxNum = nums[i]
            maxIndex = i
        }
    }
    let root = new TreeNode(maxNum)

    root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex))
    root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1))

    return root
};

// 给你两棵二叉树： root1 和 root2 。
// 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。
// 返回合并后的二叉树。
// 注意: 合并过程必须从两个树的根节点开始。

// 输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// 输出：[3,4,5,5,4,null,7]

// 输入：root1 = [1], root2 = [1,2]
// 输出：[2,2]

// 递归法
var mergeTrees = function (root1, root2) {
    if (!root1) return root2
    if (!root2) return root1

    let newRootVal = root1.val + root2.val
    const newRoot = new TreeNode(newRootVal)

    newRoot.left = mergeTrees(root1.left, root2.left)
    newRoot.right = mergeTrees(root1.right, root2.right)

    return newRoot
};

// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
// 有效 二叉搜索树定义如下：
// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

// 输入：root = [2,1,3]
// 输出：true

// 输入：root = [5,1,4,null,null,3,6]
// 输出：false

// 递归法
var isValidBST = function (root) {
    const getValidBST = function (node, minVal, maxVal) {
        if (!node) return

        let nodeVal = node.val

        if (minVal != null && nodeVal <= minVal) {
            result = false
            return
        }

        if (maxVal != null && nodeVal >= maxVal) {
            result = false
            return
        }

        if (node.left) {
            getValidBST(node.left, minVal, nodeVal)
        }

        if (node.right) {
            getValidBST(node.right, nodeVal, maxVal)
        }
    }

    let result = true

    getValidBST(root, null, null)
    return result
};

// 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
// 差值是一个正数，其数值等于两值之差的绝对值。

// 输入：root = [4,2,6,1,3]
// 输出：1

// 输入：root = [1,0,48,null,null,12,49]
// 输出：1
// 递归法
var getMinimumDifference = function (root) {
    const getMinimum = function (node, minVal, maxVal) {
        if (!node) return

        if (minVal != null) {
            minNum = Math.min(minNum, node.val - minVal)
        }

        if (maxVal != null) {
            minNum = Math.min(minNum, maxVal - node.val)
        }

        if (node.left) {
            getMinimum(node.left, minVal, node.val)
        }

        if (node.right) {
            getMinimum(node.right, node.val, maxVal)
        }
    }

    let minNum = 10 ** 5

    getMinimum(root, null, null)
    return minNum
};

// 给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。
// 如果树中有不止一个众数，可以按 任意顺序 返回。
// 假定 BST 满足如下定义：
// 结点左子树中所含节点的值 小于等于 当前节点的值
// 结点右子树中所含节点的值 大于等于 当前节点的值
// 左子树和右子树都是二叉搜索树

// 输入：root = [1,null,2,2]
// 输出：[2]

// 输入：root = [0]
// 输出：[0]

var findMode = function (root) {
    const getModeList = function (node) {
        if (!node) return

        getModeList(node.left)

        if (node.val == modeNum) {
            count++
        } else {
            modeNum = node.val
            count = 1
        }

        if (count == maxCount) {
            result.push(node.val)
        } else if (count > maxCount) {
            maxCount = count
            result = []
            result.push(node.val)
        }

        getModeList(node.right)
    }
    let count = 0
    let maxCount = 1
    let modeNum = root.val
    let result = []
    getModeList(root)
    return result
};

// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// 输出：3

// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// 输出：5

// 输入：root = [1,2], p = 1, q = 2
// 输出：1
var lowestCommonAncestor = function (root, p, q) {
    const findCommon = function (node) {
        if (node == null || node == p || node == q) return node

        let leftNode = findCommon(node.left)
        let rightNode = findCommon(node.right)

        if (leftNode != null && rightNode != null) {
            return node
        }

        if (!leftNode) {
            return rightNode
        }
        return leftNode
    }
    let result = findCommon(root)

    return result
};

// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
// 例如，给定如下二叉搜索树: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]

// 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// 输出: 6 

// 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// 输出: 2
var lowestCommonAncestor = function (root, p, q) {
    const findCommon = function (node, minVal, maxVal) {
        if (node == null) return node

        if (node.val < minVal) {
            return findCommon(node.right, minVal, maxVal)
        }
        if (node.val > maxVal) {
            return findCommon(node.left, minVal, maxVal)
        }
        if (node.val >= minVal && node.val <= maxVal) {
            node.left = findCommon(node.left, minVal, maxVal)
            node.right = findCommon(node.right, minVal, maxVal)
        }
        return node
    }
    let max = Math.max(p.val, q.val)
    let min = Math.min(p.val, q.val)
    let result = findCommon(root, min, max)

    return result
};

// 给定二叉搜索树（BST）的根节点 root 和要插入树中的值 value ，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据 保证 ，新值和原始二叉搜索树中的任意节点值都不同。
// 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回 任意有效的结果 。

// 输入：root = [4,2,7,1,3], val = 5
// 输出：[4,2,7,1,3,5]

// 输入：root = [40,20,60,10,30,50,70], val = 25
// 输出：[40,20,60,10,30,50,70,null,null,25]

// 输入：root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
// 输出：[4,2,7,1,3,5]

var insertIntoBST = function (root, val) {
    const getNewBST = function (node) {
        if (!node) {
            let newNode = new TreeNode(val)
            return newNode
        }
        if (node.val < val) {
            node.right = getNewBST(node.right)
        }
        if (node.val > val) {
            node.left = getNewBST(node.left)
        }
        return node
    }
    let result = getNewBST(root)
    return result
};

// 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
// 一般来说，删除节点可分为两个步骤：
// 首先找到需要删除的节点；
// 如果找到了，删除它。

// 输入：root = [5,3,6,2,4,null,7], key = 3
// 输出：[5,4,6,2,null,null,7]

// 输入: root = [5,3,6,2,4,null,7], key = 0
// 输出: [5,3,6,2,4,null,7]

// 输入: root = [], key = 0
// 输出: []
var deleteNode = function (root, key) {
    const getMinRootVal = function (node) {
        while (node.left) {
            node = node.left
        }

        return node
    }

    if (!root) return null

    if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key)
    } else {
        if (!root.left && !root.right) {
            return null
        }
        if (root.left && !root.right) {
            return root.left
        }
        if (!root.left && root.right) {
            return root.right
        }

        let minRightNode = getMinRootVal(root.right)
        root.val = minRightNode.val
        root.right = deleteNode(root.right, minRightNode.val)
    }

    return root
};

// 给你二叉搜索树的根节点 root ，同时给定最小边界low 和最大边界 high。通过修剪二叉搜索树，使得所有节点的值在[low, high]中。修剪树 不应该 改变保留在树中的元素的相对结构(即，如果没有被移除，原有的父代子代关系都应当保留)。 可以证明，存在 唯一的答案 。
// 所以结果应当返回修剪好的二叉搜索树的新的根节点。注意，根节点可能会根据给定的边界发生改变。

// 输入：root = [1,0,2], low = 1, high = 2
// 输出：[1,null,2]

// 输入：root = [3,0,4,null,2,null,null,1], low = 1, high = 3
// 输出：[3,2,null,1]

var trimBST = function (root, low, high) {
    if (!root) return null
    if (root.val < low) {
        return trimBST(root.right, low, high)
    }
    if (root.val > high) {
        return trimBST(root.left, low, high)
    }
    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)
    return root
};

// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。

// 输入：nums = [-10,-3,0,5,9]
// 输出：[0,-3,9,-10,null,5]

// 输入：nums = [1,3]
// 输出：[3,1]

var sortedArrayToBST = function (nums) {
    if (nums.length == 0) return null

    let mid = Math.floor(nums.length / 2)
    let root = new TreeNode(nums[mid])

    root.left = sortedArrayToBST(nums.slice(0, mid))
    if (mid + 1 > nums.length - 1) {
        root.right = null
    } else {
        root.right = sortedArrayToBST(nums.slice(mid + 1))
    }

    return root
};

// 给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。
// 提醒一下，二叉搜索树满足下列约束条件：
// 节点的左子树仅包含键 小于 节点键的节点。
// 节点的右子树仅包含键 大于 节点键的节点。
// 左右子树也必须是二叉搜索树。

// 输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// 输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

// 输入：root = [0,null,1]
// 输出：[1,null,1]

// 输入：root = [1,0,2]
// 输出：[3,3,2]

// 输入：root = [3,2,4,1]
// 输出：[7,9,4,10]

var convertBST = function (root) {
    const getSumBST = function (node) {
        if (!node) return

        getSumBST(node.right)

        node.val = node.val + lastVal
        lastVal = node.val

        getSumBST(node.left)
    }
    let lastVal = 0
    getSumBST(root)

    return root
};