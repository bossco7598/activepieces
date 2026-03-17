import { PieceAuth, createPiece } from '@activepieces/pieces-framework';
import { PieceCategory } from '@activepieces/shared';
import { getProtocolTvlAction } from './lib/actions/get-protocol-tvl';
import { getDydxPriceAction } from './lib/actions/get-dydx-price';
import { getChainBreakdownAction } from './lib/actions/get-chain-breakdown';
import { getTvlHistoryAction } from './lib/actions/get-tvl-history';
import { getProtocolStatsAction } from './lib/actions/get-protocol-stats';

export const dydx = createPiece({
  displayName: 'dYdX',
  logoUrl: 'https://cdn.activepieces.com/pieces/dydx.png',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.36.1',
  categories: [PieceCategory.BUSINESS_INTELLIGENCE],
  authors: ['bossco7598'],
  actions: [getProtocolTvlAction, getDydxPriceAction, getChainBreakdownAction, getTvlHistoryAction, getProtocolStatsAction],
  triggers: [],
});
