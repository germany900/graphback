/**
 * 1:1 relationship directive
 */
export interface OneToOne {
  field?: string
}

/**
 * 1:m relation directive
 */
export interface OneToMany {
  field?: string
}

/**
 * n:m relation directive
 */
export interface ManyToMany {
  tablename?: string
}

/**
 * All relation directive definitions
 */
export interface Directive {
  OneToOne?: OneToOne
  OneToMany?: OneToMany
  ManyToMany?: ManyToMany
}

export interface Value {
  // tslint:disable-next-line: no-reserved-keywords
  type: string
  isArray: boolean
  isNull: boolean
  isType: boolean
}

export interface Argument {
  name: string
  value: Value
}

/**
 * Field context of parsed GraphQL type
 */
export interface Field {
  name: string
  // tslint:disable-next-line
  type: string
  isArray: boolean
  isType: boolean
  isNull: boolean
  directives: Directive
  hasDirectives: boolean
  // tslint:disable-next-line: no-banned-terms
  arguments?: Argument[]
}

/**
 * Schema and resolver config
 * paginate - create pagination
 * rest describe crud methods
 */
export interface Config {
  create?: boolean
  update?: boolean
  //tslint:disable-next-line
  delete?: boolean
  find?: boolean
  findAll?: boolean
  subCreate?: boolean
  subUpdate?: boolean
  subDelete?: boolean
  paginate?: boolean
  disableGen?: boolean
}

/**
 * Context type returned from InputTypeVisitor
 */
export interface Type {
  name: string
  fields: Field[]
  config: Config
}