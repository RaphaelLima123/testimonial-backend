-- CreateTable
CREATE TABLE "testimonials" (
    "id" TEXT NOT NULL,
    "testimonal" TEXT NOT NULL,
    "authorId" TEXT,

    CONSTRAINT "testimonials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "authors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
