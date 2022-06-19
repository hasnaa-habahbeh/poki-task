let dropdown = 'block';

function openMenu(){
    let dropdown_item = document.querySelectorAll('.dropdown-item');
    for(let i=0; i<dropdown_item.length; i++){
        dropdown_item[i].style = `display: ${dropdown}`;
    }
    dropdown = dropdown === 'block' ? 'none' : 'block';
}
