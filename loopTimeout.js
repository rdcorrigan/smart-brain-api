for (var i = 1; i <= 5; i++) {
    console.log('before timeout');
    setTimeout(function() {
        console.log('inside timeout');
        console.log(i);
    }, 3000);
    console.log('after timeout');
}

// Due to JavaScript's event-driven nature, the loop continues to execute without waiting for the setTimeout calls to complete. As a result, all the setTimeout calls are scheduled almost simultaneously.

// When used in a loop, `var` is function-scoped rather than block-scoped. This means it can almost wander throughout the entire function.

// When you pair `var` with `setTimeout`, an asynchronous function, it gets a bit complicated. As the loop completes and `setTimeout` functions start, `i` has already advanced to `6`.

// This means that every one of your `setTimeout` functions ends up printing `6`.

// However, there's a more predictable option: `let`. `let` is block-scoped, making it stay put within loops. Each iteration gets its own `let i`, which keeps its assigned value. By using `let` instead of `var`, the code will display the expected sequence of `1` to `5`. It's a minor code adjustment, but significantly alters the outcome.