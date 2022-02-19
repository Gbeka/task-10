class Cars {
    constructor(brand, year, enginePower, color){
      this.brand = brand;
      this.year = year;
      this.enginePower = enginePower;
      this.color = color;
    }
   showInfo(){
     return `Марка: ${this.brand}, год выпуска: ${this.year}, мощность: ${this.enginePower}, цвет: ${this.color}`
   } 
  
  }
  class ElectroCars extends Cars {
    constructor (brand, year, enginePower, color, battery){
      super(brand, year, enginePower, color);
      this.battery = battery;
    }
    showInfo(){
     return super.showInfo() + ' Аккумулятор '   +  this.battery;
    }  
  
    promote(){
      return `Покупайте электромобили с характеристикой: ${this.showInfo()}`
    }
  
  }
  const auto = new Cars('Мерседес', '2010', ' 400 кВт', 'белый');
  console.log(auto.showInfo());
  
  const electroM = new ElectroCars('Lion', '2022', ' 200 кВт', 'серый', '100 кВт');
  console.log(electroM.showInfo());
  
  console.log(electroM.promote());