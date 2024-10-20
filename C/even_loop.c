#include <stdio.h>

int main() {
    int start, end;
    int count = 0;

    printf("Enter the start and end values: ");
    scanf("%d %d", &start, &end);

    for (int i=start;i<= end;i++) 
	{
        if (i % 2 == 0)
		{
            count++;
    	}
    }
    printf("The number of even numbers is: %d\n",count);

}
