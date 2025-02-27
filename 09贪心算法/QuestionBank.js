// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
// 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是满足尽可能多的孩子，并输出这个最大数值。

// 输入: g = [1,2,3], s = [1,1]
// 输出: 1

// 输入: g = [1,2], s = [1,2,3]
// 输出: 2

var findContentChildren = function (g, s) {
    let result = 0
    g.sort((a, b) => b - a);
    s.sort((a, b) => b - a);
    for (let i = 0; i < g.length; i++) {
        if (g[i] <= s[0]) {
            result++
            s.shift()
        }
    }
    return result
};

// 如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为 摆动序列 。第一个差（如果存在的话）可能是正数或负数。仅有一个元素或者含两个不等元素的序列也视作摆动序列。
// 例如， [1, 7, 4, 9, 2, 5] 是一个 摆动序列 ，因为差值 (6, -3, 5, -7, 3) 是正负交替出现的。
// 相反，[1, 4, 7, 2, 5] 和 [1, 7, 4, 5, 5] 不是摆动序列，第一个序列是因为它的前两个差值都是正数，第二个序列是因为它的最后一个差值为零。
// 子序列 可以通过从原始序列中删除一些（也可以不删除）元素来获得，剩下的元素保持其原始顺序。
// 给你一个整数数组 nums ，返回 nums 中作为 摆动序列 的 最长子序列的长度 。

// 示例 1：
// 输入：nums = [1,7,4,9,2,5]
// 输出：6
// 解释：整个序列均为摆动序列，各元素之间的差值为 (6, -3, 5, -7, 3) 。

// 示例 2：
// 输入：nums = [1,17,5,10,13,15,10,5,16,8]
// 输出：7
// 解释：这个序列包含几个长度为 7 摆动序列。
// 其中一个是 [1, 17, 10, 13, 10, 16, 8] ，各元素之间的差值为 (16, -7, 3, -3, 6, -8) 。

// 示例 3：
// 输入：nums = [1,2,3,4,5,6,7,8,9]
// 输出：2
var wiggleMaxLength = function (nums) {
    if (nums.length <= 1) return nums.length

    let result = 1
    let preDiff = 0
    let curDiff = 0

    for (let i = 0; i < nums.length - 1; i++) {
        curDiff = nums[i + 1] - nums[i]
        if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
            result++
            preDiff = curDiff
        }
    }

    return result
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
    let sum = 0
    let max = null


    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]

        if (sum > max || max == null) {
            max = sum
        }

        if (sum < 0) {
            sum = 0
        }

    }

    return max
};

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

var maxProfit = function (prices) {
    let result = 0

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            result += prices[i] - prices[i - 1]
        }
    }

    return result
};

// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

// 示例 1：
// 输入：nums = [2,3,1,1,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

// 示例 2：
// 输入：nums = [3,2,1,0,4]
// 输出：false
// 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
var canJump = function (nums) {
    let max = 1

    for (let i = 0; i < nums.length; i++) {
        if (i >= max) return
        if (i + nums[i] + 1 > max) {
            max = nums[i] + i + 1
        }
    }

    return max >= nums.length
};

// 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。

// 每个元素 nums[i] 表示从索引 i 向后跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

// 0 <= j <= nums[i] 
// i + j < n
// 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。

// 示例 1:
// 输入: nums = [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
// 示例 2:
// 输入: nums = [2,3,0,1,4]
// 输出: 2

var jump = function (nums) {
    if (nums.length == 1) return 0
    let result = 1
    let maxIndex = nums[0]
    let stepMax = 0

    for (let i = 0; i < nums.length; i++) {
        if (i > maxIndex) {
            maxIndex = stepMax
            result++
        }
        if (i + nums[i] > stepMax) {
            stepMax = nums[i] + i
        }
    }
    return result
};

// 给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：
// 选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
// 重复这个过程恰好 k 次。可以多次选择同一个下标 i 。
// 以这种方式修改数组后，返回数组 可能的最大和 。

// 示例 1：
// 输入：nums = [4,2,3], k = 1
// 输出：5
// 解释：选择下标 1 ，nums 变为 [4,-2,3] 。

// 示例 2：
// 输入：nums = [3,-1,0,2], k = 3
// 输出：6
// 解释：选择下标 (1, 2, 2) ，nums 变为 [3,1,0,2] 。

// 示例 3：
// 输入：nums = [2,-3,-1,5,-4], k = 2
// 输出：13
// 解释：选择下标 (1, 4) ，nums 变为 [2,3,-1,5,4] 。

var largestSumAfterKNegations = function (nums, k) {
    let sum = 0

    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (k > 0 && nums[i] < 0) {
            nums[i] = -nums[i]
            k--
        }
        sum += nums[i]
    }

    if (k > 0 && k % 2 == 1) {
        nums.sort((a, b) => a - b)
        sum -= 2 * nums[0]
    }

    return sum
};

// 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
// 给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。

// 示例 1:
// 输入: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// 输出: 3

// 示例 2:
// 输入: gas = [2,3,4], cost = [3,4,3]
// 输出: -1

