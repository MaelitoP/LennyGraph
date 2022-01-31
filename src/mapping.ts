import {
  SetTokenURICall,
  AddArtistCall,
} from './../generated/LennyNFT/LennyNFT'
import { AuctionCreated as AuctionCreatedEvent } from '../generated/Market/Market'

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
 * Update {@link ERC721Token entity} URI
 * @param _ {@link SetTokenURICall} inputs
 */
export function handleSetTokenURI(_: SetTokenURICall): void {
  let tokenId = _.inputs.tokenId

  let token = tokens.getERC721Token(tokenId.toHex())
  token.save()
}

/**
 * Update isArtist field to true of User entity
 * @param _ {@link AddArtistCall} inputs
 */
export function handleAddArtist(_: AddArtistCall): void {
  let user = users.setUserAsArtist(_.inputs.newAddress)
  user.save()
}
