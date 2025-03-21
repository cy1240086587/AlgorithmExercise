// 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给定 n ，请计算 F(n) 。

// 示例 1：
// 输入：n = 2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1

// 示例 2：
// 输入：n = 3
// 输出：2
// 解释：F(3) = F(2) + F(1) = 1 + 1 = 2

// 示例 3：
// 输入：n = 4
// 输出：3
// 解释：F(4) = F(3) + F(2) = 2 + 1 = 3
var fib = function (n) {
    let dpArr = [0, 1]

    for (let i = 2; i <= n; i++) {
        let lastVal = dpArr[dpArr.length - 1] + dpArr[dpArr.length - 2]
        dpArr.push(lastVal)
    }

    let result = dpArr[n]
    return result
};

// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 示例 1：
// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶

// 示例 2：
// 输入：n = 3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶
var climbStairs = function (n) {
    let dp = []
    dp[0] = 1
    dp[1] = 2

    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n - 1]
};

// 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
// 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
// 请你计算并返回达到楼梯顶部的最低花费。

// 示例 1：
// 输入：cost = [10,15,20]
// 输出：15
// 解释：你将从下标为 1 的台阶开始。
// - 支付 15 ，向上爬两个台阶，到达楼梯顶部。
// 总花费为 15 。

// 示例 2：
// 输入：cost = [1,100,1,1,1,100,1,1,100,1]
// 输出：6
// 解释：你将从下标为 0 的台阶开始。
// - 支付 1 ，向上爬两个台阶，到达下标为 2 的台阶。
// - 支付 1 ，向上爬两个台阶，到达下标为 4 的台阶。
// - 支付 1 ，向上爬两个台阶，到达下标为 6 的台阶。
// - 支付 1 ，向上爬一个台阶，到达下标为 7 的台阶。
// - 支付 1 ，向上爬两个台阶，到达下标为 9 的台阶。
// - 支付 1 ，向上爬一个台阶，到达楼梯顶部。
// 总花费为 6 。
var minCostClimbingStairs = function (cost) {
    let dp = []

    dp[0] = 0
    dp[1] = 0

    for (let i = 2; i <= cost.length; i++) {
        dp[i] = dp[i - 1] + cost[i - 1] < dp[i - 2] + cost[i - 2] ? dp[i - 1] + cost[i - 1] : dp[i - 2] + cost[i - 2]
    }

    return dp[cost.length]
};

// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
// 问总共有多少条不同的路径？

// 示例 1：
// 输入：m = 3, n = 7
// 输出：28

// 示例 2：
// 输入：m = 3, n = 2
// 输出：3
// 解释：
// 从左上角开始，总共有 3 条路径可以到达右下角。
// 1. 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右
// 3. 向下 -> 向右 -> 向下

// 示例 3：
// 输入：m = 7, n = 3
// 输出：28

// 示例 4：
// 输入：m = 3, n = 3
// 输出：6

var uniquePaths = function (m, n) {
    let dp = Array(m).fill().map(item => Array(n))
    dp[0][0] = 1
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};

// 给定一个 m x n 的整数数组 grid。一个机器人初始位于 左上角（即 grid[0][0]）。机器人尝试移动到 右下角（即 grid[m - 1][n - 1]）。机器人每次只能向下或者向右移动一步。
// 网格中的障碍物和空位置分别用 1 和 0 来表示。机器人的移动路径中不能包含 任何 有障碍物的方格。
// 返回机器人能够到达右下角的不同路径数量。
// 测试用例保证答案小于等于 2 * 109。

// 示例 1：
// 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// 输出：2
// 解释：3x3 网格的正中间有一个障碍物。
// 从左上角到右下角一共有 2 条不同的路径：
// 1. 向右 -> 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右 -> 向右

// 示例 2：
// 输入：obstacleGrid = [[0,1],[0,0]]
// 输出：1

var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] == 1) return 0

    let m = obstacleGrid.length
    let n = obstacleGrid[0].length

    obstacleGrid[0][0] = 1

    for (let i = 1; i < m; i++) {
        if (obstacleGrid[i][0] == 1 || obstacleGrid[i - 1][0] == 0) {
            obstacleGrid[i][0] = 0
        } else {
            obstacleGrid[i][0] = 1
        }
    }

    for (let j = 1; j < n; j++) {
        if (obstacleGrid[0][j] == 1 || obstacleGrid[0][j - 1] == 0) {
            obstacleGrid[0][j] = 0
        } else {
            obstacleGrid[0][j] = 1
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] == 1) {
                obstacleGrid[i][j] = 0
            } else {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
            }
        }
    }
    return obstacleGrid[m - 1][n - 1]
};

