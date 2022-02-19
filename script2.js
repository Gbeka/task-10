class Restaurant {
    constructor(name, cusineType,served) {
      this.name = name;
      this.cusineType = cusineType;
      this.served = 0;
    }
  
    showInfo() {
      return `${this.name} is a restaurant of ${this.cusineType} meal.`;
    }
  
    // 0 - sun
    // 1 = mon
    // 2 = tue
    // 3 = wed
    // 4 = thu
    // 5 = fri
    // 6 = sat
 serve(){
      return this.served++;
  };
  setServed(num){
      return this.served+=num;
  };
  showTotalServed(){
      return `Show total served: ${this.served}`;
  } 
 
    isOpen() {
      let currentHour = new Date().getHours();
      let currentDay = new Date().getDay();
  
      if (currentDay === 6 || currentDay === 0) {
        return `${this.name} is closed`;
      } else {
        if (currentHour > 9 && currentHour < 22) {
          return `${this.name} is open`;
        } else {
          return `${this.name} is closed`;
        }
      }
    }
 }
  
  const beshBarmak = new Restaurant("Besh Barmak", "kyrgyz");
  console.log(beshBarmak.isOpen());

  console.log(beshBarmak.serve());
  console.log(beshBarmak.setServed(20));

 console.log(beshBarmak.showTotalServed());