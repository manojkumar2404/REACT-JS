#include<stdio.h>
#define pi 3.14
void square()
{
	int a;
	printf("\n enter area of square: ");
	scanf("%d",&a);
	printf("\n area of square is: %d",a*a);
}

void cube()
{
	int a;
	printf("\n enter area of cube: ");
	scanf("%d",&a);
	printf("\n area of cube is: %d",6*a*a);
}

void circle()
{
	float radius;
	printf("Enter a radius of circle: ");
	scanf("%f",&radius);
	printf("\n area of circle is: %f",pi*radius*radius);
}

void triangle()
{
	float base,height;
	int a;
	printf(" \n enter 1.base and 2.height: ");
	scanf("%f\n%f",&base,&height);
	a=(base*height)/2;
	printf("\n area of traingle is :%d ",a);
	scanf("%f",&a);
}

int main()
{
	int choice;
	printf("1. Square \n 2. Cube \n 3. Circle \n 4. Triangle \n");
	printf("enter your choice ");
	scanf("%d",&choice);
	
	switch(choice)
	{
		case 1:
			square();
			break;
		
		case 2:
			cube();
			break;
			
		case 3:
			circle();
			break;
			
		case 4:
			triangle();
			break;	
			
		default : 
			printf("enter valid choice!");	
	}
	
}