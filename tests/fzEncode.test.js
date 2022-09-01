//=============================================================================
//  Copyright 2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

//-----------------------------------------------------------------------------
//  Unit tests for id-token-codec-js f function.
//-----------------------------------------------------------------------------

const khCodec = require('../index');

//-----------------------------------------------------------------------------

test( 'MinOneDigitId', fDone => {

  const zResult = khCodec.fzEncode( 0, 'one' );

  expect( zResult ).toBe( '1one0' );

  fDone();

  } ); // test(MinOneDigitId)

//-----------------------------------------------------------------------------

test( 'MaxOneDigitId', fDone => {

  const zResult = khCodec.fzEncode( 61, 'one' );

  expect( zResult ).toBe( '1onez' );

  fDone();

  } ); // test(MaxOneDigitId)

//-----------------------------------------------------------------------------

test( 'MinThreeDigitId', fDone => {

  const zResult = khCodec.fzEncode( 3844, 'three' );

  expect( zResult ).toBe( '3three100' );

  fDone();

  } ); // test(MinThreeDigitId)

//-----------------------------------------------------------------------------

test( 'MaxThreeDigitId', fDone => {

  const zResult = khCodec.fzEncode( 238327, 'three' );

  expect( zResult ).toBe( '3threezzz' );

  fDone();

  } ); // test(MaxThreeDigitId)

// EOF
