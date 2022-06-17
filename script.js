const listaEmail = ["luna@mail.com","sole@mail.com","terra@mail.com","mare@mail.com","admin"];

const userMail = prompt('inserisci la tua mail, scoprirai se puoi entrare nella tana del bianconiglio')
let degno  = false;
for (let index = 0; index < listaEmail.length; index++) {
    const element = listaEmail[index];
    if (element === userMail){
        degno=true;
    }     
}

if (degno==true){
    console.log("sei degno, puoi giocare")
    const userNumber = Math.floor(Math.random()*6)+1;
    const rng = Math.floor(Math.random()*6)+1;
  
        if  (rng > userNumber){
            console.log(`hai perso il tuo numero è ${userNumber} e rnJesus ha rollato ${rng}`);
        } else if  ( rng == userNumber){
            console.log(`pareggio il tuo numero è ${userNumber} e rnJesus ha rollato ${rng}`);
        }else {
            console.log(`hai vinto il tuo numero è ${userNumber} e rnJesus ha rollato ${rng}`);
        }
        }else{
    console.log('indegno')
}