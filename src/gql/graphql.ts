/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	Date: any;
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	DateTime: any;
};

export type Address = {
	__typename?: 'Address';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	addressLocality?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
	streetAddress?: Maybe<Scalars['String']>;
};

export type AddressFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	addressLocality?: InputMaybe<StringFilter>;
	postalCode?: InputMaybe<StringFilter>;
	streetAddress?: InputMaybe<StringFilter>;
};

export type AddressSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	addressLocality?: InputMaybe<SortOrder>;
	postalCode?: InputMaybe<SortOrder>;
	streetAddress?: InputMaybe<SortOrder>;
};

export type Block = {
	__typename?: 'Block';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	children?: Maybe<Array<Maybe<Span>>>;
	list?: Maybe<Scalars['String']>;
	style?: Maybe<Scalars['String']>;
};

export type BooleanFilter = {
	/** Checks if the value is equal to the given input. */
	eq?: InputMaybe<Scalars['Boolean']>;
	/** Checks if the value is not equal to the given input. */
	neq?: InputMaybe<Scalars['Boolean']>;
};

export type DateFilter = {
	/** Checks if the value is equal to the given input. */
	eq?: InputMaybe<Scalars['Date']>;
	/** Checks if the value is greater than the given input. */
	gt?: InputMaybe<Scalars['Date']>;
	/** Checks if the value is greater than or equal to the given input. */
	gte?: InputMaybe<Scalars['Date']>;
	/** Checks if the value is lesser than the given input. */
	lt?: InputMaybe<Scalars['Date']>;
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: InputMaybe<Scalars['Date']>;
	/** Checks if the value is not equal to the given input. */
	neq?: InputMaybe<Scalars['Date']>;
};

export type DatetimeFilter = {
	/** Checks if the value is equal to the given input. */
	eq?: InputMaybe<Scalars['DateTime']>;
	/** Checks if the value is greater than the given input. */
	gt?: InputMaybe<Scalars['DateTime']>;
	/** Checks if the value is greater than or equal to the given input. */
	gte?: InputMaybe<Scalars['DateTime']>;
	/** Checks if the value is lesser than the given input. */
	lt?: InputMaybe<Scalars['DateTime']>;
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: InputMaybe<Scalars['DateTime']>;
	/** Checks if the value is not equal to the given input. */
	neq?: InputMaybe<Scalars['DateTime']>;
};

/** A Sanity document */
export type Document = {
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DocumentFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
};

export type Event = Document & {
	__typename?: 'Event';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	calendarId?: Maybe<Scalars['String']>;
	date?: Maybe<Scalars['DateTime']>;
	eventAttendanceMode?: Maybe<Scalars['String']>;
	image?: Maybe<Image>;
	name?: Maybe<Scalars['String']>;
	offers?: Maybe<Array<Maybe<Offer>>>;
	performers?: Maybe<Array<Maybe<Person>>>;
};

export type EventFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	calendarId?: InputMaybe<StringFilter>;
	date?: InputMaybe<DatetimeFilter>;
	eventAttendanceMode?: InputMaybe<StringFilter>;
	image?: InputMaybe<ImageFilter>;
	name?: InputMaybe<StringFilter>;
};

export type EventSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	calendarId?: InputMaybe<SortOrder>;
	date?: InputMaybe<SortOrder>;
	eventAttendanceMode?: InputMaybe<SortOrder>;
	image?: InputMaybe<ImageSorting>;
	name?: InputMaybe<SortOrder>;
};

export type File = {
	__typename?: 'File';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
	/** Checks if the value is equal to the given input. */
	eq?: InputMaybe<Scalars['Float']>;
	/** Checks if the value is greater than the given input. */
	gt?: InputMaybe<Scalars['Float']>;
	/** Checks if the value is greater than or equal to the given input. */
	gte?: InputMaybe<Scalars['Float']>;
	/** Checks if the value is lesser than the given input. */
	lt?: InputMaybe<Scalars['Float']>;
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: InputMaybe<Scalars['Float']>;
	/** Checks if the value is not equal to the given input. */
	neq?: InputMaybe<Scalars['Float']>;
};

export type Geopoint = {
	__typename?: 'Geopoint';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	alt?: Maybe<Scalars['Float']>;
	lat?: Maybe<Scalars['Float']>;
	lng?: Maybe<Scalars['Float']>;
};

