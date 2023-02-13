// console.log("tosher");
// let x,y,z
// x = 5 + 6;
// y = x * 10;
// z=x+y
// console.log(z);

// let person = "Hege"
// console.log(person);

// var a="John"
// let b="Doe"
// let c= a + " "  + b
// console.log(c);

// const price1 = 5;
// const price2 = 6;
// let total = price1 + price2;
// console.log(total);

// let s = "Volvo" + 16 + 4;
// console.log(s);



// let Person = {
//     Name : "Ariful Islam ",
//     Nickname : "Protik",
//     FullName : function() {
//         return this.Name + this.Nickname;
//     },
//     Char: {
//         Luicharleve: 100,
//     }
// }

// console.log(Person);

// Person.Name = "Tosher "

// function Cow(leg, head, tail) {
//     this.leg = leg;
//     this.head = head;
//     this.tail = tail;
//     this.Jat = "Australian"
//     this.Printfull = function() {
//         return {
//             PaAse: this.leg
//         }
//     }

// }
// let mal = ["hello", "world"]

// let ml = "Tosher"
// let newCow = new Cow(4, 1, 1)
// console.log(newCow.Printfull())

const inp = document.getElementById("input-field")
const btn = document.getElementById("button")
const inp_text = document.getElementById("in-text")
const cross = document.getElementById("crss")


btn.onclick = function(){
    // let input = inp.value
    // inp_text.innerText = input
    inp_text.style.right = "0px"
    cross.style.visibility = "visible"
    element.setAttribute("required");
    // let notification = "You enter a notification text"
    // document.innerText = notification

}
cross.onclick = function(){
    inp_text.style.right = "-400px"
    cross.style.visibility = "hidden"

}
