// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 示例 1: 输入: s = "anagram", t = "nagaram" 输出: true
// 示例 2: 输入: s = "rat", t = "car" 输出: false
// 说明: 你可以假设字符串只包含小写字母。
var isAnagram = function (s, t) {
    if (s.length != t.length) return false
    let MapS = new Map();
    for (let i of s) {
        MapS.set(i, (MapS.get(i) || 0) + 1);
    }
    for (let j of t) {
        if (!MapS.get(j)) return false
        MapS.set(j, MapS.get(j) - 1);
    }
    return true;
};

// 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。
// (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)
// 注意：
// 你可以假设两个字符串均只含有小写字母。
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false
    let mapA = new Map()
    for (let i of magazine) {
        mapA.set(i, (mapA.get(i) || 0) + 1)
    }
    for (let j of ransomNote) {
        if (!mapA.get(j) || mapA.get(j) == 0) return false
        mapA.set(j, mapA.get(j) - 1)
    }
    return true
};

// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
// 示例 1:
// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
// 示例 2:
// 输入: strs = [""]
// 输出: [[""]]
// 示例 3:
// 输入: strs = ["a"]
// 输出: [["a"]]
var groupAnagrams = function (strs) {
    let mapA = new Map()
    for (let i of strs) {
        let FormI = i.split("")
        FormI = FormI.sort()
        let StringI = FormI.join("")
        debugger
        let valueI = mapA.get(StringI) || []
        mapA.set(StringI, valueI.push(i))
    }
    return mapA.values()
};

// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
// 示例 1:
// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
// 示例 2:
// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
// 提示:
// 1 <= s.length, p.length <= 3 * 104
// s 和 p 仅包含小写字母
var findAnagrams = function (s, p) {
    let result = [];

    let MapP = new Map();
    for (let i of p) {
        MapP.set(i, (MapP.get(i) || 0) + 1);
    }
    let MapS = new Map();
    let index = 0;
    for (let j = 0; j < s.length; j++) {
        let item = s[j];
        if (MapP.get(item)) {
            MapS.set(item, (MapS.get(item) || 0) + 1);

            while (MapS.get(item) > MapP.get(item)) {
                if (MapS.get(s[index])) {
                    MapS.set(s[index], MapS.get(s[index]) - 1);
                }
                index++;
            }

            if (MapS.get(item) == MapP.get(item) && this.isSameMap(MapS, MapP)) {
                result.push(index);
                MapS.set(s[index], MapS.get(s[index]) - 1);

                index++;
            }
        } else {
            MapS = new Map();
            index = j + 1;
        }
    }

    return result;
};
var isSameMap = function (mapA, mapB) {
    if (mapA.size != mapB.size) return false;
    for (let keyA of mapA.keys()) {
        if (!mapB.get(keyA) || mapA.get(keyA) != mapB.get(keyA)) return false;
    }
    return true;
}


// 给定两个数组 nums1 和 nums2 ，返回 它们的交集。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
// 示例 1：
// 输入：nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// 输出：[2]
// 示例 2：
// 输入：nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// 输出：[9, 4]
// 解释：[4, 9] 也是可通过的
var intersection = function (nums1, nums2) {
    let result = []

    let map1 = new Map()
    let map2 = new Map()
    for (let i of nums1) {
        map1.set(i, (map1.get(i) || 0) + 1)
    }
    for (let j of nums2) {
        map2.set(j, (map2.get(j) || 0) + 1)
    }
    for (let key of map1.keys()) {
        if (map2.get(key)) {
            result.push(key)
        }
    }
    return result
};


// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
// 示例 1：
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]
// 示例 2:
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]
var intersect = function (nums1, nums2) {
    let result = [];

    let mapList = nums1.length > nums2.length ? nums2 : nums1;
    let forList = nums1.length > nums2.length ? nums1 : nums2;

    let map1 = new Map();
    for (let i of mapList) {
        map1.set(i, (map1.get(i) || 0) + 1);
    }

    for (let key of forList) {
        if (map1.get(key) && map1.get(key) > 0) {
            result.push(key);
            map1.set(key, map1.get(key) - 1);
        }
    }
    return result;
};

// 编写一个算法来判断一个数 n 是不是快乐数。
// 「快乐数」 定义为：
// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
// 如果这个过程 结果为 1，那么这个数就是快乐数。
// 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
// 示例 1：
// 输入：n = 19
// 输出：true
// 解释：
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// 示例 2：
// 输入：n = 2
// 输出：false
var isHappy = function (n) {
    let sumMap = new Map();

    while (n != 1) {
        if (sumMap.get(n)) {
            return false;
        }
        sumMap.set(n, 1);
        let strN = n.toString();
        let sum = 0;
        for (let i of strN) {
            sum += i * i;
        }
        n = sum;
    }

    return true;
};


// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
// 你可以按任意顺序返回答案。
// 示例 1：
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：
// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// 示例 3：
// 输入：nums = [3,3], target = 6
// 输出：[0,1]
// 提示：
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// 只会存在一个有效答案
// 进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？
var twoSum = function (nums, target) {
    let numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i];
        numsMap.set(item, i);
    }
    for (let j = 0; j < nums.length; j++) {
        let num1 = nums[j];
        let num2 = target - num1;
        if (numsMap.get(num2) && j != numsMap.get(num2)) {
            return [j, numsMap.get(num2)];
        }
    }
};



