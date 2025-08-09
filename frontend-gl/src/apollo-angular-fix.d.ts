import { OperationVariables, SubscribeToMoreOptions, UpdateQueryOptions } from '@apollo/client/core';

declare module 'apollo-angular/query-ref' {
  interface QueryRef<T, V extends OperationVariables = OperationVariables> {
    subscribeToMore<MT = any, MV extends OperationVariables = OperationVariables>(
      options: SubscribeToMoreOptions<T, MV, MT>
    ): () => void;
    
    updateQuery(mapFn: (previousQueryResult: T, options: UpdateQueryOptions<V, any>) => T): void;
  }
}