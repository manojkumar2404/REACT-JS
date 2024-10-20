//structure with array
#include<stdio.h>
struct student
{
	int id;
	float pr;
	char name[100];
	
};
int main()
{
	struct student s[5];
	int i;
	for(i=0; i<5; i++)
	{
	printf("enter id for %d student ",i+1);
	scanf("%d",&s[i].id);
	printf("enter pr for %d student ",i+1);
	scanf("%f",&s[i].pr);
	printf("enter name for student ",i+1);
	scanf("%s",&s[i].name);
	}
	for(i=0; i<5; i++)
	{
		printf("\n details for %d student ",i+1);
		printf("%d is id %s is name %f is pr",s[i].id,s[i].name,s[i].pr);
	}
	return 0;
}