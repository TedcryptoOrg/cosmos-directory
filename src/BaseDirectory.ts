export default abstract class BaseDirectory {
  protected domain: string
  protected protocol: string = process.env.DIRECTORY_PROTOCOL ?? 'https'
  protected mainNetDomain: string = process.env.DIRECTORY_DOMAIN ?? 'cosmos.directory'
  protected testNetDomain: string = process.env.DIRECTORY_DOMAIN_TESTNET ?? 'testcosmos.directory'

  protected constructor (testnet = false) {
    this.domain = testnet ? this.testNetDomain : this.mainNetDomain
  }
}
