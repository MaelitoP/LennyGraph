import {
  Market as MarketToken,
  AuctionCreated as AuctionCreatedEvent,
} from '../generated/Market/Market'

import { Token, User } from '../generated/schema'

export function handleAuctionCreated(event: AuctionCreatedEvent): void {
  let token = Token.load(event.params.tokenId.toString())

  if (!token) {
    token = new Token(event.params.tokenId.toString())
    token.tokenID = event.params.tokenId
    token.tokenContract = event.params.nftContract.toHexString()
    token.createdAtTimestamp = event.block.timestamp
  }
  token.owner = event.params.owner.toHexString()
  token.save()

  let user = User.load(event.params.owner.toHexString())
  if (!user) {
    user = new User(event.params.owner.toHexString())
    user.save()
  }
}
