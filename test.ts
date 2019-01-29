function get(strings, ...values) {
  const originalString = strings.reduce(
    (total, current, index) => `${total}${current}${values[index] || ''}`,
    ``
  )
  console.log(originalString)
  console.log(strings)
  console.log(values)
  return strings
}

const ok = 'undefined'

const r = get`hello world ${ok} no`

// sysdomain
// mgh1.irgendwas
// disable -> 1
