#include<stdio.h>
int employe()
{
	char name[50];
	char addres[50];
	int age;
	int no;
	
	printf("enter employe name ",name);
	scanf("%s",&name);

	printf("enter your addres ",addres);
	scanf("%s",&addres);

	printf("enter your age ",age);
	scanf("%d",&age);
    
   	printf("enter employe no. ",no);
	scanf("%d",&no);
    printf("\n");
	
	printf("%s %s  %d %d \n",name,addres,age,no);
	printf("\n\n");	
}
int main()
{
	int i;

	for(i=0;i<5;i++)
	{
		employe();
	}
	
}