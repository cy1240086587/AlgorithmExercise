// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
// 你可以按 任何顺序 返回答案。

// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

// 输入：n = 1, k = 1
// 输出：[[1]]
var combine = function (n, k) {
    let result = []
    let path = []
    const backTracking = function (startVal) {
        if (path.length == k) {
            result.push(path.slice())
            return
        }

        for (let i = startVal; i <= n - (k - path.length) + 1; i++) {
            path.push(i)
            backTracking(i + 1)
            path.pop()
        }
    }

    backTracking(1)

    return result
};

// 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
// 只使用数字1到9
// 每个数字 最多使用一次
// 返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

// 输入: k = 3, n = 7
// 输出: [[1,2,4]]

// 输入: k = 3, n = 9
// 输出: [[1,2,6], [1,3,5], [2,3,4]]

// 输入: k = 4, n = 1
// 输出: []

var combinationSum3 = function (k, n) {
    const backTracking = function (startVal) {
        if (path.length == k) {
            if (sum == n) {
                result.push(path.slice())
            }
            return
        }

        for (let i = startVal; i <= 9 - (k - path.length) + 1; i++) {
            path.push(i)
            sum += i
            backTracking(i + 1)
            path.pop()
            sum -= i
        }
    }
    let result = []
    let path = []
    let sum = 0
    backTracking(1)
    return result
};

// 给定一个仅包含数字 2 - 9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 输入：digits = "23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

// 输入：digits = ""
// 输出：[]

// 输入：digits = "2"
// 输出：["a", "b", "c"]

var letterCombinations = function (digits) {
    const backTracking = function (startIndex) {
        if (startIndex == digits.length) {
            result.push(resultItem)
            return
        }

        for (let item of map[digits[startIndex]]) {
            resultItem += item
            backTracking(startIndex + 1)
            resultItem = resultItem.slice(0, -1)
        }
    }
    if (!digits) return []
    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let result = []
    let resultItem = ""
    backTracking(0)
    return result
};

// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 
// 对于给定的输入，保证和为 target 的不同组合数少于 150 个。

// 输入：candidates = [2,3,6,7], target = 7
// 输出：[[2,2,3],[7]]

// 输入: candidates = [2,3,5], target = 8
// 输出: [[2,2,2,2],[2,3,3],[3,5]]

// 输入: candidates = [2], target = 1
// 输出: []

var combinationSum = function (candidates, target) {
    const backTracking = function (_candidates, startIndex) {
        if (sum >= target) {
            if (sum == target) {
                result.push(path.slice())
                startIndex++
            }
            return
        }

        for (let i = startIndex; i < _candidates.length; i++) {
            path.push(_candidates[i])
            sum += _candidates[i]
            backTracking(_candidates, i)
            path.pop()
            sum -= _candidates[i]
        }
    }
    let result = []
    let path = []
    let sum = 0

    backTracking(candidates, 0)
    return result
};

// 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的每个数字在每个组合中只能使用 一次 。
// 注意：解集不能包含重复的组合

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

// 输入: candidates = [2,5,2,1,2], target = 5,
// 输出:
// [
// [1,2,2],
// [5]
// ]

var combinationSum2 = function (candidates, target) {
    const backTracking = function (_candidates, startIndex) {
        if (sum >= target) {
            if (sum == target) {
                result.push(path.slice())
                startIndex++
            }
            return
        }

        for (let i = startIndex; i < _candidates.length; i++) {
            if (i > startIndex && _candidates[i] == _candidates[i - 1]) {
                continue
            }
            lastVal = _candidates[i]
            path.push(_candidates[i])
            sum += _candidates[i]
            backTracking(_candidates, i + 1)
            path.pop()
            sum -= _candidates[i]
        }
    }
    let result = []
    let path = []
    let sum = 0
    let lastVal = 0

    candidates.sort((a, b) => a - b);

    backTracking(candidates, 0)
    return result
};


// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

// 示例 1：

// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]
// 示例 2：

// 输入：s = "a"
// 输出：[["a"]]
var partition = function (s) {
    const backTracking = function (_s, startIndex) {
        if (startIndex >= _s.length) {
            result.push(path.slice())
            return
        }

        for (let i = startIndex; i < _s.length; i++) {
            if (isPalindrome(_s, startIndex, i)) {
                path.push(_s.slice(startIndex, i + 1))
                backTracking(_s, i + 1)
                path.pop()
            }
        }
    }
    const isPalindrome = function (str, start, end) {
        let result = true
        while (start < end) {
            if (str[start] != str[end]) {
                result = false
            }
            start++
            end--
        }
        return result
    }
    let result = []
    let path = []
    backTracking(s, 0)

    return result
};

// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

// 示例 1：

// 输入：s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]
// 示例 2：

// 输入：s = "0000"
// 输出：["0.0.0.0"]
// 示例 3：

// 输入：s = "101023"
// 输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

var restoreIpAddresses = function (s) {
    const backTracking = function (startIndex) {
        if (path.length == 4) {
            if (startIndex >= s.length) {
                result.push(path.join("."))
            }
            return
        }


        for (let i = startIndex; i < s.length; i++) {
            let str = s.slice(startIndex, i + 1)
            if (str.length > 3 || str > 255) {
                continue
            }
            if (str.length > 1 && str[0] == 0) {
                continue
            }
            path.push(str)
            backTracking(i + 1)
            path.pop()
        }
    }
    let result = []
    let path = []
    backTracking(0)
    return result
};

// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]

var subsets = function (nums) {
    const backTracking = function (startIndex) {
        if (startIndex == nums.length + 1) {
            return
        }
        result.push(path.slice())
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i])
            backTracking(i + 1)
            path.pop()
        }
    }
    let result = []
    let path = []
    backTracking(0)
    return result
};

// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的 子集（幂集）。
// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

// 示例 1：
// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

// 示例 2：
// 输入：nums = [0]
// 输出：[[],[0]]

var subsetsWithDup = function (nums) {
    const backTracking = function (startIndex) {
        if (startIndex == nums.length + 1) {
            return
        }
        result.push(path.slice())
        for (let i = startIndex; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1] && i > startIndex) {
                continue
            }
            path.push(nums[i])
            backTracking(i + 1)
            path.pop()
        }
    }
    let result = []
    let path = []
    nums.sort((a, b) => a - b);
    backTracking(0)
    return result
};

// 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。
// 数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。

// 示例 1：
// 输入：nums = [4, 6, 7, 7]
// 输出：[[4, 6], [4, 6, 7], [4, 6, 7, 7], [4, 7], [4, 7, 7], [6, 7], [6, 7, 7], [7, 7]]

// 示例 2：
// 输入：nums = [4, 4, 3, 2, 1]
// 输出：[[4, 4]]
var findSubsequences = function (nums) {
    const backTracking = function (startIndex) {
        if (path.length > 1) {
            result.push(path.slice())
        }
        let used = []
        for (let i = startIndex; i < nums.length; i++) {
            if ((path.length > 0 && nums[i] < path[path.length - 1]) || used[nums[i]]) {
                continue
            }
            used[nums[i]] = true
            path.push(nums[i])
            backTracking(i + 1)
            path.pop()
        }
    }
    let result = []
    let path = []


    backTracking(0)
    return result
};

// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 示例 2：
// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]

// 示例 3：
// 输入：nums = [1]
// 输出：[[1]]

var permute = function (nums) {
    const backTracking = function () {
        if (path.length == nums.length) {
            result.push(path.slice())
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                path.push(nums[i])
                used[i] = true
                backTracking()
                path.pop()
                used[i] = false
            }
        }
    }
    let result = []
    let path = []
    let used = []


    backTracking()
    return result
};

// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

// 示例 1：
// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// 示例 2：
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
var permuteUnique = function (nums) {
    const backTracking = function () {
        if (path.length == nums.length) {
            result.push(path.slice())
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue
            }
            if (i > 0 && nums[i] == nums[i - 1] && used[i - 1]) {
                continue
            }
            path.push(nums[i])
            used[i] = true
            backTracking()
            path.pop()
            used[i] = false
        }
    }
    let result = []
    let path = []
    let used = []

    nums.sort((a, b) => a - b);
    backTracking()
    return result
};

// 给你一份航线列表 tickets ，其中 tickets[i] = [fromi, toi] 表示飞机出发和降落的机场地点。请你对该行程进行重新规划排序。
// 所有这些机票都属于一个从 JFK（肯尼迪国际机场）出发的先生，所以该行程必须从 JFK 开始。如果存在多种有效的行程，请你按字典排序返回最小的行程组合。
// 例如，行程 ["JFK", "LGA"] 与 ["JFK", "LGB"] 相比就更小，排序更靠前。
// 假定所有机票至少存在一种合理的行程。且所有的机票 必须都用一次 且 只能用一次。

