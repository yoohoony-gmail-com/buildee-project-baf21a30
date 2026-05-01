/**
 * Represents a course or a collection of lectures.
 * In an educational platform, this could be a "Season" of a course.
 */
export interface Season {
  id: string;
  title: string;
  description: string;
}

/**
 * Represents a single lecture or content piece within a season.
 * Using "Photo" as a generic content item as per typical placeholder data.
 */
export interface Photo {
  id: string;
  seasonId: string;
  title: string;
  url: string;
  description: string;
}