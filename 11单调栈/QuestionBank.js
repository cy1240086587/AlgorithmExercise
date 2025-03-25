// 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 示例 1:
// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]

// 示例 2:
// 输入: temperatures = [30,40,50,60]
// 输出: [1,1,1,0]

// 示例 3:
// 输入: temperatures = [30,60,90]
// 输出: [1,1,0]

var dailyTemperatures = function (temperatures) {
    const n = temperatures.length;
    const res = Array(n).fill(0);
    const stack = [];  // 递增栈：用于存储元素右面第一个比他大的元素下标
    stack.push(0);
    for (let i = 1; i < n; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const top = stack.pop();
            res[top] = i - top;
        }
        stack.push(i);
    }
    return res;
};

// nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。
// 给你两个 没有重复元素 的数组 nums1 和 nums2 ，下标从 0 开始计数，其中nums1 是 nums2 的子集。
// 对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定 nums2[j] 的 下一个更大元素 。如果不存在下一个更大元素，那么本次查询的答案是 -1 。
// 返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。

// 示例 1：
// 输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
// 输出：[-1,3,-1]
// 解释：nums1 中每个值的下一个更大元素如下所述：
// - 4 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
// - 1 ，用加粗斜体标识，nums2 = [1,3,4,2]。下一个更大元素是 3 。
// - 2 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。

// 示例 2：
// 输入：nums1 = [2,4], nums2 = [1,2,3,4].
// 输出：[3,-1]
// 解释：nums1 中每个值的下一个更大元素如下所述：
// - 2 ，用加粗斜体标识，nums2 = [1,2,3,4]。下一个更大元素是 3 。
// - 4 ，用加粗斜体标识，nums2 = [1,2,3,4]。不存在下一个更大元素，所以答案是 -1 。
var nextGreaterElement = function (nums1, nums2) {
    let len = nums2.length
    let map = new Map()
    let stack = []
    stack.push(nums2[0])

    for (let i = 1; i < len; i++) {
        while (stack.length && nums2[i] > stack[stack.length - 1]) {
            let top = stack.pop()
            map.set(top, nums2[i])
        }
        stack.push(nums2[i]);
    }

    let result = Array(nums1.length).fill(0);

    for (let j = 0; j < nums1.length; j++) {
        result[j] = map.get(nums1[j]) || -1
    }

    return result
};

// 给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的 下一个更大元素 。
// 数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1 。

// 示例 1:
// 输入: nums = [1,2,1]
// 输出: [2,-1,2]
// 解释: 第一个 1 的下一个更大的数是 2；
// 数字 2 找不到下一个更大的数； 
// 第二个 1 的下一个最大的数需要循环搜索，结果也是 2。

// 示例 2:
// 输入: nums = [1,2,3,4,3]
// 输出: [2,3,4,-1,4]

var nextGreaterElements = function (nums) {
    let newNums = nums.concat(nums)
    const n = newNums.length;
    const res = Array(n).fill(-1);
    const stack = [];  // 递增栈：用于存储元素右面第一个比他大的元素下标
    stack.push(0);
    for (let i = 1; i < n; i++) {
        while (stack.length && newNums[i] > newNums[stack[stack.length - 1]]) {
            const top = stack.pop();
            res[top] = newNums[i];
        }
        stack.push(i);
    }

    res.length = nums.length

    return res;
};

// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 示例 1：
// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。

// 示例 2：
// 输入：height = [4,2,0,3,2,5]
// 输出：9

var trap = function (height) {
    const n = height.length;
    const stack = [];
    stack.push(0);

    let result = 0

    for (let i = 1; i < n; i++) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            let mid = stack[stack.length - 1];
            stack.pop();
            if (stack.length != 0) {
                result += (Math.min(height[i], height[stack[stack.length - 1]]) - height[mid]) * (i - stack[stack.length - 1] - 1)
            }

        }
        stack.push(i);
    }

    return result;
};

// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

// 示例 1:
// 输入：heights = [2,1,5,6,2,3]
// 输出：10
// 解释：最大的矩形为图中红色区域，面积为 10

// 示例 2：
// 输入： heights = [2,4]
// 输出： 4

var largestRectangleArea = function (heights) {
    heights.push(0)
    heights.unshift(0)
    const n = heights.length;
    const stack = [];
    stack.push(0);

    const res = Array(n).fill(0)

    for (let i = 1; i < n; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            const mid = stack.pop();
            let left = stack[stack.length - 1]
            let right = i
            let sum = heights[mid] * (right - left - 1)
            res[mid] = sum
        }
        stack.push(i);
    }

    let result = Math.max(...res)

    return result;
};