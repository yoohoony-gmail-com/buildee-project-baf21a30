import { useState, useEffect } from 'react';
import { api } from '@/api';
import type { Season } from '@/types';

/**
 * Custom hook to fetch the list of all seasons.
 * Manages loading, error, and data states for the seasons list.
 *
 * @returns An object containing the seasons array, a loading indicator, and any potential error.
 */
export function useSeasons() {
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await api.getSeasons();
        setSeasons(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred while fetching seasons.'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchSeasons();
  }, []); // Empty dependency array ensures this runs only once on mount

  return { seasons, isLoading, error };
}