// 朴素
var canCompleteCircuit = function (gas, cost) {
    let startIndex = 0
    let sum = 0

    for (let i = 0; i < gas.length; i++) {
        if (startIndex == gas.length) return -1
        sum = sum + gas[i] - cost[i]
        if (sum < 0) {
            while (sum < 0 && startIndex < gas.length) {
                sum = sum - gas[0] + cost[0]
                gas.push(gas.shift())
                cost.push(cost.shift())
                startIndex++
                i--
            }
        }
    }

    return startIndex
};
// 优化
var canCompleteCircuit = function (gas, cost) {
    let startIndex = 0
    let total = 0
    let cur = 0

    for (let i = 0; i < gas.length; i++) {
        total = total + gas[i] - cost[i]
        cur = cur + gas[i] - cost[i]
        if (cur < 0 && gas[i] - cost[i] < 0) {
            startIndex = i + 1
            cur = 0
        }
    }
    if (total < 0) return -1

    return startIndex
};

// n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。
// 你需要按照以下要求，给这些孩子分发糖果：
// 每个孩子至少分配到 1 个糖果。
// 相邻两个孩子评分更高的孩子会获得更多的糖果。
// 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。

// 示例 1：
// 输入：ratings = [1,0,2]
// 输出：5
// 解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。

// 示例 2：
// 输入：ratings = [1,2,2]
// 输出：4
// 解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。
var candy = function (ratings) {
    let candy = [1]

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candy.push(candy[candy.length - 1] + 1)
        } else if (ratings[i] <= ratings[i - 1]) {
            candy.push(1)
        }
    }

    for (let j = ratings.length - 2; j >= 0; j--) {
        if (ratings[j] > ratings[j + 1]) {
            candy[j] = candy[j + 1] + 1 > candy[j] ? candy[j + 1] + 1 : candy[j]
        }
    }

    let total = 0
    for (let m = 0; m < candy.length; m++) {
        total += candy[m]
    }

    return total
};

// 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。
// 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。
// 注意，一开始你手头没有任何零钱。
// 给你一个整数数组 bills ，其中 bills[i] 是第 i 位顾客付的账。如果你能给每位顾客正确找零，返回 true ，否则返回 false 。

// 示例 1：

// 输入：bills = [5,5,5,10,20]
// 输出：true
// 解释：
// 前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
// 第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
// 第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
// 由于所有客户都得到了正确的找零，所以我们输出 true。

// 示例 2：
// 输入：bills = [5,5,10,10,20]
// 输出：false
// 解释：
// 前 2 位顾客那里，我们按顺序收取 2 张 5 美元的钞票。
// 对于接下来的 2 位顾客，我们收取一张 10 美元的钞票，然后返还 5 美元。
// 对于最后一位顾客，我们无法退回 15 美元，因为我们现在只有两张 10 美元的钞票。
// 由于不是每位顾客都得到了正确的找零，所以答案是 false。
var lemonadeChange = function (bills) {
    let cashObj = {
        "5": 0,
        "10": 0,
        "20": 0,
    }
    for (let i = 0; i < bills.length; i++) {
        cashObj[String(bills[i])] = cashObj[String(bills[i])] + 1
        if (bills[i] == 10) {
            if (cashObj["5"] > 0) {
                cashObj["5"] = cashObj["5"] - 1
            } else {
                return false
            }
        } else if (bills[i] == 20) {
            if (cashObj["10"] > 0 && cashObj["5"] > 0) {
                cashObj["10"] = cashObj["10"] - 1
                cashObj["5"] = cashObj["5"] - 1
            } else if (cashObj["5"] > 2) {
                cashObj["5"] = cashObj["5"] - 3
            } else {
                return false
            }
        }
    }
    return true
};

// 假设有打乱顺序的一群人站成一个队列，数组 people 表示队列中一些人的属性（不一定按顺序）。每个 people[i] = [hi, ki] 表示第 i 个人的身高为 hi ，前面 正好 有 ki 个身高大于或等于 hi 的人。
// 请你重新构造并返回输入数组 people 所表示的队列。返回的队列应该格式化为数组 queue ，其中 queue[j] = [hj, kj] 是队列中第 j 个人的属性（queue[0] 是排在队列前面的人）。

// 示例 1：
// 输入：people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
// 输出：[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
// 解释：
// 编号为 0 的人身高为 5 ，没有身高更高或者相同的人排在他前面。
// 编号为 1 的人身高为 7 ，没有身高更高或者相同的人排在他前面。
// 编号为 2 的人身高为 5 ，有 2 个身高更高或者相同的人排在他前面，即编号为 0 和 1 的人。
// 编号为 3 的人身高为 6 ，有 1 个身高更高或者相同的人排在他前面，即编号为 1 的人。
// 编号为 4 的人身高为 4 ，有 4 个身高更高或者相同的人排在他前面，即编号为 0、1、2、3 的人。
// 编号为 5 的人身高为 7 ，有 1 个身高更高或者相同的人排在他前面，即编号为 1 的人。
// 因此 [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] 是重新构造后的队列。

// 示例 2：
// 输入：people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]
// 输出：[[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]
var reconstructQueue = function (people) {

};