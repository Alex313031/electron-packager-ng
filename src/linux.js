'use strict'

const App = require('./platform')
const common = require('./common')

class LinuxApp extends App {
  get originalElectronName () {
    return 'electron-v12.2.3-linux-x64'
  }

  get newElectronName () {
    return common.sanitizeAppName(this.executableName)
  }

  async create () {
    await this.initialize()
    await this.renameElectron()
    await this.copyExtraResources()
    return this.move()
  }
}

module.exports = {
  App: LinuxApp
}
