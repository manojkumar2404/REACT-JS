// P is the principal amount 
//T is the time and 
//R is the rate
#include<stdio.h>
int main()
{
    float P,R,T;
    printf("Enter p,r,t values \n");
    scanf("%f %f %f",&P,&R,&T);
    float SI = (P*T*R)/100;
    printf("Simple Interest = %f\n", SI);
}
 
//{
//	float amount,rateofinterest;
//	int i,time;
//	
//	printf("enter amount: ");
//	scanf("%f",&amount);
//	
//	printf("enter rate of interest %% per annum: ");
//	scanf("%f",&rateofinterest);
//	
//	printf("enter Time: ");
//	scanf("%f",&time);
//	
//	i = (amount*rateofinterest*time)/100;
//	
//	printf("Simple interest i : %f",i);
//	scanf("%f",&i);
//	
//}