export type GeopointFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	alt?: InputMaybe<FloatFilter>;
	lat?: InputMaybe<FloatFilter>;
	lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	alt?: InputMaybe<SortOrder>;
	lat?: InputMaybe<SortOrder>;
	lng?: InputMaybe<SortOrder>;
};

export type IdFilter = {
	/** Checks if the value is equal to the given input. */
	eq?: InputMaybe<Scalars['ID']>;
	in?: InputMaybe<Array<Scalars['ID']>>;
	/** Checks if the value matches the given word/words. */
	matches?: InputMaybe<Scalars['ID']>;
	/** Checks if the value is not equal to the given input. */
	neq?: InputMaybe<Scalars['ID']>;
	nin?: InputMaybe<Array<Scalars['ID']>>;
};

export type Image = {
	__typename?: 'Image';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	asset?: Maybe<SanityImageAsset>;
	crop?: Maybe<SanityImageCrop>;
	hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	asset?: InputMaybe<SanityImageAssetFilter>;
	crop?: InputMaybe<SanityImageCropFilter>;
	hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	crop?: InputMaybe<SanityImageCropSorting>;
	hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
	/** Checks if the value is equal to the given input. */
	eq?: InputMaybe<Scalars['Int']>;
	/** Checks if the value is greater than the given input. */
	gt?: InputMaybe<Scalars['Int']>;
	/** Checks if the value is greater than or equal to the given input. */
	gte?: InputMaybe<Scalars['Int']>;
	/** Checks if the value is lesser than the given input. */
	lt?: InputMaybe<Scalars['Int']>;
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: InputMaybe<Scalars['Int']>;
	/** Checks if the value is not equal to the given input. */
	neq?: InputMaybe<Scalars['Int']>;
};

export type Membership = Document & {
	__typename?: 'Membership';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	member?: Maybe<Person>;
	/** Navn på mottaker av faktura. Dersom ikke valgt, blir faktura sendt til medlemmet direkte */
	payee?: Maybe<OrganizationOrPerson>;
	status?: Maybe<Scalars['String']>;
	year?: Maybe<MembershipYear>;
};

export type MembershipFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	member?: InputMaybe<PersonFilter>;
	status?: InputMaybe<StringFilter>;
	year?: InputMaybe<MembershipYearFilter>;
};

export type MembershipSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	status?: InputMaybe<SortOrder>;
};

export type MembershipYear = Document & {
	__typename?: 'MembershipYear';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	year?: Maybe<Scalars['Float']>;
};

export type MembershipYearFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	year?: InputMaybe<FloatFilter>;
};

export type MembershipYearSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	year?: InputMaybe<SortOrder>;
};

export type Offer = {
	__typename?: 'Offer';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	availability?: Maybe<Scalars['String']>;
	/** For å forklare hva tilbudet er. Eksempelvis, at det er kursavgift eller mat */
	description?: Maybe<Scalars['String']>;
	price?: Maybe<Scalars['Float']>;
	priceCurrency?: Maybe<Scalars['String']>;
	/** Eksempelvis til påmelding, kursside, etc. */
	url?: Maybe<Scalars['String']>;
};

export type OfferFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	availability?: InputMaybe<StringFilter>;
	description?: InputMaybe<StringFilter>;
	price?: InputMaybe<FloatFilter>;
	priceCurrency?: InputMaybe<StringFilter>;
	url?: InputMaybe<StringFilter>;
};

export type OfferSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	availability?: InputMaybe<SortOrder>;
	description?: InputMaybe<SortOrder>;
	price?: InputMaybe<SortOrder>;
	priceCurrency?: InputMaybe<SortOrder>;
	url?: InputMaybe<SortOrder>;
};

export type Organization = Document & {
	__typename?: 'Organization';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	address?: Maybe<Address>;
	email?: Maybe<Scalars['String']>;
	legalName?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	phone?: Maybe<Scalars['String']>;
	privacy?: Maybe<PrivacyOptions>;
	sameAs?: Maybe<Array<Maybe<Scalars['String']>>>;
	vatID?: Maybe<Scalars['String']>;
};

export type OrganizationFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	address?: InputMaybe<AddressFilter>;
	email?: InputMaybe<StringFilter>;
	legalName?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	phone?: InputMaybe<StringFilter>;
	privacy?: InputMaybe<PrivacyOptionsFilter>;
	vatID?: InputMaybe<StringFilter>;
};

