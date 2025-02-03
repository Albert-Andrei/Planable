import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {Array.from({ length: 30 }).map((_, index) => (
        <div key={index} className="space-y-3">
          <Skeleton className="h-[200px] w-full rounded-lg bg-secondary-5" />
          <div className="flex justify-center items-center">
            <Skeleton className="h-4 w-[60%] bg-secondary-5" />
          </div>
        </div>
      ))}
    </div>
  );
}
