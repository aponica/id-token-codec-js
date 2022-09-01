'use strict';
//=============================================================================
//  Copyright 2018-2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

const fhDecodeIdsAndToken = require( './fhDecodeIdsAndToken.js' );

//-----------------------------------------------------------------------------
//  @alias module:@aponica/id-token-codec-js.fanDecodeIds
//
//  @public
//
//  @summary
//    Decode an encoded string into an array of IDs.
//
//  @param {string} zEncoded
//    A string created by {@linkcode
//    module:@aponica/id-token-codec-js.fzEncodeIds|fzEncodeIds()}.
//
//  @return {array}
//    An array of IDs in the order they were encoded.
//
//  @throws Exception
//    If `zEncoded` is not a properly-encoded string.
//
//  @see {@linkcode
//    module:@aponica/id-token-codec-js.fzEncodeIds|fzEncodeIds()}
//    for details about the encoded string.
//-----------------------------------------------------------------------------

module.exports = zEncoded => fhDecodeIdsAndToken( zEncoded ).anIds;

// EOF
