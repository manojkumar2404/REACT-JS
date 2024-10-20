#include<stdio.h>
int main()
{
	int num[100],n,i,j,temp;
	printf("enter how many value you want to add in array");
	scanf("%d",&n);
	for(i=0;i<n;i++)
	{
		printf("enter value for %d index",i);
		scanf("%d",&num[i]);
	}
	printf("\n before sorting array is: \n");
	for(i=0;i<n;i++)
	{
		printf("%d index %d value \n",i,num[i]);
	}
	
	for(i=0;i<n;i++)
	{
		for(j=0;j<n;j++)
		{
			if(num[i]>num[j])
			{
				temp=num[i];
				num[i]=num[j];
				num[j]=temp;
			}
		}
	}
	printf("\n after sorting array is : \n");
	for(i=0;i<n;i++)
	{
		printf("%d index %d value \n ",num[i]);
	}
	
	
	
	
	return 0;
}