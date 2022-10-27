// C++ program to find minimum step to delete a string
#include <bits/stdc++.h>
using namespace std;

/* method returns minimum step for deleting the string,
where in one step a palindrome is removed */
int helper(string str, int si, int ei,
		vector<vector<int> >& dp)
{

	// if the string is empty
	// need no operation
	if (si > ei)
		return 0;

	// string length one
	// need one operation
	if (ei - si + 1 == 1)
		return 1;

	// if already calculated
	if (dp[si][ei] != -1)
		return dp[si][ei];

	// to consider three options
	int op1 = 1e9, op2 = 1e9, op3 = 1e9;

	// delete first char and call
	// on the smaller subproblem
	op1 = 1 + helper(str, si + 1, ei, dp);

	// first two characters are same
	if (str[si] == str[si + 1])
		op2 = 1 + helper(str, si + 2, ei, dp);

	// found another index where the
	// character is same as si-th character
	for (int i = si + 2; i <= ei; i++) {
		if (str[si] == str[i])
			op3 = min(op3,
					helper(str, si + 1, i - 1, dp)
						+ helper(str, i + 1, ei, dp));
	}

	// return the minimum b/w three options
	return dp[si][ei] = min({ op1, op2, op3 });
}

int minStepToDeleteString(string s)
{
	int n = s.size();

	// dp table to remove repeatations
	vector<vector<int> > dp(n, vector<int>(n, -1));

	// passing starting and ending index
	return helper(s, 0, n - 1, dp);
}

// Driver Code
int main()
{
	string str = "10133991220101299";
	cout << minStepToDeleteString(str) << endl;
	return 0;
}

// this code is contributed by rajdeep999
