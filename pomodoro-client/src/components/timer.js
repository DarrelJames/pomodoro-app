class Timer {
  constructor() {
    this.isClockRunning = false
    this.workSessionDuration = 1500
    this.currentTimeLeftInSession = 1500
    this.breakSessionDuration = 300
    this.type = 'Work'
    this.timeSpentInCurrentSession = 0
    this.timeSpentWorking = 0
    this.timeSpentOnBreak = 0
    this.initBindingsAndEventListeners()
  }

  initBindingsAndEventListeners() {
    this.pomodoroContainer = document.getElementById('pomodoro-container')
    this.pomodoroTimer = document.getElementById('pomodoro-timer')
    this.pomodoroContainer.addEventListener('click', this.checkClick.bind(this))
    this.sessionsList = document.querySelector('#pomodoro-sessions')
  }

  checkClick(e) {
    if (e.target.id === 'pomodoro-start') {

      this.toggleClock()

      app.sessions.createSession().then((session) => {        
        this.currentSession = session
      })


    }
    if (e.target.id === 'pomodoro-stop') {
      this.toggleClock('reset')
    }
    if (e.target.id === 'pomodoro-pause') {
      this.toggleClock()
    }
  }

  toggleClock(reset) {
    if (reset) {
      this.stopClock()
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
          this.stepDown()
          this.displayCurrentTimeLeftInSession()
        }, 10)
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

  stopClock() {
    this.addTime()
    this.parseAndUpdateSession(this.timeSpentWorking, this.timeSpentOnBreak)
    // 1) reset the timer we set
    clearInterval(this.clockTimer);
    // 2) update our variable to know that the timer is stopped
    this.isClockRunning = false;
    // reset the time left in the session to its original state
    this.currentTimeLeftInSession = this.workSessionDuration;
    // update the timer displayed
    this.displayCurrentTimeLeftInSession();
    this.timeSpentInCurrentSession = 0
    this.type = 'Work'
  }

  stepDown() {
    if (this.currentTimeLeftInSession > 0) {
      // decrease time left / increase time spent
      this.currentTimeLeftInSession--
      this.timeSpentInCurrentSession++
    } else if (this.currentTimeLeftInSession === 0) {

      // Timer is over -> if work switch to break, viceversa
      this.addTime()
      this.timeSpentInCurrentSession = 0
    }
    this.displayCurrentTimeLeftInSession();
  }
  addTime() {
    if (this.type === 'Work') {
      this.currentTimeLeftInSession = this.breakSessionDuration;
      this.timeSpentWorking += this.timeSpentInCurrentSession
      this.type = 'Break'
    } else {
      this.currentTimeLeftInSession = this.workSessionDuration;
      this.type = 'Work'
      this.timeSpentOnBreak += this.timeSpentInCurrentSession
    }
  }
  parseAndUpdateSession(workTime, breakTime) {
    this.currentSession.end_time = new Date()
    app.sessions.updateSession(this.currentSession)
    console.log(workTime);
    console.log(breakTime);

  }
}
