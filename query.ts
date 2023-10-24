import { gql } from '@apollo/client';

export const GET_CUSTOMER = gql`
  query getZellerCustomer($id: String!) {
    getZellerCustomer(id: $id) {
      id
      name
      email
      role
    }
  }
`;

export const LIST_ZELLER_CUSTOMERS = gql`
  query listZellerCustomers($limit: Int, $nextToken: String, $filter: TableZellerCustomerFilterInput) {
    listZellerCustomers(limit: $limit, nextToken: $nextToken, filter: $filter) {
      items {
        id
        name
        email
        role
      }
      nextToken
    }
  }
`;