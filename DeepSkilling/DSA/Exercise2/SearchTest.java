package DSA.Exercise2;

public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Tablet", "Electronics")
        };

        System.out.println("Linear Search:");

        Product result1 = LinearSearch.search(products, 104);

        if(result1 != null) 
            System.out.println(result1);

        System.out.println("\nBinary Search:");

        Product result2 = BinarySearch.search(products, 104);

        if(result2 != null) 
            System.out.println(result2);

        /*
        Linear Search Complexity: Best Case - O(1), Average Case - O(n), Worst Case - O(n)
        Binary Search Complexity: Best Case - O(1), Average Case - O(log n), Worst Case - O(log n)

        Linear Search is good when:
        Product list is small
        Data changes frequently
        Array is unsorted

        Binary Search is better when:
        Product catalog is large
        Products can be maintained in sorted order
        Fast searching is required

        For an e-commerce platform containing thousands or millions of products, Binary Search is more suitable 
        because it has O(log n) time complexity, making searches significantly faster than Linear Search's O(n) complexity.

        Example: For 1,000,000 products:
        Linear Search - up to 1,000,000 comparisons
        Binary Search - about 20 comparisons 
        */
    }
}
