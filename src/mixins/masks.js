
export default {
  methods: {
    $formatApiDateTimeToFront (date) {
      if (date === null) return ''
      const pattern = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/g
      const getDate = pattern.exec(date)[0]
      return getDate.replace(pattern, '$1/$2/$3 $4:$5:$6 ')
    },
    $formatApiDateToFront (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${year}/${month}/${day}`
    },
    $formatFrontDateToApi (date) {
      if (!date) return null
      const [year, month, day] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }

  }
}
