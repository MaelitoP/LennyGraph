import { Bytes } from '@graphprotocol/graph-ts'
import { User } from '../../../generated/schema'

export namespace users {
  /**
   * Get (or create if doesn't exist) a specific user
   * @param userAddress from evm
   * @returns @type {User}
   */
  export function getUser(userAddress: Bytes): User {
    let accountId = userAddress.toHex()

    let user = User.load(accountId)
    if (user === null) {
      user = new User(accountId)
      user.address = userAddress
    }

    return user as User
  }
}
