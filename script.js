class Cars {
    constructor(brand, year, enginePower, color){
      this.brand = brand;
      this.year = year;
      this.enginePower = enginePower;
      this.color = color;
    }
   showInfo(){
     return `Brand of car: ${this.brand}, Year of manufacture: ${this.year}, Engine power: ${this.enginePower}, Car color: ${this.color}`
   } 
  
  }
  class ElectroCars extends Cars {
    constructor (brand, year, enginePower, color, battery){
      super(brand, year, enginePower, color);
      this.battery = battery;
    }
    showInfo(){
     return super.showInfo() + ' Battery: '   +  this.battery;
    }  
  
    promote(){
      return `Buy our brand-new limited edition electro car model, and feel on par with Elon Musk. Characteristics of the electro car: ${this.showInfo()}`
    }
  
  }
  const hesla = new Cars('Hesla', '2022', ' 310 kW', 'Black');
  console.log(hesla.showInfo());
  
  const electroHesla = new ElectroCars('Hesla', '2022', ' 310 kW', 'Black', '100 kWh');
  console.log(electroHesla.showInfo());
  
  console.log(electroHesla.promote());