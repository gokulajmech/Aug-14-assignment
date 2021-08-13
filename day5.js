
let name1={
    first_name:'gokul',
    second_name:'rajan',
    
};
let fullName=function(hometown,door_no)
            {
               console.log(this.first_name+" "+this.second_name+" "+hometown+" "+door_no); 
            }



let name2={
    first_name:'paul',
    second_name:'walker'
};
fullName.call(name1,'rav','32');
fullName.apply(name2,['era','23']);
let printFullName= fullName.bind(name1,'rav','32');
printFullName();

printFullName= fullName.bind(name2,'rav','32');
printFullName();
