#include<stdio.h>
int main()
{
	int a,b,c;
	printf("enter three no.: \n");
	scanf("%d%d%d",&a,&b,&c);
	
	if(a>b && a>c)
	{
		printf("%d is largest no.",a);
	}
	
	if(b>a && b>c)
	{
		printf("%d is largest no.",b);
	}
	
	if(c>b && c>a)
	{
		printf("%d is largest no.",c);
	}
	//if(a==b && a==c)
	else
	{
		printf("all no. are same");
	}
}