export type OrganizationOrPerson = Organization | Person;

export type OrganizationSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	address?: InputMaybe<AddressSorting>;
	email?: InputMaybe<SortOrder>;
	legalName?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	phone?: InputMaybe<SortOrder>;
	privacy?: InputMaybe<PrivacyOptionsSorting>;
	vatID?: InputMaybe<SortOrder>;
};

export type Person = Document & {
	__typename?: 'Person';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	address?: Maybe<Address>;
	email?: Maybe<Scalars['String']>;
	familyName?: Maybe<Scalars['String']>;
	givenName?: Maybe<Scalars['String']>;
	image?: Maybe<Image>;
	phone?: Maybe<Scalars['String']>;
	privacy?: Maybe<PrivacyOptions>;
	worksFor?: Maybe<Array<Maybe<WorksFor>>>;
};

export type PersonFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	address?: InputMaybe<AddressFilter>;
	email?: InputMaybe<StringFilter>;
	familyName?: InputMaybe<StringFilter>;
	givenName?: InputMaybe<StringFilter>;
	image?: InputMaybe<ImageFilter>;
	phone?: InputMaybe<StringFilter>;
	privacy?: InputMaybe<PrivacyOptionsFilter>;
};

export type PersonLegacy = {
	__typename?: 'PersonLegacy';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	address?: Maybe<Address>;
	email?: Maybe<Scalars['String']>;
	familyName?: Maybe<Scalars['String']>;
	givenName?: Maybe<Scalars['String']>;
	image?: Maybe<Image>;
	phone?: Maybe<Scalars['String']>;
	privacy?: Maybe<PrivacyOptions>;
	worksFor?: Maybe<Array<Maybe<WorksFor>>>;
};

export type PersonLegacyFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	address?: InputMaybe<AddressFilter>;
	email?: InputMaybe<StringFilter>;
	familyName?: InputMaybe<StringFilter>;
	givenName?: InputMaybe<StringFilter>;
	image?: InputMaybe<ImageFilter>;
	phone?: InputMaybe<StringFilter>;
	privacy?: InputMaybe<PrivacyOptionsFilter>;
};

export type PersonLegacySorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	address?: InputMaybe<AddressSorting>;
	email?: InputMaybe<SortOrder>;
	familyName?: InputMaybe<SortOrder>;
	givenName?: InputMaybe<SortOrder>;
	image?: InputMaybe<ImageSorting>;
	phone?: InputMaybe<SortOrder>;
	privacy?: InputMaybe<PrivacyOptionsSorting>;
};

export type PersonSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	address?: InputMaybe<AddressSorting>;
	email?: InputMaybe<SortOrder>;
	familyName?: InputMaybe<SortOrder>;
	givenName?: InputMaybe<SortOrder>;
	image?: InputMaybe<ImageSorting>;
	phone?: InputMaybe<SortOrder>;
	privacy?: InputMaybe<PrivacyOptionsSorting>;
};

export type PrivacyOptions = {
	__typename?: 'PrivacyOptions';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	/** Hvis dette er valgt, vil medlemmet/selskap vises på medlemslisten */
	showPublicly?: Maybe<Scalars['Boolean']>;
};

export type PrivacyOptionsFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	showPublicly?: InputMaybe<BooleanFilter>;
};

export type PrivacyOptionsSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	showPublicly?: InputMaybe<SortOrder>;
};

export type RootQuery = {
	__typename?: 'RootQuery';
	Document?: Maybe<Document>;
	Event?: Maybe<Event>;
	Membership?: Maybe<Membership>;
	MembershipYear?: Maybe<MembershipYear>;
	Organization?: Maybe<Organization>;
	Person?: Maybe<Person>;
	SanityFileAsset?: Maybe<SanityFileAsset>;
	SanityImageAsset?: Maybe<SanityImageAsset>;
	allDocument: Array<Document>;
	allEvent: Array<Event>;
	allMembership: Array<Membership>;
	allMembershipYear: Array<MembershipYear>;
	allOrganization: Array<Organization>;
	allPerson: Array<Person>;
	allSanityFileAsset: Array<SanityFileAsset>;
	allSanityImageAsset: Array<SanityImageAsset>;
};

export type RootQueryDocumentArgs = {
	id: Scalars['ID'];
};

export type RootQueryEventArgs = {
	id: Scalars['ID'];
};

