# Knockout.Lock

A simple binding to lock and unlock elements within a container

## More Info
This is quite useful when you want to disable a form while an ajax action or waiting on a callback.

## Usage
The binding can be called with an observable boolean:
```
<div data-bind="lock: someObservableBoolean">
 ...
</div>
```

Or it can be called with a collection of options if you require more control over the locking:
```
<div data-bind="lock: { shouldLock: someObservableBoolean, onLocking someLockingCallback, onUnlocking: someUnlockingCallback }">
 ...
</div>

<script type="text/javascript">
	viewModel.someLockingCallback = function(element) { doSomethingWithElement(element); };
	viewModel.someUnlockingCallback = function(element) { doSomethingWithElement(element); };
</script>
```

The available advanced options for this binding are:

* **shouldLock** - The observable boolean value specifying if things elements should be locked
* **onLocking** - The callback for each element which will be locked
* **onUnlocking** - The callback for each element which will be unlocked

There are also now some manual invocation methods, so you can manually call:

* knockout.lock(containerElement, callback);
* knockout.unlock(containerElement, callback);

This should not be used in most cases but allows progmatic interaction with the bindings.

Here is an example of what it does and how to use it.
[View Example](https://rawgithub.com/grofit/knockout.lock/master/example.html)