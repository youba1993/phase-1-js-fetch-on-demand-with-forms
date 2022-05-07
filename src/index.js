const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        //event.target.children[1].value
        const input = document.querySelector('input#searchByID');
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((resp)=> resp.json()).then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
                title.innerText = data.title;
                summary.innerText = data.summary;
         })
    })
}

document.addEventListener('DOMContentLoaded', init);