export type RootQueryMembershipArgs = {
	id: Scalars['ID'];
};

export type RootQueryMembershipYearArgs = {
	id: Scalars['ID'];
};

export type RootQueryOrganizationArgs = {
	id: Scalars['ID'];
};

export type RootQueryPersonArgs = {
	id: Scalars['ID'];
};

export type RootQuerySanityFileAssetArgs = {
	id: Scalars['ID'];
};

export type RootQuerySanityImageAssetArgs = {
	id: Scalars['ID'];
};

export type RootQueryAllDocumentArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<DocumentSorting>>;
	where?: InputMaybe<DocumentFilter>;
};

export type RootQueryAllEventArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<EventSorting>>;
	where?: InputMaybe<EventFilter>;
};

export type RootQueryAllMembershipArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<MembershipSorting>>;
	where?: InputMaybe<MembershipFilter>;
};

export type RootQueryAllMembershipYearArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<MembershipYearSorting>>;
	where?: InputMaybe<MembershipYearFilter>;
};

export type RootQueryAllOrganizationArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<OrganizationSorting>>;
	where?: InputMaybe<OrganizationFilter>;
};

export type RootQueryAllPersonArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<PersonSorting>>;
	where?: InputMaybe<PersonFilter>;
};

export type RootQueryAllSanityFileAssetArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<SanityFileAssetSorting>>;
	where?: InputMaybe<SanityFileAssetFilter>;
};

export type RootQueryAllSanityImageAssetArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<SanityImageAssetSorting>>;
	where?: InputMaybe<SanityImageAssetFilter>;
};

export type SanityAssetSourceData = {
	__typename?: 'SanityAssetSourceData';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	/** The unique ID for the asset within the originating source so you can programatically find back to it */
	id?: Maybe<Scalars['String']>;
	/** A canonical name for the source this asset is originating from */
	name?: Maybe<Scalars['String']>;
	/** A URL to find more information about this asset in the originating source */
	url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	id?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	id?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
	__typename?: 'SanityFileAsset';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	altText?: Maybe<Scalars['String']>;
	assetId?: Maybe<Scalars['String']>;
	description?: Maybe<Scalars['String']>;
	extension?: Maybe<Scalars['String']>;
	label?: Maybe<Scalars['String']>;
	mimeType?: Maybe<Scalars['String']>;
	originalFilename?: Maybe<Scalars['String']>;
	path?: Maybe<Scalars['String']>;
	sha1hash?: Maybe<Scalars['String']>;
	size?: Maybe<Scalars['Float']>;
	source?: Maybe<SanityAssetSourceData>;
	title?: Maybe<Scalars['String']>;
	url?: Maybe<Scalars['String']>;
};

export type SanityFileAssetFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	altText?: InputMaybe<StringFilter>;
	assetId?: InputMaybe<StringFilter>;
	description?: InputMaybe<StringFilter>;
	extension?: InputMaybe<StringFilter>;
	label?: InputMaybe<StringFilter>;
	mimeType?: InputMaybe<StringFilter>;
	originalFilename?: InputMaybe<StringFilter>;
	path?: InputMaybe<StringFilter>;
	sha1hash?: InputMaybe<StringFilter>;
	size?: InputMaybe<FloatFilter>;
	source?: InputMaybe<SanityAssetSourceDataFilter>;
	title?: InputMaybe<StringFilter>;
	url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	altText?: InputMaybe<SortOrder>;
	assetId?: InputMaybe<SortOrder>;
	description?: InputMaybe<SortOrder>;
	extension?: InputMaybe<SortOrder>;
	label?: InputMaybe<SortOrder>;
	mimeType?: InputMaybe<SortOrder>;
	originalFilename?: InputMaybe<SortOrder>;
	path?: InputMaybe<SortOrder>;
	sha1hash?: InputMaybe<SortOrder>;
	size?: InputMaybe<SortOrder>;
	source?: InputMaybe<SanityAssetSourceDataSorting>;
	title?: InputMaybe<SortOrder>;
	url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
	__typename?: 'SanityImageAsset';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	altText?: Maybe<Scalars['String']>;
	assetId?: Maybe<Scalars['String']>;
	description?: Maybe<Scalars['String']>;
	extension?: Maybe<Scalars['String']>;
	label?: Maybe<Scalars['String']>;
	metadata?: Maybe<SanityImageMetadata>;
	mimeType?: Maybe<Scalars['String']>;
	originalFilename?: Maybe<Scalars['String']>;
	path?: Maybe<Scalars['String']>;
	sha1hash?: Maybe<Scalars['String']>;
	size?: Maybe<Scalars['Float']>;
	source?: Maybe<SanityAssetSourceData>;
	title?: Maybe<Scalars['String']>;
	uploadId?: Maybe<Scalars['String']>;
	url?: Maybe<Scalars['String']>;
};

