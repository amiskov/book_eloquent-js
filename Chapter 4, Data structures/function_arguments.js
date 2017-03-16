var storage = {squirrel: false, events: []};
/**
 * Adds various quantity of values to the object
 * @param args - Boolean first, events next: true, 'fish', 'vine'
 */
function storeArguments(args) {
    storage.squirrel = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        storage.events.push(arguments[i]);
    }
    console.log(storage)
}
storeArguments(true, 'drink', 'drugs');
