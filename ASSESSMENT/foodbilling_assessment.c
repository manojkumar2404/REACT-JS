#include<stdio.h>
int Pizza()
{
	int quantity;
		printf("You have selected pizza.\n");
		printf("Enter the quantity :");
		scanf("%d",&quantity);
		printf("Amount : %d \n",180*quantity);
		printf("Total Amount : %d\n",180*quantity);	
}
int Burger()
{
	int quantity;
		printf("You have selected Burger.\n");
		printf("Enter the quantity :");
		scanf("%d",&quantity);
		printf("Amount : %d \n",100*quantity);
		printf("Total Amount : %d\n",100*quantity);	
}
int Dosa()
{
	int quantity;
		printf("You have selected Dosa.\n");
		printf("Enter the quantity :");
		scanf("%d",&quantity);
		printf("Amount : %d \n",120*quantity);
		printf("Total Amount : %d\n",120*quantity);	
}
int Idli()
{
	int quantity;
		printf("You have selected Idli.\n");
		printf("Enter the quantity :");
		scanf("%d",&quantity);
		printf("Amount : %d \n",50*quantity);
		printf("Total Amount : %d\n",50*quantity);
}

int main()

{
	char continueOrder = 'y';
	while(continueOrder == 'y')
	{
		printf("-------Menu---------\n");

	printf("1. Pizza	price = 180rs/pcs \n");
	printf("2. Burger	price = 100rs/pcs \n");
	printf("3. Dosa		price = 120rs/pcs \n");
	printf("4. Idli		price = 50rs/pcs \n");
	int choose;
	printf("Please Enter your choose... :");
	scanf("%d",&choose);
	printf("\n\n");
	if(choose == 1)
	{
		Pizza();
	}
	else if(choose == 2)
	{
		Burger();

	}
		else if(choose == 3)
	{
		Dosa();

	}
		else if(choose == 4)
	{
		int Idli();

	}
	else
	{
		printf("Enter valid input..");
	}	
	printf("Do you want to place more orders? (y/n): ");
    scanf(" %c", &continueOrder);
    
//    int totel;
//    printf("Your Totel price is: %d", );
}}
