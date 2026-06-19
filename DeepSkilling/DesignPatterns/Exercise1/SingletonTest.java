package DesignPatterns.Exercise1;

public class SingletonTest {

    public static void main(String[] args) {
        
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("First message");
        logger1.log("Second message");

        System.out.println("Logger1 HashCode: " + logger1.hashCode());
        System.out.println("Logger2 HashCode: " + logger2.hashCode());

        if(logger1 == logger2)
            System.out.println("Singleton Pattern Verified: Only one instance exists.");
        else
            System.out.println("Multiple instances created.");

    }
    
}
