keys = {
    'up': false,
    'down': false,
    'left': false,
    'right': false,
    'a': false,
    'b': false,
    'c': false,
    'd': false,
    'e': false,
    'f': false,
    'g': false,
    'h': false,
    'i': false,
    'j': false,
    'k': false,
    'l': false,
    'm': false,
    'n': false,
    'o': false,
    'p': false,
    'q': false,
    'r': false,
    's': false,
    't': false,
    'u': false,
    'v': false,
    'w': false,
    'x': false,
    'y': false,
    'z': false,
    'space': false,
    'enter': false,
    'shift': false,
    'ctrl': false,
    'alt': false
};

body.onkeydown = function(e) {
    if (e.key === 'ArrowUp') {
        keys['up'] = true;
    } else if (e.key === 'ArrowDown') {
        keys['down'] = true;
    } else if (e.key === 'ArrowLeft') {
        keys['left'] = true;
    } else if (e.key === 'ArrowRight') {
        keys['right'] = true;
    } else if (e.key === 'a') {
        keys['a'] = true;
    } else if (e.key === 'b') {
        keys['b'] = true;
    } else if (e.key === 'c') {
        keys['c'] = true;
    } else if (e.key === 'd') {
        keys['d'] = true;
    } else if (e.key === 'e') {
        keys['e'] = true;
    } else if (e.key === 'f') {
        keys['f'] = true;
    } else if (e.key === 'g') {
        keys['g'] = true;
    } else if (e.key === 'h') {
        keys['h'] = true;
    } else if (e.key === 'i') {
        keys['i'] = true;
    } else if (e.key === 'j') {
        keys['j'] = true;
    } else if (e.key === 'k') {
        keys['k'] = true;
    } else if (e.key === 'l') {
        keys['l'] = true;
    } else if (e.key === 'm') {
        keys['m'] = true;
    } else if (e.key === 'n') {
        keys['n'] = true;
    } else if (e.key === 'o') {
        keys['o'] = true;
    } else if (e.key === 'p') {
        keys['p'] = true;
    } else if (e.key === 'q') {
        keys['q'] = true;
    } else if (e.key === 'r') {
        keys['r'] = true;
    } else if (e.key === 's') {
        keys['s'] = true;
    } else if (e.key === 't') {
        keys['t'] = true;
    } else if (e.key === 'u') {
        keys['u'] = true;
    } else if (e.key === 'v') {
        keys['v'] = true;
    } else if (e.key === 'w') {
        keys['w'] = true;
    } else if (e.key === 'x') {
        keys['x'] = true;
    } else if (e.key === 'y') {
        keys['y'] = true;
    } else if (e.key === 'z') {
        keys['z'] = true;
    } else if (e.key === ' ') {
        keys['space'] = true;
    } else if (e.key === 'Enter') {
        keys['enter'] = true;
    } else if (e.key === 'Shift') {
        keys['shift'] = true;
    } else if (e.key === 'Control') {
        keys['ctrl'] = true;
    } else if (e.key === 'Alt') {
        keys['alt'] = true;
    }
};
body.onkeyup = function(e) {
    if (e.key === 'ArrowUp') {
        keys['up'] = false;
    } else if (e.key === 'ArrowDown') {
        keys['down'] = false;
    } else if (e.key === 'ArrowLeft') {
        keys['left'] = false;
    } else if (e.key === 'ArrowRight') {
        keys['right'] = false;
    } else if (e.key === 'a') {
        keys['a'] = false;
    } else if (e.key === 'b') {
        keys['b'] = false;
    } else if (e.key === 'c') {
        keys['c'] = false;
    } else if (e.key === 'd') {
        keys['d'] = false;
    } else if (e.key === 'e') {
        keys['e'] = false;
    } else if (e.key === 'f') {
        keys['f'] = false;
    } else if (e.key === 'g') {
        keys['g'] = false;
    } else if (e.key === 'h') {
        keys['h'] = false;
    } else if (e.key === 'i') {
        keys['i'] = false;
    } else if (e.key === 'j') {
        keys['j'] = false;
    } else if (e.key === 'k') {
        keys['k'] = false;
    } else if (e.key === 'l') {
        keys['l'] = false;
    } else if (e.key === 'm') {
        keys['m'] = false;
    } else if (e.key === 'n') {
        keys['n'] = false;
    } else if (e.key === 'o') {
        keys['o'] = false;
    } else if (e.key === 'p') {
        keys['p'] = false;
    } else if (e.key === 'q') {
        keys['q'] = false;
    } else if (e.key === 'r') {
        keys['r'] = false;
    } else if (e.key === 's') {
        keys['s'] = false;
    } else if (e.key === 't') {
        keys['t'] = false;
    } else if (e.key === 'u') {
        keys['u'] = false;
    } else if (e.key === 'v') {
        keys['v'] = false;
    } else if (e.key === 'w') {
        keys['w'] = false;
    } else if (e.key === 'x') {
        keys['x'] = false;
    } else if (e.key === 'y') {
        keys['y'] = false;
    } else if (e.key === 'z') {
        keys['z'] = false;
    } else if (e.key === ' ') {
        keys['space'] = false;
    } else if (e.key === 'Enter') {
        keys['enter'] = false;
    } else if (e.key === 'Shift') {
        keys['shift'] = false;
    } else if (e.key === 'Control') {
        keys['ctrl'] = false;
    } else if (e.key === 'Alt') {
        keys['alt'] = false;
    }
};