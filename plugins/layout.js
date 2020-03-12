const numberOfNotes = document.getElementsByClassName('note').length
const margin = 15
const notesBlockHeight = []

for (let j = 0; j < 3; j += 1) {
  let notesColumnHeight = 0
  let notesColumnCount = 0

  for (let i = j; i < numberOfNotes; i += 3) {
    notesColumnHeight += document.getElementsByClassName('note')[i].clientHeight
    notesColumnCount += 1
  }

  notesBlockHeight.push(notesColumnHeight + margin * notesColumnCount)
}

console.log(notesBlockHeight)