// 输入：tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// 输出：["JFK","MUC","LHR","SFO","SJC"]

// 输入：tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// 输出：["JFK","ATL","JFK","SFO","ATL","SFO"]

var findItinerary = function (tickets) {
    const backTracking = function () {
        if (result.length != 0) {
            return
        }
        if (path.length == tickets.length + 1) {
            result = path.slice()
            return
        }

        for (let i = 0; i < tickets.length; i++) {
            if (used[i] || (tickets[i][0] != path[path.length - 1])) {
                continue
            }
            path.push(tickets[i][1])
            used[i] = true
            backTracking()
            path.pop()
            used[i] = false
        }
    }
    let result = []
    let path = ["JFK"]
    let used = []

    tickets.sort()
    backTracking()
    return result
};

var findItinerary = function (tickets) {
    let result = ["JFK"]
    let map = {}

    for (const tickt of tickets) {
        const [from, to] = tickt
        if (!map[from]) {
            map[from] = []
        }
        map[from].push(to)
    }

    for (const city in map) {
        map[city].sort()
    }

    const backTracking = function () {
        if (result.length == tickets.length + 1) {
            return true
        }
        if (!map[result[result.length - 1]] || !map[result[result.length - 1]].length) {
            return false
        }
        for (let i = 0; i < map[result[result.length - 1]].length; i++) {
            let city = map[result[result.length - 1]][i]
            map[result[result.length - 1]].splice(i, 1)
            result.push(city)
            if (backTracking()) {
                return true
            }
            result.pop()
            map[result[result.length - 1]].splice(i, 0, city)
        }
    }

    backTracking()
    return result
}

// 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

// 输入：n = 4
// 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

// 输入：n = 1
// 输出：[["Q"]]

var solveNQueens = function (n) {
    const backTracking = function (startIndex) {
        if (startIndex == n) {
            if (path.length == n) {
                let resultItem = path.slice()
                resultItem = resultItem.map((item) => {
                    return strToQueen(n, item)
                })
                result.push(resultItem)
            }
            return
        }

        for (let i = 0; i < n; i++) {
            if (used[i]) {
                continue
            }
            if (path.length > 0) {
                let isConform = true
                for (let j = 0; j < path.length; j++) {
                    if (path[j] + (path.length - j) == i || path[j] - (path.length - j) == i) {
                        isConform = false
                    }
                }
                if (!isConform) {
                    continue
                }
            }
            path.push(i)
            used[i] = true
            backTracking(startIndex + 1)
            path.pop()
            used[i] = false
        }
    }

    const strToQueen = function (n, index) {
        let queenStr = ""
        for (let i = 0; i < n; i++) {
            if (i == index) {
                queenStr += "Q"
            } else {
                queenStr += "."
            }
        }
        return queenStr
    }

    let result = []
    let path = []
    let used = []

    backTracking(0)
    return result
};

// 编写一个程序，通过填充空格来解决数独问题。
// 数独的解法需 遵循如下规则：
// 数字 1 - 9 在每一行只能出现一次。
// 数字 1 - 9 在每一列只能出现一次。
// 数字 1 - 9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
// 数独部分空格内已填入了数字，空白格用 '.' 表示

// 输入：board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// 输出：[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]

var solveSudoku = function (board) {
    const backTracking = function () {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] != ".") continue
                for (let m = 1; m <= 9; m++) {
                    if (isValid(i, j, `${m}`, board)) {
                        board[i][j] = `${m}`
                        if (backTracking()) {
                            return true
                        }
                        board[i][j] = "."
                    }
                }
                return false
            }
        }
        return true
    }

    const isValid = function (rowIndex, columnIndex, val, board) {
        // 行中是否存在
        for (let i = 0; i < 9; i++) {
            if (board[rowIndex][i] == val) return false
        }
        // 列中是否存在
        for (let i = 0; i < 9; i++) {
            if (board[i][columnIndex] == val) return false
        }
        // 九宫格是否存在
        let rowIndex2 = Math.floor(rowIndex / 3) * 3
        let columnIndex2 = Math.floor(columnIndex / 3) * 3
        for (let m = rowIndex2; m < rowIndex2 + 3; m++) {
            for (n = columnIndex2; n < columnIndex2 + 3; n++) {
                if (board[m][n] == val) return false
            }
        }

        return true
    }

    backTracking(board)
    return board
};