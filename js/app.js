
function click(){    
      var data= {};
          console.log(data);
      data[name]= document.getElementById('name').value();
      console.log(data);
      data[level]=$('#level').val();
      data[base] =$('#base').val();
      data[leveltopup]= $('#leveltopup').val();
      data[experience]= $('#experience').val();
      data[bonus]=$('#bonus').val();
      data[period]= $('#period').val();
        
      
      //var employee = require('Employee.js');
         function Employee(data) {
    var levelTopUp = data.leveltopup;

    this.name = data.name;
    this.level = data.level;
    this.yearsOfExperience = data.experience;
    this.bonusPerYear = data.bonus;

    switch (this.level.toLowerCase()) {
        case 'intern':
            this.base = data.base;
            break;
        case 'associate':
            this.base = (1 + (levelTopUp/100)) * data.base;
            break;
        case 'manager':
            this.base = Math.pow((1 + (levelTopUp/100)), 2) * data.base;
            break;
        case 'executive':
            this.base = Math.pow((1 + (levelTopUp/100)), 3) * data.base;
            break;
        case 'director':
            this.base = Math.pow((1 + (levelTopUp/100)), 4) * data.base;
            break;
    }

    this.calculateSalary = function() {
        return this.base + (this.bonusPerYear * this.experience); 
    }
    
}
      var Employee= new Employee(data);
         
      var salary = Employee.calculateSalary();
             
         
      $("#output").html("<div> name : "+data.name+"<p>level : "+data.level+"</p><p>base salary for employees : "+data.base+"</p>,<p>years of experience : "+data.experience+"</p>,<p>salary over a period of "+data.period+" months is </p>"+salary+"</div>");
          
     };
   
   