// 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
// 示例 1：
// 输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
// 输出：2
// 解释：
// 两个元组如下：
// 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
// 示例 2：
// 输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
// 输出：1
// 提示：
// n == nums1.length
// n == nums2.length
// n == nums3.length
// n == nums4.length
// 1 <= n <= 200
// -228 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 228
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let result = 0;
    let targetMap = new Map();
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let sum = nums1[i] + nums2[j];
            targetMap.set(sum, (targetMap.get(sum) || 0) + 1);
        }
    }
    for (let m = 0; m < nums3.length; m++) {
        for (let n = 0; n < nums4.length; n++) {
            let sum = nums3[m] + nums4[n];
            let diffVal = 0 - sum;
            let diffValMapVal = targetMap.get(diffVal) || 0;
            result += diffValMapVal;
        }
    }
    return result;
};


// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。
// 示例 2：
// 输入：nums = [0,1,1]
// 输出：[]
// 解释：唯一可能的三元组和不为 0 。
// 示例 3：
// 输入：nums = [0,0,0]
// 输出：[[0,0,0]]
// 解释：唯一可能的三元组和为 0 。
// 提示：
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105
var threeSum = function (nums) {
    let result = [];

    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) continue;
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let L = i + 1;
        let R = nums.length - 1;

        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R];
            if (sum == 0) {
                let resultItem = [nums[L], nums[i], nums[R]];
                result.push(resultItem);
                while (L < R && nums[L] == nums[L + 1]) L++;
                while (L < R && nums[R] == nums[R - 1]) R--;
                L++;
                R--;
            } else if (sum > 0) {
                R--;
            } else if (sum < 0) {
                L++;
            }
        }
    }

    return result;
};


/**
 *  nsum通用解法，支持2sum，3sum，4sum...等等
 *  时间复杂度分析：
 *  1. n = 2时，时间复杂度O(NlogN)，排序所消耗的时间。、
 *  2. n > 2时，时间复杂度为O(N^n-1)，即N的n-1次方，至少是2次方，此时可省略排序所消耗的时间。举例：3sum为O(n^2)，4sum为O(n^3)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // nsum通用解法核心方法
    function nSumTarget(nums, n, start, target) {
        // 前提：nums要先排序好
        let res = [];
        if (n === 2) {
            res = towSumTarget(nums, start, target);
        } else {
            for (let i = start; i < nums.length; i++) {
                // 递归求(n - 1)sum
                let subRes = nSumTarget(
                    nums,
                    n - 1,
                    i + 1,
                    target - nums[i]
                );
                for (let j = 0; j < subRes.length; j++) {
                    res.push([nums[i], ...subRes[j]]);
                }
                // 跳过相同元素
                while (nums[i] === nums[i + 1]) i++;
            }
        }
        return res;
    }

    function towSumTarget(nums, start, target) {
        // 前提：nums要先排序好
        let res = [];
        let len = nums.length;
        let left = start;
        let right = len - 1;
        while (left < right) {
            let sum = nums[left] + nums[right];
            if (sum < target) {
                while (nums[left] === nums[left + 1]) left++;
                left++;
            } else if (sum > target) {
                while (nums[right] === nums[right - 1]) right--;
                right--;
            } else {
                // 相等
                res.push([nums[left], nums[right]]);
                // 跳过相同元素
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
        return res;
    }
    nums.sort((a, b) => a - b);
    // n = 3，此时求3sum之和
    return nSumTarget(nums, 3, 0, 0);
};


// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
// 0 <= a, b, c, d < n
// a、b、c 和 d 互不相同
// nums[a] + nums[b] + nums[c] + nums[d] == target
// 你可以按 任意顺序 返回答案 。
// 示例 1：
// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// 示例 2：
// 输入：nums = [2,2,2,2,2], target = 8
// 输出：[[2,2,2,2]]
// 提示：
// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    let result = nSum(nums, 4, 0, target)
    return result
};
var nSum = function (nums, n, start, target) {
    let result = [];

    if (n == 2) {
        result = twoSum(nums, start, target);
    } else {
        for (let i = start; i < nums.length; i++) {
            let diff = target - nums[i];
            let res = nSum(nums, n - 1, i + 1, diff);
            for (let j = 0; j < res.length; j++) {
                result.push([nums[i]].concat(res[j]));
            }
            while (nums[i] == nums[i + 1]) i++;
        }
    }
    return result;
}
var twoSum = function (nums, start, target) {
    let result = [];
    let L = start;
    let R = nums.length - 1;
    while (L < R) {
        let sum = nums[L] + nums[R];
        if (sum == target) {
            result.push([nums[L], nums[R]]);
            while (L < R && nums[L] === nums[L + 1]) L++;
            while (L < R && nums[R] === nums[R - 1]) R--;
            L++;
            R--;
        } else if (sum > target) {
            R--;
        } else if (sum < target) {
            L++;
        }
    }
    return result;
}