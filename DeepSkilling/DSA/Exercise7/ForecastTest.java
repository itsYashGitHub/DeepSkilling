package DSA.Exercise7;

public class ForecastTest {

    public static void main(String[] args) {

        double presentValue = 10000;

        double growthRate = 0.10;

        int years = 5;

        double futureValue = FinancialForecast.forecast(presentValue, growthRate, years);

        System.out.println("Predicted Future Value: Rs. " + futureValue);

        /*
        Time Complexity: O(n), Space Complexity: O(n)
        because recursion uses the call stack.

        How to Optimize?
        For this specific forecasting problem: PV × (1+r)^n
        we don't actually need recursion. A direct formula exists.

        Optimized Solution:

        public static double forecastOptimized(double currentValue, double growthRate, int years) {
            return currentValue * Math.pow(1 + growthRate, years);
        }

        Math.pow() is implemented efficiently.
        Time complexity is effectively: O(log n)
        or better internally depending on implementation.
        Much faster than recursive multiplication.
        
        */

    }
}
