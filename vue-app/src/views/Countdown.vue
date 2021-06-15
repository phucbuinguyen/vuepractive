<template>
  <div id="app">
    <v-date-picker
      v-model="date"
      mode="dateTime"
      :minute-increment="1"
      :min-date="new Date()"
      @input="onDateChange"
    />
    <div class="container">
      <div id="countdown" v-if="loaded">
        Countdown to : {{ date }}

        <ul>
          <li>
            <span id="days">{{ displayDays }}</span
            >days
          </li>
          <li>
            <span id="hours">{{ displayHours }}</span
            >hours
          </li>
          <li>
            <span id="minutes">{{ displayMinutes }}</span
            >minutes
          </li>
          <li>
            <span id="seconds">{{ displaySeconds }}</span
            >seconds
          </li>
        </ul>

        <h5 v-if="!expired">...</h5>
        <h5 v-else>Timer is done!</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["year", "month", "date", "hour", "minute", "second", "millisecond"],
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
    date: new Date(),
    loaded: false,
    expired: false,
  }),
  // watch: {
  //   date: function (date) {
  //     console.log(this.date);

  //     this.showRemaining(date);
  //   },
  // },
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
    onDateChange() {
      this.expired = false;

      (this.displayDays = 0), this.showRemaining(this.date);
    },
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = this.date;
        const distance = end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          this.expired = true;
          this.loaded = true;
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
        this.loaded = true;
      }, 1000);
    },
  },
};
</script>

<style scoped>
/* general styling */
.container {
  width: 43%;
  float: right;
  padding: 10px;
  margin-right: 15% !important;
}

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
}

li {
  display: inline-block;
  font-size: 1em;
  list-style-type: none;
  padding: 1em;
}

li span {
  display: block;
  font-size: 3.5rem;
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