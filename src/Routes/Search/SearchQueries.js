import { gql } from "apollo-boost";

export const SEARCH = gql`
  query search($term: String) {
    searchPosts(term: $term) {
      files {
        url
      }
      likeCount
    }
    searchUser(term: $term) {
      id
      avatar
      userName
      isFollowing
      isSelf
    }
  }
`;
