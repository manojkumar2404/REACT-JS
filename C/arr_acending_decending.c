#include<stdio.h>
int array[100],n,choice;

void store()
{
	scanf("%d",&n);
	for(int i = 0;i<n;i++)
	{
		printf("Enter %d number : ",i);
		scanf("%d",&array[i]);
	}

}
void select()
{
	printf("Select from below options \n\n");
	printf("1. Ascending Order \n2. Descending order \n3. max digit");
	scanf("%d",&choice);
}
void ascending()
{
	int t = 0;
	for(int i = 0;i<n;i++)
	{
		for(int j =i+1 ;j<n;j++)
		{
			if(array[i] > array[j])
			{
				t = array[i];
				array[i] = array[j];
				array[j] = t;
			}
		}
	}
	for(int i = 0;i<n;i++)
	{
		printf("%d\n",array[i]);
	}
}
void descending()
{
	int t = 0;
	for(int i = 0;i<n;i++)
	{
		for(int j =i+1 ;j<n;j++)
		{
			if(array[i] < array[j])
			{
				t = array[i];
				array[i] = array[j];
				array[j] = t;
			}
		}
	}
	for(int i = 0;i<n;i++)
	{
		printf("%d\n",array[i]);
	}
}

void maxdigit()
{
	int c, maximum;

	for (c=0; c<n; c++)
	{
    scanf("%d", &array[c]);
    maximum = array[0];	
	}
    
    for (c=1; c<n; c++)
    {
        if (array[c]>maximum)
        {
            maximum = array[c];
        }
    }
    printf("Maximum element is %d.\n", maximum);
}
int main()
{
	printf("Enter total elements of array : ");
	store();
	select();
	if(choice == 1)
	{
		ascending();
	}
	else if(choice == 2)
	{
		descending();	
	}
	else if(choice ==3)
	{
		maxdigit();
	}
	else
	{
		printf("enter valid choice");
	}
}