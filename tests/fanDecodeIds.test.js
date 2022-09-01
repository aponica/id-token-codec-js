//=============================================================================
//  Copyright 2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

//-----------------------------------------------------------------------------
//  Unit tests for id-token-codec-js f function.
//-----------------------------------------------------------------------------

const khCodec = require('../index');

//-----------------------------------------------------------------------------

test( 'OneTwoAndThreeDigitIds', fDone => {

  const anIds = khCodec.fanDecodeIds( '3210a1b2K3Eq1o' );

  expect( anIds.length ).toBe( 3 );

  expect( anIds[ 0 ] ).toBe( 20 );

  expect( anIds[ 1 ] ).toBe( 200 );

  expect( anIds[ 2 ] ).toBe( 200000 );

  fDone();

  } ); // test(OneTwoAndThreeDigitIds)

// EOF
