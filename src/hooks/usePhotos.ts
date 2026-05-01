import { useState, useEffect } from 'react';
import { Photo } from '../types';
import { getPhotos } from '../api';

export function usePhotos(seasonId: string | null) {
  const [photos, setPhotos] = useState([] as Photo[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null as Error | null);

  useEffect(() => {
    let isMounted = true;

    if (!seasonId) {
      setPhotos([]);
      return;
    }

    const fetchPhotos = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getPhotos(seasonId);
        if (isMounted) {
          setPhotos(data);
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

    fetchPhotos();

    return () => {
      isMounted = false;
    };
  }, [seasonId]);

  return { photos, loading, error };
}
