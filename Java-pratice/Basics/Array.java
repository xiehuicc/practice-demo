package Basics;

public class Array {
  public static void forEachArray(int[] arr) {
    System.out.println("for each array:");
    for (int i=0; i<arr.length; i++) {
        int n = arr[i];
        System.out.println(n);
    }
  }

  public static void forArray(int[] arr) {
    System.out.println("for  array");
    for (int n : arr) {
      System.out.println(n);
  }
  }
  public static void main(String[] args) {
    // 命令行参数，命令行输入 java Main -version 运行程序
    System.out.println("args::"+ args);
    for (String arg : args) {
      if ("-version".equals(arg)) {
        System.out.println("v 1.0");
      }
    }

    String[] names = {"ABC", "XYZ", "zoo"};
    String s = names[1];
    names[1] = "cat";
    System.out.println(s); // s是"XYZ"还是"cat"?  => XYZ

    int[] ns = { 1, 4, 9, 16, 25 };
    forEachArray(ns);
    forArray(ns);
  }
}
