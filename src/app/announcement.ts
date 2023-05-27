import { category } from "./category";

export interface Announcement {
    title: string;
    message: string;
    author: string;
    category?: category;
    imageURL : string;
    id : string;
}


