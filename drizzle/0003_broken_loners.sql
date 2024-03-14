CREATE TABLE IF NOT EXISTS "dependencies" (
	"task_id" serial NOT NULL,
	"dependency_id" serial NOT NULL,
	CONSTRAINT "dependencies_task_id_dependency_id_pk" PRIMARY KEY("task_id","dependency_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dependencies" ADD CONSTRAINT "dependencies_task_id_tasks_id_fk" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dependencies" ADD CONSTRAINT "dependencies_dependency_id_tasks_id_fk" FOREIGN KEY ("dependency_id") REFERENCES "tasks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
