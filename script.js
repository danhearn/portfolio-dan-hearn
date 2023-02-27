//mobile screen size dropown toggle 
const menuButton = document.getElementById('headlessui-popover-button-:R2qb6:');
const dropdownMenu = document.getElementById('dropdownMenu');

menuButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle("hidden");
    //console.log('toggle')
})