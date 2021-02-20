export declare const typeDefs: import("graphql").DocumentNode;
declare type List = {
    name: string;
    address: string;
    email: string;
    phone: string;
};
export declare const resolvers: {
    Query: {
        list: () => List[];
    };
};
export {};
