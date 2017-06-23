// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
import Config from './config'
import KillBind from './killbind'

let isEscKeyDown = false;

Config.load('samples/kaamelott/config.json').then((config) => {
  console.log(config)
  _.forEach(config.buttons, (button) => {
    KillBind.map(button)
    KillBind.bind(button)

    document.querySelector(`#button-${button.id}`).onclick = (event) => {
      const id = button.id
      document.querySelector(`#button-${id}`).classList.add('is-active')
      KillBind.play(id)
    }

  })
})

window.onkeydown = (event) => {
  const key = event.keyCode ? event.keyCode : event.which
  console.log(event.key, '(' + event.keyCode + ')')

  if (key === 27) {
    if (isEscKeyDown) {
      return
    }

    const buttons = document.querySelectorAll('button')
    _.forEach(buttons, (button) => {
      button.innerText = KillBind.idToKey(button.innerText)
    })

    isEscKeyDown = true

    return
  }

  const id = KillBind.keyToId(key)
  document.querySelector(`#button-${id}`).classList.add('is-active')
  KillBind.play(id)
}

window.onkeyup = (event) => {
  const key = event.keyCode ? event.keyCode : event.which

  if (key === 27) {
    const buttons = document.querySelectorAll('button')
    _.forEach(buttons, (button) => {
      button.innerText = KillBind.keyToId(button.innerText)
    })

    isEscKeyDown = false

    return
  }
}