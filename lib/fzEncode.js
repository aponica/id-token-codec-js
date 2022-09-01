'use strict';
//=============================================================================
//  Copyright 2018-2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

const zBase62Chars = require( './zBase62Chars.js' );

//-----------------------------------------------------------------------------
//  @alias module:@aponica/id-token-codec-js.fzEncode
//
//  @public
//
//  @summary
//    Encodes an ID and token.
//
//  @description
//    The result is assembled as follows, given the example `LTI`:
//
//      * `I` = the base62-encoded ID number.
//      * `L` = the base62-encoded length of substring I
//      * `T` = the token string.
//
//    For example:
//
//      1. ID=2 and token=aaabbb returns 1aaabbb2
//      2. ID=63 (base62=11) and token=abcde returns 2abcde11
//
//    The result can be decoded by
//    {@linkcode module:@aponica/id-token-codec-js.fhDecode|fhDecode()}
//
//  @param {number} nId
//    The integer ID to be encoded.
//
//  @param {string} zToken
//    The string token to be encoded.
//
//  @returns {string}
//    The encoded ID and token.
//-----------------------------------------------------------------------------

module.exports = ( nId, zToken ) => { // fzEncode

  //  Encodes a base-10 number as base-62.

  const fzBase62 = function( n ) {

    let zResult = ( ( n == 0 ) ? '0' : '' );

    while ( n > 0 ) {

      const nMod = n % 62;

      zResult = zBase62Chars.substr( nMod, 1 ) + zResult;

      n = ( n - nMod ) / 62;

      } // while

    return zResult;

    }; // fzBase62

  const zB62id = fzBase62( nId );

  return fzBase62( zB62id.length ) + zToken + zB62id;

  } // fzEncode

// EOF
