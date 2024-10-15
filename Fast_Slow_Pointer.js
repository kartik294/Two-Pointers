// Brute force 
  // LeetCode 141 - Linked List Cycle (HashSet Approach)
var hasCycle = function(head) {
    const visited=new Set();
    let current=head;
    while(current)
    {
        if(visited.has(current))
        {
            return true;
        }
    }
   visited.add(current);
   current=current.next;
   return false
};

// Optimized approach
  // LeetCode 141 - Linked List Cycle (Fast and Slow Pointer Approach)
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

// Brute force 
    // LeetCode 876 - Middle of the Linked List (Counting Approach)
    middleNodeCountingApproach(head) {
        let count = 0;
        let current = head;
        while (current) {
            count++;
            current = current.next;
        }
        current = head;
        for (let i = 0; i < Math.floor(count / 2); i++) {
            current = current.next;
        }
        return current;
    }


     // LeetCode 876 - Middle of the Linked List (Fast and Slow Pointer Approach)
    middleNodeFastAndSlowPointerApproach(head) {
        let slow = head, fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    // LeetCode 202 - Happy Number (HashSet Approach)

    function getSumOfSquares(n) {
    return String(n)
        .split('')
        .reduce((sum, digit) => sum + digit * digit, 0);
}

var isHappy = function(n) {
    const seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getSumOfSquares(n); // Correctly call the standalone function
    }
    return n === 1;
};

// LeetCode 202 - Happy Number (Fast and Slow Pointer Approach)
 function getSumOfSquares(n) {
    return String(n)
        .split('')
        .reduce((sum, digit) => sum + digit * digit, 0);
}

var isHappy = function(n) {
    let slow = n;
    let fast = getSumOfSquares(n); 

    while (fast !== 1 && slow !== fast) {
        slow = getSumOfSquares(slow); 
        fast = getSumOfSquares(getSumOfSquares(fast)); 
    }
    
    return fast === 1; 
};

// LeetCode 234. Palindrome Linked List (Fast and Slow Pointer Approach)
var isPalindrome = function(head) {
    if(!head) return true;
    const values=[];
    let current=head;

    while(current)
    {
        values.push(current.val);
        current=current.next;
    }

    let left=0;
    let right=values.length-1;
    while(left<right)
    {
        if(values[left]!==values[right])
        {
            return false;
        }
        left++;
        right--;
    }
    return true;
};


// 287. Find the Duplicate Number

var findDuplicate = function(nums) {
    
    let slow = nums[0];
    let fast = nums[0];

    
    do {
        slow = nums[slow];           
        fast = nums[nums[fast]];     
    } while (slow !== fast);

    
    slow = nums[0]; 
    while (slow !== fast) {
        slow = nums[slow];   
        fast = nums[fast];   
    }

    
    return slow;
};

// 142. Linked List Cycle II
var detectCycle = function(head) {
    if (!head || !head.next) return null; // No cycle if the list is empty or has only one node

    let slow = head;
    let fast = head;

    // Step 1: Detect if there is a cycle
    while (fast && fast.next) {
        slow = slow.next;             // Move slow pointer by 1 step
        fast = fast.next.next;       // Move fast pointer by 2 steps

        if (slow === fast) { // A cycle is detected
            // Step 2: Find the entry point of the cycle
            let entry = head;
            while (entry !== slow) {
                entry = entry.next;  // Move entry pointer by 1 step
                slow = slow.next;     // Move slow pointer by 1 step
            }
            return entry; // The start of the cycle
        }
    }

    return null; // No cycle found
};


// Reorder List (LeetCode #143)

var reorderList = function(head) {
    if (!head || !head.next) return; 

    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    
    let prev = null;
    let current = slow;
    while (current) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

   
    let first = head;
    let second = prev; 

    while (second.next) {
        const temp1 = first.next;
        const temp2 = second.next;

        first.next = second; 
        second.next = temp1; 

        first = temp1; 
        second = temp2;
    }
};


// Circular Array Loop (LeetCode #457)

var circularArrayLoop = function(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
       
        if (nums[i] === 0) continue;

        let slow = i;
        let fast = i;

    
        const direction = nums[i] > 0;

        
        while (true) {
        
            slow = nextIndex(nums, slow, direction);

         
            fast = nextIndex(nums, nextIndex(nums, fast, direction), direction);

        
            if (slow === fast) {
                if (slow === nextIndex(nums, slow, direction)) {
                    break; 
                }
                return true; 
            }
        }

        
        let current = i;
        while (nums[current] !== 0) {
            const next = nextIndex(nums, current, direction);
            nums[current] = 0; 
            current = next;
        }
    }

    return false; 

   
    function nextIndex(nums, current, direction) {
        const n = nums.length;
        return ((current + nums[current]) % n + n) % n; 
    }
};