## Wrapping an Event API in a Promise

This pattern, often referred to as "promisifying," acts as a bridge between legacy event-based architectures and modern asynchronous control flow.

It involves instantiating a new Promise object and registering event listeners immediately within its constructor. The logic maps specific event triggers to the Promise's state transitions: the success event invokes the resolve function to deliver the resulting value, while the error event triggers the reject function, ensuring the asynchronous operation is correctly handled.