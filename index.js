"use strict";
//=============================================================================
//  Copyright 2018-2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

//-----------------------------------------------------------------------------
//  @module @aponica/id-token-codec-js
//
//  @public
//
//  @summary
//    Encode/decode IDs and a token to/from a string.
//
//  @description
//    Functions to encode a set of ID(s) and a token into a string and decode
//    them back into the original values. The string is typically used as part
//    of a tracking key.
//
//    An equivalent PHP package, aponica/id-token-codec-php, is available and
//    kept synchronized with this one for interoperability.
//-----------------------------------------------------------------------------

module.exports = {
  fanDecodeIds: require( './lib/fanDecodeIds.js' ),
  fhDecode: require( './lib/fhDecode.js' ),
  fhDecodeIdsAndToken: require( './lib/fhDecodeIdsAndToken.js' ),
  fzEncode: require( './lib/fzEncode.js' ),
  fzEncodeIds: require( './lib/fzEncodeIds.js' )
  };

// EOF
