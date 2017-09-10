var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
    dinosaur = 'triceratops',
    dinosaurUpperCased = dinosaur.toUpperCase(),
    textAfter = text.replace('Velociraptor', dinosaurUpperCased);

console.log(textAfter.slice(0, (textAfter.length)/2));