export type SanityImageAssetFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	altText?: InputMaybe<StringFilter>;
	assetId?: InputMaybe<StringFilter>;
	description?: InputMaybe<StringFilter>;
	extension?: InputMaybe<StringFilter>;
	label?: InputMaybe<StringFilter>;
	metadata?: InputMaybe<SanityImageMetadataFilter>;
	mimeType?: InputMaybe<StringFilter>;
	originalFilename?: InputMaybe<StringFilter>;
	path?: InputMaybe<StringFilter>;
	sha1hash?: InputMaybe<StringFilter>;
	size?: InputMaybe<FloatFilter>;
	source?: InputMaybe<SanityAssetSourceDataFilter>;
	title?: InputMaybe<StringFilter>;
	uploadId?: InputMaybe<StringFilter>;
	url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	altText?: InputMaybe<SortOrder>;
	assetId?: InputMaybe<SortOrder>;
	description?: InputMaybe<SortOrder>;
	extension?: InputMaybe<SortOrder>;
	label?: InputMaybe<SortOrder>;
	metadata?: InputMaybe<SanityImageMetadataSorting>;
	mimeType?: InputMaybe<SortOrder>;
	originalFilename?: InputMaybe<SortOrder>;
	path?: InputMaybe<SortOrder>;
	sha1hash?: InputMaybe<SortOrder>;
	size?: InputMaybe<SortOrder>;
	source?: InputMaybe<SanityAssetSourceDataSorting>;
	title?: InputMaybe<SortOrder>;
	uploadId?: InputMaybe<SortOrder>;
	url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
	__typename?: 'SanityImageCrop';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	bottom?: Maybe<Scalars['Float']>;
	left?: Maybe<Scalars['Float']>;
	right?: Maybe<Scalars['Float']>;
	top?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	bottom?: InputMaybe<FloatFilter>;
	left?: InputMaybe<FloatFilter>;
	right?: InputMaybe<FloatFilter>;
	top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	bottom?: InputMaybe<SortOrder>;
	left?: InputMaybe<SortOrder>;
	right?: InputMaybe<SortOrder>;
	top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
	__typename?: 'SanityImageDimensions';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	aspectRatio?: Maybe<Scalars['Float']>;
	height?: Maybe<Scalars['Float']>;
	width?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	aspectRatio?: InputMaybe<FloatFilter>;
	height?: InputMaybe<FloatFilter>;
	width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	aspectRatio?: InputMaybe<SortOrder>;
	height?: InputMaybe<SortOrder>;
	width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
	__typename?: 'SanityImageHotspot';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	height?: Maybe<Scalars['Float']>;
	width?: Maybe<Scalars['Float']>;
	x?: Maybe<Scalars['Float']>;
	y?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	height?: InputMaybe<FloatFilter>;
	width?: InputMaybe<FloatFilter>;
	x?: InputMaybe<FloatFilter>;
	y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	height?: InputMaybe<SortOrder>;
	width?: InputMaybe<SortOrder>;
	x?: InputMaybe<SortOrder>;
	y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
	__typename?: 'SanityImageMetadata';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	blurHash?: Maybe<Scalars['String']>;
	dimensions?: Maybe<SanityImageDimensions>;
	hasAlpha?: Maybe<Scalars['Boolean']>;
	isOpaque?: Maybe<Scalars['Boolean']>;
	location?: Maybe<Geopoint>;
	lqip?: Maybe<Scalars['String']>;
	palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	blurHash?: InputMaybe<StringFilter>;
	dimensions?: InputMaybe<SanityImageDimensionsFilter>;
	hasAlpha?: InputMaybe<BooleanFilter>;
	isOpaque?: InputMaybe<BooleanFilter>;
	location?: InputMaybe<GeopointFilter>;
	lqip?: InputMaybe<StringFilter>;
	palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	blurHash?: InputMaybe<SortOrder>;
	dimensions?: InputMaybe<SanityImageDimensionsSorting>;
	hasAlpha?: InputMaybe<SortOrder>;
	isOpaque?: InputMaybe<SortOrder>;
	location?: InputMaybe<GeopointSorting>;
	lqip?: InputMaybe<SortOrder>;
	palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
	__typename?: 'SanityImagePalette';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	darkMuted?: Maybe<SanityImagePaletteSwatch>;
	darkVibrant?: Maybe<SanityImagePaletteSwatch>;
	dominant?: Maybe<SanityImagePaletteSwatch>;
	lightMuted?: Maybe<SanityImagePaletteSwatch>;
	lightVibrant?: Maybe<SanityImagePaletteSwatch>;
	muted?: Maybe<SanityImagePaletteSwatch>;
	vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
	darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
	dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
	lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
	lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
	muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
	vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
	darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
	dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
	lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
	lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
	muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
	vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
	__typename?: 'SanityImagePaletteSwatch';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	background?: Maybe<Scalars['String']>;
	foreground?: Maybe<Scalars['String']>;
	population?: Maybe<Scalars['Float']>;
	title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	background?: InputMaybe<StringFilter>;
	foreground?: InputMaybe<StringFilter>;
	population?: InputMaybe<FloatFilter>;
	title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	background?: InputMaybe<SortOrder>;
	foreground?: InputMaybe<SortOrder>;
	population?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
	/** All documents that are drafts. */
	is_draft?: InputMaybe<Scalars['Boolean']>;
	/** All documents referencing the given document ID. */
	references?: InputMaybe<Scalars['ID']>;
};

