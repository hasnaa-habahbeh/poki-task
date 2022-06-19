let counter = 0;

function getImages(){
    let i = 1 + counter * 12;
    let end = 1 + ++counter * 12;
    let container = document.getElementById('gram');
    while(i < end){
        let image = document.createElement('img');
        image.alt = i;
        image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i++}.png`;
        image.onclick = () => {
            window.location = `/open-page?category=pokemon&id=${image.alt}`
        }
        container.appendChild(image);
    }
}

getImages();
