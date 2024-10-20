#include<stdio.h>
int main()
{
	char name[25];
	{
		printf("enter your name: ");
		scanf("%s",&name);
		printf("your name is %s \n",name);	
	}
	
	int age;
	{
		printf("enter your age: ");
		scanf("%d",&age);
		printf("your age is %d \n",age);	
	}
	
	char bdate[15];
	{
		printf("enter your brith_date: ");
		scanf("%s",&bdate);
		printf("your brith_date is %s \n",bdate);	
	}
	
	char address[100];
	{
		printf("enter your address: ");
		scanf(" %s",&address);
		printf("your address is %s \n",address);	
	}
	
}