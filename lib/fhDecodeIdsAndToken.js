'use strict';
//=============================================================================
//  Copyright 2018-2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

const fhDecode = require( './fhDecode.js' );

//-----------------------------------------------------------------------------
//  @alias module:@aponica/id-token-codec-js.fhDecodeIdsAndToken
//
//  @public
//
//  @summary
//    Decode an encoded string into an array of IDs and a token.
//
//  @param {string} zEncoded
//    A string created by {@linkcode
//    module:@aponica/id-token-codec-js.fzEncodeIds|fzEncodeIds()}.
//
//  @returns {Object}
//    A hash (dictionary object) with two members:
//
//      * anIds: array of the integer IDs encoded into `zEncoded`.
//      * zToken: The string token encoded into `zEncoded`.
//
//  @throws Error
//    If `zEncoded` is not a properly-encoded string.
//
//  @see {@linkcode
//    module:@aponica/id-token-codec-js.fzEncodeIds|fzEncodeIds()}
//    for details about the encoded string.
//-----------------------------------------------------------------------------

module.exports = zEncoded => { // fhDecodeIdsAndToken

  const anIds = [];

  while ( '0' !== zEncoded.substring( 0, 1 ) ) {

    if ( 3.5 > zEncoded.length )
      throw new Error( 'invalid key' );

    const hDecoded = fhDecode( zEncoded );

    anIds.unshift( hDecoded.nId );

    zEncoded = hDecoded.zToken;

    } // while

  return { anIds, zToken: zEncoded.substring( 1 ) };

  }; // fhDecodeIdsAndToken

// EOF
