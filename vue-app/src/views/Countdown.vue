<template>
  <div>
    <div class="container">
      <div id="countdown">
        <ul>
          <li>{{ displayDays }}<span id="days"></span>days</li>
          <li>{{ displayHours }}<span id="hours"></span>Hours</li>
          <li>{{ displayMinutes }}<span id="minutes"></span>Minutes</li>
          <li>{{ displaySeconds }}<span id="seconds"></span>Seconds</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
  }),
  mounted() {
    this.showRemaining();
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
  },
  methods: {
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2021, 6, 16);
        const distance = end.getTime() - now.getTime();
        if (distance < 0) {
          clearInterval(timer);
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        this.displayHours = hours < 10 ? "0" + hours : hours;
        this.displayDays = days < 10 ? "0" + days : days;
      }, 1000);
    },
  },
};
</script>

<style scoped>
/* general styling */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  margin: 0;
}

body {
  align-items: center;
  background-color: #ffd54f;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

.container {
  color: #333;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-weight: normal;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
}

li {
  display: inline-block;
  font-size: 1.5em;
  list-style-type: none;
  padding: 1em;
  text-transform: uppercase;
}

li span {
  display: block;
  font-size: 4.5rem;
}

.emoji {
  display: none;
  padding: 1rem;
}

.emoji span {
  font-size: 4rem;
  padding: 0 0.5rem;
}

@media all and (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }

  li {
    font-size: 1.125rem;
    padding: 0.75rem;
  }

  li span {
    font-size: 3.375rem;
  }
}
</style>