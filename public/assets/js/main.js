$('#submitBtn').on('click', (event) => {
    event.preventDefault();

    const newBurger = {
        burger: $('#burgerInput').val().trim(),
    }

    $.ajax("/api/burger", {
        method: "POST",
        data: newBurger
    }).then( () => {
        location.reload();
    })
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
        location.assign("/");
    })
})