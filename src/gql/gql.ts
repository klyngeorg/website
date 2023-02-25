/* eslint-disable */
import * as types from './graphql.js';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
	'\n\tquery getMembers {\n\t\tmembers: allMembership(\n\t\t\twhere: {\n\t\t\t\tyear: { year: { eq: 2023 } }\n\t\t\t\tstatus: {\n\t\t\t\t\tin: ["pending", "pending-invoicing", "pending-payment", "active", "pending-expelled"]\n\t\t\t\t}\n\t\t\t\tmember: { privacy: { showPublicly: { eq: true } } }\n\t\t\t}\n\t\t) {\n\t\t\tstatus\n\t\t\tmember {\n\t\t\t\tgivenName\n\t\t\t\tfamilyName\n\t\t\t\temail\n\t\t\t\tphone\n\t\t\t\taddress {\n\t\t\t\t\tstreetAddress\n\t\t\t\t\tpostalCode\n\t\t\t\t\taddressLocality\n\t\t\t\t}\n\t\t\t\timage {\n\t\t\t\t\thotspot {\n\t\t\t\t\t\tx\n\t\t\t\t\t\ty\n\t\t\t\t\t\theight\n\t\t\t\t\t\twidth\n\t\t\t\t\t}\n\t\t\t\t\tcrop {\n\t\t\t\t\t\ttop\n\t\t\t\t\t\tbottom\n\t\t\t\t\t\tleft\n\t\t\t\t\t\tright\n\t\t\t\t\t}\n\t\t\t\t\tasset {\n\t\t\t\t\t\t_id\n\t\t\t\t\t\taltText\n\t\t\t\t\t\tassetId\n\t\t\t\t\t\textension\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tworksFor {\n\t\t\t\t\tname\n\t\t\t\t\tworksFor {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tlegalName\n\t\t\t\t\t\temail\n\t\t\t\t\t\tphone\n\t\t\t\t\t\taddress {\n\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\tpostalCode\n\t\t\t\t\t\t\taddressLocality\n\t\t\t\t\t\t}\n\t\t\t\t\t\tsameAs\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetMembersDocument
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery getMembers {\n\t\tmembers: allMembership(\n\t\t\twhere: {\n\t\t\t\tyear: { year: { eq: 2023 } }\n\t\t\t\tstatus: {\n\t\t\t\t\tin: ["pending", "pending-invoicing", "pending-payment", "active", "pending-expelled"]\n\t\t\t\t}\n\t\t\t\tmember: { privacy: { showPublicly: { eq: true } } }\n\t\t\t}\n\t\t) {\n\t\t\tstatus\n\t\t\tmember {\n\t\t\t\tgivenName\n\t\t\t\tfamilyName\n\t\t\t\temail\n\t\t\t\tphone\n\t\t\t\taddress {\n\t\t\t\t\tstreetAddress\n\t\t\t\t\tpostalCode\n\t\t\t\t\taddressLocality\n\t\t\t\t}\n\t\t\t\timage {\n\t\t\t\t\thotspot {\n\t\t\t\t\t\tx\n\t\t\t\t\t\ty\n\t\t\t\t\t\theight\n\t\t\t\t\t\twidth\n\t\t\t\t\t}\n\t\t\t\t\tcrop {\n\t\t\t\t\t\ttop\n\t\t\t\t\t\tbottom\n\t\t\t\t\t\tleft\n\t\t\t\t\t\tright\n\t\t\t\t\t}\n\t\t\t\t\tasset {\n\t\t\t\t\t\t_id\n\t\t\t\t\t\taltText\n\t\t\t\t\t\tassetId\n\t\t\t\t\t\textension\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tworksFor {\n\t\t\t\t\tname\n\t\t\t\t\tworksFor {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tlegalName\n\t\t\t\t\t\temail\n\t\t\t\t\t\tphone\n\t\t\t\t\t\taddress {\n\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\tpostalCode\n\t\t\t\t\t\t\taddressLocality\n\t\t\t\t\t\t}\n\t\t\t\t\t\tsameAs\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'
): typeof documents['\n\tquery getMembers {\n\t\tmembers: allMembership(\n\t\t\twhere: {\n\t\t\t\tyear: { year: { eq: 2023 } }\n\t\t\t\tstatus: {\n\t\t\t\t\tin: ["pending", "pending-invoicing", "pending-payment", "active", "pending-expelled"]\n\t\t\t\t}\n\t\t\t\tmember: { privacy: { showPublicly: { eq: true } } }\n\t\t\t}\n\t\t) {\n\t\t\tstatus\n\t\t\tmember {\n\t\t\t\tgivenName\n\t\t\t\tfamilyName\n\t\t\t\temail\n\t\t\t\tphone\n\t\t\t\taddress {\n\t\t\t\t\tstreetAddress\n\t\t\t\t\tpostalCode\n\t\t\t\t\taddressLocality\n\t\t\t\t}\n\t\t\t\timage {\n\t\t\t\t\thotspot {\n\t\t\t\t\t\tx\n\t\t\t\t\t\ty\n\t\t\t\t\t\theight\n\t\t\t\t\t\twidth\n\t\t\t\t\t}\n\t\t\t\t\tcrop {\n\t\t\t\t\t\ttop\n\t\t\t\t\t\tbottom\n\t\t\t\t\t\tleft\n\t\t\t\t\t\tright\n\t\t\t\t\t}\n\t\t\t\t\tasset {\n\t\t\t\t\t\t_id\n\t\t\t\t\t\taltText\n\t\t\t\t\t\tassetId\n\t\t\t\t\t\textension\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tworksFor {\n\t\t\t\t\tname\n\t\t\t\t\tworksFor {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tlegalName\n\t\t\t\t\t\temail\n\t\t\t\t\t\tphone\n\t\t\t\t\t\taddress {\n\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\tpostalCode\n\t\t\t\t\t\t\taddressLocality\n\t\t\t\t\t\t}\n\t\t\t\t\t\tsameAs\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'];

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
	TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
