#include<stdio.h>
int main() 
{
  int num,i1=0,i2=1,sum=0;   
  printf("Enter an number: ");            
  scanf("%d",&num);
  printf("Fibonacci Series: %d,%d,",i1,i2);      
  sum = i1 + i2;
  while(sum<num) 
  {
       printf("%d ",sum);
       i1 = i2;
	   i2 = sum; 
       sum = i1+i2;
  }
} 