// 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。
// 返回 你可以获得的最大乘积 。

// 示例 1:
// 输入: n = 2
// 输出: 1
// 解释: 2 = 1 + 1, 1 × 1 = 1。

// 示例 2:
// 输入: n = 10
// 输出: 36
// 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
var integerBreak = function (n) {
    let dp = []

    dp[0] = 0
    dp[1] = 1

    for (let i = 2; i <= n; i++) {
        let sum = 0
        for (let j = 1; j <= i / 2; j++) {
            sum = Math.max(sum, j * dp[i - j], j * (i - j))
        }
        dp[i] = sum
        sum = 0
    }

    return dp[n]
};

// 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。

// 示例 1：
// 输入：n = 3
// 输出：5

// 示例 2：
// 输入：n = 1
// 输出：1
var numTrees = function (n) {
    let dp = []
    dp[0] = 0
    dp[1] = 1

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; i++) {
            dp[i] += dp[j - 1] * dp[i - j]
        }
    }

    return dp[n]
};

// 题目描述
// 小明是一位科学家，他需要参加一场重要的国际科学大会，以展示自己的最新研究成果。他需要带一些研究材料，但是他的行李箱空间有限。这些研究材料包括实验设备、文献资料和实验样本等等，它们各自占据不同的空间，并且具有不同的价值。 
// 小明的行李空间为 N，问小明应该如何抉择，才能携带最大价值的研究材料，每种研究材料只能选择一次，并且只有选与不选两种选择，不能进行切割。
// 输入描述
// 第一行包含两个正整数，第一个整数 M 代表研究材料的种类，第二个正整数 N，代表小明的行李空间。
// 第二行包含 M 个正整数，代表每种研究材料的所占空间。 
// 第三行包含 M 个正整数，代表每种研究材料的价值。
// 输出描述
// 输出一个整数，代表小明能够携带的研究材料的最大价值。
// 输入示例
// 6 1
// 2 2 3 1 5 2
// 2 3 1 5 4 3
// 输出示例
// 5

var numTrees = function (weight, value, bagweight) {
    let dp = Array.from({ length: weight.length }, () => Array(bagweight + 1).fill(0));

    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 0
    }

    for (let j = weight[0]; j <= bagweight; j++) {
        dp[0][j] = value[0]
    }

    for (let m = 1; m < dp.length; m++) {
        for (let n = 0; n < bagweight + 1; n++) {
            if (n < weight[m]) {
                dp[m][n] = dp[m - 1][n]
            } else {
                dp[m][n] = Math.max(dp[m - 1][n], dp[m - 1][n - weight[m]] + value[m])
            }
        }
    }

    return dp[weight.length - 1][bagweight]
}


// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

// 示例 1：
// 输入：nums = [1,5,11,5]
// 输出：true
// 解释：数组可以分割成 [1, 5, 5] 和 [11] 。

// 示例 2：
// 输入：nums = [1,2,3,5]
// 输出：false
// 解释：数组不能分割成两个元素和相等的子集。

var canPartition = function (nums) {
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    if (sum % 2 != 0) {
        return false
    }

    let target = sum / 2

    let dp = Array(target + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
            if (dp[j] === target) {
                return true;
            }
        }
    }
    return dp[target] === target;
};

// 有一堆石头，用整数数组 stones 表示。其中 stones[i] 表示第 i 块石头的重量。
// 每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
// 如果 x == y，那么两块石头都会被完全粉碎；
// 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
// 最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 0。

// 示例 1：
// 输入：stones = [2,7,4,1,8,1]
// 输出：1
// 解释：
// 组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，
// 组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，
// 组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，
// 组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。

// 示例 2：
// 输入：stones = [31,26,33,21,40]
// 输出：5
var lastStoneWeightII = function (stones) {
    let sum = 0

    for (let i = 0; i < stones.length; i++) {
        sum += stones[i]
    }

    let mid = Math.floor(sum / 2)
    let dp = Array(mid + 1).fill(0)

    for (let i = 0; i <= stones.length; i++) {
        for (let j = mid; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
        }
    }

    let stoneMax = dp[mid]
    let result = sum - stoneMax * 2
    return result
};

// 给你一个非负整数数组 nums 和一个整数 target 。
// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
// 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

