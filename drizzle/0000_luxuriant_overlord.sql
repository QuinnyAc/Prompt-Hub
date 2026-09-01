CREATE TABLE `content_updates` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`type` text NOT NULL,
	`title` text NOT NULL,
	`detail` text NOT NULL,
	`source_url` text,
	`source_grade` text NOT NULL,
	`review_status` text DEFAULT 'pending' NOT NULL,
	`published_at` text,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_content_updates_status_created` ON `content_updates` (`review_status`,`created_at`);--> statement-breakpoint
CREATE TABLE `model_catalog` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`name` text NOT NULL,
	`maker` text NOT NULL,
	`category` text NOT NULL,
	`status` text DEFAULT 'active' NOT NULL,
	`context_window` integer,
	`source_url` text NOT NULL,
	`verified_at` text NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_model_catalog_slug` ON `model_catalog` (`slug`);--> statement-breakpoint
CREATE INDEX `idx_model_catalog_status_maker` ON `model_catalog` (`status`,`maker`);--> statement-breakpoint
CREATE TABLE `ranking_snapshots` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`source_id` integer NOT NULL,
	`model_slug` text NOT NULL,
	`category` text NOT NULL,
	`rank` integer NOT NULL,
	`score` real NOT NULL,
	`lower_bound` real,
	`upper_bound` real,
	`captured_at` text NOT NULL,
	`source_version` text,
	FOREIGN KEY (`source_id`) REFERENCES `ranking_sources`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `idx_ranking_snapshot_category_time` ON `ranking_snapshots` (`category`,`captured_at`);--> statement-breakpoint
CREATE INDEX `idx_ranking_snapshot_model_time` ON `ranking_snapshots` (`model_slug`,`captured_at`);--> statement-breakpoint
CREATE TABLE `ranking_sources` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`name` text NOT NULL,
	`source_url` text NOT NULL,
	`grade` text NOT NULL,
	`enabled` integer DEFAULT true NOT NULL,
	`last_checked_at` text,
	`last_success_at` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_ranking_sources_slug` ON `ranking_sources` (`slug`);--> statement-breakpoint
PRAGMA optimize;
