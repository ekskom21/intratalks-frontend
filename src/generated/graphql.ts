import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export enum RegistrationState {
  Registered = 'REGISTERED',
  WaitList = 'WAIT_LIST',
  NotRegistered = 'NOT_REGISTERED'
}

export type Tokens = {
  __typename?: 'Tokens';
  access_token: Scalars['String'];
  id_token: Scalars['String'];
  refresh_token: Scalars['String'];
  expires_in: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Get authentication tokens for OW4 */
  signIn?: Maybe<Tokens>;
  /** Refresh your authentication token */
  refresh?: Maybe<Tokens>;
  /** Register interest for a specific event */
  registerInterest: Event;
};


export type MutationSignInArgs = {
  code: Scalars['String'];
};


export type MutationRefreshArgs = {
  refresh_token: Scalars['String'];
};


export type MutationRegisterInterestArgs = {
  event_id: Scalars['String'];
};

export enum EventTime {
  Breakfast = 'BREAKFAST',
  Lunch = 'LUNCH',
  Dinner = 'DINNER'
}

export type Location = {
  __typename?: 'Location';
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  _id: Scalars['ID'];
  title: Scalars['String'];
  time: EventTime;
  location: Location;
  description: Scalars['String'];
  company: Company;
};

export type ColorSet = {
  __typename?: 'ColorSet';
  primary: Scalars['String'];
  secondary: Scalars['String'];
};

export type Company = {
  __typename?: 'Company';
  _id: Scalars['ID'];
  events: Array<Event>;
  name: Scalars['String'];
  colors: ColorSet;
  description: Scalars['String'];
};

export type UserInterest = {
  __typename?: 'UserInterest';
  user_id: Scalars['String'];
  breakfast?: Maybe<Event>;
  lunch?: Maybe<Event>;
  dinner?: Maybe<Event>;
};

/** Almost the same as UserInterest, but the events can't be null here anymore. */
export type AssignedEvents = {
  __typename?: 'AssignedEvents';
  user_id: Scalars['String'];
  breakfast: Event;
  lunch: Event;
  dinner: Event;
};

export type Query = {
  __typename?: 'Query';
  /** Get all companies. The companies contain events. */
  companies: Array<Maybe<Company>>;
  /** Get a single company. The company will have events. */
  company?: Maybe<Company>;
  /** Get a single event. */
  event?: Maybe<Event>;
  /** Check registration state of a user */
  userRegistered: RegistrationState;
  /** Get your current desired events. */
  desiredEvents?: Maybe<UserInterest>;
  /** Get your assigned events */
  assignedEvents?: Maybe<AssignedEvents>;
};


export type QueryCompanyArgs = {
  _id: Scalars['String'];
};


export type QueryEventArgs = {
  _id: Scalars['String'];
};




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  RegistrationState: RegistrationState;
  Tokens: ResolverTypeWrapper<Tokens>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  EventTime: EventTime;
  Location: ResolverTypeWrapper<Location>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Event: ResolverTypeWrapper<Event>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ColorSet: ResolverTypeWrapper<ColorSet>;
  Company: ResolverTypeWrapper<Company>;
  UserInterest: ResolverTypeWrapper<UserInterest>;
  AssignedEvents: ResolverTypeWrapper<AssignedEvents>;
  Query: ResolverTypeWrapper<{}>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Tokens: Tokens;
  String: Scalars['String'];
  Int: Scalars['Int'];
  Mutation: {};
  Location: Location;
  Float: Scalars['Float'];
  Event: Event;
  ID: Scalars['ID'];
  ColorSet: ColorSet;
  Company: Company;
  UserInterest: UserInterest;
  AssignedEvents: AssignedEvents;
  Query: {};
  DateTime: Scalars['DateTime'];
  Boolean: Scalars['Boolean'];
};

export type TokensResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tokens'] = ResolversParentTypes['Tokens']> = {
  access_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refresh_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expires_in?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  signIn?: Resolver<Maybe<ResolversTypes['Tokens']>, ParentType, ContextType, RequireFields<MutationSignInArgs, 'code'>>;
  refresh?: Resolver<Maybe<ResolversTypes['Tokens']>, ParentType, ContextType, RequireFields<MutationRefreshArgs, 'refresh_token'>>;
  registerInterest?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationRegisterInterestArgs, 'event_id'>>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lng?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['EventTime'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColorSetResolvers<ContextType = any, ParentType extends ResolversParentTypes['ColorSet'] = ResolversParentTypes['ColorSet']> = {
  primary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secondary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  colors?: Resolver<ResolversTypes['ColorSet'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserInterestResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserInterest'] = ResolversParentTypes['UserInterest']> = {
  user_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  breakfast?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  lunch?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  dinner?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssignedEventsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssignedEvents'] = ResolversParentTypes['AssignedEvents']> = {
  user_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  breakfast?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  lunch?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  dinner?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  companies?: Resolver<Array<Maybe<ResolversTypes['Company']>>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<QueryCompanyArgs, '_id'>>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventArgs, '_id'>>;
  userRegistered?: Resolver<ResolversTypes['RegistrationState'], ParentType, ContextType>;
  desiredEvents?: Resolver<Maybe<ResolversTypes['UserInterest']>, ParentType, ContextType>;
  assignedEvents?: Resolver<Maybe<ResolversTypes['AssignedEvents']>, ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type Resolvers<ContextType = any> = {
  Tokens?: TokensResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  ColorSet?: ColorSetResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  UserInterest?: UserInterestResolvers<ContextType>;
  AssignedEvents?: AssignedEventsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
