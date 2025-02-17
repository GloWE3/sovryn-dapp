import { ChainIds } from '@sovryn/ethers-provider';

import { AmbientLiquidityPool, PoolListGroup } from '../AmbientLiquidityPool';

export const bobMainnet: AmbientLiquidityPool[] = [
  new AmbientLiquidityPool(
    'USDC',
    'USDT',
    ChainIds.BOB_MAINNET,
    400,
    '0x4E686Dff59A51A948ea9Cc8C44FF0b32cba6e62a',
  ),
  new AmbientLiquidityPool(
    'USDT',
    'DLLR',
    ChainIds.BOB_MAINNET,
    400,
    '0x2E41CD9805592b3A536EeE6286CC8FCFb3DFd9F2',
  ),
  new AmbientLiquidityPool(
    'DLLR',
    'SOV',
    ChainIds.BOB_MAINNET,
    400,
    '0x0034a1EaCDa61619Bd9D1CEDA101189A0EF871F9',
  ),
  new AmbientLiquidityPool(
    'USDT',
    'SOV',
    ChainIds.BOB_MAINNET,
    410,
    '0xdC1f62679a25bB9d568463ce007a3b91D01448FD',
  ),
  new AmbientLiquidityPool(
    'USDC',
    'SOV',
    ChainIds.BOB_MAINNET,
    410,
    '0xf59720432AA266D4B077efE659EEb36923f41Da2',
  ),
  new AmbientLiquidityPool(
    'DAI',
    'SOV',
    ChainIds.BOB_MAINNET,
    410,
    '0xEb92Ae0ce520D099b0FB51Ef297f581c5AB57dbf',
  ),
  new AmbientLiquidityPool(
    'ETH',
    'SOV',
    ChainIds.BOB_MAINNET,
    410,
    '0x594726E3B10bb5402279cBf745fC597041a6f1cF',
  ),
  new AmbientLiquidityPool(
    'WSTETH',
    'SOV',
    ChainIds.BOB_MAINNET,
    410,
    '0xBd696d1a6E09D051dDce2d7DcDDD6B6Bf082f8AA',
  ),
  new AmbientLiquidityPool(
    'RETH',
    'SOV',
    ChainIds.BOB_MAINNET,
    410,
    '0xE668D03C31f78713952953cE6f345b1D0137B754',
  ),
  new AmbientLiquidityPool(
    'WBTC',
    'SOV',
    ChainIds.BOB_MAINNET,
    410,
    '0x165b73022AE5601494c3a200f92114736BD3Cfca',
  ),
  new AmbientLiquidityPool(
    'TBTC',
    'SOV',
    ChainIds.BOB_MAINNET,
    410,
    '0xB4e9fAaF39d95E396E588A0CdD70f3a9E79286be',
  ),
  new AmbientLiquidityPool(
    'TBTC',
    'WBTC',
    ChainIds.BOB_MAINNET,
    400,
    '0x02eB05fa5A5da14B54d6b7d5044e5343c01126EB',
  ),
  new AmbientLiquidityPool(
    'POWA',
    'SOV',
    ChainIds.BOB_MAINNET,
    420,
    '0xbFB1bF6dCc02baCeB8C4c336457798c9b4ED1225',
  ),
  new AmbientLiquidityPool(
    'WBTC',
    'satUSD',
    ChainIds.BOB_MAINNET,
    410,
    '0x9C82eF04eC7FEB9E07a9f2Be23cc180753CE4612',
  ),
  new AmbientLiquidityPool(
    'USDT',
    'satUSD',
    ChainIds.BOB_MAINNET,
    400,
    '0x8C6a57d16B1ddAD730Fee27822284d085C106DbB',
  ),
  // new AmbientLiquidityPool('DAI', 'DLLR', ChainIds.BOB_MAINNET, 400),
  // new AmbientLiquidityPool('RETH', 'ETH', ChainIds.BOB_MAINNET, 400),
  // new AmbientLiquidityPool('WSTETH', 'ETH', ChainIds.BOB_MAINNET, 400),

  new AmbientLiquidityPool(
    'UniBTC',
    'SolvBTC.BBN',
    ChainIds.BOB_MAINNET,
    400,
    '0xEBE212e59c012Bd2f092489d98d11fCe17697cb2',
    PoolListGroup.new,
  ),
  new AmbientLiquidityPool(
    'UniBTC',
    'wBTC',
    ChainIds.BOB_MAINNET,
    400, // todo
    '0x6D1529a7b34D452488f577495Dd7574954339dD9',
    PoolListGroup.new,
  ),
  new AmbientLiquidityPool(
    'SolvBTC.BBN',
    'wBTC',
    ChainIds.BOB_MAINNET,
    400,
    '0x0F3dAef46d5631f4C335643e287314580135011E',
    PoolListGroup.new,
  ),
  new AmbientLiquidityPool(
    'wBTC',
    'SolvBTC',
    ChainIds.BOB_MAINNET,
    400,
    '0xF11aB627c41044f40B5C2587e77540e7fC7Af42a',
    PoolListGroup.new,
  ),
  new AmbientLiquidityPool(
    'DOGGOTOTHEMOON',
    'POWA',
    ChainIds.BOB_MAINNET,
    420,
    '0xe26a75Cd1892600cB4935EeA701f1D1DaE1e8ab0',
    PoolListGroup.new,
  ),
  new AmbientLiquidityPool(
    'DOGGOTOTHEMOON',
    'wBTC',
    ChainIds.BOB_MAINNET,
    420,
    '0xDCB0Fb1113923aed92f82DBf5a114E64Ea55522d',
    PoolListGroup.new,
  ),
];
