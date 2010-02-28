/*global test, expect, ok, stop, setTimeout, start, asyncTest, $, equals, console*/


module('Asynchronous Tests');
test('asynchronous test with explicit stop', function () {
    expect(1);
    // Pause the test first
    stop();

    setTimeout(function () {
        ok(true, 'assertion has been called asynchronously after explicit stop');

        // After the assertion has been called,
        // continue the test
        start();
    }, 100);
});


asyncTest('asynchronous test with implicit stop', function () {
    expect(1);
    // The test is automatically paused

    setTimeout(function () {
        ok(true, 'assertion has been called asynchronously after implicit stop');

        // After the assertion has been called,
        // continue the test
        start();
    }, 100);
});


test("friendfeed test", function () {
    // friendfeed: name of user whose feed we want to retrieve
    var usr = 'scobleizer',
    // friendfeed: number of entries to retrieve
        num = 5;

    expect(1);
    stop();

    // call friendfeed api
    $.getJSON(
        // construct the fetch url
        'http://friendfeed.com/api/feed/user/' + usr + '?num=' + num + '&amp;callback=?',

        // build content from api results
        function (data) {
            // loop for each friendfeed entry retrieved
            $.each(data.entries, function (i, entry) {
                // ignore entry if it is marked as 'hidden'
                if (entry.hidden !== true) {
                    console.log(entry.title);
                }
            });

            ok(data, 'friendfeed returned data');
        }
    );

    setTimeout(function () {
        start();
    }, 1000);
});


asyncTest("friendfeed search test", function () {
    // friendfeed: define the search term we want to find entries for
    var query = 'ipad',
    // friendfeed: number of entries to retrieve
        num = 5;

    expect(1);

    // call friendfeed api
    $.getJSON(
        // construct the fetch url
        'http://friendfeed-api.com/v2/search?q=' + query + '&amp;num=' + num + '&amp;callback=?',

        // build content from api results
        function (data) {
            // loop for each friendfeed entry retrieved
            $.each(data.entries, function (i, entry) {
                // ignore entry if it is marked as 'hidden'
                if (entry.hidden !== true) {
                    console.log(entry.body);
                }
            });

            ok(data, 'friendfeed search returned data');
        }
    );

    setTimeout(function () {
        start();
    }, 1000);
});


asyncTest("twitter test", function () {
    // twitter: name of user whose feed we want to retrieve
    var usr = 'guykawasaki',
    // twitter: number of entries to retrieve
        num = 5;

    expect(1);

    // call twitter api
    $.getJSON(
        // construct the fetch url
        'http://twitter.com/statuses/user_timeline/' + usr + '.json?count=' + num + '&callback=?',

        // build content from api results
        function (data, status) {
            // loop for each twitter status retrieved
            $.each(data, function (i) {
                console.log(this.text);
            });

            ok(data, 'twitter returned data');
        }
    );

    setTimeout(function () {
        start();
    }, 2000);
});


test("twitter search test", function () {
    // twitter: define the search term we want to find entries for
    var query = 'notion ink adam',
    // twitter: number of entries to retrieve
        num = 5;

    expect(1);
    stop();

    // call twitter api
    $.getJSON(
        // construct the fetch url
        'http://search.twitter.com/search.json?q=' + query + '&rpp=' + num + '&callback=?',

        // build content from api results
        function (data, status) {
            // loop for each twitter status retrieved
            $.each(data.results, function (i, result) {
                console.log(result.text);
            });

            ok(data, 'twitter search returned data');
        }
    );

    setTimeout(function () {
        start();
    }, 2000);
});

