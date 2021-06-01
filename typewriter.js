const sentence = "hello there from lighthouse labs";
const sentenceEoL = `${sentence}\n`

for (let index = 0; index < sentenceEoL.length; index++) {
  setTimeout( () => {
    process.stdout.write(sentenceEoL[index])
  }, index * 50)
}
