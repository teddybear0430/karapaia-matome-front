export type Post = {
  postId: number;
  uuid: string;
  title: string;
  url: string;
  createdAt: string;
  comment: number;
  archives: {
    catName: string;
    catUrl: string;
  }[];
};
