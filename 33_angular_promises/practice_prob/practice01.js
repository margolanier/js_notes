function jumpgame(nums) {
	/**
	 * nums = the array of all jump locations
	 * trail = indexes of where i've been
	 */
	function jumpFrom(nums, trail) {
		// The most recent thing is the current step in the trail.
		const current = trail[trail.length - 1];

		if (current === nums.length - 1) {
			console.log(trail);
			return true;
		}

		//
		if (current >= nums.length) {
			return false;
		}

		// If we've gone off the low-index end.
		if (current < 0) {
			return false;
		}

		// If the current index exists more than once, no bueno. We don't want cycles.
		if (trail.filter(i => i === current).length > 1) {
			return false;
		}

		const fwd = jumpFrom(nums, trail.concat(current + nums[current]));
		const back = jumpFrom(nums, trail.concat(current - nums[current]));

		return fwd || back;
	}

	return jumpFrom(nums, [0]);
}
console.log(jumpgame([1, 1, 2]))
console.log(jumpgame([1, 1, 2, 0]))
console.log(jumpgame([2, 3, 1, 0, 2]))
console.log(jumpgame([2, 3, 1, 0, 3, 1, 8, 3, 4, 2, 3]))
console.log(jumpgame([1, 2, 4, 1, 1, 2, 1]));