$(document).ready(function(){
    let face;

    face = store.getState().face
    $('#face').text(face)

    $('#happy').on('click', function(){
        store.dispatch({type:'HAPPY'})
        face = store.getState().face
        $('#face').text(face)
    })

    $('#sad').on('click', function(){
        store.dispatch({type:'SAD'})
        face = store.getState().face
        $('#face').text(face)
    })

    $('#angry').on('click', function(){
        store.dispatch({type:'ANGRY'})
        face = store.getState().face
        $('#face').text(face)
    })

    $('#confused').on('click', function(){
        store.dispatch({type:'CONFUSED'})
        face = store.getState().face
        $('#face').text(face)
    })

    $('#juan').on('click', function(){
        store.dispatch({type:'JUAN'})
        face = store.getState().face
        $('#face').html(`<img src=${face}>`)
    })

    
})

