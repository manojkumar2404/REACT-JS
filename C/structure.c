//structure is collection of multiple values with diffrent datatype
#include<stdio.h>
struct student
{
	int id;
	float pr;
	char name[100];
};
int main()
{
	struct student s1,s2; //s1 is structure variable
	printf("enter id for student 1 ");
	scanf("%d",&s1.id);
	printf("enter pr for student 1 ");
	scanf("%d",&s1.pr);
	printf("enter name for student 1 ");
	scanf("%d",&s1.name);
	
	printf("id is %d \n name is %s \n pr is %f",s1.id,s1.name,s1.pr);
	
	return 0;
	
}
