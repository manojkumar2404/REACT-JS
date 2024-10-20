#include<stdio.h>
int first,second;

int addition(int first,int second)
{
	printf("enter first no. : ");
	scanf("%d",&first);
	printf("enter second no. : ");
	scanf("%d",&second);
	printf("\n");
	printf("Addition is %d",first+second);	
}
int subtract(int first,int second)
{
	printf("enter first no. : ");
	scanf("%d",&first);
	printf("enter second no. : ");
	scanf("%d",&second);
	printf("\n");
	printf("Subtraction is %d",first-second);
}
int multiply(int first,int second)
{
	printf("enter first no. : ");
	scanf("%d",&first);
	printf("enter second no. : ");
	scanf("%d",&second);
	printf("\n");
	printf("Multiply is %d",first*second);
}
float divide()
{
	float first,second;
	printf("enter first no. : ");
	scanf("%d",&first);
	printf("enter second no. : ");
	scanf("%d",&second);
	printf("\n");
	printf("division is %d",first/second);
}
int modulo(int first,int second)
{
	printf("enter first no. : ");
	scanf("%d",&first);
	printf("enter second no. : ");
	scanf("%d",&second);
	printf("\n");
	printf("Modular is %d",first%second);
}

int main()
{
    
    printf("1. Addition (+) \n");
	printf("2. Subtraction (-) \n");
	printf("3. Multiplication (*) \n");
	printf("4. Division (/) \n");
	printf("5. Modulo (%%) \n");
	int choose;
	printf("Please Enter your choose.. :");
	scanf("%d",&choose);
	printf("\n\n");
	
	
	
	if(choose == 1)
	{
		addition(first,second);
	}
	else if(choose == 2)
	{
		 subtract(first,second);

	}
		else if(choose == 3)
	{
		multiply(first,second);

	}
		else if(choose == 4)
	{
		divide();

	}
		else if(choose == 5)
		{
			modulo(first,second);
		}
	else
	{
		printf("Enter valid input..");
	}	
		
}