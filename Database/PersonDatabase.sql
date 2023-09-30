CREATE TABLE Person (
    PersonID INT PRIMARY KEY,
);

CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Salary DECIMAL(10, 2),
    FOREIGN KEY (PersonID) REFERENCES Person(PersonID)
);

CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    HouseIncome DECIMAL,
    HouseholdSize INT,
    AccessProgr BOOLEAN,
    City VARCHAR(70),
    StateAbbrev VARCHAR(10),
    Employed BOOLEAN,
    PublicHousing BOOLEAN,
    FoodInsecurity BOOLEAN,
    FOREIGN KEY (PersonID) REFERENCES Person(PersonID)
);

-- PERSONS
INSERT INTO Person (PersonID, FirstName, LastName)
VALUES
    (1),
    (2),
    (3),
    (4);

-- EMPLOYEES
INSERT INTO Employee(PersonID, FirstName, LastName, Salary)
VALUES
    (5, 5, 50000.00),
    (6, 6, 30500.00),
    (7, 7, 42456.00),
    (8, 8, 49210.00),
    (9, 9, 20135.00);

INSERT INTO Customer (
    CustomerID,
    HouseIncome,
    HouseholdSize,
    AccessProgr,
    City,
    StateAbbrev,
    Employed,
    PublicHousing,
    FoodInsecurity
)
VALUES
    (1, "Name", "LastName", 45394.50, 3, true, "Bronx", "NY", true, false, true),
    (2, "", "", 45394.50, 3, true, "Fordham", "NY", true, false, true),
    (3, "", "", 45394.50, 3, true, "Harlem", "NY", true, false, true),
    (4, "", "", 45394.50, 3, true, "New York", "NY", true, false, true),
    (5, "", "", 45394.50, 3, true, "Manhattan", "NY", true, false, true);
    
    