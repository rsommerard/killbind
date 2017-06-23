import { Howl } from 'howler'

class Sample {
  constructor(file) {
    this.value = new Howl({src: `samples/${file}`})
  }

  play() {
    this.value.play()
  }

  isPlaying() {
    return this.value.playing();
  }

  on(event, callback) {
    this.value.on(event, callback)
  }
}

export default Sample