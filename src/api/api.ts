const BASE_URL = 'https://6457d1c40c15cb148211d552.mockapi.io/';

const http = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(BASE_URL + endpoint);
  const data = await response.json();

  return data;
};

// Loading observer to state
interface LoadingType {
  loading: string;
}

type SetType = ({ loading }: LoadingType) => void;
type FetchDataType = () => Promise<void>;

const loadingObserver = async (set: SetType, fetchData: FetchDataType) => {
  try {
    set({ loading: 'loading' });
    await fetchData();
  } catch (err) {
    set({ loading: 'error' });
  }
};

export { http, loadingObserver };
