const wForm = document.querySelector('form');
const search = document.querySelector('input');
const loc = document.querySelector('#loc');
const we = document.querySelector('#we');

wForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Submit");
    const location = search.value;
    loc.textContent = "Loading ....";
    we.textContent = '';

    fetch('/weather?address=' + location)
        .then((res)=>{  
            res.json()
                .then((data)=>{
                    if(data.error){
                        loc.textContent = data.error
                    }else{
                        loc.textContent = location;
                        loc.textContent = data.weather;
                    }
                })       
        })
});