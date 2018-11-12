const INITIAL_STATE = { face: '(◑‿◐)' };

function faceReducer(state=INITIAL_STATE, action) {
    switch(action.type){
        case 'HAPPY':
            return { face:`(◑‿◐)` };

        case 'SAD':
            return { face:`(ㄒoㄒ)` };

        case 'ANGRY':
            return { face:`ლಠ益ಠ)ლ` };

        case 'CONFUSED':
            return { face:`(◎_◎;)` };
        
        case 'JUAN':
            return {face:'https://media1.tenor.com/images/66286c21e00a4ef6707abb4bfe19dcb3/tenor.gif?itemid=5043292'}

        default:
            return state;
    }
}

const store = Redux.createStore(faceReducer);
