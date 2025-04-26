class Employee {
    constructor(hoursWorker, hourlyRate) {
      this.hoursWorker = hoursWorker // сколько часов
      this.hourlyRate = hourlyRate // сколько платят за час
    }
    calculateSalary() {
      return this.hoursWorker * this.hourlyRate
    }
  }
  
  class Manager extends Employee {
    constructor(hoursWorker) {
      super(hoursWorker, 2000)
    }
  }
  
  class Developer extends Employee {
    constructor(hoursWorker) {
      super(hoursWorker, 2500)
    }
  }
  
  class Designer extends Employee {
    constructor(hoursWorker) {
      super(hoursWorker, 1500)
    }
  }
  
  function calculateSalary() {
    const employeeType = document.getElementById("employeeType").value
    const hourseWorker = Number(document.getElementById("hoursWorker").value)
  
    let employee
  
    if (employeeType === "manager") {
      employee = new Manager(hourseWorker)
    } else if (employeeType === "developer") {
      employee = new Developer(hourseWorker)
    } else if (employeeType === "designer") {
      employee = new Designer(hourseWorker)
    }
  
    if (employee) {
      const salary = employee.calculateSalary()
      document.getElementById("result").innerText = `Зарплата: ${salary} рублей`
    } else {
      document.getElementById("result").innerText = `Неверный тип сотрудника`
    }
  }
  