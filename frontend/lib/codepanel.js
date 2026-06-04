export const codeSnippets = {
  javascript: `// Two Sum Problem
function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map[diff] !== undefined) {
      return [map[diff], i];
    }

    map[nums[i]] = i;
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));`,

  python: `# Two Sum Problem
def two_sum(nums, target):
    hashmap = {}

    for i, num in enumerate(nums):
        diff = target - num

        if diff in hashmap:
            return [hashmap[diff], i]

        hashmap[num] = i

    return []

print(two_sum([2, 7, 11, 15], 9))`,

  java: `// Two Sum Problem
import java.util.*;

class Main {
    public static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int diff = target - nums[i];

            if (map.containsKey(diff)) {
                return new int[]{map.get(diff), i};
            }

            map.put(nums[i], i);
        }

        return new int[]{};
    }

    public static void main(String[] args) {
        int[] result = twoSum(new int[]{2, 7, 11, 15}, 9);
        System.out.println(Arrays.toString(result));
    }
}`,

  sql: `-- Find Top 5 Highest Salaries
SELECT name, salary
FROM employees
ORDER BY salary DESC
LIMIT 5;`,
};