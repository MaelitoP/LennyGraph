import {
  SetTokenURICall,
  AddArtistCall,
} from './../generated/LennyNFT/LennyNFT'
import { AuctionCreated as AuctionCreatedEvent } from '../generated/Market/Market'

import { users, tokens } from './modules'

export function handleAuctionCreated(event: AuctionCreatedEvent): void {
  let ownerAddress = event.params.owner
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
