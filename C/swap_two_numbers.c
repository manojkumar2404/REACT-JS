#include <stdio.h>
int swap(int a, int b) 
{
    a +=b;
    b = a - b;
    a = a - b;
    printf("After swap: a = %d, b = %d\n",a,b);
    return a,b;
}

int main() 
{
    int a,b;

    printf("Enter the first number: ");
    scanf("%d",&a);

    printf("Enter the second number: ");
    scanf("%d",&b);

    printf("Before swap: a = %d, b = %d\n",a,b);

    swap(a,b);

}
