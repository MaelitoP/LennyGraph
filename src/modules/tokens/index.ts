import { NFT } from '../../../generated/schema'

export namespace tokens {
  /**
   *
   * @param tokenId
   * @param ownerId
   * @returns
   */
  export function getERC721Token(tokenId: string): NFT {
    let token = NFT.load(tokenId)
    if (token == null) {
      token = new NFT(tokenId)
    }
    return token as NFT
  }

  /**
   *
   * @param tokenId
   * @param owner
   * @returns
   */
  export function changeOwner(tokenId: string, owner: string): NFT {
    let token = getERC721Token(tokenId)
    token.owner = owner
    return token as NFT
  }

  /**
   *
   * @param tokenId
   * @param collectionId
   * @param owner
   * @returns
   */
  export function addCollection(tokenId: string, collectionId: string): NFT {
    let token = getERC721Token(tokenId)
    token.collection = collectionId
    return token as NFT
  }
}