export type Slug = {
	__typename?: 'Slug';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	current?: Maybe<Scalars['String']>;
	source?: Maybe<Scalars['String']>;
};

export type SlugFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	current?: InputMaybe<StringFilter>;
	source?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	current?: InputMaybe<SortOrder>;
	source?: InputMaybe<SortOrder>;
};

export enum SortOrder {
	/** Sorts on the value in ascending order. */
	Asc = 'ASC',
	/** Sorts on the value in descending order. */
	Desc = 'DESC'
}

export type Span = {
	__typename?: 'Span';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	marks?: Maybe<Array<Maybe<Scalars['String']>>>;
	text?: Maybe<Scalars['String']>;
};

export type StringFilter = {
	/** Checks if the value is equal to the given input. */
	eq?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	/** Checks if the value matches the given word/words. */
	matches?: InputMaybe<Scalars['String']>;
	/** Checks if the value is not equal to the given input. */
	neq?: InputMaybe<Scalars['String']>;
	nin?: InputMaybe<Array<Scalars['String']>>;
};

export type WorksFor = {
	__typename?: 'WorksFor';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	worksFor?: Maybe<Organization>;
};

export type WorksForFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	worksFor?: InputMaybe<OrganizationFilter>;
};

export type WorksForSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
};

export type GetEventsQueryVariables = Exact<{
	dateFrom: Scalars['DateTime'];
	dateTo: Scalars['DateTime'];
}>;

export type GetEventsQuery = {
	__typename?: 'RootQuery';
	events: Array<{
		__typename?: 'Event';
		date?: any | null;
		calendarId?: string | null;
		eventAttendanceMode?: string | null;
		offers?: Array<{
			__typename?: 'Offer';
			price?: number | null;
			priceCurrency?: string | null;
			url?: string | null;
			availability?: string | null;
			description?: string | null;
		} | null> | null;
		image?: {
			__typename?: 'Image';
			hotspot?: {
				__typename?: 'SanityImageHotspot';
				x?: number | null;
				y?: number | null;
				height?: number | null;
				width?: number | null;
			} | null;
			crop?: {
				__typename?: 'SanityImageCrop';
				top?: number | null;
				bottom?: number | null;
				left?: number | null;
				right?: number | null;
			} | null;
			asset?: {
				__typename?: 'SanityImageAsset';
				_id?: string | null;
				altText?: string | null;
				assetId?: string | null;
				extension?: string | null;
				url?: string | null;
			} | null;
		} | null;
	}>;
};

export type GetMembersQueryVariables = Exact<{ [key: string]: never }>;

