import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
    { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export enum EventTime {
    Breakfast = 'BREAKFAST',
    Lunch = 'LUNCH',
    Dinner = 'DINNER',
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
};

export type CondensedCompany = {
    __typename?: 'CondensedCompany';
    _id: Scalars['ID'];
    name: Scalars['String'];
    colors: ColorSet;
};

export type EventWithCompany = {
    __typename?: 'EventWithCompany';
    event: Event;
    company: CondensedCompany;
};

export type ColorSet = {
    __typename?: 'ColorSet';
    primary: Scalars['String'];
    secondary: Scalars['String'];
};

export type Company = {
    __typename?: 'Company';
    _id: Scalars['ID'];
    events: Array<Maybe<Event>>;
    name: Scalars['String'];
    colors: ColorSet;
    description: Scalars['String'];
};

export type Query = {
    __typename?: 'Query';
    /** Get all companies */
    companies: Array<Maybe<Company>>;
    /** Get all events */
    events: Array<Maybe<EventWithCompany>>;
    /** Get a single event */
    event?: Maybe<EventWithCompany>;
    /** Get a single company */
    company?: Maybe<Company>;
};

export type QueryEventArgs = {
    _id: Scalars['ID'];
};

export type QueryCompanyArgs = {
    _id: Scalars['ID'];
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
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
    | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
    | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
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
    info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
    obj: T,
    context: TContext,
    info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
    EventTime: EventTime;
    Location: ResolverTypeWrapper<Location>;
    Float: ResolverTypeWrapper<Scalars['Float']>;
    String: ResolverTypeWrapper<Scalars['String']>;
    Event: ResolverTypeWrapper<Event>;
    ID: ResolverTypeWrapper<Scalars['ID']>;
    CondensedCompany: ResolverTypeWrapper<CondensedCompany>;
    EventWithCompany: ResolverTypeWrapper<EventWithCompany>;
    ColorSet: ResolverTypeWrapper<ColorSet>;
    Company: ResolverTypeWrapper<Company>;
    Query: ResolverTypeWrapper<{}>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    Location: Location;
    Float: Scalars['Float'];
    String: Scalars['String'];
    Event: Event;
    ID: Scalars['ID'];
    CondensedCompany: CondensedCompany;
    EventWithCompany: EventWithCompany;
    ColorSet: ColorSet;
    Company: Company;
    Query: {};
    Boolean: Scalars['Boolean'];
};

export type LocationResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']
> = {
    lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    lng?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    time?: Resolver<ResolversTypes['EventTime'], ParentType, ContextType>;
    location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>;
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CondensedCompanyResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CondensedCompany'] = ResolversParentTypes['CondensedCompany']
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    colors?: Resolver<ResolversTypes['ColorSet'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventWithCompanyResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['EventWithCompany'] = ResolversParentTypes['EventWithCompany']
> = {
    event?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
    company?: Resolver<ResolversTypes['CondensedCompany'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColorSetResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ColorSet'] = ResolversParentTypes['ColorSet']
> = {
    primary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    secondary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    events?: Resolver<Array<Maybe<ResolversTypes['Event']>>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    colors?: Resolver<ResolversTypes['ColorSet'], ParentType, ContextType>;
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
    companies?: Resolver<Array<Maybe<ResolversTypes['Company']>>, ParentType, ContextType>;
    events?: Resolver<Array<Maybe<ResolversTypes['EventWithCompany']>>, ParentType, ContextType>;
    event?: Resolver<
        Maybe<ResolversTypes['EventWithCompany']>,
        ParentType,
        ContextType,
        RequireFields<QueryEventArgs, '_id'>
    >;
    company?: Resolver<
        Maybe<ResolversTypes['Company']>,
        ParentType,
        ContextType,
        RequireFields<QueryCompanyArgs, '_id'>
    >;
};

export type Resolvers<ContextType = any> = {
    Location?: LocationResolvers<ContextType>;
    Event?: EventResolvers<ContextType>;
    CondensedCompany?: CondensedCompanyResolvers<ContextType>;
    EventWithCompany?: EventWithCompanyResolvers<ContextType>;
    ColorSet?: ColorSetResolvers<ContextType>;
    Company?: CompanyResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