// 示例 1：
// 输入：nums = [1,1,1,1,1], target = 3
// 输出：5
// 解释：一共有 5 种方法让最终目标和为 3 。
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3

// 示例 2：
// 输入：nums = [1], target = 1
// 输出：1
var findTargetSumWays = function (nums, target) {
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    if (Math.abs(target) > sum) {
        return 0;
    }

    if ((target + sum) % 2) {
        return 0;
    }

    let mid = (target + sum) / 2;

    let dp = new Array(mid + 1).fill(0);

    dp[0] = 1

    for (let i = 0; i < nums.length; i++) {
        for (let j = mid; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]]
        }
    }

    return dp[mid]
};

// 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。
// 请你找出并返回 strs 的最大子集的长度，该子集中 最多 有 m 个 0 和 n 个 1 。
// 如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。

// 示例 1：
// 输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
// 输出：4
// 解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
// 其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。

// 示例 2：
// 输入：strs = ["10", "0", "1"], m = 1, n = 1
// 输出：2
// 解释：最大的子集是 {"0", "1"} ，所以答案是 2 。
var findMaxForm = function (strs, m, n) {
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
    for (let str of strs) {
        let zeroNum = 0
        let oneNum = 0
        for (let s of str) {
            if (s === "0") {
                zeroNum++
            } else {
                oneNum++
            }
        }

        for (let i = m; i >= zeroNum; i--) {
            for (let j = n; j >= oneNum; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1)
            }
        }
    }

    return dp[m][n]
};

// 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
// 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
// 假设每一种面额的硬币有无限个。 
// 题目数据保证结果符合 32 位带符号整数。


// 示例 1：
// 输入：amount = 5, coins = [1, 2, 5]
// 输出：4
// 解释：有四种方式可以凑成总金额：
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

// 示例 2：
// 输入：amount = 3, coins = [2]
// 输出：0
// 解释：只用面额 2 的硬币不能凑成总金额 3 。

// 示例 3：
// 输入：amount = 10, coins = [10] 
// 输出：1

var change = function (amount, coins) {
    // 定义DP数组
    // dp[j]代表总额为j的方法数
    let dp = Array(amount + 1).fill(0)
    dp[0] = 1

    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]]
        }
    }

    return dp[amount]
};

// 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。
// 题目数据保证答案符合 32 位整数范围。

// 示例 1：
// 输入：nums = [1,2,3], target = 4
// 输出：7
// 解释：
// 所有可能的组合为：
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// 请注意，顺序不同的序列被视作不同的组合。

// 示例 2：
// 输入：nums = [9], target = 3
// 输出：0
var combinationSum4 = function (nums, target) {
    // dp[j]为目标值为j的组合个数
    let dp = Array(target + 1).fill(0)
    dp[0] = 1

    for (let i = 0; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]]
            }
        }
    }

    return dp[target]
};

// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬至多m (1 <= m < n)个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。
// 输入描述：输入共一行，包含两个正整数，分别表示n, m
// 输出描述：输出一个整数，表示爬到楼顶的方法数。

// 输入示例：3 2
// 输出示例：3
// 提示：
// 当 m = 2，n = 3 时，n = 3 这表示一共有三个台阶，m = 2 代表你每次可以爬一个台阶或者两个台阶。
// 此时你有三种方法可以爬到楼顶。
// 1 阶 + 1 阶 + 1 阶段
// 1 阶 + 2 阶
// 2 阶 + 1 阶
var climbStairs = function (n) {
    let dp = Array(n + 1).fill(0)
    dp[0] = 1

    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= 2; j++) {
            if (i >= j) {
                dp[i] += dp[i - j]
            }
        }
    }

    return dp[n]
}

// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
// 你可以认为每种硬币的数量是无限的。

// 示例 1：
// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 

// 解释：11 = 5 + 5 + 1
// 示例 2：
// 输入：coins = [2], amount = 3
// 输出：-1

// 示例 3：
// 输入：coins = [1], amount = 0
// 输出：0
var coinChange = function (coins, amount) {
    // dp[j]表示总金额为j的组成方案里，硬币数最少的组合
    let dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
        }
    }

    return dp[amount]
};

// 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

// 示例 1：
// 输入：n = 12
// 输出：3 
// 解释：12 = 4 + 4 + 4

// 示例 2：
// 输入：n = 13
// 输出：2
// 解释：13 = 4 + 9
var numSquares = function (n) {
    let dp = Array(n + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 1; i ** 2 <= n; i++) {
        for (let j = i ** 2; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - i ** 2] + 1)
        }
    }

    return dp[n]
};

// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。
// 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

// 示例 1：
// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。

// 示例 2：
// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
// 输出: true
// 解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
//      注意，你可以重复使用字典中的单词。

// 示例 3：
// 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// 输出: false
var wordBreak = function (s, wordDict) {
    // 字符串前s个字符匹配成功的个数
    let dp = Array(s.length + 1).fill(0)
    dp[0] = 1

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            let str = wordDict[j]
            let strLen = wordDict[j].length
            if (dp[i] === 1 && s.slice(i, i + strLen) === str) {
                dp[i + strLen] = 1
            }
        }
    }

    return dp[s.length] == 1
};


// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

// 示例 1：
// 输入：[1,2,3,1]
// 输出：4
// 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。

// 示例 2：
// 输入：[2,7,9,3,1]
// 输出：12
// 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。
var rob = function (nums) {
    // 偷窃n个房屋的最优解
    let dp = Array(nums.length + 1)
    dp[0] = 0
    dp[1] = nums[0]

    for (let i = 1; i < nums.length; i++) {
        dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i])
    }

    return dp[nums.length]
};

// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

// 示例 1：
// 输入：nums = [2,3,2]
// 输出：3
// 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。

// 示例 2：
// 输入：nums = [1,2,3,1]
// 输出：4
// 解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。

//      偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 3：
// 输入：nums = [1,2,3]
// 输出：3
var rob = function (nums) {
    if (nums.length == 1) return nums[0]
    return Math.max(rob2(nums.slice(1)), rob2(nums.slice(0, -1)))
};

var rob2 = function (nums) {
    // 偷窃n个房屋的最优解
    let dp = Array(nums.length + 1)
    dp[0] = 0
    dp[1] = nums[0]

    for (let i = 1; i < nums.length; i++) {
        dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i])
    }

    return dp[nums.length]
}

// 小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。
// 除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。
// 给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。

// 示例 1:
// 输入: root = [3,2,3,null,3,null,1]
// 输出: 7 
// 解释: 小偷一晚能够盗取的最高金额 3 + 3 + 1 = 7

// 示例 2:
// 输入: root = [3,4,5,1,3,null,1]
// 输出: 9
// 解释: 小偷一晚能够盗取的最高金额 4 + 5 = 9
var rob = function (root) {
    const postOrder = node => {
        if (!node) return [0, 0]
        let left = postOrder(node.left)
        let right = postOrder(node.right)
        let Do = node.val + left[0] + right[0]
        let Donot = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
        return [Donot, Do]
    }
    let res = postOrder(root)
    return Math.max(...res)
};

// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 示例 1：
// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

// 示例 2：
// 输入：prices = [7,6,4,3,1]
// 输出：0
// 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。

// 贪心解法
var maxProfit = function (prices) {
    let min = prices[0]
    let result = 0

    for (let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min)
        result = Math.max(result, prices[i] - min)
    }

    return result
};

// 动态规划解法
var maxProfit = function (prices) {
    let dp = Array(prices.length).fill().map(item => Array(2))

    // 定义dp[i][0]代表第i天持有股票的最大收益
    // 定义dp[i][1]代表第i天不持有股票的最大收益
    dp[0][0] = -prices[0]
    dp[0][1] = 0

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }

    let result = Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1])

    return result
}

// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
// 返回 你能获得的 最大 利润 。

// 示例 1：
// 输入：prices = [7,1,5,3,6,4]
// 输出：7
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
// 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3。
// 最大总利润为 4 + 3 = 7 。

// 示例 2：
// 输入：prices = [1,2,3,4,5]
// 输出：4
// 解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
// 最大总利润为 4 。

// 示例 3：
// 输入：prices = [7,6,4,3,1]
// 输出：0
// 解释：在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0。

// 贪心解法
var maxProfit = function (prices) {
    let result = 0

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            result += prices[i] - prices[i - 1]
        }
    }

    return result
}
// 动态规划解法
var maxProfit = function (prices) {
    let dp = Array(prices.length).fill().map(item => Array(2))

    // 定义dp[i][0]代表第i天持有股票的最大收益
    // 定义dp[i][1]代表第i天不持有股票的最大收益
    dp[0][0] = -prices[0]
    dp[0][1] = 0

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }

    let result = Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1])

    return result
}


// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 示例 1:
// 输入：prices = [3,3,5,0,0,3,1,4]
// 输出：6
// 解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
//      随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。

