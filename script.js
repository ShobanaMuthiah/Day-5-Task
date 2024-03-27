//Day 5 tasks

//Task 1

//create your own resume in JSON format
const resume={    
        "name":"shobana",
        "age":"21",
        "city":"chennai",
        "location":[{"fadds":"VIP street","landmark":"vinayagar koil","ladds":"tambaram"}],
        "equalification":[{"sslc":"87"},{"hsc":"82"},{"ug":"92"}],
        "languages":["tamil","english"],
        "profile":[{"networks":["linkedin,instagrame"]},{"url":{"linkenIn":"http//shobanamuthiah","insta":"shobana_muthiah"}}]
    }

//the 1st value of obj is my resume detail
console.log('My Resume\n\n');
console.log(resume);
empres=(Object.entries(resume))


//Task 2

//iterate over all for loop

//iterate with 'for' loop
console.log('\n\nIterate with "for" loop\n\n');
for(var i=0;i<empres.length;i++)
{
    console.log(empres[i]);
}

//iterate with 'for oi' loop
console.log('\n\nIterate with "for in" loop\n\n');
for(var value in resume)
{
    console.log(resume[value]);
}
//iterate with 'for of' loop
console.log('\n\nIterate with "for of" loop\n\n');
for(var [key,value] of empres)
{
    console.log(key,value);
}

//iterate with 'for each' loop
console.log('\n\nIterate with "for each" loop\n\n');
empres.forEach(([key,value])=>console.log(key,value));

