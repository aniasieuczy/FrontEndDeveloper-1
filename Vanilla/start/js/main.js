let showImage = true;
const baseUrl = "http://localhost:3001/courses";

async function getCourses() {
    const resp = await fetch(baseUrl);
    try {
    const courses = await handleResponse(resp);
    // .then(resp =>handleResponse(resp)) //.then(handleResponse)
    // .then(courses=> {
        // console.log(courses);
        const table = document.getElementById("courses");
        // let table = document.getElementById("courses");
        courses.forEach((course) => {
            const row = table.insertRow(-1);
            const url = "./assets" + course.logoUrl;
            row.insertCell(0).innerHTML = `<img
            class="logo center"
            src=${url}
            alt="logo">`;
            row.insertCell(1).innerText = course.name;
            row.insertCell(2).innerText = course.category;
            row.insertCell(3).innerText = course.duration;
            row.insertCell(4).innerText = course.price;
            row.insertCell(5).innerText = course.rating;
        });
    } catch(error) {
            console.warn(error);
    }
}

    async function handleResponse(response) {
        if(response.ok) return response.json();
        if(response.status == 400) {
            const error = await response.text();
            console.log(error)
        }
        if(response.status == 404) {
            throw new Error("Get courses: Network error");
        }
        console.log(`Network reponse was not ok ${response.status}`);
    }


    // const array=[1,2,3,4,5];
    // const newArray = array.filter(el => el % 2 === 0);

    // const sum = array.reduce((total, current) => {
    //     return total + current;
    // })
    // console.log(sum);
   

// imageBtn

    // for(let i = 0; i <=5;i++) {
    //     setTimeout(() => {
    //         console.log(i)
    //     }, i * 1000)
    // }
// domkniecia, wydrukuje 6
// for(var i = 0; i <= 5;i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, i * 1000)
// }

    // const arrayIn = [1,1,2,3,5,8,13,21,34];
    // const arrayOut = arrayIn.map((current, index, arr) => {
    //     if(index > 0) {
    //         return current - arr[index-1];
    //     } else {
    //         return 0;
    //     }
    // });
    // arrayOut
    // console.log()

//get element byClassName zwraca html a nie arraya wiec kod by nie dzialal bez spread ...
//drugim sposobem byloby tez przeiterowanie przez arraya
//for(const image of document.getElementsByClassName("logo")) {
// 
// }


    function onLogoButtonClick() {

        imageBtn.innerText = showImage ? "Ukryj przycisk" : "Pokaż przycisk";

        const btn = document.getElementById("imageBtn");
        showImage = !showImage;

        if(showImage) {
            btn.classList.replace("btn-primary", "btn-danger");
        } else {
            btn.classList.replace("btn-danger", "btn-primary");
        }
        toggleImages();
    }

    function toggleImages() {
        for(const image of document.getElementsByClassName("logo center")) {
            if(showImge) {
                image.classList.remove("hidden");
            } else {
                image.classList.add("hidden");
            }
        }
    }

        //zrob z toggle

        // const arr = [...document.getElementsByClassName("logo")];

        
        
        

      
        
    //     arr.forEach((image) => {
    //         if(showImage) {
    //             image.classList.remove("hidden"); 
    //         } else {
    //             image.classList.add("hidden");   
    //         }
    //     });
    // }

    
