
CREATE TABLE Person (
    PersonID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50)
);

CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    PersonID INT UNIQUE,
    Salary DECIMAL(10, 2),
    FOREIGN KEY (PersonID) REFERENCES Person(PersonID)
);

CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    PersonID INT UNIQUE,
    CreditLimit DECIMAL(10, 2),
    FOREIGN KEY (PersonID) REFERENCES Person(PersonID)
);


SELECT PersonID FROM Person;