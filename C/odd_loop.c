#include <stdio.h>

int main() 
{
    int start,end,count;

    printf("Enter the start and end values: ");
    scanf("%d %d",&start,&end);

    for (int i=start;i<=end;i++) 
	{
        if (i % 2 != 0)
		{
            count++;
    	}
    }
    printf("The number of odd numbers %d to %d is: %d\n",start,end,count);

}
