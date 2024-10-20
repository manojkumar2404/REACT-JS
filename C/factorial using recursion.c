#include<stdio.h>
int m=1;
void recursion(int n)
{
	if(n>0)
	{
		m*=n;
		recursion(n-1);
	}
	else
	{
		n=1;
	}
}

int main()
{
	int n;
	printf("Enter any number to find Factorial : ");
	scanf("%d",&n);
	recursion(n);
	printf("The factorial of %d is : %d",n,m);
}