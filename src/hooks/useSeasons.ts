import { useState, useEffect } from 'react';
import { Season } from '../types';
import { getSeasons } from '../api';

export function useSeasons() {
  const [seasons, setSeasons] = useState([] as Season[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null as Error | null);

  useEffect(() => {
    let isMounted = true;

    const fetchSeasons = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getSeasons();
        if (isMounted) {
          setSeasons(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchSeasons();

    return () => {
      isMounted = false;
    };
  }, []);

  return { seasons, loading, error };
}
