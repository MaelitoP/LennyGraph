import { ERC721Token } from '../../../generated/schema'

export namespace tokens {
  /**
   *
   * @param tokenId
   * @param ownerId
   * @returns
   */
  export function getERC721Token(tokenId: string): ERC721Token {
    let token = ERC721Token.load(tokenId)
    if (token == null) {
      token = new ERC721Token(tokenId)
    }
    return token as ERC721Token
  }

  /**
   *
   * @param tokenId
   * @param owner
   * @returns
   */
  export function changeOwner(tokenId: string, owner: string): ERC721Token {
    let token = getERC721Token(tokenId)
    token.owner = owner
    return token as ERC721Token
  }

  /**
   *
   * @param tokenId
   * @param collectionId
   * @param owner
   * @returns
   */
  export function addCollection(
    tokenId: string,
    collectionId: string,
  ): ERC721Token {
    let token = getERC721Token(tokenId)
    token.collection = collectionId
    return token as ERC721Token
  }
}
