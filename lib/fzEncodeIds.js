'use strict';
//=============================================================================
//  Copyright 2018-2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

const fzEncode = require( './fzEncode.js' );

//-----------------------------------------------------------------------------
//  @alias module:@aponica/id-token-codec-js.fzEncodeIds
//
//  @public
//
//  @summary
//    Encodes an array of IDs plus an optional token.
//
//  @description
//    If a token is null or not specified, a rather-long hexadecimal value
//    is randomly generated.
//
//    The token, preceded by a zero, is passed to fzEncode() along with the
//    first ID in the given array. The result is used as the token for the
//    next ID, and so on.
//
//    The result can be decoded by
//    {@linkcode
//      module:@aponica/id-token-codec-js.fanDecodeIds|fanDecodeIds()} or
//    {@linkcode module:@aponica/id-token-codec-js.fhDecodeIdsAndToken|
//      fhDecodeIdsAndToken()}.
//
//  @param {number[]} anIds
//    The integer IDs to be encoded.
//
//  @param {string} [zToken=null]
//    The optional string token to be encoded. If null (the default), then
//    a random token is generated.
//
//  @return {string}
//    The encoded IDs and token.
//-----------------------------------------------------------------------------

module.exports = ( anIds, zToken = null ) => { // fzEncodeIds

  return anIds.reduce(
    ( zAcc, nCur ) => fzEncode( nCur, zAcc ), // reducer
    ( ( null !== zToken ) ?
      `0${zToken}` :
      `${Math.random()}`.replace('.','') )
    ); // reduce()

  }; // fzEncodeIds

// EOF
