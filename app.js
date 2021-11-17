function myFunction (id, textRandom) {
    let a = document.getElementById(id);
    a.innerHTML = textRandom;
}

myFunction( 'p1', "texte Random");
myFunction('p2', 'texte moins random');
myFunction('p3', 'texte pas random');
myFunction('p4', 'texte un peu intéressant');
myFunction('p5', 'texte intéressant');