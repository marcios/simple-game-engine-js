const key = {
    LEFT:'ArrowLeft',
    RIGTH: 'ArrowRight',
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    SPACE:'Space',
    ENTER:'Enter',
    A:'KeyA',
    W:'KeyW',
    D:'KeyD',
    S:'KeyS'
}

const keyState = {

}

export const  Input = {
    get key() {return key},
    onKey(keyCode) {
        return keyState[keyCode];
    }
}

window.addEventListener('keydown', event=> {
    keyState[event.code] = true;
})

window.addEventListener('keyup', event=> {
    delete keyState[event.code];
})