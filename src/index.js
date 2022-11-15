// write your code here

// Get all Ramen from DOM to appear on web application
//Step 1. allow DOM to load
document.addEventListener("DOMContentLoaded", () => {

//step 2. create fetch request to GET all RAMEN from Server
    getRamen();
    function getRamen() {
        fetch ('http://localhost:3000/ramens') 
        .then (res => res.json())
        .then (ramens => {
            ramens.forEach(ramen => buildRamenObj(ramen));
        })
    }
//Step 3.Build Object from info in Server
    function buildRamenObj(ramen) {
        const ramenObj = {
            name: ramen.name,
            restaurant: ramen.restaurant,
            image: ramen.image,
            rating: ramen.rating,
            comment: ramen.comment
        //console.log(ramen.name);
        }
        //console.log(ramenObj);
        addRamentoDOM(ramenObj);
        //fullRamenInfo(ramenObj);
    }
//Step 4. Display and create RAMEN images
    function addRamentoDOM(ramenObj){
        const div = document.createElement('div');
        div.classList.add('card-image');
        div.setAttribute('id', `image-${ramenObj.id}`);
        const miniImg = document.createElement('img');
        miniImg.src = ramenObj.image;

        //add mouse over Event listener to image
        miniImg.addEventListener('mouseover', () => displayRamenInfo(ramenObj));
        div.appendChild(miniImg);
        document.getElementById('ramen-menu').appendChild(div);
    }

//Step 5. create cb fxn for mouse over event
    function displayRamenInfo(ramenObj) {
        const ramenDetail = document.getElementById('ramen-detail');
        //console.log(ramenDetail);
        ramenDetail.getElementsByClassName('detail-image')[0].src = ramenObj.image;
        ramenDetail.getElementsByClassName('name')[0].innerText = ramenObj.name;
        ramenDetail.getElementsByClassName('restaurant')[0].innerText = ramenObj.restaurant;
        document.getElementById('rating-display').innerText = ramenObj.rating;
        document.getElementById('comment-display').innerText = ramenObj.comment;
    }


//Create ability to add new Ramen
//step 1. create object from form  

    const form = document.getElementById('new-ramen');

    form.addEventListener('submit', (e) => {
        handleSubmit(e);
    });

    function handleSubmit(e) {
        e.preventDefault();
        //console.log(e.target);
        const ramenObj = {
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target.comment.value
        }
        addRamentoDOM(ramenObj);
        e.target.name.value = ""
        e.target.restaurant.value = ""
        e.target.image.value = ""
        e.target.rating.value = ""
        e.target.comment.valu = ""
    }
})