// 示例 2：
// 输入：prices = [1,2,3,4,5]
// 输出：4
// 解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。   
//      注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。   
//      因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。

// 示例 3：
// 输入：prices = [7,6,4,3,1] 
// 输出：0 
// 解释：在这个情况下, 没有交易完成, 所以最大利润为 0。

// 示例 4：
// 输入：prices = [1]
// 输出：0
var maxProfit = function (prices) {
    let dp = Array(prices.length).fill().map(item => Array(5))

    // 定义dp[i][0]代表第i天没有操作
    // 定义dp[i][1]代表第i天第一次持有股票
    // 定义dp[i][1]代表第i天第一次不持有股票
    // 定义dp[i][1]代表第i天第二次持有股票
    // 定义dp[i][1]代表第i天第二次不持有股票
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    dp[0][2] = 0
    dp[0][3] = -prices[0]
    dp[0][4] = 0

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = dp[i - 1][0]
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i])
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i])
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i])
    }

    let result = Math.max(dp[prices.length - 1][0], dp[prices.length - 1][2], dp[prices.length - 1][4])

    return result
};


// 给你一个整数数组 prices 和一个整数 k ，其中 prices[i] 是某支给定的股票在第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。也就是说，你最多可以买 k 次，卖 k 次。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 示例 1：
// 输入：k = 2, prices = [2,4,1]
// 输出：2
// 解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。

// 示例 2：
// 输入：k = 2, prices = [3,2,6,5,0,3]
// 输出：7
// 解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
//      随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。

var maxProfit = function (k, prices) {
    if (prices == null || prices.length < 2 || k == 0) {
        return 0;
    }

    let dp = Array(prices.length).fill().map(item => Array((k * 2) + 1).fill(0))

    for (let i = 0; i <= k; i++) {
        dp[0][i * 2 - 1] = -prices[0]
    }

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = dp[i - 1][0]
        for (let j = 0; j < k; j++) {
            dp[i][j * 2 + 1] = Math.max(dp[i - 1][j * 2 + 1], dp[i - 1][j * 2] - prices[i])
            dp[i][j * 2 + 2] = Math.max(dp[i - 1][j * 2 + 2], dp[i - 1][j * 2 + 1] + prices[i])
        }
    }

    let result = Math.max(...dp[prices.length - 1])

    return result
};

// 给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​
// 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 示例 1:
// 输入: prices = [1,2,3,0,2]
// 输出: 3 
// 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]

// 示例 2:
// 输入: prices = [1]
// 输出: 0

var maxProfit = function (prices) {
    let dp = Array(prices.length).fill().map(item => Array(4))

    // 定义dp[i][0]代表第i天持有股票
    // 定义dp[i][1]代表第i天不持有股票【非冷冻期】
    // 定义dp[i][2]代表第i天不持有股票【卖出股票】
    // 定义dp[i][3]代表第i天不持有股票【冷冻期】
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    dp[0][2] = 0
    dp[0][3] = 0

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][3] - prices[i], dp[i - 1][1] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3])
        dp[i][2] = dp[i - 1][0] + prices[i]
        dp[i][3] = dp[i - 1][2]
    }

    let result = Math.max(dp[prices.length - 1][1], dp[prices.length - 1][2], dp[prices.length - 1][3])

    return result
};

// 给定一个整数数组 prices，其中 prices[i]表示第 i 天的股票价格 ；整数 fee 代表了交易股票的手续费用。
// 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
// 返回获得利润的最大值。
// 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

// 示例 1：
// 输入：prices = [1, 3, 2, 8, 4, 9], fee = 2
// 输出：8
// 解释：能够达到的最大利润:
// 在此处买入 prices[0] = 1
// 在此处卖出 prices[3] = 8
// 在此处买入 prices[4] = 4
// 在此处卖出 prices[5] = 9
// 总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8

// 示例 2：
// 输入：prices = [1,3,7,5,10,3], fee = 3
// 输出：6

var maxProfit = function (prices, fee) {
    let dp = Array(prices.length).fill().map(item => Array(2))

    // 定义dp[i][0]代表第i天持有股票的最大收益
    // 定义dp[i][1]代表第i天不持有股票的最大收益
    dp[0][0] = -prices[0]
    dp[0][1] = 0

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee)
    }

    let result = Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1])

    return result
};

// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

// 示例 1：
// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

// 示例 2：
// 输入：nums = [0,1,0,3,2,3]
// 输出：4

