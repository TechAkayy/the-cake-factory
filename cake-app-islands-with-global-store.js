import {createApp, reactive} from 'https://unpkg.com/petite-vue?module'
const store = reactive({
  // state exposed to all expressions within v-scope regions
  /*
get allTimings() {
let _allTimings = ''
this.weekDays.forEach((timing) => {
    _allTimings = `${_allTimings} <div>${timing}</div>`
})
_allTimings = `<div style="padding:10px">${_allTimings}</div>`
//console.log(_allTimings)
return _allTimings
},*/
  weekDays: [
    'Sunday 9 am–10 pm',
    'Monday Closed',
    'Tuesday 12–10 pm',
    'Wednesday 12–10 pm',
    'Thursday 12–10 pm',
    'Friday 12–10 pm',
    'Saturday 9 am–10 pm',
  ],

  get todaysTiming() {
    return this.weekDays[new Date().getDay()]
  },

  AllOpeningHours() {
    return {
      $template: '#all-opening-hours',
    }
  },

  allTimings: '',
  updateAllTimings($el) {
    this.allTimings = `<div style="padding:10px">${$el.innerHTML}</div>`
  },
  showTooltip($el) {
    const tooltip = new bootstrap.Tooltip($el, {
      html: true,
      title: this.allTimings,
      sanitize: false,
      customClass: 'p-4',
    })
    tooltip.show()
  },
  hideTooltip($el) {
    const tooltip = bootstrap.Tooltip.getInstance($el)
    tooltip.dispose()
  },
})

createApp({store}).mount('div#opening-hours')
createApp({store}).mount('div#all-opening-hours')
