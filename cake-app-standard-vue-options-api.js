import {createApp, ref} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

// Options API
const rootComponent = {
  data() {
    return {
      weekDays: [
        'Sunday 9 am–10 pm',
        'Monday Closed',
        'Tuesday 12–10 pm',
        'Wednesday 12–10 pm',
        'Thursday 12–10 pm',
        'Friday 12–10 pm',
        'Saturday 9 am–10 pm',
      ],
      allTimings: '',
      email: '',
    }
  },
  computed: {
    todaysTiming() {
      return this.weekDays[new Date().getDay()]
    },
  },
  methods: {
    updateAllTimings({el: $el}) {
      this.allTimings = `<div style="padding:10px">${$el.innerHTML}</div>`
    },
    showTooltip({target: $el}) {
      const tooltip = new bootstrap.Tooltip($el, {
        html: true,
        title: this.allTimings,
        sanitize: false,
        customClass: 'p-4',
      })
      tooltip?.show()
    },
    hideTooltip({target: $el}) {
      const tooltip = bootstrap.Tooltip.getInstance($el)
      tooltip?.dispose()
    },
    subscribe() {
      console.log(this.email)
    },
  },
}

createApp(rootComponent).mount('header#header-section')
