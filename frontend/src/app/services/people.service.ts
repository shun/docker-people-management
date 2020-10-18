import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private apollo: Apollo
  ) {
  }

  async sections() {
    const query = gql`
    query sections {
      sections {
        name
      }
    }
    `;

    this.apollo.query({
      query: query
    })
    .toPromise()
    .then((res) => {
      console.log(res);
      return res;
    });
  }
}
