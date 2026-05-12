/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
**/


function twoSum(nums, target) {
    let map = new Map()
    for (i=0; i < nums.length; i++) {
        const dif = target - nums[i]

        if (map.has(dif)){
            return [map.get(dif), i]
        }

        map.set(nums[i], i)
    }
};

/*
Interview answer:

“I use a hash map to optimize the search for the two numbers that sum to the target. 
As I iterate through the array, I calculate the complement by subtracting the current 
number from the target. Then I check if that complement already exists in the map. 
If it does, I return the stored index and the current index because together they form the 
target sum. Otherwise, I store the current number and its index in the map for future lookups. 
This approach avoids nested loops and gives a time complexity of O(n) with O(n) extra space.”
*/

