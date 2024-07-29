/* rating system  */

// We sellect all elements with the 'i' tag and store them to NodeList called 'stars'
const stars = document.querySelectorAll('.stars i');

//Loop through the 'stars' NodeList

stars.forEach((star, index1) => {
	// Add an event listener that runs a function when the click event is triggered
	star.addEventListener('click', () => {
		// Loop through the 'stars' NodeList again
		stars.forEach((star, index2) => {
			// Add the 'active' class to the clicked star an any stars wiyh lower index
			// And remove the 'active' class from any stars with higher index
			index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');
		});
	});
});