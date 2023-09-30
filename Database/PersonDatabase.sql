DROP TABLE IF EXISTS Employee, Customer, Person;

CREATE TABLE Person (
    PersonID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50)
);
-- Then, create the "Employee" table and insert data into it
CREATE TABLE Employee (
    PersonID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Salary DECIMAL(10, 2),
    FOREIGN KEY (PersonID) REFERENCES Person(PersonID)
);

CREATE TABLE Customer (
	PersonID INT PRIMARY KEY, 
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

INSERT INTO Person (PersonID, FirstName, LastName)
VALUES
    (1, 'Jane', 'Smith'),
    (2, 'Ben', 'Brown'),
    (3, 'Jennifer', 'Doe'),
	(4, 'Annie', 'Davis'),
	(5, 'Matt', 'Garcia'),
	(6, 'Anna', 'Smith'),
	(7, 'Jane', 'Doe'),
	(8, 'Jennie', 'Lee'),
	(9, 'David', 'Anderson'),
	(10, 'Robert', 'Brown');


INSERT INTO Employee(PersonID, FirstName, LastName, Salary)
VALUES
    (1, 'Jane', 'Smith', 50000.00),
    (2, 'Ben', 'Brown', 30500.00),
    (3, 'Jennifer', 'Doe', 42456.00),
    (4, 'Annie', 'Davis', 49210.00),
    (5, 'Matt', 'Garcia', 20135.00);

INSERT INTO Customer (
    PersonID,
    FirstName,
    LastName,
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
    (6, 'Anna', 'Smith', 45394.50, 3, true, 'Bronx', 'NY', false, false, true),
    (7, 'Jane', 'Doe', 45394.50, 3, true, 'Fordham', 'NY', true, true, false),
    (8, 'Jennie', 'Lee', 45394.50, 3, true, 'Harlem', 'NY', true, false, false),
    (9, 'David', 'Anderson', 45394.50, 3, true, 'New York', 'NY', false, true, true),
    (10, 'Robert', 'Brown', 45394.50, 3, true, 'Manhattan', 'NY', true, true, false);
    
SELECT * FROM Customer;
SELECT * FROM Employee;