import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/mock-data";

export function BlogGrid({ limit }: { limit?: number }) {
  const list = limit ? blogPosts.slice(0, limit) : blogPosts;
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((post) => (
        <article key={post.id} className="card flex flex-col overflow-hidden">
          <div className="flex h-32 items-center justify-center bg-gradient-to-br from-brand-100 to-brand-200 font-display text-3xl text-brand-500/50 dark:from-brand-800 dark:to-brand-900 dark:text-gold-300/40">
            ٱ
          </div>
          <div className="flex flex-1 flex-col gap-2 p-5">
            <p className="flex items-center gap-1.5 text-xs text-brand-400 dark:text-brand-500">
              <CalendarDays size={12} />
              {new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <h3 className="font-display text-base font-semibold leading-snug text-brand-800 dark:text-cream-50">
              {post.title}
            </h3>
            <p className="text-sm text-brand-500 dark:text-brand-300">{post.excerpt}</p>
            <div className="mt-auto flex items-center justify-between pt-3">
              <span className="text-xs text-brand-400 dark:text-brand-500">By {post.author}</span>
              <Link
                href={`/blogs#${post.slug}`}
                className="flex items-center gap-1 text-xs font-semibold text-brand-700 hover:text-gold-600 dark:text-gold-300"
              >
                Read More <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
