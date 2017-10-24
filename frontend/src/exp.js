const print = text => {
  console.log(text)
}

const lambretaPrint = text => {
  setTimeout(() => {
    console.log(text)
  }, 1000)
}

async function run() {
  print("CEPET 1")
  await lambretaPrint("LAMBAT 1")
  await lambretaPrint("LAMBAT 2")
  print("CEPET 2")
  print("CEPET 3")
  return "FINISH"
}

console.log(run())
