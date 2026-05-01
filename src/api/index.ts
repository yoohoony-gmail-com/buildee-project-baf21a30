import { request } from './client';
import { mockSeasons, mockPhotos } from './mockData';
import type { Season, Photo } from '@/types';

/**
 * A centralized API object that encapsulates all data-fetching logic.
 * In a real app, these methods would call the `apiClient` to make
 * actual network requests to a backend.
 */
export const api = {
  /**
   * Fetches a list of all available seasons (courses).
   * @returns A promise that resolves to an array of Season objects.
   */
  getSeasons: (): Promise<Season[]> => {
    return request(mockSeasons);
  },

  /**
   * Fetches a list of photos (lectures) for a specific season.
   * @param seasonId The ID of the season to fetch photos for.
   * @returns A promise that resolves to an array of Photo objects.
   */
  getPhotosBySeasonId: (seasonId: string): Promise<Photo[]> => {
    const photos = mockPhotos.filter(photo => photo.seasonId === seasonId);
    return request(photos);
  },
};