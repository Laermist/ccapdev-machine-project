function show(){
    document.querySelector('.show-comment').style.display = 'flex';
}

function exit(){
    document.querySelector('.show-comment').style.display = 'none';
}

function action(){
    document.querySelector('.add-comment').style.display = 'flex';
};

function closing(){
    document.querySelector('.add-comment').style.display = 'none';
}

$(document).ready(function () {
    $('#createPost').submit(function(){
        alert('Posting...');
    });
});

