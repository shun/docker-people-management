import { NgModule } from "@angular/core";
import { APOLLO_OPTIONS } from "apollo-angular";
import { ApolloClientOptions, InMemoryCache } from "@apollo/client/core";
import { HttpLink } from "apollo-angular/http";
import { ApolloLink, from } from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';

const uri = "http://192.168.1.84:14000/graphql";

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  const error = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }

    if (networkError) {
      console.error(`> [Network error]: `, networkError);
    }
  });

  const http = httpLink.create({uri});
  const link = from([error, http]);

  return {
    link: link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: createApollo,
    deps: [HttpLink],
  }],
})
export class GraphQLModule {}

