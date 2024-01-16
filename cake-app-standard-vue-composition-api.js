import {
  createApp,
  reactive,
  ref,
  computed,
} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

// Composition API

const rootComponent = {
  setup() {
    const weekDays = reactive([
      'Sunday 9 am–10 pm',
      'Monday Closed',
      'Tuesday 12–10 pm',
      'Wednesday 12–10 pm',
      'Thursday 12–10 pm',
      'Friday 12–10 pm',
      'Saturday 9 am–10 pm',
    ])
    const todaysTiming = computed(() => {
      return weekDays[new Date().getDay()]
    })

    const allTimings = ref('')
    const updateAllTimings = ({el: $el}) => {
      allTimings.value = `<div style="padding:10px">${$el.innerHTML}</div>`
    }

    const showTooltip = ({target: $el}) => {
      const tooltip = new bootstrap.Tooltip($el, {
        html: true,
        title: allTimings.value,
        sanitize: false,
        customClass: 'p-4',
      })
      tooltip.show()
    }
    const hideTooltip = ({target: $el}) => {
      const tooltip = bootstrap.Tooltip.getInstance($el)
      tooltip.dispose()
    }

    return {
      weekDays,
      todaysTiming,
      allTimings,
      updateAllTimings,
      showTooltip,
      hideTooltip,
    }
  },
}

createApp(rootComponent).mount('header#header-section')
