const BASE_URL = 'https://6457d1c40c15cb148211d552.mockapi.io/';

const http = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(BASE_URL + endpoint);
  const data = await response.json();

  return data;
};

// Loading observer to state
interface LoadingType<T> {
  loading: string;
  entities?: T;
}

type SetType<T> = ({ loading }: LoadingType<T>) => void;

const loadingObserver = async <T>(set: SetType<T>, url: string) => {
  try {
    set({ loading: 'loading' });
    const data = await http<T>(url);
    set({ entities: data, loading: 'succeeded' });
  } catch (err) {
    set({ loading: 'error' });
  }
};

export { http, loadingObserver };