// 示例 3：
// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1
var lengthOfLIS = function (nums) {
    let dp = Array(nums.length).fill(1)

    // dp[i]表示以nums[i]结尾的最长子序列长度
    dp[0] = 1

    let result = 1

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i])
            }
        }
        result = Math.max(result, dp[i])
    }

    return result
};

// 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。
// 连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。

// 示例 1：
// 输入：nums = [1,3,5,4,7]
// 输出：3
// 解释：最长连续递增序列是 [1,3,5], 长度为3。
// 尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。

// 示例 2：
// 输入：nums = [2,2,2,2,2]
// 输出：1
// 解释：最长连续递增序列是 [2], 长度为1。

var findLengthOfLCIS = function (nums) {
    let dp = Array(nums.length).fill(1)

    // dp[i]表示以nums[i]结尾的最长子序列长度
    dp[0] = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1
        } else {
            dp[i] = 1
        }
    }

    let result = Math.max(...dp)

    return result
};

// 给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。

// 示例 1：
// 输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// 输出：3
// 解释：长度最长的公共子数组是 [3,2,1] 。

// 示例 2：
// 输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
// 输出：5

var findLength = function (nums1, nums2) {
    let dp = Array(nums1.length + 1).fill().map((item) => Array(nums2.length + 1).fill(0))

    // dp[i][j]表示以nums1[i]和nums[j]为结尾的两个数组的公共最长子数组

    let result = 0

    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            }

            result = Math.max(dp[i][j], result)
        }
    }

    return result
};

// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
// 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

// 示例 1：
// 输入：text1 = "abcde", text2 = "ace" 
// 输出：3  
// 解释：最长公共子序列是 "ace" ，它的长度为 3 。

// 示例 2：
// 输入：text1 = "abc", text2 = "abc"
// 输出：3
// 解释：最长公共子序列是 "abc" ，它的长度为 3 。

// 示例 3：
// 输入：text1 = "abc", text2 = "def"
// 输出：0
// 解释：两个字符串没有公共子序列，返回 0 。

var longestCommonSubsequence = function (text1, text2) {
    let dp = Array(text1.length + 1).fill().map((item) => Array(text2.length + 1).fill(0))

    // dp[i][j]表示以字符串i-1为结尾的text1和以字符串j-1为结尾的text2的最长工资子序列
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }


    return dp[text1.length][text2.length]
};

// 在两条独立的水平线上按给定的顺序写下 nums1 和 nums2 中的整数。
// 现在，可以绘制一些连接两个数字 nums1[i] 和 nums2[j] 的直线，这些直线需要同时满足：
//  nums1[i] == nums2[j]
// 且绘制的直线不与任何其他连线（非水平线）相交。
// 请注意，连线即使在端点也不能相交：每个数字只能属于一条连线。
// 以这种方法绘制线条，并返回可以绘制的最大连线数。

// 示例 1：
// 输入：nums1 = [1,4,2], nums2 = [1,2,4]
// 输出：2
// 解释：可以画出两条不交叉的线，如上图所示。 
// 但无法画出第三条不相交的直线，因为从 nums1[1]=4 到 nums2[2]=4 的直线将与从 nums1[2]=2 到 nums2[1]=2 的直线相交。

// 示例 2：
// 输入：nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
// 输出：3

// 示例 3：
// 输入：nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
// 输出：2

var maxUncrossedLines = function (nums1, nums2) {
    let dp = Array(nums1.length + 1).fill().map((item) => Array(nums2.length + 1).fill(0))

    // dp[i][j]表示以字符串i-1为结尾的text1和以字符串j-1为结尾的text2的最长工资子序列
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }


    return dp[nums1.length][nums2.length]
};

// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组是数组中的一个连续部分。

// 示例 1：
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

// 示例 2：
// 输入：nums = [1]
// 输出：1

// 示例 3：
// 输入：nums = [5,4,-1,7,8]
// 输出：23
var maxSubArray = function (nums) {
    // let dp = Array(nums.length).fill().map((item) => Array(2).fill(0))

    // // dp[i][0]表示第i个元素在连续数组中时，子数组最大数值
    // // dp[i][1]表示第i个元素不在连续数组中时，子数组最大数值

    // dp[0][0] = nums[0]
    // dp[0][1] = 0

    // for (let i = 1; i < nums.length; i++) {
    //     dp[i][0] = dp[i - 1][0] + nums[i]
    //     dp[i][1] = dp[i - 1][1]
    // }

    // let result = Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1])

    // return result
}