//=============================================================================
//  Copyright 2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

//-----------------------------------------------------------------------------
//  Unit tests for id-token-codec-js f function.
//-----------------------------------------------------------------------------

const khCodec = require('../index');

//-----------------------------------------------------------------------------

test( 'MinOneOneDigitIds', fDone => {

  const zResult = khCodec.fzEncodeIds( [ 1 ], 'one' );

  expect( zResult ).toBe( '10one1' );

  fDone();

  } ); // test(MinOneOneDigitIds)

//-----------------------------------------------------------------------------

test( 'MaxOneOneDigitIds', fDone => {

  const zResult = khCodec.fzEncodeIds( [ 61 ], 'one' );

  expect( zResult ).toBe( '10onez' );

  fDone();

  } ); // test(MaxOneOneDigitIds)

//-----------------------------------------------------------------------------

test( 'MinThreeThreeDigitIds', fDone => {

  const zResult = khCodec.fzEncodeIds( [ 3844, 3844, 3844 ], 'three' );

  expect( zResult ).toBe( '3330three100100100' );

  fDone();

  } ); // test(MinThreeThreeDigitIds)

//-----------------------------------------------------------------------------

test( 'MaxThreeThreeDigitIds', fDone => {

  const zResult = khCodec.fzEncodeIds( [ 238327, 238327, 238327 ], 'three' );

  expect( zResult ).toBe( '3330threezzzzzzzzz' );

  fDone();

  } ); // test(MaxThreeThreeDigitIds)

//-----------------------------------------------------------------------------

test( 'OneTwoAndThreeDigitIdsWithRandomToken', fDone => {

  const zResult = khCodec.fzEncodeIds( [ 20, 200, 200000 ] );

  expect( zResult ).toMatch( /^3210([0-9a-f]{5,})K3Eq1o$/ );

  fDone();

  } ); // test(OneTwoAndThreeDigitIdsWithRandomToken)

// EOF
