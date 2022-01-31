import {
  SetTokenURICall,
  AddArtistCall,
} from './../generated/LennyNFT/LennyNFT'
import { AuctionCreated as AuctionCreatedEvent } from '../generated/Market/Market'
import { Transfer as TransferEvent } from '../generated/LennyNFT/LennyNFT'

import { users, tokens } from './modules'

/**
 *
 * @param event
 */
export function handleAuctionCreated(event: AuctionCreatedEvent): void {
  let tokenId = event.params.tokenId.toString()
  let token = tokens.getERC721Token(tokenId)

  token.address = event.params.nftContract
  if (event.params.owner) token.owner = event.params.owner.toHex()

  token.save()
}

/**
 *
 * @param event
 */
export function handleTransfer(event: TransferEvent): void {
  let token = tokens.getERC721Token(event.params.tokenId.toString())
  token.owner = event.params.to.toHex()
  token.save()
}
