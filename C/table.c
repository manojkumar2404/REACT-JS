#include<stdio.h>
int i;
int j;
int main()
{
	printf("enter number:\t");
	scanf("%d",&i);
	for(j=1;j<=10;j++)
	{
	printf("%d * %d = %d\n",i,j,i*j);	
	}
}
