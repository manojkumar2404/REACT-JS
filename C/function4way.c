#include<stdio.h>
void add();//declaration
void minus(int n1,int n2);
int mul();
int div(int e,int f);
int main()
{
//way -1 
add();
//way-2
int no1,no2,h,i;
printf("\n enter two numbers for subtraction");
scanf("%d %d",&no1,&no2);

minus(no1,no2);
//way-3
printf("%d",mul());
//way-4
printf("\nenter two number for division");
scanf("%d %d",&h,&i);
printf("%d",div(h,i));

return 0;	
	
}
void add()//defination
{
	int a,b;
	printf("\n enter two number for addition");
	scanf("%d %d",&a,&b);
	printf("addition of two is %d",a+b);
}
void minus(int n1,int n2)
{
	printf("\n subtraction of two values is %d",n1-n2);
	
}
int mul()
{
	int x,y;
	printf("\n enter two number for multiplaction");
	scanf("%d %d",&x,&y);
	return x*y;
}
int div(int e,int f)
{
	return e/f;
}