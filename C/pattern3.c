#include<stdio.h>
int main() 
{
    int rows;
    char C = 'A';

    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    for (int i = 1; i <= rows; i++) 
	{
        for (int j = 1; j <= i; j++) 
		{
            printf("%c ", C);
            C++;
        }
        printf("\n");
    }

}
