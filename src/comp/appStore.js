import { store } from '@risingstack/react-easy-state';
import * as api from '../utils/api';

const appStore = store({
  beers: [],
  async fetchBeers(filter) {
    appStore.isLoading = true;
    appStore.beers = await api.fetchBeers(filter);
    appStore.isLoading = false;
  },
});

export default appStore;
