const result = document.getElementById(`fetchresult`);
const ok = document.getElementById(`ok`);
const text = document.getElementById(`text`);
const dec = document.getElementById(`dec`);
const inc = document.getElementById(`inc`);
const rel = document.getElementById(`rel`);
const container = document.getElementById(`container`);

let width = 70;

ok.addEventListener("click",()=>{
    try{
        result.textContent = "Result : Loading ";
        fetch("https://baconipsum.com/api/?type=all")
            .then(response => {
                if(response.ok){
                    result.textContent = "Result : Fetched with status : "+response.status+".";
                }
                else{
                    result.textContent = " Can't Fetch";
                }
                return response.json();
            })
            .then(data =>{
                text.textContent = data.join("\n\n");
            })
            .catch(er => {
                console.log(er);
                result.textContent = "Error fetching data. Please try again.";
            })
        }
        catch(er){
            console.log(er);
            result.textContent = "Unexpected error occurred. Please try again.";
        }
    ok.textContent = "Go for another";
});
dec.addEventListener("click",()=>{
    if(width >= 55){
        width -= 5;
        container.style.width = width+"%";
    }
});
inc.addEventListener("click",()=>{
    if(width <= 70){
        width += 5;
        container.style.width = width+"%";
    }
});
rel.addEventListener("click",()=>{
    location.reload();
});