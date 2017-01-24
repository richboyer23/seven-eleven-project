package com.up.skill.Helpers;

/**
 * Created by JPMPC-B214 on 1/21/2017.
 */
public class Helpers {
    public static boolean isFibonacci;


  /*  public static String testThisMethod(String name){
            return name + "123";
    }*/

    public boolean testFibonacci(int fib){

        int n1=0,n2=1,n3,i,count=18;

        System.out.print("["+n1+"]"+" "+"["+n2+"]");//printing 0 and 1

        for(i=n1; i<count ;++i)//loop starts from 2 because 0 and 1 are already printed
        {
            n3=n1+n2;

            System.out.print(" "+"["+n3+"]");
            n1=n2;
            n2=n3;

            if(n3==fib){
                isFibonacci = true;
                break;
            }

        }


        System.out.println(isFibonacci ? "\n\n" +fib+" is a Fibonacci " +isFibonacci+"" : "\n\n" +fib+" is not a Fibonacci " +isFibonacci);

        return isFibonacci;
    }



/*

    public static int[] fibonacciSequence(int number){
        int[] fibonacciSequence = new int[10];

        fibonacciSequence[0] = number;

        if( number == 0 ) number += 1;

        fibonacciSequence[1] = number;

        for(int i=2 ; i < 10 ; i++)
        {
            number += fibonacciSequence[ i - 2 ];
            fibonacciSequence[i] = number;
        }

        return fibonacciSequence;
    }
*/

    //Code
    /*public static int fib(int n)  {
        if(n == 0)
            return 0;
        else if(n == 1)
            return 1;
        else
            return fib(n - 1) + fib(n - 2);
    }

    public static String testFibonacci(int limit) {
        // int n = fib(0);
        String res =  "";
        for (int i = 0; i <= limit; i++){
            System.out.print("["+ fib(i)+"]");
            res += "["+fib(i)+"]";

        }

        //System.out.print("["+ fib()+"]");
        return res;

    }*/


}
