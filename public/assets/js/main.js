// get giphys
const getDevourGifs = () => {
    let queryUrl = "https://api.giphy.com/v1/gifs/search?q=eat+hamburger&limit=10&api_key=";
    const apiKey = "ZkpSjv8NLDZ4KzOJbZy6zZRxjFLNFIvS"
    queryUrl += apiKey;
    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(res => {
        // console.log(res.data);
        $('.devoured').each(function(){
            let random = Math.floor(Math.random()*9);
            $(this).attr("src", res.data[random].images.fixed_height.url)
        })
    })
}

getDevourGifs();


$('#submitBtn').on('click', (event) => {
    event.preventDefault();

    const newBurger = {
        burger: $('#burgerInput').val().trim(),
    }
    console.log(newBurger.burger);
    if (newBurger.burger === "") {
        $('#alertModal').modal('toggle');
    } else {
        $.ajax("/api/burger", {
            method: "POST",
            data: newBurger
        }).then( () => {
            location.reload();
        })
    }
})

$('.devourBtn').on('click', (event) => {
    event.preventDefault();

    const devoured = {
        devoured: 1 // true
    };
    const id = $(event.target).attr('id');
    // console.log(id);

    $.ajax("/api/burger/" + id, {
        method: "PUT",
        data: devoured
    }).then( () => {
        location.reload();
    })
})
