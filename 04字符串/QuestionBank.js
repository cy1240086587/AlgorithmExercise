// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
// 示例 1：
// 输入：s = ["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]
// 示例 2：
// 输入：s = ["H","a","n","n","a","h"]
// 输出：["h","a","n","n","a","H"]
// 提示：
// 1 <= s.length <= 105
// s[i] 都是 ASCII 码表中的可打印字符
var reverseString = function (s) {
    let leftIndex = 0;
    let rightIndex = s.length - 1;
    while (leftIndex < rightIndex) {
        let left = s[leftIndex];
        s[leftIndex] = s[rightIndex];
        s[rightIndex] = left;
        leftIndex++;
        rightIndex--;
    }

    return s;
};


// 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
// 示例 1：
// 输入：s = "abcdefg", k = 2
// 输出："bacdfeg"
// 示例 2：
// 输入：s = "abcd", k = 2
// 输出："bacd"
// 提示：
// 1 <= s.length <= 104
// s 仅由小写英文组成
// 1 <= k <= 104
var reverseStr = function (s, k) {
    s = s.split("");
    for (let i = 0; i < s.length; i += 2 * k) {
        let leftIndex = i;
        let rightIndex = i + k - 1 > s.length ? s.length : i + k - 1;
        while (leftIndex < rightIndex) {
            let rightVal = s[rightIndex];
            s[rightIndex] = s[leftIndex];
            s[leftIndex] = rightVal;
            leftIndex++;
            rightIndex--;
        }
    }
    return s.join("");
};

// 给你一个字符串 s ，请你反转字符串中 单词 的顺序。
// 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
// 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。
// 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。
// 示例 1：
// 输入：s = "the sky is blue"
// 输出："blue is sky the"
// 示例 2：
// 输入：s = "  hello world  "
// 输出："world hello"
// 解释：反转后的字符串中不能存在前导空格和尾随空格。
// 示例 3：
// 输入：s = "a good   example"
// 输出："example good a"
// 解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
// 提示：
// 1 <= s.length <= 104
// s 包含英文大小写字母、数字和空格 ' '
// s 中 至少存在一个 单词
// 进阶：如果字符串在你使用的编程语言中是一种可变数据类型，请尝试使用 O(1) 额外空间复杂度的 原地 解法。
var reverseWords = function (s) {
    let array = s.split(" ");

    // 原数组操作去除空格
    let slowIndex = 0;
    let fastIndex = 0;

    while (fastIndex < array.length) {
        if (array[fastIndex] == "") {
            fastIndex++;
        } else {
            array[slowIndex] = array[fastIndex];
            slowIndex++;
            fastIndex++;
        }
    }
    array.length = slowIndex;

    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while (leftIndex < rightIndex) {
        let leftVal = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = leftVal;
        leftIndex++;
        rightIndex--;
    }

    return array.join(" ");
};

// 字符串的右旋转操作是把字符串尾部的若干个字符转移到字符串的前面。给定一个字符串 s 和一个正整数 k，请编写一个函数，将字符串中的后面 k 个字符移到字符串的前面，实现字符串的右旋转操作。
// 例如，对于输入字符串 "abcdefg" 和整数 2，函数应该将其转换为 "fgabcde"。
// 输入：输入共包含两行，第一行为一个正整数 k，代表右旋转的位数。第二行为字符串 s，代表需要旋转的字符串。
// 输出：输出共一行，为进行了右旋转操作后的字符串。
// JS中字符串内不可单独修改
function reverseStr(s, k) {

    let array = s.split("");

    // 字符串全颠倒
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while (leftIndex < rightIndex) {
        let leftVal = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = leftVal;
        leftIndex++;
        rightIndex--;
    }

    // 前k个字符颠倒
    leftIndex = 0;
    rightIndex = k - 1;
    while (leftIndex < rightIndex) {
        let leftVal = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = leftVal;
        leftIndex++;
        rightIndex--;
    }

    // 后s.length - k 个字符颠倒
    leftIndex = k;
    rightIndex = s.length - 1;
    while (leftIndex < rightIndex) {
        let leftVal = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = leftVal;
        leftIndex++;
        rightIndex--;
    }

    return array.join("");
}


// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
// 示例 1：
// 输入：haystack = "sadbutsad", needle = "sad"
// 输出：0
// 解释："sad" 在下标 0 和 6 处匹配。
// 第一个匹配项的下标是 0 ，所以返回 0 。
// 示例 2：
// 输入：haystack = "leetcode", needle = "leeto"
// 输出：-1
// 解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
// 提示：
// 1 <= haystack.length, needle.length <= 104
// haystack 和 needle 仅由小写英文字符组成
var strStr = function (haystack, needle) {
    if (haystack.length < needle.length) return -1;
    let slowIndex = 0;
    for (let fastIndex = 0; fastIndex < haystack.length; fastIndex++) {
        if (haystack[fastIndex] != needle[fastIndex - slowIndex]) {
            slowIndex++;
            while (
                haystack[slowIndex] != needle[0] &&
                slowIndex < haystack.length
            )
                slowIndex++;
            if (needle.length == 1 && needle[0] == haystack[slowIndex])
                return slowIndex;
            fastIndex = slowIndex;
        } else if (fastIndex - slowIndex + 1 == needle.length) {
            return slowIndex;
        }
    }

    return -1;
};


// 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
// 示例 1:
// 输入: s = "abab"
// 输出: true
// 解释: 可由子串 "ab" 重复两次构成。
// 示例 2:
// 输入: s = "aba"
// 输出: false
// 示例 3:
// 输入: s = "abcabcabcabc"
// 输出: true
// 解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
// 提示：
// 1 <= s.length <= 104
// s 由小写英文字母组成
var repeatedSubstringPattern = function (s) {
    let next = getNext(s);
    let maxQ = next[next.length - 1];
    if (maxQ == 0) return false;
    let diff = s.length - maxQ;
    let result = s.length % diff == 0;
    return result;
};
var getNext = function (s) {
    let next = [0];
    let j = 0;

    for (let i = 1; i < s.length; i++) {
        while (j > 0 && s[i] != s[j]) {
            j = next[j - 1];
        }
        if (s[i] === s[j]) {
            j++;
        }
        next.push(j);
    }

    return next;
}