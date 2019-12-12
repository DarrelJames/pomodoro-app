class Timer {
  constructor() {
    this.isClockRunning = false
    this.workSessionDuration = 1500;
    this.currentTimeLeftInSession = 1500;
    this.breakSessionDuration = 300

    this.initBindingsAndEventListeners()
  }

  initBindingsAndEventListeners() {
    this.pomodoroContainer = document.getElementById('pomodoro-container')
    this.pomodoroTimer = document.getElementById('pomodoro-timer')
    this.pomodoroContainer.addEventListener('click', this.checkClick.bind(this))


  }

  checkClick(e) {
    if (e.target.id === 'pomodoro-start') {
      this.toggleClock()
    }
    if (e.target.id === 'pomodoro-stop') {
      this.toggleClock(reset)
    }
    if (e.target.id === 'pomodoro-pause') {
      this.toggleClock()
    }
  }

  toggleClock(reset) {
    if (reset) {
      this.stopClock()
      this.isClockRunning = false
      this.currentTimeLeftInSession = this.workSessionDuration
      this.displayCurrentTimeLeftInSession()
      // STOP THE TIMER
    } else {
      if (this.isClockRunning === true) {
        // PAUSE THE TIMER
        clearInterval(this.clockTimer);
        this.isClockRunning = false
      } else {
        // START THE TIMER
        this.isClockRunning = true
        this.clockTimer = setInterval(() => {
          this.currentTimeLeftInSession--
          this.displayCurrentTimeLeftInSession()
        }, 1000)
      }
    }
  }

  displayCurrentTimeLeftInSession() {
    const secondsLeft = this.currentTimeLeftInSession
    let result = ''
    const seconds = secondsLeft % 60
    const minutes = parseInt(secondsLeft / 60) % 60
    let hours = parseInt(secondsLeft / 3600)


    if (hours > 0) result += `${hours}:`
    result += `${this.addLeadingZeroes(minutes)}:${this.addLeadingZeroes(seconds)}`
    this.pomodoroTimer.innerText = result.toString()
  }

  addLeadingZeroes(time) {
    return time < 10 ? `0${time}` : time
  }

  stopClock = () => {
    // 1) reset the timer we set
    clearInterval(this.clockTimer);
    // 2) update our variable to know that the timer is stopped
    this.isClockRunning = false;
    // reset the time left in the session to its original state
    this.currentTimeLeftInSession = this.workSessionDuration;
    // update the timer displayed
    displayCurrentTimeLeftInSession();
  }

}
