function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ` + name + `. You are number ` + line.length + ` in line.`
}

function nowServing(cline) {
  if (cline.length === 0){
    return `There is nobody waiting to be served!`
  } else {
    var first = cline.shift()
    return `Currently serving ` + first + `.`
  }
}

function currentLine(line) {
  var output = `The line is currently: `


}
