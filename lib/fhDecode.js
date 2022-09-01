'use strict';
//=============================================================================
//  Copyright 2018-2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

const zBase62Chars = require( './zBase62Chars.js' );

//-----------------------------------------------------------------------------
//  @alias module:@aponica/id-token-codec-js.fhDecode
//
//  @public
//
//  @summary
//    Decode an encoded string into a token and ID.
//
//  @param {string} zEncoded
//    A string created by {@linkcode
//      module:@aponica/id-token-codec-js.fzEncode|fzEncode()}.
//
//  @returns {Object}
//    A hash (dictionary object) with two members:
//
//      * nId: The integer ID encoded into `zEncoded``.
//      * zToken: The string token encoded into `zEncoded`.
//
//  @see {@linkcode
//    module:@aponica/id-token-codec-js.fzEncode|fzEncode()}
//    for details about the encoded string.
//-----------------------------------------------------------------------------

module.exports = zEncoded => { // fhDecode

  const fnFromBase62 = function( zBase62 ) {

    let nResult = 0;

    for ( let nIndex = 0 ; nIndex < zBase62.length ; nIndex++ )
      nResult = ( nResult * 62 ) +
        zBase62Chars.indexOf( zBase62.substring( nIndex, 1+nIndex ) );

    return nResult;

    }; // fnFromBase62

  const nLength = fnFromBase62( zEncoded.substring( 0, 1 ) );

  return {
    nId: fnFromBase62( zEncoded.substring( zEncoded.length - nLength ) ),
    zToken: zEncoded.substring( 1, zEncoded.length - nLength )
    };

  }; // fhDecode

// EOF
