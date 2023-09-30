class Person {
    static personCount = 0;
    constructor(personName, personID) {
        personCount++;
        this.personName = personName;
        this.personID = personCount;
    }
}
class Customer extends Person {
    constructor(householdSize, locationArea, jobStatus) {
        this.householdSize = householdSize;
        this.locationArea = locationArea;
        this.jobStatus = jobStatus;
    }
}
class Employee extends Person {
    constructor(storeNum) {
        this.storeNum = storeNum;
    }
}