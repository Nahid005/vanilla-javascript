var authorList = document.getElementsByClassName('author');
for(var i = 0; i < authorList.length; i++) {
    var eliment = authorList[i];
    eliment.style.color = "green";
    // console.log(eliment.innerHTML);
    // eliment.innerHTML = " Nahid Hassan ";
}

// var title = document.getElementById('sectionTitle');
// var newEliment = document.createElement("p");
// newEliment.innerHTML =" Hello Nahid Hassan" ;

// title.appendChild(newEliment);

// dom onclick function 

var clickBtn = document.getElementById('btn').addEventListener('click', function(){
    document.body.style.color="green";
})
