// 初始化定义二叉树
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
// 示例 1：
// 输入：root = [1,null,2,3]
// 输出：[1,2,3]
// 解释：
// 示例 2：
// 输入：root = [1,2,3,4,5,null,8,null,null,6,7,9]
// 输出：[1,2,4,5,6,7,3,8,9]
// 解释：
// 示例 3：
// 输入：root = []
// 输出：[]
// 示例 4：
// 输入：root = [1]
// 输出：[1]
// 提示：
// 树中节点数目在范围 [0, 100] 内
// -100 <= Node.val <= 100
// 进阶：递归算法很简单，你可以通过迭代算法完成吗？
// 递归1
var preorderTraversal = function (root) {
    let result = []
    const dfs = function (root) {
        if (root == null) return
        result.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root, result)
    return result
};
// 递归2
var preorderTraversal = function (root) {
    let result = []
    if (root == null) {
        return []
    } else {
        result = [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
    }
    return result
};
// 迭代

// 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
// 示例 1：
// 输入：root = [1,null,2,3]
// 输出：[3,2,1]
// 解释：
// 示例 2：
// 输入：root = [1,2,3,4,5,null,8,null,null,6,7,9]
// 输出：[4,6,7,5,2,9,8,3,1]
// 解释：
// 示例 3：
// 输入：root = []
// 输出：[]
// 示例 4：
// 输入：root = [1]
// 输出：[1]
// 提示：
// 树中节点的数目在范围 [0, 100] 内
// -100 <= Node.val <= 100
// 进阶：递归算法很简单，你可以通过迭代算法完成吗？
// 递归1
var postorderTraversal = function (root) {
    let result = []
    const dfs = function (root) {
        if (root === null) return
        dfs(root.left)
        dfs(root.right)
        dfs(root.val)
    }
    dfs(root)
    return result
};
// 递归2
var postorderTraversal = function (root) {
    let result = []
    if (root === null) {
        return result
    } else {
        result = [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
    }
    return result
}
// 迭代



// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
// 示例 1：
// 输入：root = [1,null,2,3]
// 输出：[1,3,2]
// 示例 2：
// 输入：root = []
// 输出：[]
// 示例 3：
// 输入：root = [1]
// 输出：[1]
// 提示：
// 树中节点数目在范围 [0, 100] 内
// -100 <= Node.val <= 100
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
// 递归1
var inorderTraversal = function (root) {
    let result = []
    const dfs = function (root) {
        if (root === null) return
        dfs(root.left)
        result.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    return result
};
// 递归2
var inorderTraversal = function (root) {
    let result = []
    if (root === null) {
        return result
    } else {
        result = [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
    }
    return result
};
// 迭代