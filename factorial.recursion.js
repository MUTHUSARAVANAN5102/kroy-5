function factorial(n) {
    return n <= 1 ? 1 : (n * factorial(n - 1));
}

module.exports = factorial;import time

while True:
  localtime = time.localtime()
  result = time.strftime("%I:%M:%S %p", localtime)
  print(result)
  time.sleep(1)
