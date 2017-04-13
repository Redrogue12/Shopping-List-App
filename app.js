// Single state object
var state = {
    items: []
};

// State modification functions
var addItem = function(state, item) {
    state.items.push(item);
};

// Remove from state function
var removeItem = function(state) {
    var item = $(this).closest('li').find('.shopping-item').text()
    var index = state.items.indexOf(item);
    if (index > -1) {
    array.splice(index, 1);
    }
};

// Render functions
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return `<li>\
          <span class="shopping-item">${item}</span>\
          <div class="shopping-item-controls">\
            <button class="shopping-item-toggle">\
              <span class="button-label">check</span>\
            </button>\
            <button class="shopping-item-delete">\
              <span class="button-label">delete</span>\
            </button>\
          </div>\
        </li>`;
    });
    element.html(itemsHTML);
};

//EVENT SUBMIT
$('#js-shopping-list-form').submit(function(event) {
    //Prevents form from resetting
    event.preventDefault();
    //This will add the value of the entry to the state
    addItem(state, $('#shopping-list-entry').val());
    //After submitting entry I want the input element to be empty again
    $('#shopping-list-entry').val("")
    //This will take all items in state and render them as elements in DOM
    renderList(state, $('.shopping-list'));
});


//EVENT CLICKING CHECK
$('.shopping-list').on('click', '.shopping-item-toggle',function(event) {
    // event.stopPropagation()
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')

})

//EVENT CLICKING DELETE
$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove()
    var item = $(this).closest('li').find('.shopping-item').text()
    var index = state.items.indexOf(item)
    if (index > -1) {
    state.items.splice(index, 1)
    }
})
