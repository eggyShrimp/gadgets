public class HelloWorld {
    public static int age = 0;
    public static void main(String[] args) {
        int a = 10000;
        Integer b = new Integer(10000);
        Integer d = new Integer(10000);
        Integer c = 10000;
        System.out.println(a == b);
        System.out.println(a == c);
        System.out.println(b == d);
    }
}