import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Member = {
  __typename?: 'Member';
  id: Scalars['ID'];
  username: Scalars['String'];
  rooms: Array<Scalars['ID']>;
  createdAt: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  roomId: Scalars['ID'];
  author: Member;
  content: Scalars['String'];
  createdAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signup: User;
  login: User;
  createRoom: Room;
  addMembersToRoom: Room;
  sendMessage: Message;
};


export type MutationSignupArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateRoomArgs = {
  name: Scalars['String'];
};


export type MutationAddMembersToRoomArgs = {
  roomId: Scalars['ID'];
  members: Array<Scalars['ID']>;
};


export type MutationSendMessageArgs = {
  roomId: Scalars['ID'];
  content: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  listUsers: Array<User>;
  listRooms: Array<Room>;
  getUser: User;
  getRoom: Room;
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryGetRoomArgs = {
  id: Scalars['ID'];
};

export type Room = {
  __typename?: 'Room';
  id: Scalars['ID'];
  name: Scalars['String'];
  members: Array<Member>;
  messages: Array<Message>;
  createdAt: Scalars['String'];
  owner: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newMessage: Message;
};


export type SubscriptionNewMessageArgs = {
  roomId: Scalars['ID'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  rooms: Array<Room>;
  createdAt: Scalars['String'];
};

export type ListUsersQueryVariables = {};


export type ListUsersQuery = (
  { __typename?: 'Query' }
  & { listUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'id'>
    & { rooms: Array<(
      { __typename?: 'Room' }
      & Pick<Room, 'id'>
    )> }
  )> }
);


export const ListUsersDocument = gql`
    query ListUsers {
  listUsers {
    username
    id
    rooms {
      id
    }
  }
}
    `;

/**
 * __useListUsersQuery__
 *
 * To run a query within a React component, call `useListUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useListUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, baseOptions);
      }
export function useListUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, baseOptions);
        }
export type ListUsersQueryHookResult = ReturnType<typeof useListUsersQuery>;
export type ListUsersLazyQueryHookResult = ReturnType<typeof useListUsersLazyQuery>;
export type ListUsersQueryResult = ApolloReactCommon.QueryResult<ListUsersQuery, ListUsersQueryVariables>;