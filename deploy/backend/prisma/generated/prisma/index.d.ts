
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Casa
 * 
 */
export type Casa = $Result.DefaultSelection<Prisma.$CasaPayload>
/**
 * Model Arbitragem
 * 
 */
export type Arbitragem = $Result.DefaultSelection<Prisma.$ArbitragemPayload>
/**
 * Model Freebet
 * 
 */
export type Freebet = $Result.DefaultSelection<Prisma.$FreebetPayload>
/**
 * Model Movimentacao
 * 
 */
export type Movimentacao = $Result.DefaultSelection<Prisma.$MovimentacaoPayload>
/**
 * Model FreeSpin
 * 
 */
export type FreeSpin = $Result.DefaultSelection<Prisma.$FreeSpinPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.casa`: Exposes CRUD operations for the **Casa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Casas
    * const casas = await prisma.casa.findMany()
    * ```
    */
  get casa(): Prisma.CasaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arbitragem`: Exposes CRUD operations for the **Arbitragem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Arbitragems
    * const arbitragems = await prisma.arbitragem.findMany()
    * ```
    */
  get arbitragem(): Prisma.ArbitragemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.freebet`: Exposes CRUD operations for the **Freebet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Freebets
    * const freebets = await prisma.freebet.findMany()
    * ```
    */
  get freebet(): Prisma.FreebetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimentacao`: Exposes CRUD operations for the **Movimentacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movimentacaos
    * const movimentacaos = await prisma.movimentacao.findMany()
    * ```
    */
  get movimentacao(): Prisma.MovimentacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.freeSpin`: Exposes CRUD operations for the **FreeSpin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FreeSpins
    * const freeSpins = await prisma.freeSpin.findMany()
    * ```
    */
  get freeSpin(): Prisma.FreeSpinDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.0
   * Query Engine version: aee10d5a411e4360c6d3445ce4810ca65adbf3e8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Casa: 'Casa',
    Arbitragem: 'Arbitragem',
    Freebet: 'Freebet',
    Movimentacao: 'Movimentacao',
    FreeSpin: 'FreeSpin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "casa" | "arbitragem" | "freebet" | "movimentacao" | "freeSpin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Casa: {
        payload: Prisma.$CasaPayload<ExtArgs>
        fields: Prisma.CasaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>
          }
          findFirst: {
            args: Prisma.CasaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>
          }
          findMany: {
            args: Prisma.CasaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>[]
          }
          create: {
            args: Prisma.CasaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>
          }
          createMany: {
            args: Prisma.CasaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>[]
          }
          delete: {
            args: Prisma.CasaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>
          }
          update: {
            args: Prisma.CasaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>
          }
          deleteMany: {
            args: Prisma.CasaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CasaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>[]
          }
          upsert: {
            args: Prisma.CasaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>
          }
          aggregate: {
            args: Prisma.CasaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCasa>
          }
          groupBy: {
            args: Prisma.CasaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasaCountArgs<ExtArgs>
            result: $Utils.Optional<CasaCountAggregateOutputType> | number
          }
        }
      }
      Arbitragem: {
        payload: Prisma.$ArbitragemPayload<ExtArgs>
        fields: Prisma.ArbitragemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArbitragemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitragemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArbitragemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitragemPayload>
          }
          findFirst: {
            args: Prisma.ArbitragemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitragemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArbitragemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitragemPayload>
          }
          findMany: {
            args: Prisma.ArbitragemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitragemPayload>[]
          }
          create: {
            args: Prisma.ArbitragemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitragemPayload>
          }
          createMany: {
            args: Prisma.ArbitragemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArbitragemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitragemPayload>[]
          }
          delete: {
            args: Prisma.ArbitragemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitragemPayload>
          }
          update: {
            args: Prisma.ArbitragemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitragemPayload>
          }
          deleteMany: {
            args: Prisma.ArbitragemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArbitragemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArbitragemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitragemPayload>[]
          }
          upsert: {
            args: Prisma.ArbitragemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitragemPayload>
          }
          aggregate: {
            args: Prisma.ArbitragemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArbitragem>
          }
          groupBy: {
            args: Prisma.ArbitragemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArbitragemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArbitragemCountArgs<ExtArgs>
            result: $Utils.Optional<ArbitragemCountAggregateOutputType> | number
          }
        }
      }
      Freebet: {
        payload: Prisma.$FreebetPayload<ExtArgs>
        fields: Prisma.FreebetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FreebetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreebetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FreebetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreebetPayload>
          }
          findFirst: {
            args: Prisma.FreebetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreebetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FreebetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreebetPayload>
          }
          findMany: {
            args: Prisma.FreebetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreebetPayload>[]
          }
          create: {
            args: Prisma.FreebetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreebetPayload>
          }
          createMany: {
            args: Prisma.FreebetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FreebetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreebetPayload>[]
          }
          delete: {
            args: Prisma.FreebetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreebetPayload>
          }
          update: {
            args: Prisma.FreebetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreebetPayload>
          }
          deleteMany: {
            args: Prisma.FreebetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FreebetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FreebetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreebetPayload>[]
          }
          upsert: {
            args: Prisma.FreebetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreebetPayload>
          }
          aggregate: {
            args: Prisma.FreebetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFreebet>
          }
          groupBy: {
            args: Prisma.FreebetGroupByArgs<ExtArgs>
            result: $Utils.Optional<FreebetGroupByOutputType>[]
          }
          count: {
            args: Prisma.FreebetCountArgs<ExtArgs>
            result: $Utils.Optional<FreebetCountAggregateOutputType> | number
          }
        }
      }
      Movimentacao: {
        payload: Prisma.$MovimentacaoPayload<ExtArgs>
        fields: Prisma.MovimentacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimentacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimentacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          findFirst: {
            args: Prisma.MovimentacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimentacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          findMany: {
            args: Prisma.MovimentacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>[]
          }
          create: {
            args: Prisma.MovimentacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          createMany: {
            args: Prisma.MovimentacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovimentacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>[]
          }
          delete: {
            args: Prisma.MovimentacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          update: {
            args: Prisma.MovimentacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          deleteMany: {
            args: Prisma.MovimentacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimentacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovimentacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>[]
          }
          upsert: {
            args: Prisma.MovimentacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          aggregate: {
            args: Prisma.MovimentacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimentacao>
          }
          groupBy: {
            args: Prisma.MovimentacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimentacaoCountArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoCountAggregateOutputType> | number
          }
        }
      }
      FreeSpin: {
        payload: Prisma.$FreeSpinPayload<ExtArgs>
        fields: Prisma.FreeSpinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FreeSpinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeSpinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FreeSpinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeSpinPayload>
          }
          findFirst: {
            args: Prisma.FreeSpinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeSpinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FreeSpinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeSpinPayload>
          }
          findMany: {
            args: Prisma.FreeSpinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeSpinPayload>[]
          }
          create: {
            args: Prisma.FreeSpinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeSpinPayload>
          }
          createMany: {
            args: Prisma.FreeSpinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FreeSpinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeSpinPayload>[]
          }
          delete: {
            args: Prisma.FreeSpinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeSpinPayload>
          }
          update: {
            args: Prisma.FreeSpinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeSpinPayload>
          }
          deleteMany: {
            args: Prisma.FreeSpinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FreeSpinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FreeSpinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeSpinPayload>[]
          }
          upsert: {
            args: Prisma.FreeSpinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeSpinPayload>
          }
          aggregate: {
            args: Prisma.FreeSpinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFreeSpin>
          }
          groupBy: {
            args: Prisma.FreeSpinGroupByArgs<ExtArgs>
            result: $Utils.Optional<FreeSpinGroupByOutputType>[]
          }
          count: {
            args: Prisma.FreeSpinCountArgs<ExtArgs>
            result: $Utils.Optional<FreeSpinCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    casa?: CasaOmit
    arbitragem?: ArbitragemOmit
    freebet?: FreebetOmit
    movimentacao?: MovimentacaoOmit
    freeSpin?: FreeSpinOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    casas: number
    arbitragens: number
    freebets: number
    movimentacoes: number
    freeSpins: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casas?: boolean | UsuarioCountOutputTypeCountCasasArgs
    arbitragens?: boolean | UsuarioCountOutputTypeCountArbitragensArgs
    freebets?: boolean | UsuarioCountOutputTypeCountFreebetsArgs
    movimentacoes?: boolean | UsuarioCountOutputTypeCountMovimentacoesArgs
    freeSpins?: boolean | UsuarioCountOutputTypeCountFreeSpinsArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCasasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountArbitragensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArbitragemWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFreebetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FreebetWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFreeSpinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FreeSpinWhereInput
  }


  /**
   * Count Type CasaCountOutputType
   */

  export type CasaCountOutputType = {
    arbitragens1: number
    arbitragens2: number
    arbitragens3: number
    arbitragens4: number
    freebets: number
    movimentacoes: number
    freeSpins: number
  }

  export type CasaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arbitragens1?: boolean | CasaCountOutputTypeCountArbitragens1Args
    arbitragens2?: boolean | CasaCountOutputTypeCountArbitragens2Args
    arbitragens3?: boolean | CasaCountOutputTypeCountArbitragens3Args
    arbitragens4?: boolean | CasaCountOutputTypeCountArbitragens4Args
    freebets?: boolean | CasaCountOutputTypeCountFreebetsArgs
    movimentacoes?: boolean | CasaCountOutputTypeCountMovimentacoesArgs
    freeSpins?: boolean | CasaCountOutputTypeCountFreeSpinsArgs
  }

  // Custom InputTypes
  /**
   * CasaCountOutputType without action
   */
  export type CasaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaCountOutputType
     */
    select?: CasaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CasaCountOutputType without action
   */
  export type CasaCountOutputTypeCountArbitragens1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArbitragemWhereInput
  }

  /**
   * CasaCountOutputType without action
   */
  export type CasaCountOutputTypeCountArbitragens2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArbitragemWhereInput
  }

  /**
   * CasaCountOutputType without action
   */
  export type CasaCountOutputTypeCountArbitragens3Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArbitragemWhereInput
  }

  /**
   * CasaCountOutputType without action
   */
  export type CasaCountOutputTypeCountArbitragens4Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArbitragemWhereInput
  }

  /**
   * CasaCountOutputType without action
   */
  export type CasaCountOutputTypeCountFreebetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FreebetWhereInput
  }

  /**
   * CasaCountOutputType without action
   */
  export type CasaCountOutputTypeCountMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
  }

  /**
   * CasaCountOutputType without action
   */
  export type CasaCountOutputTypeCountFreeSpinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FreeSpinWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    casas?: boolean | Usuario$casasArgs<ExtArgs>
    arbitragens?: boolean | Usuario$arbitragensArgs<ExtArgs>
    freebets?: boolean | Usuario$freebetsArgs<ExtArgs>
    movimentacoes?: boolean | Usuario$movimentacoesArgs<ExtArgs>
    freeSpins?: boolean | Usuario$freeSpinsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casas?: boolean | Usuario$casasArgs<ExtArgs>
    arbitragens?: boolean | Usuario$arbitragensArgs<ExtArgs>
    freebets?: boolean | Usuario$freebetsArgs<ExtArgs>
    movimentacoes?: boolean | Usuario$movimentacoesArgs<ExtArgs>
    freeSpins?: boolean | Usuario$freeSpinsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      casas: Prisma.$CasaPayload<ExtArgs>[]
      arbitragens: Prisma.$ArbitragemPayload<ExtArgs>[]
      freebets: Prisma.$FreebetPayload<ExtArgs>[]
      movimentacoes: Prisma.$MovimentacaoPayload<ExtArgs>[]
      freeSpins: Prisma.$FreeSpinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    casas<T extends Usuario$casasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$casasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    arbitragens<T extends Usuario$arbitragensArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$arbitragensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    freebets<T extends Usuario$freebetsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$freebetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreebetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimentacoes<T extends Usuario$movimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$movimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    freeSpins<T extends Usuario$freeSpinsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$freeSpinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreeSpinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.casas
   */
  export type Usuario$casasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    where?: CasaWhereInput
    orderBy?: CasaOrderByWithRelationInput | CasaOrderByWithRelationInput[]
    cursor?: CasaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasaScalarFieldEnum | CasaScalarFieldEnum[]
  }

  /**
   * Usuario.arbitragens
   */
  export type Usuario$arbitragensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemInclude<ExtArgs> | null
    where?: ArbitragemWhereInput
    orderBy?: ArbitragemOrderByWithRelationInput | ArbitragemOrderByWithRelationInput[]
    cursor?: ArbitragemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArbitragemScalarFieldEnum | ArbitragemScalarFieldEnum[]
  }

  /**
   * Usuario.freebets
   */
  export type Usuario$freebetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freebet
     */
    select?: FreebetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Freebet
     */
    omit?: FreebetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreebetInclude<ExtArgs> | null
    where?: FreebetWhereInput
    orderBy?: FreebetOrderByWithRelationInput | FreebetOrderByWithRelationInput[]
    cursor?: FreebetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FreebetScalarFieldEnum | FreebetScalarFieldEnum[]
  }

  /**
   * Usuario.movimentacoes
   */
  export type Usuario$movimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    cursor?: MovimentacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Usuario.freeSpins
   */
  export type Usuario$freeSpinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeSpin
     */
    select?: FreeSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreeSpin
     */
    omit?: FreeSpinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeSpinInclude<ExtArgs> | null
    where?: FreeSpinWhereInput
    orderBy?: FreeSpinOrderByWithRelationInput | FreeSpinOrderByWithRelationInput[]
    cursor?: FreeSpinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FreeSpinScalarFieldEnum | FreeSpinScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Casa
   */

  export type AggregateCasa = {
    _count: CasaCountAggregateOutputType | null
    _avg: CasaAvgAggregateOutputType | null
    _sum: CasaSumAggregateOutputType | null
    _min: CasaMinAggregateOutputType | null
    _max: CasaMaxAggregateOutputType | null
  }

  export type CasaAvgAggregateOutputType = {
    id: number | null
    avaliacao: number | null
    usuarioId: number | null
  }

  export type CasaSumAggregateOutputType = {
    id: number | null
    avaliacao: number | null
    usuarioId: number | null
  }

  export type CasaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    pais: string | null
    licenca: string | null
    avaliacao: number | null
    status: string | null
    bonusBoasVindas: string | null
    bonusRecarga: string | null
    tempoSaque: string | null
    metodosPagamento: string | null
    telefone: string | null
    email: string | null
    site: string | null
    observacoes: string | null
    usuarioId: number | null
  }

  export type CasaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    pais: string | null
    licenca: string | null
    avaliacao: number | null
    status: string | null
    bonusBoasVindas: string | null
    bonusRecarga: string | null
    tempoSaque: string | null
    metodosPagamento: string | null
    telefone: string | null
    email: string | null
    site: string | null
    observacoes: string | null
    usuarioId: number | null
  }

  export type CasaCountAggregateOutputType = {
    id: number
    nome: number
    pais: number
    licenca: number
    avaliacao: number
    status: number
    bonusBoasVindas: number
    bonusRecarga: number
    tempoSaque: number
    metodosPagamento: number
    telefone: number
    email: number
    site: number
    observacoes: number
    usuarioId: number
    _all: number
  }


  export type CasaAvgAggregateInputType = {
    id?: true
    avaliacao?: true
    usuarioId?: true
  }

  export type CasaSumAggregateInputType = {
    id?: true
    avaliacao?: true
    usuarioId?: true
  }

  export type CasaMinAggregateInputType = {
    id?: true
    nome?: true
    pais?: true
    licenca?: true
    avaliacao?: true
    status?: true
    bonusBoasVindas?: true
    bonusRecarga?: true
    tempoSaque?: true
    metodosPagamento?: true
    telefone?: true
    email?: true
    site?: true
    observacoes?: true
    usuarioId?: true
  }

  export type CasaMaxAggregateInputType = {
    id?: true
    nome?: true
    pais?: true
    licenca?: true
    avaliacao?: true
    status?: true
    bonusBoasVindas?: true
    bonusRecarga?: true
    tempoSaque?: true
    metodosPagamento?: true
    telefone?: true
    email?: true
    site?: true
    observacoes?: true
    usuarioId?: true
  }

  export type CasaCountAggregateInputType = {
    id?: true
    nome?: true
    pais?: true
    licenca?: true
    avaliacao?: true
    status?: true
    bonusBoasVindas?: true
    bonusRecarga?: true
    tempoSaque?: true
    metodosPagamento?: true
    telefone?: true
    email?: true
    site?: true
    observacoes?: true
    usuarioId?: true
    _all?: true
  }

  export type CasaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Casa to aggregate.
     */
    where?: CasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casas to fetch.
     */
    orderBy?: CasaOrderByWithRelationInput | CasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Casas
    **/
    _count?: true | CasaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CasaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CasaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasaMaxAggregateInputType
  }

  export type GetCasaAggregateType<T extends CasaAggregateArgs> = {
        [P in keyof T & keyof AggregateCasa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasa[P]>
      : GetScalarType<T[P], AggregateCasa[P]>
  }




  export type CasaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasaWhereInput
    orderBy?: CasaOrderByWithAggregationInput | CasaOrderByWithAggregationInput[]
    by: CasaScalarFieldEnum[] | CasaScalarFieldEnum
    having?: CasaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasaCountAggregateInputType | true
    _avg?: CasaAvgAggregateInputType
    _sum?: CasaSumAggregateInputType
    _min?: CasaMinAggregateInputType
    _max?: CasaMaxAggregateInputType
  }

  export type CasaGroupByOutputType = {
    id: number
    nome: string
    pais: string
    licenca: string | null
    avaliacao: number | null
    status: string
    bonusBoasVindas: string | null
    bonusRecarga: string | null
    tempoSaque: string | null
    metodosPagamento: string | null
    telefone: string | null
    email: string | null
    site: string | null
    observacoes: string | null
    usuarioId: number
    _count: CasaCountAggregateOutputType | null
    _avg: CasaAvgAggregateOutputType | null
    _sum: CasaSumAggregateOutputType | null
    _min: CasaMinAggregateOutputType | null
    _max: CasaMaxAggregateOutputType | null
  }

  type GetCasaGroupByPayload<T extends CasaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasaGroupByOutputType[P]>
            : GetScalarType<T[P], CasaGroupByOutputType[P]>
        }
      >
    >


  export type CasaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    pais?: boolean
    licenca?: boolean
    avaliacao?: boolean
    status?: boolean
    bonusBoasVindas?: boolean
    bonusRecarga?: boolean
    tempoSaque?: boolean
    metodosPagamento?: boolean
    telefone?: boolean
    email?: boolean
    site?: boolean
    observacoes?: boolean
    usuarioId?: boolean
    arbitragens1?: boolean | Casa$arbitragens1Args<ExtArgs>
    arbitragens2?: boolean | Casa$arbitragens2Args<ExtArgs>
    arbitragens3?: boolean | Casa$arbitragens3Args<ExtArgs>
    arbitragens4?: boolean | Casa$arbitragens4Args<ExtArgs>
    freebets?: boolean | Casa$freebetsArgs<ExtArgs>
    movimentacoes?: boolean | Casa$movimentacoesArgs<ExtArgs>
    freeSpins?: boolean | Casa$freeSpinsArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | CasaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casa"]>

  export type CasaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    pais?: boolean
    licenca?: boolean
    avaliacao?: boolean
    status?: boolean
    bonusBoasVindas?: boolean
    bonusRecarga?: boolean
    tempoSaque?: boolean
    metodosPagamento?: boolean
    telefone?: boolean
    email?: boolean
    site?: boolean
    observacoes?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casa"]>

  export type CasaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    pais?: boolean
    licenca?: boolean
    avaliacao?: boolean
    status?: boolean
    bonusBoasVindas?: boolean
    bonusRecarga?: boolean
    tempoSaque?: boolean
    metodosPagamento?: boolean
    telefone?: boolean
    email?: boolean
    site?: boolean
    observacoes?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casa"]>

  export type CasaSelectScalar = {
    id?: boolean
    nome?: boolean
    pais?: boolean
    licenca?: boolean
    avaliacao?: boolean
    status?: boolean
    bonusBoasVindas?: boolean
    bonusRecarga?: boolean
    tempoSaque?: boolean
    metodosPagamento?: boolean
    telefone?: boolean
    email?: boolean
    site?: boolean
    observacoes?: boolean
    usuarioId?: boolean
  }

  export type CasaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "pais" | "licenca" | "avaliacao" | "status" | "bonusBoasVindas" | "bonusRecarga" | "tempoSaque" | "metodosPagamento" | "telefone" | "email" | "site" | "observacoes" | "usuarioId", ExtArgs["result"]["casa"]>
  export type CasaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arbitragens1?: boolean | Casa$arbitragens1Args<ExtArgs>
    arbitragens2?: boolean | Casa$arbitragens2Args<ExtArgs>
    arbitragens3?: boolean | Casa$arbitragens3Args<ExtArgs>
    arbitragens4?: boolean | Casa$arbitragens4Args<ExtArgs>
    freebets?: boolean | Casa$freebetsArgs<ExtArgs>
    movimentacoes?: boolean | Casa$movimentacoesArgs<ExtArgs>
    freeSpins?: boolean | Casa$freeSpinsArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | CasaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CasaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CasaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $CasaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Casa"
    objects: {
      arbitragens1: Prisma.$ArbitragemPayload<ExtArgs>[]
      arbitragens2: Prisma.$ArbitragemPayload<ExtArgs>[]
      arbitragens3: Prisma.$ArbitragemPayload<ExtArgs>[]
      arbitragens4: Prisma.$ArbitragemPayload<ExtArgs>[]
      freebets: Prisma.$FreebetPayload<ExtArgs>[]
      movimentacoes: Prisma.$MovimentacaoPayload<ExtArgs>[]
      freeSpins: Prisma.$FreeSpinPayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      pais: string
      licenca: string | null
      avaliacao: number | null
      status: string
      bonusBoasVindas: string | null
      bonusRecarga: string | null
      tempoSaque: string | null
      metodosPagamento: string | null
      telefone: string | null
      email: string | null
      site: string | null
      observacoes: string | null
      usuarioId: number
    }, ExtArgs["result"]["casa"]>
    composites: {}
  }

  type CasaGetPayload<S extends boolean | null | undefined | CasaDefaultArgs> = $Result.GetResult<Prisma.$CasaPayload, S>

  type CasaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CasaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CasaCountAggregateInputType | true
    }

  export interface CasaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Casa'], meta: { name: 'Casa' } }
    /**
     * Find zero or one Casa that matches the filter.
     * @param {CasaFindUniqueArgs} args - Arguments to find a Casa
     * @example
     * // Get one Casa
     * const casa = await prisma.casa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasaFindUniqueArgs>(args: SelectSubset<T, CasaFindUniqueArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Casa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CasaFindUniqueOrThrowArgs} args - Arguments to find a Casa
     * @example
     * // Get one Casa
     * const casa = await prisma.casa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasaFindUniqueOrThrowArgs>(args: SelectSubset<T, CasaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Casa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaFindFirstArgs} args - Arguments to find a Casa
     * @example
     * // Get one Casa
     * const casa = await prisma.casa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasaFindFirstArgs>(args?: SelectSubset<T, CasaFindFirstArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Casa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaFindFirstOrThrowArgs} args - Arguments to find a Casa
     * @example
     * // Get one Casa
     * const casa = await prisma.casa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasaFindFirstOrThrowArgs>(args?: SelectSubset<T, CasaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Casas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Casas
     * const casas = await prisma.casa.findMany()
     * 
     * // Get first 10 Casas
     * const casas = await prisma.casa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casaWithIdOnly = await prisma.casa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasaFindManyArgs>(args?: SelectSubset<T, CasaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Casa.
     * @param {CasaCreateArgs} args - Arguments to create a Casa.
     * @example
     * // Create one Casa
     * const Casa = await prisma.casa.create({
     *   data: {
     *     // ... data to create a Casa
     *   }
     * })
     * 
     */
    create<T extends CasaCreateArgs>(args: SelectSubset<T, CasaCreateArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Casas.
     * @param {CasaCreateManyArgs} args - Arguments to create many Casas.
     * @example
     * // Create many Casas
     * const casa = await prisma.casa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasaCreateManyArgs>(args?: SelectSubset<T, CasaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Casas and returns the data saved in the database.
     * @param {CasaCreateManyAndReturnArgs} args - Arguments to create many Casas.
     * @example
     * // Create many Casas
     * const casa = await prisma.casa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Casas and only return the `id`
     * const casaWithIdOnly = await prisma.casa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasaCreateManyAndReturnArgs>(args?: SelectSubset<T, CasaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Casa.
     * @param {CasaDeleteArgs} args - Arguments to delete one Casa.
     * @example
     * // Delete one Casa
     * const Casa = await prisma.casa.delete({
     *   where: {
     *     // ... filter to delete one Casa
     *   }
     * })
     * 
     */
    delete<T extends CasaDeleteArgs>(args: SelectSubset<T, CasaDeleteArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Casa.
     * @param {CasaUpdateArgs} args - Arguments to update one Casa.
     * @example
     * // Update one Casa
     * const casa = await prisma.casa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasaUpdateArgs>(args: SelectSubset<T, CasaUpdateArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Casas.
     * @param {CasaDeleteManyArgs} args - Arguments to filter Casas to delete.
     * @example
     * // Delete a few Casas
     * const { count } = await prisma.casa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasaDeleteManyArgs>(args?: SelectSubset<T, CasaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Casas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Casas
     * const casa = await prisma.casa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasaUpdateManyArgs>(args: SelectSubset<T, CasaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Casas and returns the data updated in the database.
     * @param {CasaUpdateManyAndReturnArgs} args - Arguments to update many Casas.
     * @example
     * // Update many Casas
     * const casa = await prisma.casa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Casas and only return the `id`
     * const casaWithIdOnly = await prisma.casa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CasaUpdateManyAndReturnArgs>(args: SelectSubset<T, CasaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Casa.
     * @param {CasaUpsertArgs} args - Arguments to update or create a Casa.
     * @example
     * // Update or create a Casa
     * const casa = await prisma.casa.upsert({
     *   create: {
     *     // ... data to create a Casa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Casa we want to update
     *   }
     * })
     */
    upsert<T extends CasaUpsertArgs>(args: SelectSubset<T, CasaUpsertArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Casas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaCountArgs} args - Arguments to filter Casas to count.
     * @example
     * // Count the number of Casas
     * const count = await prisma.casa.count({
     *   where: {
     *     // ... the filter for the Casas we want to count
     *   }
     * })
    **/
    count<T extends CasaCountArgs>(
      args?: Subset<T, CasaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Casa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CasaAggregateArgs>(args: Subset<T, CasaAggregateArgs>): Prisma.PrismaPromise<GetCasaAggregateType<T>>

    /**
     * Group by Casa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CasaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasaGroupByArgs['orderBy'] }
        : { orderBy?: CasaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CasaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Casa model
   */
  readonly fields: CasaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Casa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    arbitragens1<T extends Casa$arbitragens1Args<ExtArgs> = {}>(args?: Subset<T, Casa$arbitragens1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    arbitragens2<T extends Casa$arbitragens2Args<ExtArgs> = {}>(args?: Subset<T, Casa$arbitragens2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    arbitragens3<T extends Casa$arbitragens3Args<ExtArgs> = {}>(args?: Subset<T, Casa$arbitragens3Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    arbitragens4<T extends Casa$arbitragens4Args<ExtArgs> = {}>(args?: Subset<T, Casa$arbitragens4Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    freebets<T extends Casa$freebetsArgs<ExtArgs> = {}>(args?: Subset<T, Casa$freebetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreebetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimentacoes<T extends Casa$movimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, Casa$movimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    freeSpins<T extends Casa$freeSpinsArgs<ExtArgs> = {}>(args?: Subset<T, Casa$freeSpinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreeSpinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Casa model
   */
  interface CasaFieldRefs {
    readonly id: FieldRef<"Casa", 'Int'>
    readonly nome: FieldRef<"Casa", 'String'>
    readonly pais: FieldRef<"Casa", 'String'>
    readonly licenca: FieldRef<"Casa", 'String'>
    readonly avaliacao: FieldRef<"Casa", 'Float'>
    readonly status: FieldRef<"Casa", 'String'>
    readonly bonusBoasVindas: FieldRef<"Casa", 'String'>
    readonly bonusRecarga: FieldRef<"Casa", 'String'>
    readonly tempoSaque: FieldRef<"Casa", 'String'>
    readonly metodosPagamento: FieldRef<"Casa", 'String'>
    readonly telefone: FieldRef<"Casa", 'String'>
    readonly email: FieldRef<"Casa", 'String'>
    readonly site: FieldRef<"Casa", 'String'>
    readonly observacoes: FieldRef<"Casa", 'String'>
    readonly usuarioId: FieldRef<"Casa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Casa findUnique
   */
  export type CasaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * Filter, which Casa to fetch.
     */
    where: CasaWhereUniqueInput
  }

  /**
   * Casa findUniqueOrThrow
   */
  export type CasaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * Filter, which Casa to fetch.
     */
    where: CasaWhereUniqueInput
  }

  /**
   * Casa findFirst
   */
  export type CasaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * Filter, which Casa to fetch.
     */
    where?: CasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casas to fetch.
     */
    orderBy?: CasaOrderByWithRelationInput | CasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Casas.
     */
    cursor?: CasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Casas.
     */
    distinct?: CasaScalarFieldEnum | CasaScalarFieldEnum[]
  }

  /**
   * Casa findFirstOrThrow
   */
  export type CasaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * Filter, which Casa to fetch.
     */
    where?: CasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casas to fetch.
     */
    orderBy?: CasaOrderByWithRelationInput | CasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Casas.
     */
    cursor?: CasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Casas.
     */
    distinct?: CasaScalarFieldEnum | CasaScalarFieldEnum[]
  }

  /**
   * Casa findMany
   */
  export type CasaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * Filter, which Casas to fetch.
     */
    where?: CasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casas to fetch.
     */
    orderBy?: CasaOrderByWithRelationInput | CasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Casas.
     */
    cursor?: CasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casas.
     */
    skip?: number
    distinct?: CasaScalarFieldEnum | CasaScalarFieldEnum[]
  }

  /**
   * Casa create
   */
  export type CasaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * The data needed to create a Casa.
     */
    data: XOR<CasaCreateInput, CasaUncheckedCreateInput>
  }

  /**
   * Casa createMany
   */
  export type CasaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Casas.
     */
    data: CasaCreateManyInput | CasaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Casa createManyAndReturn
   */
  export type CasaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * The data used to create many Casas.
     */
    data: CasaCreateManyInput | CasaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Casa update
   */
  export type CasaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * The data needed to update a Casa.
     */
    data: XOR<CasaUpdateInput, CasaUncheckedUpdateInput>
    /**
     * Choose, which Casa to update.
     */
    where: CasaWhereUniqueInput
  }

  /**
   * Casa updateMany
   */
  export type CasaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Casas.
     */
    data: XOR<CasaUpdateManyMutationInput, CasaUncheckedUpdateManyInput>
    /**
     * Filter which Casas to update
     */
    where?: CasaWhereInput
    /**
     * Limit how many Casas to update.
     */
    limit?: number
  }

  /**
   * Casa updateManyAndReturn
   */
  export type CasaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * The data used to update Casas.
     */
    data: XOR<CasaUpdateManyMutationInput, CasaUncheckedUpdateManyInput>
    /**
     * Filter which Casas to update
     */
    where?: CasaWhereInput
    /**
     * Limit how many Casas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Casa upsert
   */
  export type CasaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * The filter to search for the Casa to update in case it exists.
     */
    where: CasaWhereUniqueInput
    /**
     * In case the Casa found by the `where` argument doesn't exist, create a new Casa with this data.
     */
    create: XOR<CasaCreateInput, CasaUncheckedCreateInput>
    /**
     * In case the Casa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasaUpdateInput, CasaUncheckedUpdateInput>
  }

  /**
   * Casa delete
   */
  export type CasaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * Filter which Casa to delete.
     */
    where: CasaWhereUniqueInput
  }

  /**
   * Casa deleteMany
   */
  export type CasaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Casas to delete
     */
    where?: CasaWhereInput
    /**
     * Limit how many Casas to delete.
     */
    limit?: number
  }

  /**
   * Casa.arbitragens1
   */
  export type Casa$arbitragens1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemInclude<ExtArgs> | null
    where?: ArbitragemWhereInput
    orderBy?: ArbitragemOrderByWithRelationInput | ArbitragemOrderByWithRelationInput[]
    cursor?: ArbitragemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArbitragemScalarFieldEnum | ArbitragemScalarFieldEnum[]
  }

  /**
   * Casa.arbitragens2
   */
  export type Casa$arbitragens2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemInclude<ExtArgs> | null
    where?: ArbitragemWhereInput
    orderBy?: ArbitragemOrderByWithRelationInput | ArbitragemOrderByWithRelationInput[]
    cursor?: ArbitragemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArbitragemScalarFieldEnum | ArbitragemScalarFieldEnum[]
  }

  /**
   * Casa.arbitragens3
   */
  export type Casa$arbitragens3Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemInclude<ExtArgs> | null
    where?: ArbitragemWhereInput
    orderBy?: ArbitragemOrderByWithRelationInput | ArbitragemOrderByWithRelationInput[]
    cursor?: ArbitragemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArbitragemScalarFieldEnum | ArbitragemScalarFieldEnum[]
  }

  /**
   * Casa.arbitragens4
   */
  export type Casa$arbitragens4Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemInclude<ExtArgs> | null
    where?: ArbitragemWhereInput
    orderBy?: ArbitragemOrderByWithRelationInput | ArbitragemOrderByWithRelationInput[]
    cursor?: ArbitragemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArbitragemScalarFieldEnum | ArbitragemScalarFieldEnum[]
  }

  /**
   * Casa.freebets
   */
  export type Casa$freebetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freebet
     */
    select?: FreebetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Freebet
     */
    omit?: FreebetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreebetInclude<ExtArgs> | null
    where?: FreebetWhereInput
    orderBy?: FreebetOrderByWithRelationInput | FreebetOrderByWithRelationInput[]
    cursor?: FreebetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FreebetScalarFieldEnum | FreebetScalarFieldEnum[]
  }

  /**
   * Casa.movimentacoes
   */
  export type Casa$movimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    cursor?: MovimentacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Casa.freeSpins
   */
  export type Casa$freeSpinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeSpin
     */
    select?: FreeSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreeSpin
     */
    omit?: FreeSpinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeSpinInclude<ExtArgs> | null
    where?: FreeSpinWhereInput
    orderBy?: FreeSpinOrderByWithRelationInput | FreeSpinOrderByWithRelationInput[]
    cursor?: FreeSpinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FreeSpinScalarFieldEnum | FreeSpinScalarFieldEnum[]
  }

  /**
   * Casa without action
   */
  export type CasaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
  }


  /**
   * Model Arbitragem
   */

  export type AggregateArbitragem = {
    _count: ArbitragemCountAggregateOutputType | null
    _avg: ArbitragemAvgAggregateOutputType | null
    _sum: ArbitragemSumAggregateOutputType | null
    _min: ArbitragemMinAggregateOutputType | null
    _max: ArbitragemMaxAggregateOutputType | null
  }

  export type ArbitragemAvgAggregateOutputType = {
    id: number | null
    casa1Id: number | null
    odd1: number | null
    stake1: number | null
    casa2Id: number | null
    odd2: number | null
    stake2: number | null
    casa3Id: number | null
    odd3: number | null
    stake3: number | null
    casa4Id: number | null
    odd4: number | null
    stake4: number | null
    valorTotalInvestir: number | null
    lucroEsperado: number | null
    usuarioId: number | null
  }

  export type ArbitragemSumAggregateOutputType = {
    id: number | null
    casa1Id: number | null
    odd1: number | null
    stake1: number | null
    casa2Id: number | null
    odd2: number | null
    stake2: number | null
    casa3Id: number | null
    odd3: number | null
    stake3: number | null
    casa4Id: number | null
    odd4: number | null
    stake4: number | null
    valorTotalInvestir: number | null
    lucroEsperado: number | null
    usuarioId: number | null
  }

  export type ArbitragemMinAggregateOutputType = {
    id: number | null
    evento: string | null
    esporte: string | null
    tipo: string | null
    casa1Id: number | null
    odd1: number | null
    stake1: number | null
    resultado1: string | null
    casa2Id: number | null
    odd2: number | null
    stake2: number | null
    resultado2: string | null
    casa3Id: number | null
    odd3: number | null
    stake3: number | null
    resultado3: string | null
    casa4Id: number | null
    odd4: number | null
    stake4: number | null
    resultado4: string | null
    valorTotalInvestir: number | null
    lucroEsperado: number | null
    status: string | null
    ladoVencedor: string | null
    data: Date | null
    usuarioId: number | null
  }

  export type ArbitragemMaxAggregateOutputType = {
    id: number | null
    evento: string | null
    esporte: string | null
    tipo: string | null
    casa1Id: number | null
    odd1: number | null
    stake1: number | null
    resultado1: string | null
    casa2Id: number | null
    odd2: number | null
    stake2: number | null
    resultado2: string | null
    casa3Id: number | null
    odd3: number | null
    stake3: number | null
    resultado3: string | null
    casa4Id: number | null
    odd4: number | null
    stake4: number | null
    resultado4: string | null
    valorTotalInvestir: number | null
    lucroEsperado: number | null
    status: string | null
    ladoVencedor: string | null
    data: Date | null
    usuarioId: number | null
  }

  export type ArbitragemCountAggregateOutputType = {
    id: number
    evento: number
    esporte: number
    tipo: number
    casa1Id: number
    odd1: number
    stake1: number
    resultado1: number
    casa2Id: number
    odd2: number
    stake2: number
    resultado2: number
    casa3Id: number
    odd3: number
    stake3: number
    resultado3: number
    casa4Id: number
    odd4: number
    stake4: number
    resultado4: number
    valorTotalInvestir: number
    lucroEsperado: number
    status: number
    ladoVencedor: number
    data: number
    usuarioId: number
    _all: number
  }


  export type ArbitragemAvgAggregateInputType = {
    id?: true
    casa1Id?: true
    odd1?: true
    stake1?: true
    casa2Id?: true
    odd2?: true
    stake2?: true
    casa3Id?: true
    odd3?: true
    stake3?: true
    casa4Id?: true
    odd4?: true
    stake4?: true
    valorTotalInvestir?: true
    lucroEsperado?: true
    usuarioId?: true
  }

  export type ArbitragemSumAggregateInputType = {
    id?: true
    casa1Id?: true
    odd1?: true
    stake1?: true
    casa2Id?: true
    odd2?: true
    stake2?: true
    casa3Id?: true
    odd3?: true
    stake3?: true
    casa4Id?: true
    odd4?: true
    stake4?: true
    valorTotalInvestir?: true
    lucroEsperado?: true
    usuarioId?: true
  }

  export type ArbitragemMinAggregateInputType = {
    id?: true
    evento?: true
    esporte?: true
    tipo?: true
    casa1Id?: true
    odd1?: true
    stake1?: true
    resultado1?: true
    casa2Id?: true
    odd2?: true
    stake2?: true
    resultado2?: true
    casa3Id?: true
    odd3?: true
    stake3?: true
    resultado3?: true
    casa4Id?: true
    odd4?: true
    stake4?: true
    resultado4?: true
    valorTotalInvestir?: true
    lucroEsperado?: true
    status?: true
    ladoVencedor?: true
    data?: true
    usuarioId?: true
  }

  export type ArbitragemMaxAggregateInputType = {
    id?: true
    evento?: true
    esporte?: true
    tipo?: true
    casa1Id?: true
    odd1?: true
    stake1?: true
    resultado1?: true
    casa2Id?: true
    odd2?: true
    stake2?: true
    resultado2?: true
    casa3Id?: true
    odd3?: true
    stake3?: true
    resultado3?: true
    casa4Id?: true
    odd4?: true
    stake4?: true
    resultado4?: true
    valorTotalInvestir?: true
    lucroEsperado?: true
    status?: true
    ladoVencedor?: true
    data?: true
    usuarioId?: true
  }

  export type ArbitragemCountAggregateInputType = {
    id?: true
    evento?: true
    esporte?: true
    tipo?: true
    casa1Id?: true
    odd1?: true
    stake1?: true
    resultado1?: true
    casa2Id?: true
    odd2?: true
    stake2?: true
    resultado2?: true
    casa3Id?: true
    odd3?: true
    stake3?: true
    resultado3?: true
    casa4Id?: true
    odd4?: true
    stake4?: true
    resultado4?: true
    valorTotalInvestir?: true
    lucroEsperado?: true
    status?: true
    ladoVencedor?: true
    data?: true
    usuarioId?: true
    _all?: true
  }

  export type ArbitragemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arbitragem to aggregate.
     */
    where?: ArbitragemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arbitragems to fetch.
     */
    orderBy?: ArbitragemOrderByWithRelationInput | ArbitragemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArbitragemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arbitragems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arbitragems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Arbitragems
    **/
    _count?: true | ArbitragemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArbitragemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArbitragemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArbitragemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArbitragemMaxAggregateInputType
  }

  export type GetArbitragemAggregateType<T extends ArbitragemAggregateArgs> = {
        [P in keyof T & keyof AggregateArbitragem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArbitragem[P]>
      : GetScalarType<T[P], AggregateArbitragem[P]>
  }




  export type ArbitragemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArbitragemWhereInput
    orderBy?: ArbitragemOrderByWithAggregationInput | ArbitragemOrderByWithAggregationInput[]
    by: ArbitragemScalarFieldEnum[] | ArbitragemScalarFieldEnum
    having?: ArbitragemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArbitragemCountAggregateInputType | true
    _avg?: ArbitragemAvgAggregateInputType
    _sum?: ArbitragemSumAggregateInputType
    _min?: ArbitragemMinAggregateInputType
    _max?: ArbitragemMaxAggregateInputType
  }

  export type ArbitragemGroupByOutputType = {
    id: number
    evento: string
    esporte: string
    tipo: string
    casa1Id: number
    odd1: number
    stake1: number
    resultado1: string
    casa2Id: number
    odd2: number
    stake2: number
    resultado2: string
    casa3Id: number | null
    odd3: number | null
    stake3: number | null
    resultado3: string | null
    casa4Id: number | null
    odd4: number | null
    stake4: number | null
    resultado4: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status: string
    ladoVencedor: string | null
    data: Date
    usuarioId: number
    _count: ArbitragemCountAggregateOutputType | null
    _avg: ArbitragemAvgAggregateOutputType | null
    _sum: ArbitragemSumAggregateOutputType | null
    _min: ArbitragemMinAggregateOutputType | null
    _max: ArbitragemMaxAggregateOutputType | null
  }

  type GetArbitragemGroupByPayload<T extends ArbitragemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArbitragemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArbitragemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArbitragemGroupByOutputType[P]>
            : GetScalarType<T[P], ArbitragemGroupByOutputType[P]>
        }
      >
    >


  export type ArbitragemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evento?: boolean
    esporte?: boolean
    tipo?: boolean
    casa1Id?: boolean
    odd1?: boolean
    stake1?: boolean
    resultado1?: boolean
    casa2Id?: boolean
    odd2?: boolean
    stake2?: boolean
    resultado2?: boolean
    casa3Id?: boolean
    odd3?: boolean
    stake3?: boolean
    resultado3?: boolean
    casa4Id?: boolean
    odd4?: boolean
    stake4?: boolean
    resultado4?: boolean
    valorTotalInvestir?: boolean
    lucroEsperado?: boolean
    status?: boolean
    ladoVencedor?: boolean
    data?: boolean
    usuarioId?: boolean
    casa1?: boolean | CasaDefaultArgs<ExtArgs>
    casa2?: boolean | CasaDefaultArgs<ExtArgs>
    casa3?: boolean | Arbitragem$casa3Args<ExtArgs>
    casa4?: boolean | Arbitragem$casa4Args<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arbitragem"]>

  export type ArbitragemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evento?: boolean
    esporte?: boolean
    tipo?: boolean
    casa1Id?: boolean
    odd1?: boolean
    stake1?: boolean
    resultado1?: boolean
    casa2Id?: boolean
    odd2?: boolean
    stake2?: boolean
    resultado2?: boolean
    casa3Id?: boolean
    odd3?: boolean
    stake3?: boolean
    resultado3?: boolean
    casa4Id?: boolean
    odd4?: boolean
    stake4?: boolean
    resultado4?: boolean
    valorTotalInvestir?: boolean
    lucroEsperado?: boolean
    status?: boolean
    ladoVencedor?: boolean
    data?: boolean
    usuarioId?: boolean
    casa1?: boolean | CasaDefaultArgs<ExtArgs>
    casa2?: boolean | CasaDefaultArgs<ExtArgs>
    casa3?: boolean | Arbitragem$casa3Args<ExtArgs>
    casa4?: boolean | Arbitragem$casa4Args<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arbitragem"]>

  export type ArbitragemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evento?: boolean
    esporte?: boolean
    tipo?: boolean
    casa1Id?: boolean
    odd1?: boolean
    stake1?: boolean
    resultado1?: boolean
    casa2Id?: boolean
    odd2?: boolean
    stake2?: boolean
    resultado2?: boolean
    casa3Id?: boolean
    odd3?: boolean
    stake3?: boolean
    resultado3?: boolean
    casa4Id?: boolean
    odd4?: boolean
    stake4?: boolean
    resultado4?: boolean
    valorTotalInvestir?: boolean
    lucroEsperado?: boolean
    status?: boolean
    ladoVencedor?: boolean
    data?: boolean
    usuarioId?: boolean
    casa1?: boolean | CasaDefaultArgs<ExtArgs>
    casa2?: boolean | CasaDefaultArgs<ExtArgs>
    casa3?: boolean | Arbitragem$casa3Args<ExtArgs>
    casa4?: boolean | Arbitragem$casa4Args<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arbitragem"]>

  export type ArbitragemSelectScalar = {
    id?: boolean
    evento?: boolean
    esporte?: boolean
    tipo?: boolean
    casa1Id?: boolean
    odd1?: boolean
    stake1?: boolean
    resultado1?: boolean
    casa2Id?: boolean
    odd2?: boolean
    stake2?: boolean
    resultado2?: boolean
    casa3Id?: boolean
    odd3?: boolean
    stake3?: boolean
    resultado3?: boolean
    casa4Id?: boolean
    odd4?: boolean
    stake4?: boolean
    resultado4?: boolean
    valorTotalInvestir?: boolean
    lucroEsperado?: boolean
    status?: boolean
    ladoVencedor?: boolean
    data?: boolean
    usuarioId?: boolean
  }

  export type ArbitragemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "evento" | "esporte" | "tipo" | "casa1Id" | "odd1" | "stake1" | "resultado1" | "casa2Id" | "odd2" | "stake2" | "resultado2" | "casa3Id" | "odd3" | "stake3" | "resultado3" | "casa4Id" | "odd4" | "stake4" | "resultado4" | "valorTotalInvestir" | "lucroEsperado" | "status" | "ladoVencedor" | "data" | "usuarioId", ExtArgs["result"]["arbitragem"]>
  export type ArbitragemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa1?: boolean | CasaDefaultArgs<ExtArgs>
    casa2?: boolean | CasaDefaultArgs<ExtArgs>
    casa3?: boolean | Arbitragem$casa3Args<ExtArgs>
    casa4?: boolean | Arbitragem$casa4Args<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ArbitragemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa1?: boolean | CasaDefaultArgs<ExtArgs>
    casa2?: boolean | CasaDefaultArgs<ExtArgs>
    casa3?: boolean | Arbitragem$casa3Args<ExtArgs>
    casa4?: boolean | Arbitragem$casa4Args<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ArbitragemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa1?: boolean | CasaDefaultArgs<ExtArgs>
    casa2?: boolean | CasaDefaultArgs<ExtArgs>
    casa3?: boolean | Arbitragem$casa3Args<ExtArgs>
    casa4?: boolean | Arbitragem$casa4Args<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ArbitragemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Arbitragem"
    objects: {
      casa1: Prisma.$CasaPayload<ExtArgs>
      casa2: Prisma.$CasaPayload<ExtArgs>
      casa3: Prisma.$CasaPayload<ExtArgs> | null
      casa4: Prisma.$CasaPayload<ExtArgs> | null
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      evento: string
      esporte: string
      tipo: string
      casa1Id: number
      odd1: number
      stake1: number
      resultado1: string
      casa2Id: number
      odd2: number
      stake2: number
      resultado2: string
      casa3Id: number | null
      odd3: number | null
      stake3: number | null
      resultado3: string | null
      casa4Id: number | null
      odd4: number | null
      stake4: number | null
      resultado4: string | null
      valorTotalInvestir: number
      lucroEsperado: number
      status: string
      ladoVencedor: string | null
      data: Date
      usuarioId: number
    }, ExtArgs["result"]["arbitragem"]>
    composites: {}
  }

  type ArbitragemGetPayload<S extends boolean | null | undefined | ArbitragemDefaultArgs> = $Result.GetResult<Prisma.$ArbitragemPayload, S>

  type ArbitragemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArbitragemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArbitragemCountAggregateInputType | true
    }

  export interface ArbitragemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Arbitragem'], meta: { name: 'Arbitragem' } }
    /**
     * Find zero or one Arbitragem that matches the filter.
     * @param {ArbitragemFindUniqueArgs} args - Arguments to find a Arbitragem
     * @example
     * // Get one Arbitragem
     * const arbitragem = await prisma.arbitragem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArbitragemFindUniqueArgs>(args: SelectSubset<T, ArbitragemFindUniqueArgs<ExtArgs>>): Prisma__ArbitragemClient<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Arbitragem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArbitragemFindUniqueOrThrowArgs} args - Arguments to find a Arbitragem
     * @example
     * // Get one Arbitragem
     * const arbitragem = await prisma.arbitragem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArbitragemFindUniqueOrThrowArgs>(args: SelectSubset<T, ArbitragemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArbitragemClient<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arbitragem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitragemFindFirstArgs} args - Arguments to find a Arbitragem
     * @example
     * // Get one Arbitragem
     * const arbitragem = await prisma.arbitragem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArbitragemFindFirstArgs>(args?: SelectSubset<T, ArbitragemFindFirstArgs<ExtArgs>>): Prisma__ArbitragemClient<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arbitragem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitragemFindFirstOrThrowArgs} args - Arguments to find a Arbitragem
     * @example
     * // Get one Arbitragem
     * const arbitragem = await prisma.arbitragem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArbitragemFindFirstOrThrowArgs>(args?: SelectSubset<T, ArbitragemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArbitragemClient<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Arbitragems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitragemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Arbitragems
     * const arbitragems = await prisma.arbitragem.findMany()
     * 
     * // Get first 10 Arbitragems
     * const arbitragems = await prisma.arbitragem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arbitragemWithIdOnly = await prisma.arbitragem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArbitragemFindManyArgs>(args?: SelectSubset<T, ArbitragemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Arbitragem.
     * @param {ArbitragemCreateArgs} args - Arguments to create a Arbitragem.
     * @example
     * // Create one Arbitragem
     * const Arbitragem = await prisma.arbitragem.create({
     *   data: {
     *     // ... data to create a Arbitragem
     *   }
     * })
     * 
     */
    create<T extends ArbitragemCreateArgs>(args: SelectSubset<T, ArbitragemCreateArgs<ExtArgs>>): Prisma__ArbitragemClient<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Arbitragems.
     * @param {ArbitragemCreateManyArgs} args - Arguments to create many Arbitragems.
     * @example
     * // Create many Arbitragems
     * const arbitragem = await prisma.arbitragem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArbitragemCreateManyArgs>(args?: SelectSubset<T, ArbitragemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Arbitragems and returns the data saved in the database.
     * @param {ArbitragemCreateManyAndReturnArgs} args - Arguments to create many Arbitragems.
     * @example
     * // Create many Arbitragems
     * const arbitragem = await prisma.arbitragem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Arbitragems and only return the `id`
     * const arbitragemWithIdOnly = await prisma.arbitragem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArbitragemCreateManyAndReturnArgs>(args?: SelectSubset<T, ArbitragemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Arbitragem.
     * @param {ArbitragemDeleteArgs} args - Arguments to delete one Arbitragem.
     * @example
     * // Delete one Arbitragem
     * const Arbitragem = await prisma.arbitragem.delete({
     *   where: {
     *     // ... filter to delete one Arbitragem
     *   }
     * })
     * 
     */
    delete<T extends ArbitragemDeleteArgs>(args: SelectSubset<T, ArbitragemDeleteArgs<ExtArgs>>): Prisma__ArbitragemClient<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Arbitragem.
     * @param {ArbitragemUpdateArgs} args - Arguments to update one Arbitragem.
     * @example
     * // Update one Arbitragem
     * const arbitragem = await prisma.arbitragem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArbitragemUpdateArgs>(args: SelectSubset<T, ArbitragemUpdateArgs<ExtArgs>>): Prisma__ArbitragemClient<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Arbitragems.
     * @param {ArbitragemDeleteManyArgs} args - Arguments to filter Arbitragems to delete.
     * @example
     * // Delete a few Arbitragems
     * const { count } = await prisma.arbitragem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArbitragemDeleteManyArgs>(args?: SelectSubset<T, ArbitragemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arbitragems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitragemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Arbitragems
     * const arbitragem = await prisma.arbitragem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArbitragemUpdateManyArgs>(args: SelectSubset<T, ArbitragemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arbitragems and returns the data updated in the database.
     * @param {ArbitragemUpdateManyAndReturnArgs} args - Arguments to update many Arbitragems.
     * @example
     * // Update many Arbitragems
     * const arbitragem = await prisma.arbitragem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Arbitragems and only return the `id`
     * const arbitragemWithIdOnly = await prisma.arbitragem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArbitragemUpdateManyAndReturnArgs>(args: SelectSubset<T, ArbitragemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Arbitragem.
     * @param {ArbitragemUpsertArgs} args - Arguments to update or create a Arbitragem.
     * @example
     * // Update or create a Arbitragem
     * const arbitragem = await prisma.arbitragem.upsert({
     *   create: {
     *     // ... data to create a Arbitragem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Arbitragem we want to update
     *   }
     * })
     */
    upsert<T extends ArbitragemUpsertArgs>(args: SelectSubset<T, ArbitragemUpsertArgs<ExtArgs>>): Prisma__ArbitragemClient<$Result.GetResult<Prisma.$ArbitragemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Arbitragems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitragemCountArgs} args - Arguments to filter Arbitragems to count.
     * @example
     * // Count the number of Arbitragems
     * const count = await prisma.arbitragem.count({
     *   where: {
     *     // ... the filter for the Arbitragems we want to count
     *   }
     * })
    **/
    count<T extends ArbitragemCountArgs>(
      args?: Subset<T, ArbitragemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArbitragemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Arbitragem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitragemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArbitragemAggregateArgs>(args: Subset<T, ArbitragemAggregateArgs>): Prisma.PrismaPromise<GetArbitragemAggregateType<T>>

    /**
     * Group by Arbitragem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitragemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArbitragemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArbitragemGroupByArgs['orderBy'] }
        : { orderBy?: ArbitragemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArbitragemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArbitragemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Arbitragem model
   */
  readonly fields: ArbitragemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Arbitragem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArbitragemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    casa1<T extends CasaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasaDefaultArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    casa2<T extends CasaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasaDefaultArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    casa3<T extends Arbitragem$casa3Args<ExtArgs> = {}>(args?: Subset<T, Arbitragem$casa3Args<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    casa4<T extends Arbitragem$casa4Args<ExtArgs> = {}>(args?: Subset<T, Arbitragem$casa4Args<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Arbitragem model
   */
  interface ArbitragemFieldRefs {
    readonly id: FieldRef<"Arbitragem", 'Int'>
    readonly evento: FieldRef<"Arbitragem", 'String'>
    readonly esporte: FieldRef<"Arbitragem", 'String'>
    readonly tipo: FieldRef<"Arbitragem", 'String'>
    readonly casa1Id: FieldRef<"Arbitragem", 'Int'>
    readonly odd1: FieldRef<"Arbitragem", 'Float'>
    readonly stake1: FieldRef<"Arbitragem", 'Float'>
    readonly resultado1: FieldRef<"Arbitragem", 'String'>
    readonly casa2Id: FieldRef<"Arbitragem", 'Int'>
    readonly odd2: FieldRef<"Arbitragem", 'Float'>
    readonly stake2: FieldRef<"Arbitragem", 'Float'>
    readonly resultado2: FieldRef<"Arbitragem", 'String'>
    readonly casa3Id: FieldRef<"Arbitragem", 'Int'>
    readonly odd3: FieldRef<"Arbitragem", 'Float'>
    readonly stake3: FieldRef<"Arbitragem", 'Float'>
    readonly resultado3: FieldRef<"Arbitragem", 'String'>
    readonly casa4Id: FieldRef<"Arbitragem", 'Int'>
    readonly odd4: FieldRef<"Arbitragem", 'Float'>
    readonly stake4: FieldRef<"Arbitragem", 'Float'>
    readonly resultado4: FieldRef<"Arbitragem", 'String'>
    readonly valorTotalInvestir: FieldRef<"Arbitragem", 'Float'>
    readonly lucroEsperado: FieldRef<"Arbitragem", 'Float'>
    readonly status: FieldRef<"Arbitragem", 'String'>
    readonly ladoVencedor: FieldRef<"Arbitragem", 'String'>
    readonly data: FieldRef<"Arbitragem", 'DateTime'>
    readonly usuarioId: FieldRef<"Arbitragem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Arbitragem findUnique
   */
  export type ArbitragemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemInclude<ExtArgs> | null
    /**
     * Filter, which Arbitragem to fetch.
     */
    where: ArbitragemWhereUniqueInput
  }

  /**
   * Arbitragem findUniqueOrThrow
   */
  export type ArbitragemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemInclude<ExtArgs> | null
    /**
     * Filter, which Arbitragem to fetch.
     */
    where: ArbitragemWhereUniqueInput
  }

  /**
   * Arbitragem findFirst
   */
  export type ArbitragemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemInclude<ExtArgs> | null
    /**
     * Filter, which Arbitragem to fetch.
     */
    where?: ArbitragemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arbitragems to fetch.
     */
    orderBy?: ArbitragemOrderByWithRelationInput | ArbitragemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arbitragems.
     */
    cursor?: ArbitragemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arbitragems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arbitragems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arbitragems.
     */
    distinct?: ArbitragemScalarFieldEnum | ArbitragemScalarFieldEnum[]
  }

  /**
   * Arbitragem findFirstOrThrow
   */
  export type ArbitragemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemInclude<ExtArgs> | null
    /**
     * Filter, which Arbitragem to fetch.
     */
    where?: ArbitragemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arbitragems to fetch.
     */
    orderBy?: ArbitragemOrderByWithRelationInput | ArbitragemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arbitragems.
     */
    cursor?: ArbitragemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arbitragems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arbitragems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arbitragems.
     */
    distinct?: ArbitragemScalarFieldEnum | ArbitragemScalarFieldEnum[]
  }

  /**
   * Arbitragem findMany
   */
  export type ArbitragemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemInclude<ExtArgs> | null
    /**
     * Filter, which Arbitragems to fetch.
     */
    where?: ArbitragemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arbitragems to fetch.
     */
    orderBy?: ArbitragemOrderByWithRelationInput | ArbitragemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Arbitragems.
     */
    cursor?: ArbitragemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arbitragems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arbitragems.
     */
    skip?: number
    distinct?: ArbitragemScalarFieldEnum | ArbitragemScalarFieldEnum[]
  }

  /**
   * Arbitragem create
   */
  export type ArbitragemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemInclude<ExtArgs> | null
    /**
     * The data needed to create a Arbitragem.
     */
    data: XOR<ArbitragemCreateInput, ArbitragemUncheckedCreateInput>
  }

  /**
   * Arbitragem createMany
   */
  export type ArbitragemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Arbitragems.
     */
    data: ArbitragemCreateManyInput | ArbitragemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Arbitragem createManyAndReturn
   */
  export type ArbitragemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * The data used to create many Arbitragems.
     */
    data: ArbitragemCreateManyInput | ArbitragemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Arbitragem update
   */
  export type ArbitragemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemInclude<ExtArgs> | null
    /**
     * The data needed to update a Arbitragem.
     */
    data: XOR<ArbitragemUpdateInput, ArbitragemUncheckedUpdateInput>
    /**
     * Choose, which Arbitragem to update.
     */
    where: ArbitragemWhereUniqueInput
  }

  /**
   * Arbitragem updateMany
   */
  export type ArbitragemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Arbitragems.
     */
    data: XOR<ArbitragemUpdateManyMutationInput, ArbitragemUncheckedUpdateManyInput>
    /**
     * Filter which Arbitragems to update
     */
    where?: ArbitragemWhereInput
    /**
     * Limit how many Arbitragems to update.
     */
    limit?: number
  }

  /**
   * Arbitragem updateManyAndReturn
   */
  export type ArbitragemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * The data used to update Arbitragems.
     */
    data: XOR<ArbitragemUpdateManyMutationInput, ArbitragemUncheckedUpdateManyInput>
    /**
     * Filter which Arbitragems to update
     */
    where?: ArbitragemWhereInput
    /**
     * Limit how many Arbitragems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Arbitragem upsert
   */
  export type ArbitragemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemInclude<ExtArgs> | null
    /**
     * The filter to search for the Arbitragem to update in case it exists.
     */
    where: ArbitragemWhereUniqueInput
    /**
     * In case the Arbitragem found by the `where` argument doesn't exist, create a new Arbitragem with this data.
     */
    create: XOR<ArbitragemCreateInput, ArbitragemUncheckedCreateInput>
    /**
     * In case the Arbitragem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArbitragemUpdateInput, ArbitragemUncheckedUpdateInput>
  }

  /**
   * Arbitragem delete
   */
  export type ArbitragemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemInclude<ExtArgs> | null
    /**
     * Filter which Arbitragem to delete.
     */
    where: ArbitragemWhereUniqueInput
  }

  /**
   * Arbitragem deleteMany
   */
  export type ArbitragemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arbitragems to delete
     */
    where?: ArbitragemWhereInput
    /**
     * Limit how many Arbitragems to delete.
     */
    limit?: number
  }

  /**
   * Arbitragem.casa3
   */
  export type Arbitragem$casa3Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    where?: CasaWhereInput
  }

  /**
   * Arbitragem.casa4
   */
  export type Arbitragem$casa4Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    where?: CasaWhereInput
  }

  /**
   * Arbitragem without action
   */
  export type ArbitragemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitragem
     */
    select?: ArbitragemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitragem
     */
    omit?: ArbitragemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitragemInclude<ExtArgs> | null
  }


  /**
   * Model Freebet
   */

  export type AggregateFreebet = {
    _count: FreebetCountAggregateOutputType | null
    _avg: FreebetAvgAggregateOutputType | null
    _sum: FreebetSumAggregateOutputType | null
    _min: FreebetMinAggregateOutputType | null
    _max: FreebetMaxAggregateOutputType | null
  }

  export type FreebetAvgAggregateOutputType = {
    id: number | null
    casaId: number | null
    valor: number | null
    valorExtraido: number | null
    usuarioId: number | null
  }

  export type FreebetSumAggregateOutputType = {
    id: number | null
    casaId: number | null
    valor: number | null
    valorExtraido: number | null
    usuarioId: number | null
  }

  export type FreebetMinAggregateOutputType = {
    id: number | null
    casaId: number | null
    valor: number | null
    tipo: string | null
    status: string | null
    dataObtencao: Date | null
    dataExpiracao: Date | null
    valorExtraido: number | null
    estrategia: string | null
    usuarioId: number | null
  }

  export type FreebetMaxAggregateOutputType = {
    id: number | null
    casaId: number | null
    valor: number | null
    tipo: string | null
    status: string | null
    dataObtencao: Date | null
    dataExpiracao: Date | null
    valorExtraido: number | null
    estrategia: string | null
    usuarioId: number | null
  }

  export type FreebetCountAggregateOutputType = {
    id: number
    casaId: number
    valor: number
    tipo: number
    status: number
    dataObtencao: number
    dataExpiracao: number
    valorExtraido: number
    estrategia: number
    usuarioId: number
    _all: number
  }


  export type FreebetAvgAggregateInputType = {
    id?: true
    casaId?: true
    valor?: true
    valorExtraido?: true
    usuarioId?: true
  }

  export type FreebetSumAggregateInputType = {
    id?: true
    casaId?: true
    valor?: true
    valorExtraido?: true
    usuarioId?: true
  }

  export type FreebetMinAggregateInputType = {
    id?: true
    casaId?: true
    valor?: true
    tipo?: true
    status?: true
    dataObtencao?: true
    dataExpiracao?: true
    valorExtraido?: true
    estrategia?: true
    usuarioId?: true
  }

  export type FreebetMaxAggregateInputType = {
    id?: true
    casaId?: true
    valor?: true
    tipo?: true
    status?: true
    dataObtencao?: true
    dataExpiracao?: true
    valorExtraido?: true
    estrategia?: true
    usuarioId?: true
  }

  export type FreebetCountAggregateInputType = {
    id?: true
    casaId?: true
    valor?: true
    tipo?: true
    status?: true
    dataObtencao?: true
    dataExpiracao?: true
    valorExtraido?: true
    estrategia?: true
    usuarioId?: true
    _all?: true
  }

  export type FreebetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Freebet to aggregate.
     */
    where?: FreebetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Freebets to fetch.
     */
    orderBy?: FreebetOrderByWithRelationInput | FreebetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FreebetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Freebets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Freebets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Freebets
    **/
    _count?: true | FreebetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FreebetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FreebetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FreebetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FreebetMaxAggregateInputType
  }

  export type GetFreebetAggregateType<T extends FreebetAggregateArgs> = {
        [P in keyof T & keyof AggregateFreebet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFreebet[P]>
      : GetScalarType<T[P], AggregateFreebet[P]>
  }




  export type FreebetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FreebetWhereInput
    orderBy?: FreebetOrderByWithAggregationInput | FreebetOrderByWithAggregationInput[]
    by: FreebetScalarFieldEnum[] | FreebetScalarFieldEnum
    having?: FreebetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FreebetCountAggregateInputType | true
    _avg?: FreebetAvgAggregateInputType
    _sum?: FreebetSumAggregateInputType
    _min?: FreebetMinAggregateInputType
    _max?: FreebetMaxAggregateInputType
  }

  export type FreebetGroupByOutputType = {
    id: number
    casaId: number
    valor: number
    tipo: string
    status: string
    dataObtencao: Date
    dataExpiracao: Date
    valorExtraido: number | null
    estrategia: string | null
    usuarioId: number
    _count: FreebetCountAggregateOutputType | null
    _avg: FreebetAvgAggregateOutputType | null
    _sum: FreebetSumAggregateOutputType | null
    _min: FreebetMinAggregateOutputType | null
    _max: FreebetMaxAggregateOutputType | null
  }

  type GetFreebetGroupByPayload<T extends FreebetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FreebetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FreebetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FreebetGroupByOutputType[P]>
            : GetScalarType<T[P], FreebetGroupByOutputType[P]>
        }
      >
    >


  export type FreebetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casaId?: boolean
    valor?: boolean
    tipo?: boolean
    status?: boolean
    dataObtencao?: boolean
    dataExpiracao?: boolean
    valorExtraido?: boolean
    estrategia?: boolean
    usuarioId?: boolean
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["freebet"]>

  export type FreebetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casaId?: boolean
    valor?: boolean
    tipo?: boolean
    status?: boolean
    dataObtencao?: boolean
    dataExpiracao?: boolean
    valorExtraido?: boolean
    estrategia?: boolean
    usuarioId?: boolean
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["freebet"]>

  export type FreebetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casaId?: boolean
    valor?: boolean
    tipo?: boolean
    status?: boolean
    dataObtencao?: boolean
    dataExpiracao?: boolean
    valorExtraido?: boolean
    estrategia?: boolean
    usuarioId?: boolean
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["freebet"]>

  export type FreebetSelectScalar = {
    id?: boolean
    casaId?: boolean
    valor?: boolean
    tipo?: boolean
    status?: boolean
    dataObtencao?: boolean
    dataExpiracao?: boolean
    valorExtraido?: boolean
    estrategia?: boolean
    usuarioId?: boolean
  }

  export type FreebetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "casaId" | "valor" | "tipo" | "status" | "dataObtencao" | "dataExpiracao" | "valorExtraido" | "estrategia" | "usuarioId", ExtArgs["result"]["freebet"]>
  export type FreebetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type FreebetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type FreebetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $FreebetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Freebet"
    objects: {
      casa: Prisma.$CasaPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      casaId: number
      valor: number
      tipo: string
      status: string
      dataObtencao: Date
      dataExpiracao: Date
      valorExtraido: number | null
      estrategia: string | null
      usuarioId: number
    }, ExtArgs["result"]["freebet"]>
    composites: {}
  }

  type FreebetGetPayload<S extends boolean | null | undefined | FreebetDefaultArgs> = $Result.GetResult<Prisma.$FreebetPayload, S>

  type FreebetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FreebetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FreebetCountAggregateInputType | true
    }

  export interface FreebetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Freebet'], meta: { name: 'Freebet' } }
    /**
     * Find zero or one Freebet that matches the filter.
     * @param {FreebetFindUniqueArgs} args - Arguments to find a Freebet
     * @example
     * // Get one Freebet
     * const freebet = await prisma.freebet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FreebetFindUniqueArgs>(args: SelectSubset<T, FreebetFindUniqueArgs<ExtArgs>>): Prisma__FreebetClient<$Result.GetResult<Prisma.$FreebetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Freebet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FreebetFindUniqueOrThrowArgs} args - Arguments to find a Freebet
     * @example
     * // Get one Freebet
     * const freebet = await prisma.freebet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FreebetFindUniqueOrThrowArgs>(args: SelectSubset<T, FreebetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FreebetClient<$Result.GetResult<Prisma.$FreebetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Freebet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreebetFindFirstArgs} args - Arguments to find a Freebet
     * @example
     * // Get one Freebet
     * const freebet = await prisma.freebet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FreebetFindFirstArgs>(args?: SelectSubset<T, FreebetFindFirstArgs<ExtArgs>>): Prisma__FreebetClient<$Result.GetResult<Prisma.$FreebetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Freebet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreebetFindFirstOrThrowArgs} args - Arguments to find a Freebet
     * @example
     * // Get one Freebet
     * const freebet = await prisma.freebet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FreebetFindFirstOrThrowArgs>(args?: SelectSubset<T, FreebetFindFirstOrThrowArgs<ExtArgs>>): Prisma__FreebetClient<$Result.GetResult<Prisma.$FreebetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Freebets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreebetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Freebets
     * const freebets = await prisma.freebet.findMany()
     * 
     * // Get first 10 Freebets
     * const freebets = await prisma.freebet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const freebetWithIdOnly = await prisma.freebet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FreebetFindManyArgs>(args?: SelectSubset<T, FreebetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreebetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Freebet.
     * @param {FreebetCreateArgs} args - Arguments to create a Freebet.
     * @example
     * // Create one Freebet
     * const Freebet = await prisma.freebet.create({
     *   data: {
     *     // ... data to create a Freebet
     *   }
     * })
     * 
     */
    create<T extends FreebetCreateArgs>(args: SelectSubset<T, FreebetCreateArgs<ExtArgs>>): Prisma__FreebetClient<$Result.GetResult<Prisma.$FreebetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Freebets.
     * @param {FreebetCreateManyArgs} args - Arguments to create many Freebets.
     * @example
     * // Create many Freebets
     * const freebet = await prisma.freebet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FreebetCreateManyArgs>(args?: SelectSubset<T, FreebetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Freebets and returns the data saved in the database.
     * @param {FreebetCreateManyAndReturnArgs} args - Arguments to create many Freebets.
     * @example
     * // Create many Freebets
     * const freebet = await prisma.freebet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Freebets and only return the `id`
     * const freebetWithIdOnly = await prisma.freebet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FreebetCreateManyAndReturnArgs>(args?: SelectSubset<T, FreebetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreebetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Freebet.
     * @param {FreebetDeleteArgs} args - Arguments to delete one Freebet.
     * @example
     * // Delete one Freebet
     * const Freebet = await prisma.freebet.delete({
     *   where: {
     *     // ... filter to delete one Freebet
     *   }
     * })
     * 
     */
    delete<T extends FreebetDeleteArgs>(args: SelectSubset<T, FreebetDeleteArgs<ExtArgs>>): Prisma__FreebetClient<$Result.GetResult<Prisma.$FreebetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Freebet.
     * @param {FreebetUpdateArgs} args - Arguments to update one Freebet.
     * @example
     * // Update one Freebet
     * const freebet = await prisma.freebet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FreebetUpdateArgs>(args: SelectSubset<T, FreebetUpdateArgs<ExtArgs>>): Prisma__FreebetClient<$Result.GetResult<Prisma.$FreebetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Freebets.
     * @param {FreebetDeleteManyArgs} args - Arguments to filter Freebets to delete.
     * @example
     * // Delete a few Freebets
     * const { count } = await prisma.freebet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FreebetDeleteManyArgs>(args?: SelectSubset<T, FreebetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Freebets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreebetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Freebets
     * const freebet = await prisma.freebet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FreebetUpdateManyArgs>(args: SelectSubset<T, FreebetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Freebets and returns the data updated in the database.
     * @param {FreebetUpdateManyAndReturnArgs} args - Arguments to update many Freebets.
     * @example
     * // Update many Freebets
     * const freebet = await prisma.freebet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Freebets and only return the `id`
     * const freebetWithIdOnly = await prisma.freebet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FreebetUpdateManyAndReturnArgs>(args: SelectSubset<T, FreebetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreebetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Freebet.
     * @param {FreebetUpsertArgs} args - Arguments to update or create a Freebet.
     * @example
     * // Update or create a Freebet
     * const freebet = await prisma.freebet.upsert({
     *   create: {
     *     // ... data to create a Freebet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Freebet we want to update
     *   }
     * })
     */
    upsert<T extends FreebetUpsertArgs>(args: SelectSubset<T, FreebetUpsertArgs<ExtArgs>>): Prisma__FreebetClient<$Result.GetResult<Prisma.$FreebetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Freebets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreebetCountArgs} args - Arguments to filter Freebets to count.
     * @example
     * // Count the number of Freebets
     * const count = await prisma.freebet.count({
     *   where: {
     *     // ... the filter for the Freebets we want to count
     *   }
     * })
    **/
    count<T extends FreebetCountArgs>(
      args?: Subset<T, FreebetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FreebetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Freebet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreebetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FreebetAggregateArgs>(args: Subset<T, FreebetAggregateArgs>): Prisma.PrismaPromise<GetFreebetAggregateType<T>>

    /**
     * Group by Freebet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreebetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FreebetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FreebetGroupByArgs['orderBy'] }
        : { orderBy?: FreebetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FreebetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFreebetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Freebet model
   */
  readonly fields: FreebetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Freebet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FreebetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    casa<T extends CasaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasaDefaultArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Freebet model
   */
  interface FreebetFieldRefs {
    readonly id: FieldRef<"Freebet", 'Int'>
    readonly casaId: FieldRef<"Freebet", 'Int'>
    readonly valor: FieldRef<"Freebet", 'Float'>
    readonly tipo: FieldRef<"Freebet", 'String'>
    readonly status: FieldRef<"Freebet", 'String'>
    readonly dataObtencao: FieldRef<"Freebet", 'DateTime'>
    readonly dataExpiracao: FieldRef<"Freebet", 'DateTime'>
    readonly valorExtraido: FieldRef<"Freebet", 'Float'>
    readonly estrategia: FieldRef<"Freebet", 'String'>
    readonly usuarioId: FieldRef<"Freebet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Freebet findUnique
   */
  export type FreebetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freebet
     */
    select?: FreebetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Freebet
     */
    omit?: FreebetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreebetInclude<ExtArgs> | null
    /**
     * Filter, which Freebet to fetch.
     */
    where: FreebetWhereUniqueInput
  }

  /**
   * Freebet findUniqueOrThrow
   */
  export type FreebetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freebet
     */
    select?: FreebetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Freebet
     */
    omit?: FreebetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreebetInclude<ExtArgs> | null
    /**
     * Filter, which Freebet to fetch.
     */
    where: FreebetWhereUniqueInput
  }

  /**
   * Freebet findFirst
   */
  export type FreebetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freebet
     */
    select?: FreebetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Freebet
     */
    omit?: FreebetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreebetInclude<ExtArgs> | null
    /**
     * Filter, which Freebet to fetch.
     */
    where?: FreebetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Freebets to fetch.
     */
    orderBy?: FreebetOrderByWithRelationInput | FreebetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Freebets.
     */
    cursor?: FreebetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Freebets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Freebets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Freebets.
     */
    distinct?: FreebetScalarFieldEnum | FreebetScalarFieldEnum[]
  }

  /**
   * Freebet findFirstOrThrow
   */
  export type FreebetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freebet
     */
    select?: FreebetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Freebet
     */
    omit?: FreebetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreebetInclude<ExtArgs> | null
    /**
     * Filter, which Freebet to fetch.
     */
    where?: FreebetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Freebets to fetch.
     */
    orderBy?: FreebetOrderByWithRelationInput | FreebetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Freebets.
     */
    cursor?: FreebetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Freebets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Freebets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Freebets.
     */
    distinct?: FreebetScalarFieldEnum | FreebetScalarFieldEnum[]
  }

  /**
   * Freebet findMany
   */
  export type FreebetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freebet
     */
    select?: FreebetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Freebet
     */
    omit?: FreebetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreebetInclude<ExtArgs> | null
    /**
     * Filter, which Freebets to fetch.
     */
    where?: FreebetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Freebets to fetch.
     */
    orderBy?: FreebetOrderByWithRelationInput | FreebetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Freebets.
     */
    cursor?: FreebetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Freebets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Freebets.
     */
    skip?: number
    distinct?: FreebetScalarFieldEnum | FreebetScalarFieldEnum[]
  }

  /**
   * Freebet create
   */
  export type FreebetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freebet
     */
    select?: FreebetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Freebet
     */
    omit?: FreebetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreebetInclude<ExtArgs> | null
    /**
     * The data needed to create a Freebet.
     */
    data: XOR<FreebetCreateInput, FreebetUncheckedCreateInput>
  }

  /**
   * Freebet createMany
   */
  export type FreebetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Freebets.
     */
    data: FreebetCreateManyInput | FreebetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Freebet createManyAndReturn
   */
  export type FreebetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freebet
     */
    select?: FreebetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Freebet
     */
    omit?: FreebetOmit<ExtArgs> | null
    /**
     * The data used to create many Freebets.
     */
    data: FreebetCreateManyInput | FreebetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreebetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Freebet update
   */
  export type FreebetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freebet
     */
    select?: FreebetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Freebet
     */
    omit?: FreebetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreebetInclude<ExtArgs> | null
    /**
     * The data needed to update a Freebet.
     */
    data: XOR<FreebetUpdateInput, FreebetUncheckedUpdateInput>
    /**
     * Choose, which Freebet to update.
     */
    where: FreebetWhereUniqueInput
  }

  /**
   * Freebet updateMany
   */
  export type FreebetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Freebets.
     */
    data: XOR<FreebetUpdateManyMutationInput, FreebetUncheckedUpdateManyInput>
    /**
     * Filter which Freebets to update
     */
    where?: FreebetWhereInput
    /**
     * Limit how many Freebets to update.
     */
    limit?: number
  }

  /**
   * Freebet updateManyAndReturn
   */
  export type FreebetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freebet
     */
    select?: FreebetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Freebet
     */
    omit?: FreebetOmit<ExtArgs> | null
    /**
     * The data used to update Freebets.
     */
    data: XOR<FreebetUpdateManyMutationInput, FreebetUncheckedUpdateManyInput>
    /**
     * Filter which Freebets to update
     */
    where?: FreebetWhereInput
    /**
     * Limit how many Freebets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreebetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Freebet upsert
   */
  export type FreebetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freebet
     */
    select?: FreebetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Freebet
     */
    omit?: FreebetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreebetInclude<ExtArgs> | null
    /**
     * The filter to search for the Freebet to update in case it exists.
     */
    where: FreebetWhereUniqueInput
    /**
     * In case the Freebet found by the `where` argument doesn't exist, create a new Freebet with this data.
     */
    create: XOR<FreebetCreateInput, FreebetUncheckedCreateInput>
    /**
     * In case the Freebet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FreebetUpdateInput, FreebetUncheckedUpdateInput>
  }

  /**
   * Freebet delete
   */
  export type FreebetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freebet
     */
    select?: FreebetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Freebet
     */
    omit?: FreebetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreebetInclude<ExtArgs> | null
    /**
     * Filter which Freebet to delete.
     */
    where: FreebetWhereUniqueInput
  }

  /**
   * Freebet deleteMany
   */
  export type FreebetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Freebets to delete
     */
    where?: FreebetWhereInput
    /**
     * Limit how many Freebets to delete.
     */
    limit?: number
  }

  /**
   * Freebet without action
   */
  export type FreebetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freebet
     */
    select?: FreebetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Freebet
     */
    omit?: FreebetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreebetInclude<ExtArgs> | null
  }


  /**
   * Model Movimentacao
   */

  export type AggregateMovimentacao = {
    _count: MovimentacaoCountAggregateOutputType | null
    _avg: MovimentacaoAvgAggregateOutputType | null
    _sum: MovimentacaoSumAggregateOutputType | null
    _min: MovimentacaoMinAggregateOutputType | null
    _max: MovimentacaoMaxAggregateOutputType | null
  }

  export type MovimentacaoAvgAggregateOutputType = {
    id: number | null
    casaId: number | null
    valor: number | null
    usuarioId: number | null
  }

  export type MovimentacaoSumAggregateOutputType = {
    id: number | null
    casaId: number | null
    valor: number | null
    usuarioId: number | null
  }

  export type MovimentacaoMinAggregateOutputType = {
    id: number | null
    casaId: number | null
    tipo: string | null
    valor: number | null
    data: Date | null
    observacao: string | null
    usuarioId: number | null
  }

  export type MovimentacaoMaxAggregateOutputType = {
    id: number | null
    casaId: number | null
    tipo: string | null
    valor: number | null
    data: Date | null
    observacao: string | null
    usuarioId: number | null
  }

  export type MovimentacaoCountAggregateOutputType = {
    id: number
    casaId: number
    tipo: number
    valor: number
    data: number
    observacao: number
    usuarioId: number
    _all: number
  }


  export type MovimentacaoAvgAggregateInputType = {
    id?: true
    casaId?: true
    valor?: true
    usuarioId?: true
  }

  export type MovimentacaoSumAggregateInputType = {
    id?: true
    casaId?: true
    valor?: true
    usuarioId?: true
  }

  export type MovimentacaoMinAggregateInputType = {
    id?: true
    casaId?: true
    tipo?: true
    valor?: true
    data?: true
    observacao?: true
    usuarioId?: true
  }

  export type MovimentacaoMaxAggregateInputType = {
    id?: true
    casaId?: true
    tipo?: true
    valor?: true
    data?: true
    observacao?: true
    usuarioId?: true
  }

  export type MovimentacaoCountAggregateInputType = {
    id?: true
    casaId?: true
    tipo?: true
    valor?: true
    data?: true
    observacao?: true
    usuarioId?: true
    _all?: true
  }

  export type MovimentacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movimentacao to aggregate.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movimentacaos
    **/
    _count?: true | MovimentacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimentacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimentacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimentacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimentacaoMaxAggregateInputType
  }

  export type GetMovimentacaoAggregateType<T extends MovimentacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimentacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimentacao[P]>
      : GetScalarType<T[P], AggregateMovimentacao[P]>
  }




  export type MovimentacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithAggregationInput | MovimentacaoOrderByWithAggregationInput[]
    by: MovimentacaoScalarFieldEnum[] | MovimentacaoScalarFieldEnum
    having?: MovimentacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimentacaoCountAggregateInputType | true
    _avg?: MovimentacaoAvgAggregateInputType
    _sum?: MovimentacaoSumAggregateInputType
    _min?: MovimentacaoMinAggregateInputType
    _max?: MovimentacaoMaxAggregateInputType
  }

  export type MovimentacaoGroupByOutputType = {
    id: number
    casaId: number
    tipo: string
    valor: number
    data: Date
    observacao: string | null
    usuarioId: number
    _count: MovimentacaoCountAggregateOutputType | null
    _avg: MovimentacaoAvgAggregateOutputType | null
    _sum: MovimentacaoSumAggregateOutputType | null
    _min: MovimentacaoMinAggregateOutputType | null
    _max: MovimentacaoMaxAggregateOutputType | null
  }

  type GetMovimentacaoGroupByPayload<T extends MovimentacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimentacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimentacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimentacaoGroupByOutputType[P]>
            : GetScalarType<T[P], MovimentacaoGroupByOutputType[P]>
        }
      >
    >


  export type MovimentacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casaId?: boolean
    tipo?: boolean
    valor?: boolean
    data?: boolean
    observacao?: boolean
    usuarioId?: boolean
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacao"]>

  export type MovimentacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casaId?: boolean
    tipo?: boolean
    valor?: boolean
    data?: boolean
    observacao?: boolean
    usuarioId?: boolean
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacao"]>

  export type MovimentacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casaId?: boolean
    tipo?: boolean
    valor?: boolean
    data?: boolean
    observacao?: boolean
    usuarioId?: boolean
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacao"]>

  export type MovimentacaoSelectScalar = {
    id?: boolean
    casaId?: boolean
    tipo?: boolean
    valor?: boolean
    data?: boolean
    observacao?: boolean
    usuarioId?: boolean
  }

  export type MovimentacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "casaId" | "tipo" | "valor" | "data" | "observacao" | "usuarioId", ExtArgs["result"]["movimentacao"]>
  export type MovimentacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MovimentacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MovimentacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $MovimentacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movimentacao"
    objects: {
      casa: Prisma.$CasaPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      casaId: number
      tipo: string
      valor: number
      data: Date
      observacao: string | null
      usuarioId: number
    }, ExtArgs["result"]["movimentacao"]>
    composites: {}
  }

  type MovimentacaoGetPayload<S extends boolean | null | undefined | MovimentacaoDefaultArgs> = $Result.GetResult<Prisma.$MovimentacaoPayload, S>

  type MovimentacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimentacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimentacaoCountAggregateInputType | true
    }

  export interface MovimentacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movimentacao'], meta: { name: 'Movimentacao' } }
    /**
     * Find zero or one Movimentacao that matches the filter.
     * @param {MovimentacaoFindUniqueArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimentacaoFindUniqueArgs>(args: SelectSubset<T, MovimentacaoFindUniqueArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movimentacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimentacaoFindUniqueOrThrowArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimentacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimentacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimentacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindFirstArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimentacaoFindFirstArgs>(args?: SelectSubset<T, MovimentacaoFindFirstArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimentacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindFirstOrThrowArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimentacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimentacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movimentacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movimentacaos
     * const movimentacaos = await prisma.movimentacao.findMany()
     * 
     * // Get first 10 Movimentacaos
     * const movimentacaos = await prisma.movimentacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimentacaoWithIdOnly = await prisma.movimentacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovimentacaoFindManyArgs>(args?: SelectSubset<T, MovimentacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movimentacao.
     * @param {MovimentacaoCreateArgs} args - Arguments to create a Movimentacao.
     * @example
     * // Create one Movimentacao
     * const Movimentacao = await prisma.movimentacao.create({
     *   data: {
     *     // ... data to create a Movimentacao
     *   }
     * })
     * 
     */
    create<T extends MovimentacaoCreateArgs>(args: SelectSubset<T, MovimentacaoCreateArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movimentacaos.
     * @param {MovimentacaoCreateManyArgs} args - Arguments to create many Movimentacaos.
     * @example
     * // Create many Movimentacaos
     * const movimentacao = await prisma.movimentacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimentacaoCreateManyArgs>(args?: SelectSubset<T, MovimentacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movimentacaos and returns the data saved in the database.
     * @param {MovimentacaoCreateManyAndReturnArgs} args - Arguments to create many Movimentacaos.
     * @example
     * // Create many Movimentacaos
     * const movimentacao = await prisma.movimentacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movimentacaos and only return the `id`
     * const movimentacaoWithIdOnly = await prisma.movimentacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovimentacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, MovimentacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movimentacao.
     * @param {MovimentacaoDeleteArgs} args - Arguments to delete one Movimentacao.
     * @example
     * // Delete one Movimentacao
     * const Movimentacao = await prisma.movimentacao.delete({
     *   where: {
     *     // ... filter to delete one Movimentacao
     *   }
     * })
     * 
     */
    delete<T extends MovimentacaoDeleteArgs>(args: SelectSubset<T, MovimentacaoDeleteArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movimentacao.
     * @param {MovimentacaoUpdateArgs} args - Arguments to update one Movimentacao.
     * @example
     * // Update one Movimentacao
     * const movimentacao = await prisma.movimentacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimentacaoUpdateArgs>(args: SelectSubset<T, MovimentacaoUpdateArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movimentacaos.
     * @param {MovimentacaoDeleteManyArgs} args - Arguments to filter Movimentacaos to delete.
     * @example
     * // Delete a few Movimentacaos
     * const { count } = await prisma.movimentacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimentacaoDeleteManyArgs>(args?: SelectSubset<T, MovimentacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimentacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movimentacaos
     * const movimentacao = await prisma.movimentacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimentacaoUpdateManyArgs>(args: SelectSubset<T, MovimentacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimentacaos and returns the data updated in the database.
     * @param {MovimentacaoUpdateManyAndReturnArgs} args - Arguments to update many Movimentacaos.
     * @example
     * // Update many Movimentacaos
     * const movimentacao = await prisma.movimentacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movimentacaos and only return the `id`
     * const movimentacaoWithIdOnly = await prisma.movimentacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovimentacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, MovimentacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movimentacao.
     * @param {MovimentacaoUpsertArgs} args - Arguments to update or create a Movimentacao.
     * @example
     * // Update or create a Movimentacao
     * const movimentacao = await prisma.movimentacao.upsert({
     *   create: {
     *     // ... data to create a Movimentacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movimentacao we want to update
     *   }
     * })
     */
    upsert<T extends MovimentacaoUpsertArgs>(args: SelectSubset<T, MovimentacaoUpsertArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movimentacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoCountArgs} args - Arguments to filter Movimentacaos to count.
     * @example
     * // Count the number of Movimentacaos
     * const count = await prisma.movimentacao.count({
     *   where: {
     *     // ... the filter for the Movimentacaos we want to count
     *   }
     * })
    **/
    count<T extends MovimentacaoCountArgs>(
      args?: Subset<T, MovimentacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimentacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movimentacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovimentacaoAggregateArgs>(args: Subset<T, MovimentacaoAggregateArgs>): Prisma.PrismaPromise<GetMovimentacaoAggregateType<T>>

    /**
     * Group by Movimentacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovimentacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimentacaoGroupByArgs['orderBy'] }
        : { orderBy?: MovimentacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovimentacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimentacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movimentacao model
   */
  readonly fields: MovimentacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movimentacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimentacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    casa<T extends CasaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasaDefaultArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Movimentacao model
   */
  interface MovimentacaoFieldRefs {
    readonly id: FieldRef<"Movimentacao", 'Int'>
    readonly casaId: FieldRef<"Movimentacao", 'Int'>
    readonly tipo: FieldRef<"Movimentacao", 'String'>
    readonly valor: FieldRef<"Movimentacao", 'Float'>
    readonly data: FieldRef<"Movimentacao", 'DateTime'>
    readonly observacao: FieldRef<"Movimentacao", 'String'>
    readonly usuarioId: FieldRef<"Movimentacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Movimentacao findUnique
   */
  export type MovimentacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao findUniqueOrThrow
   */
  export type MovimentacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao findFirst
   */
  export type MovimentacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimentacaos.
     */
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao findFirstOrThrow
   */
  export type MovimentacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimentacaos.
     */
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao findMany
   */
  export type MovimentacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacaos to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao create
   */
  export type MovimentacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Movimentacao.
     */
    data: XOR<MovimentacaoCreateInput, MovimentacaoUncheckedCreateInput>
  }

  /**
   * Movimentacao createMany
   */
  export type MovimentacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movimentacaos.
     */
    data: MovimentacaoCreateManyInput | MovimentacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movimentacao createManyAndReturn
   */
  export type MovimentacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Movimentacaos.
     */
    data: MovimentacaoCreateManyInput | MovimentacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movimentacao update
   */
  export type MovimentacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Movimentacao.
     */
    data: XOR<MovimentacaoUpdateInput, MovimentacaoUncheckedUpdateInput>
    /**
     * Choose, which Movimentacao to update.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao updateMany
   */
  export type MovimentacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movimentacaos.
     */
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyInput>
    /**
     * Filter which Movimentacaos to update
     */
    where?: MovimentacaoWhereInput
    /**
     * Limit how many Movimentacaos to update.
     */
    limit?: number
  }

  /**
   * Movimentacao updateManyAndReturn
   */
  export type MovimentacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * The data used to update Movimentacaos.
     */
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyInput>
    /**
     * Filter which Movimentacaos to update
     */
    where?: MovimentacaoWhereInput
    /**
     * Limit how many Movimentacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movimentacao upsert
   */
  export type MovimentacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Movimentacao to update in case it exists.
     */
    where: MovimentacaoWhereUniqueInput
    /**
     * In case the Movimentacao found by the `where` argument doesn't exist, create a new Movimentacao with this data.
     */
    create: XOR<MovimentacaoCreateInput, MovimentacaoUncheckedCreateInput>
    /**
     * In case the Movimentacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimentacaoUpdateInput, MovimentacaoUncheckedUpdateInput>
  }

  /**
   * Movimentacao delete
   */
  export type MovimentacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter which Movimentacao to delete.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao deleteMany
   */
  export type MovimentacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movimentacaos to delete
     */
    where?: MovimentacaoWhereInput
    /**
     * Limit how many Movimentacaos to delete.
     */
    limit?: number
  }

  /**
   * Movimentacao without action
   */
  export type MovimentacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
  }


  /**
   * Model FreeSpin
   */

  export type AggregateFreeSpin = {
    _count: FreeSpinCountAggregateOutputType | null
    _avg: FreeSpinAvgAggregateOutputType | null
    _sum: FreeSpinSumAggregateOutputType | null
    _min: FreeSpinMinAggregateOutputType | null
    _max: FreeSpinMaxAggregateOutputType | null
  }

  export type FreeSpinAvgAggregateOutputType = {
    id: number | null
    casaId: number | null
    valorGanho: number | null
    usuarioId: number | null
  }

  export type FreeSpinSumAggregateOutputType = {
    id: number | null
    casaId: number | null
    valorGanho: number | null
    usuarioId: number | null
  }

  export type FreeSpinMinAggregateOutputType = {
    id: number | null
    casaId: number | null
    valorGanho: number | null
    data: Date | null
    usuarioId: number | null
  }

  export type FreeSpinMaxAggregateOutputType = {
    id: number | null
    casaId: number | null
    valorGanho: number | null
    data: Date | null
    usuarioId: number | null
  }

  export type FreeSpinCountAggregateOutputType = {
    id: number
    casaId: number
    valorGanho: number
    data: number
    usuarioId: number
    _all: number
  }


  export type FreeSpinAvgAggregateInputType = {
    id?: true
    casaId?: true
    valorGanho?: true
    usuarioId?: true
  }

  export type FreeSpinSumAggregateInputType = {
    id?: true
    casaId?: true
    valorGanho?: true
    usuarioId?: true
  }

  export type FreeSpinMinAggregateInputType = {
    id?: true
    casaId?: true
    valorGanho?: true
    data?: true
    usuarioId?: true
  }

  export type FreeSpinMaxAggregateInputType = {
    id?: true
    casaId?: true
    valorGanho?: true
    data?: true
    usuarioId?: true
  }

  export type FreeSpinCountAggregateInputType = {
    id?: true
    casaId?: true
    valorGanho?: true
    data?: true
    usuarioId?: true
    _all?: true
  }

  export type FreeSpinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FreeSpin to aggregate.
     */
    where?: FreeSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreeSpins to fetch.
     */
    orderBy?: FreeSpinOrderByWithRelationInput | FreeSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FreeSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreeSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreeSpins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FreeSpins
    **/
    _count?: true | FreeSpinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FreeSpinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FreeSpinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FreeSpinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FreeSpinMaxAggregateInputType
  }

  export type GetFreeSpinAggregateType<T extends FreeSpinAggregateArgs> = {
        [P in keyof T & keyof AggregateFreeSpin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFreeSpin[P]>
      : GetScalarType<T[P], AggregateFreeSpin[P]>
  }




  export type FreeSpinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FreeSpinWhereInput
    orderBy?: FreeSpinOrderByWithAggregationInput | FreeSpinOrderByWithAggregationInput[]
    by: FreeSpinScalarFieldEnum[] | FreeSpinScalarFieldEnum
    having?: FreeSpinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FreeSpinCountAggregateInputType | true
    _avg?: FreeSpinAvgAggregateInputType
    _sum?: FreeSpinSumAggregateInputType
    _min?: FreeSpinMinAggregateInputType
    _max?: FreeSpinMaxAggregateInputType
  }

  export type FreeSpinGroupByOutputType = {
    id: number
    casaId: number
    valorGanho: number
    data: Date
    usuarioId: number
    _count: FreeSpinCountAggregateOutputType | null
    _avg: FreeSpinAvgAggregateOutputType | null
    _sum: FreeSpinSumAggregateOutputType | null
    _min: FreeSpinMinAggregateOutputType | null
    _max: FreeSpinMaxAggregateOutputType | null
  }

  type GetFreeSpinGroupByPayload<T extends FreeSpinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FreeSpinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FreeSpinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FreeSpinGroupByOutputType[P]>
            : GetScalarType<T[P], FreeSpinGroupByOutputType[P]>
        }
      >
    >


  export type FreeSpinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casaId?: boolean
    valorGanho?: boolean
    data?: boolean
    usuarioId?: boolean
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["freeSpin"]>

  export type FreeSpinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casaId?: boolean
    valorGanho?: boolean
    data?: boolean
    usuarioId?: boolean
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["freeSpin"]>

  export type FreeSpinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casaId?: boolean
    valorGanho?: boolean
    data?: boolean
    usuarioId?: boolean
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["freeSpin"]>

  export type FreeSpinSelectScalar = {
    id?: boolean
    casaId?: boolean
    valorGanho?: boolean
    data?: boolean
    usuarioId?: boolean
  }

  export type FreeSpinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "casaId" | "valorGanho" | "data" | "usuarioId", ExtArgs["result"]["freeSpin"]>
  export type FreeSpinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type FreeSpinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type FreeSpinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $FreeSpinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FreeSpin"
    objects: {
      casa: Prisma.$CasaPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      casaId: number
      valorGanho: number
      data: Date
      usuarioId: number
    }, ExtArgs["result"]["freeSpin"]>
    composites: {}
  }

  type FreeSpinGetPayload<S extends boolean | null | undefined | FreeSpinDefaultArgs> = $Result.GetResult<Prisma.$FreeSpinPayload, S>

  type FreeSpinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FreeSpinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FreeSpinCountAggregateInputType | true
    }

  export interface FreeSpinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FreeSpin'], meta: { name: 'FreeSpin' } }
    /**
     * Find zero or one FreeSpin that matches the filter.
     * @param {FreeSpinFindUniqueArgs} args - Arguments to find a FreeSpin
     * @example
     * // Get one FreeSpin
     * const freeSpin = await prisma.freeSpin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FreeSpinFindUniqueArgs>(args: SelectSubset<T, FreeSpinFindUniqueArgs<ExtArgs>>): Prisma__FreeSpinClient<$Result.GetResult<Prisma.$FreeSpinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FreeSpin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FreeSpinFindUniqueOrThrowArgs} args - Arguments to find a FreeSpin
     * @example
     * // Get one FreeSpin
     * const freeSpin = await prisma.freeSpin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FreeSpinFindUniqueOrThrowArgs>(args: SelectSubset<T, FreeSpinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FreeSpinClient<$Result.GetResult<Prisma.$FreeSpinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FreeSpin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreeSpinFindFirstArgs} args - Arguments to find a FreeSpin
     * @example
     * // Get one FreeSpin
     * const freeSpin = await prisma.freeSpin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FreeSpinFindFirstArgs>(args?: SelectSubset<T, FreeSpinFindFirstArgs<ExtArgs>>): Prisma__FreeSpinClient<$Result.GetResult<Prisma.$FreeSpinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FreeSpin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreeSpinFindFirstOrThrowArgs} args - Arguments to find a FreeSpin
     * @example
     * // Get one FreeSpin
     * const freeSpin = await prisma.freeSpin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FreeSpinFindFirstOrThrowArgs>(args?: SelectSubset<T, FreeSpinFindFirstOrThrowArgs<ExtArgs>>): Prisma__FreeSpinClient<$Result.GetResult<Prisma.$FreeSpinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FreeSpins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreeSpinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FreeSpins
     * const freeSpins = await prisma.freeSpin.findMany()
     * 
     * // Get first 10 FreeSpins
     * const freeSpins = await prisma.freeSpin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const freeSpinWithIdOnly = await prisma.freeSpin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FreeSpinFindManyArgs>(args?: SelectSubset<T, FreeSpinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreeSpinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FreeSpin.
     * @param {FreeSpinCreateArgs} args - Arguments to create a FreeSpin.
     * @example
     * // Create one FreeSpin
     * const FreeSpin = await prisma.freeSpin.create({
     *   data: {
     *     // ... data to create a FreeSpin
     *   }
     * })
     * 
     */
    create<T extends FreeSpinCreateArgs>(args: SelectSubset<T, FreeSpinCreateArgs<ExtArgs>>): Prisma__FreeSpinClient<$Result.GetResult<Prisma.$FreeSpinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FreeSpins.
     * @param {FreeSpinCreateManyArgs} args - Arguments to create many FreeSpins.
     * @example
     * // Create many FreeSpins
     * const freeSpin = await prisma.freeSpin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FreeSpinCreateManyArgs>(args?: SelectSubset<T, FreeSpinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FreeSpins and returns the data saved in the database.
     * @param {FreeSpinCreateManyAndReturnArgs} args - Arguments to create many FreeSpins.
     * @example
     * // Create many FreeSpins
     * const freeSpin = await prisma.freeSpin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FreeSpins and only return the `id`
     * const freeSpinWithIdOnly = await prisma.freeSpin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FreeSpinCreateManyAndReturnArgs>(args?: SelectSubset<T, FreeSpinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreeSpinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FreeSpin.
     * @param {FreeSpinDeleteArgs} args - Arguments to delete one FreeSpin.
     * @example
     * // Delete one FreeSpin
     * const FreeSpin = await prisma.freeSpin.delete({
     *   where: {
     *     // ... filter to delete one FreeSpin
     *   }
     * })
     * 
     */
    delete<T extends FreeSpinDeleteArgs>(args: SelectSubset<T, FreeSpinDeleteArgs<ExtArgs>>): Prisma__FreeSpinClient<$Result.GetResult<Prisma.$FreeSpinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FreeSpin.
     * @param {FreeSpinUpdateArgs} args - Arguments to update one FreeSpin.
     * @example
     * // Update one FreeSpin
     * const freeSpin = await prisma.freeSpin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FreeSpinUpdateArgs>(args: SelectSubset<T, FreeSpinUpdateArgs<ExtArgs>>): Prisma__FreeSpinClient<$Result.GetResult<Prisma.$FreeSpinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FreeSpins.
     * @param {FreeSpinDeleteManyArgs} args - Arguments to filter FreeSpins to delete.
     * @example
     * // Delete a few FreeSpins
     * const { count } = await prisma.freeSpin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FreeSpinDeleteManyArgs>(args?: SelectSubset<T, FreeSpinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FreeSpins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreeSpinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FreeSpins
     * const freeSpin = await prisma.freeSpin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FreeSpinUpdateManyArgs>(args: SelectSubset<T, FreeSpinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FreeSpins and returns the data updated in the database.
     * @param {FreeSpinUpdateManyAndReturnArgs} args - Arguments to update many FreeSpins.
     * @example
     * // Update many FreeSpins
     * const freeSpin = await prisma.freeSpin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FreeSpins and only return the `id`
     * const freeSpinWithIdOnly = await prisma.freeSpin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FreeSpinUpdateManyAndReturnArgs>(args: SelectSubset<T, FreeSpinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreeSpinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FreeSpin.
     * @param {FreeSpinUpsertArgs} args - Arguments to update or create a FreeSpin.
     * @example
     * // Update or create a FreeSpin
     * const freeSpin = await prisma.freeSpin.upsert({
     *   create: {
     *     // ... data to create a FreeSpin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FreeSpin we want to update
     *   }
     * })
     */
    upsert<T extends FreeSpinUpsertArgs>(args: SelectSubset<T, FreeSpinUpsertArgs<ExtArgs>>): Prisma__FreeSpinClient<$Result.GetResult<Prisma.$FreeSpinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FreeSpins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreeSpinCountArgs} args - Arguments to filter FreeSpins to count.
     * @example
     * // Count the number of FreeSpins
     * const count = await prisma.freeSpin.count({
     *   where: {
     *     // ... the filter for the FreeSpins we want to count
     *   }
     * })
    **/
    count<T extends FreeSpinCountArgs>(
      args?: Subset<T, FreeSpinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FreeSpinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FreeSpin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreeSpinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FreeSpinAggregateArgs>(args: Subset<T, FreeSpinAggregateArgs>): Prisma.PrismaPromise<GetFreeSpinAggregateType<T>>

    /**
     * Group by FreeSpin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreeSpinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FreeSpinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FreeSpinGroupByArgs['orderBy'] }
        : { orderBy?: FreeSpinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FreeSpinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFreeSpinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FreeSpin model
   */
  readonly fields: FreeSpinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FreeSpin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FreeSpinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    casa<T extends CasaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasaDefaultArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FreeSpin model
   */
  interface FreeSpinFieldRefs {
    readonly id: FieldRef<"FreeSpin", 'Int'>
    readonly casaId: FieldRef<"FreeSpin", 'Int'>
    readonly valorGanho: FieldRef<"FreeSpin", 'Float'>
    readonly data: FieldRef<"FreeSpin", 'DateTime'>
    readonly usuarioId: FieldRef<"FreeSpin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FreeSpin findUnique
   */
  export type FreeSpinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeSpin
     */
    select?: FreeSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreeSpin
     */
    omit?: FreeSpinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeSpinInclude<ExtArgs> | null
    /**
     * Filter, which FreeSpin to fetch.
     */
    where: FreeSpinWhereUniqueInput
  }

  /**
   * FreeSpin findUniqueOrThrow
   */
  export type FreeSpinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeSpin
     */
    select?: FreeSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreeSpin
     */
    omit?: FreeSpinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeSpinInclude<ExtArgs> | null
    /**
     * Filter, which FreeSpin to fetch.
     */
    where: FreeSpinWhereUniqueInput
  }

  /**
   * FreeSpin findFirst
   */
  export type FreeSpinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeSpin
     */
    select?: FreeSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreeSpin
     */
    omit?: FreeSpinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeSpinInclude<ExtArgs> | null
    /**
     * Filter, which FreeSpin to fetch.
     */
    where?: FreeSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreeSpins to fetch.
     */
    orderBy?: FreeSpinOrderByWithRelationInput | FreeSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FreeSpins.
     */
    cursor?: FreeSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreeSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreeSpins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FreeSpins.
     */
    distinct?: FreeSpinScalarFieldEnum | FreeSpinScalarFieldEnum[]
  }

  /**
   * FreeSpin findFirstOrThrow
   */
  export type FreeSpinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeSpin
     */
    select?: FreeSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreeSpin
     */
    omit?: FreeSpinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeSpinInclude<ExtArgs> | null
    /**
     * Filter, which FreeSpin to fetch.
     */
    where?: FreeSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreeSpins to fetch.
     */
    orderBy?: FreeSpinOrderByWithRelationInput | FreeSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FreeSpins.
     */
    cursor?: FreeSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreeSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreeSpins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FreeSpins.
     */
    distinct?: FreeSpinScalarFieldEnum | FreeSpinScalarFieldEnum[]
  }

  /**
   * FreeSpin findMany
   */
  export type FreeSpinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeSpin
     */
    select?: FreeSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreeSpin
     */
    omit?: FreeSpinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeSpinInclude<ExtArgs> | null
    /**
     * Filter, which FreeSpins to fetch.
     */
    where?: FreeSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreeSpins to fetch.
     */
    orderBy?: FreeSpinOrderByWithRelationInput | FreeSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FreeSpins.
     */
    cursor?: FreeSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreeSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreeSpins.
     */
    skip?: number
    distinct?: FreeSpinScalarFieldEnum | FreeSpinScalarFieldEnum[]
  }

  /**
   * FreeSpin create
   */
  export type FreeSpinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeSpin
     */
    select?: FreeSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreeSpin
     */
    omit?: FreeSpinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeSpinInclude<ExtArgs> | null
    /**
     * The data needed to create a FreeSpin.
     */
    data: XOR<FreeSpinCreateInput, FreeSpinUncheckedCreateInput>
  }

  /**
   * FreeSpin createMany
   */
  export type FreeSpinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FreeSpins.
     */
    data: FreeSpinCreateManyInput | FreeSpinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FreeSpin createManyAndReturn
   */
  export type FreeSpinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeSpin
     */
    select?: FreeSpinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FreeSpin
     */
    omit?: FreeSpinOmit<ExtArgs> | null
    /**
     * The data used to create many FreeSpins.
     */
    data: FreeSpinCreateManyInput | FreeSpinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeSpinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FreeSpin update
   */
  export type FreeSpinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeSpin
     */
    select?: FreeSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreeSpin
     */
    omit?: FreeSpinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeSpinInclude<ExtArgs> | null
    /**
     * The data needed to update a FreeSpin.
     */
    data: XOR<FreeSpinUpdateInput, FreeSpinUncheckedUpdateInput>
    /**
     * Choose, which FreeSpin to update.
     */
    where: FreeSpinWhereUniqueInput
  }

  /**
   * FreeSpin updateMany
   */
  export type FreeSpinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FreeSpins.
     */
    data: XOR<FreeSpinUpdateManyMutationInput, FreeSpinUncheckedUpdateManyInput>
    /**
     * Filter which FreeSpins to update
     */
    where?: FreeSpinWhereInput
    /**
     * Limit how many FreeSpins to update.
     */
    limit?: number
  }

  /**
   * FreeSpin updateManyAndReturn
   */
  export type FreeSpinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeSpin
     */
    select?: FreeSpinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FreeSpin
     */
    omit?: FreeSpinOmit<ExtArgs> | null
    /**
     * The data used to update FreeSpins.
     */
    data: XOR<FreeSpinUpdateManyMutationInput, FreeSpinUncheckedUpdateManyInput>
    /**
     * Filter which FreeSpins to update
     */
    where?: FreeSpinWhereInput
    /**
     * Limit how many FreeSpins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeSpinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FreeSpin upsert
   */
  export type FreeSpinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeSpin
     */
    select?: FreeSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreeSpin
     */
    omit?: FreeSpinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeSpinInclude<ExtArgs> | null
    /**
     * The filter to search for the FreeSpin to update in case it exists.
     */
    where: FreeSpinWhereUniqueInput
    /**
     * In case the FreeSpin found by the `where` argument doesn't exist, create a new FreeSpin with this data.
     */
    create: XOR<FreeSpinCreateInput, FreeSpinUncheckedCreateInput>
    /**
     * In case the FreeSpin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FreeSpinUpdateInput, FreeSpinUncheckedUpdateInput>
  }

  /**
   * FreeSpin delete
   */
  export type FreeSpinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeSpin
     */
    select?: FreeSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreeSpin
     */
    omit?: FreeSpinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeSpinInclude<ExtArgs> | null
    /**
     * Filter which FreeSpin to delete.
     */
    where: FreeSpinWhereUniqueInput
  }

  /**
   * FreeSpin deleteMany
   */
  export type FreeSpinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FreeSpins to delete
     */
    where?: FreeSpinWhereInput
    /**
     * Limit how many FreeSpins to delete.
     */
    limit?: number
  }

  /**
   * FreeSpin without action
   */
  export type FreeSpinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeSpin
     */
    select?: FreeSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreeSpin
     */
    omit?: FreeSpinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeSpinInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CasaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    pais: 'pais',
    licenca: 'licenca',
    avaliacao: 'avaliacao',
    status: 'status',
    bonusBoasVindas: 'bonusBoasVindas',
    bonusRecarga: 'bonusRecarga',
    tempoSaque: 'tempoSaque',
    metodosPagamento: 'metodosPagamento',
    telefone: 'telefone',
    email: 'email',
    site: 'site',
    observacoes: 'observacoes',
    usuarioId: 'usuarioId'
  };

  export type CasaScalarFieldEnum = (typeof CasaScalarFieldEnum)[keyof typeof CasaScalarFieldEnum]


  export const ArbitragemScalarFieldEnum: {
    id: 'id',
    evento: 'evento',
    esporte: 'esporte',
    tipo: 'tipo',
    casa1Id: 'casa1Id',
    odd1: 'odd1',
    stake1: 'stake1',
    resultado1: 'resultado1',
    casa2Id: 'casa2Id',
    odd2: 'odd2',
    stake2: 'stake2',
    resultado2: 'resultado2',
    casa3Id: 'casa3Id',
    odd3: 'odd3',
    stake3: 'stake3',
    resultado3: 'resultado3',
    casa4Id: 'casa4Id',
    odd4: 'odd4',
    stake4: 'stake4',
    resultado4: 'resultado4',
    valorTotalInvestir: 'valorTotalInvestir',
    lucroEsperado: 'lucroEsperado',
    status: 'status',
    ladoVencedor: 'ladoVencedor',
    data: 'data',
    usuarioId: 'usuarioId'
  };

  export type ArbitragemScalarFieldEnum = (typeof ArbitragemScalarFieldEnum)[keyof typeof ArbitragemScalarFieldEnum]


  export const FreebetScalarFieldEnum: {
    id: 'id',
    casaId: 'casaId',
    valor: 'valor',
    tipo: 'tipo',
    status: 'status',
    dataObtencao: 'dataObtencao',
    dataExpiracao: 'dataExpiracao',
    valorExtraido: 'valorExtraido',
    estrategia: 'estrategia',
    usuarioId: 'usuarioId'
  };

  export type FreebetScalarFieldEnum = (typeof FreebetScalarFieldEnum)[keyof typeof FreebetScalarFieldEnum]


  export const MovimentacaoScalarFieldEnum: {
    id: 'id',
    casaId: 'casaId',
    tipo: 'tipo',
    valor: 'valor',
    data: 'data',
    observacao: 'observacao',
    usuarioId: 'usuarioId'
  };

  export type MovimentacaoScalarFieldEnum = (typeof MovimentacaoScalarFieldEnum)[keyof typeof MovimentacaoScalarFieldEnum]


  export const FreeSpinScalarFieldEnum: {
    id: 'id',
    casaId: 'casaId',
    valorGanho: 'valorGanho',
    data: 'data',
    usuarioId: 'usuarioId'
  };

  export type FreeSpinScalarFieldEnum = (typeof FreeSpinScalarFieldEnum)[keyof typeof FreeSpinScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    casas?: CasaListRelationFilter
    arbitragens?: ArbitragemListRelationFilter
    freebets?: FreebetListRelationFilter
    movimentacoes?: MovimentacaoListRelationFilter
    freeSpins?: FreeSpinListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    casas?: CasaOrderByRelationAggregateInput
    arbitragens?: ArbitragemOrderByRelationAggregateInput
    freebets?: FreebetOrderByRelationAggregateInput
    movimentacoes?: MovimentacaoOrderByRelationAggregateInput
    freeSpins?: FreeSpinOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    casas?: CasaListRelationFilter
    arbitragens?: ArbitragemListRelationFilter
    freebets?: FreebetListRelationFilter
    movimentacoes?: MovimentacaoListRelationFilter
    freeSpins?: FreeSpinListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type CasaWhereInput = {
    AND?: CasaWhereInput | CasaWhereInput[]
    OR?: CasaWhereInput[]
    NOT?: CasaWhereInput | CasaWhereInput[]
    id?: IntFilter<"Casa"> | number
    nome?: StringFilter<"Casa"> | string
    pais?: StringFilter<"Casa"> | string
    licenca?: StringNullableFilter<"Casa"> | string | null
    avaliacao?: FloatNullableFilter<"Casa"> | number | null
    status?: StringFilter<"Casa"> | string
    bonusBoasVindas?: StringNullableFilter<"Casa"> | string | null
    bonusRecarga?: StringNullableFilter<"Casa"> | string | null
    tempoSaque?: StringNullableFilter<"Casa"> | string | null
    metodosPagamento?: StringNullableFilter<"Casa"> | string | null
    telefone?: StringNullableFilter<"Casa"> | string | null
    email?: StringNullableFilter<"Casa"> | string | null
    site?: StringNullableFilter<"Casa"> | string | null
    observacoes?: StringNullableFilter<"Casa"> | string | null
    usuarioId?: IntFilter<"Casa"> | number
    arbitragens1?: ArbitragemListRelationFilter
    arbitragens2?: ArbitragemListRelationFilter
    arbitragens3?: ArbitragemListRelationFilter
    arbitragens4?: ArbitragemListRelationFilter
    freebets?: FreebetListRelationFilter
    movimentacoes?: MovimentacaoListRelationFilter
    freeSpins?: FreeSpinListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type CasaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    pais?: SortOrder
    licenca?: SortOrderInput | SortOrder
    avaliacao?: SortOrderInput | SortOrder
    status?: SortOrder
    bonusBoasVindas?: SortOrderInput | SortOrder
    bonusRecarga?: SortOrderInput | SortOrder
    tempoSaque?: SortOrderInput | SortOrder
    metodosPagamento?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    arbitragens1?: ArbitragemOrderByRelationAggregateInput
    arbitragens2?: ArbitragemOrderByRelationAggregateInput
    arbitragens3?: ArbitragemOrderByRelationAggregateInput
    arbitragens4?: ArbitragemOrderByRelationAggregateInput
    freebets?: FreebetOrderByRelationAggregateInput
    movimentacoes?: MovimentacaoOrderByRelationAggregateInput
    freeSpins?: FreeSpinOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type CasaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CasaWhereInput | CasaWhereInput[]
    OR?: CasaWhereInput[]
    NOT?: CasaWhereInput | CasaWhereInput[]
    nome?: StringFilter<"Casa"> | string
    pais?: StringFilter<"Casa"> | string
    licenca?: StringNullableFilter<"Casa"> | string | null
    avaliacao?: FloatNullableFilter<"Casa"> | number | null
    status?: StringFilter<"Casa"> | string
    bonusBoasVindas?: StringNullableFilter<"Casa"> | string | null
    bonusRecarga?: StringNullableFilter<"Casa"> | string | null
    tempoSaque?: StringNullableFilter<"Casa"> | string | null
    metodosPagamento?: StringNullableFilter<"Casa"> | string | null
    telefone?: StringNullableFilter<"Casa"> | string | null
    email?: StringNullableFilter<"Casa"> | string | null
    site?: StringNullableFilter<"Casa"> | string | null
    observacoes?: StringNullableFilter<"Casa"> | string | null
    usuarioId?: IntFilter<"Casa"> | number
    arbitragens1?: ArbitragemListRelationFilter
    arbitragens2?: ArbitragemListRelationFilter
    arbitragens3?: ArbitragemListRelationFilter
    arbitragens4?: ArbitragemListRelationFilter
    freebets?: FreebetListRelationFilter
    movimentacoes?: MovimentacaoListRelationFilter
    freeSpins?: FreeSpinListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type CasaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    pais?: SortOrder
    licenca?: SortOrderInput | SortOrder
    avaliacao?: SortOrderInput | SortOrder
    status?: SortOrder
    bonusBoasVindas?: SortOrderInput | SortOrder
    bonusRecarga?: SortOrderInput | SortOrder
    tempoSaque?: SortOrderInput | SortOrder
    metodosPagamento?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    _count?: CasaCountOrderByAggregateInput
    _avg?: CasaAvgOrderByAggregateInput
    _max?: CasaMaxOrderByAggregateInput
    _min?: CasaMinOrderByAggregateInput
    _sum?: CasaSumOrderByAggregateInput
  }

  export type CasaScalarWhereWithAggregatesInput = {
    AND?: CasaScalarWhereWithAggregatesInput | CasaScalarWhereWithAggregatesInput[]
    OR?: CasaScalarWhereWithAggregatesInput[]
    NOT?: CasaScalarWhereWithAggregatesInput | CasaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Casa"> | number
    nome?: StringWithAggregatesFilter<"Casa"> | string
    pais?: StringWithAggregatesFilter<"Casa"> | string
    licenca?: StringNullableWithAggregatesFilter<"Casa"> | string | null
    avaliacao?: FloatNullableWithAggregatesFilter<"Casa"> | number | null
    status?: StringWithAggregatesFilter<"Casa"> | string
    bonusBoasVindas?: StringNullableWithAggregatesFilter<"Casa"> | string | null
    bonusRecarga?: StringNullableWithAggregatesFilter<"Casa"> | string | null
    tempoSaque?: StringNullableWithAggregatesFilter<"Casa"> | string | null
    metodosPagamento?: StringNullableWithAggregatesFilter<"Casa"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Casa"> | string | null
    email?: StringNullableWithAggregatesFilter<"Casa"> | string | null
    site?: StringNullableWithAggregatesFilter<"Casa"> | string | null
    observacoes?: StringNullableWithAggregatesFilter<"Casa"> | string | null
    usuarioId?: IntWithAggregatesFilter<"Casa"> | number
  }

  export type ArbitragemWhereInput = {
    AND?: ArbitragemWhereInput | ArbitragemWhereInput[]
    OR?: ArbitragemWhereInput[]
    NOT?: ArbitragemWhereInput | ArbitragemWhereInput[]
    id?: IntFilter<"Arbitragem"> | number
    evento?: StringFilter<"Arbitragem"> | string
    esporte?: StringFilter<"Arbitragem"> | string
    tipo?: StringFilter<"Arbitragem"> | string
    casa1Id?: IntFilter<"Arbitragem"> | number
    odd1?: FloatFilter<"Arbitragem"> | number
    stake1?: FloatFilter<"Arbitragem"> | number
    resultado1?: StringFilter<"Arbitragem"> | string
    casa2Id?: IntFilter<"Arbitragem"> | number
    odd2?: FloatFilter<"Arbitragem"> | number
    stake2?: FloatFilter<"Arbitragem"> | number
    resultado2?: StringFilter<"Arbitragem"> | string
    casa3Id?: IntNullableFilter<"Arbitragem"> | number | null
    odd3?: FloatNullableFilter<"Arbitragem"> | number | null
    stake3?: FloatNullableFilter<"Arbitragem"> | number | null
    resultado3?: StringNullableFilter<"Arbitragem"> | string | null
    casa4Id?: IntNullableFilter<"Arbitragem"> | number | null
    odd4?: FloatNullableFilter<"Arbitragem"> | number | null
    stake4?: FloatNullableFilter<"Arbitragem"> | number | null
    resultado4?: StringNullableFilter<"Arbitragem"> | string | null
    valorTotalInvestir?: FloatFilter<"Arbitragem"> | number
    lucroEsperado?: FloatFilter<"Arbitragem"> | number
    status?: StringFilter<"Arbitragem"> | string
    ladoVencedor?: StringNullableFilter<"Arbitragem"> | string | null
    data?: DateTimeFilter<"Arbitragem"> | Date | string
    usuarioId?: IntFilter<"Arbitragem"> | number
    casa1?: XOR<CasaScalarRelationFilter, CasaWhereInput>
    casa2?: XOR<CasaScalarRelationFilter, CasaWhereInput>
    casa3?: XOR<CasaNullableScalarRelationFilter, CasaWhereInput> | null
    casa4?: XOR<CasaNullableScalarRelationFilter, CasaWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ArbitragemOrderByWithRelationInput = {
    id?: SortOrder
    evento?: SortOrder
    esporte?: SortOrder
    tipo?: SortOrder
    casa1Id?: SortOrder
    odd1?: SortOrder
    stake1?: SortOrder
    resultado1?: SortOrder
    casa2Id?: SortOrder
    odd2?: SortOrder
    stake2?: SortOrder
    resultado2?: SortOrder
    casa3Id?: SortOrderInput | SortOrder
    odd3?: SortOrderInput | SortOrder
    stake3?: SortOrderInput | SortOrder
    resultado3?: SortOrderInput | SortOrder
    casa4Id?: SortOrderInput | SortOrder
    odd4?: SortOrderInput | SortOrder
    stake4?: SortOrderInput | SortOrder
    resultado4?: SortOrderInput | SortOrder
    valorTotalInvestir?: SortOrder
    lucroEsperado?: SortOrder
    status?: SortOrder
    ladoVencedor?: SortOrderInput | SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
    casa1?: CasaOrderByWithRelationInput
    casa2?: CasaOrderByWithRelationInput
    casa3?: CasaOrderByWithRelationInput
    casa4?: CasaOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type ArbitragemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArbitragemWhereInput | ArbitragemWhereInput[]
    OR?: ArbitragemWhereInput[]
    NOT?: ArbitragemWhereInput | ArbitragemWhereInput[]
    evento?: StringFilter<"Arbitragem"> | string
    esporte?: StringFilter<"Arbitragem"> | string
    tipo?: StringFilter<"Arbitragem"> | string
    casa1Id?: IntFilter<"Arbitragem"> | number
    odd1?: FloatFilter<"Arbitragem"> | number
    stake1?: FloatFilter<"Arbitragem"> | number
    resultado1?: StringFilter<"Arbitragem"> | string
    casa2Id?: IntFilter<"Arbitragem"> | number
    odd2?: FloatFilter<"Arbitragem"> | number
    stake2?: FloatFilter<"Arbitragem"> | number
    resultado2?: StringFilter<"Arbitragem"> | string
    casa3Id?: IntNullableFilter<"Arbitragem"> | number | null
    odd3?: FloatNullableFilter<"Arbitragem"> | number | null
    stake3?: FloatNullableFilter<"Arbitragem"> | number | null
    resultado3?: StringNullableFilter<"Arbitragem"> | string | null
    casa4Id?: IntNullableFilter<"Arbitragem"> | number | null
    odd4?: FloatNullableFilter<"Arbitragem"> | number | null
    stake4?: FloatNullableFilter<"Arbitragem"> | number | null
    resultado4?: StringNullableFilter<"Arbitragem"> | string | null
    valorTotalInvestir?: FloatFilter<"Arbitragem"> | number
    lucroEsperado?: FloatFilter<"Arbitragem"> | number
    status?: StringFilter<"Arbitragem"> | string
    ladoVencedor?: StringNullableFilter<"Arbitragem"> | string | null
    data?: DateTimeFilter<"Arbitragem"> | Date | string
    usuarioId?: IntFilter<"Arbitragem"> | number
    casa1?: XOR<CasaScalarRelationFilter, CasaWhereInput>
    casa2?: XOR<CasaScalarRelationFilter, CasaWhereInput>
    casa3?: XOR<CasaNullableScalarRelationFilter, CasaWhereInput> | null
    casa4?: XOR<CasaNullableScalarRelationFilter, CasaWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type ArbitragemOrderByWithAggregationInput = {
    id?: SortOrder
    evento?: SortOrder
    esporte?: SortOrder
    tipo?: SortOrder
    casa1Id?: SortOrder
    odd1?: SortOrder
    stake1?: SortOrder
    resultado1?: SortOrder
    casa2Id?: SortOrder
    odd2?: SortOrder
    stake2?: SortOrder
    resultado2?: SortOrder
    casa3Id?: SortOrderInput | SortOrder
    odd3?: SortOrderInput | SortOrder
    stake3?: SortOrderInput | SortOrder
    resultado3?: SortOrderInput | SortOrder
    casa4Id?: SortOrderInput | SortOrder
    odd4?: SortOrderInput | SortOrder
    stake4?: SortOrderInput | SortOrder
    resultado4?: SortOrderInput | SortOrder
    valorTotalInvestir?: SortOrder
    lucroEsperado?: SortOrder
    status?: SortOrder
    ladoVencedor?: SortOrderInput | SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
    _count?: ArbitragemCountOrderByAggregateInput
    _avg?: ArbitragemAvgOrderByAggregateInput
    _max?: ArbitragemMaxOrderByAggregateInput
    _min?: ArbitragemMinOrderByAggregateInput
    _sum?: ArbitragemSumOrderByAggregateInput
  }

  export type ArbitragemScalarWhereWithAggregatesInput = {
    AND?: ArbitragemScalarWhereWithAggregatesInput | ArbitragemScalarWhereWithAggregatesInput[]
    OR?: ArbitragemScalarWhereWithAggregatesInput[]
    NOT?: ArbitragemScalarWhereWithAggregatesInput | ArbitragemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Arbitragem"> | number
    evento?: StringWithAggregatesFilter<"Arbitragem"> | string
    esporte?: StringWithAggregatesFilter<"Arbitragem"> | string
    tipo?: StringWithAggregatesFilter<"Arbitragem"> | string
    casa1Id?: IntWithAggregatesFilter<"Arbitragem"> | number
    odd1?: FloatWithAggregatesFilter<"Arbitragem"> | number
    stake1?: FloatWithAggregatesFilter<"Arbitragem"> | number
    resultado1?: StringWithAggregatesFilter<"Arbitragem"> | string
    casa2Id?: IntWithAggregatesFilter<"Arbitragem"> | number
    odd2?: FloatWithAggregatesFilter<"Arbitragem"> | number
    stake2?: FloatWithAggregatesFilter<"Arbitragem"> | number
    resultado2?: StringWithAggregatesFilter<"Arbitragem"> | string
    casa3Id?: IntNullableWithAggregatesFilter<"Arbitragem"> | number | null
    odd3?: FloatNullableWithAggregatesFilter<"Arbitragem"> | number | null
    stake3?: FloatNullableWithAggregatesFilter<"Arbitragem"> | number | null
    resultado3?: StringNullableWithAggregatesFilter<"Arbitragem"> | string | null
    casa4Id?: IntNullableWithAggregatesFilter<"Arbitragem"> | number | null
    odd4?: FloatNullableWithAggregatesFilter<"Arbitragem"> | number | null
    stake4?: FloatNullableWithAggregatesFilter<"Arbitragem"> | number | null
    resultado4?: StringNullableWithAggregatesFilter<"Arbitragem"> | string | null
    valorTotalInvestir?: FloatWithAggregatesFilter<"Arbitragem"> | number
    lucroEsperado?: FloatWithAggregatesFilter<"Arbitragem"> | number
    status?: StringWithAggregatesFilter<"Arbitragem"> | string
    ladoVencedor?: StringNullableWithAggregatesFilter<"Arbitragem"> | string | null
    data?: DateTimeWithAggregatesFilter<"Arbitragem"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Arbitragem"> | number
  }

  export type FreebetWhereInput = {
    AND?: FreebetWhereInput | FreebetWhereInput[]
    OR?: FreebetWhereInput[]
    NOT?: FreebetWhereInput | FreebetWhereInput[]
    id?: IntFilter<"Freebet"> | number
    casaId?: IntFilter<"Freebet"> | number
    valor?: FloatFilter<"Freebet"> | number
    tipo?: StringFilter<"Freebet"> | string
    status?: StringFilter<"Freebet"> | string
    dataObtencao?: DateTimeFilter<"Freebet"> | Date | string
    dataExpiracao?: DateTimeFilter<"Freebet"> | Date | string
    valorExtraido?: FloatNullableFilter<"Freebet"> | number | null
    estrategia?: StringNullableFilter<"Freebet"> | string | null
    usuarioId?: IntFilter<"Freebet"> | number
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type FreebetOrderByWithRelationInput = {
    id?: SortOrder
    casaId?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    dataObtencao?: SortOrder
    dataExpiracao?: SortOrder
    valorExtraido?: SortOrderInput | SortOrder
    estrategia?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    casa?: CasaOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type FreebetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FreebetWhereInput | FreebetWhereInput[]
    OR?: FreebetWhereInput[]
    NOT?: FreebetWhereInput | FreebetWhereInput[]
    casaId?: IntFilter<"Freebet"> | number
    valor?: FloatFilter<"Freebet"> | number
    tipo?: StringFilter<"Freebet"> | string
    status?: StringFilter<"Freebet"> | string
    dataObtencao?: DateTimeFilter<"Freebet"> | Date | string
    dataExpiracao?: DateTimeFilter<"Freebet"> | Date | string
    valorExtraido?: FloatNullableFilter<"Freebet"> | number | null
    estrategia?: StringNullableFilter<"Freebet"> | string | null
    usuarioId?: IntFilter<"Freebet"> | number
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type FreebetOrderByWithAggregationInput = {
    id?: SortOrder
    casaId?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    dataObtencao?: SortOrder
    dataExpiracao?: SortOrder
    valorExtraido?: SortOrderInput | SortOrder
    estrategia?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    _count?: FreebetCountOrderByAggregateInput
    _avg?: FreebetAvgOrderByAggregateInput
    _max?: FreebetMaxOrderByAggregateInput
    _min?: FreebetMinOrderByAggregateInput
    _sum?: FreebetSumOrderByAggregateInput
  }

  export type FreebetScalarWhereWithAggregatesInput = {
    AND?: FreebetScalarWhereWithAggregatesInput | FreebetScalarWhereWithAggregatesInput[]
    OR?: FreebetScalarWhereWithAggregatesInput[]
    NOT?: FreebetScalarWhereWithAggregatesInput | FreebetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Freebet"> | number
    casaId?: IntWithAggregatesFilter<"Freebet"> | number
    valor?: FloatWithAggregatesFilter<"Freebet"> | number
    tipo?: StringWithAggregatesFilter<"Freebet"> | string
    status?: StringWithAggregatesFilter<"Freebet"> | string
    dataObtencao?: DateTimeWithAggregatesFilter<"Freebet"> | Date | string
    dataExpiracao?: DateTimeWithAggregatesFilter<"Freebet"> | Date | string
    valorExtraido?: FloatNullableWithAggregatesFilter<"Freebet"> | number | null
    estrategia?: StringNullableWithAggregatesFilter<"Freebet"> | string | null
    usuarioId?: IntWithAggregatesFilter<"Freebet"> | number
  }

  export type MovimentacaoWhereInput = {
    AND?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    OR?: MovimentacaoWhereInput[]
    NOT?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    id?: IntFilter<"Movimentacao"> | number
    casaId?: IntFilter<"Movimentacao"> | number
    tipo?: StringFilter<"Movimentacao"> | string
    valor?: FloatFilter<"Movimentacao"> | number
    data?: DateTimeFilter<"Movimentacao"> | Date | string
    observacao?: StringNullableFilter<"Movimentacao"> | string | null
    usuarioId?: IntFilter<"Movimentacao"> | number
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type MovimentacaoOrderByWithRelationInput = {
    id?: SortOrder
    casaId?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    observacao?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    casa?: CasaOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type MovimentacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    OR?: MovimentacaoWhereInput[]
    NOT?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    casaId?: IntFilter<"Movimentacao"> | number
    tipo?: StringFilter<"Movimentacao"> | string
    valor?: FloatFilter<"Movimentacao"> | number
    data?: DateTimeFilter<"Movimentacao"> | Date | string
    observacao?: StringNullableFilter<"Movimentacao"> | string | null
    usuarioId?: IntFilter<"Movimentacao"> | number
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type MovimentacaoOrderByWithAggregationInput = {
    id?: SortOrder
    casaId?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    observacao?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    _count?: MovimentacaoCountOrderByAggregateInput
    _avg?: MovimentacaoAvgOrderByAggregateInput
    _max?: MovimentacaoMaxOrderByAggregateInput
    _min?: MovimentacaoMinOrderByAggregateInput
    _sum?: MovimentacaoSumOrderByAggregateInput
  }

  export type MovimentacaoScalarWhereWithAggregatesInput = {
    AND?: MovimentacaoScalarWhereWithAggregatesInput | MovimentacaoScalarWhereWithAggregatesInput[]
    OR?: MovimentacaoScalarWhereWithAggregatesInput[]
    NOT?: MovimentacaoScalarWhereWithAggregatesInput | MovimentacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movimentacao"> | number
    casaId?: IntWithAggregatesFilter<"Movimentacao"> | number
    tipo?: StringWithAggregatesFilter<"Movimentacao"> | string
    valor?: FloatWithAggregatesFilter<"Movimentacao"> | number
    data?: DateTimeWithAggregatesFilter<"Movimentacao"> | Date | string
    observacao?: StringNullableWithAggregatesFilter<"Movimentacao"> | string | null
    usuarioId?: IntWithAggregatesFilter<"Movimentacao"> | number
  }

  export type FreeSpinWhereInput = {
    AND?: FreeSpinWhereInput | FreeSpinWhereInput[]
    OR?: FreeSpinWhereInput[]
    NOT?: FreeSpinWhereInput | FreeSpinWhereInput[]
    id?: IntFilter<"FreeSpin"> | number
    casaId?: IntFilter<"FreeSpin"> | number
    valorGanho?: FloatFilter<"FreeSpin"> | number
    data?: DateTimeFilter<"FreeSpin"> | Date | string
    usuarioId?: IntFilter<"FreeSpin"> | number
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type FreeSpinOrderByWithRelationInput = {
    id?: SortOrder
    casaId?: SortOrder
    valorGanho?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
    casa?: CasaOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type FreeSpinWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FreeSpinWhereInput | FreeSpinWhereInput[]
    OR?: FreeSpinWhereInput[]
    NOT?: FreeSpinWhereInput | FreeSpinWhereInput[]
    casaId?: IntFilter<"FreeSpin"> | number
    valorGanho?: FloatFilter<"FreeSpin"> | number
    data?: DateTimeFilter<"FreeSpin"> | Date | string
    usuarioId?: IntFilter<"FreeSpin"> | number
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type FreeSpinOrderByWithAggregationInput = {
    id?: SortOrder
    casaId?: SortOrder
    valorGanho?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
    _count?: FreeSpinCountOrderByAggregateInput
    _avg?: FreeSpinAvgOrderByAggregateInput
    _max?: FreeSpinMaxOrderByAggregateInput
    _min?: FreeSpinMinOrderByAggregateInput
    _sum?: FreeSpinSumOrderByAggregateInput
  }

  export type FreeSpinScalarWhereWithAggregatesInput = {
    AND?: FreeSpinScalarWhereWithAggregatesInput | FreeSpinScalarWhereWithAggregatesInput[]
    OR?: FreeSpinScalarWhereWithAggregatesInput[]
    NOT?: FreeSpinScalarWhereWithAggregatesInput | FreeSpinScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FreeSpin"> | number
    casaId?: IntWithAggregatesFilter<"FreeSpin"> | number
    valorGanho?: FloatWithAggregatesFilter<"FreeSpin"> | number
    data?: DateTimeWithAggregatesFilter<"FreeSpin"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"FreeSpin"> | number
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    casas?: CasaCreateNestedManyWithoutUsuarioInput
    arbitragens?: ArbitragemCreateNestedManyWithoutUsuarioInput
    freebets?: FreebetCreateNestedManyWithoutUsuarioInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutUsuarioInput
    freeSpins?: FreeSpinCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    casas?: CasaUncheckedCreateNestedManyWithoutUsuarioInput
    arbitragens?: ArbitragemUncheckedCreateNestedManyWithoutUsuarioInput
    freebets?: FreebetUncheckedCreateNestedManyWithoutUsuarioInput
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutUsuarioInput
    freeSpins?: FreeSpinUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    casas?: CasaUpdateManyWithoutUsuarioNestedInput
    arbitragens?: ArbitragemUpdateManyWithoutUsuarioNestedInput
    freebets?: FreebetUpdateManyWithoutUsuarioNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutUsuarioNestedInput
    freeSpins?: FreeSpinUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    casas?: CasaUncheckedUpdateManyWithoutUsuarioNestedInput
    arbitragens?: ArbitragemUncheckedUpdateManyWithoutUsuarioNestedInput
    freebets?: FreebetUncheckedUpdateManyWithoutUsuarioNestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    freeSpins?: FreeSpinUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type CasaCreateInput = {
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    arbitragens1?: ArbitragemCreateNestedManyWithoutCasa1Input
    arbitragens2?: ArbitragemCreateNestedManyWithoutCasa2Input
    arbitragens3?: ArbitragemCreateNestedManyWithoutCasa3Input
    arbitragens4?: ArbitragemCreateNestedManyWithoutCasa4Input
    freebets?: FreebetCreateNestedManyWithoutCasaInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinCreateNestedManyWithoutCasaInput
    usuario: UsuarioCreateNestedOneWithoutCasasInput
  }

  export type CasaUncheckedCreateInput = {
    id?: number
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    usuarioId: number
    arbitragens1?: ArbitragemUncheckedCreateNestedManyWithoutCasa1Input
    arbitragens2?: ArbitragemUncheckedCreateNestedManyWithoutCasa2Input
    arbitragens3?: ArbitragemUncheckedCreateNestedManyWithoutCasa3Input
    arbitragens4?: ArbitragemUncheckedCreateNestedManyWithoutCasa4Input
    freebets?: FreebetUncheckedCreateNestedManyWithoutCasaInput
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    arbitragens1?: ArbitragemUpdateManyWithoutCasa1NestedInput
    arbitragens2?: ArbitragemUpdateManyWithoutCasa2NestedInput
    arbitragens3?: ArbitragemUpdateManyWithoutCasa3NestedInput
    arbitragens4?: ArbitragemUpdateManyWithoutCasa4NestedInput
    freebets?: FreebetUpdateManyWithoutCasaNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUpdateManyWithoutCasaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutCasasNestedInput
  }

  export type CasaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    arbitragens1?: ArbitragemUncheckedUpdateManyWithoutCasa1NestedInput
    arbitragens2?: ArbitragemUncheckedUpdateManyWithoutCasa2NestedInput
    arbitragens3?: ArbitragemUncheckedUpdateManyWithoutCasa3NestedInput
    arbitragens4?: ArbitragemUncheckedUpdateManyWithoutCasa4NestedInput
    freebets?: FreebetUncheckedUpdateManyWithoutCasaNestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type CasaCreateManyInput = {
    id?: number
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    usuarioId: number
  }

  export type CasaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ArbitragemCreateInput = {
    evento: string
    esporte: string
    tipo?: string
    odd1: number
    stake1: number
    resultado1: string
    odd2: number
    stake2: number
    resultado2: string
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    casa1: CasaCreateNestedOneWithoutArbitragens1Input
    casa2: CasaCreateNestedOneWithoutArbitragens2Input
    casa3?: CasaCreateNestedOneWithoutArbitragens3Input
    casa4?: CasaCreateNestedOneWithoutArbitragens4Input
    usuario: UsuarioCreateNestedOneWithoutArbitragensInput
  }

  export type ArbitragemUncheckedCreateInput = {
    id?: number
    evento: string
    esporte: string
    tipo?: string
    casa1Id: number
    odd1: number
    stake1: number
    resultado1: string
    casa2Id: number
    odd2: number
    stake2: number
    resultado2: string
    casa3Id?: number | null
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    casa4Id?: number | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    usuarioId: number
  }

  export type ArbitragemUpdateInput = {
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    casa1?: CasaUpdateOneRequiredWithoutArbitragens1NestedInput
    casa2?: CasaUpdateOneRequiredWithoutArbitragens2NestedInput
    casa3?: CasaUpdateOneWithoutArbitragens3NestedInput
    casa4?: CasaUpdateOneWithoutArbitragens4NestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutArbitragensNestedInput
  }

  export type ArbitragemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    casa1Id?: IntFieldUpdateOperationsInput | number
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    casa2Id?: IntFieldUpdateOperationsInput | number
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    casa3Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    casa4Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ArbitragemCreateManyInput = {
    id?: number
    evento: string
    esporte: string
    tipo?: string
    casa1Id: number
    odd1: number
    stake1: number
    resultado1: string
    casa2Id: number
    odd2: number
    stake2: number
    resultado2: string
    casa3Id?: number | null
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    casa4Id?: number | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    usuarioId: number
  }

  export type ArbitragemUpdateManyMutationInput = {
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArbitragemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    casa1Id?: IntFieldUpdateOperationsInput | number
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    casa2Id?: IntFieldUpdateOperationsInput | number
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    casa3Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    casa4Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type FreebetCreateInput = {
    valor: number
    tipo: string
    status?: string
    dataObtencao: Date | string
    dataExpiracao: Date | string
    valorExtraido?: number | null
    estrategia?: string | null
    casa: CasaCreateNestedOneWithoutFreebetsInput
    usuario: UsuarioCreateNestedOneWithoutFreebetsInput
  }

  export type FreebetUncheckedCreateInput = {
    id?: number
    casaId: number
    valor: number
    tipo: string
    status?: string
    dataObtencao: Date | string
    dataExpiracao: Date | string
    valorExtraido?: number | null
    estrategia?: string | null
    usuarioId: number
  }

  export type FreebetUpdateInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataObtencao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpiracao?: DateTimeFieldUpdateOperationsInput | Date | string
    valorExtraido?: NullableFloatFieldUpdateOperationsInput | number | null
    estrategia?: NullableStringFieldUpdateOperationsInput | string | null
    casa?: CasaUpdateOneRequiredWithoutFreebetsNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutFreebetsNestedInput
  }

  export type FreebetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataObtencao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpiracao?: DateTimeFieldUpdateOperationsInput | Date | string
    valorExtraido?: NullableFloatFieldUpdateOperationsInput | number | null
    estrategia?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type FreebetCreateManyInput = {
    id?: number
    casaId: number
    valor: number
    tipo: string
    status?: string
    dataObtencao: Date | string
    dataExpiracao: Date | string
    valorExtraido?: number | null
    estrategia?: string | null
    usuarioId: number
  }

  export type FreebetUpdateManyMutationInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataObtencao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpiracao?: DateTimeFieldUpdateOperationsInput | Date | string
    valorExtraido?: NullableFloatFieldUpdateOperationsInput | number | null
    estrategia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FreebetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataObtencao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpiracao?: DateTimeFieldUpdateOperationsInput | Date | string
    valorExtraido?: NullableFloatFieldUpdateOperationsInput | number | null
    estrategia?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type MovimentacaoCreateInput = {
    tipo: string
    valor: number
    data?: Date | string
    observacao?: string | null
    casa: CasaCreateNestedOneWithoutMovimentacoesInput
    usuario: UsuarioCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoUncheckedCreateInput = {
    id?: number
    casaId: number
    tipo: string
    valor: number
    data?: Date | string
    observacao?: string | null
    usuarioId: number
  }

  export type MovimentacaoUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    casa?: CasaUpdateOneRequiredWithoutMovimentacoesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type MovimentacaoCreateManyInput = {
    id?: number
    casaId: number
    tipo: string
    valor: number
    data?: Date | string
    observacao?: string | null
    usuarioId: number
  }

  export type MovimentacaoUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type FreeSpinCreateInput = {
    valorGanho: number
    data?: Date | string
    casa: CasaCreateNestedOneWithoutFreeSpinsInput
    usuario: UsuarioCreateNestedOneWithoutFreeSpinsInput
  }

  export type FreeSpinUncheckedCreateInput = {
    id?: number
    casaId: number
    valorGanho: number
    data?: Date | string
    usuarioId: number
  }

  export type FreeSpinUpdateInput = {
    valorGanho?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    casa?: CasaUpdateOneRequiredWithoutFreeSpinsNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutFreeSpinsNestedInput
  }

  export type FreeSpinUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    valorGanho?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type FreeSpinCreateManyInput = {
    id?: number
    casaId: number
    valorGanho: number
    data?: Date | string
    usuarioId: number
  }

  export type FreeSpinUpdateManyMutationInput = {
    valorGanho?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreeSpinUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    valorGanho?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CasaListRelationFilter = {
    every?: CasaWhereInput
    some?: CasaWhereInput
    none?: CasaWhereInput
  }

  export type ArbitragemListRelationFilter = {
    every?: ArbitragemWhereInput
    some?: ArbitragemWhereInput
    none?: ArbitragemWhereInput
  }

  export type FreebetListRelationFilter = {
    every?: FreebetWhereInput
    some?: FreebetWhereInput
    none?: FreebetWhereInput
  }

  export type MovimentacaoListRelationFilter = {
    every?: MovimentacaoWhereInput
    some?: MovimentacaoWhereInput
    none?: MovimentacaoWhereInput
  }

  export type FreeSpinListRelationFilter = {
    every?: FreeSpinWhereInput
    some?: FreeSpinWhereInput
    none?: FreeSpinWhereInput
  }

  export type CasaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArbitragemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FreebetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovimentacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FreeSpinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CasaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    pais?: SortOrder
    licenca?: SortOrder
    avaliacao?: SortOrder
    status?: SortOrder
    bonusBoasVindas?: SortOrder
    bonusRecarga?: SortOrder
    tempoSaque?: SortOrder
    metodosPagamento?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    site?: SortOrder
    observacoes?: SortOrder
    usuarioId?: SortOrder
  }

  export type CasaAvgOrderByAggregateInput = {
    id?: SortOrder
    avaliacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type CasaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    pais?: SortOrder
    licenca?: SortOrder
    avaliacao?: SortOrder
    status?: SortOrder
    bonusBoasVindas?: SortOrder
    bonusRecarga?: SortOrder
    tempoSaque?: SortOrder
    metodosPagamento?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    site?: SortOrder
    observacoes?: SortOrder
    usuarioId?: SortOrder
  }

  export type CasaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    pais?: SortOrder
    licenca?: SortOrder
    avaliacao?: SortOrder
    status?: SortOrder
    bonusBoasVindas?: SortOrder
    bonusRecarga?: SortOrder
    tempoSaque?: SortOrder
    metodosPagamento?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    site?: SortOrder
    observacoes?: SortOrder
    usuarioId?: SortOrder
  }

  export type CasaSumOrderByAggregateInput = {
    id?: SortOrder
    avaliacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CasaScalarRelationFilter = {
    is?: CasaWhereInput
    isNot?: CasaWhereInput
  }

  export type CasaNullableScalarRelationFilter = {
    is?: CasaWhereInput | null
    isNot?: CasaWhereInput | null
  }

  export type ArbitragemCountOrderByAggregateInput = {
    id?: SortOrder
    evento?: SortOrder
    esporte?: SortOrder
    tipo?: SortOrder
    casa1Id?: SortOrder
    odd1?: SortOrder
    stake1?: SortOrder
    resultado1?: SortOrder
    casa2Id?: SortOrder
    odd2?: SortOrder
    stake2?: SortOrder
    resultado2?: SortOrder
    casa3Id?: SortOrder
    odd3?: SortOrder
    stake3?: SortOrder
    resultado3?: SortOrder
    casa4Id?: SortOrder
    odd4?: SortOrder
    stake4?: SortOrder
    resultado4?: SortOrder
    valorTotalInvestir?: SortOrder
    lucroEsperado?: SortOrder
    status?: SortOrder
    ladoVencedor?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
  }

  export type ArbitragemAvgOrderByAggregateInput = {
    id?: SortOrder
    casa1Id?: SortOrder
    odd1?: SortOrder
    stake1?: SortOrder
    casa2Id?: SortOrder
    odd2?: SortOrder
    stake2?: SortOrder
    casa3Id?: SortOrder
    odd3?: SortOrder
    stake3?: SortOrder
    casa4Id?: SortOrder
    odd4?: SortOrder
    stake4?: SortOrder
    valorTotalInvestir?: SortOrder
    lucroEsperado?: SortOrder
    usuarioId?: SortOrder
  }

  export type ArbitragemMaxOrderByAggregateInput = {
    id?: SortOrder
    evento?: SortOrder
    esporte?: SortOrder
    tipo?: SortOrder
    casa1Id?: SortOrder
    odd1?: SortOrder
    stake1?: SortOrder
    resultado1?: SortOrder
    casa2Id?: SortOrder
    odd2?: SortOrder
    stake2?: SortOrder
    resultado2?: SortOrder
    casa3Id?: SortOrder
    odd3?: SortOrder
    stake3?: SortOrder
    resultado3?: SortOrder
    casa4Id?: SortOrder
    odd4?: SortOrder
    stake4?: SortOrder
    resultado4?: SortOrder
    valorTotalInvestir?: SortOrder
    lucroEsperado?: SortOrder
    status?: SortOrder
    ladoVencedor?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
  }

  export type ArbitragemMinOrderByAggregateInput = {
    id?: SortOrder
    evento?: SortOrder
    esporte?: SortOrder
    tipo?: SortOrder
    casa1Id?: SortOrder
    odd1?: SortOrder
    stake1?: SortOrder
    resultado1?: SortOrder
    casa2Id?: SortOrder
    odd2?: SortOrder
    stake2?: SortOrder
    resultado2?: SortOrder
    casa3Id?: SortOrder
    odd3?: SortOrder
    stake3?: SortOrder
    resultado3?: SortOrder
    casa4Id?: SortOrder
    odd4?: SortOrder
    stake4?: SortOrder
    resultado4?: SortOrder
    valorTotalInvestir?: SortOrder
    lucroEsperado?: SortOrder
    status?: SortOrder
    ladoVencedor?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
  }

  export type ArbitragemSumOrderByAggregateInput = {
    id?: SortOrder
    casa1Id?: SortOrder
    odd1?: SortOrder
    stake1?: SortOrder
    casa2Id?: SortOrder
    odd2?: SortOrder
    stake2?: SortOrder
    casa3Id?: SortOrder
    odd3?: SortOrder
    stake3?: SortOrder
    casa4Id?: SortOrder
    odd4?: SortOrder
    stake4?: SortOrder
    valorTotalInvestir?: SortOrder
    lucroEsperado?: SortOrder
    usuarioId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FreebetCountOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    dataObtencao?: SortOrder
    dataExpiracao?: SortOrder
    valorExtraido?: SortOrder
    estrategia?: SortOrder
    usuarioId?: SortOrder
  }

  export type FreebetAvgOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
    valor?: SortOrder
    valorExtraido?: SortOrder
    usuarioId?: SortOrder
  }

  export type FreebetMaxOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    dataObtencao?: SortOrder
    dataExpiracao?: SortOrder
    valorExtraido?: SortOrder
    estrategia?: SortOrder
    usuarioId?: SortOrder
  }

  export type FreebetMinOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    dataObtencao?: SortOrder
    dataExpiracao?: SortOrder
    valorExtraido?: SortOrder
    estrategia?: SortOrder
    usuarioId?: SortOrder
  }

  export type FreebetSumOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
    valor?: SortOrder
    valorExtraido?: SortOrder
    usuarioId?: SortOrder
  }

  export type MovimentacaoCountOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    observacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type MovimentacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
    valor?: SortOrder
    usuarioId?: SortOrder
  }

  export type MovimentacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    observacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type MovimentacaoMinOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    observacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type MovimentacaoSumOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
    valor?: SortOrder
    usuarioId?: SortOrder
  }

  export type FreeSpinCountOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
    valorGanho?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
  }

  export type FreeSpinAvgOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
    valorGanho?: SortOrder
    usuarioId?: SortOrder
  }

  export type FreeSpinMaxOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
    valorGanho?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
  }

  export type FreeSpinMinOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
    valorGanho?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
  }

  export type FreeSpinSumOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
    valorGanho?: SortOrder
    usuarioId?: SortOrder
  }

  export type CasaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CasaCreateWithoutUsuarioInput, CasaUncheckedCreateWithoutUsuarioInput> | CasaCreateWithoutUsuarioInput[] | CasaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CasaCreateOrConnectWithoutUsuarioInput | CasaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CasaCreateManyUsuarioInputEnvelope
    connect?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
  }

  export type ArbitragemCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ArbitragemCreateWithoutUsuarioInput, ArbitragemUncheckedCreateWithoutUsuarioInput> | ArbitragemCreateWithoutUsuarioInput[] | ArbitragemUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutUsuarioInput | ArbitragemCreateOrConnectWithoutUsuarioInput[]
    createMany?: ArbitragemCreateManyUsuarioInputEnvelope
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
  }

  export type FreebetCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FreebetCreateWithoutUsuarioInput, FreebetUncheckedCreateWithoutUsuarioInput> | FreebetCreateWithoutUsuarioInput[] | FreebetUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FreebetCreateOrConnectWithoutUsuarioInput | FreebetCreateOrConnectWithoutUsuarioInput[]
    createMany?: FreebetCreateManyUsuarioInputEnvelope
    connect?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
  }

  export type MovimentacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MovimentacaoCreateWithoutUsuarioInput, MovimentacaoUncheckedCreateWithoutUsuarioInput> | MovimentacaoCreateWithoutUsuarioInput[] | MovimentacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutUsuarioInput | MovimentacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: MovimentacaoCreateManyUsuarioInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type FreeSpinCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FreeSpinCreateWithoutUsuarioInput, FreeSpinUncheckedCreateWithoutUsuarioInput> | FreeSpinCreateWithoutUsuarioInput[] | FreeSpinUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FreeSpinCreateOrConnectWithoutUsuarioInput | FreeSpinCreateOrConnectWithoutUsuarioInput[]
    createMany?: FreeSpinCreateManyUsuarioInputEnvelope
    connect?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
  }

  export type CasaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CasaCreateWithoutUsuarioInput, CasaUncheckedCreateWithoutUsuarioInput> | CasaCreateWithoutUsuarioInput[] | CasaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CasaCreateOrConnectWithoutUsuarioInput | CasaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CasaCreateManyUsuarioInputEnvelope
    connect?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
  }

  export type ArbitragemUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ArbitragemCreateWithoutUsuarioInput, ArbitragemUncheckedCreateWithoutUsuarioInput> | ArbitragemCreateWithoutUsuarioInput[] | ArbitragemUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutUsuarioInput | ArbitragemCreateOrConnectWithoutUsuarioInput[]
    createMany?: ArbitragemCreateManyUsuarioInputEnvelope
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
  }

  export type FreebetUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FreebetCreateWithoutUsuarioInput, FreebetUncheckedCreateWithoutUsuarioInput> | FreebetCreateWithoutUsuarioInput[] | FreebetUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FreebetCreateOrConnectWithoutUsuarioInput | FreebetCreateOrConnectWithoutUsuarioInput[]
    createMany?: FreebetCreateManyUsuarioInputEnvelope
    connect?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
  }

  export type MovimentacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MovimentacaoCreateWithoutUsuarioInput, MovimentacaoUncheckedCreateWithoutUsuarioInput> | MovimentacaoCreateWithoutUsuarioInput[] | MovimentacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutUsuarioInput | MovimentacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: MovimentacaoCreateManyUsuarioInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type FreeSpinUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FreeSpinCreateWithoutUsuarioInput, FreeSpinUncheckedCreateWithoutUsuarioInput> | FreeSpinCreateWithoutUsuarioInput[] | FreeSpinUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FreeSpinCreateOrConnectWithoutUsuarioInput | FreeSpinCreateOrConnectWithoutUsuarioInput[]
    createMany?: FreeSpinCreateManyUsuarioInputEnvelope
    connect?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CasaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CasaCreateWithoutUsuarioInput, CasaUncheckedCreateWithoutUsuarioInput> | CasaCreateWithoutUsuarioInput[] | CasaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CasaCreateOrConnectWithoutUsuarioInput | CasaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CasaUpsertWithWhereUniqueWithoutUsuarioInput | CasaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CasaCreateManyUsuarioInputEnvelope
    set?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    disconnect?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    delete?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    connect?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    update?: CasaUpdateWithWhereUniqueWithoutUsuarioInput | CasaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CasaUpdateManyWithWhereWithoutUsuarioInput | CasaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CasaScalarWhereInput | CasaScalarWhereInput[]
  }

  export type ArbitragemUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ArbitragemCreateWithoutUsuarioInput, ArbitragemUncheckedCreateWithoutUsuarioInput> | ArbitragemCreateWithoutUsuarioInput[] | ArbitragemUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutUsuarioInput | ArbitragemCreateOrConnectWithoutUsuarioInput[]
    upsert?: ArbitragemUpsertWithWhereUniqueWithoutUsuarioInput | ArbitragemUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ArbitragemCreateManyUsuarioInputEnvelope
    set?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    disconnect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    delete?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    update?: ArbitragemUpdateWithWhereUniqueWithoutUsuarioInput | ArbitragemUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ArbitragemUpdateManyWithWhereWithoutUsuarioInput | ArbitragemUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ArbitragemScalarWhereInput | ArbitragemScalarWhereInput[]
  }

  export type FreebetUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FreebetCreateWithoutUsuarioInput, FreebetUncheckedCreateWithoutUsuarioInput> | FreebetCreateWithoutUsuarioInput[] | FreebetUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FreebetCreateOrConnectWithoutUsuarioInput | FreebetCreateOrConnectWithoutUsuarioInput[]
    upsert?: FreebetUpsertWithWhereUniqueWithoutUsuarioInput | FreebetUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FreebetCreateManyUsuarioInputEnvelope
    set?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    disconnect?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    delete?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    connect?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    update?: FreebetUpdateWithWhereUniqueWithoutUsuarioInput | FreebetUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FreebetUpdateManyWithWhereWithoutUsuarioInput | FreebetUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FreebetScalarWhereInput | FreebetScalarWhereInput[]
  }

  export type MovimentacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutUsuarioInput, MovimentacaoUncheckedCreateWithoutUsuarioInput> | MovimentacaoCreateWithoutUsuarioInput[] | MovimentacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutUsuarioInput | MovimentacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutUsuarioInput | MovimentacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MovimentacaoCreateManyUsuarioInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutUsuarioInput | MovimentacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutUsuarioInput | MovimentacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type FreeSpinUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FreeSpinCreateWithoutUsuarioInput, FreeSpinUncheckedCreateWithoutUsuarioInput> | FreeSpinCreateWithoutUsuarioInput[] | FreeSpinUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FreeSpinCreateOrConnectWithoutUsuarioInput | FreeSpinCreateOrConnectWithoutUsuarioInput[]
    upsert?: FreeSpinUpsertWithWhereUniqueWithoutUsuarioInput | FreeSpinUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FreeSpinCreateManyUsuarioInputEnvelope
    set?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    disconnect?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    delete?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    connect?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    update?: FreeSpinUpdateWithWhereUniqueWithoutUsuarioInput | FreeSpinUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FreeSpinUpdateManyWithWhereWithoutUsuarioInput | FreeSpinUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FreeSpinScalarWhereInput | FreeSpinScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CasaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CasaCreateWithoutUsuarioInput, CasaUncheckedCreateWithoutUsuarioInput> | CasaCreateWithoutUsuarioInput[] | CasaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CasaCreateOrConnectWithoutUsuarioInput | CasaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CasaUpsertWithWhereUniqueWithoutUsuarioInput | CasaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CasaCreateManyUsuarioInputEnvelope
    set?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    disconnect?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    delete?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    connect?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    update?: CasaUpdateWithWhereUniqueWithoutUsuarioInput | CasaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CasaUpdateManyWithWhereWithoutUsuarioInput | CasaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CasaScalarWhereInput | CasaScalarWhereInput[]
  }

  export type ArbitragemUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ArbitragemCreateWithoutUsuarioInput, ArbitragemUncheckedCreateWithoutUsuarioInput> | ArbitragemCreateWithoutUsuarioInput[] | ArbitragemUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutUsuarioInput | ArbitragemCreateOrConnectWithoutUsuarioInput[]
    upsert?: ArbitragemUpsertWithWhereUniqueWithoutUsuarioInput | ArbitragemUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ArbitragemCreateManyUsuarioInputEnvelope
    set?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    disconnect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    delete?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    update?: ArbitragemUpdateWithWhereUniqueWithoutUsuarioInput | ArbitragemUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ArbitragemUpdateManyWithWhereWithoutUsuarioInput | ArbitragemUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ArbitragemScalarWhereInput | ArbitragemScalarWhereInput[]
  }

  export type FreebetUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FreebetCreateWithoutUsuarioInput, FreebetUncheckedCreateWithoutUsuarioInput> | FreebetCreateWithoutUsuarioInput[] | FreebetUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FreebetCreateOrConnectWithoutUsuarioInput | FreebetCreateOrConnectWithoutUsuarioInput[]
    upsert?: FreebetUpsertWithWhereUniqueWithoutUsuarioInput | FreebetUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FreebetCreateManyUsuarioInputEnvelope
    set?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    disconnect?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    delete?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    connect?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    update?: FreebetUpdateWithWhereUniqueWithoutUsuarioInput | FreebetUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FreebetUpdateManyWithWhereWithoutUsuarioInput | FreebetUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FreebetScalarWhereInput | FreebetScalarWhereInput[]
  }

  export type MovimentacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutUsuarioInput, MovimentacaoUncheckedCreateWithoutUsuarioInput> | MovimentacaoCreateWithoutUsuarioInput[] | MovimentacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutUsuarioInput | MovimentacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutUsuarioInput | MovimentacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MovimentacaoCreateManyUsuarioInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutUsuarioInput | MovimentacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutUsuarioInput | MovimentacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type FreeSpinUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FreeSpinCreateWithoutUsuarioInput, FreeSpinUncheckedCreateWithoutUsuarioInput> | FreeSpinCreateWithoutUsuarioInput[] | FreeSpinUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FreeSpinCreateOrConnectWithoutUsuarioInput | FreeSpinCreateOrConnectWithoutUsuarioInput[]
    upsert?: FreeSpinUpsertWithWhereUniqueWithoutUsuarioInput | FreeSpinUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FreeSpinCreateManyUsuarioInputEnvelope
    set?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    disconnect?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    delete?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    connect?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    update?: FreeSpinUpdateWithWhereUniqueWithoutUsuarioInput | FreeSpinUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FreeSpinUpdateManyWithWhereWithoutUsuarioInput | FreeSpinUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FreeSpinScalarWhereInput | FreeSpinScalarWhereInput[]
  }

  export type ArbitragemCreateNestedManyWithoutCasa1Input = {
    create?: XOR<ArbitragemCreateWithoutCasa1Input, ArbitragemUncheckedCreateWithoutCasa1Input> | ArbitragemCreateWithoutCasa1Input[] | ArbitragemUncheckedCreateWithoutCasa1Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa1Input | ArbitragemCreateOrConnectWithoutCasa1Input[]
    createMany?: ArbitragemCreateManyCasa1InputEnvelope
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
  }

  export type ArbitragemCreateNestedManyWithoutCasa2Input = {
    create?: XOR<ArbitragemCreateWithoutCasa2Input, ArbitragemUncheckedCreateWithoutCasa2Input> | ArbitragemCreateWithoutCasa2Input[] | ArbitragemUncheckedCreateWithoutCasa2Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa2Input | ArbitragemCreateOrConnectWithoutCasa2Input[]
    createMany?: ArbitragemCreateManyCasa2InputEnvelope
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
  }

  export type ArbitragemCreateNestedManyWithoutCasa3Input = {
    create?: XOR<ArbitragemCreateWithoutCasa3Input, ArbitragemUncheckedCreateWithoutCasa3Input> | ArbitragemCreateWithoutCasa3Input[] | ArbitragemUncheckedCreateWithoutCasa3Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa3Input | ArbitragemCreateOrConnectWithoutCasa3Input[]
    createMany?: ArbitragemCreateManyCasa3InputEnvelope
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
  }

  export type ArbitragemCreateNestedManyWithoutCasa4Input = {
    create?: XOR<ArbitragemCreateWithoutCasa4Input, ArbitragemUncheckedCreateWithoutCasa4Input> | ArbitragemCreateWithoutCasa4Input[] | ArbitragemUncheckedCreateWithoutCasa4Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa4Input | ArbitragemCreateOrConnectWithoutCasa4Input[]
    createMany?: ArbitragemCreateManyCasa4InputEnvelope
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
  }

  export type FreebetCreateNestedManyWithoutCasaInput = {
    create?: XOR<FreebetCreateWithoutCasaInput, FreebetUncheckedCreateWithoutCasaInput> | FreebetCreateWithoutCasaInput[] | FreebetUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: FreebetCreateOrConnectWithoutCasaInput | FreebetCreateOrConnectWithoutCasaInput[]
    createMany?: FreebetCreateManyCasaInputEnvelope
    connect?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
  }

  export type MovimentacaoCreateNestedManyWithoutCasaInput = {
    create?: XOR<MovimentacaoCreateWithoutCasaInput, MovimentacaoUncheckedCreateWithoutCasaInput> | MovimentacaoCreateWithoutCasaInput[] | MovimentacaoUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutCasaInput | MovimentacaoCreateOrConnectWithoutCasaInput[]
    createMany?: MovimentacaoCreateManyCasaInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type FreeSpinCreateNestedManyWithoutCasaInput = {
    create?: XOR<FreeSpinCreateWithoutCasaInput, FreeSpinUncheckedCreateWithoutCasaInput> | FreeSpinCreateWithoutCasaInput[] | FreeSpinUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: FreeSpinCreateOrConnectWithoutCasaInput | FreeSpinCreateOrConnectWithoutCasaInput[]
    createMany?: FreeSpinCreateManyCasaInputEnvelope
    connect?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutCasasInput = {
    create?: XOR<UsuarioCreateWithoutCasasInput, UsuarioUncheckedCreateWithoutCasasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCasasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ArbitragemUncheckedCreateNestedManyWithoutCasa1Input = {
    create?: XOR<ArbitragemCreateWithoutCasa1Input, ArbitragemUncheckedCreateWithoutCasa1Input> | ArbitragemCreateWithoutCasa1Input[] | ArbitragemUncheckedCreateWithoutCasa1Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa1Input | ArbitragemCreateOrConnectWithoutCasa1Input[]
    createMany?: ArbitragemCreateManyCasa1InputEnvelope
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
  }

  export type ArbitragemUncheckedCreateNestedManyWithoutCasa2Input = {
    create?: XOR<ArbitragemCreateWithoutCasa2Input, ArbitragemUncheckedCreateWithoutCasa2Input> | ArbitragemCreateWithoutCasa2Input[] | ArbitragemUncheckedCreateWithoutCasa2Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa2Input | ArbitragemCreateOrConnectWithoutCasa2Input[]
    createMany?: ArbitragemCreateManyCasa2InputEnvelope
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
  }

  export type ArbitragemUncheckedCreateNestedManyWithoutCasa3Input = {
    create?: XOR<ArbitragemCreateWithoutCasa3Input, ArbitragemUncheckedCreateWithoutCasa3Input> | ArbitragemCreateWithoutCasa3Input[] | ArbitragemUncheckedCreateWithoutCasa3Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa3Input | ArbitragemCreateOrConnectWithoutCasa3Input[]
    createMany?: ArbitragemCreateManyCasa3InputEnvelope
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
  }

  export type ArbitragemUncheckedCreateNestedManyWithoutCasa4Input = {
    create?: XOR<ArbitragemCreateWithoutCasa4Input, ArbitragemUncheckedCreateWithoutCasa4Input> | ArbitragemCreateWithoutCasa4Input[] | ArbitragemUncheckedCreateWithoutCasa4Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa4Input | ArbitragemCreateOrConnectWithoutCasa4Input[]
    createMany?: ArbitragemCreateManyCasa4InputEnvelope
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
  }

  export type FreebetUncheckedCreateNestedManyWithoutCasaInput = {
    create?: XOR<FreebetCreateWithoutCasaInput, FreebetUncheckedCreateWithoutCasaInput> | FreebetCreateWithoutCasaInput[] | FreebetUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: FreebetCreateOrConnectWithoutCasaInput | FreebetCreateOrConnectWithoutCasaInput[]
    createMany?: FreebetCreateManyCasaInputEnvelope
    connect?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
  }

  export type MovimentacaoUncheckedCreateNestedManyWithoutCasaInput = {
    create?: XOR<MovimentacaoCreateWithoutCasaInput, MovimentacaoUncheckedCreateWithoutCasaInput> | MovimentacaoCreateWithoutCasaInput[] | MovimentacaoUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutCasaInput | MovimentacaoCreateOrConnectWithoutCasaInput[]
    createMany?: MovimentacaoCreateManyCasaInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type FreeSpinUncheckedCreateNestedManyWithoutCasaInput = {
    create?: XOR<FreeSpinCreateWithoutCasaInput, FreeSpinUncheckedCreateWithoutCasaInput> | FreeSpinCreateWithoutCasaInput[] | FreeSpinUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: FreeSpinCreateOrConnectWithoutCasaInput | FreeSpinCreateOrConnectWithoutCasaInput[]
    createMany?: FreeSpinCreateManyCasaInputEnvelope
    connect?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArbitragemUpdateManyWithoutCasa1NestedInput = {
    create?: XOR<ArbitragemCreateWithoutCasa1Input, ArbitragemUncheckedCreateWithoutCasa1Input> | ArbitragemCreateWithoutCasa1Input[] | ArbitragemUncheckedCreateWithoutCasa1Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa1Input | ArbitragemCreateOrConnectWithoutCasa1Input[]
    upsert?: ArbitragemUpsertWithWhereUniqueWithoutCasa1Input | ArbitragemUpsertWithWhereUniqueWithoutCasa1Input[]
    createMany?: ArbitragemCreateManyCasa1InputEnvelope
    set?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    disconnect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    delete?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    update?: ArbitragemUpdateWithWhereUniqueWithoutCasa1Input | ArbitragemUpdateWithWhereUniqueWithoutCasa1Input[]
    updateMany?: ArbitragemUpdateManyWithWhereWithoutCasa1Input | ArbitragemUpdateManyWithWhereWithoutCasa1Input[]
    deleteMany?: ArbitragemScalarWhereInput | ArbitragemScalarWhereInput[]
  }

  export type ArbitragemUpdateManyWithoutCasa2NestedInput = {
    create?: XOR<ArbitragemCreateWithoutCasa2Input, ArbitragemUncheckedCreateWithoutCasa2Input> | ArbitragemCreateWithoutCasa2Input[] | ArbitragemUncheckedCreateWithoutCasa2Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa2Input | ArbitragemCreateOrConnectWithoutCasa2Input[]
    upsert?: ArbitragemUpsertWithWhereUniqueWithoutCasa2Input | ArbitragemUpsertWithWhereUniqueWithoutCasa2Input[]
    createMany?: ArbitragemCreateManyCasa2InputEnvelope
    set?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    disconnect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    delete?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    update?: ArbitragemUpdateWithWhereUniqueWithoutCasa2Input | ArbitragemUpdateWithWhereUniqueWithoutCasa2Input[]
    updateMany?: ArbitragemUpdateManyWithWhereWithoutCasa2Input | ArbitragemUpdateManyWithWhereWithoutCasa2Input[]
    deleteMany?: ArbitragemScalarWhereInput | ArbitragemScalarWhereInput[]
  }

  export type ArbitragemUpdateManyWithoutCasa3NestedInput = {
    create?: XOR<ArbitragemCreateWithoutCasa3Input, ArbitragemUncheckedCreateWithoutCasa3Input> | ArbitragemCreateWithoutCasa3Input[] | ArbitragemUncheckedCreateWithoutCasa3Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa3Input | ArbitragemCreateOrConnectWithoutCasa3Input[]
    upsert?: ArbitragemUpsertWithWhereUniqueWithoutCasa3Input | ArbitragemUpsertWithWhereUniqueWithoutCasa3Input[]
    createMany?: ArbitragemCreateManyCasa3InputEnvelope
    set?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    disconnect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    delete?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    update?: ArbitragemUpdateWithWhereUniqueWithoutCasa3Input | ArbitragemUpdateWithWhereUniqueWithoutCasa3Input[]
    updateMany?: ArbitragemUpdateManyWithWhereWithoutCasa3Input | ArbitragemUpdateManyWithWhereWithoutCasa3Input[]
    deleteMany?: ArbitragemScalarWhereInput | ArbitragemScalarWhereInput[]
  }

  export type ArbitragemUpdateManyWithoutCasa4NestedInput = {
    create?: XOR<ArbitragemCreateWithoutCasa4Input, ArbitragemUncheckedCreateWithoutCasa4Input> | ArbitragemCreateWithoutCasa4Input[] | ArbitragemUncheckedCreateWithoutCasa4Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa4Input | ArbitragemCreateOrConnectWithoutCasa4Input[]
    upsert?: ArbitragemUpsertWithWhereUniqueWithoutCasa4Input | ArbitragemUpsertWithWhereUniqueWithoutCasa4Input[]
    createMany?: ArbitragemCreateManyCasa4InputEnvelope
    set?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    disconnect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    delete?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    update?: ArbitragemUpdateWithWhereUniqueWithoutCasa4Input | ArbitragemUpdateWithWhereUniqueWithoutCasa4Input[]
    updateMany?: ArbitragemUpdateManyWithWhereWithoutCasa4Input | ArbitragemUpdateManyWithWhereWithoutCasa4Input[]
    deleteMany?: ArbitragemScalarWhereInput | ArbitragemScalarWhereInput[]
  }

  export type FreebetUpdateManyWithoutCasaNestedInput = {
    create?: XOR<FreebetCreateWithoutCasaInput, FreebetUncheckedCreateWithoutCasaInput> | FreebetCreateWithoutCasaInput[] | FreebetUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: FreebetCreateOrConnectWithoutCasaInput | FreebetCreateOrConnectWithoutCasaInput[]
    upsert?: FreebetUpsertWithWhereUniqueWithoutCasaInput | FreebetUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: FreebetCreateManyCasaInputEnvelope
    set?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    disconnect?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    delete?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    connect?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    update?: FreebetUpdateWithWhereUniqueWithoutCasaInput | FreebetUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: FreebetUpdateManyWithWhereWithoutCasaInput | FreebetUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: FreebetScalarWhereInput | FreebetScalarWhereInput[]
  }

  export type MovimentacaoUpdateManyWithoutCasaNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutCasaInput, MovimentacaoUncheckedCreateWithoutCasaInput> | MovimentacaoCreateWithoutCasaInput[] | MovimentacaoUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutCasaInput | MovimentacaoCreateOrConnectWithoutCasaInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutCasaInput | MovimentacaoUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: MovimentacaoCreateManyCasaInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutCasaInput | MovimentacaoUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutCasaInput | MovimentacaoUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type FreeSpinUpdateManyWithoutCasaNestedInput = {
    create?: XOR<FreeSpinCreateWithoutCasaInput, FreeSpinUncheckedCreateWithoutCasaInput> | FreeSpinCreateWithoutCasaInput[] | FreeSpinUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: FreeSpinCreateOrConnectWithoutCasaInput | FreeSpinCreateOrConnectWithoutCasaInput[]
    upsert?: FreeSpinUpsertWithWhereUniqueWithoutCasaInput | FreeSpinUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: FreeSpinCreateManyCasaInputEnvelope
    set?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    disconnect?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    delete?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    connect?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    update?: FreeSpinUpdateWithWhereUniqueWithoutCasaInput | FreeSpinUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: FreeSpinUpdateManyWithWhereWithoutCasaInput | FreeSpinUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: FreeSpinScalarWhereInput | FreeSpinScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutCasasNestedInput = {
    create?: XOR<UsuarioCreateWithoutCasasInput, UsuarioUncheckedCreateWithoutCasasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCasasInput
    upsert?: UsuarioUpsertWithoutCasasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCasasInput, UsuarioUpdateWithoutCasasInput>, UsuarioUncheckedUpdateWithoutCasasInput>
  }

  export type ArbitragemUncheckedUpdateManyWithoutCasa1NestedInput = {
    create?: XOR<ArbitragemCreateWithoutCasa1Input, ArbitragemUncheckedCreateWithoutCasa1Input> | ArbitragemCreateWithoutCasa1Input[] | ArbitragemUncheckedCreateWithoutCasa1Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa1Input | ArbitragemCreateOrConnectWithoutCasa1Input[]
    upsert?: ArbitragemUpsertWithWhereUniqueWithoutCasa1Input | ArbitragemUpsertWithWhereUniqueWithoutCasa1Input[]
    createMany?: ArbitragemCreateManyCasa1InputEnvelope
    set?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    disconnect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    delete?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    update?: ArbitragemUpdateWithWhereUniqueWithoutCasa1Input | ArbitragemUpdateWithWhereUniqueWithoutCasa1Input[]
    updateMany?: ArbitragemUpdateManyWithWhereWithoutCasa1Input | ArbitragemUpdateManyWithWhereWithoutCasa1Input[]
    deleteMany?: ArbitragemScalarWhereInput | ArbitragemScalarWhereInput[]
  }

  export type ArbitragemUncheckedUpdateManyWithoutCasa2NestedInput = {
    create?: XOR<ArbitragemCreateWithoutCasa2Input, ArbitragemUncheckedCreateWithoutCasa2Input> | ArbitragemCreateWithoutCasa2Input[] | ArbitragemUncheckedCreateWithoutCasa2Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa2Input | ArbitragemCreateOrConnectWithoutCasa2Input[]
    upsert?: ArbitragemUpsertWithWhereUniqueWithoutCasa2Input | ArbitragemUpsertWithWhereUniqueWithoutCasa2Input[]
    createMany?: ArbitragemCreateManyCasa2InputEnvelope
    set?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    disconnect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    delete?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    update?: ArbitragemUpdateWithWhereUniqueWithoutCasa2Input | ArbitragemUpdateWithWhereUniqueWithoutCasa2Input[]
    updateMany?: ArbitragemUpdateManyWithWhereWithoutCasa2Input | ArbitragemUpdateManyWithWhereWithoutCasa2Input[]
    deleteMany?: ArbitragemScalarWhereInput | ArbitragemScalarWhereInput[]
  }

  export type ArbitragemUncheckedUpdateManyWithoutCasa3NestedInput = {
    create?: XOR<ArbitragemCreateWithoutCasa3Input, ArbitragemUncheckedCreateWithoutCasa3Input> | ArbitragemCreateWithoutCasa3Input[] | ArbitragemUncheckedCreateWithoutCasa3Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa3Input | ArbitragemCreateOrConnectWithoutCasa3Input[]
    upsert?: ArbitragemUpsertWithWhereUniqueWithoutCasa3Input | ArbitragemUpsertWithWhereUniqueWithoutCasa3Input[]
    createMany?: ArbitragemCreateManyCasa3InputEnvelope
    set?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    disconnect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    delete?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    update?: ArbitragemUpdateWithWhereUniqueWithoutCasa3Input | ArbitragemUpdateWithWhereUniqueWithoutCasa3Input[]
    updateMany?: ArbitragemUpdateManyWithWhereWithoutCasa3Input | ArbitragemUpdateManyWithWhereWithoutCasa3Input[]
    deleteMany?: ArbitragemScalarWhereInput | ArbitragemScalarWhereInput[]
  }

  export type ArbitragemUncheckedUpdateManyWithoutCasa4NestedInput = {
    create?: XOR<ArbitragemCreateWithoutCasa4Input, ArbitragemUncheckedCreateWithoutCasa4Input> | ArbitragemCreateWithoutCasa4Input[] | ArbitragemUncheckedCreateWithoutCasa4Input[]
    connectOrCreate?: ArbitragemCreateOrConnectWithoutCasa4Input | ArbitragemCreateOrConnectWithoutCasa4Input[]
    upsert?: ArbitragemUpsertWithWhereUniqueWithoutCasa4Input | ArbitragemUpsertWithWhereUniqueWithoutCasa4Input[]
    createMany?: ArbitragemCreateManyCasa4InputEnvelope
    set?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    disconnect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    delete?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    connect?: ArbitragemWhereUniqueInput | ArbitragemWhereUniqueInput[]
    update?: ArbitragemUpdateWithWhereUniqueWithoutCasa4Input | ArbitragemUpdateWithWhereUniqueWithoutCasa4Input[]
    updateMany?: ArbitragemUpdateManyWithWhereWithoutCasa4Input | ArbitragemUpdateManyWithWhereWithoutCasa4Input[]
    deleteMany?: ArbitragemScalarWhereInput | ArbitragemScalarWhereInput[]
  }

  export type FreebetUncheckedUpdateManyWithoutCasaNestedInput = {
    create?: XOR<FreebetCreateWithoutCasaInput, FreebetUncheckedCreateWithoutCasaInput> | FreebetCreateWithoutCasaInput[] | FreebetUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: FreebetCreateOrConnectWithoutCasaInput | FreebetCreateOrConnectWithoutCasaInput[]
    upsert?: FreebetUpsertWithWhereUniqueWithoutCasaInput | FreebetUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: FreebetCreateManyCasaInputEnvelope
    set?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    disconnect?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    delete?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    connect?: FreebetWhereUniqueInput | FreebetWhereUniqueInput[]
    update?: FreebetUpdateWithWhereUniqueWithoutCasaInput | FreebetUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: FreebetUpdateManyWithWhereWithoutCasaInput | FreebetUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: FreebetScalarWhereInput | FreebetScalarWhereInput[]
  }

  export type MovimentacaoUncheckedUpdateManyWithoutCasaNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutCasaInput, MovimentacaoUncheckedCreateWithoutCasaInput> | MovimentacaoCreateWithoutCasaInput[] | MovimentacaoUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutCasaInput | MovimentacaoCreateOrConnectWithoutCasaInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutCasaInput | MovimentacaoUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: MovimentacaoCreateManyCasaInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutCasaInput | MovimentacaoUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutCasaInput | MovimentacaoUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type FreeSpinUncheckedUpdateManyWithoutCasaNestedInput = {
    create?: XOR<FreeSpinCreateWithoutCasaInput, FreeSpinUncheckedCreateWithoutCasaInput> | FreeSpinCreateWithoutCasaInput[] | FreeSpinUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: FreeSpinCreateOrConnectWithoutCasaInput | FreeSpinCreateOrConnectWithoutCasaInput[]
    upsert?: FreeSpinUpsertWithWhereUniqueWithoutCasaInput | FreeSpinUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: FreeSpinCreateManyCasaInputEnvelope
    set?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    disconnect?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    delete?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    connect?: FreeSpinWhereUniqueInput | FreeSpinWhereUniqueInput[]
    update?: FreeSpinUpdateWithWhereUniqueWithoutCasaInput | FreeSpinUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: FreeSpinUpdateManyWithWhereWithoutCasaInput | FreeSpinUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: FreeSpinScalarWhereInput | FreeSpinScalarWhereInput[]
  }

  export type CasaCreateNestedOneWithoutArbitragens1Input = {
    create?: XOR<CasaCreateWithoutArbitragens1Input, CasaUncheckedCreateWithoutArbitragens1Input>
    connectOrCreate?: CasaCreateOrConnectWithoutArbitragens1Input
    connect?: CasaWhereUniqueInput
  }

  export type CasaCreateNestedOneWithoutArbitragens2Input = {
    create?: XOR<CasaCreateWithoutArbitragens2Input, CasaUncheckedCreateWithoutArbitragens2Input>
    connectOrCreate?: CasaCreateOrConnectWithoutArbitragens2Input
    connect?: CasaWhereUniqueInput
  }

  export type CasaCreateNestedOneWithoutArbitragens3Input = {
    create?: XOR<CasaCreateWithoutArbitragens3Input, CasaUncheckedCreateWithoutArbitragens3Input>
    connectOrCreate?: CasaCreateOrConnectWithoutArbitragens3Input
    connect?: CasaWhereUniqueInput
  }

  export type CasaCreateNestedOneWithoutArbitragens4Input = {
    create?: XOR<CasaCreateWithoutArbitragens4Input, CasaUncheckedCreateWithoutArbitragens4Input>
    connectOrCreate?: CasaCreateOrConnectWithoutArbitragens4Input
    connect?: CasaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutArbitragensInput = {
    create?: XOR<UsuarioCreateWithoutArbitragensInput, UsuarioUncheckedCreateWithoutArbitragensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutArbitragensInput
    connect?: UsuarioWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CasaUpdateOneRequiredWithoutArbitragens1NestedInput = {
    create?: XOR<CasaCreateWithoutArbitragens1Input, CasaUncheckedCreateWithoutArbitragens1Input>
    connectOrCreate?: CasaCreateOrConnectWithoutArbitragens1Input
    upsert?: CasaUpsertWithoutArbitragens1Input
    connect?: CasaWhereUniqueInput
    update?: XOR<XOR<CasaUpdateToOneWithWhereWithoutArbitragens1Input, CasaUpdateWithoutArbitragens1Input>, CasaUncheckedUpdateWithoutArbitragens1Input>
  }

  export type CasaUpdateOneRequiredWithoutArbitragens2NestedInput = {
    create?: XOR<CasaCreateWithoutArbitragens2Input, CasaUncheckedCreateWithoutArbitragens2Input>
    connectOrCreate?: CasaCreateOrConnectWithoutArbitragens2Input
    upsert?: CasaUpsertWithoutArbitragens2Input
    connect?: CasaWhereUniqueInput
    update?: XOR<XOR<CasaUpdateToOneWithWhereWithoutArbitragens2Input, CasaUpdateWithoutArbitragens2Input>, CasaUncheckedUpdateWithoutArbitragens2Input>
  }

  export type CasaUpdateOneWithoutArbitragens3NestedInput = {
    create?: XOR<CasaCreateWithoutArbitragens3Input, CasaUncheckedCreateWithoutArbitragens3Input>
    connectOrCreate?: CasaCreateOrConnectWithoutArbitragens3Input
    upsert?: CasaUpsertWithoutArbitragens3Input
    disconnect?: CasaWhereInput | boolean
    delete?: CasaWhereInput | boolean
    connect?: CasaWhereUniqueInput
    update?: XOR<XOR<CasaUpdateToOneWithWhereWithoutArbitragens3Input, CasaUpdateWithoutArbitragens3Input>, CasaUncheckedUpdateWithoutArbitragens3Input>
  }

  export type CasaUpdateOneWithoutArbitragens4NestedInput = {
    create?: XOR<CasaCreateWithoutArbitragens4Input, CasaUncheckedCreateWithoutArbitragens4Input>
    connectOrCreate?: CasaCreateOrConnectWithoutArbitragens4Input
    upsert?: CasaUpsertWithoutArbitragens4Input
    disconnect?: CasaWhereInput | boolean
    delete?: CasaWhereInput | boolean
    connect?: CasaWhereUniqueInput
    update?: XOR<XOR<CasaUpdateToOneWithWhereWithoutArbitragens4Input, CasaUpdateWithoutArbitragens4Input>, CasaUncheckedUpdateWithoutArbitragens4Input>
  }

  export type UsuarioUpdateOneRequiredWithoutArbitragensNestedInput = {
    create?: XOR<UsuarioCreateWithoutArbitragensInput, UsuarioUncheckedCreateWithoutArbitragensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutArbitragensInput
    upsert?: UsuarioUpsertWithoutArbitragensInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutArbitragensInput, UsuarioUpdateWithoutArbitragensInput>, UsuarioUncheckedUpdateWithoutArbitragensInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CasaCreateNestedOneWithoutFreebetsInput = {
    create?: XOR<CasaCreateWithoutFreebetsInput, CasaUncheckedCreateWithoutFreebetsInput>
    connectOrCreate?: CasaCreateOrConnectWithoutFreebetsInput
    connect?: CasaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutFreebetsInput = {
    create?: XOR<UsuarioCreateWithoutFreebetsInput, UsuarioUncheckedCreateWithoutFreebetsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFreebetsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CasaUpdateOneRequiredWithoutFreebetsNestedInput = {
    create?: XOR<CasaCreateWithoutFreebetsInput, CasaUncheckedCreateWithoutFreebetsInput>
    connectOrCreate?: CasaCreateOrConnectWithoutFreebetsInput
    upsert?: CasaUpsertWithoutFreebetsInput
    connect?: CasaWhereUniqueInput
    update?: XOR<XOR<CasaUpdateToOneWithWhereWithoutFreebetsInput, CasaUpdateWithoutFreebetsInput>, CasaUncheckedUpdateWithoutFreebetsInput>
  }

  export type UsuarioUpdateOneRequiredWithoutFreebetsNestedInput = {
    create?: XOR<UsuarioCreateWithoutFreebetsInput, UsuarioUncheckedCreateWithoutFreebetsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFreebetsInput
    upsert?: UsuarioUpsertWithoutFreebetsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFreebetsInput, UsuarioUpdateWithoutFreebetsInput>, UsuarioUncheckedUpdateWithoutFreebetsInput>
  }

  export type CasaCreateNestedOneWithoutMovimentacoesInput = {
    create?: XOR<CasaCreateWithoutMovimentacoesInput, CasaUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: CasaCreateOrConnectWithoutMovimentacoesInput
    connect?: CasaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutMovimentacoesInput = {
    create?: XOR<UsuarioCreateWithoutMovimentacoesInput, UsuarioUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMovimentacoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CasaUpdateOneRequiredWithoutMovimentacoesNestedInput = {
    create?: XOR<CasaCreateWithoutMovimentacoesInput, CasaUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: CasaCreateOrConnectWithoutMovimentacoesInput
    upsert?: CasaUpsertWithoutMovimentacoesInput
    connect?: CasaWhereUniqueInput
    update?: XOR<XOR<CasaUpdateToOneWithWhereWithoutMovimentacoesInput, CasaUpdateWithoutMovimentacoesInput>, CasaUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutMovimentacoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutMovimentacoesInput, UsuarioUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMovimentacoesInput
    upsert?: UsuarioUpsertWithoutMovimentacoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMovimentacoesInput, UsuarioUpdateWithoutMovimentacoesInput>, UsuarioUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type CasaCreateNestedOneWithoutFreeSpinsInput = {
    create?: XOR<CasaCreateWithoutFreeSpinsInput, CasaUncheckedCreateWithoutFreeSpinsInput>
    connectOrCreate?: CasaCreateOrConnectWithoutFreeSpinsInput
    connect?: CasaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutFreeSpinsInput = {
    create?: XOR<UsuarioCreateWithoutFreeSpinsInput, UsuarioUncheckedCreateWithoutFreeSpinsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFreeSpinsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CasaUpdateOneRequiredWithoutFreeSpinsNestedInput = {
    create?: XOR<CasaCreateWithoutFreeSpinsInput, CasaUncheckedCreateWithoutFreeSpinsInput>
    connectOrCreate?: CasaCreateOrConnectWithoutFreeSpinsInput
    upsert?: CasaUpsertWithoutFreeSpinsInput
    connect?: CasaWhereUniqueInput
    update?: XOR<XOR<CasaUpdateToOneWithWhereWithoutFreeSpinsInput, CasaUpdateWithoutFreeSpinsInput>, CasaUncheckedUpdateWithoutFreeSpinsInput>
  }

  export type UsuarioUpdateOneRequiredWithoutFreeSpinsNestedInput = {
    create?: XOR<UsuarioCreateWithoutFreeSpinsInput, UsuarioUncheckedCreateWithoutFreeSpinsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFreeSpinsInput
    upsert?: UsuarioUpsertWithoutFreeSpinsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFreeSpinsInput, UsuarioUpdateWithoutFreeSpinsInput>, UsuarioUncheckedUpdateWithoutFreeSpinsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CasaCreateWithoutUsuarioInput = {
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    arbitragens1?: ArbitragemCreateNestedManyWithoutCasa1Input
    arbitragens2?: ArbitragemCreateNestedManyWithoutCasa2Input
    arbitragens3?: ArbitragemCreateNestedManyWithoutCasa3Input
    arbitragens4?: ArbitragemCreateNestedManyWithoutCasa4Input
    freebets?: FreebetCreateNestedManyWithoutCasaInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinCreateNestedManyWithoutCasaInput
  }

  export type CasaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    arbitragens1?: ArbitragemUncheckedCreateNestedManyWithoutCasa1Input
    arbitragens2?: ArbitragemUncheckedCreateNestedManyWithoutCasa2Input
    arbitragens3?: ArbitragemUncheckedCreateNestedManyWithoutCasa3Input
    arbitragens4?: ArbitragemUncheckedCreateNestedManyWithoutCasa4Input
    freebets?: FreebetUncheckedCreateNestedManyWithoutCasaInput
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaCreateOrConnectWithoutUsuarioInput = {
    where: CasaWhereUniqueInput
    create: XOR<CasaCreateWithoutUsuarioInput, CasaUncheckedCreateWithoutUsuarioInput>
  }

  export type CasaCreateManyUsuarioInputEnvelope = {
    data: CasaCreateManyUsuarioInput | CasaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ArbitragemCreateWithoutUsuarioInput = {
    evento: string
    esporte: string
    tipo?: string
    odd1: number
    stake1: number
    resultado1: string
    odd2: number
    stake2: number
    resultado2: string
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    casa1: CasaCreateNestedOneWithoutArbitragens1Input
    casa2: CasaCreateNestedOneWithoutArbitragens2Input
    casa3?: CasaCreateNestedOneWithoutArbitragens3Input
    casa4?: CasaCreateNestedOneWithoutArbitragens4Input
  }

  export type ArbitragemUncheckedCreateWithoutUsuarioInput = {
    id?: number
    evento: string
    esporte: string
    tipo?: string
    casa1Id: number
    odd1: number
    stake1: number
    resultado1: string
    casa2Id: number
    odd2: number
    stake2: number
    resultado2: string
    casa3Id?: number | null
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    casa4Id?: number | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
  }

  export type ArbitragemCreateOrConnectWithoutUsuarioInput = {
    where: ArbitragemWhereUniqueInput
    create: XOR<ArbitragemCreateWithoutUsuarioInput, ArbitragemUncheckedCreateWithoutUsuarioInput>
  }

  export type ArbitragemCreateManyUsuarioInputEnvelope = {
    data: ArbitragemCreateManyUsuarioInput | ArbitragemCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FreebetCreateWithoutUsuarioInput = {
    valor: number
    tipo: string
    status?: string
    dataObtencao: Date | string
    dataExpiracao: Date | string
    valorExtraido?: number | null
    estrategia?: string | null
    casa: CasaCreateNestedOneWithoutFreebetsInput
  }

  export type FreebetUncheckedCreateWithoutUsuarioInput = {
    id?: number
    casaId: number
    valor: number
    tipo: string
    status?: string
    dataObtencao: Date | string
    dataExpiracao: Date | string
    valorExtraido?: number | null
    estrategia?: string | null
  }

  export type FreebetCreateOrConnectWithoutUsuarioInput = {
    where: FreebetWhereUniqueInput
    create: XOR<FreebetCreateWithoutUsuarioInput, FreebetUncheckedCreateWithoutUsuarioInput>
  }

  export type FreebetCreateManyUsuarioInputEnvelope = {
    data: FreebetCreateManyUsuarioInput | FreebetCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type MovimentacaoCreateWithoutUsuarioInput = {
    tipo: string
    valor: number
    data?: Date | string
    observacao?: string | null
    casa: CasaCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    casaId: number
    tipo: string
    valor: number
    data?: Date | string
    observacao?: string | null
  }

  export type MovimentacaoCreateOrConnectWithoutUsuarioInput = {
    where: MovimentacaoWhereUniqueInput
    create: XOR<MovimentacaoCreateWithoutUsuarioInput, MovimentacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type MovimentacaoCreateManyUsuarioInputEnvelope = {
    data: MovimentacaoCreateManyUsuarioInput | MovimentacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FreeSpinCreateWithoutUsuarioInput = {
    valorGanho: number
    data?: Date | string
    casa: CasaCreateNestedOneWithoutFreeSpinsInput
  }

  export type FreeSpinUncheckedCreateWithoutUsuarioInput = {
    id?: number
    casaId: number
    valorGanho: number
    data?: Date | string
  }

  export type FreeSpinCreateOrConnectWithoutUsuarioInput = {
    where: FreeSpinWhereUniqueInput
    create: XOR<FreeSpinCreateWithoutUsuarioInput, FreeSpinUncheckedCreateWithoutUsuarioInput>
  }

  export type FreeSpinCreateManyUsuarioInputEnvelope = {
    data: FreeSpinCreateManyUsuarioInput | FreeSpinCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CasaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CasaWhereUniqueInput
    update: XOR<CasaUpdateWithoutUsuarioInput, CasaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CasaCreateWithoutUsuarioInput, CasaUncheckedCreateWithoutUsuarioInput>
  }

  export type CasaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CasaWhereUniqueInput
    data: XOR<CasaUpdateWithoutUsuarioInput, CasaUncheckedUpdateWithoutUsuarioInput>
  }

  export type CasaUpdateManyWithWhereWithoutUsuarioInput = {
    where: CasaScalarWhereInput
    data: XOR<CasaUpdateManyMutationInput, CasaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CasaScalarWhereInput = {
    AND?: CasaScalarWhereInput | CasaScalarWhereInput[]
    OR?: CasaScalarWhereInput[]
    NOT?: CasaScalarWhereInput | CasaScalarWhereInput[]
    id?: IntFilter<"Casa"> | number
    nome?: StringFilter<"Casa"> | string
    pais?: StringFilter<"Casa"> | string
    licenca?: StringNullableFilter<"Casa"> | string | null
    avaliacao?: FloatNullableFilter<"Casa"> | number | null
    status?: StringFilter<"Casa"> | string
    bonusBoasVindas?: StringNullableFilter<"Casa"> | string | null
    bonusRecarga?: StringNullableFilter<"Casa"> | string | null
    tempoSaque?: StringNullableFilter<"Casa"> | string | null
    metodosPagamento?: StringNullableFilter<"Casa"> | string | null
    telefone?: StringNullableFilter<"Casa"> | string | null
    email?: StringNullableFilter<"Casa"> | string | null
    site?: StringNullableFilter<"Casa"> | string | null
    observacoes?: StringNullableFilter<"Casa"> | string | null
    usuarioId?: IntFilter<"Casa"> | number
  }

  export type ArbitragemUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ArbitragemWhereUniqueInput
    update: XOR<ArbitragemUpdateWithoutUsuarioInput, ArbitragemUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ArbitragemCreateWithoutUsuarioInput, ArbitragemUncheckedCreateWithoutUsuarioInput>
  }

  export type ArbitragemUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ArbitragemWhereUniqueInput
    data: XOR<ArbitragemUpdateWithoutUsuarioInput, ArbitragemUncheckedUpdateWithoutUsuarioInput>
  }

  export type ArbitragemUpdateManyWithWhereWithoutUsuarioInput = {
    where: ArbitragemScalarWhereInput
    data: XOR<ArbitragemUpdateManyMutationInput, ArbitragemUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ArbitragemScalarWhereInput = {
    AND?: ArbitragemScalarWhereInput | ArbitragemScalarWhereInput[]
    OR?: ArbitragemScalarWhereInput[]
    NOT?: ArbitragemScalarWhereInput | ArbitragemScalarWhereInput[]
    id?: IntFilter<"Arbitragem"> | number
    evento?: StringFilter<"Arbitragem"> | string
    esporte?: StringFilter<"Arbitragem"> | string
    tipo?: StringFilter<"Arbitragem"> | string
    casa1Id?: IntFilter<"Arbitragem"> | number
    odd1?: FloatFilter<"Arbitragem"> | number
    stake1?: FloatFilter<"Arbitragem"> | number
    resultado1?: StringFilter<"Arbitragem"> | string
    casa2Id?: IntFilter<"Arbitragem"> | number
    odd2?: FloatFilter<"Arbitragem"> | number
    stake2?: FloatFilter<"Arbitragem"> | number
    resultado2?: StringFilter<"Arbitragem"> | string
    casa3Id?: IntNullableFilter<"Arbitragem"> | number | null
    odd3?: FloatNullableFilter<"Arbitragem"> | number | null
    stake3?: FloatNullableFilter<"Arbitragem"> | number | null
    resultado3?: StringNullableFilter<"Arbitragem"> | string | null
    casa4Id?: IntNullableFilter<"Arbitragem"> | number | null
    odd4?: FloatNullableFilter<"Arbitragem"> | number | null
    stake4?: FloatNullableFilter<"Arbitragem"> | number | null
    resultado4?: StringNullableFilter<"Arbitragem"> | string | null
    valorTotalInvestir?: FloatFilter<"Arbitragem"> | number
    lucroEsperado?: FloatFilter<"Arbitragem"> | number
    status?: StringFilter<"Arbitragem"> | string
    ladoVencedor?: StringNullableFilter<"Arbitragem"> | string | null
    data?: DateTimeFilter<"Arbitragem"> | Date | string
    usuarioId?: IntFilter<"Arbitragem"> | number
  }

  export type FreebetUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: FreebetWhereUniqueInput
    update: XOR<FreebetUpdateWithoutUsuarioInput, FreebetUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FreebetCreateWithoutUsuarioInput, FreebetUncheckedCreateWithoutUsuarioInput>
  }

  export type FreebetUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: FreebetWhereUniqueInput
    data: XOR<FreebetUpdateWithoutUsuarioInput, FreebetUncheckedUpdateWithoutUsuarioInput>
  }

  export type FreebetUpdateManyWithWhereWithoutUsuarioInput = {
    where: FreebetScalarWhereInput
    data: XOR<FreebetUpdateManyMutationInput, FreebetUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type FreebetScalarWhereInput = {
    AND?: FreebetScalarWhereInput | FreebetScalarWhereInput[]
    OR?: FreebetScalarWhereInput[]
    NOT?: FreebetScalarWhereInput | FreebetScalarWhereInput[]
    id?: IntFilter<"Freebet"> | number
    casaId?: IntFilter<"Freebet"> | number
    valor?: FloatFilter<"Freebet"> | number
    tipo?: StringFilter<"Freebet"> | string
    status?: StringFilter<"Freebet"> | string
    dataObtencao?: DateTimeFilter<"Freebet"> | Date | string
    dataExpiracao?: DateTimeFilter<"Freebet"> | Date | string
    valorExtraido?: FloatNullableFilter<"Freebet"> | number | null
    estrategia?: StringNullableFilter<"Freebet"> | string | null
    usuarioId?: IntFilter<"Freebet"> | number
  }

  export type MovimentacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: MovimentacaoWhereUniqueInput
    update: XOR<MovimentacaoUpdateWithoutUsuarioInput, MovimentacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MovimentacaoCreateWithoutUsuarioInput, MovimentacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type MovimentacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: MovimentacaoWhereUniqueInput
    data: XOR<MovimentacaoUpdateWithoutUsuarioInput, MovimentacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type MovimentacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: MovimentacaoScalarWhereInput
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type MovimentacaoScalarWhereInput = {
    AND?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
    OR?: MovimentacaoScalarWhereInput[]
    NOT?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
    id?: IntFilter<"Movimentacao"> | number
    casaId?: IntFilter<"Movimentacao"> | number
    tipo?: StringFilter<"Movimentacao"> | string
    valor?: FloatFilter<"Movimentacao"> | number
    data?: DateTimeFilter<"Movimentacao"> | Date | string
    observacao?: StringNullableFilter<"Movimentacao"> | string | null
    usuarioId?: IntFilter<"Movimentacao"> | number
  }

  export type FreeSpinUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: FreeSpinWhereUniqueInput
    update: XOR<FreeSpinUpdateWithoutUsuarioInput, FreeSpinUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FreeSpinCreateWithoutUsuarioInput, FreeSpinUncheckedCreateWithoutUsuarioInput>
  }

  export type FreeSpinUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: FreeSpinWhereUniqueInput
    data: XOR<FreeSpinUpdateWithoutUsuarioInput, FreeSpinUncheckedUpdateWithoutUsuarioInput>
  }

  export type FreeSpinUpdateManyWithWhereWithoutUsuarioInput = {
    where: FreeSpinScalarWhereInput
    data: XOR<FreeSpinUpdateManyMutationInput, FreeSpinUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type FreeSpinScalarWhereInput = {
    AND?: FreeSpinScalarWhereInput | FreeSpinScalarWhereInput[]
    OR?: FreeSpinScalarWhereInput[]
    NOT?: FreeSpinScalarWhereInput | FreeSpinScalarWhereInput[]
    id?: IntFilter<"FreeSpin"> | number
    casaId?: IntFilter<"FreeSpin"> | number
    valorGanho?: FloatFilter<"FreeSpin"> | number
    data?: DateTimeFilter<"FreeSpin"> | Date | string
    usuarioId?: IntFilter<"FreeSpin"> | number
  }

  export type ArbitragemCreateWithoutCasa1Input = {
    evento: string
    esporte: string
    tipo?: string
    odd1: number
    stake1: number
    resultado1: string
    odd2: number
    stake2: number
    resultado2: string
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    casa2: CasaCreateNestedOneWithoutArbitragens2Input
    casa3?: CasaCreateNestedOneWithoutArbitragens3Input
    casa4?: CasaCreateNestedOneWithoutArbitragens4Input
    usuario: UsuarioCreateNestedOneWithoutArbitragensInput
  }

  export type ArbitragemUncheckedCreateWithoutCasa1Input = {
    id?: number
    evento: string
    esporte: string
    tipo?: string
    odd1: number
    stake1: number
    resultado1: string
    casa2Id: number
    odd2: number
    stake2: number
    resultado2: string
    casa3Id?: number | null
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    casa4Id?: number | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    usuarioId: number
  }

  export type ArbitragemCreateOrConnectWithoutCasa1Input = {
    where: ArbitragemWhereUniqueInput
    create: XOR<ArbitragemCreateWithoutCasa1Input, ArbitragemUncheckedCreateWithoutCasa1Input>
  }

  export type ArbitragemCreateManyCasa1InputEnvelope = {
    data: ArbitragemCreateManyCasa1Input | ArbitragemCreateManyCasa1Input[]
    skipDuplicates?: boolean
  }

  export type ArbitragemCreateWithoutCasa2Input = {
    evento: string
    esporte: string
    tipo?: string
    odd1: number
    stake1: number
    resultado1: string
    odd2: number
    stake2: number
    resultado2: string
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    casa1: CasaCreateNestedOneWithoutArbitragens1Input
    casa3?: CasaCreateNestedOneWithoutArbitragens3Input
    casa4?: CasaCreateNestedOneWithoutArbitragens4Input
    usuario: UsuarioCreateNestedOneWithoutArbitragensInput
  }

  export type ArbitragemUncheckedCreateWithoutCasa2Input = {
    id?: number
    evento: string
    esporte: string
    tipo?: string
    casa1Id: number
    odd1: number
    stake1: number
    resultado1: string
    odd2: number
    stake2: number
    resultado2: string
    casa3Id?: number | null
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    casa4Id?: number | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    usuarioId: number
  }

  export type ArbitragemCreateOrConnectWithoutCasa2Input = {
    where: ArbitragemWhereUniqueInput
    create: XOR<ArbitragemCreateWithoutCasa2Input, ArbitragemUncheckedCreateWithoutCasa2Input>
  }

  export type ArbitragemCreateManyCasa2InputEnvelope = {
    data: ArbitragemCreateManyCasa2Input | ArbitragemCreateManyCasa2Input[]
    skipDuplicates?: boolean
  }

  export type ArbitragemCreateWithoutCasa3Input = {
    evento: string
    esporte: string
    tipo?: string
    odd1: number
    stake1: number
    resultado1: string
    odd2: number
    stake2: number
    resultado2: string
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    casa1: CasaCreateNestedOneWithoutArbitragens1Input
    casa2: CasaCreateNestedOneWithoutArbitragens2Input
    casa4?: CasaCreateNestedOneWithoutArbitragens4Input
    usuario: UsuarioCreateNestedOneWithoutArbitragensInput
  }

  export type ArbitragemUncheckedCreateWithoutCasa3Input = {
    id?: number
    evento: string
    esporte: string
    tipo?: string
    casa1Id: number
    odd1: number
    stake1: number
    resultado1: string
    casa2Id: number
    odd2: number
    stake2: number
    resultado2: string
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    casa4Id?: number | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    usuarioId: number
  }

  export type ArbitragemCreateOrConnectWithoutCasa3Input = {
    where: ArbitragemWhereUniqueInput
    create: XOR<ArbitragemCreateWithoutCasa3Input, ArbitragemUncheckedCreateWithoutCasa3Input>
  }

  export type ArbitragemCreateManyCasa3InputEnvelope = {
    data: ArbitragemCreateManyCasa3Input | ArbitragemCreateManyCasa3Input[]
    skipDuplicates?: boolean
  }

  export type ArbitragemCreateWithoutCasa4Input = {
    evento: string
    esporte: string
    tipo?: string
    odd1: number
    stake1: number
    resultado1: string
    odd2: number
    stake2: number
    resultado2: string
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    casa1: CasaCreateNestedOneWithoutArbitragens1Input
    casa2: CasaCreateNestedOneWithoutArbitragens2Input
    casa3?: CasaCreateNestedOneWithoutArbitragens3Input
    usuario: UsuarioCreateNestedOneWithoutArbitragensInput
  }

  export type ArbitragemUncheckedCreateWithoutCasa4Input = {
    id?: number
    evento: string
    esporte: string
    tipo?: string
    casa1Id: number
    odd1: number
    stake1: number
    resultado1: string
    casa2Id: number
    odd2: number
    stake2: number
    resultado2: string
    casa3Id?: number | null
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    usuarioId: number
  }

  export type ArbitragemCreateOrConnectWithoutCasa4Input = {
    where: ArbitragemWhereUniqueInput
    create: XOR<ArbitragemCreateWithoutCasa4Input, ArbitragemUncheckedCreateWithoutCasa4Input>
  }

  export type ArbitragemCreateManyCasa4InputEnvelope = {
    data: ArbitragemCreateManyCasa4Input | ArbitragemCreateManyCasa4Input[]
    skipDuplicates?: boolean
  }

  export type FreebetCreateWithoutCasaInput = {
    valor: number
    tipo: string
    status?: string
    dataObtencao: Date | string
    dataExpiracao: Date | string
    valorExtraido?: number | null
    estrategia?: string | null
    usuario: UsuarioCreateNestedOneWithoutFreebetsInput
  }

  export type FreebetUncheckedCreateWithoutCasaInput = {
    id?: number
    valor: number
    tipo: string
    status?: string
    dataObtencao: Date | string
    dataExpiracao: Date | string
    valorExtraido?: number | null
    estrategia?: string | null
    usuarioId: number
  }

  export type FreebetCreateOrConnectWithoutCasaInput = {
    where: FreebetWhereUniqueInput
    create: XOR<FreebetCreateWithoutCasaInput, FreebetUncheckedCreateWithoutCasaInput>
  }

  export type FreebetCreateManyCasaInputEnvelope = {
    data: FreebetCreateManyCasaInput | FreebetCreateManyCasaInput[]
    skipDuplicates?: boolean
  }

  export type MovimentacaoCreateWithoutCasaInput = {
    tipo: string
    valor: number
    data?: Date | string
    observacao?: string | null
    usuario: UsuarioCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoUncheckedCreateWithoutCasaInput = {
    id?: number
    tipo: string
    valor: number
    data?: Date | string
    observacao?: string | null
    usuarioId: number
  }

  export type MovimentacaoCreateOrConnectWithoutCasaInput = {
    where: MovimentacaoWhereUniqueInput
    create: XOR<MovimentacaoCreateWithoutCasaInput, MovimentacaoUncheckedCreateWithoutCasaInput>
  }

  export type MovimentacaoCreateManyCasaInputEnvelope = {
    data: MovimentacaoCreateManyCasaInput | MovimentacaoCreateManyCasaInput[]
    skipDuplicates?: boolean
  }

  export type FreeSpinCreateWithoutCasaInput = {
    valorGanho: number
    data?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFreeSpinsInput
  }

  export type FreeSpinUncheckedCreateWithoutCasaInput = {
    id?: number
    valorGanho: number
    data?: Date | string
    usuarioId: number
  }

  export type FreeSpinCreateOrConnectWithoutCasaInput = {
    where: FreeSpinWhereUniqueInput
    create: XOR<FreeSpinCreateWithoutCasaInput, FreeSpinUncheckedCreateWithoutCasaInput>
  }

  export type FreeSpinCreateManyCasaInputEnvelope = {
    data: FreeSpinCreateManyCasaInput | FreeSpinCreateManyCasaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutCasasInput = {
    nome: string
    email: string
    senha: string
    arbitragens?: ArbitragemCreateNestedManyWithoutUsuarioInput
    freebets?: FreebetCreateNestedManyWithoutUsuarioInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutUsuarioInput
    freeSpins?: FreeSpinCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCasasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    arbitragens?: ArbitragemUncheckedCreateNestedManyWithoutUsuarioInput
    freebets?: FreebetUncheckedCreateNestedManyWithoutUsuarioInput
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutUsuarioInput
    freeSpins?: FreeSpinUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCasasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCasasInput, UsuarioUncheckedCreateWithoutCasasInput>
  }

  export type ArbitragemUpsertWithWhereUniqueWithoutCasa1Input = {
    where: ArbitragemWhereUniqueInput
    update: XOR<ArbitragemUpdateWithoutCasa1Input, ArbitragemUncheckedUpdateWithoutCasa1Input>
    create: XOR<ArbitragemCreateWithoutCasa1Input, ArbitragemUncheckedCreateWithoutCasa1Input>
  }

  export type ArbitragemUpdateWithWhereUniqueWithoutCasa1Input = {
    where: ArbitragemWhereUniqueInput
    data: XOR<ArbitragemUpdateWithoutCasa1Input, ArbitragemUncheckedUpdateWithoutCasa1Input>
  }

  export type ArbitragemUpdateManyWithWhereWithoutCasa1Input = {
    where: ArbitragemScalarWhereInput
    data: XOR<ArbitragemUpdateManyMutationInput, ArbitragemUncheckedUpdateManyWithoutCasa1Input>
  }

  export type ArbitragemUpsertWithWhereUniqueWithoutCasa2Input = {
    where: ArbitragemWhereUniqueInput
    update: XOR<ArbitragemUpdateWithoutCasa2Input, ArbitragemUncheckedUpdateWithoutCasa2Input>
    create: XOR<ArbitragemCreateWithoutCasa2Input, ArbitragemUncheckedCreateWithoutCasa2Input>
  }

  export type ArbitragemUpdateWithWhereUniqueWithoutCasa2Input = {
    where: ArbitragemWhereUniqueInput
    data: XOR<ArbitragemUpdateWithoutCasa2Input, ArbitragemUncheckedUpdateWithoutCasa2Input>
  }

  export type ArbitragemUpdateManyWithWhereWithoutCasa2Input = {
    where: ArbitragemScalarWhereInput
    data: XOR<ArbitragemUpdateManyMutationInput, ArbitragemUncheckedUpdateManyWithoutCasa2Input>
  }

  export type ArbitragemUpsertWithWhereUniqueWithoutCasa3Input = {
    where: ArbitragemWhereUniqueInput
    update: XOR<ArbitragemUpdateWithoutCasa3Input, ArbitragemUncheckedUpdateWithoutCasa3Input>
    create: XOR<ArbitragemCreateWithoutCasa3Input, ArbitragemUncheckedCreateWithoutCasa3Input>
  }

  export type ArbitragemUpdateWithWhereUniqueWithoutCasa3Input = {
    where: ArbitragemWhereUniqueInput
    data: XOR<ArbitragemUpdateWithoutCasa3Input, ArbitragemUncheckedUpdateWithoutCasa3Input>
  }

  export type ArbitragemUpdateManyWithWhereWithoutCasa3Input = {
    where: ArbitragemScalarWhereInput
    data: XOR<ArbitragemUpdateManyMutationInput, ArbitragemUncheckedUpdateManyWithoutCasa3Input>
  }

  export type ArbitragemUpsertWithWhereUniqueWithoutCasa4Input = {
    where: ArbitragemWhereUniqueInput
    update: XOR<ArbitragemUpdateWithoutCasa4Input, ArbitragemUncheckedUpdateWithoutCasa4Input>
    create: XOR<ArbitragemCreateWithoutCasa4Input, ArbitragemUncheckedCreateWithoutCasa4Input>
  }

  export type ArbitragemUpdateWithWhereUniqueWithoutCasa4Input = {
    where: ArbitragemWhereUniqueInput
    data: XOR<ArbitragemUpdateWithoutCasa4Input, ArbitragemUncheckedUpdateWithoutCasa4Input>
  }

  export type ArbitragemUpdateManyWithWhereWithoutCasa4Input = {
    where: ArbitragemScalarWhereInput
    data: XOR<ArbitragemUpdateManyMutationInput, ArbitragemUncheckedUpdateManyWithoutCasa4Input>
  }

  export type FreebetUpsertWithWhereUniqueWithoutCasaInput = {
    where: FreebetWhereUniqueInput
    update: XOR<FreebetUpdateWithoutCasaInput, FreebetUncheckedUpdateWithoutCasaInput>
    create: XOR<FreebetCreateWithoutCasaInput, FreebetUncheckedCreateWithoutCasaInput>
  }

  export type FreebetUpdateWithWhereUniqueWithoutCasaInput = {
    where: FreebetWhereUniqueInput
    data: XOR<FreebetUpdateWithoutCasaInput, FreebetUncheckedUpdateWithoutCasaInput>
  }

  export type FreebetUpdateManyWithWhereWithoutCasaInput = {
    where: FreebetScalarWhereInput
    data: XOR<FreebetUpdateManyMutationInput, FreebetUncheckedUpdateManyWithoutCasaInput>
  }

  export type MovimentacaoUpsertWithWhereUniqueWithoutCasaInput = {
    where: MovimentacaoWhereUniqueInput
    update: XOR<MovimentacaoUpdateWithoutCasaInput, MovimentacaoUncheckedUpdateWithoutCasaInput>
    create: XOR<MovimentacaoCreateWithoutCasaInput, MovimentacaoUncheckedCreateWithoutCasaInput>
  }

  export type MovimentacaoUpdateWithWhereUniqueWithoutCasaInput = {
    where: MovimentacaoWhereUniqueInput
    data: XOR<MovimentacaoUpdateWithoutCasaInput, MovimentacaoUncheckedUpdateWithoutCasaInput>
  }

  export type MovimentacaoUpdateManyWithWhereWithoutCasaInput = {
    where: MovimentacaoScalarWhereInput
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyWithoutCasaInput>
  }

  export type FreeSpinUpsertWithWhereUniqueWithoutCasaInput = {
    where: FreeSpinWhereUniqueInput
    update: XOR<FreeSpinUpdateWithoutCasaInput, FreeSpinUncheckedUpdateWithoutCasaInput>
    create: XOR<FreeSpinCreateWithoutCasaInput, FreeSpinUncheckedCreateWithoutCasaInput>
  }

  export type FreeSpinUpdateWithWhereUniqueWithoutCasaInput = {
    where: FreeSpinWhereUniqueInput
    data: XOR<FreeSpinUpdateWithoutCasaInput, FreeSpinUncheckedUpdateWithoutCasaInput>
  }

  export type FreeSpinUpdateManyWithWhereWithoutCasaInput = {
    where: FreeSpinScalarWhereInput
    data: XOR<FreeSpinUpdateManyMutationInput, FreeSpinUncheckedUpdateManyWithoutCasaInput>
  }

  export type UsuarioUpsertWithoutCasasInput = {
    update: XOR<UsuarioUpdateWithoutCasasInput, UsuarioUncheckedUpdateWithoutCasasInput>
    create: XOR<UsuarioCreateWithoutCasasInput, UsuarioUncheckedCreateWithoutCasasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCasasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCasasInput, UsuarioUncheckedUpdateWithoutCasasInput>
  }

  export type UsuarioUpdateWithoutCasasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    arbitragens?: ArbitragemUpdateManyWithoutUsuarioNestedInput
    freebets?: FreebetUpdateManyWithoutUsuarioNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutUsuarioNestedInput
    freeSpins?: FreeSpinUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCasasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    arbitragens?: ArbitragemUncheckedUpdateManyWithoutUsuarioNestedInput
    freebets?: FreebetUncheckedUpdateManyWithoutUsuarioNestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    freeSpins?: FreeSpinUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CasaCreateWithoutArbitragens1Input = {
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    arbitragens2?: ArbitragemCreateNestedManyWithoutCasa2Input
    arbitragens3?: ArbitragemCreateNestedManyWithoutCasa3Input
    arbitragens4?: ArbitragemCreateNestedManyWithoutCasa4Input
    freebets?: FreebetCreateNestedManyWithoutCasaInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinCreateNestedManyWithoutCasaInput
    usuario: UsuarioCreateNestedOneWithoutCasasInput
  }

  export type CasaUncheckedCreateWithoutArbitragens1Input = {
    id?: number
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    usuarioId: number
    arbitragens2?: ArbitragemUncheckedCreateNestedManyWithoutCasa2Input
    arbitragens3?: ArbitragemUncheckedCreateNestedManyWithoutCasa3Input
    arbitragens4?: ArbitragemUncheckedCreateNestedManyWithoutCasa4Input
    freebets?: FreebetUncheckedCreateNestedManyWithoutCasaInput
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaCreateOrConnectWithoutArbitragens1Input = {
    where: CasaWhereUniqueInput
    create: XOR<CasaCreateWithoutArbitragens1Input, CasaUncheckedCreateWithoutArbitragens1Input>
  }

  export type CasaCreateWithoutArbitragens2Input = {
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    arbitragens1?: ArbitragemCreateNestedManyWithoutCasa1Input
    arbitragens3?: ArbitragemCreateNestedManyWithoutCasa3Input
    arbitragens4?: ArbitragemCreateNestedManyWithoutCasa4Input
    freebets?: FreebetCreateNestedManyWithoutCasaInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinCreateNestedManyWithoutCasaInput
    usuario: UsuarioCreateNestedOneWithoutCasasInput
  }

  export type CasaUncheckedCreateWithoutArbitragens2Input = {
    id?: number
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    usuarioId: number
    arbitragens1?: ArbitragemUncheckedCreateNestedManyWithoutCasa1Input
    arbitragens3?: ArbitragemUncheckedCreateNestedManyWithoutCasa3Input
    arbitragens4?: ArbitragemUncheckedCreateNestedManyWithoutCasa4Input
    freebets?: FreebetUncheckedCreateNestedManyWithoutCasaInput
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaCreateOrConnectWithoutArbitragens2Input = {
    where: CasaWhereUniqueInput
    create: XOR<CasaCreateWithoutArbitragens2Input, CasaUncheckedCreateWithoutArbitragens2Input>
  }

  export type CasaCreateWithoutArbitragens3Input = {
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    arbitragens1?: ArbitragemCreateNestedManyWithoutCasa1Input
    arbitragens2?: ArbitragemCreateNestedManyWithoutCasa2Input
    arbitragens4?: ArbitragemCreateNestedManyWithoutCasa4Input
    freebets?: FreebetCreateNestedManyWithoutCasaInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinCreateNestedManyWithoutCasaInput
    usuario: UsuarioCreateNestedOneWithoutCasasInput
  }

  export type CasaUncheckedCreateWithoutArbitragens3Input = {
    id?: number
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    usuarioId: number
    arbitragens1?: ArbitragemUncheckedCreateNestedManyWithoutCasa1Input
    arbitragens2?: ArbitragemUncheckedCreateNestedManyWithoutCasa2Input
    arbitragens4?: ArbitragemUncheckedCreateNestedManyWithoutCasa4Input
    freebets?: FreebetUncheckedCreateNestedManyWithoutCasaInput
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaCreateOrConnectWithoutArbitragens3Input = {
    where: CasaWhereUniqueInput
    create: XOR<CasaCreateWithoutArbitragens3Input, CasaUncheckedCreateWithoutArbitragens3Input>
  }

  export type CasaCreateWithoutArbitragens4Input = {
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    arbitragens1?: ArbitragemCreateNestedManyWithoutCasa1Input
    arbitragens2?: ArbitragemCreateNestedManyWithoutCasa2Input
    arbitragens3?: ArbitragemCreateNestedManyWithoutCasa3Input
    freebets?: FreebetCreateNestedManyWithoutCasaInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinCreateNestedManyWithoutCasaInput
    usuario: UsuarioCreateNestedOneWithoutCasasInput
  }

  export type CasaUncheckedCreateWithoutArbitragens4Input = {
    id?: number
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    usuarioId: number
    arbitragens1?: ArbitragemUncheckedCreateNestedManyWithoutCasa1Input
    arbitragens2?: ArbitragemUncheckedCreateNestedManyWithoutCasa2Input
    arbitragens3?: ArbitragemUncheckedCreateNestedManyWithoutCasa3Input
    freebets?: FreebetUncheckedCreateNestedManyWithoutCasaInput
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaCreateOrConnectWithoutArbitragens4Input = {
    where: CasaWhereUniqueInput
    create: XOR<CasaCreateWithoutArbitragens4Input, CasaUncheckedCreateWithoutArbitragens4Input>
  }

  export type UsuarioCreateWithoutArbitragensInput = {
    nome: string
    email: string
    senha: string
    casas?: CasaCreateNestedManyWithoutUsuarioInput
    freebets?: FreebetCreateNestedManyWithoutUsuarioInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutUsuarioInput
    freeSpins?: FreeSpinCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutArbitragensInput = {
    id?: number
    nome: string
    email: string
    senha: string
    casas?: CasaUncheckedCreateNestedManyWithoutUsuarioInput
    freebets?: FreebetUncheckedCreateNestedManyWithoutUsuarioInput
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutUsuarioInput
    freeSpins?: FreeSpinUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutArbitragensInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutArbitragensInput, UsuarioUncheckedCreateWithoutArbitragensInput>
  }

  export type CasaUpsertWithoutArbitragens1Input = {
    update: XOR<CasaUpdateWithoutArbitragens1Input, CasaUncheckedUpdateWithoutArbitragens1Input>
    create: XOR<CasaCreateWithoutArbitragens1Input, CasaUncheckedCreateWithoutArbitragens1Input>
    where?: CasaWhereInput
  }

  export type CasaUpdateToOneWithWhereWithoutArbitragens1Input = {
    where?: CasaWhereInput
    data: XOR<CasaUpdateWithoutArbitragens1Input, CasaUncheckedUpdateWithoutArbitragens1Input>
  }

  export type CasaUpdateWithoutArbitragens1Input = {
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    arbitragens2?: ArbitragemUpdateManyWithoutCasa2NestedInput
    arbitragens3?: ArbitragemUpdateManyWithoutCasa3NestedInput
    arbitragens4?: ArbitragemUpdateManyWithoutCasa4NestedInput
    freebets?: FreebetUpdateManyWithoutCasaNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUpdateManyWithoutCasaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutCasasNestedInput
  }

  export type CasaUncheckedUpdateWithoutArbitragens1Input = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    arbitragens2?: ArbitragemUncheckedUpdateManyWithoutCasa2NestedInput
    arbitragens3?: ArbitragemUncheckedUpdateManyWithoutCasa3NestedInput
    arbitragens4?: ArbitragemUncheckedUpdateManyWithoutCasa4NestedInput
    freebets?: FreebetUncheckedUpdateManyWithoutCasaNestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type CasaUpsertWithoutArbitragens2Input = {
    update: XOR<CasaUpdateWithoutArbitragens2Input, CasaUncheckedUpdateWithoutArbitragens2Input>
    create: XOR<CasaCreateWithoutArbitragens2Input, CasaUncheckedCreateWithoutArbitragens2Input>
    where?: CasaWhereInput
  }

  export type CasaUpdateToOneWithWhereWithoutArbitragens2Input = {
    where?: CasaWhereInput
    data: XOR<CasaUpdateWithoutArbitragens2Input, CasaUncheckedUpdateWithoutArbitragens2Input>
  }

  export type CasaUpdateWithoutArbitragens2Input = {
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    arbitragens1?: ArbitragemUpdateManyWithoutCasa1NestedInput
    arbitragens3?: ArbitragemUpdateManyWithoutCasa3NestedInput
    arbitragens4?: ArbitragemUpdateManyWithoutCasa4NestedInput
    freebets?: FreebetUpdateManyWithoutCasaNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUpdateManyWithoutCasaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutCasasNestedInput
  }

  export type CasaUncheckedUpdateWithoutArbitragens2Input = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    arbitragens1?: ArbitragemUncheckedUpdateManyWithoutCasa1NestedInput
    arbitragens3?: ArbitragemUncheckedUpdateManyWithoutCasa3NestedInput
    arbitragens4?: ArbitragemUncheckedUpdateManyWithoutCasa4NestedInput
    freebets?: FreebetUncheckedUpdateManyWithoutCasaNestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type CasaUpsertWithoutArbitragens3Input = {
    update: XOR<CasaUpdateWithoutArbitragens3Input, CasaUncheckedUpdateWithoutArbitragens3Input>
    create: XOR<CasaCreateWithoutArbitragens3Input, CasaUncheckedCreateWithoutArbitragens3Input>
    where?: CasaWhereInput
  }

  export type CasaUpdateToOneWithWhereWithoutArbitragens3Input = {
    where?: CasaWhereInput
    data: XOR<CasaUpdateWithoutArbitragens3Input, CasaUncheckedUpdateWithoutArbitragens3Input>
  }

  export type CasaUpdateWithoutArbitragens3Input = {
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    arbitragens1?: ArbitragemUpdateManyWithoutCasa1NestedInput
    arbitragens2?: ArbitragemUpdateManyWithoutCasa2NestedInput
    arbitragens4?: ArbitragemUpdateManyWithoutCasa4NestedInput
    freebets?: FreebetUpdateManyWithoutCasaNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUpdateManyWithoutCasaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutCasasNestedInput
  }

  export type CasaUncheckedUpdateWithoutArbitragens3Input = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    arbitragens1?: ArbitragemUncheckedUpdateManyWithoutCasa1NestedInput
    arbitragens2?: ArbitragemUncheckedUpdateManyWithoutCasa2NestedInput
    arbitragens4?: ArbitragemUncheckedUpdateManyWithoutCasa4NestedInput
    freebets?: FreebetUncheckedUpdateManyWithoutCasaNestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type CasaUpsertWithoutArbitragens4Input = {
    update: XOR<CasaUpdateWithoutArbitragens4Input, CasaUncheckedUpdateWithoutArbitragens4Input>
    create: XOR<CasaCreateWithoutArbitragens4Input, CasaUncheckedCreateWithoutArbitragens4Input>
    where?: CasaWhereInput
  }

  export type CasaUpdateToOneWithWhereWithoutArbitragens4Input = {
    where?: CasaWhereInput
    data: XOR<CasaUpdateWithoutArbitragens4Input, CasaUncheckedUpdateWithoutArbitragens4Input>
  }

  export type CasaUpdateWithoutArbitragens4Input = {
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    arbitragens1?: ArbitragemUpdateManyWithoutCasa1NestedInput
    arbitragens2?: ArbitragemUpdateManyWithoutCasa2NestedInput
    arbitragens3?: ArbitragemUpdateManyWithoutCasa3NestedInput
    freebets?: FreebetUpdateManyWithoutCasaNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUpdateManyWithoutCasaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutCasasNestedInput
  }

  export type CasaUncheckedUpdateWithoutArbitragens4Input = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    arbitragens1?: ArbitragemUncheckedUpdateManyWithoutCasa1NestedInput
    arbitragens2?: ArbitragemUncheckedUpdateManyWithoutCasa2NestedInput
    arbitragens3?: ArbitragemUncheckedUpdateManyWithoutCasa3NestedInput
    freebets?: FreebetUncheckedUpdateManyWithoutCasaNestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type UsuarioUpsertWithoutArbitragensInput = {
    update: XOR<UsuarioUpdateWithoutArbitragensInput, UsuarioUncheckedUpdateWithoutArbitragensInput>
    create: XOR<UsuarioCreateWithoutArbitragensInput, UsuarioUncheckedCreateWithoutArbitragensInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutArbitragensInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutArbitragensInput, UsuarioUncheckedUpdateWithoutArbitragensInput>
  }

  export type UsuarioUpdateWithoutArbitragensInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    casas?: CasaUpdateManyWithoutUsuarioNestedInput
    freebets?: FreebetUpdateManyWithoutUsuarioNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutUsuarioNestedInput
    freeSpins?: FreeSpinUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutArbitragensInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    casas?: CasaUncheckedUpdateManyWithoutUsuarioNestedInput
    freebets?: FreebetUncheckedUpdateManyWithoutUsuarioNestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    freeSpins?: FreeSpinUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CasaCreateWithoutFreebetsInput = {
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    arbitragens1?: ArbitragemCreateNestedManyWithoutCasa1Input
    arbitragens2?: ArbitragemCreateNestedManyWithoutCasa2Input
    arbitragens3?: ArbitragemCreateNestedManyWithoutCasa3Input
    arbitragens4?: ArbitragemCreateNestedManyWithoutCasa4Input
    movimentacoes?: MovimentacaoCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinCreateNestedManyWithoutCasaInput
    usuario: UsuarioCreateNestedOneWithoutCasasInput
  }

  export type CasaUncheckedCreateWithoutFreebetsInput = {
    id?: number
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    usuarioId: number
    arbitragens1?: ArbitragemUncheckedCreateNestedManyWithoutCasa1Input
    arbitragens2?: ArbitragemUncheckedCreateNestedManyWithoutCasa2Input
    arbitragens3?: ArbitragemUncheckedCreateNestedManyWithoutCasa3Input
    arbitragens4?: ArbitragemUncheckedCreateNestedManyWithoutCasa4Input
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaCreateOrConnectWithoutFreebetsInput = {
    where: CasaWhereUniqueInput
    create: XOR<CasaCreateWithoutFreebetsInput, CasaUncheckedCreateWithoutFreebetsInput>
  }

  export type UsuarioCreateWithoutFreebetsInput = {
    nome: string
    email: string
    senha: string
    casas?: CasaCreateNestedManyWithoutUsuarioInput
    arbitragens?: ArbitragemCreateNestedManyWithoutUsuarioInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutUsuarioInput
    freeSpins?: FreeSpinCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFreebetsInput = {
    id?: number
    nome: string
    email: string
    senha: string
    casas?: CasaUncheckedCreateNestedManyWithoutUsuarioInput
    arbitragens?: ArbitragemUncheckedCreateNestedManyWithoutUsuarioInput
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutUsuarioInput
    freeSpins?: FreeSpinUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFreebetsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFreebetsInput, UsuarioUncheckedCreateWithoutFreebetsInput>
  }

  export type CasaUpsertWithoutFreebetsInput = {
    update: XOR<CasaUpdateWithoutFreebetsInput, CasaUncheckedUpdateWithoutFreebetsInput>
    create: XOR<CasaCreateWithoutFreebetsInput, CasaUncheckedCreateWithoutFreebetsInput>
    where?: CasaWhereInput
  }

  export type CasaUpdateToOneWithWhereWithoutFreebetsInput = {
    where?: CasaWhereInput
    data: XOR<CasaUpdateWithoutFreebetsInput, CasaUncheckedUpdateWithoutFreebetsInput>
  }

  export type CasaUpdateWithoutFreebetsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    arbitragens1?: ArbitragemUpdateManyWithoutCasa1NestedInput
    arbitragens2?: ArbitragemUpdateManyWithoutCasa2NestedInput
    arbitragens3?: ArbitragemUpdateManyWithoutCasa3NestedInput
    arbitragens4?: ArbitragemUpdateManyWithoutCasa4NestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUpdateManyWithoutCasaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutCasasNestedInput
  }

  export type CasaUncheckedUpdateWithoutFreebetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    arbitragens1?: ArbitragemUncheckedUpdateManyWithoutCasa1NestedInput
    arbitragens2?: ArbitragemUncheckedUpdateManyWithoutCasa2NestedInput
    arbitragens3?: ArbitragemUncheckedUpdateManyWithoutCasa3NestedInput
    arbitragens4?: ArbitragemUncheckedUpdateManyWithoutCasa4NestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type UsuarioUpsertWithoutFreebetsInput = {
    update: XOR<UsuarioUpdateWithoutFreebetsInput, UsuarioUncheckedUpdateWithoutFreebetsInput>
    create: XOR<UsuarioCreateWithoutFreebetsInput, UsuarioUncheckedCreateWithoutFreebetsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFreebetsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFreebetsInput, UsuarioUncheckedUpdateWithoutFreebetsInput>
  }

  export type UsuarioUpdateWithoutFreebetsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    casas?: CasaUpdateManyWithoutUsuarioNestedInput
    arbitragens?: ArbitragemUpdateManyWithoutUsuarioNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutUsuarioNestedInput
    freeSpins?: FreeSpinUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFreebetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    casas?: CasaUncheckedUpdateManyWithoutUsuarioNestedInput
    arbitragens?: ArbitragemUncheckedUpdateManyWithoutUsuarioNestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    freeSpins?: FreeSpinUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CasaCreateWithoutMovimentacoesInput = {
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    arbitragens1?: ArbitragemCreateNestedManyWithoutCasa1Input
    arbitragens2?: ArbitragemCreateNestedManyWithoutCasa2Input
    arbitragens3?: ArbitragemCreateNestedManyWithoutCasa3Input
    arbitragens4?: ArbitragemCreateNestedManyWithoutCasa4Input
    freebets?: FreebetCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinCreateNestedManyWithoutCasaInput
    usuario: UsuarioCreateNestedOneWithoutCasasInput
  }

  export type CasaUncheckedCreateWithoutMovimentacoesInput = {
    id?: number
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    usuarioId: number
    arbitragens1?: ArbitragemUncheckedCreateNestedManyWithoutCasa1Input
    arbitragens2?: ArbitragemUncheckedCreateNestedManyWithoutCasa2Input
    arbitragens3?: ArbitragemUncheckedCreateNestedManyWithoutCasa3Input
    arbitragens4?: ArbitragemUncheckedCreateNestedManyWithoutCasa4Input
    freebets?: FreebetUncheckedCreateNestedManyWithoutCasaInput
    freeSpins?: FreeSpinUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaCreateOrConnectWithoutMovimentacoesInput = {
    where: CasaWhereUniqueInput
    create: XOR<CasaCreateWithoutMovimentacoesInput, CasaUncheckedCreateWithoutMovimentacoesInput>
  }

  export type UsuarioCreateWithoutMovimentacoesInput = {
    nome: string
    email: string
    senha: string
    casas?: CasaCreateNestedManyWithoutUsuarioInput
    arbitragens?: ArbitragemCreateNestedManyWithoutUsuarioInput
    freebets?: FreebetCreateNestedManyWithoutUsuarioInput
    freeSpins?: FreeSpinCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutMovimentacoesInput = {
    id?: number
    nome: string
    email: string
    senha: string
    casas?: CasaUncheckedCreateNestedManyWithoutUsuarioInput
    arbitragens?: ArbitragemUncheckedCreateNestedManyWithoutUsuarioInput
    freebets?: FreebetUncheckedCreateNestedManyWithoutUsuarioInput
    freeSpins?: FreeSpinUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutMovimentacoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMovimentacoesInput, UsuarioUncheckedCreateWithoutMovimentacoesInput>
  }

  export type CasaUpsertWithoutMovimentacoesInput = {
    update: XOR<CasaUpdateWithoutMovimentacoesInput, CasaUncheckedUpdateWithoutMovimentacoesInput>
    create: XOR<CasaCreateWithoutMovimentacoesInput, CasaUncheckedCreateWithoutMovimentacoesInput>
    where?: CasaWhereInput
  }

  export type CasaUpdateToOneWithWhereWithoutMovimentacoesInput = {
    where?: CasaWhereInput
    data: XOR<CasaUpdateWithoutMovimentacoesInput, CasaUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type CasaUpdateWithoutMovimentacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    arbitragens1?: ArbitragemUpdateManyWithoutCasa1NestedInput
    arbitragens2?: ArbitragemUpdateManyWithoutCasa2NestedInput
    arbitragens3?: ArbitragemUpdateManyWithoutCasa3NestedInput
    arbitragens4?: ArbitragemUpdateManyWithoutCasa4NestedInput
    freebets?: FreebetUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUpdateManyWithoutCasaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutCasasNestedInput
  }

  export type CasaUncheckedUpdateWithoutMovimentacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    arbitragens1?: ArbitragemUncheckedUpdateManyWithoutCasa1NestedInput
    arbitragens2?: ArbitragemUncheckedUpdateManyWithoutCasa2NestedInput
    arbitragens3?: ArbitragemUncheckedUpdateManyWithoutCasa3NestedInput
    arbitragens4?: ArbitragemUncheckedUpdateManyWithoutCasa4NestedInput
    freebets?: FreebetUncheckedUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type UsuarioUpsertWithoutMovimentacoesInput = {
    update: XOR<UsuarioUpdateWithoutMovimentacoesInput, UsuarioUncheckedUpdateWithoutMovimentacoesInput>
    create: XOR<UsuarioCreateWithoutMovimentacoesInput, UsuarioUncheckedCreateWithoutMovimentacoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMovimentacoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMovimentacoesInput, UsuarioUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type UsuarioUpdateWithoutMovimentacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    casas?: CasaUpdateManyWithoutUsuarioNestedInput
    arbitragens?: ArbitragemUpdateManyWithoutUsuarioNestedInput
    freebets?: FreebetUpdateManyWithoutUsuarioNestedInput
    freeSpins?: FreeSpinUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMovimentacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    casas?: CasaUncheckedUpdateManyWithoutUsuarioNestedInput
    arbitragens?: ArbitragemUncheckedUpdateManyWithoutUsuarioNestedInput
    freebets?: FreebetUncheckedUpdateManyWithoutUsuarioNestedInput
    freeSpins?: FreeSpinUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CasaCreateWithoutFreeSpinsInput = {
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    arbitragens1?: ArbitragemCreateNestedManyWithoutCasa1Input
    arbitragens2?: ArbitragemCreateNestedManyWithoutCasa2Input
    arbitragens3?: ArbitragemCreateNestedManyWithoutCasa3Input
    arbitragens4?: ArbitragemCreateNestedManyWithoutCasa4Input
    freebets?: FreebetCreateNestedManyWithoutCasaInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutCasaInput
    usuario: UsuarioCreateNestedOneWithoutCasasInput
  }

  export type CasaUncheckedCreateWithoutFreeSpinsInput = {
    id?: number
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
    usuarioId: number
    arbitragens1?: ArbitragemUncheckedCreateNestedManyWithoutCasa1Input
    arbitragens2?: ArbitragemUncheckedCreateNestedManyWithoutCasa2Input
    arbitragens3?: ArbitragemUncheckedCreateNestedManyWithoutCasa3Input
    arbitragens4?: ArbitragemUncheckedCreateNestedManyWithoutCasa4Input
    freebets?: FreebetUncheckedCreateNestedManyWithoutCasaInput
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaCreateOrConnectWithoutFreeSpinsInput = {
    where: CasaWhereUniqueInput
    create: XOR<CasaCreateWithoutFreeSpinsInput, CasaUncheckedCreateWithoutFreeSpinsInput>
  }

  export type UsuarioCreateWithoutFreeSpinsInput = {
    nome: string
    email: string
    senha: string
    casas?: CasaCreateNestedManyWithoutUsuarioInput
    arbitragens?: ArbitragemCreateNestedManyWithoutUsuarioInput
    freebets?: FreebetCreateNestedManyWithoutUsuarioInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFreeSpinsInput = {
    id?: number
    nome: string
    email: string
    senha: string
    casas?: CasaUncheckedCreateNestedManyWithoutUsuarioInput
    arbitragens?: ArbitragemUncheckedCreateNestedManyWithoutUsuarioInput
    freebets?: FreebetUncheckedCreateNestedManyWithoutUsuarioInput
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFreeSpinsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFreeSpinsInput, UsuarioUncheckedCreateWithoutFreeSpinsInput>
  }

  export type CasaUpsertWithoutFreeSpinsInput = {
    update: XOR<CasaUpdateWithoutFreeSpinsInput, CasaUncheckedUpdateWithoutFreeSpinsInput>
    create: XOR<CasaCreateWithoutFreeSpinsInput, CasaUncheckedCreateWithoutFreeSpinsInput>
    where?: CasaWhereInput
  }

  export type CasaUpdateToOneWithWhereWithoutFreeSpinsInput = {
    where?: CasaWhereInput
    data: XOR<CasaUpdateWithoutFreeSpinsInput, CasaUncheckedUpdateWithoutFreeSpinsInput>
  }

  export type CasaUpdateWithoutFreeSpinsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    arbitragens1?: ArbitragemUpdateManyWithoutCasa1NestedInput
    arbitragens2?: ArbitragemUpdateManyWithoutCasa2NestedInput
    arbitragens3?: ArbitragemUpdateManyWithoutCasa3NestedInput
    arbitragens4?: ArbitragemUpdateManyWithoutCasa4NestedInput
    freebets?: FreebetUpdateManyWithoutCasaNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutCasaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutCasasNestedInput
  }

  export type CasaUncheckedUpdateWithoutFreeSpinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    arbitragens1?: ArbitragemUncheckedUpdateManyWithoutCasa1NestedInput
    arbitragens2?: ArbitragemUncheckedUpdateManyWithoutCasa2NestedInput
    arbitragens3?: ArbitragemUncheckedUpdateManyWithoutCasa3NestedInput
    arbitragens4?: ArbitragemUncheckedUpdateManyWithoutCasa4NestedInput
    freebets?: FreebetUncheckedUpdateManyWithoutCasaNestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type UsuarioUpsertWithoutFreeSpinsInput = {
    update: XOR<UsuarioUpdateWithoutFreeSpinsInput, UsuarioUncheckedUpdateWithoutFreeSpinsInput>
    create: XOR<UsuarioCreateWithoutFreeSpinsInput, UsuarioUncheckedCreateWithoutFreeSpinsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFreeSpinsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFreeSpinsInput, UsuarioUncheckedUpdateWithoutFreeSpinsInput>
  }

  export type UsuarioUpdateWithoutFreeSpinsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    casas?: CasaUpdateManyWithoutUsuarioNestedInput
    arbitragens?: ArbitragemUpdateManyWithoutUsuarioNestedInput
    freebets?: FreebetUpdateManyWithoutUsuarioNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFreeSpinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    casas?: CasaUncheckedUpdateManyWithoutUsuarioNestedInput
    arbitragens?: ArbitragemUncheckedUpdateManyWithoutUsuarioNestedInput
    freebets?: FreebetUncheckedUpdateManyWithoutUsuarioNestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CasaCreateManyUsuarioInput = {
    id?: number
    nome: string
    pais: string
    licenca?: string | null
    avaliacao?: number | null
    status?: string
    bonusBoasVindas?: string | null
    bonusRecarga?: string | null
    tempoSaque?: string | null
    metodosPagamento?: string | null
    telefone?: string | null
    email?: string | null
    site?: string | null
    observacoes?: string | null
  }

  export type ArbitragemCreateManyUsuarioInput = {
    id?: number
    evento: string
    esporte: string
    tipo?: string
    casa1Id: number
    odd1: number
    stake1: number
    resultado1: string
    casa2Id: number
    odd2: number
    stake2: number
    resultado2: string
    casa3Id?: number | null
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    casa4Id?: number | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
  }

  export type FreebetCreateManyUsuarioInput = {
    id?: number
    casaId: number
    valor: number
    tipo: string
    status?: string
    dataObtencao: Date | string
    dataExpiracao: Date | string
    valorExtraido?: number | null
    estrategia?: string | null
  }

  export type MovimentacaoCreateManyUsuarioInput = {
    id?: number
    casaId: number
    tipo: string
    valor: number
    data?: Date | string
    observacao?: string | null
  }

  export type FreeSpinCreateManyUsuarioInput = {
    id?: number
    casaId: number
    valorGanho: number
    data?: Date | string
  }

  export type CasaUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    arbitragens1?: ArbitragemUpdateManyWithoutCasa1NestedInput
    arbitragens2?: ArbitragemUpdateManyWithoutCasa2NestedInput
    arbitragens3?: ArbitragemUpdateManyWithoutCasa3NestedInput
    arbitragens4?: ArbitragemUpdateManyWithoutCasa4NestedInput
    freebets?: FreebetUpdateManyWithoutCasaNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUpdateManyWithoutCasaNestedInput
  }

  export type CasaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    arbitragens1?: ArbitragemUncheckedUpdateManyWithoutCasa1NestedInput
    arbitragens2?: ArbitragemUncheckedUpdateManyWithoutCasa2NestedInput
    arbitragens3?: ArbitragemUncheckedUpdateManyWithoutCasa3NestedInput
    arbitragens4?: ArbitragemUncheckedUpdateManyWithoutCasa4NestedInput
    freebets?: FreebetUncheckedUpdateManyWithoutCasaNestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutCasaNestedInput
    freeSpins?: FreeSpinUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type CasaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    licenca?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    bonusBoasVindas?: NullableStringFieldUpdateOperationsInput | string | null
    bonusRecarga?: NullableStringFieldUpdateOperationsInput | string | null
    tempoSaque?: NullableStringFieldUpdateOperationsInput | string | null
    metodosPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArbitragemUpdateWithoutUsuarioInput = {
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    casa1?: CasaUpdateOneRequiredWithoutArbitragens1NestedInput
    casa2?: CasaUpdateOneRequiredWithoutArbitragens2NestedInput
    casa3?: CasaUpdateOneWithoutArbitragens3NestedInput
    casa4?: CasaUpdateOneWithoutArbitragens4NestedInput
  }

  export type ArbitragemUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    casa1Id?: IntFieldUpdateOperationsInput | number
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    casa2Id?: IntFieldUpdateOperationsInput | number
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    casa3Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    casa4Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArbitragemUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    casa1Id?: IntFieldUpdateOperationsInput | number
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    casa2Id?: IntFieldUpdateOperationsInput | number
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    casa3Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    casa4Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreebetUpdateWithoutUsuarioInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataObtencao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpiracao?: DateTimeFieldUpdateOperationsInput | Date | string
    valorExtraido?: NullableFloatFieldUpdateOperationsInput | number | null
    estrategia?: NullableStringFieldUpdateOperationsInput | string | null
    casa?: CasaUpdateOneRequiredWithoutFreebetsNestedInput
  }

  export type FreebetUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataObtencao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpiracao?: DateTimeFieldUpdateOperationsInput | Date | string
    valorExtraido?: NullableFloatFieldUpdateOperationsInput | number | null
    estrategia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FreebetUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataObtencao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpiracao?: DateTimeFieldUpdateOperationsInput | Date | string
    valorExtraido?: NullableFloatFieldUpdateOperationsInput | number | null
    estrategia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoUpdateWithoutUsuarioInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    casa?: CasaUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FreeSpinUpdateWithoutUsuarioInput = {
    valorGanho?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    casa?: CasaUpdateOneRequiredWithoutFreeSpinsNestedInput
  }

  export type FreeSpinUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    valorGanho?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreeSpinUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    valorGanho?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArbitragemCreateManyCasa1Input = {
    id?: number
    evento: string
    esporte: string
    tipo?: string
    odd1: number
    stake1: number
    resultado1: string
    casa2Id: number
    odd2: number
    stake2: number
    resultado2: string
    casa3Id?: number | null
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    casa4Id?: number | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    usuarioId: number
  }

  export type ArbitragemCreateManyCasa2Input = {
    id?: number
    evento: string
    esporte: string
    tipo?: string
    casa1Id: number
    odd1: number
    stake1: number
    resultado1: string
    odd2: number
    stake2: number
    resultado2: string
    casa3Id?: number | null
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    casa4Id?: number | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    usuarioId: number
  }

  export type ArbitragemCreateManyCasa3Input = {
    id?: number
    evento: string
    esporte: string
    tipo?: string
    casa1Id: number
    odd1: number
    stake1: number
    resultado1: string
    casa2Id: number
    odd2: number
    stake2: number
    resultado2: string
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    casa4Id?: number | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    usuarioId: number
  }

  export type ArbitragemCreateManyCasa4Input = {
    id?: number
    evento: string
    esporte: string
    tipo?: string
    casa1Id: number
    odd1: number
    stake1: number
    resultado1: string
    casa2Id: number
    odd2: number
    stake2: number
    resultado2: string
    casa3Id?: number | null
    odd3?: number | null
    stake3?: number | null
    resultado3?: string | null
    odd4?: number | null
    stake4?: number | null
    resultado4?: string | null
    valorTotalInvestir: number
    lucroEsperado: number
    status?: string
    ladoVencedor?: string | null
    data?: Date | string
    usuarioId: number
  }

  export type FreebetCreateManyCasaInput = {
    id?: number
    valor: number
    tipo: string
    status?: string
    dataObtencao: Date | string
    dataExpiracao: Date | string
    valorExtraido?: number | null
    estrategia?: string | null
    usuarioId: number
  }

  export type MovimentacaoCreateManyCasaInput = {
    id?: number
    tipo: string
    valor: number
    data?: Date | string
    observacao?: string | null
    usuarioId: number
  }

  export type FreeSpinCreateManyCasaInput = {
    id?: number
    valorGanho: number
    data?: Date | string
    usuarioId: number
  }

  export type ArbitragemUpdateWithoutCasa1Input = {
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    casa2?: CasaUpdateOneRequiredWithoutArbitragens2NestedInput
    casa3?: CasaUpdateOneWithoutArbitragens3NestedInput
    casa4?: CasaUpdateOneWithoutArbitragens4NestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutArbitragensNestedInput
  }

  export type ArbitragemUncheckedUpdateWithoutCasa1Input = {
    id?: IntFieldUpdateOperationsInput | number
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    casa2Id?: IntFieldUpdateOperationsInput | number
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    casa3Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    casa4Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ArbitragemUncheckedUpdateManyWithoutCasa1Input = {
    id?: IntFieldUpdateOperationsInput | number
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    casa2Id?: IntFieldUpdateOperationsInput | number
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    casa3Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    casa4Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ArbitragemUpdateWithoutCasa2Input = {
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    casa1?: CasaUpdateOneRequiredWithoutArbitragens1NestedInput
    casa3?: CasaUpdateOneWithoutArbitragens3NestedInput
    casa4?: CasaUpdateOneWithoutArbitragens4NestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutArbitragensNestedInput
  }

  export type ArbitragemUncheckedUpdateWithoutCasa2Input = {
    id?: IntFieldUpdateOperationsInput | number
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    casa1Id?: IntFieldUpdateOperationsInput | number
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    casa3Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    casa4Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ArbitragemUncheckedUpdateManyWithoutCasa2Input = {
    id?: IntFieldUpdateOperationsInput | number
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    casa1Id?: IntFieldUpdateOperationsInput | number
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    casa3Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    casa4Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ArbitragemUpdateWithoutCasa3Input = {
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    casa1?: CasaUpdateOneRequiredWithoutArbitragens1NestedInput
    casa2?: CasaUpdateOneRequiredWithoutArbitragens2NestedInput
    casa4?: CasaUpdateOneWithoutArbitragens4NestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutArbitragensNestedInput
  }

  export type ArbitragemUncheckedUpdateWithoutCasa3Input = {
    id?: IntFieldUpdateOperationsInput | number
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    casa1Id?: IntFieldUpdateOperationsInput | number
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    casa2Id?: IntFieldUpdateOperationsInput | number
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    casa4Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ArbitragemUncheckedUpdateManyWithoutCasa3Input = {
    id?: IntFieldUpdateOperationsInput | number
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    casa1Id?: IntFieldUpdateOperationsInput | number
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    casa2Id?: IntFieldUpdateOperationsInput | number
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    casa4Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ArbitragemUpdateWithoutCasa4Input = {
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    casa1?: CasaUpdateOneRequiredWithoutArbitragens1NestedInput
    casa2?: CasaUpdateOneRequiredWithoutArbitragens2NestedInput
    casa3?: CasaUpdateOneWithoutArbitragens3NestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutArbitragensNestedInput
  }

  export type ArbitragemUncheckedUpdateWithoutCasa4Input = {
    id?: IntFieldUpdateOperationsInput | number
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    casa1Id?: IntFieldUpdateOperationsInput | number
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    casa2Id?: IntFieldUpdateOperationsInput | number
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    casa3Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ArbitragemUncheckedUpdateManyWithoutCasa4Input = {
    id?: IntFieldUpdateOperationsInput | number
    evento?: StringFieldUpdateOperationsInput | string
    esporte?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    casa1Id?: IntFieldUpdateOperationsInput | number
    odd1?: FloatFieldUpdateOperationsInput | number
    stake1?: FloatFieldUpdateOperationsInput | number
    resultado1?: StringFieldUpdateOperationsInput | string
    casa2Id?: IntFieldUpdateOperationsInput | number
    odd2?: FloatFieldUpdateOperationsInput | number
    stake2?: FloatFieldUpdateOperationsInput | number
    resultado2?: StringFieldUpdateOperationsInput | string
    casa3Id?: NullableIntFieldUpdateOperationsInput | number | null
    odd3?: NullableFloatFieldUpdateOperationsInput | number | null
    stake3?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado3?: NullableStringFieldUpdateOperationsInput | string | null
    odd4?: NullableFloatFieldUpdateOperationsInput | number | null
    stake4?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado4?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalInvestir?: FloatFieldUpdateOperationsInput | number
    lucroEsperado?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ladoVencedor?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type FreebetUpdateWithoutCasaInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataObtencao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpiracao?: DateTimeFieldUpdateOperationsInput | Date | string
    valorExtraido?: NullableFloatFieldUpdateOperationsInput | number | null
    estrategia?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutFreebetsNestedInput
  }

  export type FreebetUncheckedUpdateWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataObtencao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpiracao?: DateTimeFieldUpdateOperationsInput | Date | string
    valorExtraido?: NullableFloatFieldUpdateOperationsInput | number | null
    estrategia?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type FreebetUncheckedUpdateManyWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataObtencao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpiracao?: DateTimeFieldUpdateOperationsInput | Date | string
    valorExtraido?: NullableFloatFieldUpdateOperationsInput | number | null
    estrategia?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type MovimentacaoUpdateWithoutCasaInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoUncheckedUpdateWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type MovimentacaoUncheckedUpdateManyWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type FreeSpinUpdateWithoutCasaInput = {
    valorGanho?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFreeSpinsNestedInput
  }

  export type FreeSpinUncheckedUpdateWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorGanho?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type FreeSpinUncheckedUpdateManyWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorGanho?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}