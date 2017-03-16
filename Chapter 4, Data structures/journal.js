// Journal format: { "events": ["carrot", "exercise", "weekend"], "squirrel": false }

/**
 * Check if entry has certain event
 * @param {string} event - For example "pizza" or "touched tree"
 * @param {string} entry - Journal object: { "events": ["carrot", "exercise", "weekend"], "squirrel": false }
 * @returns {boolean} hasEvent - if there's and event in journal object
 */
function hasEvent(event, entry) {
    return entry.events.indexOf(event) != -1;
}

/**
 * Prepare correlation table for given event
 * @param {string} event - "touched tree" or "pizza"
 * @param {Array} journal - whole Jacques journal entries
 * @returns {number[]} - correlation table with [N00, N01, N10, N11] representation
 */
function tableFor(event, journal) {
    var table = [0, 0, 0, 0];

    for (var i = 0; i < journal.length; i++) {
        var entry = journal[i],
            index = 0; // index of array value in table

        if (hasEvent(event, entry)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;

    }
    return table;
}

/**
 * Computes the ϕ coefficient from correlation array
 * @param {Array} table - [N00, N01, N10, N11]
 * @returns {number}
 */
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

/**
 *
 * @param {Array} journal
 * @returns {object}
 */
function gatherCorrelations(journal) {
    var phis = {}; // {'event':  ϕ } pairs
    for (var entry = 0; entry < journal.length; entry++) {
        var events = journal[entry].events;

        for (var i = 0; i < events.length; i++) { // loop over events in journal line
            var event = events[i];
            if (!(event in phis))
                phis[event] = phi(tableFor(event, journal)); // Add event in journal with it's correlation
        }
    }
    return phis;
}
var correlations = gatherCorrelations(JOURNAL);


// Sort events by correlation and print them out
var sortable = [];
for (var event in correlations) {
    if (correlations[event] < -0.1 || correlations[event] > 0.1) {
        sortable.push([ event, correlations[event]])
    }
}
sortable.sort(function(a, b) { // sort by max value
    return b[1] - a[1];
});
for(var i = 0; i < sortable.length; i++) {
    out.innerHTML = out.innerHTML + 'event: ' + sortable[i][0] + '; correlation: ' + sortable[i][1] + '\n';
}

