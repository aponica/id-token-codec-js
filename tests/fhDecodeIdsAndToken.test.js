//=============================================================================
//  Copyright 2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

//-----------------------------------------------------------------------------
//  Unit tests for id-token-codec-js f function.
//-----------------------------------------------------------------------------

const khCodec = require('../index');

//-----------------------------------------------------------------------------

test( 'MinOneOneDigitIds', fDone => {

  const zResult = khCodec.fhDecodeIdsAndToken( '10one1' );

  expect( zResult.anIds.length ).toBe( 1 );

  expect( zResult.anIds[ 0 ] ).toBe( 1 );

  expect( zResult.zToken ).toBe( 'one' );

  fDone();

  } ); // test(MinOneOneDigitIds)

//-----------------------------------------------------------------------------

test( 'MaxOneOneDigitIds', fDone => {

  const zResult = khCodec.fhDecodeIdsAndToken( '10onez' );

  expect( zResult.anIds.length ).toBe( 1 );

  expect( zResult.anIds[ 0 ] ).toBe( 61 );

  expect( zResult.zToken ).toBe( 'one' );

  fDone();

  } ); // test(MaxOneOneDigitIds)

//-----------------------------------------------------------------------------

test( 'MinThreeThreeDigitIds', fDone => {

  const zResult = khCodec.fhDecodeIdsAndToken( '3330three100100100' );

  expect( zResult.anIds.length ).toBe( 3 );

  for ( let n = 0 ; n < 3 ; n++ )
    expect( zResult.anIds[ n ] ).toBe( 3844 );

  expect( zResult.zToken ).toBe( 'three' );

  fDone();

  } ); // test(MinThreeThreeDigitIds)

//-----------------------------------------------------------------------------

test( 'MaxThreeThreeDigitIds', fDone => {

  const zResult = khCodec.fhDecodeIdsAndToken( '3330threezzzzzzzzz' );

  expect( zResult.anIds.length ).toBe( 3 );

  for ( let n = 0 ; n < 3 ; n++ )
    expect( zResult.anIds[ n ] ).toBe( 238327 );

  expect( zResult.zToken ).toBe( 'three' );

  fDone();

  } ); // test(MaxThreeThreeDigitIds)

//-----------------------------------------------------------------------------

test( 'OneTwoAndThreeDigitIds', fDone => {

  const zResult = khCodec.fhDecodeIdsAndToken( '1109fe129386b5a9c1d5bCY' );

  expect( zResult.anIds.length ).toBe( 2 );

  expect( zResult.anIds[ 0 ] ).toBe( 12 );

  expect( zResult.anIds[ 1 ] ).toBe( 34 );

  expect( zResult.zToken ).toBe( '9fe129386b5a9c1d5b' );

  fDone();

  } ); // test(OneTwoAndThreeDigitIds)

//-----------------------------------------------------------------------------

test( 'InvalidKey', fDone => {

  expect( () => khCodec.fhDecodeIdsAndToken( '321xK3Eq1o' ) ).
    toThrow( 'invalid key' );

  fDone();

  } ); // test(InvalidKey)

// EOF
