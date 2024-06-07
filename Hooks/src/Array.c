#include<stdio>
int main()
{
    int arr[10];
    for(i=0;i<10;i++)
    {
        printf("\nEnter the value in arr[%d] = ",i);
        scanf("%d",&arr[i]);
    }
    for(i=0;i<10;i++)
    {
        printf("%d",arr[i]);
    }
    return 0;
}