let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

updateMode()
darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
window.addEventListener('storage', updateModeWithoutTransitions)

function updateMode() {
  let isSystemDarkMode = darkModeMediaQuery.matches
  let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

  if (isDarkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  if (isDarkMode === isSystemDarkMode) {
    delete window.localStorage.isDarkMode
  }
  console.log(isDarkMode);
}


function disableTransitionsTemporarily() {
  document.documentElement.classList.add('[&_*]:!transition-none')
  window.setTimeout(() => {
    document.documentElement.classList.remove('[&_*]:!transition-none')
  }, 0)
}

function updateModeWithoutTransitions() {
  disableTransitionsTemporarily()
  updateMode()
}

//mobile screen size dropown toggle 
const menuButton = document.getElementById('headlessui-popover-button-:R2qb6:');
const dropdownMenu = document.getElementById('dropdownMenu');

menuButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle("hidden");
    //console.log('toggle')
})