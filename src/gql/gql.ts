/* eslint-disable */
import * as types from './graphql.js';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetEvents($dateFrom: DateTime!, $dateTo: DateTime!) {\n    events: allEvent(where: { date: { lte: $dateTo, gte: $dateFrom } }) {\n      date\n      slug {\n        current\n      }\n      calendarId\n      eventAttendanceMode\n      offers {\n        price\n        priceCurrency\n        url\n        availability\n        description\n      }\n      image {\n        hotspot {\n          x\n          y\n          height\n          width\n        }\n        crop {\n          top\n          bottom\n          left\n          right\n        }\n        asset {\n          _id\n          altText\n          assetId\n          extension\n          url\n        }\n      }\n    }\n  }\n": types.GetEventsDocument,
    "\n  query getMembers {\n    members: allMembership(\n      where: {\n        year: { year: { eq: 2023 } }\n        status: {\n          in: [\"pending\", \"pending-invoicing\", \"pending-payment\", \"active\", \"pending-expelled\"]\n        }\n        member: { privacy: { showPublicly: { eq: true } } }\n      }\n    ) {\n      status\n      member {\n        givenName\n        familyName\n        email\n        phone\n        address {\n          streetAddress\n          postalCode\n          addressLocality\n        }\n        image {\n          hotspot {\n            x\n            y\n            height\n            width\n          }\n          crop {\n            top\n            bottom\n            left\n            right\n          }\n          asset {\n            _id\n            altText\n            assetId\n            extension\n            url\n          }\n        }\n        worksFor {\n          name\n          worksFor {\n            name\n            legalName\n            email\n            phone\n            address {\n              streetAddress\n              postalCode\n              addressLocality\n            }\n            sameAs\n          }\n        }\n      }\n    }\n  }\n": types.GetMembersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetEvents($dateFrom: DateTime!, $dateTo: DateTime!) {\n    events: allEvent(where: { date: { lte: $dateTo, gte: $dateFrom } }) {\n      date\n      slug {\n        current\n      }\n      calendarId\n      eventAttendanceMode\n      offers {\n        price\n        priceCurrency\n        url\n        availability\n        description\n      }\n      image {\n        hotspot {\n          x\n          y\n          height\n          width\n        }\n        crop {\n          top\n          bottom\n          left\n          right\n        }\n        asset {\n          _id\n          altText\n          assetId\n          extension\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEvents($dateFrom: DateTime!, $dateTo: DateTime!) {\n    events: allEvent(where: { date: { lte: $dateTo, gte: $dateFrom } }) {\n      date\n      slug {\n        current\n      }\n      calendarId\n      eventAttendanceMode\n      offers {\n        price\n        priceCurrency\n        url\n        availability\n        description\n      }\n      image {\n        hotspot {\n          x\n          y\n          height\n          width\n        }\n        crop {\n          top\n          bottom\n          left\n          right\n        }\n        asset {\n          _id\n          altText\n          assetId\n          extension\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getMembers {\n    members: allMembership(\n      where: {\n        year: { year: { eq: 2023 } }\n        status: {\n          in: [\"pending\", \"pending-invoicing\", \"pending-payment\", \"active\", \"pending-expelled\"]\n        }\n        member: { privacy: { showPublicly: { eq: true } } }\n      }\n    ) {\n      status\n      member {\n        givenName\n        familyName\n        email\n        phone\n        address {\n          streetAddress\n          postalCode\n          addressLocality\n        }\n        image {\n          hotspot {\n            x\n            y\n            height\n            width\n          }\n          crop {\n            top\n            bottom\n            left\n            right\n          }\n          asset {\n            _id\n            altText\n            assetId\n            extension\n            url\n          }\n        }\n        worksFor {\n          name\n          worksFor {\n            name\n            legalName\n            email\n            phone\n            address {\n              streetAddress\n              postalCode\n              addressLocality\n            }\n            sameAs\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMembers {\n    members: allMembership(\n      where: {\n        year: { year: { eq: 2023 } }\n        status: {\n          in: [\"pending\", \"pending-invoicing\", \"pending-payment\", \"active\", \"pending-expelled\"]\n        }\n        member: { privacy: { showPublicly: { eq: true } } }\n      }\n    ) {\n      status\n      member {\n        givenName\n        familyName\n        email\n        phone\n        address {\n          streetAddress\n          postalCode\n          addressLocality\n        }\n        image {\n          hotspot {\n            x\n            y\n            height\n            width\n          }\n          crop {\n            top\n            bottom\n            left\n            right\n          }\n          asset {\n            _id\n            altText\n            assetId\n            extension\n            url\n          }\n        }\n        worksFor {\n          name\n          worksFor {\n            name\n            legalName\n            email\n            phone\n            address {\n              streetAddress\n              postalCode\n              addressLocality\n            }\n            sameAs\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;