/**
 * Type declarations for Sanity Studio schema definitions.
 * This provides full IDE intellisense and TypeScript type-checking for Sanity
 * schema files (defineType, defineField, defineArrayMember, Rule) without requiring
 * the heavy sanity npm package to be installed in the front-end application.
 */

declare module 'sanity' {
  export interface Rule {
    required: () => Rule;
    max: (max: number) => Rule;
    min: (min: number) => Rule;
    length?: (exactLength: number) => Rule;
    email?: () => Rule;
    uri?: (options?: Record<string, unknown>) => Rule;
    positive?: () => Rule;
    negative?: () => Rule;
    integer?: () => Rule;
    precision?: (limit: number) => Rule;
    custom?: (fn: (value: unknown, context?: unknown) => unknown) => Rule;
    error?: (message: string) => Rule;
    warning?: (message: string) => Rule;
    [key: string]: unknown;
  }

  export type ValidationBuilder = (rule: Rule) => Rule | unknown;

  export interface SchemaFieldOptions {
    source?: string;
    maxLength?: number;
    hotspot?: boolean;
    layout?: string;
    list?: Array<{ title: string; value: string }>;
    [key: string]: unknown;
  }

  export interface SchemaField {
    name: string;
    title?: string;
    type: string;
    description?: string;
    placeholder?: string;
    rows?: number;
    initialValue?: unknown;
    options?: SchemaFieldOptions;
    validation?: ValidationBuilder;
    fields?: SchemaField[];
    of?: Array<Record<string, unknown> | ArrayMemberDefinition>;
    to?: Record<string, unknown> | Array<Record<string, unknown>>;
    [key: string]: unknown;
  }

  export interface SchemaPreview {
    select?: Record<string, string>;
    prepare?: (selection: Record<string, unknown>) => Record<string, unknown>;
    [key: string]: unknown;
  }

  export interface ArrayMemberDefinition {
    type: string;
    name?: string;
    title?: string;
    options?: Record<string, unknown>;
    fields?: SchemaField[];
    styles?: Array<{ title: string; value: string }>;
    lists?: Array<{ title: string; value: string }>;
    marks?: Record<string, unknown>;
    validation?: ValidationBuilder;
    initialValue?: unknown;
    [key: string]: unknown;
  }

  export interface SchemaTypeDefinition {
    name?: string;
    title?: string;
    type: string;
    fields?: SchemaField[];
    preview?: SchemaPreview;
    of?: ArrayMemberDefinition[];
    styles?: Array<{ title: string; value: string }>;
    lists?: Array<{ title: string; value: string }>;
    marks?: Record<string, unknown>;
    options?: Record<string, unknown>;
    [key: string]: unknown;
  }

  export function defineType<T extends SchemaTypeDefinition>(schema: T): T;
  export function defineField<T extends SchemaField>(field: T): T;
  export function defineArrayMember<T extends ArrayMemberDefinition>(member: T): T;
}
