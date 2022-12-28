import React from 'react';
import { store } from '../../../app/Store';
import ChainLinkSummaryContainer from './ChainLinkSummary';
import { renderWithProviders } from '../../../utils/TestUtils';
import {
  setGameStart,
  showChainLinkSummary
} from '../../../features/game/GameSlice';

it('renders without crashing isPlayer true', () => {
  const div = renderWithProviders(<ChainLinkSummaryContainer />);
});

it('does something', async () => {
  const testStore = store;
  store.dispatch(showChainLinkSummary());
  store.dispatch(
    setGameStart({ playerID: 1, gameID: 123456, authKey: '12345' })
  );
  const div = renderWithProviders(<ChainLinkSummaryContainer />, {
    store: testStore
  });
  await div.findByText('Zipper Hit');
});
