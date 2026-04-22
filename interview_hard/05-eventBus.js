/**
 * 05. Event Bus
 *
 * Implement an EventBus class with the following methods:
 * - subscribe(eventName, handler): subscribes and returns an unsubscribe function
 * - publish(eventName, payload): notifies all handlers
 * - subscribeOnce(eventName, handler): handler runs once, then unsubscribes
 *
 * Requirements:
 * - Avoid leaking removed handlers
 * - Publishing one event should not break if one handler throws
 */

class EventBus {
    constructor() {
        // TODO: initialize internal state
    }

    subscribe(eventName, handler) {
        // TODO: implement
    }

    subscribeOnce(eventName, handler) {
        // TODO: implement
    }

    publish(eventName, payload) {
        // TODO: implement
    }
}

