export interface Book {
      name?: string;
      description?: string;
      author?: string;
      category?: string;
      releaseYear: number;
      imagePath?: string;
      hiddenOrVisible?:boolean;
}
