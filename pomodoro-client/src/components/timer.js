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

    this.pomodoroContainer.addEventListener('click', e => {
      if (e.target.id === 'pomodoro-start') {
        console.log('start button');
      }
      if (e.target.id === 'pomodoro-stop') {
        console.log('stop button');
      }
      if (e.target.id === 'pomodoro-pause') {
        console.log('pause button');
      }
    })
  }

  toggleClock(reset) {
    if (reset) {
      // STOP THE TIMER
    } else {
      if (isClockRunning === true) {
        // PAUSE THE TIMER
        isClockRunning = false;
      } else {
        // START THE TIMER
        isClockRunning = true;
      }
    }
  }
}
