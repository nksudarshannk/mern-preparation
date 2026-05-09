
// 1. Create array
const contact=["amma","appa","rahul"]
// acess item
console.log(contact[0]);
console.log(contact.length)
console.log(contact);


// 2. Add/Remove LAST item
contact.push("Priya")
console.log(contact)
contact.pop();
console.log(contact)

//Add to start (unshift) Remove from start(shift)
contact.shift();
console.log(contact)

contact.unshift("Roh");
console.log(contact)

// 3. Loop through for loop  foreach
const students = ["Arun", "Priya", "Karthik", "Meena"];
for(let  i=0;i<students.length;i++){
    console.log("present :",students[i]);
}
// 1. Use backtick ` ` (NOT normal quotes ' ' or " ")
// 2. Put variables inside ${ }
// 3. You can do math inside ${ } also!
const student = ["Arun", "Priya", "Karthik", "Meena"];
student.forEach((name,index )=>{
    console.log(`Roll ${index+1}:${name}`);
});


// 4.map() — Transform EVERY item → get NEW array

const marks=[45,20,30,50,60]
const withbonus=marks.map(mark=>mark+5);
console.log(marks);
console.log(withbonus);
// we can use both method for map function we use 2 method for callback function
const mark=[45,20,30,50,60]
const withbonu=marks.map((mark)=>{
return mark+5;
})
console.log(withbonu);


//filter() — Keep only items that PASS a test
const mark1=[80, 45, 90, 30, 72]
const withbonus1=mark1.filter(mark1=>mark1<50);
console.log(mark1);
console.log(withbonus1);

// indexof
console.log(mark1.indexOf(45))

// slice() = COPY a portion (original NOT changed)



const items = ["A", "B", "C", "D", "E"];
const copy = items.slice(1, 4);  // index 1 to 3 (4 not included)
console.log(copy);   // ["B", "C", "D"]
console.log(items);  // ["A", "B", "C", "D", "E"]  ← SAME!

// splice() = CUT from original (original IS changed)



const item = ["A", "B", "C", "D", "E"];
item.splice(1, 2);  // at index 1, remove 2 items
console.log(item);  // ["A", "D", "E"]  ← B and C GONE!