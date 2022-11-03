//traffic light

let light = '';

turnL = (light) => (light == 'green')?
    'yellow': (light == 'yellow')? 'red':
    (light == 'red')? 'green' : 'red';

    console.log(turnL('yellow'));
