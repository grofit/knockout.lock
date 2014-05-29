(function(knockout){

	var lockContainer = function(element, lockingCallback) {
		var nodes = element.getElementsByTagName('*');
		for(var i = 0; i < nodes.length; i++)
		{ 
			nodes[i].disabled = true;
			if(lockingCallback) 
			{ lockingCallback(nodes[i]); }
		}
	};
	
	var unlockContainer = function(element, unlockingCallback) {
		var nodes = element.getElementsByTagName('*');
		for(var i = 0; i < nodes.length; i++)
		{ 
			nodes[i].disabled = false;
			if(unlockingCallback)
			{ unlockingCallback(nodes[i]); }
		}
	};
		
	knockout.lock = lockContainer;
	knockout.unlock = unlockContainer;
	knockout.bindingHandlers.lock = {
		update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
			var allBindings = allBindingsAccessor();
			var lockBinding = allBindings.lock;
			var lock = ko.unwrap(lockBinding);
			var lockingCallback, unlockingCallback;
			
			if(typeof(lock) === "object") {
				lockingCallback = ko.unwrap(lock.onLocking);
				unlockingCallback = ko.unwrap(lock.onUnlocking);
				lock = ko.unwrap(lock.shouldLock);
			}
			
			if (typeof(lock) === "function")
			{ lock = ko.unwrap(lockBinding)(); }

			lock ? lockContainer(element, lockingCallback) : unlockContainer(element, unlockingCallback);
		}
	};	
})(typeof exports === 'undefined' ? this["ko"] : require("knockout"));