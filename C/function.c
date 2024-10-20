//functon is a block code which will execute when it called.
#include<stdio.h>
void msg() //declaration
{
	printf("hello this is msg function \n");
}

void num()
{
	int a,b;
	printf("enter two number :");
	scanf("%d \t %d",&a,&b);
	printf("addition : %d",a+b);
}
int main() //in-build function
{
	printf("this is main functon \n");
	msg();
	printf("hello \n");
	num();
}