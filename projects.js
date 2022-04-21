// Making the project divs clickable

window.onload = function(){
    var element = document.getElementsByClassName('clickable-divs');
    element.onclick = openProject(id);
    document.getElementById('id').style.backgroundColor = "blue";
    
}

function openProject(id){
    switch(id){
        case '1':
            window.open('https://juliagrandury.github.io/tigermoth2_website/', '_blank');
            break;
        case '2':
        case '3':

    }
}


