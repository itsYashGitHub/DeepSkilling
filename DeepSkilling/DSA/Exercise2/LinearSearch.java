package DSA.Exercise2;

public class LinearSearch {

    public static Product search(Product[] products, int productId) {

        for(Product product : products)
            if(product.getProductId() == productId)
                return product;
        return null;
        
    }
}
