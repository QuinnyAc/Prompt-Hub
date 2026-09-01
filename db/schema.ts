import {
  index,
  integer,
  real,
  sqliteTable,
  text,
  uniqueIndex,
} from 'drizzle-orm/sqlite-core';

export const modelCatalog = sqliteTable(
  'model_catalog',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    maker: text('maker').notNull(),
    category: text('category').notNull(),
    status: text('status').notNull().default('active'),
    contextWindow: integer('context_window'),
    sourceUrl: text('source_url').notNull(),
    verifiedAt: text('verified_at').notNull(),
    createdAt: text('created_at').notNull(),
    updatedAt: text('updated_at').notNull(),
  },
  (table) => [
    uniqueIndex('idx_model_catalog_slug').on(table.slug),
    index('idx_model_catalog_status_maker').on(table.status, table.maker),
  ],
);

export const rankingSources = sqliteTable(
  'ranking_sources',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    sourceUrl: text('source_url').notNull(),
    grade: text('grade').notNull(),
    enabled: integer('enabled', { mode: 'boolean' }).notNull().default(true),
    lastCheckedAt: text('last_checked_at'),
    lastSuccessAt: text('last_success_at'),
  },
  (table) => [uniqueIndex('idx_ranking_sources_slug').on(table.slug)],
);

export const rankingSnapshots = sqliteTable(
  'ranking_snapshots',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    sourceId: integer('source_id')
      .notNull()
      .references(() => rankingSources.id),
    modelSlug: text('model_slug').notNull(),
    category: text('category').notNull(),
    rank: integer('rank').notNull(),
    score: real('score').notNull(),
    lowerBound: real('lower_bound'),
    upperBound: real('upper_bound'),
    capturedAt: text('captured_at').notNull(),
    sourceVersion: text('source_version'),
  },
  (table) => [
    index('idx_ranking_snapshot_category_time').on(
      table.category,
      table.capturedAt,
    ),
    index('idx_ranking_snapshot_model_time').on(
      table.modelSlug,
      table.capturedAt,
    ),
  ],
);

export const contentUpdates = sqliteTable(
  'content_updates',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    type: text('type').notNull(),
    title: text('title').notNull(),
    detail: text('detail').notNull(),
    sourceUrl: text('source_url'),
    sourceGrade: text('source_grade').notNull(),
    reviewStatus: text('review_status').notNull().default('pending'),
    publishedAt: text('published_at'),
    createdAt: text('created_at').notNull(),
  },
  (table) => [
    index('idx_content_updates_status_created').on(
      table.reviewStatus,
      table.createdAt,
    ),
  ],
);