export type GetMembersQuery = {
	__typename?: 'RootQuery';
	members: Array<{
		__typename?: 'Membership';
		status?: string | null;
		member?: {
			__typename?: 'Person';
			givenName?: string | null;
			familyName?: string | null;
			email?: string | null;
			phone?: string | null;
			address?: {
				__typename?: 'Address';
				streetAddress?: string | null;
				postalCode?: string | null;
				addressLocality?: string | null;
			} | null;
			image?: {
				__typename?: 'Image';
				hotspot?: {
					__typename?: 'SanityImageHotspot';
					x?: number | null;
					y?: number | null;
					height?: number | null;
					width?: number | null;
				} | null;
				crop?: {
					__typename?: 'SanityImageCrop';
					top?: number | null;
					bottom?: number | null;
					left?: number | null;
					right?: number | null;
				} | null;
				asset?: {
					__typename?: 'SanityImageAsset';
					_id?: string | null;
					altText?: string | null;
					assetId?: string | null;
					extension?: string | null;
					url?: string | null;
				} | null;
			} | null;
			worksFor?: Array<{
				__typename?: 'WorksFor';
				name?: string | null;
				worksFor?: {
					__typename?: 'Organization';
					name?: string | null;
					legalName?: string | null;
					email?: string | null;
					phone?: string | null;
					sameAs?: Array<string | null> | null;
					address?: {
						__typename?: 'Address';
						streetAddress?: string | null;
						postalCode?: string | null;
						addressLocality?: string | null;
					} | null;
				} | null;
			} | null> | null;
		} | null;
	}>;
};

export const GetEventsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetEvents' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'dateFrom' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } }
					}
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'dateTo' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } }
					}
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'events' },
						name: { kind: 'Name', value: 'allEvent' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'date' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'lte' },
														value: { kind: 'Variable', name: { kind: 'Name', value: 'dateTo' } }
													},
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'gte' },
														value: { kind: 'Variable', name: { kind: 'Name', value: 'dateFrom' } }
													}
												]
											}
										}
									]
								}
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'date' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'calendarId' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'eventAttendanceMode' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'offers' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'price' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'priceCurrency' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'availability' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'description' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'image' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'hotspot' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'x' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'y' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'width' } }
													]
												}
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'crop' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'top' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'bottom' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'left' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'right' } }
													]
												}
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'asset' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: '_id' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'altText' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'assetId' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'extension' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'url' } }
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<GetEventsQuery, GetEventsQueryVariables>;
export const GetMembersDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'getMembers' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'members' },
						name: { kind: 'Name', value: 'allMembership' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'year' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'year' },
														value: {
															kind: 'ObjectValue',
															fields: [
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: 'eq' },
																	value: { kind: 'IntValue', value: '2023' }
																}
															]
														}
													}
												]
											}
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'status' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'in' },
														value: {
															kind: 'ListValue',
															values: [
																{ kind: 'StringValue', value: 'pending', block: false },
																{ kind: 'StringValue', value: 'pending-invoicing', block: false },
																{ kind: 'StringValue', value: 'pending-payment', block: false },
																{ kind: 'StringValue', value: 'active', block: false },
																{ kind: 'StringValue', value: 'pending-expelled', block: false }
															]
														}
													}
												]
											}
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'member' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'privacy' },
														value: {
															kind: 'ObjectValue',
															fields: [
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: 'showPublicly' },
																	value: {
																		kind: 'ObjectValue',
																		fields: [
																			{
																				kind: 'ObjectField',
																				name: { kind: 'Name', value: 'eq' },
																				value: { kind: 'BooleanValue', value: true }
																			}
																		]
																	}
																}
															]
														}
													}
												]
											}
										}
									]
								}
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'status' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'member' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'givenName' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'familyName' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'email' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'phone' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'address' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'addressLocality' } }
													]
												}
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'image' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'hotspot' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'x' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'y' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'width' } }
																]
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'crop' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'top' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'bottom' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'left' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'right' } }
																]
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'asset' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: '_id' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'altText' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'assetId' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'extension' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'url' } }
																]
															}
														}
													]
												}
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'worksFor' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'worksFor' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'legalName' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'email' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'phone' } },
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'address' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'streetAddress' }
																				},
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'postalCode' }
																				},
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'addressLocality' }
																				}
																			]
																		}
																	},
																	{ kind: 'Field', name: { kind: 'Name', value: 'sameAs' } }
																]
															}
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<GetMembersQuery, GetMembersQueryVariables>;
