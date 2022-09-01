//=============================================================================
//  Copyright 2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

//-----------------------------------------------------------------------------
//  Unit tests for id-token-codec-js f function.
//-----------------------------------------------------------------------------

const khCodec = require('../index');

//-----------------------------------------------------------------------------

test( 'MinOneDigitId', fDone => {

  const zResult = khCodec.fhDecode( '1one1' );

  expect( zResult.nId ).toBe( 1 );

  expect( zResult.zToken ).toBe( 'one' );

  fDone();

  } ); // test(MinOneDigitId)

//-----------------------------------------------------------------------------

test( 'MaxOneDigitId', fDone => {

  const zResult = khCodec.fhDecode( '1onez' );

  expect( zResult.nId ).toBe( 61 );

  expect( zResult.zToken ).toBe( 'one' );

  fDone();

  } ); // test(MaxOneDigitId)

//-----------------------------------------------------------------------------

test( 'MinThreeDigitId', fDone => {

  const zResult = khCodec.fhDecode( '3three100' );

  expect( zResult.nId ).toBe( 3844 );

  expect( zResult.zToken ).toBe( 'three' );

  fDone();

  } ); // test(MinThreeDigitId)

//-----------------------------------------------------------------------------

test( 'MaxThreeDigitId', fDone => {

  const zResult = khCodec.fhDecode( '3threezzz' );

  expect( zResult.nId ).toBe( 238327 );

  expect( zResult.zToken ).toBe( 'three' );

  fDone();

  } ); // test(MaxThreeDigitId)

// EOF
