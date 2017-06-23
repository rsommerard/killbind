class Button {
  constructor(id, sample) {
    this.id = id
    this.sample = sample
    this.elem = document.querySelector(`#button-${this.id}`)
  }

  playSample() {
    if (!this.sample.isPlaying()) {
      const that = this;
      console.log(this.elem.classList)
      this.elem.classList.add('is-active')
      this.sample.on('end', function () {
        that.elem.classList.remove('is-active')
      })
      this.sample.play()
    }
  }
}

export default Button