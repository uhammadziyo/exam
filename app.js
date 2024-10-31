let ota = document.getElementById(`ota`)
fetch(`https://jsonplaceholder.typicode.com/users`)
.then((response) => response.json())
.then((data)=> getdata(data));
console.log(data)

 function getdata(params) {
    console.log(params);


    params.map((item) =>{
        let div = document.createElement(`div`)
        let h3 = document.createElement(`h3`)
        let tel = document.createElement(`h5`)
        let tel2= document.createElement(`h2`)
        let tel3 = document.createElement(`h6`)
        let tel4 = document.createElement(`h1`)
        let tel6 = document.createElement(`h4`)
        let tel7 = document.createElement(`p`)
        h3.innerHTML = `Ism:` + item.name;
        tel6.innerHTML = `Username:` + item.username;
        tel.innerHTML = `Tel:` + item.phone;
        tel2.innerHTML = `address:` + item.address;
        tel3.innerHTML = `email:` + item.email;
        tel7.innerHTML = `website:` + item.website;



        div.appendChild(h3)
        div.appendChild(tel6)
        div.appendChild(tel)
        div.appendChild(tel2)
        div.appendChild(tel3)
        div.appendChild(tel7)
        div.appendChild(tel4)
        div.classList.add(`box`)
        div.classList.add(`h3`)
        div.classList.add(`tel6`)
        div.classList.add(`tel`)
        div.classList.add(`tel2`)
        div.classList.add(`tel3`)
        div.classList.add(`tel7`)
        ota.appendChild(div)
    })
 }