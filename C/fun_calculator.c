#include<stdio.h>
void add(int a, int b)
{
	printf("addition is: %d ",a+b);	
}

void sub(int a, int b)
{
	printf("subtraction is: %d",a-b);
}

void mul(int a, int b)
{
	printf("multiply is: %d",a*b);
}

void div(int a, int b)
{
	printf("division is: %d",a/b);	
}

int main()
{
	int a,b,choice;
	printf("enter two no.");
	scanf("%d %d",&a,&b);
	
	printf("1. addition \n 2. subtraction \n 3. multiplication \n 4. division \n");
	printf("enter your choice");
	scanf("%d",&choice);
	
	
	switch(choice)
	{
		case 1:
			add(a,b);
			break;
		
		case 2:
			sub(a,b);
			break;
			
		case 3:
			mul(a,b);
			break;
			
		case 4:
			div(a,b);
			break;	
			
		default : 
			printf("enter valid choice!");			
			
	}
	
}