#include<stdio.h>
union student1
{
	int id;
	float pr;
};
struct student
{
	int id;
	float pr;
};
int main()
{
	union student1 u1;
	struct student s1;
	// can't apply multiple values to variable at same time
	u1.id=101;
	printf("%d  \t",u1.id);
	u1.pr=23;
	printf("%f",u1.pr);
	//in the same printf we can't print two or more variables
	//size
	printf("\n %d is size of union var",sizeof(u1));
	printf("\n %d is size of structure var",sizeof(s1));
	
	// union store max size of byte
	// structure do the total and store that total byte
	return 0;
}