import { Bytes } from '@graphprotocol/graph-ts'
import { User, Artist } from '../../../generated/schema'

export namespace users {
  /**
   * Get (or create if doesn't exist) a specific user
   * @param userAddress from evm
   * @returns @type {User}
   */
  export function getUser(userAddress: Bytes): User {
    let userId = userAddress.toHex()

    let user = User.load(userId)
    if (user === null) {
      user = new User(userId)
      user.address = userAddress
    }

    return user as User
  }

  export function setUserAsArtist(userAddress: Bytes): User {
    let user = getUser(userAddress)

    user.isArtist = true

    return user as User
  }
}
