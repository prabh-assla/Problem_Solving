// A recursive solution for Rod cutting problem
#include <bits/stdc++.h>
#include <iostream>
#include <math.h>
using namespace std;

// A utility function to get the maximum of two integers
int max(int a, int b) { return (a > b) ? a : b; }

/* Returns the best obtainable price for a rod of length n
and price[] as prices of different pieces */
int cutRod(int price[], int index, int n)
{
	// base case
	if (index == 0) {
		return n * price[0];
	}
	//At any index we have 2 options either
	//cut the rod of this length or not cut
	//it
	int notCut = cutRod(price,index - 1,n);
	int cut = INT_MIN;
	int rod_length = index + 1;

	if (rod_length <= n)
		cut = price[index]
			+ cutRod(price,index,n - rod_length);

	return max(notCut, cut);
}

/* Driver program to test above functions */
int main()
{
	int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 12, 1,3 ,1, 123636, 25255, 3553, 1,1 ,1,1 , 1,1 ,1 ,1, 33 };
	int size = sizeof(arr) / sizeof(arr[0]);
	cout << "Maximum Obtainable Value is "
		<< cutRod(arr, size - 1, size);
	getchar();
	return 0;
}

//This code is contributed by Sanskar
