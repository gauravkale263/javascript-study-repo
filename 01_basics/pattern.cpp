#include<iostream>
using namespace std;
int main()
{
    int rows=5;
    for(int i=0;i<=rows;i++){
        for(int space=rows-i;space>=0;space--){
            cout << " ";
        }
        for(int j=0;j<=i;j++){
            cout << "* ";
        }
        cout << endl;
    }
    for(int i=0;i<=rows;i++){
        for(int space=0;space<=i;space++){
            cout << " ";
        }
        for(int j=rows-i;j>=0;j--){
            cout<< "* ";
        }
        cout << endl;
    }
}