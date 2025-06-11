export default class Artwork {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  artist_name: string;
  friends: {
    friend_1: string;
    friend_2: string;
    friend_3: string;
  };

  public constructor(
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    artist_name: string,
    friends: {
      friend_1: string;
      friend_2: string;
      friend_3: string;
    }
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.artist_name = artist_name;
    this.friends = {
      friend_1: friends.friend_1,
      friend_2: friends.friend_2,
      friend_3: friends.friend_3,
    };
  }
}
