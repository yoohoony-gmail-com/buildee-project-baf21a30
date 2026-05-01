import { useState, useEffect } from 'react';
import { api } from '@/api';
import type { Photo } from '@/types';

/**
 * Custom hook to fetch photos for a specific season.
 * Manages loading, error, and data states for the photos list.
 * The hook re-fetches data whenever the seasonId changes.
 *
 * @param seasonId The ID of the season for which to fetch photos. If null, no fetch is performed.
 * @returns An object containing the photos array, a loading indicator, and any potential error.
 */
export function usePhotos(seasonId: string | null) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Do not fetch if seasonId is not provided
    if (!seasonId) {
      setPhotos([]);
      return;
    }

    const fetchPhotos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await api.getPhotosBySeasonId(seasonId);
        setPhotos(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred while fetching photos.'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, [seasonId]); // Dependency array ensures re-fetch when seasonId changes

  return { photos, isLoading, error };
}