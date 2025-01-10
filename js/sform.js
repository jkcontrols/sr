const scriptURL = "https://script.google.com/macros/s/AKfycbzZouYODRadM9DpeHE4xC5OB34cqW0pD6obOtWieZGbcgWiZRFk-Yj2c05ipUsNDFQPQw/exec"


const form  = document.forms['form']
const tabledata = document.getElementById('table-data');

console.log("form") 
form.addEventListener('submit', e=> {
    e.preventDefault()
    fetch(scriptURL, { method:'POST', body: new FormData(form)})
    .then(response => alert("Thank you Form Submitted"))
    // .then(() => { window.location.reload(); })
    .then(() => { window.location.href='..https://jkcontrols.github.io/sr/'})
    .catch(error => console.error('Error!', error.message))
})



// fetch data from google sheet


// fetch("https://script.google.com/macros/s/AKfycbwXdl4jxUDf4Q_sGjYfr4KKNq127Fs6zaGqV3FWLMP22Pcsp23i5QK4B2tBCq5hwqx1Cg/exec", {
//     method: "GET"
// })
// .then(res => res.json())
// .then(datas => {
//     datas.myalldata.map((data, index) => {
//         console.log(data);
//         let jobno = data[0];
//         let indate = data[1];
//         let indcno = data[2];
//         let cmpny = data[3];
        
//         tabledata.innerHTML += `
//             <tr>
//                 <td>${index + 1}</td>
//                 <td>${jobno}</td>
//                 <td>${indate}</td>
//                 <td>${indcno}</td>
//                 <td>${cmpny}</td>
//             </tr>`;
//     });
// })
// .catch(error => console.error('Error:', error))
