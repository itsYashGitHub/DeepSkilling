import org.example.Calculator;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setup() {
        System.out.println("Setting up test data...");
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        System.out.println("Cleaning up test...");
        calculator = null;
    }

    @Test
    public void testAddition() {
        // Arrange
        int a = 10;
        int b = 20;
        // Act
        int result = calculator.add(a, b);
        // Assert
        assertEquals(30, result);
    }

    @Test
    public void testSubtraction() {
        // Arrange
        int a = 20;
        int b = 10;
        // Act
        int result = calculator.subtract(a, b);
        // Assert
        assertEquals(10, result);
    }

}
