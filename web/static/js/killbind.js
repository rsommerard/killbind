import Sample from './sample'
import Button from './button'

const KillBind = {
  bindings: {},
  keyToIdMap: {},
  idToKeyMap: {},

  map(button) {
    KillBind.keyToIdMap[button.key] = button.id
    KillBind.idToKeyMap[button.id] = button.key
  },

  keyToId(key) {
    return KillBind.keyToIdMap[key]
  },

  idToKey(id) {
    return KillBind.idToKeyMap[id]
  },

  bind(button) {
    const sample = new Sample(button.sample)
    KillBind.bindings[button.id] = new Button(button.id, sample)
  },

  play(id) {
    if (KillBind.bindings[id]) {
      KillBind.bindings[id].playSample()
    }
  }
}

export default KillBind