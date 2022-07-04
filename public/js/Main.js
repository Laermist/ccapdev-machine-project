function action(){
    document.querySelector('.add-comment').style.display = 'flex';
};

function closing(){
    document.querySelector('.add-comment').style.display = 'none';
}

function addPost(sess){
    alert('Posting...');
    console.log("Posting...");
    var entry = {
        userID: sess.userID,
        username: sess.username,
        content: $("#txtArea").val(),
        date: getDate(),
        category: $("#filter").val(),
        likes: 0,
        comments: 0
    };
    console.log("checking...");
    if(entry.content.trim().length==0 || entry.category.trim().length==0){
        alert("Make sure you have something written and a category selected.");
        console.log("Make sure you have something written and a category selected.");
        return false;
    }
    else
    {
        console.log("else...");
        $.get('/add', entry, function (result) {
            console.log(result);
            if(result)
            {
                $('#txtArea').val('');
                $('#filter').val('');

                alert("Your post has been posted!");
                return true;
            }
            else
            {
                alert('Function error encountered.');
                console.log('Function error encountered.');
                return false;
            }
        });
    }
}

