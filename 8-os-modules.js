const os = require('os')
const user = os.userInfo()
console.log(user)

// Method to return the system uptime in seconds
const upTime = os.uptime()
console.log(`The System Uptime is ${upTime / 60} minutes`)

// Method to know the machine type
console.log(os.machine())

// Method to know the networkInterfaces

const interfaces = os.networkInterfaces()

// Get the MAC address of the first Ethernet interface
// TODO Assignment for Later

const pcInfo = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(pcInfo)
