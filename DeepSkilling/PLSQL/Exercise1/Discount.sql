DECLARE
    CURSOR customer_cursor IS
        SELECT c.CustomerID, c.Age, l.LoanID, l.InterestRate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID;

BEGIN
    FOR cust_rec IN customer_cursor LOOP
        IF cust_rec.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = cust_rec.LoanID;
            DBMS_OUTPUT.PUT_LINE('Discount applied for Customer ID ' || cust_rec.CustomerID);
        END IF;
    END LOOP;
    COMMIT;
END;
/